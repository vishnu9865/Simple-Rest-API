# Simple-Rest-API
A simple REST API uisng Express and MongoDB for strengthening my skills as part of my Project Based Learning Process

| Action | HTTP method | End Point | Response |Description |
|--------|--------|-----------|-------------|------|
| CREATE a customer | POST | /api/customer | 201 (CREATED) | Save a new customer into database. |
| READ all customers | GET | /api/customer | 200 (OK) | fetch all customers from database. |
| READ a customer | GET | /api/customer/{id} | 200(OK) | Fetch specific customer from database. |
| UPDATE a customer | PATCH | /api/customer/{id} | 200 (OK) | Update existing user from database. |
| DELETE a customer | DELETE | /api/customer/{id} | 204(NO CONTENT) | Delete a specific customer from database. |