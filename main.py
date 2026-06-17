from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
import uvicorn
import asyncio
import pexpect
import os

app = FastAPI()

HTML = """
<!DOCTYPE html>
<html>
<head>

<meta charset="utf-8">

<link rel="stylesheet"
href="https://cdn.jsdelivr.net/npm/xterm/css/xterm.css">

<script src="https://cdn.jsdelivr.net/npm/xterm/lib/xterm.js"></script>

<style>

html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    background: #000;
}

#terminal {
    width: 100%;
    height: 100vh;
}

</style>

</head>

<body>

<div id="terminal"></div>

<script>

const term = new Terminal({
    cursorBlink: true,
    convertEol: true,
    rows: 40,
    cols: 120
});

term.open(
    document.getElementById("terminal")
);

const protocol =
    location.protocol === "https:"
        ? "wss:"
        : "ws:";

const socket = new WebSocket(
    protocol + "//" + location.host + "/terminal"
);

socket.onopen = () => {
    term.write("\\r\\nConnected\\r\\n");
};

socket.onmessage = (event) => {
    term.write(event.data);
};

socket.onclose = () => {
    term.write("\\r\\nDisconnected\\r\\n");
};

term.onData((data) => {
    socket.send(data);
});

</script>

</body>
</html>
"""


@app.get("/")
async def home():
    return HTMLResponse(HTML)


@app.websocket("/terminal")
async def terminal(websocket: WebSocket):

    await websocket.accept()

    env = os.environ.copy()
    env["TERM"] = "xterm-256color"
    child = pexpect.spawn("/bin/bash", env=env, encoding="utf-8", echo=True)
    child.setwinsize(40, 120)

    async def read_terminal():
        while True:
            try:
                data = child.read_nonblocking(size=4096, timeout=0.05)
                if data:
                    await websocket.send_text(data)

            except pexpect.TIMEOUT:
                await asyncio.sleep(0.01)
            except pexpect.EOF:
                break
            except Exception as e:
                print("Reader Error:", e)
                break

    reader_task = asyncio.create_task(read_terminal())

    try:
        while True:
            data = await websocket.receive_text()
            if data == "\\x03":
                child.sendcontrol("c")
                continue
            child.send(data)

    except WebSocketDisconnect:
        print("Client disconnected")

    finally:

        reader_task.cancel()
        try:
            child.close(force=True)
        except Exception:
            pass


if __name__ == "__main__":

    port = int(os.environ.get("PORT", "8000"))
    uvicorn.run(app, host="0.0.0.0", port=port)