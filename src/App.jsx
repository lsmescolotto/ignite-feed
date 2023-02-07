import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import "./global.css";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/88347963?v=4",
        name: "Luiza Mescolotto",
        role: "Web Developer",
      },
      content: [
        { type: "paragraph", content: "Hi there 👋" },
        {
          type: "paragraph",
          content:
            "I finally completed my new website/portfolio. It was very challenging to make all the design system and then code it by hand, but I did it! 💪🏻",
        },
        {
          type: "link",
          content: "Check it out and give feedback 👉 devonlane.design",
        },
      ],
      publishedAt: new Date("2022-05-18 15:35:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://avatars.githubusercontent.com/u/88347963?v=4",
        name: "Otávio Rodrigues",
        role: "Graphic and Web Designer",
      },
      content: [
        { type: "paragraph", content: "Hello, people!!!" },
        {
          type: "paragraph",
          content:
            "I finally completed my new website/portfolio. It was very challenging to make all the design system and then code it by hand, but I did it! 💪🏻",
        },
        {
          type: "link",
          content: "Check it out and give feedback 👉 devonlane.design",
        },
      ],
      publishedAt: new Date("2022-07-19 11:00:00"),
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
