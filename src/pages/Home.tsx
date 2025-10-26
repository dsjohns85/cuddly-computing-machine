import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>West Point Society of Greater Cincinnati</h1>
        <h6>Presents</h6>
        <div className="logo" style={{
          width: '150px',
          height: '150px',
          background: 'rgba(182, 243, 232, 0.2)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '3rem',
          margin: '2rem 0'
        }}>
          USMA
        </div>
        <h6>Leaders of Character Initiative</h6>
      </header>
      <section className="symposium-highlight">
        <h2>Annual Leadership & Ethics Seminar</h2>
        <p>
          Join us for our signature event, where distinguished speakers and community leaders share insights on leadership, ethics, and service.
          Our seminar brings together West Point graduates, ROTC cadets, and community members to foster the development of leaders of character.
        </p>
        <button className="btn">Learn More</button>
      </section>
    </div>
  );
};

export default Home;