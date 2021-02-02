import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.imageWrapper}>
          <img src="/react-bricks-icon.svg" alt="React Bricks" className={styles.image} />
          <div className={styles.footerWrite}>Next.js website starter</div>
        </div>
        <div className={styles.footerDate}>
          © {new Date().getFullYear()}{' '}
          <a href="https://reactbricks.com" className={styles.footerLink}>
            React Bricks
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
