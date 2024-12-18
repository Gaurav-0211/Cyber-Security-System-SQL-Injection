# Cyber Security System ( SQL Injection)
This project demonstrates the concept of SQL injection attacks and how to prevent them in a web application. The purpose of this project is to educate developers and security professionals about SQL injection vulnerabilities and provide preventive measures.

## Table of Contents
* Technologies Used
* Installation
* How to Use
* Demo
* Security Prevention Techniques
* License
## Technologies Used
### Frontend:
#### HTML
#### CSS
#### JavaScript
### Backend:
#### Node.js (Express.js)
#### MySQL
### Other Tools:
#### XAMPP (for MySQL)
## How to Use
### SQL Injection Example:

Navigate to the login page (/login) or any other page with a form that interacts with the database.
Enter typical SQL injection payloads (e.g., ' OR 1=1 --) in the input fields to test the vulnerability.
The application will respond with a demonstration of the SQL injection impact.
SQL Injection Prevention:

Explore the implemented preventive measures by navigating to the secure version of the page (e.g., /secure-login), where input sanitization and prepared statements are used to prevent SQL injection.

## Security Prevention Techniques
### * Prepared Statements: The backend uses prepared statements to prevent SQL injection by binding user inputs to SQL queries in a secure manner.
### * Input Validation: User inputs are validated to ensure they match expected patterns (e.g., email addresses, passwords).
### * Escaping Special Characters: SQL queries are properly escaped to handle special characters safely.


# Result
## Main Login Page
![main](https://github.com/user-attachments/assets/6a3c03a4-c03c-41f1-80bd-dc0b0d93ad79)

## Success Login using secure credentials
![logged1](https://github.com/user-attachments/assets/a690ecd8-a2ce-4381-947c-60913abac9b2)

## Success Login using insecure Login Credentials
![logged2](https://github.com/user-attachments/assets/89f7cab0-7b64-410b-bdfa-a9e2072063c8)

## License
This project is licensed under the MIT License - see the https://www.your-demo-site.com/ file for details.
