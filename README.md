# SSSAll.io - Video Downloader

A stunning multi-platform video downloader for TikTok, Instagram, Twitter/X, Facebook, and more.

## Architecture

* **Frontend:** Vanilla HTML/JS with Tailwind CSS (`index.html`). Includes PWA support via `manifest.json`.
* **Backend:** Node.js Express server (`server.js`) wrapped around `yt-dlp` to parse and extract video URLs directly.

## Running Locally

### Backend Setup:
1. Make sure you have Node.js and `yt-dlp` installed on your machine.
2. Run `npm install` to install Express and CORS.
3. Run `npm start` to start the backend on port 3000.

### Frontend Setup:
1. Open `index.html` in any web browser.
2. Paste a video URL and click Download!

## Deployment

* **Frontend:** Deploy `index.html` and `manifest.json` for free on Vercel or Netlify.
* **Backend:** Deploy `server.js` and `package.json` to Render.com or Railway.app. Ensure the build environment installs the `yt-dlp` dependency!