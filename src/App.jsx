import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="glass" style={{ position: 'sticky', top: 0, zIndex: 100, padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Logo placeholder since ABTS images were protected by Cloudflare */}
            <div style={{ width: '60px', height: '60px', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', borderRadius: '4px' }}>
              ABTS
            </div>
            <h2 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-primary)' }}>
              Apostolic Biblical Theological Seminary
            </h2>
          </div>
          <ul style={{ display: 'flex', gap: '2rem', fontWeight: 'bold' }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#portal">Student Portal</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="section" style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        color: 'white',
        textAlign: 'center'
      }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            objectFit: 'cover',
            zIndex: -2
          }}
        >
          <source src="/assets/gemini_generated_video_1fb57299-ezremove.mp4" type="video/mp4" />
        </video>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(30, 58, 138, 0.8)',
          zIndex: -1
        }}></div>
        <div className="container animate-fade-in">
          <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '1.5rem' }}>
            Equipping Leaders for the Great Commission
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            The Apostolic Biblical Theological Seminary (ABTS) in New Delhi is an independent, 
            conservative, and Oneness Apostolic seminary focused on training individuals for Christian ministry. 
            We prepare ministers, missionaries, and Christian leaders to answer God's call.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-secondary">Apply Now</button>
            <button className="btn btn-primary" style={{ backgroundColor: 'transparent', border: '2px solid white' }}>Watch Video</button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section section-alt">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="animate-fade-in">
            <h2>Theological Education<br/>In New Delhi & Beyond</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Founded by Bishop Dr. Paogin Mangte, ABTS aims to prepare ministers, missionaries, teachers, 
              and Christian leaders for global ministry. Whether through regular residential study, 
              non-residential study, or our flexible online learning options, we provide a robust 
              Oneness Apostolic theological foundation.
            </p>
            <button className="btn btn-primary">Discover our Programs</button>
          </div>
          <div>
            <img 
              src="/assets/grad.jpg" 
              alt="ABTS Graduating Students" 
              style={{ width: '100%', borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }} 
            />
          </div>
        </div>
      </section>

      {/* Features / Programs Section */}
      <section id="programs" className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Comprehensive Theological Programs</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.5rem' }}>Degrees & Diplomas</h3>
              <p>We offer certificates, diplomas, and degree programs including B.Th., B.Div., M.Div., M.Th., D.Min., and Ph.D.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.5rem' }}>Flexible Study Modes</h3>
              <p>Choose from regular residential study, non-residential study, or distance learning to fit your ministry context.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.5rem' }}>Specialized Fields</h3>
              <p>Focus your studies in Christian Theology, Missiology, Pastoral Care & Counseling, and Bible Exposition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--color-secondary)' }}>Apostolic Biblical Theological Seminary</h2>
          <p>A-2/E-2, 1st Floor, Chanakya Place, 40th Feet Road, Opp: C-1, Janakpuri, Uttam Nagar, New Delhi - 110059</p>
          <p>© {new Date().getFullYear()} ABTS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
