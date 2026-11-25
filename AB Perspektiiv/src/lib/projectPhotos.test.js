import assert from "node:assert/strict";
import test from "node:test";
import { getLegacyPhotoFields, getProjectPhotos } from "./projectPhotos.js";

test("reads any number of photos from the current photos array", () => {
  const photos = Array.from(
    { length: 15 },
    (_, index) => `/images/project-${index + 1}.jpg`
  );

  assert.deepEqual(getProjectPhotos({ photos }), photos);
});

test("reads Firebase object photo lists in numeric-key order", () => {
  assert.deepEqual(
    getProjectPhotos({
      photos: {
        1: "/images/two.jpg",
        0: "/images/one.jpg",
      },
    }),
    ["/images/one.jpg", "/images/two.jpg"]
  );
});

test("continues to read projects that use legacy photo fields", () => {
  assert.deepEqual(
    getProjectPhotos({
      photoOne: " /images/one.jpg ",
      photoThree: "/images/three.jpg",
      photoEleven: "/images/eleven.jpg",
    }),
    [
      "/images/one.jpg",
      "/images/three.jpg",
      "/images/eleven.jpg",
    ]
  );
});

test("mirrors the first eleven photos into legacy fields", () => {
  const photos = Array.from(
    { length: 13 },
    (_, index) => `/images/project-${index + 1}.jpg`
  );
  const legacyFields = getLegacyPhotoFields(photos);

  assert.equal(legacyFields.photoOne, photos[0]);
  assert.equal(legacyFields.photoEleven, photos[10]);
  assert.equal(Object.keys(legacyFields).length, 11);
});
