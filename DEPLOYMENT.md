# Deployment Guide - D20 Loot Tracker Landing Page

This is the **landing page only**. The actual tracker app is deployed separately.

## 🚀 Quick Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import `connorprovines-code/d20-loot-tracker-nextjs`
4. Click "Deploy" (no environment variables needed!)

## 🌐 Add Custom Domain

1. In Vercel project settings → Domains
2. Add `d20loottracker.com`
3. Follow DNS instructions

## 🔗 Architecture

- **Landing Page** (this repo): `d20loottracker.com`
  - Pure marketing/SEO
  - Static Next.js build
  - Links to tracker app

- **Tracker App** (separate repo): `dnd-loot-tracker.vercel.app`
  - Full application
  - Supabase backend
  - Independent deployments
