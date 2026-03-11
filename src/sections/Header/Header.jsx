import { useEffect, useState } from 'react'
import styles from './Header.module.css'

const navItems = [
  { href: '#quienes-somos', label: 'Quiénes Somos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#equipamiento', label: 'Equipamiento' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 767) setIsOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.topBanner}>
        <p className={styles.bannerText}>Pepito Sanchez gerente propietario</p>
      </div>

      <nav className={styles.navbar} aria-label="Menú principal">
        <div className={styles.navbarContainer}>
          <button
            className={[styles.menuToggle, isOpen ? styles.active : ''].join(' ')}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
            type="button"
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>

          <a className={styles.navLogo} href="#inicio" aria-label="J&R Sonido Profesional - Inicio">
            <img src="/assets/hero/image.png" alt="J&R Sonido Profesional" />
          </a>

          <ul className={[styles.navMenu, isOpen ? styles.active : ''].join(' ')}>
            {navItems.map((item) => (
              <li className={styles.navItem} key={item.href}>
                <a className={styles.navLink} href={item.href} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a className={[styles.cta, 'btn', 'btnPrimary'].join(' ')} href="#contacto">
            Cotizar
          </a>
        </div>
      </nav>

      <div
        className={[styles.overlay, isOpen ? styles.active : ''].join(' ')}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      />
    </header>
  )
}
