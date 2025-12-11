import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function About({ theme, component2Ref }) {
    useEffect(() => {
        AOS.init({
            duration: 600,
            offset: 200,
            once: false
        })
    }, [])

    const imageLocs = [{ name: 'C Language', url: " c-logo.png" },
    { name: 'NodeJS', url: 'nodejs.png' },

    { name: 'CSS', url: "css-logo.png" },
    { name: 'Git', url: 'git-plain-logo.png' },
    { name: 'HTML', url: 'html-logo.png' },
    { name: 'JavaScript', url: 'js-logo.png' },
    { name: 'React', url: "react-logo.png" },
    { name: 'Tailwind', url: 'tailwind-logo.png' },
    { name: 'Postman', url: 'postman.png' },
    { name: 'Express', url: 'express.png' },
    { name: 'MongoDb', url: 'mongodb.png' },
    { name: 'Typescript', url: 'typescript.png' },
    { name: 'React Native', url: 'react-native.png' },
    { name: 'Hono', url: 'hono.png' },
    { name: 'Prisma', url: 'prisma.png' },

    ];
    return (
        <div  ref={component2Ref} className={`${theme === 'light' ? 'bg-white' : 'bg-[#111827]'} flex flex-col px-4 sm:px-10 md:px-20 lg:px-28 xl:px-36 py-4 gap-4 items-center justify-center scroll-mt-16`}>
            <div data-aos="slide-up">
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-center font-bold text-5xl py-12`}>About Me</h1>
            </div>
            <div data-aos="slide-up" className=" flex flex-col gap-4 pb-4">
                <p className={` text-blue-400 font-bold text-2xl`}>A bit about me</p>
                <p className={`${theme === 'light' ? 'text-black' : 'text-gray-300'} text-lg `}>I aim to be a FullStack Developer and Mobile App Developer, Currently I am pursuing my Master of Computer Applications
                    from National Institute of Technology (NIT), Bhopal also known as MANIT.
                </p>
            </div>
            <div data-aos="slide-up" className="flex flex-col gap-4 pb-4">
                <p className={` text-blue-400 font-bold text-2xl`}>Technologies and Tools</p>
                <p className={`${theme === 'light' ? 'text-black' : 'text-gray-300'} text-lg `}>Using a combination of cutting-edge technologies and reliable
                    open-source software I build user-focused, performant apps and websites
                    for smartphones, tablets, and desktops.</p>
            </div>
            <div className=" flex flex-row flex-wrap gap-16  justify-center pb-16">
                {imageLocs.map((element) => {
                    return (
                        <div
                            data-aos="slide-up"
                            key={element.name}
                            className="bg-[#F9FAFB] flex sm:p-4 p-1 sm:w-56 md:w-44 w-32   justify-between rounded-md items-center transition-all hover:-translate-y-3 hover:shadow-lg hover:backdrop-blur-lg"
                        >
                            <img className="w-12 h-12" src={element.url}></img>
                            <h1 className="">{element.name}</h1>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}