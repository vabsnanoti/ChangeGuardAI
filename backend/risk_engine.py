from sample_data import historical_incidents


def calculate_risk(change):

    risk_score = 0
    factors = []

    if change["environment"] == "production":
        risk_score += 20
        factors.append("Production deployment")

    if "Friday" in change["deployment_time"]:
        risk_score += 20
        factors.append("Weekend deployment risk")

    if "database migration" in str(change["changes"]):
        risk_score += 25
        factors.append("Database migration")

    for incident in historical_incidents:

        if incident["service"] == change["service"]:
            risk_score += 10
            factors.append("Historical incident history")

    if risk_score >= 70:
        risk_level = "HIGH"
        recommendation = "DELAY DEPLOYMENT"

    elif risk_score >= 40:
        risk_level = "MEDIUM"
        recommendation = "DEPLOY WITH MONITORING"

    else:
        risk_level = "LOW"
        recommendation = "SAFE TO DEPLOY"

    return {
        "risk_score": risk_score,
        "risk_level": risk_level,
        "recommendation": recommendation,
        "factors": factors,
        "blast_radius": [
            "payment-service",
            "checkout-service",
            "billing-service"
        ]
    }
