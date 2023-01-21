import styles from "./Avatar.module.css";

export function Avatar(props) {
  const { imgSrc } = props;

  return <img className={styles.avatar} src={imgSrc} />;
}
