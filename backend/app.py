from fastapi import FastAPI
from pydantic import BaseModel

from risk_engine import calculate_risk
from notification import send_email

app = FastAPI(title="ChangeGuard AI")


class ChangeRequest(BaseModel):
    change_id: str
    service: str
    environment: str
    deployment_time: str
    changes: list


@app.get("/")
def health():
    return {
        "status": "ChangeGuard AI Running"
    }


@app.post("/analyze-change")
def analyze_change(change: ChangeRequest):

    result = calculate_risk(change.dict())

    send_email(
        change.change_id,
        result["risk_level"],
        result["recommendation"]
    )

    return {
        "change_id": change.change_id,
        "analysis": result
    }
