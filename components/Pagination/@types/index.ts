export type TPagination = {
  posts: {}[];
  postPerPage: number;
  setCurrentPosts: React.Dispatch<React.SetStateAction<any[]>>;
  indexFromStore: number;
  setIndexFromStore: (index: number) => void;
};
