# 📊 BudgetBoard

**BudgetBoard** is a simple and intuitive web application for tracking personal finances, visualizing expenses, and managing monthly budgets. It helps users stay on top of their spending with interactive charts, category-wise breakdowns, and real-time transaction tracking.

---

## 🚀 Tech Stack

- React.js
- Tailwind CSS
- Recharts
- MongoDB
- Express.js 

---

## ✨ Features

### 🔹 Transactions Management
- Add, edit, and delete transactions (amount, date, description, category)
- Filter transactions by category, tags, or search keywords
- Infinite scroll or pagination for transaction history

### 🔹 Analytics
- Category-wise spending Pie Chart
- Monthly expenses Bar Chart
- 
### 🔹 To be implemented
- Set monthly budgets for categories
- Compare actual spending vs budgeted amount
- Visual insights on overspending and savings

---

## 📈 Charts Used

| Chart Type   | Purpose                                 |
|--------------|-----------------------------------------|
| Pie Chart    | Category-wise expenses breakdown        |
| Line Chart   | Monthly spending                        |
| Bar Chart    | Budget vs Actual                        |


## Basic Folder Structure

```plaintext
 📂 BudgetBoard - Frontend
 ┣ 📂 src
 ┃ ┣ 📂 components  # Reusable UI components
 ┃ ┣ 📂 pages       # Pages 
 ┃ ┣ 📂 utils       # Utility functions, constants and Contexts
 ┃ ┣ 📜 App.jsx     # Main App component
 ┃ ┣ 📜 main.jsx    # React root file
 ┣ 📜 .env          # Environment file
 ┣ 📜 package.json  # Dependencies & scripts
 📂 BudgetBoard - Frontend
 ┣ 📂 src
 ┃ ┣ 📂 config  # Reusable UI components
 ┃ ┣ 📂 middlewares # Middlewares
 ┃ ┣ 📂 models      # Shcema and models
 ┃ ┣ 📂 routs       # Route files
 ┃ ┣ 📂 utils       # Utility functions, constants, etc
 ┃ ┣ 📜 App.jsx     # Express server
 ┣ 📜 .env          # Environment file
 ┣ 📜 package.json  # Dependencies & scripts
```


## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/CtrlAltWin/CodersMedia.git
cd CodersMedia/frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables  

Create a `.env` file in the `Frontend/` directory and add:

```env
VITE_BACKEND_URL=http://localhost:5000
```

Create a `.env` file in the `Backend/` directory and add:

```env
PORT = 7777
DB_CONNECTION_SECRET = your mongodb connection string
JWT_SECRET = a secret key
FRONTEND_URL=http://localhost:5173
```

### 4️⃣ Start the Development Server

```bash
npm run dev (both for frontend and backend)
```

---
