import React from 'react';
import Navbar from './Navbar';
import Herosection from './Herosection';
import Footer from './Footer';

function AboutUs() {
  return (
    <div>
      <Navbar />
      <Herosection />

      {/* About Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">About Us</h2>
          <p className="text-lg text-gray-600 mb-6 text-center">
            We are dedicated to supporting communities in times of crisis, providing essential services and resources to help those affected by natural disasters, pandemics, and emergencies. 
            Our mission is to empower people with the knowledge, tools, and support they need to stay safe, rebuild, and recover from unforeseen events.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                Our mission is to provide timely, accurate information and critical resources to help individuals, families, and communities survive, recover, and thrive in the wake of disasters. We aim to bridge the gap between people in need and the help they deserve.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                We envision a world where every person is prepared for and resilient to the challenges posed by natural disasters and emergencies. Through education, support, and collaboration, we aim to create safer, more resilient communities.
              </p>
            </div>

            {/* Team */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Team</h3>
              <p className="text-gray-600">
                Our team is composed of experienced professionals in disaster management, healthcare, and community services. Together, we work tirelessly to bring relief, resources, and education to those in need, focusing on fast response and long-term recovery.
              </p>
            </div>

            {/* Core Values */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Core Values</h3>
              <p className="text-gray-600">
                We believe in compassion, transparency, and collaboration. These values guide every aspect of our work, from immediate relief efforts to long-term recovery projects. We are committed to putting people first and working hand-in-hand with communities to build a safer future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutUs;
