# 🛡️ Cyber Security System: SQL Injection Detection & Prevention 🚫💻

Welcome to the **Cyber Security System: SQL Injection Detection & Prevention**, a web-based application designed to **demonstrate, detect, and mitigate SQL Injection attacks** in real-time. This project is ideal for security researchers, students, and developers looking to understand vulnerabilities and implement practical defenses in web applications. 🧠🔐

---

## 📌 Features Included

⚠️ **SQL Injection Demonstration Panel**:  
Simulate common SQL Injection attacks on a controlled platform to understand exploitation techniques.

🧪 **Vulnerability Scanner**:  
Scans form fields and URL parameters to identify SQL injection-prone endpoints.

🛡 **Real-Time Detection**:  
Implements pattern-matching and heuristic analysis to detect suspicious input behavior dynamically.

🔒 **Secure Query Execution**:  
Demonstrates safe coding practices using parameterized queries and ORM-based queries.

🧰 **Code Analyzer Tool**:  
Analyzes source code for unsafe SQL execution patterns and recommends remediations.

📈 **Activity Logger**:  
Logs attack attempts with IP address, timestamp, attack type, and user agent for audit trail.

🎓 **Educational Modules**:  
Interactive guides to teach different types of SQL injections (Boolean-based, Time-based, Error-based, etc.).

📲 **Responsive Interface**:  
Built with HTML, CSS, and JavaScript for an intuitive and responsive user experience.

---

## 🛠 Tools & Technologies Used

- **HTML, CSS, JavaScript** 🧑‍💻
- **XAMPP** for local PHP + MySQL hosting ⚙️
- **MySQL Database** 🗄️
- **Firebase** (optional authentication & logging) 🔥
- **PHP** for backend processing 🐘
- **Regular Expressions & Filters** for input validation 🧹

---

## 🧪 How It Works

1. The user accesses the platform and chooses between attack simulation or secure testing.
2. Inputs are analyzed in real time for known SQLi patterns (like `' OR 1=1 --`).
3. If an attack is detected, the system logs the attempt and blocks the request.
4. Secure queries are executed using prepared statements and bound parameters.
5. Optional: Attack results and risk levels are visualized on an admin dashboard.

---

## 🧰 Modules Breakdown

📁 `/vulnerable/` – Contains intentionally unsafe pages for learning purpose  
📁 `/secure/` – Contains pages implemented using best practices  
📁 `/scanner/` – Automated SQLi vulnerability checker  
📁 `/logs/` – Logs of attempted SQLi attacks  
📁 `/docs/` – Full technical documentation and user manual

---

## 📄 Documentation

You can find all technical references in the **Documentation/** folder:

- ✅ SQL Injection Types and Examples  
- 🛡️ Prevention Strategies and Code Snippets  
- 📊 Architecture Diagrams  
- 🔍 Log Format Specification  
- 📁 Setup Instructions  

---

## 🔍 Real-World Impact of SQL Injection

🚨 **Notable Incidents**:

1. **Heartland Payment Systems (2008)**: Hackers used SQL injection to steal 130 million credit card numbers. 💳  
2. **Sony Pictures (2011)**: SQLi vulnerabilities allowed hackers to breach servers and leak sensitive data. 🧾  
3. **TalkTalk UK (2015)**: Over 150,000 customer records stolen due to poor SQL sanitization. 📉  

🧠 These examples highlight the devastating potential of SQL Injection — making education and prevention **critical**.

---

## ✅ How to Run the Project

```bash
git clone https://github.com/your-username/Cyber-Security-System-SQL-Injection.git
cd Cyber-Security-System-SQL-Injection
```

1. Launch XAMPP and start **Apache** and **MySQL**.
2. Import `database.sql` into phpMyAdmin.
3. Open `index.html` or `dashboard.php` in the browser.
4. Explore the modules, simulate attacks, and view live detections.

---

# Result
## Main Login Page
![main](https://github.com/user-attachments/assets/6a3c03a4-c03c-41f1-80bd-dc0b0d93ad79)

## Success Login using secure credentials
![logged1](https://github.com/user-attachments/assets/a690ecd8-a2ce-4381-947c-60913abac9b2)

## Success Login using insecure Login Credentials
![logged2](https://github.com/user-attachments/assets/89f7cab0-7b64-410b-bdfa-a9e2072063c8)

## ❤️ Feedback & Contributions

We welcome feedback, bug reports, and pull requests!  
If you’ve enhanced a detection technique or added a new type of SQLi scenario, feel free to contribute.

---

## 🔐 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 🚨 Why This Project Matters

💬 SQL Injection remains one of the **most prevalent and dangerous** web application vulnerabilities today.  
With this project, we aim to:

- Raise awareness on safe coding practices 🚧  
- Provide educational tools for aspiring ethical hackers 👨‍🎓  
- Build a foundation for integrating real-time security monitoring systems 📡  

🔐 Learn the threats. Defend against them. Stay secure.
