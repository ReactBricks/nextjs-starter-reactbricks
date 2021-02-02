import styles from './Error.module.css'

const ErrorNoHomePage = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Warning: there is no page with a "home" slug.</h1>
      <p className={styles.paragraph1}>
        Please, create a page in the editor with a slug "home" that will be your home page.
      </p>
    </div>
  )
}

export default ErrorNoHomePage
