# 🛍️ **AeroScript — Modern E-Commerce Frontend**

> **AeroScript** is a **premium React + Material-UI v5 e-commerce frontend**, built for speed, scalability, and stunning design.
> It’s inspired by Amazon, Flipkart, and Myntra — but with a refined, **glass-morphism + neo-modern aesthetic** and a **developer-friendly architecture**.

---

## ✨ **Overview**

AeroScript is a **fully responsive**, **component-driven** shopping UI designed for production environments.
It includes everything from **authentication**, **category-based shopping**, **smart product filters**, and **comparison views**, to **cart and checkout flows**, integrated with a **RESTful or Node.js backend**.

The goal is to offer a **realistic, modern frontend architecture** for developers and startups who want to build a scalable e-commerce platform.

---

## 🚀 **Tech Stack**

| Layer                | Technology             | Description                          |
| -------------------- | ---------------------- | ------------------------------------ |
| **Framework**        | React 18 (CRA)         | Fast modular frontend                |
| **UI Library**       | Material UI v5         | Premium responsive components        |
| **State Management** | Redux Toolkit          | Global store for user & admin state  |
| **Routing**          | React Router v5        | Multi-page navigation with guards    |
| **Authentication**   | JWT + Redux            | Token-based user login/session       |
| **Styling**          | MUI Theme + Custom CSS | AeroScript color palette, animations |
| **API Layer**        | Axios                  | REST API integration                 |
| **Build Tool**       | Yarn                   | Dependency and script management     |

---

## 🧱 **Folder Structure**

```
AeroScriptFrontend/
├── public/                   # Static assets
├── src/
│   ├── actions/              # Redux actions (admin & user)
│   ├── components/           # Reusable UI components
│   │   ├── adminComponent/   # Admin dashboard UI (Add/Edit/View Products)
│   │   ├── home/             # Shared Header, Footer, Sidebar, Cards, etc.
│   ├── constants/            # Redux action constants
│   ├── reducers/             # Redux reducers (admin & user)
│   ├── screen/
│   │   ├── home/             # Homepage components
│   │   │   ├── data/         # Static product data (Itemdata, Tvitdata)
│   │   │   ├── components/   # Header, Footer, Sidebar, MenuList, etc.
│   │   │   ├── pages/        # Page-level views
│   │   │   │   ├── Mobilestore.jsx
│   │   │   │   ├── Grocerystore.jsx
│   │   │   │   ├── Offerpage.jsx
│   │   │   │   ├── Cartpage.jsx
│   │   │   │   ├── Productpage.jsx
│   │   │   │   ├── Productdetails.jsx
│   │   │   │   ├── Returnpolicy.jsx
│   │   │   │   ├── Myorders.jsx
│   │   │   │   ├── Corporate.jsx
│   │   │   │   ├── Wholesales.jsx
│   │   │   │   └── Mychats.jsx
│   │   ├── userScreen/       # Auth & profile management
│   │   │   ├── Login.jsx
│   │   │   ├── Userprofile.jsx
│   ├── App.js                # Root router
│   ├── store.js              # Redux store configuration
│   ├── index.js              # React root mount
│   └── App.css               # Global styles
├── package.json
├── README.md
└── yarn.lock
```

---

## 🧩 **Core Features**

### 🏠 **Homepage**

* Adaptive carousel, promo strip, and top navigation
* Category rail with smooth scroll + sticky filters
* Integrated search with predictive suggestions

### 📱 **Mobiles Page**

* Dynamic filters (price range, brand, RAM, storage, rating)
* Sticky toolbar for categories and sorting
* Product comparison dialog
* Smart cards with **“No Cost EMI”, “Exchange Offer”**, and **discount tags**

### 🛍️ **Top Offers Page**

* Reimagined “Deals of the Day” and “Mega Offers”
* Uses **Cards.jsx** for modern product layout
* Live badge for limited-time offers
* Compact hero banner for better UX

### 🥦 **Grocery Page**

* Premium fresh layout using hero banners
* Structured categories: Vegetables, Beverages, Dairy
* Responsive image grid with brand-tagged items

### 🛍️ **Cart & Orders**

* Live item count in Header
* Smart Cart summary with pricing breakdown
* Order history and tracking page

### 🧑‍💼 **Admin Panel**

* Add/Edit/View products
* Admin dashboard with loading and error components
* Secure access using JWT token validation

---

## 🎨 **Design System**

| Element         | Description                                           |
| --------------- | ----------------------------------------------------- |
| **Theme**       | Dark Navy Header, Soft White Background, Amber Accent |
| **Typography**  | Inter / Poppins — variable font weights               |
| **Effects**     | Glassmorphism Cards + Smooth Hover Transitions        |
| **Iconography** | MUI Icons + Custom Brand SVGs                         |
| **Spacing**     | 8pt MUI Grid System                                   |
| **Animations**  | MUI + Framer Motion (for hero banners, modals)        |

---

## ⚙️ **Setup Instructions**

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/aeroscript-frontend.git
cd aeroscript-frontend
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Run the development server

```bash
yarn start
```

> Runs on [http://localhost:3000](http://localhost:3000)

### 4. Build for production

```bash
yarn build
```

### 5. Lint & test

```bash
yarn lint
yarn test
```

---

## 🧠 **Architecture Overview**

AeroScript is structured around **modular React components** with a **Redux global store** for predictable state.
The design pattern follows **MVC** (View + Action + Reducer), ensuring clear separation of concerns.

**Core Flow:**

```
UI Component → Action → Reducer → Store → API → State Update
```

**Highlights:**

* MUI Theme provides consistent color, spacing, and typography.
* Each major category page (Mobiles, Grocery, Offers) has modular Hero, Filter, and ProductRail sections.
* Reusable Cards.jsx ensures a uniform product display across the platform.

---

## 🧮 **Future Enhancements**

✅ Add Dark Mode (persistent theme)
✅ Integrate Payment Gateway (Stripe/Razorpay)
✅ Add GraphQL layer for performance
✅ Lazy-load routes using React.lazy
✅ Implement Progressive Web App (PWA) support
✅ Integrate Prometheus + Grafana for monitoring metrics in production

---

## 👨‍💻 **Maintainers**

**Author:** Mayank Srivastava
**Role:** Security Engineer, UI/UX Architect

---

## 📜 **License**

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with attribution.

---

## 🏷️ **Tags**

`#ReactJS` `#MUIv5` `#ReduxToolkit` `#EcommerceUI` `#FrontendArchitecture` `#AeroScript` `#WebDevelopment`

---

## 📷 **Preview**

*Add screenshots or GIFs of:*

* Homepage
* Mobiles Page
* Offers Page
* Cart Page
* Admin Panel
