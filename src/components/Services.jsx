import React from 'react';
import Navbar from './Navbar';
import Herosection from './Herosection';
import Footer from './Footer';

function Services() {
  return (
    <div>
      <Navbar />
      <Herosection />

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Disaster Preparedness</h3>
              <p className="text-gray-600">
                We provide resources and guidelines to help communities prepare for natural disasters like earthquakes, floods, and volcanoes.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Response</h3>
              <p className="text-gray-600">
                In the event of a crisis, our team offers real-time assistance, guiding people through emergencies and connecting them to the right resources.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Health & Safety Resources</h3>
              <p className="text-gray-600">
                We provide critical health and safety information during pandemics, ensuring people stay safe and informed about the latest guidelines.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Rehabilitation & Recovery</h3>
              <p className="text-gray-600">
                After a disaster, we assist in rehabilitation efforts by connecting individuals with recovery resources and support networks.
              </p>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mental Health Support</h3>
              <p className="text-gray-600">
                We offer mental health resources to help individuals cope with the trauma and stress that follow a disaster or pandemic.
              </p>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Training and Workshops</h3>
              <p className="text-gray-600">
                We conduct regular training sessions and workshops on how to handle emergencies, equipping people with practical survival skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
    
  );
}

export default Services;
