CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE,
    username VARCHAR(50) UNIQUE,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    hash VARCHAR(255)
)

CREATE TABLE images (
    img_id SERIAL PRIMARY KEY,
    img_file VARCHAR(255)
)

CREATE TABLE foods (
    food_id SERIAL PRIMARY KEY,
    food_name VARCHAR(255),
    percent INT,
    user_id INT REFERENCES users(user_id),
    img_id INT REFERENCES images(img_id)
)