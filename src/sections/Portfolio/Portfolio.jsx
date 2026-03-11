import styles from './Portfolio.module.css'

const placeholders = Array.from({ length: 6 }).map((_, idx) => ({
  title: `Evento ${idx + 1}`,
  subtitle: 'Producción y operación en vivo',
}))

export default function Portfolio() {
  return (
    <section id="portafolio" className="section" aria-label="Portafolio">
      <div className="container">
        <h2 className="sectionTitle">Proyectos y Eventos Realizados</h2>
        <p className="sectionLead">Galería optimizada en grid moderno. Lista para conectar con Supabase Storage a futuro.</p>

        <div className={styles.grid}>
          {placeholders.map((p) => (
            <article className={[styles.tile, 'card'].join(' ')} key={p.title}>
              <div className={styles.tileMedia} aria-hidden="true" />
              <div className={styles.tileBody}>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.subtitle}>{p.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
