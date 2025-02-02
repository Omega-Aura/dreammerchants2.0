import React from 'react';

function Contact() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        
        <div className="text-center mb-8">
          <p className="text-lg">
            Have a question? Email us at:{' '}
            <a href="mailto:dreammerchantsvit@gmail.com" className="text-blue-600 hover:text-blue-800">
              dreammerchantsvit@gmail.com
            </a>
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;