"use client";

import React, { useEffect, useState } from "react";
import styles from "./PostCard.module.css";
import Link from "next/link";

interface IPostCardProps {
  post: IPost;
}

const PostCard = ({ post }: IPostCardProps) => {

  return (
    <Link className={styles.card} href={`/post/${post.id}`}>
      <div className={styles.header}>
        <p>{post.title}</p>
      </div>
      <p className={styles.subheader}>
        by <span className={styles.author}>{post.author}</span> - posted on{" "}
        {post.date}
      </p>
      <div className={styles.content}>
        <p>{post.preview}</p>
      </div>
      <div className={styles.footer}>
        <p>{post.comments} comments</p>
      </div>
    </Link>
  );
};

export default PostCard;
