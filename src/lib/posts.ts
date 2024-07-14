type Post = {
  title: string;
  description: string;
  user: string;
  likes: number;
  id: number;
};

function getRandomId(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Understanding TypeScript",
    description: "A comprehensive guide to learning TypeScript for JavaScript developers.",
    user: "JaneDoe123",
    likes: 150
  },
  {
    id: 2,
    title: "10 Tips for Effective Remote Work",
    description: "Learn how to maximize productivity while working from home.",
    user: "JohnSmith456",
    likes: 200
  },
  {
    id: 3,
    title: "Exploring the New Features in React 18",
    description: "An overview of the exciting new features introduced in React 18.",
    user: "ReactFan789",
    likes: 250
  },
  {
    id: 7,
    title: "Mastering CSS Grid Layout",
    description: "A step-by-step tutorial on creating complex layouts using CSS Grid.",
    user: "CSSGuru101",
    likes: 300
  },
  {
    id: 8,
    title: "Introduction to Node.js",
    description: "Getting started with server-side JavaScript using Node.js.",
    user: "NodeNinja202",
    likes: 180
  }
];
