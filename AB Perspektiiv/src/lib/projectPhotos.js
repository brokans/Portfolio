const LEGACY_PHOTO_KEYS = [
  "photoOne",
  "photoTwo",
  "photoThree",
  "photoFour",
  "photoFive",
  "photoSix",
  "photoSeven",
  "photoEight",
  "photoNine",
  "photoTen",
  "photoEleven",
];

function normalizePhotos(photos) {
  return photos
    .filter((photo) => typeof photo === "string" && photo.trim())
    .map((photo) => photo.trim());
}

export function getProjectPhotos(project) {
  if (!project || typeof project !== "object") {
    return [];
  }

  const storedPhotos = project.photos;
  const photos = Array.isArray(storedPhotos)
    ? storedPhotos
    : storedPhotos && typeof storedPhotos === "object"
      ? Object.keys(storedPhotos)
          .sort((left, right) => Number(left) - Number(right))
          .map((key) => storedPhotos[key])
      : [];
  const normalizedPhotos = normalizePhotos(photos);

  if (normalizedPhotos.length > 0) {
    return normalizedPhotos;
  }

  return normalizePhotos(LEGACY_PHOTO_KEYS.map((key) => project[key] || ""));
}

export function getLegacyPhotoFields(photos) {
  return LEGACY_PHOTO_KEYS.reduce((fields, key, index) => {
    fields[key] = photos[index] || "";
    return fields;
  }, {});
}
