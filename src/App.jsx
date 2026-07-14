import { useEffect, useRef, useState } from 'react'
import './App.css'

const chiSiamoSlides = [
  '/images/DSCF3326.jpg',
  '/images/_DSF0838.jpg',
  '/images/DSCF3362.JPG',
  '/images/DSCF6234.jpg',
  '/images/PHOTO-2026-02-21-14-02-05.jpg'
]

const passeggiSlides = [
  '/images/DSCF4169.JPG',
  '/images/DSCF4195.JPG',
  '/images/DSCF4126.JPG',
  '/images/DSCF4176.JPG',
  '/images/DSCF4191.JPG'
]

const navItems = [
  { label: 'Chi siamo', href: '#chi-siamo' },
  { label: 'I Passeggi', href: '#passeggi' },
  { label: 'Unisciti', href: '#unisciti' },
  { label: 'Collabora', href: '#collabora' },
  { label: 'Contatti', href: '#contatti' }
]

const galleryItems = [
  { label: 'Passeggi', src: '/images/DSCF4125.JPG' },
  { label: 'Volontariato', src: '/images/DSCF4162.JPG' },
  { label: 'Spazi comuni', src: '/images/DSCF4191.JPG' },
  { label: 'Attività', src: '/images/DSCF4202.JPG' },
  { label: 'Fano', src: '/images/PHOTO-2026-02-21-14-02-05.jpg' },
  { label: 'Insieme', src: '/images/DSCF3347.jpg' }
]

const collaborators = [
  { name: 'Comune di Fano', logo: '/logo/partner/Comune.webp' },
  { name: 'ForBici FIAB Fano', logo: '/logo/partner/forbici.png' },
  { name: 'Associazione Fanocuore ONLUS', logo: '/logo/partner/Fanocuore.png' },
  { name: 'APG', logo: '/logo/partner/APG.png' },
  { name: 'Fondazione', logo: '/logo/partner/fondazione.png' }
]

