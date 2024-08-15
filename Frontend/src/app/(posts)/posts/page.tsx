import { getAllPosts } from "@/api/api";
import { Pagination, Post } from "@/components";
import { PostType } from "@/utils/type";
import styles from "./posts.module.scss";
import { Metadata } from "next";

const POSTS_PER_PAGE = 10;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { page?: string };
}): Promise<Metadata> {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const posts = await getAllPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return {
    title: `All Posts - Page ${currentPage} of ${totalPages}`,
    description: `Browse through page ${currentPage} of ${totalPages} with interesting posts on a variety of topics.`,
    openGraph: {
      title: `All Posts - Page ${currentPage} of ${totalPages}`,
      description: `Explore our collection of posts on page ${currentPage} of ${totalPages}.`,
      url: `https://TEST-TASKS.com/posts?page=${currentPage}`,
      type: "website",
    },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = parseInt(searchParams.page || "1", 10);
  const posts = await getAllPosts();

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  return (
    <div>
      <h1>
        All posts (Page {currentPage} of {totalPages})
      </h1>
      <div className={styles.containerPagination}>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
      <div className={styles.containerGrid}>
        {paginatedPosts?.map((post: PostType) => (
          <Post post={post} key={post.id} />
        ))}
      </div>

      <div className={styles.containerPagination}>
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </div>
  );
}
