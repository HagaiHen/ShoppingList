CREATE DATABASE shopping_list;
USE shopping_list;

CREATE TABLE categories (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  category_id integer,
  created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE orders (
  _name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  details VARCHAR(1023) NOT NULL
);

INSERT INTO categories (title)
VALUES 
('Cleaning'),
('cheeses'),
('Vegetables and fruits'),
('Meat and Fish'),
('Pastries');