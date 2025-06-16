import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, GraduationCap, Heart } from 'lucide-react';

const About = () => {
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
        ease: 'easeOut',
      },
    },
  };

  const education = [
    {
      degree: "BSc. (Hons) in Software Engineering",
      institution: "Saegis Campus",
      year: "2022 – Present",
      description: "Pursuing a comprehensive degree focused on software engineering principles, including backend development, database systems, algorithms, and hands-on experience with web and hardware-integrated projects."
    }
  ];

  const interests = [
    "Web Development",
    "Database Design",
    "UI/UX Design",
    "Technology Innovation",
    "Continuous Learning",
    "Problem Solving"
  ];

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
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} className="relative">
                <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-purple-400 to-teal-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
                 <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Personal Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Personal Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Sri Lanka</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Available for opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Passionate about technology</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Story */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                My Story
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
                  I'm Prasantha Raman, a passionate software developer from Sri Lanka with over 3 years of experience in full-stack web development. 
                  My journey in technology began with a curiosity about how digital systems work and has evolved into a career 
                  focused on creating meaningful digital experiences.
                </p>
                <p>
                  I specialize in building scalable web applications using modern technologies like React, Laravel, and MySQL. 
                  My approach combines technical expertise with creative problem-solving to deliver solutions that not only work 
                  well but also provide excellent user experiences.
                </p>
                <p>
                  When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing 
                  knowledge with the developer community. I believe in continuous learning and staying updated with the latest 
                  industry trends and best practices.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-purple-600" />
                Education
              </h3>
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="border-l-4 border-purple-600 pl-4 py-2 mb-4"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</p>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Interests */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Interests & Passions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-purple-100 to-teal-100 dark:from-purple-900/20 dark:to-teal-900/20 rounded-lg p-3 text-center text-sm font-medium text-gray-800 dark:text-gray-200 border border-purple-200 dark:border-purple-800"
                  >
                    {interest}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div variants={itemVariants} className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's connect and see how we can create something amazing together.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;

