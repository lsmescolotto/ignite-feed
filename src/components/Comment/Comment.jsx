import styles from "./Comment.module.css";
import { Trash, HandsClapping, HandbagSimple } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

  function handleDeleteComment() {
    console.log("deletou");

    onDeleteComment(content);
  }
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        imgSrc="https://avatars.githubusercontent.com/u/88347963?v=4"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Luiza Mescolotto</strong>
              <time
                title="May, 11, 2022 at 08:13am"
                dateTime="2022-05-11 08:13:30"
              >
                1 hour ago
              </time>
            </div>
            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping />
            Clap <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
