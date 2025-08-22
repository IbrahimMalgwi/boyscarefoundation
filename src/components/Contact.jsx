import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
    const contacts = [
        {
            icon: <Mail className="w-7 h-7 text-red-600" />,
            title: "Email",
            value: "Info@TheBoyscarefoundation@gmail.com",
            link: "mailto:Info@TheBoyscarefoundation@gmail.com",
        },
        {
            icon: <MessageCircle className="w-7 h-7 text-green-600" />,
            title: "WhatsApp",
            value: "+234 807 143 0477",
            link: "https://wa.me/2348071430477",
        },
        {
            icon: <Phone className="w-7 h-7 text-blue-600" />,
            title: "Phone No.",
            value: "+234 803 591 9884",
            link: "tel:+2348035919884",
        },
        {
            icon: <MapPin className="w-7 h-7 text-violet-600" />,
            title: "Address",
            value: "Port Harcourt, Nigeria",
            link: null,
        },
    ];

    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
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
                        Contact Us
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                        We’d love to hear from you! Reach out through any of the channels below.
                    </p>
                </motion.div>

                {/* Contact Info Grid */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {contacts.map((c, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition h-full flex flex-col justify-between max-w-sm mx-auto w-full">
                                <div className="flex justify-center mb-4">{c.icon}</div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                                    {c.title}
                                </h3>
                                {c.link ? (
                                    <a
                                        href={c.link}
                                        className="text-blue-600 dark:text-blue-400 hover:underline break-words"
                                    >
                                        {c.value}
                                    </a>
                                ) : (
                                    <p className="text-gray-700 dark:text-gray-300 break-words">
                                        {c.value}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
