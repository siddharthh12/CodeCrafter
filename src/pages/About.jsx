import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-page min-h-screen bg-[#000000] text-[#ffffff] p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-lg mb-6">
            Welcome to <strong>[CodeCrafter]</strong>, your go-to platform for running and testing your web development projects instantly!
          </p>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Real-Time Code Execution:</strong> Write your HTML, CSS, and JavaScript code in one place and see instant results in the live preview.</li>
            <li><strong>Clean & Minimalist Interface:</strong> Focus on your coding with a distraction-free and intuitive design.</li>
            <li><strong>No Setup Required:</strong> Get started instantly without installing any software or managing local environments.</li>
            <li><strong>Save your Projects:</strong> Save your code snippets </li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-6">
            We understand that starting with web development can be overwhelming. That’s why <strong>[CodeCrafter]</strong> provides a seamless platform where you can experiment with your code, learn by doing, and see the results in real-time. Whether you're a beginner just starting your coding journey or an experienced developer testing small projects, we’ve got you covered.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            Our mission is to make coding accessible to everyone. We aim to break down barriers by providing tools that simplify the learning and development process for people of all skill levels.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Who Can Use [Your IDE Name]?</h2>
          <ul className="list-disc list-inside mb-6">
            <li><strong>Students:</strong> Practice your coding skills while learning web development.</li>
            <li><strong>Developers:</strong> Test quick prototypes without setting up a local environment.</li>
            <li><strong>Educators:</strong> Use the platform to demonstrate web development concepts in classrooms.</li>
            <li><strong>Hobbyists:</strong> Experiment and learn coding in a fun, stress-free environment.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
