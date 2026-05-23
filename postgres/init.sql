CREATE TABLE incidents (
    id SERIAL PRIMARY KEY,
    service_name VARCHAR(100),
    incident VARCHAR(500),
    severity VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE changes (
    id SERIAL PRIMARY KEY,
    change_id VARCHAR(100),
    service_name VARCHAR(100),
    environment VARCHAR(50),
    deployment_time VARCHAR(100),
    risk_score INTEGER,
    recommendation VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