function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [activePasseggi, setActivePasseggi] = useState(0)
  const [showCollaboraBar, setShowCollaboraBar] = useState(false)
  const heroRef = useRef(null)
  const collaboraRef = useRef(null)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveSlide((i) => (i + 1) % chiSiamoSlides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setActivePasseggi((i) => (i + 1) % passeggiSlides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current
      const collabora = collaboraRef.current
      if (!hero || !collabora) return
      const heroBottom = hero.getBoundingClientRect().bottom
      const collaboraTop = collabora.getBoundingClientRect().top
      const pastHero = heroBottom < 80
      const reachedCollabora = collaboraTop < window.innerHeight * 0.5
      setShowCollaboraBar(pastHero && !reachedCollabora)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div className="page-shell">
      <nav className="navbar">
        <div className="navbar-inner">
          <a className="navbar-brand" href="#home" aria-label="Anicò">
            <img src="/logo/logo-anico.png" alt="Logo Anicò" className="brand-logo" />
          </a>
          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <a
        className={`collabora-bar${showCollaboraBar ? ' is-visible' : ''}`}
        href="#collabora"
      >
        <span className="collabora-bar-text">Sei un&apos;associazione? Collaboriamo!</span>
        <span className="collabora-bar-cta">Scrivici</span>
      </a>

      <header className="hero" id="home" ref={heroRef}>
        <div className="hero-content">
          <img
            src="/logo/scritta-anico-b.png"
            alt="Anicò"
            className="hero-wordmark"
          />
          <h1>
            Un pezzetto del tuo tempo. La promessa di passarlo bene.
          </h1>
          <p className="hero-subtitle">
            Associazione di volontariato a Fano. Ci prendiamo cura degli spazi comuni e creiamo momenti di aggregazione autentici.
          </p>
        </div>
      </header>

      <main>
        <section className="section chi-siamo" id="chi-siamo">
          <div className="chi-siamo-hero">
            <div className="chi-siamo-media" aria-label="Foto di Anicò">
              {chiSiamoSlides.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Anicò ${index + 1}`}
                  className={index === activeSlide ? 'is-active' : ''}
                />
              ))}
            </div>
            <div className="chi-siamo-copy">
              <p className="section-label">Chi siamo</p>
              <h2>Un&apos;idea semplice, diventata un&apos;associazione.</h2>
              <p className="lead">
                Anicò nasce dalla volontà di creare momenti di aggregazione per ragazze e ragazzi di Fano.
              </p>
              <p>
                Stiamo insieme facendo cose, cose completamente diverse tra loro, a volte un po&apos; bizzarre, ma sempre in modo genuino. Ci piace prenderci cura degli spazi comuni, in particolare dei Passeggi. Ci piace la vita all&apos;aria aperta e stare insieme.
              </p>
            </div>
          </div>
        </section>

        <section className="section passeggi" id="passeggi">
          <div className="passeggi-hero">
            <div className="passeggi-media" aria-label="I Passeggi a Fano">
              {passeggiSlides.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`I Passeggi ${index + 1}`}
                  className={index === activePasseggi ? 'is-active' : ''}
                />
              ))}
            </div>
            <div className="passeggi-copy">
              <p className="section-label">I Passeggi</p>
              <h2>Un pezzo di storia della nostra città.</h2>
              <p>
                I Passeggi sono un pezzo di storia di Fano. Esistono dal 1783: lecci, tigli, ippocastani, un polmone verde nel cuore della città.
              </p>
              <p>
                Abbiamo deciso di prendercene cura. Dal 2025 abbiamo un accordo con il Comune per rendere i Passeggi un posto più bello e accogliente: non solo un viale di passaggio, ma un luogo in cui fermarsi e stare bene. Ci occupiamo della manutenzione, organizziamo eventi, facciamo in modo che i Passeggi siano vissuti, non solo attraversati. Uno spazio vissuto è uno spazio che si protegge da solo.
              </p>
            </div>
          </div>
        </section>

        <section className="section unisciti" id="unisciti">
          <div className="unisciti-media" aria-hidden="true">
            <img src="/images/DSCF3369.JPG" alt="" />
          </div>
          <div className="unisciti-card">
            <h2>Unisciti a noi, se ti va.</h2>
            <p>
              Non serve nessun requisito particolare. Basta la voglia di dedicare un po&apos; del proprio tempo a stare insieme e prendersi cura di quello che ci sta intorno.
            </p>
            <div className="card-price">€10</div>
            <p className="card-price-label">quota associativa annuale</p>
            <p className="card-detail">
              L&apos;anno sociale va fino al 31 agosto. A settembre si rinnova la tessera.
            </p>
            <div className="card-actions">
              <a className="join-btn primary" href="https://forms.gle/XBZu9ayZ7vqH83a48" target="_blank" rel="noreferrer">
                Compila il modulo di iscrizione
              </a>
              <a className="join-btn secondary" href="https://paypal.me/virginiagiraldi" target="_blank" rel="noreferrer">
                Paga la quota con PayPal
              </a>
            </div>
          </div>
        </section>

        <section className="section collaborazioni" id="collabora" ref={collaboraRef}>
          <div className="section-inner text-centered">
            <div className="collabora-card">
              <p className="section-label">Collaborazioni</p>
              <h2>Sei un&apos;associazione? Collaboriamo!</h2>
              <p>
                Il territorio cresce quando le idee si incontrano. Cerchiamo sempre nuove sinergie per arricchire il tessuto sociale di chi ci vive intorno. Riconosciamo il ruolo delle associazioni, degli enti e in generale del volontariato, e per questo vogliamo creare ponti.
              </p>
              <p>
                Siamo pront* a sostenere, co-progettare e condividere percorsi con chi, come noi, ha a cuore il bene comune. Scrivici!
              </p>
            </div>
            <a className="collabora-cta" href="mailto:anico.odv@gmail.com?subject=Proposta%20di%20collaborazione">
              Scrivici una mail
            </a>

            <p className="marquee-label">Hanno già collaborato con noi</p>
            <div className="logo-marquee">
              <div className="logo-track">
                {collaborators.concat(collaborators).map((partner, index) => (
                  <span className="logo-pill" key={`${partner.name}-${index}`}>
                    <img src={partner.logo} alt={partner.name} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="contatti">
        <div className="footer-inner">
          <div className="footer-col">
            <h4>Scrivici</h4>
            <p>
              <a href="mailto:anico.odv@gmail.com">anico.odv@gmail.com</a>
            </p>
          </div>
          <div className="footer-col footer-logo-wrap">
            <img src="/logo/logo-anico.png" alt="Logo Anicò" className="footer-logo" />
          </div>
          <div className="footer-col social-col">
            <h4>Seguici</h4>
            <div className="footer-social">
              <a href="https://www.instagram.com/anico.odv/" target="_blank" rel="noreferrer" aria-label="Instagram">
                Instagram
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Anicò ODV — Organizzazione di Volontariato · Fano (PU)</p>
        </div>
      </footer>
    </div>
  )
}

export default App
