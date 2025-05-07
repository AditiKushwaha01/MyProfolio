import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 px-12 py-10 text-sm text-black">
            <div className="max-w-6xl mx-auto">

                {/* Let's get in touch section */}
                <div className="pb-9">
                    <h1 className="font-semibold text-3xl">
                        <a
                            href="/contact"
                            className="relative inline-flex items-center group">
                            {/* Dot */}
                            <span className="mr-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                •    
                            </span>

                            {/* Text that moves right */}
                            <span className="transition-transform duration-300 group-hover:translate-x-2">
                                Let’s get in touch
                            </span>
                        </a>
                    </h1>
                </div>

                {/* Footer columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                    {/* Credits Section */}
                    <div>
                        <h4 className="text-gray-600 mb-2 pl-4">Credits</h4>
                        <p className="group inline-flex items-center cursor-default">
                            <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                                •
                            </span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                © Aditi Kushwaha
                            </span>
                        </p>
                    </div>

                    {/* Menu Section */}
                    <div>
                        <h4 className="text-gray-600 mb-2 pl-4">Menu</h4>
                        <ul className="list-none space-y-1">
                            {["Home", "Work", "About", "Contact"].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="group inline-flex items-center relative"
                                    >
                                        {/* Dot */}
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                                            •
                                        </span>

                                        {/* Text */}
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h4 className="text-gray-600 mb-2 pl-4">Contact</h4>
                        <p className="group inline-flex items-center cursor-default">
                            <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                                •
                            </span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                            aditi.kush02@gmail.com
                            </span>
                        </p>
                        <p className="group inline-flex items-center  cursor-default">
                            <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                                •
                            </span>
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                            +91 8601404802
                            </span>
                        </p>
                        
                    </div>

                    {/* Socials Section */}
                    <div className="md:mt-0">
                        <h4 className="text-gray-600 mb-2 pl-4">Socials</h4>
                        <ul className="list-none space-y-1">
                            {["Github", "LinkedIn", "LeetCode", "GeeksforGeeks"].map((item) => (
                                <li key={item}>
                                    <a
                                        href="www.linkedin.com/in/aditi-kushwaha"
                                        className="group inline-flex items-center relative"
                                    >
                                        {/* Dot */}
                                        <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">
                                            •
                                        </span>

                                        {/* Text */}
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            {item}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;
