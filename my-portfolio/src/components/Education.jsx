import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const EducationSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const cards = [
    {
      year: "2019",
      title: "Completed Grade 10",
      school: "Cambridge Public School",
      location: "Bangalore, Karnataka",
      grade: "Grade: 96%",
      address: "Cambridge Layout, Halasuru, Bengaluru, Karnataka 560008",
      animation: "fade-right",
    },
    {
      year: "2021",
      title: "Completed 12th Grade",
      school: "Bethany High School",
      location: "Bangalore, Karnataka",
      grade: "Grade: 97%",
      address: "6th Main, Koramangala, Bengaluru, Karnataka 560034",
      animation: "zoom-in",
    },
    {
      year: "2025",
      title: "B.Tech in AI & Data Science",
      school: "Sikkim Manipal Institute of Technology",
      location: "Majitar, Sikkim",
      grade: "CGPA: 9.54",
      extra: "Honours: AI in Health & Medicine",
      address: "Majitar, Rangpo, Sikkim 737136",
      animation: "fade-left",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 text-center" id="education">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">Education</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            data-aos={card.animation}
            className="bg-white border-2 border-purple-400 rounded-xl shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-3">{card.year}</h3>
            <p className="text-sm font-medium text-gray-800 mb-1">{card.title}</p>
            <p className="text-sm text-gray-700">{card.school}</p>
            <p className="text-sm text-gray-700">{card.location}</p>
            <p className="text-sm text-gray-700 mt-1">{card.grade}</p>
            {card.extra && <p className="text-sm text-gray-700">{card.extra}</p>}
            <p className="text-xs text-gray-500 mt-2">Address: {card.address}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
