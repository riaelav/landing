import './App.css'

const navItems = [
  { label: 'Chi siamo', href: '#chi-siamo' },
  { label: 'I Passeggi', href: '#passeggi' },
  { label: 'Unisciti', href: '#unisciti' },
  { label: 'Collabora', href: '#collabora' },
  { label: 'Contatti', href: '#contatti' }
]

const galleryItems = [
  'Foto gallery 1',
  'Foto gallery 2',
  'Foto gallery 3',
  'Foto gallery 4',
  'Foto gallery 5',
  'Foto gallery 6'
]

const collaborators = ['Comune di Fano', 'ForBici FIAB Fano', 'Associazione Fanocuore ONLUS']

function App() {
  return (
    <div className="page-shell">
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-brand" aria-label="Anicò">
            <span className="brand-mark">A</span>
            <span className="brand-text">anicò</span>
          </div>
          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <p className="hero-badge">ODV · Fano</p>
          <h1>
            Ti chiediamo un pezzetto del tuo tempo. In cambio, la promessa che lo passerai bene.
          </h1>
          <p className="hero-subtitle">
            Associazione di volontariato a Fano. Ci prendiamo cura degli spazi comuni e creiamo momenti di aggregazione autentici.
          </p>
          <a className="primary-link" href="#chi-siamo">
            Scopri chi siamo
          </a>
        </div>
      </header>

      <main>
        <section className="section chi-siamo" id="chi-siamo">
          <div className="section-inner split">
            <div className="split-text">
              <p className="section-label">Chi siamo</p>
              <h2>Nata per caso, cresciuta per scelta.</h2>
              <p className="lead">
                Anicò nasce dalla volontà di creare momenti di aggregazione per ragazze e ragazzi di Fano.
              </p>
              <p>
                Stiamo insieme facendo cose, cose completamente diverse tra loro, a volte un po&apos; bizzarre, ma sempre in modo genuino. Ci piace prenderci cura degli spazi comuni, in particolare dei Passeggi. Ci piace la vita all&apos;aria aperta e stare insieme.
              </p>
            </div>
            <div className="panel-card" aria-label="Il nome Anicò" />
          </div>
        </section>

        <section className="gallery-strip" aria-label="Gallery">
          <div className="gallery-scroll">
            {galleryItems.map((item) => (
              <div className="gallery-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section passeggi" id="passeggi">
          <div className="section-inner split reverse">
            <div className="panel-card large" aria-label="Passeggi" />
            <div className="split-text">
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
          <div className="section-inner split">
            <div className="split-text">
              <p className="section-label">Unisciti a noi</p>
              <h2>Se ti va, vieni a trovarci.</h2>
              <p>
                Non serve nessun requisito particolare. Basta la voglia di dedicare un po&apos; del proprio tempo a stare insieme e prendersi cura di quello che ci sta intorno.
              </p>
            </div>
            <div className="join-card">
              <p className="card-title">Diventa un Anicò</p>
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
          </div>
        </section>

        <section className="section collaborazioni" id="collabora">
          <div className="section-inner text-centered">
            <p className="section-label">Collaborazioni</p>
            <h2>Sei un&apos;associazione? Collaboriamo!</h2>
            <p>
              Il territorio cresce quando le idee si incontrano. Cerchiamo sempre nuove sinergie per arricchire il tessuto sociale di chi ci vive intorno. Riconosciamo il ruolo delle associazioni, degli enti e in generale del volontariato, e per questo vogliamo creare ponti.
            </p>
            <p>
              Siamo pront* a sostenere, co-progettare e condividere percorsi con chi, come noi, ha a cuore il bene comune. Scrivici!
            </p>
            <a className="collabora-cta" href="mailto:anico.odv@gmail.com?subject=Proposta%20di%20collaborazione">
              Scrivici una mail
            </a>

            <p className="marquee-label">Hanno già collaborato con noi</p>
            <div className="logo-marquee">
              <div className="logo-track">
                {collaborators.concat(collaborators).map((partner, index) => (
                  <span className="logo-pill" key={`${partner}-${index}`}>
                    {partner}
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
            <div className="footer-logo">anicò</div>
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
