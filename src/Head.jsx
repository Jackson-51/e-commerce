import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Nav1 from "./nav";

const Head = ({darkMode, setDarkMode}) => {
    const links = ["Technology", "Company", "Commercial", "Blog", "Shop"];
    const lang = ["English", "Français", "Español", "Deutsch", "Português"]; 
    const handleClick = () => {
        const language = document.querySelector('.language');
        language.classList.toggle('active');
    }
    const [screenSwitch, setScreenSwitch] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const changeWidth = () => setWidth(window.innerWidth)
        window.addEventListener('resize', changeWidth);
        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    // Move ref and inView inside the conditional
    let navContent = null;
    if (width > 768) {
        const ref = useRef(null);
        const inView = useInView(ref, {once: false, threshold: 1});
        navContent = (
            <div className="nav" ref={ref}>
                <div className="left" style={inView && width > 768 ?{transform: "translateX(0)", opacity: 1, transition: " all 0.5s ease-out"}: {}}>
                    <i className="fa-solid fa-headphones"></i>
                    <h2>Oraimo</h2>
                </div>
                <div className="middle">
                    {links.map((link, index) => (
                        index !== 4 ? (
                            <motion.a href="/" key={index}
                                initial={{x: -10, opacity: 0}}
                                animate={inView  ? {x: 0, opacity: 1} : null}
                                transition={{duration: 0.5, delay: (index / 8)}}
                            >{link}</motion.a>
                        ) : (
                            <motion.button key={index}
                                initial={{x: -10, opacity: 0}}
                                animate={inView  ? {x: 0, opacity: 1} : null}
                                transition={{duration: 0.5, delay: (index / 8)}}                            
                            >{link}</motion.button>
                        )
                    ))}
                </div>

                <div className="right" style={inView ?{transform: "translateX(0)", opacity: 1, transition: " all 0.5s ease-out"}: {transform: "translateX(-10px)", opacity: 0}}>
                    <p onClick={handleClick}>EN <i className="fa-solid fa-angle-down"></i></p>
                    <div className="language">
                        {lang.map((lang, i) => (
                            <div key={i}>{lang}</div>                            
                        ))}
                    </div>
                    <div className="cart"><p>cart</p><img src="icon.svg" alt="" /></div>
                    <aside onClick={() => { setScreenSwitch(!screenSwitch); setDarkMode(!darkMode) } }>
                        <motion.i 
                        className={screenSwitch ? 'fa-solid fa-moon' : 'fa-solid fa-circle'}
                        initial={{x: 0}}
                        animate={screenSwitch ? {x: "100%", rotate: 360} : {}}
                        transition={{ duration: 0.1, ease: "easeIn"}}
                        ></motion.i>
                    </aside>
                </div>
            </div>
        );
    } else {
        navContent = <Nav1 screenSwitch={screenSwitch} setScreenSwitch={setScreenSwitch} links={links} lang={lang} />;
    }

    return ( 
        <div className="section1">
            <img src="img1.png" alt="" />
            {navContent}
            <div className="foot">
                <small>Silence the World. Your Sanctuary of Sound.</small>
                <h3>Your cells, supercharged. Experience music with unparalleled clarity and energy.</h3>
            </div>
        </div>
     );
}
 
export default Head;