## Platform-as-a-Service (PaaS)

🎮 Fullstack Trivia Web Application — Node.js, Express, React, PostgreSQL, Render

## October 2024

📘 Project Summary: Trivia Web Application (PaaS Deployment)
This project is a fullstack web application for a Trivia game, developed as part of Labb 1 - Platform-as-a-Service (PaaS) in October 2024. The application allows users to register, log in, and play trivia games, while data is stored and managed via a RESTful API.

The backend and frontend were deployed using Render, and the project also includes monitoring tools and CDN integration via Cloudflare.

🌐 Deployment links (demo):
These are the links that were used during the project presentation:

Frontend WebApp: https://trivia-fullstack.onrender.com/

API Endpoint: https://trivia-fullstack.onrender.com/api

⚠️ Note: These links were active during the demo period, but as they were hosted on a free Render account, they are no longer online.

---

### 🛠️ Technologies Used

-**Frontend**: HTML, CSS, JavaScript (Vanilla)

-**Backend**: Node.js, Express.js

-**Database**: MongoDB

-**Deployment**: Render (PaaS)

-**CDN**: Cloudflare

-**Monitoring**: Pingdom

Ett innehållsleveransnätverk (CDN, på engelska) är ett nätverk av geografiskt distribuerade servrar som hjälper till att snabbare överföra information på internet till användare. Istället för att alla måste gå till en enda server som kan vara långt borta, lagrar CDN
kopior av innehållet (som webbsidor, bilder och videor) på flera platser. Så när någon besöker en webbplats kan de få informationen från den närmaste servern, vilket minskar väntetiden.

---

### General view:

<img
  src="documentation/landingPageView_NoUser.png"
  alt="landing-page-anonym-image"
  width="400"
/>

---

### 🔧 Installation and Usage

#### 1️⃣ Clone the repository

```bash
git clone https://github.com/tu-usuario/name_repo.git
cd name_repo
```

#### 2️⃣ Install dependencies

Go to the backend folder:

```bash
cd backend
npm install
```

Go to the frontend folder :

```bash
cd frontend
npm install
```

#### 3️⃣ Run the application locally

##### Start the backend server

```bash
cd backend

npm run build-frontend
```

This will start the backend server on `http://localhost:3000` (or your configured port).

##### Start the frontend (if needed)

If your frontend is in a separate folder and uses a development server (like Vite or similar), run:

```bash
cd frontend
npm run dev
```

This will start the fronted server on `http://localhost:5173/`

If your frontend is static HTML/CSS/JS and served by the backend, you can skip this step — just access your backend server in the browser.

#### 4️⃣ Environment variables

Make sure to configure your `.env` file in the backend with the following variables:

```env
PORT=3000
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
```

#### 5️⃣ Access the app

- Frontend: [http://localhost:3000](http://localhost:3000)
- API: [http://localhost:3000/api](http://localhost:3000/api)

---

### 📄 [Detailed Information of the Project](Detail_Info.md)
