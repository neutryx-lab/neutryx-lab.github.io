# Neutryx Lab

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fneutryx-lab.github.io)](https://neutryx-lab.github.io)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Official website for Neutryx Lab — a research initiative advancing derivative pricing and stochastic modelling through machine learning and computational science.

🌐 **Live Site**: [https://www.neutryx.tech/index.html](https://www.neutryx.tech/index.html)

---

## 📋 Overview

Neutryx Lab is a two-layer initiative focused on next-generation financial modelling:

- **Neutryx-Core** — Open-source numerical engine for derivative pricing, risk analysis, and XVA calculations
- **Neutryx-AI** — Confidential learning-based module (under IP review with UCL Business Ltd)

This repository contains the source code for the Neutryx Lab website, built with vanilla HTML, CSS, and JavaScript for optimal performance and simplicity.

---

## 🚀 Features

- **Responsive Design** — Mobile-first approach supporting all screen sizes
- **Interactive Demo** — Live API integration for derivative pricing demonstrations
- **Clean UI** — Modern, accessible interface with consistent design system
- **Fast Loading** — No external dependencies, pure HTML/CSS/JS
- **SEO Optimized** — Proper meta tags and semantic HTML structure

---

## 📁 Project Structure

```text
neutryx-lab.github.io/
├── index.html          # Homepage
├── core.html           # Neutryx-Core page with interactive demo
├── ai.html             # Neutryx-AI IP statement page
├── about.html          # About page
├── assets/
│   └── logo.png        # Neutryx Lab logo
└── README.md           # This file
```

---

## 🛠️ Development

### Prerequisites

No build tools required! This is a static website that can be edited with any text editor.

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/neutryx-lab/neutryx-lab.github.io.git
cd neutryx-lab.github.io
```

2. Open in your preferred editor:

```bash
code .  # VS Code
# or simply open the HTML files in your browser
```

3. Serve locally (optional):

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

4. Open `http://localhost:8000` in your browser

### Making Changes

- Edit HTML files directly for content updates
- CSS is embedded in `<style>` tags within each HTML file
- JavaScript is embedded in `<script>` tags (see [core.html](core.html) for demo logic)

---

## 🎨 Design System

### Color Palette

```css
--fg: #111          /* Primary text */
--fg2: #444         /* Secondary text */
--bg: #f9f9fb       /* Background */
--pri: #0a66c2      /* Primary brand color */
--border: #e4e6ef   /* Border color */
```

### Responsive Breakpoints

- Mobile: `≤ 480px`
- Tablet: `481px - 768px`
- Desktop: `≥ 769px`

---

## 📄 Pages

### Homepage ([index.html](index.html))

Main landing page introducing Neutryx-Core and Neutryx-AI with navigation to detailed pages.

### Core Demo ([core.html](core.html))

Interactive demonstration of Neutryx-Core capabilities:

- Configurable API endpoints
- Real-time derivative pricing calculations
- Support for vanilla options and interest rate swaps
- Visual feedback and latency metrics

### AI Statement ([ai.html](ai.html))

IP disclosure statement for Neutryx-AI module, explaining confidentiality requirements during patent review.

### About ([about.html](about.html))

Information about Neutryx Lab's mission, collaboration opportunities, and contact details.

---

## 🔗 Links

- **GitHub Organization**: [github.com/neutryx-lab](https://github.com/neutryx-lab)
- **Neutryx-Core Repository**: [github.com/neutryx-lab/neutryx-core](https://github.com/neutryx-lab/neutryx-core)
- **Contact**: [GitHub Issues](https://github.com/neutryx-lab/neutryx-lab.github.io/issues)

---

## 📝 License

This website is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🏛️ Affiliation

### University College London (UCL)

Neutryx Lab operates as a research initiative within UCL, with intellectual property review managed by UCL Business Ltd (UCLB).

---

## 📧 Contact

For collaboration enquiries, technical questions, or general information:

GitHub Issues: [neutryx-lab.github.io/issues](https://github.com/neutryx-lab/neutryx-lab.github.io/issues)

---

© 2025 Neutryx Lab · University College London
