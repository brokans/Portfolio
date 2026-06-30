import { ref, set } from "firebase/database";
import { database } from "../firebase";

const DATABASE_URL = import.meta.env.VITE_FIREBASE_DATABASE_URL;

export const COLLECTIONS = {
  projects: "projects",
  shops: "shops",
};

export async function readCollection(key) {
  if (!DATABASE_URL) {
    throw new Error("VITE_FIREBASE_DATABASE_URL is not configured");
  }

  const response = await fetch(`${DATABASE_URL}/${COLLECTIONS[key]}.json`);

  if (!response.ok) {
    throw new Error(`Andmete lugemine ebaõnnestus: ${key}`);
  }

  const data = await response.json();
  return data || [];
}

export async function writeCollection(key, data) {
  await set(ref(database, COLLECTIONS[key]), data);
}
