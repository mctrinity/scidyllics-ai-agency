# SciDyllics AI Agency

🚀 **SciDyllics Consultants** is an AI automation and chatbot development agency specializing in AI-powered workflow automation, intelligent chatbots, and content marketing solutions.

## 🏗 Project Structure

This repository contains both the **frontend (Next.js)** and **backend (Node.js/Express or FastAPI)** for SciDyllics AI Agency.

```
scidyllics-ai-agency/
│── backend/           # Backend (Node.js/Express or FastAPI)
│   ├── src/
│   │   ├── routes/    # API routes (chatbot, contact form, etc.)
│   │   ├── models/    # Database models (if using MongoDB/PostgreSQL)
│   │   ├── server.js  # Main backend server (Express.js)
│   ├── package.json   # Backend dependencies
│   ├── .env           # Backend environment variables
│── frontend/          # Frontend (Next.js)
│   ├── src/
│   │   ├── pages/     # Next.js pages (Home, Services, Contact)
│   │   ├── components/# UI components
│   │   ├── styles/    # Tailwind styling
│   ├── package.json   # Frontend dependencies
│   ├── next.config.js # Next.js configuration
│── docker-compose.yml # (Optional) For containerized deployment
│── README.md          # Documentation for the project
│── .gitignore         # Ignore unnecessary files in Git
```

## 📦 Setup & Installation

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/yourusername/scidyllics-ai-agency.git
 cd scidyllics-ai-agency
```

### 2️⃣ Backend Setup (Node.js/Express or FastAPI)
```sh
 cd backend
 npm install  # or pip install -r requirements.txt (if using FastAPI)
 npm start    # or uvicorn main:app --reload (for FastAPI)
```

- The backend runs on **http://localhost:5000** (Express) or **http://localhost:8000** (FastAPI).
- API routes: `/api/contact`, `/api/chatbot`, etc.

### 3️⃣ Frontend Setup (Next.js)
```sh
 cd frontend
 npm install
 npm run dev
```

- The frontend runs on **http://localhost:3000**.
- It calls the backend using API requests (e.g., `fetch('/api/chatbot')`).

## 🚀 Deployment

### **Option 1: Vercel + AWS/DigitalOcean**
- Deploy **frontend** on **Vercel**.
- Deploy **backend** on **AWS, DigitalOcean, or Railway**.

### **Option 2: Docker Compose (Run Both with One Command)**
```sh
 docker-compose up --build
```

## 🔥 Features
✅ AI-Powered Automation & Chatbots  
✅ Scalable API with Node.js/FastAPI  
✅ Interactive 3D UI with Three.js  
✅ Modern Design with Tailwind CSS  

## 🤝 Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m 'Added new feature'`
4. Push the changes: `git push origin feature-branch`
5. Submit a pull request

## 📝 License
This project is licensed under the **MIT License**.

---

💡 **Need Help?** Contact us at **contact@scidyllics.com**