import styles from "./Avatar.module.css";

export function Avatar(props) {
  const { imgSrc, hasBorder = true } = props;

  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={imgSrc}
    />
  );
}
