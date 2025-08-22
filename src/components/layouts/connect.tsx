import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionContainer from "./SectionContainer";

const Connect = () => {
  return (
    <SectionContainer>
      <section className="py-20 px-4">
        <div className="max-w-full mx-auto">
          <motion.div
            className="bg-neutral-900 rounded-2xl p-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Indicator */}
            <motion.div
              className="inline-flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">
                Available for work
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Let&apos;s create your
              <br />
              <span className="ml-8 md:ml-12">next big idea.</span>
            </motion.h2>

            {/* Call-to-Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-neutral-900 transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </SectionContainer>
  );
};

export default Connect;
