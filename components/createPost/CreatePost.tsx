"use client";

import React, { useState } from "react";
import styles from "./CreatePost.module.css";
import InputTitle from "./InputTitle";
import { getLocalPostsData, setLocalPostsData } from "@/services/localData";
import { useRouter } from "next/navigation";

interface IForm {
  title: string;
  author: string;
  preview: string;
  content: string;
  category?: string;
}

const CreatePost = () => {
  const router = useRouter();

  const [form, setForm] = useState<IForm>({
    title: "",
    author: "",
    preview: "",
    content: "",
    category: "",
  });
  const [page, setPage] = useState(0);

  const handleNext = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const handleBack = () => {
    const prevPage = page - 1;
    setPage(prevPage);
  };

  const handleFinish = () => {
    if (validateForm()) {
      const postData: IPost = {
        id: `${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`,
        title: form.title,
        author: form.author,
        preview: form.preview,
        content: form.content,
        category: "",
        date: new Date().toLocaleDateString(),
        comments: 0,
      };

      const localPostsData = getLocalPostsData();
      if (!localPostsData) {
        setLocalPostsData([postData]);
      } else {
        localPostsData.push(postData);
        setLocalPostsData(localPostsData);
      }

      router.push('/');
    }
  };

  const handleInputChange = (input: string, key: string) => {
    const post: IForm = {
      ...form,
      [key]: input,
    };
    setForm(post);
  };

  const validateForm = () => {
    if (form && form.title === "") return false;
    if (form && form.author === "") return false;
    if (form && form.preview === "") return false;
    if (form && form.content === "") return false;
    return true;
  };

  return (
    <div className={styles.createPost}>
      Create a new post - {page + 1}/4
      <div>
        {page === 0 && (
          <>
            <InputTitle
              onChange={(val) => handleInputChange(val, "title")}
              value={form?.title}
              placeholder="Enter the title"
            />
            <InputTitle
              onChange={(val) => handleInputChange(val, "author")}
              value={form?.author}
              placeholder="Enter your name"
            />
          </>
        )}

        {page === 1 && (
          <InputTitle
            onChange={(val) => handleInputChange(val, "preview")}
            value={form?.preview}
            placeholder="Post preview summary"
          />
        )}

        {page === 2 && (
          <InputTitle
            onChange={(val) => handleInputChange(val, "content")}
            value={form?.content}
            placeholder="Write your blog here"
          />
        )}
        {page === 3 && (
          <>
            <p>Check your post before posting</p>
            <p>Title: {form.title}</p>
            <p>Author: {form.author}</p>
            <p>Preview: {form.preview}</p>
            <p>Content: {form.content}</p>
          </>
        )}

        <div className={styles.footer}>
          {page > 0 && (
            <button className={styles.next} onClick={handleBack}>
              Back
            </button>
          )}
          {page < 3 && (
            <button className={styles.next} onClick={handleNext}>
              Next
            </button>
          )}
          {page === 3 && (
            <button className={styles.next} onClick={handleFinish}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
