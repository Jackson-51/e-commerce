import { motion, useInView } from "framer-motion"
import "./product.css"
import { useRef } from "react";

const Product = () => {
    const ref1 = useRef(null);
    const inview1 = useInView(ref1, {threshold: 0.5});
    const ref2 = useRef(null);
    const inview2 = useInView(ref2, {threshold: 1})
    return ( 
        <section>
            <p>
                <b>Meet Oraimo</b>, the ultimate wearable audio device powered by smart technology. 
                 Experience next-level comfort and performance designed to support your lifestyle, fitness, and daily productivity.
            </p>
            <motion.img src="/headphone.png" alt="hphone" 
                ref = {ref1}
                style={{y: 10, opacity: 0}} 
                initial={{y: 100, opacity: 0}} 
                animate={inview1 ? {y: 0, opacity: 1} : {}}
                transition={{duration: 0.5}} />
                
            <motion.div className="bottom"
                ref = {ref2}
                initial={{scale: 0.6, opacity: 0}}
                animate={inview2 ? {scale: 1, opacity: 1} : {}}
                >
                <p>Get the new Oraimo now</p>
                <article>
                    <b>&#36; 100</b>
                    <motion.button whileTap={{scale: 0.8}} transition={{duration: 0.1}}>Buy now</motion.button>
                </article>
            </motion.div>
        </section>
     );
}
 
export default Product;