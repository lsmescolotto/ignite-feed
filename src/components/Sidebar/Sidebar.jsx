import styles from "./Sidebar.module.css";
import sidebarDefaultCover from "../../assets/default-sidebar-cover.jpg";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={sidebarDefaultCover} />
      <div className={styles.profile}>
        <Avatar
          imgSrc={"https://avatars.githubusercontent.com/u/88347963?v=4"}
        />
        <strong>Luiza Mescolotto</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar perfil
        </a>
      </footer>
    </aside>
  );
}
