import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Producción Corporativa',
    quote: 'Audio impecable, montaje puntual y soporte durante todo el evento. Se notó el profesionalismo.',
  },
  {
    name: 'Show en vivo',
    quote: 'Excelente criterio técnico y musical. El público escuchó claro y con potencia controlada.',
  },
  {
    name: 'Evento privado',
    quote: 'Muy buena atención, equipos de calidad y comunicación rápida. Recomendados.',
  },
]

export default function Testimonials() {
  return (
    <section className="section" aria-label="Testimonios">
      <div className="container">
        <h2 className="sectionTitle">Testimonios</h2>
        <p className="sectionLead">Confianza construida con resultados, puntualidad y operación en vivo sin improvisaciones.</p>

        <div className={styles.grid}>
          {testimonials.map((t) => (
            <figure className={[styles.card, 'card'].join(' ')} key={t.name}>
              <blockquote className={styles.quote}>“{t.quote}”</blockquote>
              <figcaption className={styles.name}>{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
