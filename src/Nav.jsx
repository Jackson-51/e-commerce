import { animate, motion } from "framer-motion"
import { useState } from "react";

const Nav1 = ({screenSwitch, setScreenSwitch, links, lang, darkMode, setDarkMode}) => {
    const center = {display:"flex", gap: "10px", alignItems: "center"};
    const [slideBool, setSlideBool] = useState(false);
    const [Lname, setLname] = useState("EN");
    const [barstate, setBarstate] = useState(false);
    return ( 
        <nav>
            <div className="nav" style={{display:"flex", justifyContent: "space-between", alignItems: "center"}}>
                <motion.i onClick={() => setBarstate(!barstate)} whileTap={{scale: 0.7}} transition={{duration:0.1, ease: "easeIn"}} className="fa-solid fa-bars"></motion.i>
                <div id="center" style={center}>
                    <i className="fa-solid fa-headphones"></i>
                    <h2>Oraimo</h2>
                </div>
                <aside onClick={() => { setScreenSwitch(!screenSwitch); setDarkMode(!darkMode)}}>
                    <motion.i 
                    className={screenSwitch ? 'fa-solid fa-moon' : 'fa-solid fa-circle'}
                    initial={{x: 0}}
                    animate={screenSwitch ? {x: "20px", rotate: 360} : {}}
                    transition={{ duration: 0.1, ease: "easeIn"}}
                    ></motion.i>
                </aside>
                <motion.div className="sidebar" initial={{x: -320}} animate={barstate ? {x: 0} : {}}>
                    <ul className="links">
                        {[...links, "cart"].map((link, index) => (
                            <li key={index}><a href="/">{link}</a></li>
                        ))}
                    </ul>
                    <span onClick={() => setSlideBool(!slideBool)}><span>{Lname}</span><motion.i className="fa-solid fa-angle-down" initial={{rotate: 0}} animate={slideBool ? {rotate: 180} : {}}></motion.i></span>
                    <motion.ul className="lang" style={{height: 0}} initial={{height: 0, opacity: 0}} animate={slideBool ? {height: "max-content", opacity: 1} : {}} transition={{duration: 0.3, type: "spring"}}>
                        {lang.map((lang, i) => (
                            <motion.li onClick={() => {setLname(lang); setSlideBool(false)}} key={i} initial={{x: 20}} animate={slideBool ? {x: 0} : {}} transition={{delay: (0.05*i)}}>{lang}</motion.li>
                        ))}
                    </motion.ul>
                </motion.div>
               
            </div>
        </nav>
     );
}
 
export default Nav1;