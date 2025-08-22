import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

// Import team images
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import team4 from "../assets/images/team4.jpg";

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
        socials: { linkedin: "#", twitter: "#", email: "mailto:richard@example.com" },
    },
    {
        name: "Member Four",
        role: "Program Coordinator",
        image: team4,
        bio: "Oversees the daily operations of our programs and ensures smooth execution.",
        socials: { linkedin: "#", twitter: "#", email: "mailto:member4@example.com" },
    },
    {
        name: "Member Five",
        role: "Outreach & Engagement",
        image: team1,
        bio: "Focuses on community engagement and connecting with partners.",
        socials: { linkedin: "#", twitter: "#", email: "mailto:member5@example.com" },
    },
    {
        name: "Member Six",
        role: "Volunteer Manager",
        image: team2,
        bio: "Manages volunteers and coordinates events to support the foundation.",
        socials: { linkedin: "#", twitter: "#", email: "mailto:member6@example.com" },
    },
];

export default function Team() {
    return (
        <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                        Meet Our Team
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        The passionate people driving our vision forward
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="rounded-xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-300"
                        >
                            {/* Profile Image */}
                            <div className="relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay for socials */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4 gap-4">
                                    {member.socials.linkedin && (
                                        <a
                                            href={member.socials.linkedin}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2 bg-blue-600 rounded-full hover:bg-blue-700"
                                        >
                                            <Linkedin className="w-5 h-5 text-white" />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a
                                            href={member.socials.twitter}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="p-2 bg-blue-400 rounded-full hover:bg-blue-500"
                                        >
                                            <Twitter className="w-5 h-5 text-white" />
                                        </a>
                                    )}
                                    {member.socials.email && (
                                        <a
                                            href={member.socials.email}
                                            className="p-2 bg-red-500 rounded-full hover:bg-red-600"
                                        >
                                            <Mail className="w-5 h-5 text-white" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {member.name}
                                </h3>
                                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                                    {member.role}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300 text-sm">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
