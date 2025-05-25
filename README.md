# Benjamin Edlinger's Portfolio Website

![Portfolio Preview](public/android-chrome-512x512.png)

This repository contains the source code for my personal portfolio website. I've built this site to showcase my skills and projects.

## 🚀 Features

- **Modern Tech Stack**: Built with Vue 3, TypeScript, and Vite for optimal performance
- **Responsive Design**: Fully responsive interface using TailwindCSS for a seamless experience on all devices
- **PrimeVue Integration**: Leveraging PrimeVue components with a custom theme
- **GitHub Integration**: Real-time GitHub profile data and repository statistics using Octokit
- **Interactive UI**: Custom animations and interactive elements to enhance user engagement

## 🛠️ Technology Stack

- **Frontend Framework**: Vue 3 with Composition API
- **Build Tool**: Vite
- **Styling**: TailwindCSS and PrimeVue with custom theming
- **Type Safety**: TypeScript
- **API Integration**: Octokit for GitHub API
- **Icons**: Iconify
- **Code Quality**: ESLint and Prettier

## 🏗️ Project Structure

- `assets/`: Static assets and CSS
- `components/`: Reusable Vue components
- `composables/`: Composition API functions
- `services/`: API and external service integrations
- `types/`: TypeScript type definitions
- `views/`: Page components

## 🤖 GitHub Actions Workflow

This project uses GitHub Actions to automatically update the programming languages statistics displayed on the website:

### Update Top Languages Workflow

The `update-top-languages.yml` workflow fetches and calculates the most used programming languages across all my GitHub repositories.

- **Trigger Schedule**:

  - Runs weekly on Saturdays at 11:00 PM UTC
  - Runs on every push to the main branch
  - Can be manually triggered through the GitHub interface

- **Functionality**:
  - Fetches all repositories using the GitHub API
  - Calculates total bytes of code per language across all repositories
  - Generates a sorted list of languages with their respective usage percentages
  - Updates the `public/top-languages.json` file with the latest data
  - Automatically commits and pushes the changes

This automation ensures that the website always displays up-to-date information about my programming language usage without manual intervention.

## 📋 Getting Started

### Prerequisites

- Node.js (v16+)
- npm

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

### Installation

```sh
# Install dependencies
npm install

# Compile and hot-reload for development
npm run dev

# Type-check, compile and minify for production
npm run build

# Preview production build
npm run preview

# Lint with ESLint
npm run lint

# Format code with Prettier
npm run format
```

## 🔗 Connect with Me

- [LinkedIn](https://www.linkedin.com/in/bedlinger)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

© 2025 Benjamin Edlinger. All rights reserved.
