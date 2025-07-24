
# 📝 Team Notes Manager – Frontend

This is the **frontend** of the Team Notes Manager application, built using **React**, **Vite**, and styled with **Bootstrap 5**. It connects to a backend API for managing team notes (CRUD operations).

---

## 🚀 Tech Stack

- React (Vite)
- Bootstrap 5
- Axios
- PropTypes

---

## 📁 Folder Structure

```
notes-frontend/
├── src/
│   ├── components/     # Reusable components (NoteForm, NoteList)
│   ├── App.jsx         # Main app logic and layout
│   ├── api.js          # API helper
│   ├── main.jsx        # Entry point
│   └── index.css       # Minimal global styles
├── index.html
└── vite.config.js
```

---

## 🔧 Features

- 📝 Add, edit, delete, and view notes
- 📋 Note listing with timestamps
- 📱 Responsive and centered layout using Bootstrap
- ✅ Prop validation using PropTypes
- 🔗 Connects to a RESTful backend API

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/team-notes-manager.git
cd team-notes-manager/notes-frontend
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Connect to Backend

Update the backend URL in `src/api.js`:

```js
const API = "http://localhost:5000"; // or your deployed backend URL
```

(Optional) Use environment variables with Vite:

1. Create `.env`:

```env
VITE_API_BASE_URL=http://localhost:5000
```

2. Update `api.js`:

```js
const API = import.meta.env.VITE_API_BASE_URL;
```

---

### 4. Run the Dev Server

```bash
npm run dev
```

App will be available at: [http://localhost:5173](http://localhost:5173)

---

## 📦 Build for Production

```bash
npm run build
```

Then deploy the contents of the `dist/` folder using Vercel, Netlify, etc.

---

## 🧠 Notes

- Minimal styling using Bootstrap for layout and responsiveness
- Clean code with separation of concerns (API, components, validation)
- Can be easily extended with routing, authentication, etc.

---