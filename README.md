# Be My Valentine? 💘

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

An interactive, playful Valentine's Day webpage designed to surprise your special someone. Built with modern web technologies, it features smooth animations, responsive design, and a cheeky "No" button that refuses to be clicked.

---

## ✨ Features

- **Interactive UI**:
  - **"Yes" Button**: Triggers a joyful celebration screen with custom messages.
  - **"No" Button**: Playfully evades the cursor using a physics-inspired constraint system (Desktop only).
- **Visual Effects**:
  - **Floating Hearts**: A bubbling heart particle system activates on success.
  - **Glassmorphism**: Modern, frosted-glass card design.
  - **Typography**: Uses *DynaPuff* for a fun, bubbly aesthetic and *Inter* for clean UI elements.
- **Mobile Responsive**:
  - Optimized layout for mobile devices.
  - "No" button is gracefully disabled on smaller screens to ensure a good user experience.

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: CSS3 (Variables, Keyframes, Flexbox/Grid)
- **Deployment**: GitHub Actions (CI/CD)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ayesha.git
   cd ayesha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   The output will be in the `dist` folder.

## 📂 Project Structure

```
ayesha/
├── .github/
│   └── workflows/
│       └── deploy.yml   # CI/CD for GitHub Pages
├── public/              # Static assets
├── src/
│   ├── assets/
│   ├── App.jsx          # Main application logic
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles & keyframes
├── index.html           # HTML template
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration
```

## 🚢 Deployment

This project is configured for automated deployment to **GitHub Pages**.

1. Push your changes to the `main` branch.
2. The GitHub Action defined in `.github/workflows/deploy.yml` will automatically build the project.
3. The build artifacts (`dist/`) will be deployed to the `gh-pages` branch.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
