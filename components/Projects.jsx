import { Typewriter } from 'react-simple-typewriter';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Projects({ theme, component5Ref }) {
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 100,
            once: false
        })
    }, [])
    const projects = [
        {
            image: "cinely.png",
            name: "Cinely – Movie Tracking & Discovery App",
            description: `A full-featured mobile app for tracking movies, anime, and TV shows with social interaction features like reviews, polls, and discussions. Designed for movie buffs who want more than just a watchlist.`,
            techStack: [
                "React Native",
                "TypeScript",
                "Tailwind CSS (NativeWind)",
                "Hono",
                "Cloudflare Workers",
                "Prisma",
                "PostgreSQL",
                "Cloudinary",
                "TMDB API"
            ],
            details: 'https://www.linkedin.com/posts/rishav-sanjan-09259a273_cinely-reactnative-typescript-activity-7354617512568762368-4nLx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELUCO4BDkMQrh0jNs85t66FXQTp5f4VWsY'
        },
        {
            image: "community-web.png",
            name: "Community Connect – Full-Stack Platform",
            description: `A MERN stack platform to connect people needing help with those offering it. Features include user connections, resource requests, real-time chat, reporting, and admin moderation.`,
            techStack: [
                "MongoDB",
                "Express.js",
                "React.js",
                "Node.js",
                "Tailwind CSS",
                "JWT Auth",
                "Socket.IO"
            ],
            details: 'https://www.linkedin.com/feed/update/urn:li:activity:7333857151372664832/'
        },
        {
            image: "community-web.png",
            name: "Community Connect (Mobile)",
            description: `A mobile version of the Community Connect platform with optimized UI/UX and support for real-time chat, resource posting, user profiles, and notifications.`,
            techStack: [
                "React Native",
                "TypeScript",
                "Tailwind CSS (NativeWind)",
                "Socket.IO"
            ],
            details: ''
        }
    ];

    return (
        <div ref={component5Ref} className={`${theme === 'light' ? 'bg-white' : 'bg-[#111827]'}  flex flex-col p-8 scroll-mt-16`}>
            <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-center font-bold text-4xl mb-8`}>Projects</h1>
            <h1 className='text-blue-500 text-3xl font-medium mb-8'>What I am working on</h1>
            <div className='lg:flex-row flex-col  flex gap-4'>
                {
                    projects.map((item, index) => {
                        { console.log(item.details) }
                        return (
                            <div data-aos="flip-right" key={index} className='bg-[#1F2937] rounded-2xl'>
                                <img className='w-full h-96 rounded-t-xl' src={`${item.image}`}></img>
                                <div className='p-4 '>
                                    <h1 className='text-white text-xl font-bold mb-4'> {item.name}</h1>
                                    <span className='text-gray-500 pb-8'>{item.description}</span>
                                    <h1 className='text-gray-300 mt-4 font-semibold'>Tech Stack : </h1>
                                    <div className='flex flex-row flex-wrap '>
                                        {item.techStack.map((obj, index) => {
                                            return (
                                                <h1 key={index} className='text-white'>{obj},&nbsp;</h1>
                                            )
                                        })}
                                    </div>
                                </div>
                                <a target="_blank" rel="noopener noreferrer" href={`${item.details}`}><button className='bg-blue-500 text-white p-4 mb-4 ml-4 rounded-xl'>More Details</button></a>

                            </div>
                        )
                    })
                }
            </div>
        </div>



    )
}