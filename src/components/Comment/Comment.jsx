import styles from "./Comment.module.css";
import { Trash, HandsClapping } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar imgSrc="https://avatars.githubusercontent.com/u/88347963?v=4" />
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
            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>Very good! Congratulations! 👋</p>
        </div>
        <footer>
          <button>
            <HandsClapping />
            Clap <span>01</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
