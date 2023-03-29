import styles from "../css/errorNoFooter.module.css"

const ErrorNoFooter = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Warning: there is no footer.</h2>
      <p className={styles.paragraph}>
        React Bricks cannot find an entity for the footer.
      </p>
    </div>
  )
}

export default ErrorNoFooter
