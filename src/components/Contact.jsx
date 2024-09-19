import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, // Ensures animations trigger only once
    });
  }, []);

  return (
    <div style={{ padding: '20px', lineHeight: '1.8', color: '#333' }}>
      <h2 
        data-aos="fade-up" 
        data-aos-duration="1200"
        style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '16px' }}
      >
        Contact Us
      </h2>
      <p 
        data-aos="fade-up" 
        data-aos-delay="200"
        data-aos-duration="1000"
        style={{ fontSize: '18px', marginBottom: '24px' }}
      >
        We are here to assist you with any inquiries or support you may need. 
        Whether you have a question about our platform, services, or require technical help, 
        feel free to reach out to us.
      </p>

      <h3 
        data-aos="fade-up" 
        data-aos-delay="400"
        data-aos-duration="1200"
        style={{ fontWeight: 'bold', fontSize: '22px', marginBottom: '12px' }}
      >
        Email
      </h3>
      <p 
        data-aos="fade-up" 
        data-aos-delay="600"
        data-aos-duration="1000"
        style={{ fontSize: '18px', marginBottom: '24px' }}
      >
        You can email us at <a href="mailto:support@ourplatform.com" style={{ color: '#007BFF', textDecoration: 'none' }}>support@ourplatform.com</a> for any general inquiries or support-related questions.
      </p>

      <h3 
        data-aos="fade-up" 
        data-aos-delay="800"
        data-aos-duration="1200"
        style={{ fontWeight: 'bold', fontSize: '22px', marginBottom: '12px' }}
      >
        Phone
      </h3>
      <p 
        data-aos="fade-up" 
        data-aos-delay="1000"
        data-aos-duration="1000"
        style={{ fontSize: '18px', marginBottom: '24px' }}
      >
        For immediate assistance, please call us at <strong>(123) 456-7890</strong>. Our team is available Monday through Friday from 9 AM to 6 PM.
      </p>

      <h3 
        data-aos="fade-up" 
        data-aos-delay="1200"
        data-aos-duration="1200"
        style={{ fontWeight: 'bold', fontSize: '22px', marginBottom: '12px' }}
      >
        Social Media
      </h3>
      <p 
        data-aos="fade-up" 
        data-aos-delay="1400"
        data-aos-duration="1000"
        style={{ fontSize: '18px', marginBottom: '24px' }}
      >
        Follow us on our social media channels for the latest updates and announcements.
      </p>
    </div>
  );
};

export default Contact;
