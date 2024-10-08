import React from "react";
import styles from "./Sidebar.module.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link href="/create-post">
        <button className="w-full">Create New Post</button>
      </Link>
    </div>
  );
};

export default Sidebar;
