import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <h1>West Point Society of Cincinnati</h1>
        <p className="intro">Welcome to the official website of the West Point Society of Cincinnati. We connect West Point graduates and supporters in the Greater Cincinnati area, fostering leadership, camaraderie, and service.</p>
      </header>
      <section className="symposium-highlight">
        <h2>Annual Leadership Symposium</h2>
        <p>
          Join us for our signature event, the Leadership Symposium, where distinguished speakers and community leaders share insights on leadership, ethics, and service. Stay tuned for details on our next symposium!
        </p>
        <a href="/symposium" className="btn">Learn More</a>
      </section>
    </div>
  );
};

export default Home;