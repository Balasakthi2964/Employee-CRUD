# Employee Management System

A simple Employee Management System built with React.js that allows users to create, view, search, update, and delete employee records.

## 🚀 Features

* Add new employees
* Display employee details in a table
* Search employees by name
* Filter employees by department
* Edit employee details
* Delete employees with confirmation
* Form validation
* Controlled form inputs
* Employee data persistence using Local Storage
* Responsive and simple user interface

## 🛠️ Technologies Used

* React.js
* JavaScript
* HTML
* CSS
* Vite
* React Context API
* Browser Local Storage

## 📂 Project Structure

src/
├── components/
│   ├── EmpForm.jsx
│   ├── EmpSearch.jsx
│   ├── EmpTable.jsx
│   └── Modal.jsx
│
├── App.jsx
├── main.jsx
└── ...


## ⚙️ Getting Started

### 1. Clone the repository


git clone <https://github.com/Balasakthi2964/Employee-CRUD>


### 2. Navigate to the project


cd <Employee-CRUD>


### 3. Install dependencies


npm install


### 4. Start the development server


npm run dev


The application will then be available at the local development URL shown in your terminal.

## 💡 How It Works

The application manages employee data using React state and the **Context API**.

The main application contains:

* Employee Form – Used to add and update employee information.
* Employee Search – Allows employees to be searched by name and department.
* Employee Table – Displays the employee records and provides edit/delete actions.
* Confirmation Modal – Confirms an employee deletion before removing the record.

Employee data is stored in Local Storage, allowing the data to remain available even after refreshing the browser.

## 🔄 CRUD Operations

| Operation | Description                           |
| --------- | ------------------------------------- |
| Create    | Add a new employee                    |
| Read      | Display employees in the table        |
| Update    | Edit existing employee details        |
| Delete    | Remove an employee after confirmation |


## 🎯 Future Improvements

* Backend integration with a database
* User authentication
* Pagination
* Deployment to a hosting platform

## 👨‍💻 Author

Balasakthi M

Built as a React.js CRUD project to practice component-based architecture, state management, Context API, and CRUD operations.
