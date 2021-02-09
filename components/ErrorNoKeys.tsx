import styles from './Error.module.css'

const ErrorNoKeys = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Warning: missing App credentials</h1>
      <p className={styles.paragraph1}>
        <code className={styles.code}>NEXT_PUBLIC_APP_ID</code> and{' '}
        <code className={styles.code}>API_KEY</code> are not configured in your{' '}
        <code className={styles.code}>.env.local</code> file.
      </p>
      <p className={styles.paragraph2}>
        Please create a <code className={styles.code}>.local.env</code> file with:
      </p>
      <pre className={styles.pre}>
        {`NEXT_PUBLIC_APP_ID=...
API_KEY=...`}
      </pre>
    </div>
  )
}

export default ErrorNoKeys
