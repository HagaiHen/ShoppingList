# Shopping List Backend

Backend server for the Shopping List application.

## Getting Started

To set up the backend server, follow these steps.

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

### Installation

Clone the repository:

```
git clone https://github.com/your-username/shopping-list-backend.git
```

Install dependencies:

```
npm install
```
#### Configuration
Create a .env file in the root directory and configure the MySQL database connection:

```
DB_HOST=localhost
DB_USER=your-mysql-username
DB_PASSWORD=your-mysql-password
DB_DATABASE=shopping_list
DB_PORT=3306
```

### Usage
Run the server:

```
npm run dev
```

The server will be accessible at http://localhost:8080.

## API Endpoints
GET /categories: Get all categories.
GET /categories/:id: Get a specific category by ID.
GET /products/:id: Get products by category ID.
POST /products: Create a new product.
GET /orders: Get all orders.
POST /order: Create a new order.
