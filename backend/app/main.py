from fastapi import FastAPI

from app.routes import health

app = FastAPI(title="Job Search OS API")

app.include_router(health.router)
