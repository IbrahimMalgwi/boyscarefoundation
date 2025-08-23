import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: "hero",
        title: (
            <>
                Let’s Teach Our Sons{" "}
                <span className="text-yellow-300">EARLY</span> What We{" "}
                <span className="text-pink-300">LEARNT Late</span>
            </>
        ),
        description:
            "Empowering the boychild through mentorship, growth, and positive masculinity.",
        buttons: [
            { label: "Learn More", href: "#about", primary: true },
            { label: "Get Involved", href: "#contact" },
        ],
    },
    {
        id: "academy",
        title: (
            <>
                Welcome to the <span className="text-blue-300">Academy</span>
            </>
        ),
        description:
            "A mentorship program equipping boys with leadership, life skills, and positive values.",
        buttons: [{ label: "Explore Academy", href: "#academy", primary: true }],
    },
    {
        id: "club",
        title: (
            <>
                Join the <span className="text-red-300">Clubs</span>
            </>
        ),
        description:
            "School-based clubs where boys learn, lead, and thrive in a safe environment.",
        buttons: [{ label: "Discover Clubs", href: "#club", primary: true }],
    },
];

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
    }),
};

export default function Hero() {
    const [[page, direction], setPage] = useState([0, 0]);

    const nextSlide = () => setPage([(page + 1) % slides.length, 1]);
    const prevSlide = () =>
        setPage([(page - 1 + slides.length) % slides.length, -1]);

    // Auto slide every 7 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 7000);
        return () => clearInterval(timer);
    }, [page]);

    const slide = slides[page];

    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-red to-brand-blue text-white">
            {/* Floating Background Orbs */}
            <motion.div
                className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full"
                animate={{ y: [0, 20, 0], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full"
                animate={{ x: [0, 30, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 8, repeat: Infinity }}
            />

            {/* Slide Content */}
            <div className="relative z-10 w-full max-w-3xl px-6 text-center">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={slide.id}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-100 mb-8">
                            {slide.description}
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {slide.buttons.map((btn, i) => (
                                <a
                                    key={i}
                                    href={btn.href}
                                    className={`px-6 py-3 rounded-xl font-semibold shadow-lg transition ${
                                        btn.primary
                                            ? "bg-white text-brand-red hover:bg-gray-100"
                                            : "bg-transparent border border-white hover:bg-white/20"
                                    }`}
                                >
                                    {btn.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-6">
                <button
                    onClick={prevSlide}
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
                >
                    ◀
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition"
                >
                    ▶
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 flex gap-2 justify-center w-full">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setPage([i, i > page ? 1 : -1])}
                        className={`w-3 h-3 rounded-full transition ${
                            i === page ? "bg-white" : "bg-white/40"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
