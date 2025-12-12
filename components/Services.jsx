import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Services({ theme, component3Ref }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            once: false
        });
    }, []);

    const services = [
        {
            image: "web-logo.png",
            title: "Web Application Development",
            description: "I build dynamic, full-stack web applications with modern UI/UX and robust backend integrations. My stack includes React, Tailwind CSS, Node.js, Express, Prisma, and PostgreSQL/MongoDB. I've developed features like user dashboards, search with filters, rating systems, custom lists, and real-time notifications.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            image: "mobile-logo.png",
            title: "Mobile Application Development",
            description: "I develop cross-platform mobile applications with a focus on smooth performance, intuitive UI, and responsive design. Using React Native, TypeScript, and NativeWind, I've built apps that integrate features like authentication, real-time messaging, media playback, watchlists, and user reviews.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            image: "backend-logo.png",
            title: "Backend Development",
            description: "I specialize in building efficient, scalable, and secure backend systems. My backend work primarily involves creating RESTful APIs, managing databases, implementing authentication and authorization, and optimizing server-side logic. I work with Node.js, Express, Prisma, PostgreSQL, MongoDB, and deploy using Cloudflare Workers, Vercel, and Render.",
            gradient: "from-emerald-500 to-teal-500"
        }
    ];

    return (
        <section
            ref={component3Ref}
            className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gradient-to-b from-gray-900 to-black'} py-8  scroll-mt-16 transition-colors duration-300 items-center`}
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-blue-500 font-semibold text-sm uppercase tracking-wider mb-3">
                        What I Offer
                    </p>
                    <h2 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-4xl md:text-5xl font-bold mb-4`}>
                        Services
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Services Grid */}
                <div className="flex md:flex-row flex-col gap-8 justify-around ">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            className={`group relative ${theme === 'light' ? 'bg-white' : 'bg-gray-800/50 backdrop-blur-xl'} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border ${theme === 'light' ? 'border-gray-200' : 'border-gray-700/50'} overflow-hidden w-full`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>

                            {/* Icon container with gradient */}
                            <div className="relative mb-6">
                                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={`w-full h-full ${theme === 'light' ? 'bg-white' : 'bg-gray-800'} rounded-xl flex items-center justify-center`}>
                                        <img
                                            className="w-12 h-12 object-contain"
                                            src={service.image}
                                            alt={service.title}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className={`${theme === 'light' ? 'text-gray-900' : 'text-white'} text-xl font-bold mb-4 text-center group-hover:text-blue-500 transition-colors duration-300`}>
                                {service.title}
                            </h3>
                            <p className={`${theme === 'light' ? 'text-gray-600' : 'text-gray-300'} text-sm leading-relaxed text-center`}>
                                {service.description}
                            </p>

                            {/* Bottom accent line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}