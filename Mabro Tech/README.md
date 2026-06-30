# Mabro Tech

Marketing site for [Mabro Tech OÜ](https://mabrotech.ee) — interior finishing, painting, partition walls, and suspended ceilings in Tallinn and Harju County.

## Stack

- React 18 + Vite
- React Router, React Bootstrap, i18next (et / en / ru)
- EmailJS for the contact form
- Firebase Hosting (`mabrotechy-a9aeb`)

## Local development

```bash
npm install
cp .env.example .env
npm start
```

Set EmailJS values in `.env`:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Build and deploy

```bash
npm run build
firebase deploy --only hosting
```

Or use the combined script:

```bash
npm run deploy
```

## Routes

- `/` — home with project gallery and contact modal
- `/services` — services and price list
- `/contacts` — company info and contact form
