export default function Contact({ theme, component4Ref }) {
    const contact = ['Name', 'Email', 'Message'];
    const contactDetails = [{ name: 'Email', detail: 'rishavsanjan0@gmail.com' },
    { name: 'Address', detail: 'Kathua, Jammu, India' }
    ]
    return (
        <div id="contact" ref={component4Ref} className={`${theme === 'light' ? 'bg-lime-200' : 'bg-black'} scroll-mt-16 flex flex-col lg:pl-32 lg:pr-32 pt-20 gap-16  pb-20 pl-4 pr-4`}>
            <div>
                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-center text-5xl font-bold`}>Contact</h1>
            </div>
            <div className="sm:flex  justify-between flex-row">
                <div className="flex flex-col gap-8">
                    <div className="max-w-96 min-w-80">
                        <p className="text-blue-500 text-3xl font-semibold items-start">Connect With Me</p>
                        <span  className="text-gray-500">If you want to know more about me or my work, or if you would just
                            like to say hello, send me a message. I'd love to hear from you.</span>
                    </div>
                    <form action="https://formspree.io/f/mvgqajpq" method="POST">
                        <div className=" flex flex-col gap-1">
                            <h1 className="font-semibold">Name</h1>
                            {<input name="name" placeholder="Enter name " className='p-2 rounded-md bg-gray-600 text-white' type="text"></input>}
                        </div>
                        <div className=" flex flex-col gap-1">
                            <h1 className="font-semibold">Email</h1>
                            {<input name="email" placeholder="Enter email " className='p-2 rounded-md bg-gray-600 text-white' type="text"></input>}
                        </div>
                        <div className=" flex flex-col gap-1">
                            <h1 className="font-semibold">Message</h1>
                            {<textarea name="message" rows={4} placeholder="Enter message " className='p-2 rounded-md bg-gray-600 text-white' type="text"></textarea>}
                        </div>
                        <button type="submit" className="bg-blue-600 pt-2 pb-2 text-white rounded-md w-full my-4"> Submit </button>
                    </form>
                    
                </div>
                <div className="flex flex-col justify-evenly pt-8 gap-4">
                    {contactDetails.map((element, index) => {
                        return (
                            <div key={index}>
                                <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-right font-bold text-3xl`}>{element.name}</h1>
                                <p className={`${theme === 'light' ? 'text-gray-500' : 'text-blue-500'} text-right font-bold`}>{element.detail}</p>
                            </div>
                        )
                    })}
                    <div className="flex flex-col gap-2 ">
                        <h1 className={`${theme === 'light' ? 'text-black' : 'text-white'} text-right font-bold text-3xl`}>Socials</h1>
                        <div className="flex flex-row gap-3 justify-end">
                            <a target="_blank" href="https://www.facebook.com/rishab.sanjan/"><img className="w-8" src="facebook-logo.png"></img></a>
                            <a target="_blank" href="https://github.com/rishavsanjan"><img className="w-8" src="github-logo.png"></img></a>
                            <a target="_blank" href="https://www.instagram.com/rishav_sanjan/"><img className="w-8" src="instagram-logo.png"></img></a>
                            <a target="_blank" href="https://in.linkedin.com/in/rishav-sanjan-09259a273"><img className="w-8" src="linkedin-logo.png"></img></a>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}