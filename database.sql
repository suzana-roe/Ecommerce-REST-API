CREATE DATABASE ecommerce_database;

--\c into user_database

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(35)
);