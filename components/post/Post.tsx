import React from 'react'
import styles from './Post.module.css'

interface IPostProps {
  post: IPost
}

const Post = ({post}: IPostProps) => {
  
  return (
    <>
      <div className={styles.post}>
        <h1 className={styles.title}>
          {post.title}
        </h1>
        <p className={styles.subheader}>
          <span className={styles.author}>{post.author}</span> - posted on {post.date}
        </p>
        <p>
          {post.content}
        </p>
      </div>
    </>
  )
}

export default Post