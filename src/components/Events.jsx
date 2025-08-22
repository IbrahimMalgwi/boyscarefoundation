import { useState } from "react";
import { motion } from "framer-motion";
import event1 from "../assets/images/event1.jpg";
import event2 from "../assets/images/event2.jpg";
import event3 from "../assets/images/event3.jpg";
import event4 from "../assets/images/event4.jpg";
import event5 from "../assets/images/event5.jpg";
import event6 from "../assets/images/event6.jpg";
import event7 from "../assets/images/event7.jpg";
import event8 from "../assets/images/event8.jpg";
import event9 from "../assets/images/event9.jpg";
import event10 from "../assets/images/event10.jpg";
import event11 from "../assets/images/event11.jpg";
import event12 from "../assets/images/event12.jpg";


const events = [
    event1,
    event2,
    event3,
    event4,
    event5,
    event6,
    event7,
    event8,
    event9,
    event10,
    event11,
    event12,
];


export default function Events() {
    const [showAll, setShowAll] = useState(false);
    const displayed = showAll ? events : events.slice(0, 6);

    return (
        <section id="events" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                        Our Events
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        Celebrating impactful moments from our past and upcoming programs.
                    </p>
                </motion.div>

                {/* Event Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {displayed.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="overflow-hidden rounded-xl shadow-lg group"
                        >
                            <img
                                src={img}
                                alt={`Event ${i + 1}`}
                                className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Show More / Show Less Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="px-6 py-2 rounded-lg text-white font-medium bg-gradient-to-r from-red-600 to-blue-600 hover:opacity-90 transition"
                    >
                        {showAll ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>
        </section>
    );
}
