import { PostType } from "@/utils/type";
import React from "react";

import styles from "./index.module.scss";
import Link from "next/link";
import { routes } from "@/routes";

export const Post = ({ post }: { post: PostType }) => {
  return (
    <Link href={routes.post(`${post.id}`)} className={styles.post}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.description}>{post.body}</p>
    </Link>
  );
};
