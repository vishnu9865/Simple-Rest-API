# Simple-Rest-API
A simple REST API uisng Express and MongoDB for strengthening my skills as part of my Project Based Learning Process


| Action | HTTP method | End Point | Response |Description |
|--------|--------|-----------|-------------|------|
| READ all customers | GET | /api/customers | 200 (OK) | fetch all customers from database. |
| READ a customer | GET | /api/customers/{id} | 200(OK) | Fetch specific customer from database. |
| CREATE a customer | POST | /api/customers | 201 (CREATED) | Save a new customer into database. |
| UPDATE a customer | PUT | /api/customer/{id} | 200 (OK) | Update existing user from database. |
| DELETE a customer | DELETE | /api/customer/{id} | 204(NO CONTENT) | Delete a specific customer from database.