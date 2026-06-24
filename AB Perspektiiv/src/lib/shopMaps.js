/** Known studio corrections until Firebase shop records are updated in admin. */
const SHOP_LOCATION_OVERRIDES = {
  "Tallinna Stuudio": {
    lati: 59.4369486,
    long: 24.7594238,
    address: "parkla, Narva mnt 4, 10117 Tallinn",
    url: "https://www.google.com/maps/place/parkla,+Narva+mnt+4,+10117+Tallinn/@59.4369486,24.7568435,17z/data=!3m1!4b1!4m6!3m5!1s0x4692935e24ef148d:0xde1f52e16418e3a5!8m2!3d59.4369486!4d24.7594238!16s%2Fg%2F11csp0ly7x?entry=ttu",
  },
};

export function normalizeShop(shop) {
  const override = SHOP_LOCATION_OVERRIDES[shop.name];
  return override ? { ...shop, ...override } : shop;
}

export function parseGoogleMapsCoords(url) {
  if (!url || typeof url !== "string") return null;

  const normalized = url.startsWith("http") ? url : `https://${url}`;
  if (!normalized.includes("google.") || !normalized.includes("maps")) {
    return null;
  }

  const precise = normalized.match(/!3d(-?\d+(?:\.\d+)?)!4d(-?\d+(?:\.\d+)?)/);
  if (precise) {
    return { lat: Number(precise[1]), lng: Number(precise[2]) };
  }

  const at = normalized.match(/@(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/);
  if (at) {
    return { lat: Number(at[1]), lng: Number(at[2]) };
  }

  return null;
}

export function getShopPosition(shop) {
  const coords = parseGoogleMapsCoords(shop.url);
  if (coords && Number.isFinite(coords.lat) && Number.isFinite(coords.lng)) {
    return [coords.lat, coords.lng];
  }

  const lat = Number(shop.lati);
  const lng = Number(shop.long);
  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return [lat, lng];
  }

  return null;
}

export function getShopDirectionsUrl(shop) {
  const coords = parseGoogleMapsCoords(shop.url);
  if (coords && Number.isFinite(coords.lat) && Number.isFinite(coords.lng)) {
    return `https://www.google.com/maps/dir/?api=1&destination=${coords.lat},${coords.lng}`;
  }

  const lat = Number(shop.lati);
  const lng = Number(shop.long);
  if (Number.isFinite(lat) && Number.isFinite(lng)) {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
  }

  if (shop.address) {
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      shop.address
    )}`;
  }

  return null;
}
