import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "OCTANET SERVICES PVT LTD",
      period: "1st Jul 2024 - 1st Aug 2024",
      description: [
        "Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.js, improving user engagement by 25%.",
        "Achieved secure and efficient backend operations by implementing Node.js and Express.js for service development, which led to seamless third-party API integration and robust authentication management using JWT.",
        "Worked with MongoDB to design efficient schemas, perform CRUD operations, and manage database performance.",
        "Used Git and GitHub for version control and participated in code reviews to ensure code quality and team collaboration."
      ]
    }
  ];

  return (
    <section id="experience" className="w-full py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 border-l-2 border-blue-600 dark:border-blue-400"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {exp.company}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {exp.period}
                </p>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a
                    href="https://drive.google.com/file/d/1QmxUa3RK1H9ytoYBKd2Fv7_MwGQSSddS/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Certificate
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 