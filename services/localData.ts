export const getLocalPostsData  = () => {
  const localPostsData = localStorage.getItem("posts");
  if (localPostsData) {
    return JSON.parse(localPostsData) as IPost[];
  }
}

export const setLocalPostsData = (postsData: IPost[]) => {
  localStorage.setItem("posts", JSON.stringify(postsData));
}