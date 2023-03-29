import styles from "../css/errorNoHeader.module.css"

const ErrorNoHeader = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Warning: there is no header.</h2>
      <p className={styles.paragraph}>
        React Bricks cannot find an entity for the header.
      </p>
    </div>
  )
}

export default ErrorNoHeader
