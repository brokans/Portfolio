# AB Perspektiiv

Architecture studio portfolio website built with React and Vite. The public site showcases architecture and interior design projects, services, and contact information. An admin area supports project and studio location management via Firebase.

**Live site:** [abperspektiiv.com](https://abperspektiiv.com)

## Stack

- React 18 + Vite
- React Router
- Firebase Realtime Database
- i18next (ET / EN / FI / LV)
- Bootstrap 5 + React Bootstrap
- Leaflet (studio map)
- Firebase Cloud Functions + SMTP / Resend (contact form)

## Project structure

```
src/
├── components/       # Shared UI (navbar, map, email, home sections)
├── pages/
│   ├── global/     # Public pages (home, architecture, services, contact)
│   └── admin/      # Protected CMS (projects, locations)
├── lib/              # Data access and helpers
├── i18n/             # Translations
└── store/            # Auth context
```

## Setup

```bash
npm install
cp .env.example .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env` and fill in:

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase web app API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_DATABASE_URL` | Realtime Database URL |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |

### Contact form

The contact form posts to `/api/contact` (Firebase Cloud Function in production, Vite middleware locally). Choose **one** provider:

**Option A — Gmail API (OAuth2)** — same pattern as a small Node backend:

| Variable | Description |
|----------|-------------|
| `GMAIL_USER` | Gmail address that sends mail |
| `GMAIL_CLIENT_ID` | Google Cloud OAuth client ID |
| `GMAIL_CLIENT_SECRET` | OAuth client secret |
| `GMAIL_REFRESH_TOKEN` | Long-lived refresh token |
| `CONTACT_TO_EMAIL` | Inbox that receives form submissions |

Setup once in [Google Cloud Console](https://console.cloud.google.com/):
1. Create a project → enable **Gmail API**
2. **APIs & Services → Credentials** → OAuth 2.0 Client ID (Desktop app or Web)
3. Get a refresh token via [OAuth 2.0 Playground](https://developers.google.com/oauthplayground) with scope `https://mail.google.com/`

**Option B — SMTP** (mailbox host):

| Variable | Example |
|----------|---------|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `587` |
| `SMTP_USER` | your email |
| `SMTP_PASS` | app password |

**Option C — [Resend](https://resend.com)** — API key + verified domain.

Priority if multiple are set: **Gmail → SMTP → Resend**. Variables stay server-side (no `VITE_` prefix). Restart `npm run dev` after editing `.env`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `build/` |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy hosting + contact function |
| `npm run deploy:hosting` | Build and deploy hosting only |
| `npm run deploy:functions` | Deploy contact function only |
| `npm run emulators` | Start Firebase Functions emulator |

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/arhitektuur` | Architecture projects |
| `/sisearhitektuur` | Interior architecture projects |
| `/portfolio` | Combined project overview |
| `/services` | Services |
| `/contacts` | Contact + map |
| `/project-page/:name` | Project detail |
| `/admin` | CMS (login required) |

## License

Private project — AB Perspektiiv / Mario Brokans.
