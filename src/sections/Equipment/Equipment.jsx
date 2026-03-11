import styles from './Equipment.module.css'

const items = [
  { title: 'Consolas digitales', desc: 'Mezcla precisa, escenas, snapshots y procesamiento avanzado.' },
  { title: 'Sistemas line array', desc: 'Cobertura uniforme, presión sonora controlada y claridad en el público.' },
  { title: 'Microfonía profesional', desc: 'Voces e instrumentos con definición, aislamiento y confiabilidad.' },
  { title: 'Monitoreo', desc: 'Wedges e in-ear para performance segura y consistente.' },
]

export default function Equipment() {
  return (
    <section id="equipamiento" className="section" aria-label="Equipamiento">
      <div className="container">
        <div className={styles.header}>
          <div>
            <h2 className="sectionTitle">Equipamiento</h2>
            <p className="sectionLead">Trabajamos con marcas y sistemas diseñados para sonido en vivo profesional.</p>
          </div>
          <a className="btn btnSecondary" href="#contacto">
            Consultar disponibilidad
          </a>
        </div>

        <div className={styles.grid}>
          {items.map((i) => (
            <article className={[styles.item, 'card'].join(' ')} key={i.title}>
              <h3 className={styles.title}>{i.title}</h3>
              <p className={styles.desc}>{i.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
