import React, { useState } from 'react';
import contactBanner from '../assets/images/i1.jpg'; // Make sure this path is correct

const ContactPage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('aditi.kushwaha213@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div>
      {/* Banner */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src={contactBanner}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-6xl md:text-5xl font-bold">Get in touch</h1>
        </div>
      </div>

      {/* Form & Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-12 md:px-12 bg-white justify-center">
        {/* Form */}
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <textarea
            rows="6"
            placeholder="Message"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-gray-600 font-semibold">Contact</h2>
            <p
              className="text-gray-800 cursor-pointer hover:underline"
              onClick={handleCopyEmail}
              title="Click to copy"
            >
              aditi.kushwaha213@gmail.com
            </p>
            {copied && (
              <p className="text-sm text-green-600 mt-1">Email copied to clipboard!</p>
            )}
            <p className="text-gray-800">+91 8601404802</p>
          </div>

          <div>
            <h2 className="text-gray-600 font-semibold">Socials</h2>
            <ul className="space-y-1 text-gray-800">
              <li>X / Twitter</li>
              <li>Instagram</li>
              <li>Threads</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
