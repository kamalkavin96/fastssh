import os
from fastapi import APIRouter
from fastapi.responses import HTMLResponse, JSONResponse
from core.config import BASE_PATH

router = APIRouter()

TEMPLATES_DIR = os.path.join(os.path.dirname(os.path.dirname(__file__)), "templates")

@router.get("/")
async def root():
    return HTMLResponse('<script>location.replace("/terminal")</script>')


@router.get("/home")
async def home():
    with open(os.path.join(TEMPLATES_DIR, "terminal.html"), "rb") as f:
        html = f.read().decode("utf-8", errors="replace")
        html = html.replace("{{{BASE_PATH}}}", BASE_PATH)
    return HTMLResponse(html)

@router.get("/ping")
async def ping():
    return JSONResponse({"message": "pong"})


@router.get("/health")
async def health():
    return JSONResponse({"status": "ok"})