import { motion } from "framer-motion";

function LeaveAndLicense() {
  return (
    <section id="lal" className="px-6 py-20 bg-gray-100">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-950 mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Leave & License Registration Services
      </motion.h1>

      <motion.p
        className="text-gray-700 max-w-4xl mx-auto text-center mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Platinum Realtors specializes in digital Leave & License registration through
        government-approved portals. Our work revolves around delivering a transparent,
        secure, and efficient service that removes the complexity from legal registration processes.
      </motion.p>

      <motion.div
        className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-blue-950 mb-4">What We Do</h2>
        <ul className="space-y-2 text-gray-700">
          <li>• End-to-end Leave & License digital registration</li>
          <li>• Document collection, verification & uploading</li>
          <li>• Client interaction & inquiry handling</li>
          <li>• Coordination with landlords, tenants & government officers</li>
          <li>• Timely updates & transparent communication</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-950 mt-8 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          To make registration services simple, digital, and stress-free while maintaining
          accuracy, transparency, and customer trust.
        </p>
      </motion.div>
    </section>
  );
}


export default LeaveAndLicense;