from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.responses import HTMLResponse
import uvicorn
import asyncio
import pexpect
import os

app = FastAPI()

@app.get("/")
async def home():
    with open("templates/terminal.html", "r", encoding="utf-8") as f:
        return HTMLResponse(f.read())


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