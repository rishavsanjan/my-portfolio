import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export default function Services({theme,  component3Ref }) {

    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            once: false
        })
    }, [])
    const components = [{ image: "web-logo.png", title: "Web Application Development", description: "I build dynamic, full-stack web applications with modern UI/UX and robust backend integrations. My stack includes React, Tailwind CSS, Node.js, Express, Prisma, and PostgreSQL/MongoDB. I’ve developed features like user dashboards, search with filters, rating systems, custom lists, and real-time notifications. Whether it’s authentication flows or responsive frontend interfaces, I focus on delivering seamless, functional, and well-structured web experiences." },
    { image: "mobile-logo.png", title: "Mobile Application Development", description: "I develop cross-platform mobile applications with a focus on smooth performance, intuitive UI, and responsive design. Using React Native, TypeScript, and NativeWind, I’ve built apps that integrate features like authentication, real-time messaging (Socket.IO), media playback, watchlists, and user reviews. I also work with libraries like React Navigation, Axios, and AsyncStorage, and integrate tools like Cloudinary and Expo SDKs. My apps prioritize user experience and scalability, backed by efficient backend APIs." },
    { image: "backend-logo.png", title: "Backend Development", description: "I specialize in building efficient, scalable, and secure backend systems. My backend work primarily involves creating RESTful APIs, managing databases, implementing authentication and authorization, and optimizing server-side logic. I’ve worked with tools like Node.js, Express, Prisma, PostgreSQL, and MongoDB, and deployed apps using Cloudflare Workers, Vercel, and Render. I follow clean code practices, prioritize performance, and design systems that scale well with real-time features like Socket.IO and robust data handling." }
    ]
    return (
        <div ref={component3Ref} className={`${theme === 'light' ? 'bg-gray-300' : 'bg-black'}  pt-12 md:pl-32 md:pr-32 pb-24 pl-4 pr-4 scroll-mt-16`}>
            <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-center font-bold text-4xl mb-4`}>Services</h1>
            <div>
                <p className="text-blue-500 font-semibold text-lg mb-8">What i will provide</p>
            </div>
            <div className="flex flex-col  gap-20 justify-center md:flex-row">
                {components.map((element, index) => {
                    return (
                        <div
                        key={index}
                        data-aos="fade-right"
                        className="bg-white p-5 rounded-xl flex flex-col gap-4 items-center md:w-96 backdrop-blur-xl shadow-xl hover:-translate-y-3 transition-all duration-300 ">
                            <img className="w-16" src={element.image}></img>
                            <h1 className="font-bold text-lg text-center">{element.title}</h1>
                            <span>{element.description}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}