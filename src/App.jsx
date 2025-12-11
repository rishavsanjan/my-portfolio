import React, { useRef, useState } from "react";
import Front from "../components/Front"
import Header from "../components/Header"
import About from "../components/About"
import Services from "../components/Services"
import Contact from "../components/Contact"
import Projects from "../components/Projects";
function App() {

  const component1Ref = useRef(null);
  const component2Ref = useRef(null);
  const component3Ref = useRef(null);
  const component4Ref = useRef(null);
  const component5Ref = useRef(null);

  const [theme, setTheme] = useState('light');
  function changeTheme(theme) {
    setTheme(theme);
  }

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div className="">
      <Header theme={theme}
        setTheme={setTheme}
        changeTheme={changeTheme}
        scrollToComponent={scrollToComponent}
        component1Ref={component1Ref}
        component2Ref={component2Ref}
        component4Ref={component4Ref}
        component3Ref={component3Ref}
        component5Ref={component5Ref}
        />
          <Front theme={theme} component1Ref={component1Ref} />
      
      <About theme={theme} component2Ref={component2Ref} />
      <Services theme={theme} component3Ref={component3Ref} />
      <Projects theme={theme} component5Ref={component5Ref} />
      <Contact theme={theme} component4Ref={component4Ref} />
      
      <p className="text-center">Made with ❤️ by Rishav Sanjan</p>
    </div>
  )
}

export default App
