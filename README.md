# 🎬 Netflix Clone - Streaming Web App

This is a full-featured **Netflix Clone** built with **React** and **Firebase**, providing a seamless video streaming experience. Users can sign up, log in, browse movie categories, and view trailers — all in a responsive and visually appealing UI.

---

## 🔧 Tech Stack

- **Frontend**: React, React Router, Tailwind CSS
- **Authentication**: Firebase Authentication
- **Database & Hosting**: Firebase Firestore & Firebase Hosting
- **Media Data**: TMDB (The Movie Database) API

---

## ⚙️ Features

- 🔐 User Sign Up / Login / Logout (Firebase Auth)
- 🏠 Home Page with Hero Banner and Movie Categories
- 🎞️ Watch Trailers and Movie Details
- ⭐ Save Favorites (for logged-in users)
- 📱 Responsive design for all devices

---

## 🚀 Getting Started

To run the project locally:

```bash
git clone https://github.com/astha1204/netflix-clone.git
cd netflix-clone
npm install

Now create a .env file in the root directory and add your Firebase and TMDB credentials:
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
VITE_TMDB_API_KEY=your_tmdb_api_key

npm run dev
Visit the app at:
📍 http://localhost:5173

💡 Future Enhancements
🔎 Add search functionality
📺 Continue watching/resume playback
🌓 Dark/light theme toggle
👥 Profile management for multiple users
🎯 Genre filter and recommendation engine

