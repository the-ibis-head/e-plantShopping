import { faker } from "@faker-js/faker";

const plantTypes = [
  "Monstera Deliciosa",
  "Snake Plant",
  "Pothos",
  "Spider Plant",
  "Peace Lily",
  "ZZ Plant",
  "Fiddle Leaf Fig",
  "Rubber Plant",
  "Aloe Vera",
  "Lavender",
  "Rosemary",
  "Mint",
  "Basil",
  "Jade Plant",
  "African Violet",
  "Boston Fern",
];

const descriptions = {
  aromatic: [
    "Known for its pleasant fragrance that fills any room naturally.",
    "Releases soothing scents when touched or during watering.",
    "Perfect for creating a calming atmosphere in your living space.",
  ],
  medicinal: [
    "Contains natural compounds beneficial for health and wellness.",
    "Traditional healing properties passed down through generations.",
    "Commonly used in herbal remedies and natural medicine.",
  ],
  ornamental: [
    "Adds aesthetic beauty with stunning foliage and unique patterns.",
    "Designed to enhance the visual appeal of any interior space.",
    "Low maintenance while maintaining impressive appearance.",
  ],
};

const plantSections = [
  {
    id: "aromatic",
    title: "Aromatic Plants",
    category: "aromatic",
    plants: [],
  },
  {
    id: "medicinal",
    title: "Medicinal Plants",
    category: "medicinal",
    plants: [],
  },
  {
    id: "ornamental",
    title: "Ornamental Plants",
    category: "ornamental",
    plants: [],
  },
];

plantSections.forEach((section) => {
  const plantCount = faker.number.int({ min: 3, max: 6 });
  for (let i = 0; i < plantCount; i++) {
    const plantName = faker.helpers.arrayElement(plantTypes);
    const price = faker.number.float({ min: 15, max: 75, precision: 0.99 });
    section.plants.push({
      id: `${section.category}-${i}-${Math.random().toString(36).substr(2, 9)}`,
      name: `${plantName} ${String.fromCharCode(65 + i)}`,
      description: faker.helpers.arrayElement(descriptions[section.category]),
      cost: price,
      unitCost: price,
      imageUrl: `https://picsum.photos/seed/${plantName.replace(/\s/g, "")}${i}/300/300`,
      category: section.category,
      isPopular: Math.random() > 0.7,
    });
  }
});

const allPlants = plantSections.flatMap((section) =>
  section.plants.map((plant) => ({
    ...plant,
    sectionId: section.id,
    sectionTitle: section.title,
  }))
);

export { plantSections, allPlants };
export default allPlants;
