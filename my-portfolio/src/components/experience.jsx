import { motion } from "framer-motion";

const experiences = [
  {
    company: "Cloud Nexus Technologies",
    role: "Senior Frontend Engineer (React/Next.js)",
    location: "Seattle, WA",
    period: "Jan 2022 – Present",
    points: [
      "Migrated legacy platform to Next.js, boosting performance and SEO.",
      "Built scalable UIs using React, TypeScript, Tailwind CSS.",
      "Integrated GraphQL (Apollo Client) for dynamic data fetching.",
      "Led responsive and accessible design implementations (WCAG 2.1)."
    ]
  },
  {
    company: "AI Solutions Lab",
    role: "Machine Learning Web Engineer",
    location: "Remote",
    period: "Jul 2019 – Dec 2021",
    points: [
      "Visualized real-time AI outputs using D3.js and TensorFlow.js.",
      "Built a cloud interface for model deployment with AWS Lambda & API Gateway.",
      "Added AI explainability layers to enhance trust and understanding.",
      "Streamlined CI/CD with Docker & GitHub Actions."
    ]
  },
  {
    company: "TechCraft Digital",
    role: "Full-Stack Developer",
    location: "Austin, TX",
    period: "Mar 2016 – Jun 2019",
    points: [
      "Developed 40+ apps using Node.js, Express, MongoDB.",
      "Created component libraries in Vue.js for internal tooling.",
      "Implemented testing with Cypress and Jest.",
      "Mentored junior devs and led regular code reviews."
    ]
  }
];

export default function Experience() {
  return (
    <section className="px-12 py-16 bg-white text-gray-900">
      <h2 className="text-4xl font-bold mb-12 text-center border-b pb-4">Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="relative border-l-4 border-indigo-500 bg-gray-50 rounded-r-2xl shadow-md p-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between flex-wrap md:flex-nowrap items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.location} · {exp.role}</p>
              </div>
              <span className="text-sm text-gray-500 mt-2 md:mt-0">{exp.period}</span>
            </div>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-2">
              {exp.points.map((point, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: highlightTech(point) }} />
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function highlightTech(text) {
  const techs = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Apollo Client",
    "D3.js", "TensorFlow.js", "AWS Lambda", "API Gateway", "Docker", "GitHub Actions",
    "Node.js", "Express", "MongoDB", "Vue.js", "Cypress", "Jest", "WCAG 2.1"
  ];
  const pattern = new RegExp(`\\b(${techs.join("|")})\\b`, "g");
  return text.replace(pattern, (match) => `<span class="text-indigo-600 font-medium">${match}</span>`);
}
