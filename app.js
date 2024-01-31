import express from 'express'
import { getAllCategories, getCategory, getProductsByCategory, createProduct, getAllOrders, createOrder } from './database.js'
const app = express()

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get("/categories", async (req, res) => {
    const categories = await getAllCategories()
    res.send(categories)
})

app.get("/categories/:id", async (req, res) => {
    const id = req.params.id
    const category = await getCategory(id)
    res.send(category)
})

app.get("/products/:id", async (req, res) => {
    const id = req.params.id
    const category = await getProductsByCategory(id)
    res.send(category)
})

app.post("/products", async (req, res) => {
    console.log("req ",req.body)
    const {title, category_id} = req.body
    const product = await createProduct(title, category_id)
    res.status(201).send(product)
})

app.get("/orders", async (req, res) => {
    const categories = await getAllOrders()
    res.send(categories)
})

app.post("/order", async (req, res) => {
    console.log("req order",req.body)
    var {_name, address, email, details} = req.body
    details = JSON.stringify(details);
    console.log("details", details);
    console.log("details", JSON.parse(details));
    const order = await createOrder(_name, address, email, details)
    res.status(201).send(order)
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("error");
})

app.listen(8080, () => {
    console.log("server is running on port 8080")
})