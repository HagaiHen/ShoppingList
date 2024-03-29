import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()

// Create a MySQL connection
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

// Function to get all categories from the database
export async function getAllCategories() {
    const [rows] = await pool.query("select * from categories")
    return rows
}

// Function to get a specific category by ID from the database
export async function getCategory(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM categories
    WHERE id = ?
    `, [id])
    return rows
}

// Function to get a specific product by ID from the database
export async function getProduct(id) {
    const [rows] = await pool.query(`
    SELECT * 
    FROM products
    WHERE id = ?
    `, [id])
    return rows
}

// Function to get all products of a specific category from the database
export async function getProductsByCategory(category_id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM products
    WHERE category_id = ?
    `, [category_id])
    return rows
}

// Function to create a new product in the database
export async function createProduct(title, category_id) {
    const [result] = await pool.query(`
    INSERT INTO products (title, category_id)
    VALUES (?, ?)
    `, [title, category_id])
    const id = result.insertId
    return getProduct(id)
}

// Function to get all orders from the database
export async function getAllOrders() {
    const [rows] = await pool.query("select * from orders")
    return rows
}

// Function to create a new order in the database
export async function createOrder(name, address, email, details) {
    const [result] = await pool.query(`
    INSERT INTO orders (_name, address, email, details)
    VALUES (?, ?, ?, ?)
    `, [name, address, email, details])
    return result
}