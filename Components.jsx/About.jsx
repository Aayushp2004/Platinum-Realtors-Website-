import React from "react";
import { motion } from "framer-motion";

function About () {
  return (
    <section id="about" className="pt-24 pb-20 bg-gray-100">
      {/* Intro Section */}
      <motion.div
        className="max-w-5xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-blue-950 mb-5">
          About Platinum Realtors
        </h1>
        <p className="text-lg text-gray-700 leading-8">
          With years of expertise in the real estate industry, Platinum Realtors
          specializes in <span className="font-semibold">Leave & License
          Registration</span> and <span className="font-semibold">
          Sale & Purchase of Residential & Commercial Properties</span>.
          We focus on trust, transparency, and smooth property dealings.
        </p>
      </motion.div>

      {/* Experience / Achievements */}
      <motion.div
        className="max-w-6xl mx-auto mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {/* 10+ Years */}
        <AchievementCard
          number="10+"
          label="Years of Experience"
        />

        {/* Leave & License count */}
        <AchievementCard
          number="10,000+"
          label="Leave & License Registrations Completed"
        />

        {/* Sale & Purchase count */}
        <AchievementCard
          number="1000+"
          label="Sale & Purchase Deals"
        />

        {/* Happy Clients */}
        <AchievementCard
          number="2000+"
          label="Happy Clients"
        />
      </motion.div>
    </section>
  );
};

const AchievementCard = ({ number, label }) => {
  return (
    <motion.div
      className="bg-white text-center shadow-lg rounded-2xl p-8"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold text-blue-950 mb-2">{number}</h2>
      <p className="text-gray-700 font-medium">{label}</p>
    </motion.div>
  );
};

export default About;
