# Harsh Mann — Portfolio

A modern, high-performance portfolio website built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with a focus on clean aesthetics, smooth interactions, and developer experience.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js App Router, TypeScript, and Tailwind CSS.
- **Dynamic Animations**: Unified "fade-in and slide-up" entry animations for all sections using `framer-motion`.
- **Advanced Navigation**:
  - **Scroll Spy**: Automatically highlights the active section in the viewport.
  - **Floating Pill UI**: A modern navigation indicator that slides smoothly between links.
  - **Smooth Scrolling**: Custom implementation for lag-free, instant section navigation on all devices.
- **Contact Form**: Fully functional contact form integrated with **Web3Forms** for serverless email delivery.
- **Image Optimization**: Local images with static imports for automatic blur placeholders and responsive sizing.
- **SEO Optimized**: comprehensive metadata, OpenGraph tags, and Twitter cards for better social sharing.
- **Theming**:
  - **Dark/Light Mode**: Seamless switching with system preference detection (`next-themes`).
  - **Custom Scrollbar**: A sleek, high-visibility scrollbar that adapts to the theme (Cross-browser support for Firefox & WebKit).
- **Responsive Design**: Fully responsive layout optimized for mobile, tablet, and desktop.

## 🛠️ Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [Web3Forms](https://web3forms.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## 📂 Project Structure

- `app/`: App Router pages and global layouts.
- `components/`: Reusable UI components (Hero, Navbar, Projects, Contact, etc.).
- `lib/data.ts`: Centralized data file for easy content updates (Profile, Experience, Projects, Skills).
- `public/`: Static assets.

## 🚀 Run Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/harshmann10/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open in browser:**
    Visit [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

- **Content**: Update `lib/data.ts` to change your bio, experience, projects, resume and skills without touching the UI code.
- **Theme**: The primary accent color is `indigo-600`. You can find-and-replace `indigo` in the codebase to switch to another Tailwind color (e.g., `emerald`, `rose`, `blue`).
- **Contact Form**: Get your access key from [Web3Forms](https://web3forms.com/) and update the `access_key` in `components/Contact.tsx`.
- **Metadata**: Modify `app/layout.tsx` to update the site title, description, keywords, and SEO/OpenGraph tags.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
