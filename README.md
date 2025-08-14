# 💰 Financial Management App – From Monolithic to ☁️ Cloud-Based Microservices

This project is part of my MSc Computer Science dissertation at **Staffordshire University**.  
It demonstrates the "Transition of a financial management application** from a Monolithic architecture to a Cloud-native Microservices architecture** 🛠️, improving scalability 📈, maintainability 🔧.

---

## 📜 Project Overview

The original monolithic financial management app was redesigned into independent **microservices** to address the challenges of scalability ⚡, maintainability 🧩, and feature deployment 🚀.  
By leveraging **cloud-native design principles** ☁️, the system can scale individual services based on demand 📊, optimise resource usage ♻️, and support continuous delivery 🔄.

**✨ Key Features:**
- 👉 **Authentication 🔐:** Ultra-secure SSR authentication with proper validations ✅ and authorization checks.
- 👉 **Connect Banks 🏦:** Integrates with Plaid for multiple bank account linking 🔗.
- 👉 **Home Page 🏠:** Displays a general overview of the user account with total balance 💵 from all connected banks, recent transactions 📜, and spending by category 📊.
- 👉 **My Banks 🏛️:** Complete list of connected banks with balances 💰 and account details 📝.
- 👉 **Transaction History 📂:** Pagination 📄 and filtering 🔍 for transaction history by bank.
- 👉 **Real-time Updates ⏱️:** Reflects changes instantly across all pages upon connecting new bank accounts.
- 👉 **Funds Transfer 💸:** Transfer funds securely using Dwolla with all required details.
- 👉 **Responsive Design 📱:** Seamless user experience across desktop 🖥️, tablet 📟, and mobile 📲.

...and many more, including **clean code architecture** 🏗️ and **component reusability** ♻️.

---

## 🛠️ Tech Stack

**Frontend 🎨:**
- [React.js](https://reactjs.org/) ⚛️
- [Next.js](https://nextjs.org/) ⚡

**Backend 🖧:**
- [Node.js](https://nodejs.org/) 🟢
- [Appwrite Cloud](https://appwrite.io/) ☁️ – database & authentication 🔑  
- Microservices architecture 🧩 (service-to-service communication via tokens 🔗)

**Cloud & Deployment 🚀:**
- Vercel 🌍 (frontend hosting)
- Appwrite Cloud ☁️ (backend services)
- Service-oriented design 🛠️

---

## 📐 Architecture

The application follows a **service-oriented architecture (SOA)** pattern 🧠:
- **Auth Service 🔐** – manages user registration 📝, login 🔑, and tokens 🎫
- **Finance Service 💰** – handles transactions 💳, budgeting 📊, and analytics 📈
- **Notification Service 🔔** – sends email 📧 or in-app alerts 📱
- **API Gateway 🌐** – routes requests to appropriate microservices

![Architecture Diagram](docs/architecture-diagram.png)

---

## 🚀 How to Run Locally

### 1️⃣ Clone Repository 📂
```bash
git clone https://github.com/adhilmarzook/financial-management-microservices.git
cd financial-management-microservices
```

### 2️⃣ Install Dependencies 📦
```bash
npm install
```

### 3️⃣ Set Environment Variables ⚙️
Create a `.env.local` file with:
```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_API_KEY=your_api_key
```

### 4️⃣ Run Development Server ▶️
```bash
npm run dev
```
Visit 🌐 [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📊 Dissertation Focus 🎓

This project investigates:
- ❌ Limitations of monolithic architectures in financial management systems
- ✅ Benefits and trade-offs of microservices in scalability and deployment
- 🌍 Real-world considerations in cloud-native migration

---

## 📬 Contact 🤝
**Author:** Adhil Marzook  
**LinkedIn:** [Your LinkedIn URL](https://www.linkedin.com/in/adhil-marzook-8a594118b]  
**GitHub:** [https://github.com/adhilmarzook](https://github.com/adhilmarzook)

