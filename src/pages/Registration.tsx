import React from 'react';

const Registration: React.FC = () => {
  return (
    <div className="registration-page">
      <h1>Leadership Symposium Registration</h1>
      
      <section className="registration-intro">
        <p>
          Ready to join us for the Annual Leadership Symposium? We're excited to have you participate in this transformative event focused on developing tomorrow's leaders.
        </p>
        <p>
          <strong>Who Should Apply:</strong> High school students interested in leadership development, service, and personal growth. The symposium is designed to inspire and educate the next generation of leaders through engaging presentations and interactive workshops.
        </p>
      </section>

      <section className="registration-details">
        <h2>Event Information</h2>
        <div className="event-details">
          <div className="detail-item">
            <strong>Date:</strong> Spring 2026 (Exact date TBD)
          </div>
          <div className="detail-item">
            <strong>Location:</strong> Greater Cincinnati Area
          </div>
          <div className="detail-item">
            <strong>Cost:</strong> Free for all participants
          </div>
          <div className="detail-item">
            <strong>Duration:</strong> Full day event (8:00 AM - 4:00 PM)
          </div>
        </div>
      </section>

      <section className="registration-instructions">
        <h2>How to Register</h2>
        <p>
          Complete the application form below to secure your spot at the Leadership Symposium. Please provide accurate information and ensure all required fields are completed.
        </p>
        <ul>
          <li>Fill out all required information in the form</li>
          <li>Submit your application by the deadline</li>
          <li>You will receive a confirmation email within 2-3 business days</li>
          <li>Space is limited, so early registration is encouraged</li>
        </ul>
      </section>

      <section className="application-form">
        <h2>Student Application Form</h2>
        <div className="form-placeholder">
          <div className="form-notice">
            <h3>Application Form Coming Soon</h3>
            <p>
              The online application form will be available here soon. Please check back for updates or contact us for more information.
            </p>
            <div className="placeholder-form">
              <div className="form-field">
                <label>Student Name *</label>
                <div className="input-placeholder"></div>
              </div>
              <div className="form-field">
                <label>Email Address *</label>
                <div className="input-placeholder"></div>
              </div>
              <div className="form-field">
                <label>High School *</label>
                <div className="input-placeholder"></div>
              </div>
              <div className="form-field">
                <label>Grade Level *</label>
                <div className="input-placeholder"></div>
              </div>
              <div className="form-field">
                <label>Why are you interested in attending the Leadership Symposium? *</label>
                <div className="textarea-placeholder"></div>
              </div>
              <div className="submit-placeholder">
                <button type="button" disabled className="btn-placeholder">
                  Submit Application (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info">
        <h2>Questions?</h2>
        <p>
          If you have any questions about the Leadership Symposium or the registration process, please don't hesitate to contact us.
        </p>
        <p>
          <strong>Email:</strong> info@wpscincinnati.org<br/>
          <strong>Phone:</strong> (513) 555-0123
        </p>
      </section>
    </div>
  );
};

export default Registration;