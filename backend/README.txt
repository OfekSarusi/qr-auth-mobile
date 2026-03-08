Unixi Mobile Assignment – Mock API

Run with Docker:

docker build -t unixi-mock-api .
docker run --rm -p 8080:8080 unixi-mock-api

Test endpoints:

Health:
GET http://localhost:8080/health

Resolve QR:
POST http://localhost:8080/qr/resolve
{
  "qr_token": "qr_demo_1"
}

Validate password:
POST http://localhost:8080/auth/validate
{
  "user_id": "u_1001",
  "password": "unixi123"
}