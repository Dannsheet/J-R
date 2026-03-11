import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-label="Sección principal">
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source
          src="https://shamyntojmzbmtlgmsla.supabase.co/storage/v1/object/public/videos/01%20(1).mp4"
          type="video/mp4"
        />
      </video>

      <div className={styles.overlay} />

      <div className={styles.content}>
      </div>

      <p className={styles.kicker}>Sonido en vivo • Tecnología avanzada • Operación profesional</p>
    </section>
  )
}
