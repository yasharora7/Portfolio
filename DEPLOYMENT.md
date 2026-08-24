# Deployment Guide — Render.com

This guide explains how to deploy your portfolio website to **Render.com** for free.

---

## 🚀 Step 1: Push Code to GitHub

Open your terminal in the project directory (`c:\Users\y79ar\Desktop\portfolio project`) and run:

```bash
git init
git add .
git commit -m "Deploy portfolio website"
git branch -M main
git remote add origin https://github.com/yasharora7/portfolio-website.git
git push -u origin main
```

*(Replace `portfolio-website` with your actual GitHub repository name if different).*

---

## 🌐 Step 2: Deploy on Render.com

1. Go to **[https://render.com](https://render.com)** and log in with your **GitHub account**.
2. Click **New +** in the top right corner and select **Static Site**.
3. Select your repository `yasharora7/portfolio-website` and click **Connect**.
4. Fill in the following deployment settings:

| Setting Field | Value |
| :--- | :--- |
| **Name** | `yash-arora-portfolio` (or your preferred name) |
| **Branch** | `main` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `dist` |

5. Click **Create Static Site**.

---

## ⚙️ Step 3: Add Single Page App (SPA) Redirect Rule

To make sure subpages and reloads work seamlessly without 404 errors:

1. In your Render Dashboard, click on your site.
2. Go to **Redirects / Rewrites** in the left menu.
3. Click **Add Rule**:
   - **Source**: `/*`
   - **Destination**: `/index.html`
   - **Action**: `Rewrite`
4. Click **Save Changes**.

---

## 🎉 Done!
Render will build your portfolio in ~60 seconds and give you a free HTTPS link like:
`https://yash-arora-portfolio.onrender.com`
