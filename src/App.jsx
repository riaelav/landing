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
  { label: 'Dona', href: '#dona' },
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
  const [showPrivacy, setShowPrivacy] = useState(false)
  const heroRef = useRef(null)
  const collaboraRef = useRef(null)

  useEffect(() => {
    if (!showPrivacy) return
    const onKey = (e) => e.key === 'Escape' && setShowPrivacy(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [showPrivacy])

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

        <section className="section dona" id="dona">
          <div className="dona-media" aria-hidden="true">
            <img src="/images/furgone-gruppo.jpg" alt="" />
          </div>
          <div className="dona-card">
            <p className="section-label">Raccolta fondi</p>
            <h2>Aiutaci a comprare un furgone per prenderci cura di Fano.</h2>
            <p>
              Ci serve un furgone. È questo lo scopo della raccolta fondi, e con il tuo aiuto possiamo ottenerlo.
            </p>
            <p>
              A Fano ci prendiamo cura di due beni della comunità: i Passeggi, con mezzo chilometro di alberi nel cuore della città, e l&apos;ex Casetta del Custode, un nuovo spazio in zona aeroporto che gestiamo insieme ad altri. Tosaerba, tagliasiepi, rastrelli e materiali per la manutenzione vanno portati dal nostro magazzino ai due siti, e oggi ci arrangiamo come si può.
            </p>
            <p>
              Con un furgone lo faremmo in modo più comodo e veloce. Niente più attrezzi pesanti portati a mano dai nostri volontari, più tempo per curare il verde.
            </p>
            <p>
              Da oltre un anno, ogni sabato mattina, più di 100 soci under35 si occupano degli spazi comuni di Fano, con una sola regola: nessuno escluso. Puoi aiutarci a farlo meglio anche tu. <strong>Ogni euro che doni vale doppio</strong>, grazie alla Fondazione Cassa di Risparmio di Fano.
            </p>
            <a className="dona-cta" href="https://www.retedeldono.it/progetto/transportanico" target="_blank" rel="noreferrer">
              Dona ora
            </a>
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
          <button type="button" className="privacy-link" onClick={() => setShowPrivacy(true)}>
            Privacy policy
          </button>
        </div>
      </footer>

      {showPrivacy && (
        <div className="privacy-overlay" role="dialog" aria-modal="true" aria-labelledby="privacy-title" onClick={() => setShowPrivacy(false)}>
          <div className="privacy-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="privacy-close" aria-label="Chiudi" onClick={() => setShowPrivacy(false)}>
              ×
            </button>
            <div className="privacy-content">
              <h2 id="privacy-title">Informativa sulla privacy</h2>
              <p className="privacy-updated">Ultimo aggiornamento: 30/09/2026</p>
              <p>
                Questa pagina spiega quali dati personali raccogliamo quando ti iscrivi ad Anicò, perché ci servono e cosa ne facciamo. Ti chiediamo pochissimo, e solo quello che serve davvero.
              </p>

              <h3>Chi tratta i tuoi dati</h3>
              <p>
                Il titolare del trattamento è Anicò ODV, in persona del legale rappresentante pro tempore Gianluca Vitali, con sede in Via della Libertà 3, 61032 Fano (PU), codice fiscale e partita IVA 02846370415. Per qualsiasi cosa riguardi i tuoi dati puoi scriverci alla PEC <a href="mailto:anico.odv@pec.it">anico.odv@pec.it</a> oppure all&apos;email <a href="mailto:anico.odv@gmail.com">anico.odv@gmail.com</a>.
              </p>

              <h3>Quali dati raccogliamo</h3>
              <p>
                Tutto passa da un unico punto: il modulo di iscrizione. Quando lo compili ci lasci nome, cognome, data di nascita, codice fiscale, indirizzo email e numero di cellulare. Non raccogliamo nient&apos;altro da questo sito.
              </p>
              <p>
                Se paghi la quota con PayPal, i dati di pagamento li gestisce solo PayPal. A noi arriva la conferma che hai pagato, non i tuoi dati di carta o conto.
              </p>

              <h3>A cosa ci servono</h3>
              <p>
                Li usiamo per tre cose. Per iscriverti e tenere il libro dei soci, come la legge ci chiede. Per attivare l&apos;assicurazione infortuni e responsabilità civile con Reale Mutua, obbligatoria per chi partecipa alle nostre attività da volontario: è per questo che ci servono data di nascita e codice fiscale, senza non possiamo farti la copertura. E per scriverti quando c&apos;è qualcosa di pratico legato alla tessera e alle attività, tipo la convocazione dell&apos;assemblea, le date degli appuntamenti o il rinnovo di settembre. Non mandiamo pubblicità e non passiamo i tuoi contatti a nessuno per scopi commerciali.
              </p>

              <h3>Su cosa ci basiamo</h3>
              <p>
                Trattiamo i tuoi dati perché serve a completare l&apos;iscrizione che ci hai chiesto (art. 6.1.b GDPR) e a rispettare obblighi di legge, come quelli assicurativi e contabili (art. 6.1.c). Non ti chiediamo consensi aggiuntivi; se un domani volessimo usare i dati per qualcos&apos;altro, te lo chiederemmo prima.
              </p>

              <h3>Chi vede i tuoi dati</h3>
              <p>
                Dentro Anicò li vedono solo le persone del direttivo che si occupano delle iscrizioni. Per funzionare ci appoggiamo anche ad alcuni soggetti esterni:
              </p>
              <ul>
                <li>Google, che ci fornisce il modulo e lo spazio dove le risposte arrivano, sulla casella Gmail dell&apos;associazione. Google può trattare dati anche fuori dall&apos;Unione Europea, con le garanzie previste dal GDPR.</li>
                <li>Reale Mutua Assicurazioni, a cui passiamo nome, cognome, data di nascita e codice fiscale per attivare la tua copertura.</li>
                <li>PayPal, se scegli di pagare online la quota: gestisce in autonomia i dati di pagamento secondo la propria informativa.</li>
                <li>Il nostro responsabile della contabilità, che tiene i registri e le ricevute dell&apos;associazione.</li>
              </ul>
              <p>Non vendiamo i tuoi dati e non li rendiamo pubblici.</p>

              <h3>Per quanto tempo li teniamo</h3>
              <p>
                Teniamo i tuoi dati finché sei socio*a. Quando l&apos;iscrizione finisce conserviamo solo quello che la legge ci obbliga a tenere, cioè ricevute e registri contabili, per 10 anni, poi cancelliamo. Se ci chiedi di eliminarli prima lo facciamo, salvo ciò che siamo tenuti a conservare per legge.
              </p>

              <h3>I tuoi diritti</h3>
              <p>
                Puoi chiederci in ogni momento di vedere i dati che abbiamo su di te, correggerli, cancellarli, limitarne l&apos;uso, riceverli in un formato leggibile o opporti al trattamento. Scrivici alla PEC o all&apos;email dell&apos;associazione e ti rispondiamo entro un mese.
              </p>
              <p>
                Se pensi che non abbiamo trattato bene i tuoi dati puoi rivolgerti al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer">www.garanteprivacy.it</a>).
              </p>

              <h3>Modifiche</h3>
              <p>
                Se cambiamo qualcosa di importante aggiorniamo la data qui in alto e, se serve, ti avvisiamo via email.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
