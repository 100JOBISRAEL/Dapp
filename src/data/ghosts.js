// src/data/ghosts.js
import ghost1 from './ghost1.png'; // пример пути к изображению

const ghosts = [
  {
    id: 1,
    name: "Тень Мрffака",
    autofarm: true,
    profitGhost: 0,
    profitTon: 0,
    launches: 90,
    limit: null,
    cost: null,
    requirement: { friends: 20 },
    imageUrl: ghost1
  },
  {
    id: 2,
    name: "Призрак Забытого",
    autofarm: false,
    profitGhost: 600,
    profitTon: 0,
    launches: 30,
    limit: 10,
    cost: 5000,
    requirement: {},
    imageUrl: ghost1
  },
  {
    id: 3,
    name: "Эхо Прошлого",
    autofarm: false,
    profitGhost: 700,
    profitTon: 0,
    launches: 30,
    limit: 10,
    cost: 10000,
    requirement: {},
    imageUrl: ghost1
  },
  // Добавьте остальные призраки аналогично
  {
    id: 4,
    name: "Ночной Странник",
    autofarm: false,
    profitGhost: 960,
    profitTon: 0,
    launches: 30,
    limit: 10,
    cost: 18000,
    requirement: {},
    imageUrl: ghost1
  },
  {
    id: 4,
    name: "Ночной Странник",
    autofarm: false,
    profitGhost: 960,
    profitTon: 0,
    launches: 30,
    limit: 10,
    cost: 18000,
    requirement: {},
    imageUrl: ghost1
  },
  // ...
];

export default ghosts;
