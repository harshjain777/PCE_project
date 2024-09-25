import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function ContactUs() {
  return (
    <div>
      <Navbar />

      {/* Contact Us Section */}
      <section className="bg-gray-100 py-40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
          
          {/* Contact Form and Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Us</h3>
              <form className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-600">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-600">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-gray-600">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Subject of your message"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-600">Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    placeholder="Write your message"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-4">
                If you have any questions or need further assistance, feel free to reach out to us using the form or through the following contact details:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+1 (234) 567-890</p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a>
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-800">Address</h4>
                  <p className="text-gray-600">123 Main Street, City, State, 12345</p>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-lg font-bold text-gray-800">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-600">Facebook</a>
                    <a href="#" className="text-blue-500 hover:text-blue-600">Twitter</a>
                    <a href="#" className="text-blue-500 hover:text-blue-600">Instagram</a>
                    <a href="#" className="text-blue-500 hover:text-blue-600">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactUs;
