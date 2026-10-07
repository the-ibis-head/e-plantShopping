import { faker } from "@faker-js/faker";

faker.seed(2026);

const catalog = {
  "Air Purifying": [
    "Snake Plant",
    "Peace Lily",
    "Spider Plant",
    "Rubber Plant",
    "Boston Fern",
    "Areca Palm",
  ],
  "Low Light": [
    "ZZ Plant",
    "Cast Iron Plant",
    "Pothos",
    "Chinese Evergreen",
    "Parlor Palm",
    "Heartleaf Philodendron",
  ],
  "Succulents & Cacti": [
    "Aloe Vera",
    "Jade Plant",
    "Echeveria",
    "Haworthia",
    "Barrel Cactus",
    "String of Pearls",
  ],
};

let id = 1;
export const plants = Object.entries(catalog).flatMap(([category, names]) =>
  names.map((name) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return {
      id: id++,
      category,
      name,
      description: faker.lorem.sentence({ min: 8, max: 14 }),
      price: faker.number.int({ min: 8, max: 60 }),
      image: `https://picsum.photos/seed/${slug}/300/300`,
    };
  })
);

export const categories = Object.keys(catalog);
