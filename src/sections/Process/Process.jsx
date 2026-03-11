import styles from './Process.module.css'

const steps = [
  { title: 'Planificación', desc: 'Relevamiento, rider, venue, aforo y objetivos de audio.' },
  { title: 'Montaje', desc: 'Instalación segura, cableado ordenado y chequeo de energía.' },
  { title: 'Pruebas de sonido', desc: 'Ganancias, PA tuning, monitores y line check.' },
  { title: 'Operación en vivo', desc: 'Mezcla, supervisión y reacción rápida ante cambios.' },
  { title: 'Desmontaje', desc: 'Retiro eficiente, inventario y entrega del espacio.' },
]

export default function Process() {
  return (
    <section className="section" aria-label="Proceso de trabajo">
      <div className="container">
        <h2 className="sectionTitle">Proceso de Trabajo</h2>
        <p className="sectionLead">Un flujo claro reduce riesgos y asegura consistencia en cada show.</p>

        <ol className={styles.grid}>
          {steps.map((s) => (
            <li className={[styles.step, 'card'].join(' ')} key={s.title}>
              <div className={styles.stepTitle}>{s.title}</div>
              <div className={styles.stepDesc}>{s.desc}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
