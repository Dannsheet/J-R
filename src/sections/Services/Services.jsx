import styles from './Services.module.css'

const services = [
  {
    title: 'Eventos gubernamentales y estatales',
    desc: 'Audio claro, redundancia y operación responsable para ceremonias, inauguraciones y eventos públicos.',
  },
  { title: 'Eventos corporativos', desc: 'Conferencias, lanzamientos, premiaciones y activaciones con cobertura impecable.' },
  { title: 'Conciertos y shows en vivo', desc: 'PA profesional, monitores, microfonía y operación en vivo con criterio musical.' },
  { title: 'Bodas', desc: 'Sonorización elegante, playlists, micrófonos y soporte técnico durante toda la celebración.' },
  { title: 'Cumpleaños y privados', desc: 'Setups ágiles, buen impacto y control de niveles para experiencias memorables.' },
  { title: 'Producción técnica completa', desc: 'Planificación, montaje, pruebas, operación y desmontaje con un solo equipo.' },
]

export default function Services() {
  return (
    <section id="servicios" className="section" aria-label="Servicios">
      <div className="container">
        <h2 className="sectionTitle">Servicios</h2>
        <p className="sectionLead">Cobertura integral para eventos exigentes. Nos adaptamos a escala, tipo de venue y público.</p>

        <div className={styles.grid}>
          {services.map((s) => (
            <article className={[styles.card, 'card'].join(' ')} key={s.title}>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.desc}>{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
