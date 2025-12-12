````markdown
# 🤖 PixMind: AI Chatbot

PixMind is an advanced **AI-powered chatbot** built using the **MERN Stack (MongoDB, Express, React, Node.js)**.  
It enables users to generate **text and images** through AI while managing **chats, authentication, and credits** — all in a modern, sleek UI.

---

## 🚀 Features

- 🧠 **AI Text Chat** — Intelligent responses using OpenAI/Gemini API.  
- 🖼️ **AI Image Generation** — Generate and save images using ImageKit API.  
- 🔐 **JWT Authentication** — Secure login and registration system.  
- 💳 **Credit-Based System** — Text and image generations consume credits.  
- 💬 **Chat Management** — Create, delete, and continue conversations easily.  
- 🌙 **Dark Mode Support** — Seamless UI experience for both modes.  
- ☁️ **Cloud Media Uploads** — ImageKit integration for cloud storage.  

---

## 🧩 Tech Stack

**Frontend:** React.js (Vite)  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Mongoose)  
**Authentication:** JWT (HTTP-only cookies)  
**AI Integration:** OpenAI / Gemini API  
**Image Storage:** ImageKit  

---

## ⚙️ Installation Guide

### 1️⃣ Clone the repository
```bash
git clone https://github.com/YourUsername/PixMind-AI-Chatbot.git
cd PixMind-AI-Chatbot
````

### 2️⃣ Install dependencies

**Backend**

```bash
cd server
npm install
```

**Frontend**

```bash
cd client
npm install
```

### 3️⃣ Create `.env` files

#### Server `.env`

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_or_gemini_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

#### Client `.env`

```bash
VITE_BACKEND_URL=http://localhost:5000
```

---

### 4️⃣ Run the app

**Backend**

```bash
cd server
npm run server
```

**Frontend**

```bash
cd client
npm run dev
```

---

## 🧠 Usage

1. Register or Login to your account.
2. Start a new chat and type your prompt.
3. Choose between **text** or **image** generation.
4. View and manage your previous chats easily.

---

## 🪄 Folder Structure

```
PixMind/
 ├── client/          # React frontend
 │   ├── src/
 │   ├── public/
 │   └── ...
 ├── server/          # Express backend
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   ├── middlewares/
 │   └── ...
 └── README.md
```

---

## 💡 Future Enhancements

* Payment Gateway for Credit Purchase
* User Profile Customization
* Voice-based Chat Support
* Real-time Chat Updates (WebSocket)

---

## 🧑‍💻 Author

**Animesh Bokil**
📧 [[animeshbokil1@gmail.com](mailto:animeshbokil1@gmail.com)]
🌐 [LinkedIn: https://www.linkedin.com/in/BokilAnimesh/]

---

⭐ If you like this project, don't forget to **star the repo** and **share** it!

```
