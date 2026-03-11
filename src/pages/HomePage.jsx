import Header from '../sections/Header/Header'
import Hero from '../sections/Hero/Hero'
import About from '../sections/About/About'
import Services from '../sections/Services/Services'
import Equipment from '../sections/Equipment/Equipment'
import Portfolio from '../sections/Portfolio/Portfolio'
import Testimonials from '../sections/Testimonials/Testimonials'
import Process from '../sections/Process/Process'
import Contact from '../sections/Contact/Contact'
import Footer from '../sections/Footer/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Equipment />
        <Portfolio />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
