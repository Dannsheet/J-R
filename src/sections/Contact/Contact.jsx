import { useMemo, useState } from 'react'
import useAsync from '../../hooks/useAsync'
import { createContactRequest } from '../../services/contactRequests'
import styles from './Contact.module.css'

const initial = { name: '', email: '', phone: '', eventType: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState({ state: 'idle', message: '' })
  const createRequest = useAsync(createContactRequest)

  const errors = useMemo(() => {
    const e = {}
    if (!values.name.trim()) e.name = 'Ingresa tu nombre'
    if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Ingresa un email válido'
    if (values.phone && values.phone.length < 6) e.phone = 'Teléfono inválido'
    if (!values.message.trim() || values.message.trim().length < 10) e.message = 'Cuéntanos un poco más (mínimo 10 caracteres)'
    return e
  }, [values])

  async function onSubmit(e) {
    e.preventDefault()
    if (Object.keys(errors).length > 0) {
      setStatus({ state: 'error', message: 'Revisa los campos marcados.' })
      return
    }

    setStatus({ state: 'loading', message: 'Enviando...' })
    try {
      await createRequest.run({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim() || null,
        event_type: values.eventType.trim() || null,
        message: values.message.trim(),
        source: 'web',
      })

      setStatus({ state: 'success', message: 'Solicitud enviada. Te contactaremos pronto.' })
      setValues(initial)
    } catch (err) {
      setStatus({ state: 'error', message: 'No se pudo enviar. Intenta nuevamente en unos minutos.' })
    }
  }

  return (
    <section id="contacto" className="section" aria-label="Contacto">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <h2 className="sectionTitle">Contacto</h2>
            <p className="sectionLead">
              Envíanos los detalles de tu evento y te respondemos con una propuesta. Preparado para escalar a cotizaciones
              automáticas.
            </p>

            <div className={styles.ctas}>
              <a className="btn btnPrimary" href="https://wa.me/51999999999" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="btn btnSecondary" href="mailto:contacto@tusitio.com">
                Email
              </a>
            </div>
          </div>

          <form className={[styles.form, 'card'].join(' ')} onSubmit={onSubmit}>
            <div className={styles.row}>
              <label className={styles.label}>
                Nombre
                <input
                  className={[styles.input, errors.name ? styles.invalid : ''].join(' ')}
                  value={values.name}
                  onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  autoComplete="name"
                />
              </label>

              <label className={styles.label}>
                Email
                <input
                  className={[styles.input, errors.email ? styles.invalid : ''].join(' ')}
                  value={values.email}
                  onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                  autoComplete="email"
                  inputMode="email"
                />
              </label>
            </div>

            <div className={styles.row}>
              <label className={styles.label}>
                Teléfono (opcional)
                <input
                  className={[styles.input, errors.phone ? styles.invalid : ''].join(' ')}
                  value={values.phone}
                  onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>

              <label className={styles.label}>
                Tipo de evento (opcional)
                <input
                  className={styles.input}
                  value={values.eventType}
                  onChange={(e) => setValues((v) => ({ ...v, eventType: e.target.value }))}
                  placeholder="Corporativo / Concierto / Boda..."
                />
              </label>
            </div>

            <label className={styles.label}>
              Mensaje
              <textarea
                className={[styles.textarea, errors.message ? styles.invalid : ''].join(' ')}
                value={values.message}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                rows={5}
              />
            </label>

            <div className={styles.footer}>
              <button className="btn btnPrimary" type="submit" disabled={status.state === 'loading'}>
                Enviar solicitud
              </button>
              <div className={styles.status} role="status" aria-live="polite">
                {status.message}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
