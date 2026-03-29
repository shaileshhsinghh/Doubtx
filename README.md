# 📚 DoubtX - EdTech & Smart Campus Platform

**DoubtX** is a full-stack educational web application built for collaborative learning, doubt solving, and smart academic engagement. Students can ask and solve doubts, earn and redeem merits, chat with peers, and even top-up credits via integrated payments.

---

## 🚀 Features

- 🧠 **Ask & Solve Doubts** - Real-time doubt listing and solving
- 🎁 **Merit System** - Earn merits, redeem them for rewards
- 📊 **Dashboard** - Track progress and activity
- 💬 **Live Chat** - Tawk.to integration for instant peer engagement
- 🧾 **Admin Panel** - Manage users and reward system (basic)
- 📚 **Learning Resources** - Tailored learning content (planned)

---

## 🛠 Tech Stack

- **Frontend**: HTML, CSS (TailwindCSS), JavaScript
- **Backend**: Node.js + Express
- **Chat**: Tawk.to Widget

---

## 📂 Folder Structure

```
doubtx/
├── public/
│   ├── index.html         # Login/Register
│   ├── dashboard.html     # Main user dashboard
│   ├── doubts.html        # View & solve open doubts
│   ├── redeem.html        # Merit redemption page
│   ├── topup.html         # Razorpay merit top-up
│   ├── chat.html          # Optional: Socket.io chat
│   └── css/, js/, img/    # Assets
├── server.js              # Node.js backend
├── users.json             # File-based user storage
├── doubts.json            # File-based doubt list
└── README.md
```

---

## ⚙️ Getting Started

1. **Clone the Repo**
```bash
git clone https://github.com/your-username/doubtx.git
cd doubtx
```

2. **Install Dependencies**
```bash
npm install express socket.io
```

3. **Run the Server**
```bash
node server.js
```

4. **Visit in Browser**
```
http://localhost:3000
```

---

## 💳 Razorpay Integration
- Create a Razorpay account: https://dashboard.razorpay.com/
- Replace `YOUR_KEY_ID` in `topup.html` with your test/live key.
- Use test UPI/Cards for sandbox payments.

---

## 🔐 Notes
- Tawk.to live chat embed is active on `discussion.html`.
- For production, switch to a database like MongoDB.
- Secure routes and password storage (e.g., bcrypt) for deployment.

---

## 👨‍💻 Author
**Built by:** `@shaileshhsinghh` — for EdTech Hackathon 2025

Feel free to fork, contribute, and customize! 🎓
