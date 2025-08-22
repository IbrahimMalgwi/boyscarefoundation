import { motion } from "framer-motion";
import academy from "../assets/images/academy.jpg"

export default function Academy() {
    return (
        <section id="academy" className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                        The Academy
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        The <span className="font-semibold text-blue-600">Boyscare Academy</span>
                        is a mentorship program tailored for young boys. It equips them with leadership,
                        life skills, and positive values needed to thrive in today’s world.
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-4">
                        {[
                            "Leadership & character development",
                            "Life skills for real-world success",
                            "Mentorship from experienced role models",
                            "Building resilience against peer pressure & negative vices",
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                            >
                                <span className="w-2.5 h-2.5 mt-2 rounded-full bg-gradient-to-r from-red-500 to-blue-500"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Image / Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                >
                    <img
                        src={academy}
                        alt="Boyscare Academy"
                        className="rounded-2xl shadow-xl w-full md:w-4/5 object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
