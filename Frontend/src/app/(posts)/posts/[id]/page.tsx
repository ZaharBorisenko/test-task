import { getAllCommentPost, getPost, getUser } from "@/api/api";
import { CommentType, PostType, UserType } from "@/utils/type";
import styles from "./post.module.scss";
import { Comment } from "@/components";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  try {
    const post: PostType = await getPost(params.id);
    const user: UserType = await getUser(params.id);

    return {
      title: post.title,
      description: post.body.slice(0, 150),
      openGraph: {
        title: post.title,
        description: post.body.slice(0, 150),
        url: `https://TEST-TASK.com/posts/${params.id}`,
        type: "article",
        authors: [user.name],
      },
    };
  } catch (error) {
    return {
      title: "Post not found",
      description: "An error occurred while loading the post.",
    };
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const post: PostType = await getPost(params.id);
    const user: UserType = await getUser(`${post.userId}`);

    const comment: CommentType[] = await getAllCommentPost(params.id);

    return (
      <>
        <div className={styles.post}>
          <div>
            <p>
              Author: <span className={styles.author}>{user.name}</span>
            </p>
            <h3 className={styles.title}>{post.title}</h3>
            <p className={styles.description}>{post.body}</p>
          </div>
        </div>

        <div className={styles.post}>
          <h2>Comments:</h2>
          {comment.map((c) => (
            <Comment comment={c} key={c.id} />
          ))}
        </div>
      </>
    );
  } catch (error) {
    return (
      <div>
        <p>An error occurred while uploading posts.</p>
      </div>
    );
  }
}
