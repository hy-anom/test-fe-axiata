import PostCard from "@/components/posts/PostCard";
import Posts from "@/components/posts/Posts";
import Sidebar from "@/components/sidebar/Sidebar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex gap-3">
        <div>
          <Posts />
        </div>
        <div className="flex-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
