# Mabro Tech

Marketing site for [Mabro Tech OÜ](https://mabrotech.ee) — interior finishing, painting, partition walls, and suspended ceilings in Tallinn and Harju County.

## Stack

- React 18 (Create React App)
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

- `REACT_APP_EMAILJS_SERVICE_ID`
- `REACT_APP_EMAILJS_TEMPLATE_ID`
- `REACT_APP_EMAILJS_PUBLIC_KEY`

## Build and deploy

```bash
npm run build
firebase deploy --only hosting
```

## Routes

- `/` — home with project gallery and contact modal
- `/services` — services and price list
- `/contacts` — company info and contact form
