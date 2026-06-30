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
- EmailJS (contact form)

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
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build to `build/` |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to Firebase Hosting |

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
