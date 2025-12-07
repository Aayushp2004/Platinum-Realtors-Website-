import { motion } from "framer-motion";
import { FaFileSignature, FaHandshake, FaShieldAlt } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="px-6 py-16 bg-gray-100">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-950 mb-6 my-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Platinum Realtors
      </motion.h1>

      <motion.p
        className="text-center text-gray-700 max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <p className="text-lg text-gray-700 leading-8">
         Where trust meets professionalism — Platinum Realtors creates a secure and hassle-free journey for property owners, tenants, buyers, and sellers. From Leave & License to Sale & Purchase, we manage every step with accuracy, transparency and complete peace of mind.
        </p>
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <motion.div
          className="bg-white p-6 shadow-md rounded-xl text-center hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaFileSignature className="text-4xl text-blue-950 mx-auto mb-4" />
          <h3 className="font-semibold text-xl mb-2">Digital Registration</h3>
          <p className="text-gray-600">
            Quick and smooth Leave & License processing through trusted government platforms.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-white p-6 shadow-md rounded-xl text-center hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaHandshake className="text-4xl text-blue-950 mx-auto mb-4" />
          <h3 className="font-semibold text-xl mb-2">Client Coordination</h3>
          <p className="text-gray-600">
            We coordinate with landlords, tenants & officers to ensure seamless workflow.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-white p-6 shadow-md rounded-xl text-center hover:shadow-lg transition"
          whileHover={{ scale: 1.05 }}
        >
          <FaShieldAlt className="text-4xl text-blue-950 mx-auto mb-4" />
          <h3 className="font-semibold text-xl mb-2">Sale & Purchase</h3>
          <p className="text-gray-600">
            Buying or selling property made easy — we handle paperwork, negotiations, and safe deal closure from start to finish.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
export default Home;
