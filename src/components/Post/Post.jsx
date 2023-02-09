import { useState } from "react";
import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";

import styles from "./Post.module.css";

export function Post({ post }) {
  const { author } = post;

  const formattedPulishDate = format(post.publishedAt, "dd LLLL 'at' HH:mm'h'");
  const distanceFromPublishDateToNow = formatDistanceToNow(post.publishedAt, {
    addSuffix: true,
  });

  const [comments, setComments] = useState([1]);
  const [newCommentText, setNewCommentText] = useState("");

  function handleCreateNewComment(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment != commentToDelete
    );

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("O campo não pode ser vazio");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imgSrc={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={formattedPulishDate}
          dateTime={post.publishedAt.toISOString()}
        >
          {distanceFromPublishDateToNow}
        </time>
      </header>
      <div className={styles.content}>
        {post.content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <a key={index} href="">
                {line.content}
              </a>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Give your feedback</strong>

        <textarea
          placeholder="Leave a comment"
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publish
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}
