import styles from "./LengthItem.module.css";

function LengthItem({ index, active }: { index: number; active: boolean }) {
  return (
    <li className={`${styles.item} ${active ? "active" : ""}`}>{index}</li>
  );
}

export default LengthItem;
