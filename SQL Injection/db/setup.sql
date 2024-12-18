
CREATE DATABASE IF NOT EXISTS sql_injection_demo;


USE sql_injection_demo;


CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (username, password) VALUES 
('admin', 'password123'),   
('user', 'userpass');       

SELECT * FROM users;
