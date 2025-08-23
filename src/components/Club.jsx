import { motion } from "framer-motion";
import club from "../assets/images/club.jpg";

export default function Club() {
    return (
        <section
            id="club"
            className="py-20 bg-gradient-to-tr from-blue-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        >
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                        School Clubs
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        The <span className="font-semibold text-red-600 dark:text-red-400">BoysCare Club</span>
                        {" "}is designed for school boys, fostering peer learning, mentorship,
                        leadership, and community engagement within schools.
                    </p>

                    {/* Club Features */}
                    <ul className="space-y-4">
                        {[
                            "Peer-to-peer mentorship and growth",
                            "Leadership training within school communities",
                            "Building teamwork, discipline, and responsibility",
                            "A safe space for boys to learn and thrive",
                        ].map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                            >
                                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-red-500"></span>
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    whileHover={{ scale: 1.05, rotate: -1 }}
                    className="flex justify-center"
                >
                    <img
                        src={club}
                        alt="BoysCare Club"
                        className="rounded-2xl shadow-xl w-full md:w-4/5 object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
