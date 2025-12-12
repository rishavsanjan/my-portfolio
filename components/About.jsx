import { useState, useEffect } from 'react';

export default function About({theme, component2Ref}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const technologies = [
        { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', bg: '#000000' },
        { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', bg: '#61DAFB' },
        { name: 'React Native', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', bg: '#61DAFB' },
        { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', bg: '#3178C6' },
        { name: 'JavaScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', bg: '#F7DF1E' },
        { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', bg: '#339933' },
        { name: 'Express', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', bg: '#000000' },
        { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', bg: '#47A248' },
        { name: 'Prisma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', bg: '#2D3748' },
        { name: 'Tailwind CSS', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', bg: '#06B6D4' },
        { name: 'HTML5', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', bg: '#E34F26' },
        { name: 'CSS3', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', bg: '#1572B6' },
        { name: 'Git', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', bg: '#F05032' },
        { name: 'C Language', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', bg: '#A8B9CC' },
        { name: 'Postman', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg', bg: '#FF6C37' },
        { name: 'Hono', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', bg: '#E36002' },
    ];

    return (
        <div ref={component2Ref} className={`min-h-screen ${theme === 'light' ? 'bg-gray-50' : 'bg-gray-900'} transition-colors duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                

                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h1 className={`text-5xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                        About Me
                    </h1>
                </div>

                {/* Content Sections */}
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* About Me Section */}
                    <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800'} rounded-2xl p-8`}>
                            <h2 className="text-blue-500 font-bold text-2xl mb-4">
                                A bit about me
                            </h2>
                            <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} text-lg leading-relaxed`}>
                                I aim to be a FullStack Developer and Mobile App Developer. Currently I am pursuing my Master of Computer Applications
                                from National Institute of Technology (NIT), Bhopal also known as MANIT.
                            </p>
                        </div>
                    </div>

                    {/* Technologies Section */}
                    <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800'} rounded-2xl p-8`}>
                            <h2 className="text-blue-500 font-bold text-2xl mb-4">
                                Technologies and Tools
                            </h2>
                            <p className={`${theme === 'light' ? 'text-gray-700' : 'text-gray-300'} text-lg leading-relaxed mb-8`}>
                                Using a combination of cutting-edge technologies and reliable
                                open-source software I build user-focused, performant apps and websites
                                for smartphones, tablets, and desktops.
                            </p>

                            {/* Technology Cards Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {technologies.map((tech, index) => (
                                    <div
                                        key={tech.name}
                                        className={`${theme === 'light' ? 'bg-gray-50 hover:bg-gray-100' : 'bg-gray-700 hover:bg-gray-600'} 
                                            rounded-xl p-4 flex flex-col items-center justify-center gap-3 
                                            transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
                                            cursor-pointer group`}
                                        style={{
                                            transitionDelay: `${index * 50}ms`
                                        }}
                                    >
                                        <div className="w-12 h-12 flex items-center justify-center relative">
                                            <img 
                                                src={tech.url} 
                                                alt={tech.name}
                                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div 
                                                className="w-12 h-12 rounded-lg hidden items-center justify-center text-white font-bold text-xl"
                                                style={{ backgroundColor: tech.bg }}
                                            >
                                                {tech.name.charAt(0)}
                                            </div>
                                        </div>
                                        <span className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-200'} text-sm font-medium text-center`}>
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800'} rounded-2xl p-6 text-center`}>
                                <div className="text-4xl font-bold text-blue-500 mb-2">16+</div>
                                <div className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} font-medium`}>Technologies</div>
                            </div>
                            <div className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800'} rounded-2xl p-6 text-center`}>
                                <div className="text-4xl font-bold text-blue-500 mb-2">6+</div>
                                <div className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} font-medium`}>Projects</div>
                            </div>
                            <div className={`${theme === 'light' ? 'bg-white shadow-lg' : 'bg-gray-800'} rounded-2xl p-6 text-center`}>
                                <div className="text-4xl font-bold text-blue-500 mb-2">MCA</div>
                                <div className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-400'} font-medium`}>From NIT Bhopal</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}