import React from 'react';
import EventCarousel from '../components/EventCarousel';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <header className="hero" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-background.jpg)` }}>
        <h1>West Point Society of Greater Cincinnati</h1>
        <h6>Presents</h6>
        <img
          src={`${import.meta.env.BASE_URL}images/wp-logo.png`}
          alt="West Point Logo"
          className="logo"
          style={{
            width: '150px',
            height: '150px',
            margin: '2rem 0',
            filter: 'brightness(1.2)'
          }}
        />
        <h6>Leaders of Character Initiative</h6>
      </header>

      <EventCarousel />

      <section className="symposium-highlight" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/seminar-bg.jpg)` }}>
        <h2>Annual Leadership & Ethics Seminar</h2>
        <p>
          Join us for our signature event, where distinguished speakers and community leaders share insights on leadership, ethics, and service.
          Our seminar brings together West Point graduates, ROTC cadets, and community members to foster the development of leaders of character.
        </p>
        <button className="btn">Learn More</button>
      </section>

      <ContactForm />
    </div>
  );
};

export default Home;