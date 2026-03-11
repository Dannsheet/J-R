import styles from './About.module.css'

export default function About() {
  return (
    <section id="quienes-somos" className="section" aria-label="Sobre Nosotros">
      <div className="container">
        <div className={styles.grid}>
          <article className={styles.copy}>
            <h2 className="sectionTitle">J&R Sonido Profesional</h2>
            <p className="sectionLead">
              Somos una empresa peruana con trayectoria en sonido en vivo. Entregamos operación técnica, equipos premium y un
              flujo de trabajo confiable para eventos donde la calidad no es negociable.
            </p>

            <div className={styles.bullets}>
              <div className={styles.bullet}>
                <div className={styles.bulletTitle}>Experiencia real</div>
                <div className={styles.bulletText}>Conciertos, eventos corporativos y producciones públicas.</div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.bulletTitle}>Tecnología avanzada</div>
                <div className={styles.bulletText}>Consolas digitales, sistemas line array y microfonía profesional.</div>
              </div>
              <div className={styles.bullet}>
                <div className={styles.bulletTitle}>Garantía y seguridad</div>
                <div className={styles.bulletText}>Planificación, pruebas y operación en vivo con estándares.</div>
              </div>
            </div>
          </article>

          <aside className={styles.panel} aria-label="Pilares">
            <div className={[styles.panelCard, 'card'].join(' ')}>
              <div className={styles.panelTitle}>Producción técnica completa</div>
              <p className={styles.panelText}>
                Desde el diseño del sistema hasta el desmontaje. Un solo proveedor, un solo responsable.
              </p>
              <div className={styles.chips}>
                <span className={styles.chip}>Planificación</span>
                <span className={styles.chip}>Montaje</span>
                <span className={styles.chip}>Pruebas</span>
                <span className={styles.chip}>Operación</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
