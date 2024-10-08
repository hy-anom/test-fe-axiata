"use client";

import React, { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostDetail.module.css";
import { getLocalPostsData, setLocalPostsData } from "@/services/localData";

interface IPostProps {
  posts: IPost[];
  paramsId: string;
}

const PostDetail = ({ posts, paramsId }: IPostProps) => {
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    const localPostsData = getLocalPostsData();
    if(localPostsData) {
      const post: IPost | undefined = localPostsData.find((post) => post.id === paramsId);
      setPost(post);
    }

  }, []);

  return (
    <div className={styles.postDetail}>
      {post && <Post post={post} />}
      {post &&
        post.replies &&
        post.replies.map((reply) => <Post key={reply.id} post={reply} />)}
    </div>
  );
};

export default PostDetail;
