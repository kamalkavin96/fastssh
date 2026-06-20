from fastapi import FastAPI, Request
from fastapi.responses import Response
import httpx

app = FastAPI()

TARGET = "http://localhost:8080"

@app.api_route("/{path:path}",
               methods=["GET", "POST", "PUT", "DELETE", "PATCH"])
async def proxy(request: Request, path: str):

    url = f"{TARGET}/{path}"

    async with httpx.AsyncClient() as client:
        resp = await client.request(
            request.method,
            url,
            headers=dict(request.headers),
            content=await request.body(),
        )

    return Response(
        content=resp.content,
        status_code=resp.status_code,
        headers=dict(resp.headers),
    )