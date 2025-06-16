import React from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Code, Palette, Server, Smartphone } from 'lucide-react';

const Services = () => {
  const services = [
     {
      id: 2,
      title: "Web Design",
      description: "Responsive, user-friendly websites with modern UI/UX principles using React, Tailwind, and Figma mockups.",
      icon: <Globe className="w-12 h-12" />,
      color: "from-teal-500 to-teal-700",
      features: ["Responsive Design", "UI/UX Design", "Figma Prototyping", "Modern Frameworks"]
    },
    {
      id: 1,
      title: "Database Design",
      description: "Efficient, scalable database schemas for modern web and business apps using MySQL, PostgreSQL, and Firebase.",
      icon: <Database className="w-12 h-12" />,
      color: "from-purple-500 to-purple-700",
      features: ["Schema Design", "Query Optimization", "Data Modeling", "Performance Tuning"]
    }
   
  ];

  const additionalServices = [
    {
      title: "Frontend Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            I offer comprehensive development services to help bring your digital ideas to life 
            with modern technologies and best practices.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Services */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`mt-6 w-full py-3 px-6 bg-gradient-to-r ${service.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div variants={itemVariants} className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Additional Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4`}>
                  {service.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {service.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Let's discuss your ideas and create something amazing together. 
              I'm here to help bring your vision to life.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Services;