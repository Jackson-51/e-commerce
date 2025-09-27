import { motion } from "framer-motion";

const Specification = () => {
    const specification = [
        ["Driver Size", "10mm Dynamic Driver"],
        ["Bluetooth version", "Bluetooth 5.2"],
        ["bluetooth Range", "Up to 10m (33ft)"],
        ["Battery Capacity (Earbuds)", "500mAh each"],
        ["Playtime(ANC Off)", "65 hours"],
        ["Playtime(ANC On)", "68 hours"],
        ["Chargin Time", "1.5 hours"],
        ["IP Rating", "IPX5(Sweat & Water Resistant)"],
        ["Noise Cancellation", "Hybrid ANC up to 35dB"],
        ["Control", "Touch Controls"],
        ["Voice Assistant", "Compatible with Siri & Google Assistant"]
    ];
    return (
        <div className="section4">
            <div className="specification">
                <header>
                    <h1>Technical Specification</h1>
                    <small>Cutting-edge technology packed into a sleek compact design</small>
                </header>
                <article>
                    <div className="bg">
                        <motion.img
                            src="/headphone3.webp"
                            alt=""
                            initial={{ y: 0 }}
                            animate={{ y: [0, -30, 0] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                    <aside>
                        {specification.map((spec, i) => (
                            <ul key={i}>
                                <li><p>{spec[0]}</p></li>
                                <li><b>{spec[1]}</b></li>
                            </ul>
                        ))}
                    </aside>
                </article>
            </div>
        </div>
    );
};

export default Specification;