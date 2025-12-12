import { Typewriter } from 'react-simple-typewriter';

export default function Front({ theme, component1Ref }) {
    return (
        <div ref={component1Ref} className='scroll-mt-40 mt-16'>
            <div  className={`${theme === 'light' ? 'bg-[url(/cloud.png)]' : 'bg-[url(/cloudDark.png)]'}  bg-cover bg-center min-h-screen w-full `}>
                <div className="backdrop-brightness-100 min-h-screen w-full px-4 xl:px-36 py-20 text-white">
                    <div  className="flex flex-row justify-evenly">
                        <div className="flex flex-col gap-7 justify-center max-w-md z-0">
                            <div>
                                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} sm:text-5xl text-4xl pt-20 font-extrabold`}>Hi, I am Rishav</h1>
                                <div style={{ }} className='sm:text-5xl text-4xl  text-[#3B82F6]  font-extrabold'>
                                    <Typewriter
                                        words={['Full Stack Developer', 'Mobile App Developer', 'Backend Developer']}
                                        loop={true}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}

                                    />
                                </div>
                            </div>
                            <div>
                                <p className="text-xl">I am a student at National Institiute of Technology (NIT) , Bhopal also known as MANIT. </p>
                            </div>
                            <div className="flex flex-row gap-3">
                                <a target='_blank' href="https://www.facebook.com/rishab.sanjan/"><img className="w-8" src="facebook-logo.png"></img></a>
                                <a target='_blank' href="https://github.com/rishavsanjan"><img className="w-8" src="github-logo.png"></img></a>
                                <a target='_blank' href="https://www.instagram.com/rishav_sanjan/"><img className="w-8" src="instagram-logo.png"></img></a>
                                <a target='_blank' href="https://in.linkedin.com/in/rishav-sanjan-09259a273"><img className="w-8" src="linkedin-logo.png"></img></a>
                            </div>
                            <div>
                                <a target='_blank' href='https://drive.google.com/file/d/1HamzlPgk3v7volCTf9kcNvLx4n4C1dUo/view' ><button  className="bg-amber-300 pl-20 pr-20 pt-5 pb-5 rounded-lg hover:bg-green-500">Resume</button> </a> 
                            </div>
                        </div>
                        <div className="hidden md:flex items-center">
                            <img className="w-[600px]" src="/front-light.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}