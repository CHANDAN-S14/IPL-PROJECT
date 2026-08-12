# 🏏 IPL Web Application

A modern and responsive Indian Premier League (IPL) web application built using React, JavaScript, HTML, and CSS.

The project provides an interactive interface for exploring IPL-related information such as teams, players, matches, and match details.

## 🌐 Live Demo

🔗 https://ipl-project-rho.vercel.app/

---
💡 What I Learned

React.js
JSX
JavaScript ES6+
React components
Props and state
CSS responsive design
UI/UX implementation
Page navigation
Project structure
Vercel deployment
------

🔮 Future Improvements

 Live match scores
 IPL points table
 Complete match schedule
 Player statistics
 Team statistics
 Player search
 Team search
 Match filtering
 Player profile pages
 Dark mode
 Live score updates
 Advanced statistics
 Improved animations
------
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
------
## ✨ Features

- 🏏 IPL-focused web interface
- 👥 Team information
- 🧑‍🏏 Player information
- 📋 Match details
- 🏆 Team-wise information
- 🔍 Easy navigation
- 📱 Responsive design
- 💻 Mobile, tablet, and desktop support
- 🎨 Modern and clean user interface
- ⚡ React component-based architecture
- 🔄 Dynamic page navigation

---

## 🛠️ Technologies Used

### Frontend

- **HTML5** – Page structure and semantic markup
- **CSS3** – Styling, layouts, animations, and responsive design
- **JavaScript (ES6+)** – Application logic and interactivity
- **React.js** – Component-based UI development

### Deployment

- **Vercel** – Hosting and deployment

---

## 🏗️ Application Architecture

```text
                    IPL Web Application
                            │
                            ▼
                     React Application
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
        Components       Pages        Navigation
             │              │              │
             └──────────────┼──────────────┘
                            │
                            ▼
                   Responsive UI
                            │
                            ▼
                         Vercel


PROJECT STRUCTURE:
IPL-Project/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
├── .gitignore
└── README.md


