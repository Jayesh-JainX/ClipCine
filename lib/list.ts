type Reel = {
  id: string;
  movieName: string;
  tags: string[];
  partName: string;
  name?: string;
  code?: number;
  link?: string;
  platform?: string;
};

const reelsData: Reel[] = [
  {
    id: "1",
    movieName: "The Wild Robot",
    tags: ["Sci-Fi", "Adventure", "Nature"],
    partName: "Part 74",
    name: "1200.mp4",
    code: 1200,
  },
  {
    id: "2",
    movieName: "The Wild Robot",
    tags: ["Sci-Fi", "Adventure", "Nature"],
    partName: "Part 59",
    name: "1201.mp4",
    code: 1201,
  },
  {
    id: "3",
    movieName: "The Wild Robot",
    tags: ["Sci-Fi", "Adventure", "Nature"],
    partName: "Part 98",
    name: "1202.mp4",
    code: 1202,
  },
  {
    id: "4",
    movieName: "The Wild Robot",
    tags: ["Sci-Fi", "Adventure", "Nature"],
    partName: "Part 102",
    name: "1203.mp4",
    code: 1203,
  },
  {
    id: "5",
    movieName: "The Angry Birds",
    tags: ["Comedy", "Animation", "Adventure"],
    partName: "Part 6",
    name: "1204.mp4",
    code: 1204,
  },
  {
    id: "6",
    movieName: "Dear Santa",
    tags: ["Christmas", "Holiday", "Family"],
    partName: "Part 57",
    link: "https://www.instagram.com/p/DEUqTcGIjSG",
    platform: "Instagram",
  },
  // {
  //   id: "4",
  //   movieName: "Dear Santa",
  //   tags: ["Christmas", "Holiday", "Family"],
  //   partName: "Part 22",
  //   link: "https://streamable.com/3alswm",
  //   platform: "Streamable",
  // },
];

export default reelsData;
