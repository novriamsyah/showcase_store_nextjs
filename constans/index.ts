import carrent from "../public/images/carrent.png";
import jobit from "../public/images/jobit.png";
import tripguide from "../public/images/tripguide.png";

const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "shop",
    title: "Shop",
  },
  {
    id: "lifestyle",
    title: "Lifestyle",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Cara Memilih Style Hari Minggu", 
    description:
      "style hari minggu cocok untukmu! lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "dress",
        color: "blue-text-gradient",
      },
      {
        name: "pants",
        color: "green-text-gradient",
      },
      {
        name: "jacket",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_link: "https://github.com/",
  },
  {
    name: "Style Untuk Pria Introvert & Ekstravert",
    description:
      "Jangan khawatir pria introvert lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "clothes",
        color: "blue-text-gradient",
      },
      {
        name: "big",
        color: "green-text-gradient",
      },
      {
        name: "size",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_link: "https://github.com/",
  },
  {
    name: "Tips Memilih Ukuran Baju",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: [
      {
        name: "trip",
        color: "blue-text-gradient",
      },
      {
        name: "casual",
        color: "green-text-gradient",
      },
      {
        name: "booking",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_link: "https://github.com/",
  },
];

export { navLinks, projects };
