import { Avatar } from "../Avatar/Avatar";

import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar imgSrc="https://avatars.githubusercontent.com/u/88347963?v=4" />
          <div className={styles.authorInfo}>
            <strong>Luiza Mescolotto</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time
          title="11 de Maio de 2022 às 08:13am"
          dateTime="2022-05-11 08:13:30"
        >
          posted 1 hour ago
        </time>
      </header>
      <div className={styles.content}>
        <p>Hi there 👋</p>

        <p>
          I finally completed my new website/portfolio. It was very challenging
          to make all the design system and then code it by hand, but I did it!
          💪🏻{" "}
        </p>

        <p>
          <a href="">Check it out and give feedback 👉 devonlane.design</a>
        </p>

        <p>
          <a href="">#uiux #userexperience</a>
        </p>
      </div>
    </article>
  );
}
