import Stench from "./Images/Stench.png";

const Tiles = [
  {
    id: 11,
    visited: false,
    x: 1,
    y: 1,
    value: "start",
    agent: true,
    image1: { Stench }
  },
  {
    id: 12,
    visited: false,
    x: 1,
    y: 3,
    value: "breeze",
    agent: false,
    image1: { Stench }
  },
  {
    id: 13,
    visited: false,
    x: 1,
    y: 3,
    value: "pit",
    agent: false,
    image1: { Stench }
  },
  {
    id: 14,
    visited: false,
    x: 1,
    y: 4,
    value: "pit",
    agent: false,
    image1: { Stench }
  },
  {
    id: 21,
    visited: false,
    x: 2,
    y: 1,
    value: "stench",
    agent: false,
    image1: { Stench }
  },
  {
    id: 22,
    visited: false,
    x: 2,
    y: 2,
    value: "free",
    agent: false,
    image1: { Stench }
  },
  {
    id: 23,
    visited: false,
    x: 2,
    y: 3,
    value: "breeze",
    agent: false,
    image1: { Stench }
  },
  {
    id: 24,
    visited: false,
    x: 2,
    y: 4,
    value: "free",
    agent: false,
    image1: { Stench }
  },
  {
    id: 31,
    visited: false,
    x: 3,
    y: 1,
    value: "wumpus",
    agent: false,
    image1: { Stench }
  },
  {
    id: 32,
    visited: false,
    x: 3,
    y: 2,
    value: "gold",
    agent: false,
    image1: { Stench }
  },
  {
    id: 33,
    visited: false,
    x: 3,
    y: 3,
    value: "pit",
    agent: false,
    image1: { Stench }
  },
  {
    id: 34,
    visited: false,
    x: 3,
    y: 4,
    value: "breeze",
    agent: false,
    image1: { Stench }
  },
  {
    id: 41,
    visited: false,
    x: 4,
    y: 1,
    value: "stench",
    agent: false,
    image1: { Stench }
  },
  {
    id: 42,
    visited: false,
    x: 4,
    y: 2,
    value: "free",
    agent: false,
    image1: { Stench }
  },
  {
    id: 43,
    visited: false,
    x: 4,
    y: 3,
    value: "breeze",
    agent: false,
    image1: { Stench }
  },

  {
    id: 44,
    visited: false,
    x: 4,
    y: 4,
    value: "pit",
    agent: false,
    image1: { Stench }
  }
];

export default Tiles;
