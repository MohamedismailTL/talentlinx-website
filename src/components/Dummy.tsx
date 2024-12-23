import React from 'react';

const techStack = [
    { name: 'Linux', imgSrc: 'https://via.placeholder.com/80x80?text=Linux' },
    { name: 'JavaScript', imgSrc: 'https://via.placeholder.com/80x80?text=JS' },
    { name: 'TypeScript', imgSrc: 'https://via.placeholder.com/80x80?text=TS' },
    { name: 'Express', imgSrc: 'https://via.placeholder.com/80x80?text=EX' },
    { name: 'Kotlin', imgSrc: 'https://via.placeholder.com/80x80?text=Kt' },
    { name: 'Java', imgSrc: 'https://via.placeholder.com/80x80?text=Java' },
    { name: 'PHP', imgSrc: 'https://via.placeholder.com/80x80?text=PHP' },
    { name: 'Node.js', imgSrc: 'https://via.placeholder.com/80x80?text=Node' },
    { name: 'MongoDB', imgSrc: 'https://via.placeholder.com/80x80?text=MongoDB' },
    { name: 'React', imgSrc: 'https://via.placeholder.com/80x80?text=React' },
];

const TechStackSection = () => {
    return (
        <section className="flex flex-col md:flex-row md:space-x-10 p-10 bg-white">
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10 md:mb-0">
                {techStack.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center text-center">
                        <img src={tech.imgSrc} alt={tech.name} className="w-16 h-16 mb-2 object-cover" />
                        <p className="text-sm font-medium">{tech.name}</p>
                    </div>
                ))}
            </div>
            <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-4">Unser Tech-Stack</h2>
                <p className="mb-6 leading-relaxed">
                    Wir sind die führende IT-Recruitingfirma, die sich darauf spezialisiert hat,
                    hoch qualifizierte Tech-Talente mit innovativen Start-ups und renommierten Konzernen zusammenzubringen.
                    Unsere Expertise umfasst ein breites Spektrum an Technologien, wobei der Fokus auf den modernsten Technologien liegt.
                </p>
                <button className="bg-black text-white font-semibold py-3 px-6 hover:bg-gray-800 transition-colors">
                    Zusammenarbeit anfragen
                </button>
            </div>
        </section>
    );
};

export default TechStackSection;
