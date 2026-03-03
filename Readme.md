# 🍰 SweetDeli - Food Web App

A full-stack food ordering web application built with **React**, **Express**, and **MongoDB**. Users can browse a curated bakery menu, manage their cart, and explore featured cakes and desserts.

---

## 📑 Table of Contents

- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Frontend Routes](#-frontend-routes)
- [Features](#-features)
- [Reusable Components](#-reusable-components)
- [Known Issues & Bugs](#-known-issues--bugs)

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 19 | UI Library |
| Vite 7 | Build Tool & Dev Server |
| React Router DOM 7 | Client-side Routing |
| Tailwind CSS 4 | Utility-first CSS Framework |
| React Icons | Icon Library |

### Backend
| Technology | Purpose |
|---|---|
| Express 5 | Web Framework |
| MongoDB + Mongoose 9 | Database & ODM |
| bcrypt | Password Hashing |
| jsonwebtoken | JWT Authentication |
| dotenv | Environment Variables |
| cors | Cross-Origin Resource Sharing |

---

## 📁 Project Structure

```
SweetDeli-FoodWebApp/
│
├── Backend/
│   ├── server.js                 # Express entry point
│   ├── config/
│   │   └── db.js                 # MongoDB connection with retry logic
│   ├── controllers/
│   │   ├── signUpController.js   # User registration
│   │   ├── loginController.js    # User login
│   │   ├── getUserController.js  # Get authenticated user info
│   │   └── cartController.js     # Cart CRUD operations
│   ├── middlewares/
│   │   └── authMiddleware.js     # JWT verification middleware
│   ├── models/
│   │   ├── User.js               # User schema with password hashing
│   │   └── addCart.js            # Cart item schema
│   ├── routes/
│   │   ├── authRoute.js          # Auth routes (register, login, getUser)
│   │   ├── cartRoute.js          # Cart routes (add, update, remove, getItems)
│   │   └── dashboardRoute.js     # Dashboard routes (placeholder)
│   └── utilities/
│       └── generateToken.js      # JWT token generator
│
├── Frontend/
│   ├── index.html
│   ├── vite.config.js
│   └── src/
│       ├── App.jsx               # Root component with routing
│       ├── main.jsx              # React entry point
│       ├── index.css             # Global styles & Tailwind imports
│       ├── card/                 # Reusable card components
│       │   ├── BlogCard.jsx
│       │   ├── CakeCard.jsx
│       │   ├── CustomerReview.jsx
│       │   ├── FooterComponents.jsx
│       │   ├── InfoCard.jsx
│       │   └── ItemCard.jsx
│       ├── componets/            # Shared UI components
│       │   ├── AuthForm.jsx
│       │   ├── Button.jsx
│       │   ├── LeftSideAuthPage.jsx
│       │   └── Navbar.jsx
│       ├── context/
│       │   └── UserContext.jsx   # User state context provider
│       ├── pages/
│       │   ├── Home.jsx          # Hero section with CTA
│       │   ├── Discover.jsx      # Menu carousel with cake icons
│       │   ├── Blog.jsx          # Blog card carousel
│       │   ├── About.jsx         # Why Choose Us + Testimonials
│       │   ├── Contact.jsx       # Newsletter + Footer
│       │   ├── AddCard.jsx       # Cart page (placeholder)
│       │   ├── Profile.jsx       # Profile page (placeholder)
│       │   └── Auth/
│       │       ├── Login.jsx
│       │       └── SignUp.jsx
│       └── utilities/
│           ├── apiClient.js      # HTTP client (fetch wrapper)
│           └── apiPath.js        # API endpoint constants
│
└── Readme.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **MongoDB** (Atlas or local)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TAMIM-IQBAL0110/Sweetdeli-FoodWebApp.git
   cd Sweetdeli-FoodWebApp
   ```

2. **Setup Backend**
   ```bash
   cd Backend
   npm install
   ```

3. **Setup Frontend**
   ```bash
   cd Frontend
   npm install
   ```

4. **Configure Environment Variables** (see below)

### Running the App

**Start Backend** (from `Backend/` directory):
```bash
npm run dev
```
Server runs on `http://localhost:5000`

**Start Frontend** (from `Frontend/` directory):
```bash
npm run dev
```
App runs on `http://localhost:5173`

---

## 🔐 Environment Variables

### Backend (`Backend/.env`)

| Variable | Description | Example |
|---|---|---|
| `MONGO_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/sweetdeli` |
| `JWT_SECRET` | Secret key for JWT signing | `your-secret-key-here` |
| `CLIENT_URL` | Allowed frontend origins (comma-separated) | `http://localhost:5173` |
| `PORT` | Server port (optional, defaults to 5000) | `5000` |
| `NODE_ENV` | Environment mode | `development` or `production` |

### Frontend (`Frontend/.env`)

| Variable | Description | Example |
|---|---|---|
| `VITE_BASE_URL` | API base URL | `http://localhost:5000` |

---

## 📡 API Endpoints

### Authentication (`/api/v1/auth`)

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/v1/auth/register` | ❌ | Register a new user |
| `POST` | `/api/v1/auth/login` | ❌ | Login & get JWT token |
| `GET` | `/api/v1/auth/getUser` | ✅ Bearer | Get authenticated user info |

### Cart (`/api/v1/cart`)

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `POST` | `/api/v1/cart/add` | ✅ Bearer | Add item to cart |
| `PUT` | `/api/v1/cart/update/:id` | ✅ Bearer | Update item quantity |
| `DELETE` | `/api/v1/cart/remove/:id` | ✅ Bearer | Remove item from cart |
| `GET` | `/api/v1/cart/getItems` | ✅ Bearer | Get all cart items |

### Health Check

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Server & database status |

---

## 🗺 Frontend Routes

| Path | Page | Protected | Description |
|---|---|---|---|
| `/` | Root | ❌ | Redirects to `/home` or `/login` |
| `/signup` | SignUp | ❌ | Registration page |
| `/login` | Login | ❌ | Login page |
| `/home` | Home | ✅ | Hero section with Discover Menu CTA |
| `/discover` | Discover | ✅ | Menu carousel, cake categories, features |
| `/blog` | Blog | ✅ | Blog post carousel |
| `/aboutus` | About | ✅ | Why Choose Us + Customer Testimonials |
| `/contact` | Contact | ✅ | Newsletter subscription + Footer |
| `/addCard` | AddCard | ✅ | Shopping cart (placeholder) |
| `/profile` | Profile | ✅ | User profile (placeholder) |

---

## ✅ Features

### Implemented
- ✅ User registration & login with JWT authentication
- ✅ Password hashing with bcrypt
- ✅ Protected routes (frontend & backend)
- ✅ Responsive navbar with cart badge (fetches cart count from API)
- ✅ Hero landing page with CTA
- ✅ Discover page with paginated item card carousel (responsive: 3/2/1 cards)
- ✅ Cake category icons section
- ✅ Blog page with horizontal scroll carousel
- ✅ About page with video placeholder + customer testimonials carousel
- ✅ Contact page with newsletter form + image gallery + footer
- ✅ Cart CRUD API (add, update, remove, get)
- ✅ MongoDB connection with auto-retry logic
- ✅ CORS configuration
- ✅ Reusable UI components (Button, Cards, AuthForm)

### Placeholder / Incomplete
- ⬜ Cart page (AddCard) — no UI, just a placeholder `<div>`
- ⬜ Profile page — no UI, just a placeholder `<div>`
- ⬜ Social login (Google, Apple, Facebook) — buttons are UI only
- ⬜ Forgot password — no route or page
- ⬜ Newsletter subscribe — no backend endpoint
- ⬜ "Order Now" button — no click handler / cart integration
- ⬜ Dashboard route — returns static JSON
- ⬜ All images — gray placeholder boxes
- ⬜ Video in About page — play button only, no video
- ⬜ Logout functionality — no button or token clearing
- ⬜ Footer links — placeholder text, no navigation

---

## 🧩 Reusable Components

| Component | Location | Props | Description |
|---|---|---|---|
| `Button` | `componets/Button.jsx` | `children, onClick, type, className, variant` | Rounded button with primary/secondary/outline variants |
| `AuthForm` | `componets/AuthForm.jsx` | Form wrapper | Shared auth form with social login buttons |
| `LeftSideAuthPage` | `componets/LeftSideAuthPage.jsx` | — | Left panel for auth pages with branding |
| `Navbar` | `componets/Navbar.jsx` | — | Sticky navbar with nav links, cart badge, profile icon |
| `ItemCard` | `card/ItemCard.jsx` | `name, description, price` | Product card with image, info, and Order button |
| `CakeCard` | `card/CakeCard.jsx` | `icon, label` | Circular icon with label (cake category) |
| `CustomerReview` | `card/CustomerReview.jsx` | `name, description, text` | Testimonial card with avatar and review text |
| `BlogCard` | `card/BlogCard.jsx` | — | Blog post card with image and text |
| `InfoCard` | `card/InfoCard.jsx` | `icon, title, description` | Feature info card with icon |
| `FooterComponents` | `card/FooterComponents.jsx` | — | Full footer with links, social icons, app store buttons |

---

## 🐛 Known Issues & Bugs

### 🔴 Critical

| # | File | Issue |
|---|---|---|
| 1 | `context/UserContext.jsx` | **`setUser` is never defined.** The `useState` destructures as `[user, userState]` but `updateUser()` and `clearUser()` both call `setUser()` which doesn't exist — will crash at runtime. |
| 2 | `utilities/apiClient.js` | **API base URL is hardcoded** to `http://localhost:5000`. The `VITE_BASE_URL` env variable is exported in `apiPath.js` but never used in `apiClient.js`. Won't work in production. |
| 3 | `componets/Navbar.jsx` | **Cart count always shows 0.** The navbar checks `response.items` but the backend returns `response.cartItems`. Key mismatch. |
| 4 | `server.js` | **No 404 handler.** The error middleware has 4 args (error handler), not 3 (404 handler). Unmatched routes return Express's default HTML. |
| 5 | `middlewares/authMiddleware.js` | **No null check after `User.findById`.** If a user is deleted but their token is valid, `req.user` is `null` and downstream controllers crash with `TypeError`. |
| 6 | `utilities/apiClient.js` | **No `authPost`, `authPut`, `authDelete` methods.** Cart operations (POST, PUT, DELETE) all require JWT but the client only has `authGet`. Cart management from frontend is impossible. |

### 🟡 Medium

| # | File | Issue |
|---|---|---|
| 7 | `componets/` (folder) | **Typo in folder name** — should be `components`. Consistent across all imports. |
| 8 | `pages/Auth/Login.jsx` | **Error state is never rendered.** The `error` state is set on login failure but never displayed in the JSX. |
| 9 | `pages/Auth/Login.jsx` | **User data from response is discarded.** Only `token` is stored in localStorage; `user` object and `UserContext` are never used. |
| 10 | `context/UserContext.jsx` | **Context is never consumed.** No component calls `useContext(UserContext)`. The provider wraps the app but is unused. |
| 11 | Backend | **`error.message` leaked to client** in every 500 catch block. Reveals internal details in production. |
| 12 | Backend | **No input sanitization.** No protection against NoSQL injection (e.g., `express-mongo-sanitize`). |
| 13 | Backend | **No rate limiting** on auth routes. Vulnerable to brute-force attacks. |
| 14 | Backend | **Unused dependencies:** `crypto-js` and `sib-api-v3-sdk` are installed but never imported. |
| 15 | Backend | **No database name in `MONGO_URL`.** Mongoose defaults to the `test` database if none is specified in the connection string. |
| 16 | Backend | **JWT expires in 1 hour** with no refresh token mechanism. Users are silently logged out. |

### 🟢 Minor

| # | File | Issue |
|---|---|---|
| 17 | `card/BlogCard.jsx` | Uses `w-half` which is not a valid Tailwind class. Should be `w-1/2`. |
| 18 | `routes/userRoute.js` | **Empty file** — not mounted in `server.js`. |
| 19 | Root `package.json` | Has `react-icons` as dependency — redundant since it's already in Frontend's `package.json`. |
| 20 | `pages/AddCard.jsx` | Named "AddCard" but represents the shopping **Cart** page. |
| 21 | Frontend `index.html` | Page title is `"Vite + React"` — should be `"SweetDeli"`. |
| 22 | Backend | **No `.env.example` file.** New developers won't know which env vars are required. |

---

## 📝 License

ISC

---

## 👤 Author

[TAMIM-IQBAL0110](https://github.com/TAMIM-IQBAL0110)
