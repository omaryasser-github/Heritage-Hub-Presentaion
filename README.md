# Heritage Hub — Graduation Presentation Landing Page

Welcome to the graduation presentation landing page website for **Heritage Hub** — a bilingual, highly-resilient mobile platform designed for discovering and exploring Egyptian cultural heritage.

This website serves as a highly polished **digital museum-grade presentation portal** engineered for university examiners (**AASTMT Alexandria, 2026**). It showcases the core architectural designs, delivered MVP features, live demo walking-paths, and the student engineering team behind the project.

---

## 🏛️ Project Details

* **Institution:** Arab Academy for Science, Technology and Maritime Transport (AASTMT)
* **College:** College of Computing & Information Technology (CCIT) — Alexandria, Egypt
* **Academic Year:** 2025 – 2026
* **Scope:** 6 Students, 2 Academic Supervisors
* **Architecture:** 3-Tier Multi-Module full-stack infrastructure (React Native Expo, NestJS Gateway, Python FastAPI, PostgreSQL Relational Database, and managed Object Storage).

---

## 🚀 Quick Start (Local Development)

This landing page is built as a static Single Page Application (SPA) utilizing **React 19**, **Vite 6**, and **Tailwind CSS v4**.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Dev Server
```bash
npm run dev
```
The dev server will boot and be accessible at `http://localhost:3000`.

### 3. Lint & Type-Check
```bash
npm run lint
```

### 4. Build for Production (Static Export)
```bash
npm run build
```
This compiles the application and outputs optimized static HTML/CSS/JS bundles inside the `/dist` directory. This directory can be uploaded directly to **GitHub Pages, Netlify, Vercel**, or any static host with **zero database/backend dependencies**.

---

## 🎨 Design System (Modern-Tactile / Museum-Digital)

The visual system is styled strictly according to `DESIGN (3).md`:
* **Background/Surface:** Warm off-white papyrus `#fcf9f8` (decreases eye strain, conveys manuscript feel).
* **Primary Gold:** Gradient `#D4AF37` to `#B8860B` representing sand-gold and royal monuments.
* **Secondary Burnt Umber:** Deep earthy brown `#74584a` for high-contrast headers.
* **Typography:** Classic serif **Libre Caslon Text** for storytelling headlines paired with high-legibility **Work Sans** for UI/Body copy.

---

## 📂 Customization & Swapping Assets

The codebase is engineered to let the team easily swap out texts, images, walkthrough recordings, and download codes without editing complex layout components.

### 1. Editing Text Content (Bilingual EN/AR)
All display strings, keypoints, and team titles are housed inside:
👉 `src/content.ts`

Open this file to customize:
* Student names and supervisor credentials.
* Feature list categories, descriptions, or roadmap targets.
* Diagram details, chatbot step-by-step simulations, and guide tasks.
* Translated strings for both English (`englishContent`) and Arabic (`arabicContent`).

### 2. Replacing Photography and Mockups
The current build uses premium generated assets matching our palette. To replace them with real screenshots of your React Native client:
* **Hero Background Banner:** Overwrite `/src/assets/images/hero_egypt_sunset_1782398079787.jpg` or modify the `src` attribute inside `src/components/Hero.tsx`.
* **Mobile App Screenshot (3:4 ratio):** Overwrite `/src/assets/images/app_mockup_discover_1782398098417.jpg` or modify the path in `src/components/Solution.tsx`.

### 3. Uploading Your Walkthrough Video
To add your 90-second mobile screen walkthrough recording:
* Render your final MP4 video and place it inside `/src/assets/videos/walkthrough.mp4`.
* Update `src/components/Demo.tsx` to mount a native HTML `<video>` element pointing to this file, replacing the simulated interactive video console if desired.

### 4. Swapping Download Links and QR Codes
* To change the QR code link target, update the `renderQrCode` seeds or add direct hyperlinks.
* Locate and replace the placeholder download anchors `#android-apk-download` and `#ios-testflight-access` in `src/components/Demo.tsx` with your real binary package URLs (e.g., hosted APK downloads or TestFlight share invites).

---

## 🇪🇬 Defense Day Best Practices

1. **Host Statically:** Deploy to a fast, reliable, short-URL static service (such as Netlify or Vercel).
2. **Offline Backup:** Always keep a local copy of `/dist` compiled on your computer. If the examiner venue Wi-Fi is unresponsive, you can double-click `index.html` (or run a local server) and present offline with 100% features intact.
3. **Toggle Arabic First:** Be ready to demonstrate the dynamic RTL flip — it instantly commands professional authority on how the engineering team respected the local user experience.
