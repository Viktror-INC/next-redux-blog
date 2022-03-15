export type TPosts = {
  posts: {
    id: string;
    title: string;
    text: string;
    date: string;
    imgUrl: string;
    type: string;
  }[];
  className?: string;
};
