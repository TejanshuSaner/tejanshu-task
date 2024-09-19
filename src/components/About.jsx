import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true, // Ensures animations trigger only once
    });
  }, []);

  return (
    <div style={{ padding: '20px', lineHeight: '1.8', color: '#333' }}>
      <h2 
        data-aos="fade-up-right" 
        data-aos-duration="1000"
        style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '16px' }}
      >
        About Us
      </h2>
      <p 
        data-aos="fade-up" 
        data-aos-delay="200"
        style={{ fontSize: '18px', marginBottom: '24px' }}
      >
        We are committed to delivering top-notch solutions that empower individuals and organizations to achieve their fullest potential. Our focus is on creating value through innovation, quality, and a commitment to excellence.
      </p>

      <h2 
        data-aos="fade-up-left" 
        data-aos-duration="1000"
        data-aos-delay="300"
        style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '16px' }}
      >
        Our Mission
      </h2>
      <p 
        data-aos="zoom-in" 
        data-aos-delay="400"
        style={{ fontSize: '18px', marginBottom: '24px' }}
      >
        Our mission is to empower our users with tools and resources that foster growth, creativity, and continuous improvement. We strive to maintain a high standard of service that exceeds expectations.
      </p>

      <h2 
        data-aos="fade-right" 
        data-aos-duration="1000"
        data-aos-delay="500"
        style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '16px' }}
      >
        Our Vision
      </h2>
      <p 
        data-aos="flip-up" 
        data-aos-delay="600"
        style={{ fontSize: '18px', marginBottom: '24px' }}
      >
        We envision a future where technology is seamlessly integrated into everyday life, enabling individuals to achieve their personal and professional aspirations. Through our platform, we aim to be at the forefront of this transformation.
      </p>

      <h2 
        data-aos="zoom-in-down" 
        data-aos-duration="1000"
        data-aos-delay="700"
        style={{ fontWeight: 'bold', fontSize: '28px', marginBottom: '16px' }}
      >
        Contact Us
      </h2>
      <p 
        data-aos="slide-up" 
        data-aos-delay="800"
        style={{ fontSize: '18px', marginBottom: '24px' }}
      >
        For inquiries or support, please do not hesitate to reach out. Our team is here to assist you and ensure that your experience with our platform is seamless and fulfilling.
      </p>
    </div>
  );
}

export default About;
