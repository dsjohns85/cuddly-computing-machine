import React from 'react';

const Symposium: React.FC = () => {
  return (
    <div className="symposium-page">
      <h1>Annual Leadership Symposium</h1>
      <section>
        <h2>Event Overview</h2>
        <p>
          The West Point Society of Cincinnati hosts an annual Leadership Symposium designed to inspire and educate the next generation of leaders. This event brings together distinguished speakers, West Point graduates, and community leaders to share insights on leadership, ethics, and service.
        </p>
      </section>
      <section>
        <h2>Target Audience</h2>
        <p>
          The symposium is open to high school students interested in leadership, service, and personal growth. Parents, educators, and community members are also welcome to attend.
        </p>
      </section>
      <section>
        <h2>Key Details</h2>
        <ul>
          <li>Date: TBD (Spring 2026)</li>
          <li>Location: Greater Cincinnati Area</li>
          <li>Speakers: West Point graduates, military leaders, and local professionals</li>
          <li>Registration: Details coming soon</li>
        </ul>
      </section>
    </div>
  );
};

export default Symposium;