import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Inter = () => {
    const captions = [
        ["img2.png", "Your daily wellbeing, redefined. Optimize your focus, your flow, and your escape naturally.", "soundwellness"],
        ["img4.jpg", "Shape your tomorrow's sound. Stay your best self, always tuned in.", "wellbeing"],
        ["img1.png", "Curate your reality. Stay in your flow state, always", "AudioTherapy"]]

    const ref1 = useRef(null)
    const inView1 = useInView(ref1, {once: false, threshold: 1})
    const ref2 = useRef(null)
    const inView2 = useInView(ref2, {once: false, threshold: 1})
    const ref3 = useRef(null)
    const inView3 = useInView(ref3, {once: false, threshold: 1})
    return ( 
        <div className="section2">
            <motion.p
                initial={{scale: 0.9, opacity: 0}}
                animate={inView1 ? {scale: 1, opacity: 1} : {}}
                transition={{duration: 0.3, ease: "easeOut"}}
            ref={ref1}
            ><span>In the future, status won't come from what you own,</span><br></br> but from the quality of your experience defined by your oraimo headphone's driver clarity, ANC depth, and battery resilience.</motion.p>
            <motion.h2 ref={ref3}
                initial={{x: 30, opacity: 0}}
                animate={inView3?{x: 0, opacity: 1}:{}}
                transition={{duration: 0.5, ease: "easeIn"}}
            >Application</motion.h2>
            <small style={inView3?{transform: "translateX(0)", opacity: 1, transition: "all 0.5s ease-in 0.25s"}:{transform: "translateX(-30px)", opacity: 0}}>Start sharing your experience</small>
            <div className="grid" ref={ref2}>
                {captions.map((cap, i) => (
                    <motion.div className={`g${i+1}`} key={i}
                    initial={{y: 30, opacity: 0}}
                    animate={inView2?{y: 0, opacity: 1}:{}}
                    transition={{duration: 0.6, delay: (0.25 * i)}}
                    >
                        <div className="img-carrier"><img src={`/${cap[0]}`} alt="" /></div>
                        <small>{cap[1]}</small>
                        <span><div className="circle"></div>{cap[2]}</span>
                    </motion.div>
                ))}
            </div>
            <button>All Design <i className="fa-solid fa-arrow-right"></i></button>
        </div>
     );
}
export default Inter;