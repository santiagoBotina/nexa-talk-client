# Nexa Talk Client 🚀

The Nexa Talk Client is a slick, responsive **web frontend** built with Next.js, React, TypeScript, and Tailwind CSS.
It's part of the **Nexa Talk** ecosystem—a system onboarding inbound/outbound calls, transcribing them, generating AI
summaries, and archiving call data (agent, client, transcription, and insight) into a database.

---

## 🌟 Why It Matters

Support teams often struggle to catch every nuance of a conversation. **Nexa Talk** changes that by:

1. **Capturing** the call audio
2. **Transcribing** the conversation via automated speech recognition
3. **Generating** concise summaries using a language model
4. **Logging** everything—agent details, client info, transcript, call metadata—into a unified dashboard

The Nexa Talk Client provides an intuitive interface for agents and admins to view, filter, and manage complete call
histories and AI-generated summaries.

---

## 📦 Tech Stack

- **Next.js** – Server-side rendering, routing, API endpoints
- **React** – Dynamic, reusable UI components
- **TypeScript** – Type safety for easier maintenance
- **Tailwind CSS** – Utility-first styling for rapid, adaptive design

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16 / npm or yarn or pnpm
- `.env.local` with your API base URL (e.g. `NEXA_API_URL=http://localhost:4000`)

### Install & Run

```bash
git clone https://github.com/santiagoBotina/nexa-talk-client.git
cd nexa-talk-client
npm install         # or yarn / pnpm / bun
npm run dev         # starts the dev server
```

## 🛠️ Features

- Dashboard: Searchable, filterable list of call records with metadata

- Call Detail View: Play audio, read transcript, view LLM summary, edit annotations

- Pagination & Filters: Sort by agent, date, call type (inbound/outbound)

- Modern UI/UX: Mobile-friendly layout with Tailwind styling
