import { motion } from "framer-motion";
import about from "../assets/images/about.jpg";

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col justify-center" // make text vertically centered
                >
                    <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                        About Us
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        The <span className="font-semibold text-blue-600">Boyscare Foundation</span>
                        is a non-profit organization with the sole purpose of mentoring, equipping, and
                        empowering the boychild. We are committed to raising young men with values, integrity,
                        and positive masculinity.
                    </p>
                    <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300">
                        <li>Mentorship, leadership, and empowerment programs</li>
                        <li>Support for boys facing addictions & negative vices</li>
                        <li>Creating safe spaces and opportunities for growth</li>
                        <li>Developing boys into future leaders with strong values</li>
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
                        src={about}
                        alt="Boyscare Foundation"
                        className="rounded-2xl shadow-xl w-full h-full object-cover" // full width & height
                        style={{ maxHeight: "500px" }} // optional max height
                    />
                </motion.div>
            </div>
        </section>
    );
}
