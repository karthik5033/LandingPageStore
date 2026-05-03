# Landing Page Store

A premium, curated storefront for ultra-high-end landing page templates. Built with Next.js, Framer Motion, and Tailwind CSS, this project showcases landing pages that feature cinematic, scroll-synced image sequences for an immersive "Apple-like" scroll experience.

## ✨ Features

- **Scroll-Synced Video Sequences**: Uses a custom-built HTML5 Canvas engine to perfectly sync high-resolution image frames to the user's scroll position, creating buttery-smooth background video effects.
- **Categorized Template Gallery**: A beautiful glassmorphism storefront that organizes templates by brand aesthetic (e.g., Chocolate Series, Coffee Series, Performance Series).
- **Premium Aesthetics**: Every template is meticulously crafted with high-end typography (Google Fonts like Playfair Display, Cormorant Garamond), custom color palettes, and cinematic gradients.
- **High-DPI Support**: The canvas engine dynamically scales to the user's `devicePixelRatio` to ensure 4K-ready crispness on retina displays.
- **Fully Responsive**: Adapts seamlessly from desktop to mobile screens while maintaining visual integrity.

## 🚀 Templates Included

- **Template 01: AURA (Coffee Series)** - Warm, sophisticated coffee branding.
- **Template 02: VOLT.OS (Performance Series)** - Cyberpunk, high-octane neon aesthetics.
- **Template 03: VELVET (Chocolate Series)** - Dark, editorial artisan chocolate.
- **Template 04: NOIR (Chocolate Series)** - Deep, untamed dark luxury.
- **Template 05: OBSIDIAN (Chocolate Series)** - 100% pure cacao, uncompromising premium feel.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Engine**: Custom React Hooks (`useScroll`, `useSpring`) + HTML5 `<canvas>`

## 💻 Getting Started

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd Landing-Page-Store
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **View the storefront:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Deployment

This project is fully optimized and **Deploy-Ready for Vercel**. 

Simply push to GitHub and import the repository into your Vercel dashboard. The application is entirely statically generated and will run blazingly fast on the Edge network.

## 📁 How to Add a New Template

1. Export your video as a sequence of high-quality `.png` or `.jpg` frames.
2. Place the extracted frames in a new directory inside `/public/` (e.g., `/public/template6-frames/`).
3. Create your custom React components and assemble them in `src/app/template6/page.tsx`.
4. Add the `<ScrollSequence />` component to your page, pointing it to your new folder:
   ```tsx
   <ScrollSequence
     folderPath="/template6-frames"
     frameCount={150}
     fileNamePrefix="frame-"
     fileExtension="png"
     padLength={3}
   />
   ```
5. Register the new template in `src/app/page.tsx` under the appropriate category.

## 📜 License

Created by Antigravity Systems. All Rights Reserved.
