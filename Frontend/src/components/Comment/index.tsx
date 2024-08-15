import { CommentType } from "@/utils/type";
import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
export const Comment = ({ comment }: { comment: CommentType }) => {
  return (
    <div key={comment.id} className={styles.comment}>
      <div className={styles.info}>
        <h3>{comment.name}</h3>
        <p>
          email:
          <Link href={`malito:${comment.email}`}>{comment.email}</Link>
        </p>
      </div>
      <p>{comment.body}</p>
    </div>
  );
};
