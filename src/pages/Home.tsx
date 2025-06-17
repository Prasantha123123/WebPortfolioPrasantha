import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import profileImg from '/assets/profile.jpg';

const Home = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['React', 'Laravel', 'Java', 'PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'SQL'];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [skills.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold text-light-primary dark:text-dark-primary mb-6"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary bg-clip-text text-transparent">
                Raman Prasantha
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-2xl lg:text-3xl text-light-secondary dark:text-dark-secondary mb-4">
                Software Engineering Student & Developer
              </h2>
              
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-xl text-light-secondary dark:text-dark-secondary">
                <span>Experienced  in</span>
                <motion.span
                  key={currentSkill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="font-semibold text-light-accent dark:text-dark-accent min-w-[120px] text-left"
                >
                  {skills[currentSkill]}
                </motion.span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 space-y-2 lg:space-y-0 text-light-secondary dark:text-dark-secondary">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <MapPin className="w-5 h-5 text-light-accent dark:text-dark-accent" />
                  <span>Wattala, Sri Lanka</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Phone className="w-5 h-5 text-light-accent dark:text-dark-accent" />
                  <span>+94-713881357</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Mail className="w-5 h-5 text-light-accent dark:text-dark-accent" />
                  <span>prasantha20011216@gmail.com</span>
                </div>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-light-secondary dark:text-dark-secondary mb-8 max-w-2xl"
            >
              Highly motivated and passionate Third-year Software Engineering student with a strong 
              foundation in computer science principles and programming. Eager to apply academic 
              knowledge to real-world projects and gain practical experience in a dynamic and 
              innovative environment.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
              <motion.a
                href="https://github.com/Prasantha123123"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-3 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-full text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors border border-light-border dark:border-dark-border"
              >
                <Github className="w-6 h-6" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/prasantha-raman-8788aa262"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                className="p-3 bg-light-bg-secondary dark:bg-dark-bg-secondary rounded-full text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors border border-light-border dark:border-dark-border"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-light-accent to-light-accent-secondary dark:from-dark-accent dark:to-dark-accent-secondary p-1">
                <div className="w-full h-full rounded-full bg-light-bg-secondary dark:bg-dark-bg-secondary flex items-center justify-center text-6xl font-bold text-light-secondary dark:text-dark-secondary">
                 <img
                    src="/profile.jpg"
                    alt="Raman Prasantha's profile photo"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-light-accent dark:bg-dark-accent rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-light-accent-secondary dark:bg-dark-accent-secondary rounded-full opacity-20"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-light-secondary dark:text-dark-secondary"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;