import { ref, set } from "firebase/database";
import { database } from "../firebase";

const DATABASE_URL =
  process.env.REACT_APP_FIREBASE_DATABASE_URL ||
  "https://bros-webshop-default-rtdb.europe-west1.firebasedatabase.app";

export const COLLECTIONS = {
  projects: "projects",
  shops: "shops",
  courses: "courses",
  products: "products",
  categories: "categories",
  interior: "interior",
};

export async function readCollection(key) {
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
