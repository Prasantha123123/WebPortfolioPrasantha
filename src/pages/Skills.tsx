import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Smartphone, Palette, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-purple-700",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-teal-700",
      skills: [
        { name: "Laravel", level: 85 },
        { name: "PHP", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "Authentication", level: 80 }
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 75 },
        { name: "PostgreSQL", level: 70 },
        { name: "Database Design", level: 80 },
        { name: "Query Optimization", level: 75 },
        { name: "Data Modeling", level: 80 }
      ]
    },
  
    {
      title: "Design & UI/UX",
      icon: <Palette className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      skills: [
        { name: "Responsive Design", level: 90 },
        { name: "User Experience", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 70 },
        { name: "Prototyping", level: 75 },
        { name: "Design Systems", level: 70 }
      ]
    },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
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
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Here's an overview of my technical skills and expertise across different 
            areas of software development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-teal-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        variants={progressVariants}
                        initial="hidden"
                        animate="visible"
                        custom={skill.level}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Additional Competencies
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Soft Skills
                </h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>Problem Solving</p>
                  <p>Team Collaboration</p>
                  <p>Communication</p>
                  <p>Time Management</p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Methodologies
                </h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>Agile Development</p>
                  <p>Scrum</p>
                  <p>Test-Driven Development</p>
                  <p>Code Reviews</p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Version Control
                </h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>Git</p>
                  <p>GitHub</p>
                  <p>GitLab</p>
                  <p>Branching Strategies</p>
                </div>
              </div>

              <div className="text-center">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Learning
                </h4>
                <div className="space-y-2 text-gray-600 dark:text-gray-400">
                  <p>Continuous Learning</p>
                  <p>Documentation</p>
                  <p>Research Skills</p>
                  <p>Adaptability</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Bring Your Ideas to Life?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              With my diverse skill set and passion for development, I'm ready to tackle 
              your next project. Let's discuss how we can work together.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Let's Collaborate
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;