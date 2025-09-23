import { motion } from 'framer-motion';

export default function Certifications() {
  const certifications = [
{
  title: "Web Development Intern",
  issuer: "Octanet Services Pvt. Ltd",
  date: "2024",
  description: "2-month virtual internship focused on full-stack project development.",
  credentialId: "OCTANET-2024",
  image: "/Octanet.png",
  link: "https://drive.google.com/file/d/1QmxUa3RK1H9ytoYBKd2Fv7_MwGQSSddS/view?usp=drive_link"
},
{
  title: "SAP Certified Associate - Backend Developer - ABAP Cloud",
  issuer: "SAP",
  date: "2025",
  description: "Validated expertise in ABAP development within the SAP ecosystem.",
  credentialId: "SAP-ABAP-2024",
  image: "/sap.png",
  link: "https://drive.google.com/file/d/1Wm4PlEl1qgwgGv8XoOrrEr7MYgx8I3OB/view?usp=drive_link"
},
{
  title: "SAP Certified Professional - Solution Architect - SAP BTP",
  issuer: "SAP",
  date: "2025",
  description: "Validated expertise in ABAP BTP development within the SAP ecosystem.",
  credentialId: "SAP-BTP-2024",
  image: "/SAP-BTP.png",
  link: "https://drive.google.com/file/d/1yq1R--ZgMNXf945QjHg_CVIekuLjfY80/view?usp=drive_link"
},
{
  title: "Infosys Springboard Java Foundation Certification",
  issuer: "Infosys SpringBoard",
  date: "2025",
  description: "Validated foundational knowledge of Java programming, OOP, and core APIs.",
  credentialId: "Infosys SpringBoard-JAVA-2025",
  image: "/Java.png",
  link: "https://drive.google.com/your-oracle-certificate-linhttps://drive.google.com/file/d/1A5MopZJ2Umuwa-m7jGMJh4-GUqkdLVeW/view?usp=drive_link"
},
{
  title: "AI-ML Virtual Internship",
  issuer: "AICTE EduSkills (India Edu Program with Google for Developers)",
  date: "Jan–Mar 2025",
  description: "10-week virtual internship in Artificial Intelligence and Machine Learning.",
  credentialId: "AICTE-ML-2025",
  image: "/AI-ML(Virtual Internship).png",
  link: "https://drive.google.com/file/d/162-uRq1rPJpH21EiKr93icNnO_E-PoH7/view?usp=drive_link"
}

  ];

  return (
    <section id="certifications" className="w-full py-20 bg-white dark:bg-gray-900">
      <div className="w-full max-w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {cert.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Issued: {cert.date}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {cert.description}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Credential ID: {cert.credentialId}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Certificate →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 