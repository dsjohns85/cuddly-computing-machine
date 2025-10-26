import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about-page">
      <h1>About the West Point Society of Cincinnati</h1>
      <section>
        <h2>Our History</h2>
        <p>
          The West Point Society of Cincinnati was founded to unite graduates, families, and supporters of the United States Military Academy in the Greater Cincinnati area. Our organization has a proud tradition of fostering leadership, camaraderie, and service since its inception.
        </p>
      </section>
      <section>
        <h2>Mission</h2>
        <p>
          Our mission is to promote the values of Duty, Honor, Country and to support West Point, its graduates, and the local community through events, outreach, and mentorship.
        </p>
      </section>
      <section>
        <h2>Values</h2>
        <ul>
          <li>Leadership</li>
          <li>Service</li>
          <li>Integrity</li>
          <li>Camaraderie</li>
        </ul>
      </section>
    </div>
  );
};

export default About;