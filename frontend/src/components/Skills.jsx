import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    {
      category: "Web Skills",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "React Js",
        "Express Js",
        "Node Js",
        "Mongo DB",
        "Tailwind CSS",
        "Socket.IO",
      ]
    },
    {
      category: "Programming Languages",
      items: [
        "Java (DSA)",
        "Python",
        "SQL",
        "JavaScript",
        "TypeScript",
        "C++",
        "C"
      ]
    },
    {
      category: "SAP Skills",
      items: [
        "SAP ABAP",
        "SAP HANA",
        "SAP HR Management"
      ]
    },
    {
      category: "Tools & Others",
      items: [
        "VS Code",
        "Git Hub",
        "Mongo DB Atlas",
        "Mongo DB Compass",
        "Firebase",
        "Cloudinary",
        "SAP Logon",
        "Git",
        "IntelliJ"
      ]
    }
  ];

  return (
    <section id="skills" className="w-full py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 