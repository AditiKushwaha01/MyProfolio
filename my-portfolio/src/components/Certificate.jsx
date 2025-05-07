import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const certifications = [
  {
    title: 'JAVA Backend Development ',
    issuer: 'GeeksForGeeks',
    year: '2025',
    link: '#'
  },
  {
    title: ' Master Java Programming',
    issuer: 'GeeksForGeeks',
    year: '2024',
    link: 'https://www.linkedin.com/in/aditi-kushwaha/details/certifications/1714670562410/single-media-viewer/?profileId=ACoAAD5_IqkB3FPTtbFFO3BfpzjcjWK_brnvtPc'
  },
  {
    title: ' Introduction to Machine Learning',
    issuer: 'NPTeL',
    year: '2024',
    link: 'https://www.linkedin.com/in/aditi-kushwaha/details/certifications/1715629768374/single-media-viewer/?profileId=ACoAAD5_IqkB3FPTtbFFO3BfpzjcjWK_brnvtPc'
  },
  {
    title: 'Data Structure and Algorithms Using Java ',
    issuer: 'NPTEL',
    year: '2023',
    link: '#'
  }
];

const CertificateSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">Certifications</h2>

        <ul className="space-y-6">
          {certifications.map((cert, index) => (
            <li key={index} className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="font-medium text-lg">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.issuer}, {cert.year}</p>
              </div>
              <a
                href={cert.link}
                className="flex items-center text-sm text-gray-700 hover:text-indigo-600 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                View
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificateSection;
