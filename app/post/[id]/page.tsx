import PostDetail from "@/components/post/PostDetail";
import { posts } from "@/data/posts";

const PostPage = ({ params }: { params: { id: string } }) => {
  return <div>{posts && <PostDetail posts={posts} paramsId={params.id}/>}</div>;
};

export default PostPage;
