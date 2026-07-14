import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Grazie per il vostro messaggio!')
  }

  return (
    <>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#home">
            Landing
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#hero">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">Funzionalità</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">Testimonianze</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contatti</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section py-5 bg-gradient text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">anicò</h1>
              <p className="lead mb-4">Crea esperienze straordinarie con tecnologie moderne e design innovativo.</p>
              <a href="#contact" className="btn btn-light btn-lg">Inizia Adesso</a>
            </div>
            <div className="col-lg-6">
              <div className="hero-image bg-white rounded-lg p-4" style={{ height: '300px' }}>
                <div className="d-flex align-items-center justify-content-center h-100 bg-light rounded">
                  <p className="text-secondary">Immagine Hero</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Funzionalità</h2>
            <p className="lead text-muted">Scopri cosa possiamo offrirti</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="feature-icon mb-3" style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 auto',
                    backgroundColor: '#007bff',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px'
                  }}>⚡</div>
                  <h5 className="card-title">Velocità</h5>
                  <p className="card-text text-muted">Prestazioni ottimali e velocità di caricamento massima per il tuo sito.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="feature-icon mb-3" style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 auto',
                    backgroundColor: '#28a745',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px'
                  }}>🎨</div>
                  <h5 className="card-title">Design</h5>
                  <p className="card-text text-muted">Design responsive e moderno che si adatta a tutti i dispositivi.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <div className="feature-icon mb-3" style={{
                    width: '60px',
                    height: '60px',
                    margin: '0 auto',
                    backgroundColor: '#ffc107',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '24px'
                  }}>🔒</div>
                  <h5 className="card-title">Sicurezza</h5>
                  <p className="card-text text-muted">Proteggiamo i tuoi dati con i più alti standard di sicurezza.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Testimonianze</h2>
            <p className="lead text-muted">Cosa dicono i nostri clienti</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="mb-3">⭐⭐⭐⭐⭐</div>
                  <p className="card-text">"Eccellente servizio! Ha superato tutte le mie aspettative e il team è stato molto disponibile."</p>
                  <p className="fw-bold mb-0">- Marco Rossi</p>
                  <p className="text-muted small">CEO, Tech Company</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="mb-3">⭐⭐⭐⭐⭐</div>
                  <p className="card-text">"Professionalità e dedizione. Hanno reso il nostro progetto un successo straordinario."</p>
                  <p className="fw-bold mb-0">- Giulia Bianchi</p>
                  <p className="text-muted small">Direttore Marketing</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <div className="mb-3">⭐⭐⭐⭐⭐</div>
                  <p className="card-text">"La soluzione perfetta per le nostre esigenze. Altamente consigliato!"</p>
                  <p className="fw-bold mb-0">- Luca Verdi</p>
                  <p className="text-muted small">Founder, StartUp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">Contattaci</h2>
            <p className="lead text-muted">Siamo qui per aiutarti</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nome</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Il tuo nome"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="La tua email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Messaggio</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Il tuo messaggio"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">Invia Messaggio</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p>&copy; 2024 Landing Page. Tutti i diritti riservati.</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <a href="#" className="text-white text-decoration-none me-3">Privacy</a>
              <a href="#" className="text-white text-decoration-none me-3">Termini</a>
              <a href="#" className="text-white text-decoration-none">Contatti</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
