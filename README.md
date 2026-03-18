# 🧪 CypressAutoQA

A web automation testing framework built with **Cypress** and **JavaScript**, designed to demonstrate end-to-end UI test automation best practices.

---

## 🛠️ Tech Stack

| Tool | Version |
|------|---------|
| [Cypress](https://www.cypress.io/) | ^13.8.0 |
| [cypress-xpath](https://github.com/cypress-io/cypress-xpath) | ^2.0.1 |
| JavaScript | ES6+ |
| Node.js | 18+ |

---

## 📁 Project Structure

```
CypressAutoQA/
├── cypress/
│   ├── e2e/              # Test spec files
│   ├── fixtures/         # Test data (JSON files)
│   ├── pages/            # Page Object Models (if applicable)
│   └── support/
│       ├── commands.js   # Custom Cypress commands
│       └── e2e.js        # Global hooks and configurations
├── cypress.config.js     # Cypress configuration
├── package.json          # Project dependencies
└── README.md
```

---

## ✅ Features

- End-to-end UI test automation using Cypress
- XPath locator support via `cypress-xpath` plugin
- Page Object Model (POM) design pattern
- Custom commands for reusable actions
- Fixture-based test data management
- Cross-browser test execution support

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- npm (comes with Node.js)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hemanthke96/CypressAutoQA.git
cd CypressAutoQA
```

### 2. Install dependencies

```bash
npm install
```

### 3. Open Cypress Test Runner (Interactive Mode)

```bash
npx cypress open
```

### 4. Run tests in Headless Mode

```bash
npx cypress run
```

### 5. Run a specific test file

```bash
npx cypress run --spec "cypress/e2e/your-test-file.cy.js"
```

---

## 🌐 Application Under Test

This framework tests web-based applications covering scenarios such as:
- User login and authentication flows
- Form validations
- UI element interactions
- Navigation and page transitions

---

## 📊 Test Reports

Cypress generates built-in test results in the terminal. For enhanced HTML reporting, [Mochawesome](https://github.com/adamgruber/mochawesome) can be integrated.

---

## 🤝 Author

**Hemanth Kumar Eadalada**
- 🔗 [LinkedIn](https://www.linkedin.com/in/hemanthke96/)
- 🐙 [GitHub](https://github.com/hemanthke96)

---

## 📄 License

This project is for learning and demonstration purposes.
