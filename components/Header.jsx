import { useState } from "react"
export default function Header({ theme, setTheme, changeTheme, scrollToComponent, component1Ref, component2Ref, component3Ref, component4Ref, component5Ref }) {
    const [cross, setCross] = useState("navbar-icon.png");
    const [nav, addNav] = useState(" hidden fixed bg-white inset-0 md:hidden");
    function handleClick() {
        if (cross === "navbar-icon.png") {
            setCross("x-icon.png");
            addNav(" md:hidden fixed  inset-0");
        } else {
            setCross("navbar-icon.png");
            addNav(" hidden fixed  inset-0 md:hidden");
        }
    }



    return (
        <nav className={`${theme === 'light' ? 'bg-white' : 'bg-[#374151]'} flex top-0 left-0 justify-between items-center p-6 fixed z-50 w-full  `}>
            <a onClick={() => scrollToComponent(component1Ref)} className="flex items-center gap-5">
                <span className={`${theme === 'light' ? 'text-black' : 'text-white'} cursor-pointer`}>ᖇiડhᗩᐯ కᗩꪖꪹᗩꪖ</span>
            </a>
            <div className={`hidden md:flex gap-9 pr-20`}>
                <a onClick={() => scrollToComponent(component1Ref)} className={`${theme === 'light' ? 'text-black' : 'text-white'} font-semibold hover:text-white hover:bg-blue-500 px-2 py-1 rounded-xl cursor-pointer`}>Home</a>
                <a onClick={() => scrollToComponent(component2Ref)} className={`${theme === 'light' ? 'text-black' : 'text-white'} font-semibold hover:text-white hover:bg-blue-500 px-2 py-1 rounded-xl cursor-pointer`}>About</a>
                <a onClick={() => scrollToComponent(component3Ref)} className={`${theme === 'light' ? 'text-black' : 'text-white'} font-semibold hover:text-white hover:bg-blue-500 px-2 py-1 rounded-xl cursor-pointer`}>Services</a>
                <a onClick={() => scrollToComponent(component5Ref)} className={`${theme === 'light' ? 'text-black' : 'text-white'} font-semibold hover:text-white hover:bg-blue-500 px-2 py-1 rounded-xl cursor-pointer`}>Projects</a>
                <a onClick={() => scrollToComponent(component4Ref)} className={`${theme === 'light' ? 'text-black' : 'text-white'} font-semibold hover:text-white hover:bg-blue-500 px-2 py-1 rounded-xl cursor-pointer`}>Contact</a>
                {
                    theme === 'light' ?
                        <img onClick={() => { changeTheme('dark') }} className="w-7 h-7 cursor-pointer" src="light.png"></img>
                        :
                        <img onClick={() => { changeTheme('light') }} className="w-7 h-7 cursor-pointer" src="dark.png"></img>
                }
            </div>
            <div className=" md:hidden flex items-center  gap-2">
                {
                    theme === 'light' ?
                        <img onClick={() => { changeTheme('dark') }} className="w-7 h-7 cursor-pointer" src="light.png"></img>
                        :
                        <img onClick={() => { changeTheme('light') }} className="w-7 h-7 cursor-pointer" src="dark.png"></img>
                }
                <button onClick={handleClick} className=" p-3 md:hidden"><img className="w-6" src={cross}></img></button>
            </div>


            <div className={`${nav} z-40 ${theme === 'light' ? 'bg-white' : 'bg-[#374151]'}`}>
                <div className="flex justify-between items-center p-6">
                    <div>
                        <a onClick={() => scrollToComponent(component1Ref)} className=" flex items-center gap-5">
                            <span className={`${theme === 'light' ? 'text-black' : 'text-white'} cursor-pointer`}>ᖇiડhᗩᐯ కᗩꪖꪹᗩꪖ</span>
                        </a>
                    </div>
                    <button onClick={handleClick} className="p-3 md:hidden"><img className="w-6" src={cross}></img></button>
                </div>
                <div className={`flex flex-col gap-5 p-2 pt-10  ${theme === 'light' ? 'bg-white' : 'bg-[#374151]'}`}>
                    <a onClick={() => { scrollToComponent(component1Ref), handleClick() }} className={`${theme === 'light' ? 'text-black' : 'text-white'} font-semibold p-5 hover:transition-colors duration-500 hover:bg-gray-600  rounded-xl cursor-pointer`}>Home</a>
                    <a onClick={() => { scrollToComponent(component2Ref), handleClick() }} className={`${theme === 'light' ? 'text-black' : 'text-white'} font-semibold p-5 hover:transition-colors duration-500 hover:bg-gray-600  rounded-xl cursor-pointer`}>About</a>
                    <a onClick={() => { scrollToComponent(component3Ref), handleClick() }} className={`${theme === 'light' ? 'text-black' : 'text-white'} font-semibold p-5 hover:transition-colors duration-500 hover:bg-gray-600  rounded-xl cursor-pointer`}>Services</a>
                    <a onClick={() => { scrollToComponent(component5Ref), handleClick() }} className={`${theme === 'light' ? 'text-black' : 'text-white'} font-semibold p-5 hover:transition-colors duration-500 hover:bg-gray-600  rounded-xl cursor-pointer`}>Projects</a>
                    <a onClick={() => { scrollToComponent(component4Ref), handleClick() }} className={`${theme === 'light' ? 'text-black' : 'text-white'} font-semibold p-5 hover:transition-colors duration-500 hover:bg-gray-600  rounded-xl cursor-pointer`}>Contact</a>
                </div>
            </div>
        </nav>
    )
}