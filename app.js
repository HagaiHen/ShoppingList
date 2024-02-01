import express from 'express'
import { getAllCategories, getCategory, getProductsByCategory, createProduct, getAllOrders, createOrder } from './database.js'

const app = express()

app.use(express.json())

// Middleware to handle CORS headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Route to get all categories
app.get("/categories", async (req, res) => {
    const categories = await getAllCategories()
    res.send(categories)
})

// Route to get a specific category by ID
app.get("/categories/:id", async (req, res) => {
    const id = req.params.id
    const category = await getCategory(id)
    res.send(category)
})

// Route to get products by category ID
app.get("/products/:id", async (req, res) => {
    const id = req.params.id
    const category = await getProductsByCategory(id)
    res.send(category)
})

// Route to create a new product
app.post("/products", async (req, res) => {
    const { title, category_id } = req.body
    const product = await createProduct(title, category_id)
    res.status(201).send(product)
})

// Route to get all orders
app.get("/orders", async (req, res) => {
    const categories = await getAllOrders()
    res.send(categories)
})

// Route to create a new order
app.post("/order", async (req, res) => {
    var { _name, address, email, details } = req.body
    details = JSON.stringify(details);
    const order = await createOrder(_name, address, email, details)
    res.status(201).send(order)
})

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("error");
})

// Start the server on port 8080
app.listen(8080, () => {
    console.log("server is running on port 8080")
})