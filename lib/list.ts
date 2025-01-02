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
    movieName: "The Matrix",
    tags: ["Sci-Fi", "Action", "Iconic Scene"],
    partName: "Part 1",
    name: "1200.mp4",
    code: 1200,
  },
  {
    id: "2",
    movieName: "The Wild Robot",
    tags: ["Sci-Fi", "Thriller", "Mind-bending"],
    partName: "Part 59",
    name: "1201.mp4",
    code: 1201,
  },
  {
    id: "3",
    movieName: "Dear Santa",
    tags: ["Sci-Fi", "Thriller", "Mind-bending"],
    partName: "Part 21",
    link: "https://www.instagram.com/p/DEPdCsqBHOE",
    platform: "Instagram",
  },
  {
    id: "4",
    movieName: "Dear Santa",
    tags: ["Sci-Fi", "Thriller", "Mind-bending"],
    partName: "Part 22",
    link: "https://streamable.com/3alswm",
    platform: "Streamable",
  },
];

export default reelsData;
