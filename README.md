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
git clone https://github.com/HagaiHen/ShoppingList
```

Install dependencies:

```
npm install
```
### Configuration
Create a .env file in the root directory and configure the MySQL database connection:

```
MYSQL_HOST='127.0.0.1'
MYSQL_USER=your-username
MYSQL_PASSWORD=your-password
MYSQL_DATABASE='shopping_list'
```

### Usage
Run the server:

```
npm run dev
```

The server will be accessible at http://localhost:8080.

## API Endpoints
#### GET /categories: Get all categories.
#### GET /categories/:id: Get a specific category by ID.
#### GET /orders: Get all orders.
#### POST /order: Create a new order.
