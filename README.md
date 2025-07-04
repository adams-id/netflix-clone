# 🎬 Netflix Clone

A full-stack movie streaming web app inspired by Netflix. Built with React, Node.js, MongoDB, and The Movie Database (TMDb) API.

![Demo Screenshot](/frontend/public/screenshot-for-readme.png)

---

## 🚀 Project Overview

This Netflix Clone is a feature-rich streaming app that allows users to browse, search, and watch trailers for movies and TV shows. It includes secure authentication, responsive design, and integrates with the TMDb API for real-time content.

## 📌 Live Demo

🔗 View the Live App Here
(Replace with your actual deployment link)

---

## 🔧 Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **API Integration:** TMDb (The Movie Database)

---

## ✨ Key Features

- 🔐 User Authentication (JWT)
- 🎬 Browse Movies & TV Shows
- 🔎 Search by Title or Actor
- 📽️ Watch Trailers
- 🔁 View Similar Titles
- 🕵️ Fetch Search History
- 📱 Fully Responsive UI
- 🌐 Deployed & Live
- 💎 Clean, Modern Landing Page

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/adams-id/netflix-clone.git
cd netflix-clone
```

### 2. Install Dependencies

# In the root directory

```bash
npm install
```

# Then install frontend dependencies

```bash
cd frontend
npm install
cd ..
```

### 3. ⚙️ Environment Variables

Create a .env file in the root of your project and add the following:

```bash
PORT=5000
MONGO_URI=your_mongo_connection_string
NODE_ENV=development
JWT_SECRET=your_jwt_secret
TMDB_API_KEY=your_tmdb_api_key
```

Replace each your\_\* value with your actual credentials.

---

## 🚀 Running the App

### 1. Build the Frontend

If you’re serving the frontend through your Node server:

```bash
cd frontend
npm run build
cd ..
```

This builds the static frontend files for production.

### 2. Start the Backend Server

From the project root:

```bash
npm start
```

The backend app will be live at http://localhost:5000

---

### 🧠 Future Improvements

- User profiles and watchlists
- Continue watching progress
- Native video streaming
- Pagination and infinite scroll
- Unit and integration tests

---

### 🙌 Acknowledgements

- TMDb API()
- Netflix for UI/UX inspiration
