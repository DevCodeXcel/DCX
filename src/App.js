import React from 'react';
import Navbar from './components/Navbar';   // If you have a Navbar component
import Sidebar from './components/Sidebar'; // If you have a Sidebar component
import Projects from './components/Projects'; // If you have a Projects component
import About from './components/About';      // If you have an About component
import Footer from './components/Footer';    // If you have a Footer component

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Main content starts here */}
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Welcome to DevCodeXcel</h1>
        </section>

        {/* Projects section */}
        <section id="projects">
          <h2 className="section-header with-shadow">Projects <span className="highlight">DCX</span></h2>
          <div className="projects-list">
            <Projects />
            {/* This is where your Project cards or content will go */}
          </div>
        </section>

        {/* About section */}
        <section id="about">
          <h2 className="section-header with-shadow">About <span className="highlight">DCX</span></h2>
          <p>
            <About />
            {/* This is where your About content will go */}
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
