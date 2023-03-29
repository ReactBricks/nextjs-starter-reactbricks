import styles from "../css/errorNoKeys.module.css"

const ErrorNoKeys = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Warning: missing App credentials</h1>
      <p className={styles.marginFromTitle}>
        <code className={styles.codeError}>NEXT_PUBLIC_APP_ID</code> and{" "}
        <code className={styles.codeError}>API_KEY</code> are not configured in
        your <code className={styles.codeError}>.env.local</code> file.
      </p>
      <p className={styles.marginFromCode}>
        Please create a <code className={styles.codeError}>.env.local</code>{" "}
        file with:
      </p>
      <pre className={styles.codeError}>
        {`NEXT_PUBLIC_APP_ID=...
API_KEY=...`}
      </pre>
    </div>
  )
}

export default ErrorNoKeys
