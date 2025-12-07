import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

function SaleAndPurchase() {
  return (
    <section id="sap" className="pt-24 pb-16 bg-gray-100">
      {/* Heading */}
      <motion.h1
        className="text-4xl font-bold text-center text-blue-950 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Sale & Purchase of Properties
      </motion.h1>

      {/* Carousel */}
      <motion.div
        className="max-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src="./Images/Flat.jpeg" alt="Flat" />
            <p className="legend">Office Space for Investment</p>
          </div>
          <div>
            <img src="/Images/Office.jpeg" alt="Office" />
            <p className="legend">Premium 2BHK Flat for Sale</p>
          </div>
          <div>
            <img src="./Images/Shop.jpeg" alt="Shop" />
            <p className="legend">Shops Available in Commercial Area</p>
          </div>
        </Carousel>
      </motion.div>

      {/* Property Info Section */}
      <motion.div
        className="max-w-4xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold text-blue-950 mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 leading-7">
          We provide trustworthy and hassle-free real estate services for both
          buyers and sellers. Whether you're looking to invest, sell property,
          or purchase your dream home, we ensure transparency, proper
          documentation, and the best market prices.
        </p>

        <ul className="list-disc ml-6 mt-5 text-gray-700 leading-7">
          <li>Best market rates and verified property listings</li>
          <li>Secure documentation and transaction support</li>
          <li>Fast processing with government registration assistance</li>
          <li>Guidance from property site visit to deal closure</li>
        </ul>

        <motion.a
          href="https://api.whatsapp.com/send?phone=918880888926"
          target="_blank"
          className="mt-8 inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
          whileHover={{ scale: 1.05 }}
        >
          Contact on WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
};

export default SaleAndPurchase;
