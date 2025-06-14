# 🍕 Pizza Ordering Website

A modern pizza ordering web application built with **Next.js (App Router)**, **Tailwind CSS**, and **NextAuth.js** for authentication. This project features a responsive UI, animated promo sliders, Google OAuth login, and deployment on Vercel.

---

## 🚀 Live Demo

Click the link below to view the live deployed app:

👉 [Next.js Pizza App Live](https://nextjs-pizza-app-five.vercel.app/)

---

## 🗓 Project Timeline & Features

### Day 1: Frontend Structure, Layout & Landing Page

- **Important Detail**
  - All the pages(except orders page) cantainA left and Right section.
  - The left section is basically the main content and section contains changing images.
  - Used Google Oauth for signing in and if you try to reach any page if not signed in then it will be redirected to signin page.
  - There is a screen loading page associated with all the pages as well.

- **Project Setup:**
  - Created with Next.js.
  - Tailwind was installed along with the setup.
  - Configured certain global styles such as animate.

- ** Decided How the frontend will look:*
  - Taken inspiration from certain figma designs.
  - [Landing Page inspiration](https://www.figma.com/design/5CE9EB3hxkqFxzMp13piMA/Pizza-Shop-Website--Community-?node-id=0-1&t=ISoHmVCeJQIpacIR-0)

- **Layout & Navigation:**
  - Created a global layout with a responsive navbar.
  - Navbar includes links to Pizzas, Drinks, Cart, and Profile pages.

- **Landing Page:**
  - Designed promotional content with two main parts:
    - Left side: Card carousel slides built with **keen-slider**.
    - Right side: Animated promo image and text using **framer-motion**.
    - The framer maotion is visible only for big screens.
    - It also includes Menu bar and BestSellers
  - Implemented automatic slide transitions every 10 seconds.

---

### Day 2: Feature Pages (Pizza, Drinks, Cart, Profile, Sign In & Sign Up)

- **Pizzas Page:**
  - Static grid layout displaying pizzas with name, price, and “Add to Cart” button.
  - Images served from `/public`.
  - There is a screen slide effect which pushes the screen below to down on clicking expand.

- **Drinks Page:**
  - Similar grid layout with accordion-style categories (Special, Cold Drinks).
  - Right side features rotating promo carousel with animations.
  - There is a screen slide effect which pushes the screen below to down on clicking expand.
  - In the code, the variables are taken similar to the pizza menu page.


- **Cart Page:**
  - Shows selected cart items on the left.
  - On the right side is the bill.
  - Summary and total calculation on the right.
  - There are items in the table.
  - You can sort them in order of dates
  - Yau can apply filters of received/baked/dispatched.

- **Profile Page:**
  - Displays user information (name, address and phone number).
  - Contains Logout for clearing the authentication and logging out.

- **Sign In / Sign Up Pages:**
  - UI forms for email and password input.
  - Google Sign-In button included (It works actually).
  - Noramal signin/signup (It is just dummy)
  - Styled with Tailwind CSS for a clean and user-friendly interface.

---

### Day 3: Authentication & Deployment

- **Google Authentication with NextAuth:**
  - Installed `next-auth` package.
  - Created API route at `/app/api/auth/[...nextauth]/route.ts`.
  - Configured Google OAuth provider using environment variables.
  - Implemented session handling with JWT.
  - Login/logout buttons updated to reflect authentication status.
  - User info (name and avatar) displayed on Profile page.

- **Vercel Deployment:**
  - Connected GitHub repository to Vercel.
  - Added required environment variables in Vercel dashboard:
    ```bash
    NEXTAUTH_SECRET=your-secret
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    NEXTAUTH_URL=https://your-vercel-url.vercel.app
    ```
  - Fixed build issues related to route exports and image sizing.
  - Successfully deployed the app with full functionality.

---

## ⚠️ Challenges Faced

While building and deploying this application, several technical issues were encountered. Here are the key difficulties:

### 1. OAuth Authentication Errors (NextAuth.js)

Implementing OAuth via NextAuth.js presented the following challenges:

- **`OAUTH_GET_ACCESS_TOKEN_ERROR`**  
  Encountered when the POST request to the OAuth provider failed. This was traced back to misconfigured provider credentials or redirect URIs. Solution involved verifying Google OAuth credentials on the Google Developer Console.

- **`OAUTH_V1_GET_ACCESS_TOKEN_ERROR`**  
  Although not directly used, some providers might default to OAuth 1.0. Ensuring all providers used OAuth 2.0 fixed potential conflicts.

- **`OAUTH_GET_PROFILE_ERROR`**  
  Rarely triggered, but this indicated that the provider did not return a valid profile. Improved logging helped to debug the response.

- **`OAUTH_PARSE_PROFILE_ERROR`**  
  Triggered when the user cancelled OAuth midway or when unexpected data was returned by the provider. This was handled by validating the shape of the returned data and ensuring robust error fallback UI.

- **`OAUTH_CALLBACK_HANDLER_ERROR`**  
  Occurred during parsing of callback request body. Enhanced error logging in `pages/api/auth/[...nextauth].ts` helped identify malformed responses.

### 2. Deployment Configuration (Vercel)

- Initial deployments failed due to missing environment variables and incorrect `.env.production` setup.
- The `NEXTAUTH_URL` and `GOOGLE_CLIENT_SECRET`/`GOOGLE_CLIENT_ID` were not set correctly on Vercel Dashboard.
- After correctly configuring these, the OAuth errors were resolved and authentication started working on deployed environments.

### 3. Debugging OAuth Issues

- Since OAuth-related errors are sometimes vague, extra logging was added to the `NextAuth` config to display `profile`, `account`, and `token` details.
- Official NextAuth documentation and GitHub issues were frequently referenced.

---

> These challenges provided deeper insights into secure authentication flows and the importance of proper provider configuration and debugging practices in production environments.

---

## 📚 Things I Learned and Improved 

This project was an excellent learning experience in full-stack development using modern web technologies. Below are the key takeaways from the journey:

### 🔐 Authentication (NextAuth.js)
- Learned how to implement secure authentication using **NextAuth.js** with both **Credentials** and **Google OAuth** providers.
- Understood the importance of correctly setting **environment variables** like `NEXTAUTH_URL`, `GOOGLE_CLIENT_ID`, and `GOOGLE_CLIENT_SECRET`.
- Gained insights into OAuth2 flow and how callbacks, tokens, and user sessions are managed.

### ⚙️ Next.js Framework
- Learned to build **server-rendered** and **static** pages using Next.js.
- Used **API routes** in Next.js to integrate backend logic like authentication and product retrieval.
- Managed client-side and server-side state effectively.

### 🎨 Tailwind CSS
- Styled the entire application using **Tailwind CSS**, learning how utility-first design speeds up development.
- Mastered responsive design and layout utilities (e.g., `flex`, `grid`, `px`, `py`, `rounded`, `shadow`, etc.).
- Applied dark/light styling patterns and hover effects.

### ⚡ Keen Slider & Framer Motion
- Integrated **Keen Slider** for carousel animations and **Framer Motion** for component transitions and micro-interactions.
- Learned how to control animations using hooks and event listeners.

### 🌐 Deployment with Vercel
- Deployed the application using **Vercel**, gaining experience in production builds and troubleshooting environment-specific issues.
- Learned how to use Vercel’s dashboard to set up **environment variables**, monitor logs, and manage deployments.

### 🧪 Debugging & Error Handling
- Improved debugging skills by dealing with **NextAuth OAuth errors** and understanding how to use custom error logs to trace issues.
- Learned how to read stack traces, interpret auth error codes, and handle edge cases like token parsing failures and user-cancelled sign-ins.

---

> Overall, this project helped sharpen my skills across frontend, backend, deployment, and authentication — all within a modern, full-stack React/Next.js ecosystem. This project was an assignment for an internship.

