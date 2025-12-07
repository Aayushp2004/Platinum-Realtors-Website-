import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-gray-100">
      
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-center text-blue-950 mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

        {/* Contact Information */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-blue-950 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-6">
            Feel free to contact us anytime.
          </p>
          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-950 text-xl" />
              <span className="text-gray-800 text-lg">+91 8880888926 / +91 9480163941</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-950 text-xl" />
              <span className="text-gray-800 text-lg">platinumrealtors888@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-950 text-xl" />
              <span className="text-gray-800 text-lg">Shop No 03, Lakhani Oasis,Plot No-20, Sector-09, Ulwe, Navi Mumbai, Maharashtra, India</span>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp QR */}
        <motion.div
          className="bg-white p-8 rounded-2xl shadow-md flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-6 flex items-center gap-2">
            <FaWhatsapp className="text-green-600 text-3xl" />
            WhatsApp Us
          </h2>

          <p className="text-gray-700 mb-6 text-center">
            Scan the QR code below to chat with us directly on WhatsApp.
          </p>

          {/* QR Image */}
          <motion.img
            src="./whatsapp-qr.jpeg"   // <-- add your QR image inside public folder with this name
            alt="WhatsApp QR"
            className="w-64 h-64 rounded-xl shadow"
            whileHover={{ scale: 1.05 }}
          />

          <a
            href="https://api.whatsapp.com/message/UIMI26AKJODAE1?autoload=1&app_absent=0"
            target="_blank"
            className="mt-6 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Open WhatsApp Chat
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
