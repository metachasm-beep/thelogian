import React from 'react';
import './index.css';

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="glass" style={{ position: 'sticky', top: 0, zIndex: 100, padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img 
              src="/assets/SIBBC_20Logo_New.png" 
              alt="SIBBCS Logo" 
              style={{ height: '60px' }}
            />
            <h2 style={{ margin: 0, fontSize: '1.2rem', color: 'var(--color-primary)' }}>
              South India Baptist Bible College & Seminary
            </h2>
          </div>
          <ul style={{ display: 'flex', gap: '2rem', fontWeight: 'bold' }}>
            <li><a href="#home">Home</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#academics">Academics</a></li>
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
            A Seminary Built on Conviction
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            When God calls men and women to ministry, He also calls them to be prepared. 
            The Church needs leaders who can handle Scripture responsibly and lead with conviction. 
            South India Baptist Bible College & Seminary exists to serve those answering this call 
            through theological education rooted in the authority of the Scripture.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button className="btn btn-secondary">Apply Now</button>
            <button className="btn btn-primary" style={{ backgroundColor: 'transparent', border: '2px solid white' }}>Watch Video</button>
          </div>
        </div>
      </header>

      {/* Theological Education Section */}
      <section id="about" className="section section-alt">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div className="animate-fade-in">
            <h2>Theological Education<br/>Where You Are</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              God often shapes His servants within the very contexts where they are already serving. 
              Our online programs are designed to complement your ministry, allowing learning to flow 
              naturally into practice. As you engage in theological education, you continue to live, 
              work, and minister where God has placed you, growing in understanding, conviction, and faithfulness.
            </p>
            <button className="btn btn-primary">Discover why SIBBC&S Online Programs</button>
          </div>
          <div>
            <img 
              src="/assets/Graduation_20Day.jpeg" 
              alt="Graduation Day" 
              style={{ width: '100%', borderRadius: '8px', boxShadow: 'var(--shadow-lg)' }} 
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Rooted in Scripture, Equipped for Service</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.5rem' }}>Academic Excellence</h3>
              <p>SIBBC&S upholds high standards of academic rigor. Our online courses are crafted by experienced faculty members with a passion for teaching and a heart for ministry.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.5rem' }}>Accessible and Flexible</h3>
              <p>Credible, flexible, affordable, fully online seminary programs designed to bring seminary education directly to you, wherever you are.</p>
            </div>
            <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.5rem' }}>Practical Ministry Skills</h3>
              <p>Gain deep theological insights, practical ministry skills, and learn to think biblically and critically about your faith and calling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass" style={{ backgroundColor: 'var(--color-primary)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'var(--color-secondary)' }}>South India Baptist Bible College & Seminary</h2>
          <p>© {new Date().getFullYear()} SIBBC&S Online Programs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
