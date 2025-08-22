import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin, Twitter, Mail } from "lucide-react";

import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import team4 from "../assets/images/team4.jpg";

const TeamMember = ({ name, role, image, bio, delay, socials }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, rotateY: -30 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay }}
            viewport={{ once: true }}
            className="group h-96 relative perspective-1000 cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            {/* Glow border */}
            <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                    background:
                        "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #06d6a0, #3b82f6)",
                    padding: "3px",
                    animation: "spin 6s linear infinite",
                }}
            >
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl"></div>
            </div>

            {/* Flip container */}
            <motion.div
                className="relative w-full h-full transition-all duration-700 transform-gpu"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-white via-blue-50 to-violet-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-xl shadow-xl p-6 relative overflow-hidden">
                        {/* Image */}
                        <motion.img
                            src={image}
                            alt={name}
                            className="w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white dark:border-gray-600"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                        <h3 className="mt-4 text-lg font-bold text-gray-800 dark:text-white">
                            {name}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {role}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                            {bio}
                        </p>
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 backface-hidden"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <div className="h-full flex flex-col justify-between items-center p-6 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-700 rounded-xl shadow-2xl text-white">
                        <h3 className="text-xl font-bold">{name}</h3>
                        <p className="text-sm opacity-90">{bio}</p>

                        {/* Social icons */}
                        <div className="flex space-x-4 mt-4">
                            {socials.linkedin && (
                                <a
                                    href={socials.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition"
                                >
                                    <Linkedin className="w-5 h-5 text-white" />
                                </a>
                            )}
                            {socials.twitter && (
                                <a
                                    href={socials.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-2 bg-sky-500 rounded-full hover:bg-sky-600 transition"
                                >
                                    <Twitter className="w-5 h-5 text-white" />
                                </a>
                            )}
                            {socials.email && (
                                <a
                                    href={socials.email}
                                    className="p-2 bg-red-500 rounded-full hover:bg-red-600 transition"
                                >
                                    <Mail className="w-5 h-5 text-white" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default function Team() {
    const team = [
        {
            name: "Coach Toyin",
            role: "Founder & Visionary",
            image: team1,
            bio: "Founder of the Boyscare Foundation, empowering boys and raising future leaders.",
            socials: { linkedin: "#", twitter: "#", email: "mailto:toyin@example.com" },
        },
        {
            name: "Rev. Lanre Oluseye",
            role: "Mentor & Speaker",
            image: team2,
            bio: "Mentor and advocate for positive masculinity and value-based leadership.",
            socials: { linkedin: "#", twitter: "#", email: "mailto:lanre@example.com" },
        },
        {
            name: "Dr. Richard Okoye",
            role: "Advisory Board",
            image: team3,
            bio: "Healthcare leader providing strategic support for boychild empowerment.",
            socials: {
                linkedin: "#",
                twitter: "#",
                email: "mailto:richard@example.com",
            },
        },
        {
            name: "Member Four",
            role: "Program Coordinator",
            image: team4,
            bio: "Oversees the daily operations of our programs and ensures smooth execution.",
            socials: {
                linkedin: "#",
                twitter: "#",
                email: "mailto:member4@example.com",
            },
        },
    ];

    return (
        <section
            id="team"
            className="py-20 bg-gradient-to-br from-blue-50 to-violet-50 dark:from-gray-900 dark:to-gray-800 relative"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        The passionate people driving our vision forward
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {team.map((member, i) => (
                        <TeamMember
                            key={i}
                            name={member.name}
                            role={member.role}
                            image={member.image}
                            bio={member.bio}
                            socials={member.socials}
                            delay={i * 0.15}
                        />
                    ))}
                </div>
            </div>

            {/* Spin animation */}
            <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </section>
    );
}
