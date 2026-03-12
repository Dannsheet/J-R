import { useEffect, useMemo, useState } from 'react'
import styles from './About.module.css'

export default function About() {
  const images = useMemo(() => ['/assets/hero/01.jpg', '/assets/hero/02.jpg', '/assets/hero/03.jpg'], [])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 4300)

    return () => window.clearInterval(id)
  }, [images.length])

  return (
    <section id="quienes-somos" className={["section", styles.about].join(' ')} aria-label="Sobre Nosotros">
      <div className={styles.background} aria-hidden="true">
        {images.map((src, idx) => (
          <img
            className={[styles.bgImage, idx === activeIndex ? styles.active : ''].join(' ')}
            key={src}
            src={src}
            alt=""
            loading={idx === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        ))}
      </div>
      <div className={styles.overlay} aria-hidden="true" />

      <div className="container">
        <div className={styles.grid}>
          <article className={styles.copy}>
            <h2 className="sectionTitle">J&R Sonido Profesional</h2>
            <p className="sectionLead">
              Somos una empresa peruana con trayectoria en sonido en vivo. Entregamos operación técnica, equipos premium y un
              flujo de trabajo confiable para eventos donde la calidad no es negociable.
            </p>
          </article>

          <aside className={styles.panel} aria-label="Pilares">
          </aside>
        </div>
      </div>
    </section>
  )
}
