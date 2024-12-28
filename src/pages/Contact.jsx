import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page min-h-screen bg-[#000000] text-[#ffffff] p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-lg mb-6">
            We would love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Email:</strong> contact@youride.com</li>
            <li><strong>Phone:</strong> +123-456-7890</li>
            <li><strong>Address:</strong> 123 Web Development Street, Coding City, Webland</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            Feel free to reach out via email or phone. We’ll get back to you as soon as possible!
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
