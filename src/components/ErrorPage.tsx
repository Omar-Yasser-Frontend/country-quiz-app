import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={styles.error}>
      <p>Failed to fetch questions</p>
    </div>
  );
}

export default ErrorPage;
