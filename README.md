# 🏬 Multi-Tenant Shop (Shared DB, Separate Schemas)

A scalable and extensible multi-tenant e-commerce API built with **Node.js**, **PostgreSQL**, and **Docker**. Each tenant (shop) has its own isolated schema within a shared database. Tenants can create and manage their own products independently, with all logic separated at the schema level.

---

## 🚀 Features

- 🧩 **Multi-Tenant Architecture (Separate Schemas)**  
  Each tenant has its own schema — no data leakage.
  
- 📦 **Product Management Per Tenant**  
  CRUD operations are isolated per schema.

- 🐘 **PostgreSQL with Raw SQL**  
  No ORM — clean, direct SQL for maximum performance and transparency.

- 🐳 **Dockerized Database**  
  Easy-to-spin-up PostgreSQL with custom database and user setup.

- ⚙️ **Environment Configurable**  
  Easily switch environments using `.env` file.

---

## 🧱 Tech Stack

| Layer       | Technology       |
|-------------|------------------|
| Backend     | Node.js + Express|
| Database    | PostgreSQL       |
| Isolation   | Separate Schemas |
| Container   | Docker           |
| Auth        | N/A (currently open endpoints for simplicity) |

---

## 📁 Project Structure

multi-tenant-shop/
│
├── db/
│ └── init.sql # Initializes tenants & schemas
│
├── routes/
│ ├── tenants.js # Create new tenants (schemas)
│ └── products.js # Insert/select products per tenant
│
├── .env # Environment configs
├── Dockerfile (optional)
├── docker-compose.yml # PostgreSQL container setup
├── server.js # Express app entry
└── README.md # This file


---

## ⚙️ Setup Instructions

### 1. 📦 Clone the repo

```bash
git clone https://github.com/BrilliantTreasure1/multi-tenant-shop.git
cd multi-tenant-shop

2. 🐳 Start PostgreSQL via Docker

docker-compose up -d

    Make sure docker-compose.yml is configured to expose the correct port and credentials.

3. 🌱 Create .env file

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_NAME=multi_tenant_shop

4. 📦 Install dependencies

npm install

5. ▶️ Run the server

node server.js

🧪 Sample API Usage
➕ Create a New Tenant

POST /tenants/create
Content-Type: application/json

{
  "name": "shop_a"
}

    Creates schema shop_a and its tables.

📤 Insert a Product

POST /products/insert
Content-Type: application/json

{
  "tenant": "shop_a",
  "name": "MacBook Pro",
  "price": 1999.99
}

📥 List Products of a Tenant

GET /products?tenant=shop_a

🛡️ Security Note

This project currently doesn't include authentication or schema-level RBAC. In production:

    🔐 Use token-based authentication.

    🔒 Apply schema-scoped access policies.

    🧵 Use connection pools per tenant or a proxy layer like PostgreSQL Row-Level Security (RLS).

🧠 Why Separate Schema?

    Better isolation than simple tenant_id column.

    Easier data export per tenant.

    Clearer boundaries in complex systems.

📜 License

MIT © 2025 Abolfazl Ganjtabesh
