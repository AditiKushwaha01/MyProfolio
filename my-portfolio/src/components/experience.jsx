import { motion } from "framer-motion";

const experiences = [
  {
    company: "CodTech IT SOLUTIONS",
    role: "Java Programmer(Java)",
    location: "Lucknow (Remote)",
    period: "Sep-Oct 2024 ",
    points: [
      "Developedamulti‑threaded backend in Java, improving scalability and handling 50% more user traffic.",
      "DesignedaJava‑basedportfolio website, boosting user engagement by 25% and enhancing scalability",
      "Refactored database queries and optimized caching, cutting response time by 15%"
    ]
  },
  {
    company: "CodeAlpha",
    role: "Web Development",
    location: "Remote",
    period: "Aug 2023",
    points: [
      "ManagedandcustomizedWordPresssites, enhancing user experience by 30% with customfeatures and responsive layouts.",
      "Built interactive survey forms in HTML, CSS, and JavaScript, raising completion rates by 20%.",
      "Collaborated with the design team to create responsive, mobile‑friendly interfaces that increased website accessibility.",
      "Optimized pageloadtimeswith lazy loading, boosting user retention by 20% on mobile and desktop"
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
