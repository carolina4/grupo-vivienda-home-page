import React from 'react';
import ContactForm from './ContactForm';

function ContactPage() {
  return (
    <div>
      <div className="center pt2 ph2 ph4-ns" style={{ maxWidth: '72rem' }}>
        <h1>Contáctenos</h1>

        <ContactForm />
      </div>
    </div>
  )
};

export default ContactPage;
