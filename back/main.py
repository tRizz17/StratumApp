from fastapi import FastAPI, HTTPException
import httpx
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

FRED_API_KEY = os.getenv("FRED_API_KEY")
FRED_BASE_URL = "https://api.stlouisfed.org/fred"


@app.get("/")
async def get_releases():
        url = f"{FRED_BASE_URL}/releases"
        params = {"api_key": FRED_API_KEY, "file_type": "json"}
        async with httpx.AsyncClient() as client:
            response = await client.get(url, params=params)
        if response.status_code != 200:
            raise HTTPException(status_code=response.status_code, detail=response.text)
        return response.json()
