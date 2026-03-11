import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            J&R <span>SONIDO</span>
          </div>
          <p className={styles.tagline}>Producción técnica y alquiler de sonido profesional para eventos en Lima.</p>
        </div>

        <div className={styles.meta}>
          <p className={styles.copy}>&copy; 2026 J&R Sonido Profesional. Todos los derechos reservados.</p>
          <p className={styles.legal}>Servicio, garantía y operación profesional en vivo.</p>
        </div>
      </div>
    </footer>
  )
}
