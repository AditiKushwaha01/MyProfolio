import React from 'react';
import Interest from './Interest'; 
import 'keen-slider/keen-slider.min.css';

const items = [
    {
        title: 'Hackathon',
        text: 'Secure semi finalist in Vultr Hackathon 2024. Built scalable frontend Web application "Food Sathi".',
        color: 'bg-lime-500'
    },
    {
        title: 'Code War 3.O',
        text: 'Participated in Code-Wars 3.0, organized by Nitte Meenakshi Institute of Technology NMIT, Yelahanka.',
        color: 'bg-cyan-500'
    },
    {
        title: 'AKTU Sports',
        text: 'Won 3rd position in relay race 400m in AKTU Zonal Sports',
        color: 'bg-orange-400'
    },
    {
        title: 'DFIR Internship',
        text: 'Attended an internship program in digital forensics and incident response.',
        color: 'bg-fuchsia-600'
    }
];

const FocusStyleAchievements = () => {
    return (
        <section className="py-20 px-4 bg-gray-50 text-gray-800">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">🏆 Achievements & Interests</h2>

                <div className="space-y-10 px-4 md:px-12">
                    {items.map((item, i) => (
                        <div key={i} className="flex flex-col md:flex-row items-center gap-6">
                            {/* Colored title block on the left */}
                            <div className={`flex items-center ${item.color} text-white font-semibold px-6 py-4 rounded-l-full shadow-md`}>
                                {item.title}
                            </div>

                            {/* Text block on the right */}
                            <div className="flex-1 bg-gray-200 text-gray-800 p-5 rounded-r-full shadow-sm">
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>


                {/* Interest Carousel */}
                <div className="mt-16">
                    {/*<h3 className="text-2xl font-semibold text-center mb-6">🎯 Interests</h3>*/}
                    <Interest />
                </div>
            </div>
        </section>
    );
};

export default FocusStyleAchievements;
