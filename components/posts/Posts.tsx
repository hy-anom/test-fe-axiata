'use client'

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import {posts} from '@/data/posts';
import { getLocalPostsData, setLocalPostsData } from "@/services/localData";

const Posts = () => {
  // mock
  const [postsData, setPostsData] = useState(posts)

  useEffect(() => {
    const postsData:IPost[] = posts;
    const localPostsData = getLocalPostsData();
    if(!localPostsData) {
      setLocalPostsData(postsData);
    }
    setPostsData(getLocalPostsData() || posts);
  },[]);


  return (
    <div className="flex flex-col gap-3">
      {
        postsData.map(post => 
          <PostCard
            key={post.id}
            post={post}
          />
        )
      }
    </div>
  );
};

export default Posts;
