import React from "react";

const CompaniesSlider: React.FC = () => {
    const companies = [
        ["WISAG", "enerix", "WEKU", "WOLF", "GEZE", "Mitarbeitergew"],
        ["octopus energy", "nolte Küchen", "Atlas Copco", "OMEXOM", "EDEKA", "HÜRTH"],
        ["VINCI Energies", "Volvo", "LADWIG", "w. müller", "HomeServe", "vit:bikes"],
        ["TIP", "Elektrotechnik", "EDER Stapler", "MAH MOSBACH Gruppe", "MSR Gerdes", "BOSCH Service"],
    ];

    return (
        <section className="bg-gray-900 py-12 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-white text-2xl sm:text-3xl font-semibold mb-8">
                    2.500+ große und kleine Unternehmen vertrauen <br/>
                    <span className="text-indigo-400">Candidate Flow®</span>
                </h2>

                {/* Sliders */}
                <div className="space-y-6">
                    {companies.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className={`flex items-center space-x-4 ${
                                rowIndex % 2 === 1 ? "flex-row-reverse" : ""
                            } animate-marquee`}
                            style={{
                                animationDirection: rowIndex % 2 === 1 ? "reverse" : "normal",
                                animationDuration: `${10 + rowIndex * 2}s`,
                            }}
                        >
                            {row.map((company, companyIndex) => (
                                <div
                                    key={companyIndex}
                                    className="flex-none bg-gray-800 flex items-center justify-center h-20 w-40 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                                >
                  <span className="text-white text-sm sm:text-base font-medium text-center">
                    {company}
                  </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompaniesSlider;
