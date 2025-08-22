import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";



export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="bg-white dark:bg-gray-900 relative overflow-hidden">
            {/* Background gradients */}
            <div className="absolute inset-0 overflow-hidden -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-violet-900/20 to-red-900/20"></div>
            </div>

            {/* Animated particles */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
                {[
                    { left: "90.96%", top: "73.75%" },
                    { left: "14.26%", top: "3.66%" },
                    { left: "56.90%", top: "64.63%" },
                    { left: "20.06%", top: "38.28%" },
                    { left: "72.65%", top: "68.02%" },
                ].map((dot, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-red-400 rounded-full opacity-20"
                        style={{ left: dot.left, top: dot.top }}
                    ></div>
                ))}
            </div>

            {/* Navbar */}
            <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                            BoysCare Foundation
                        </div>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center space-x-8">
                            {[
                                "about",
                                "events",
                                "academy",
                                "club",
                                "team",      // ✅ Added Team here
                                "contact",
                            ].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link}`}
                                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-red-400 transition-colors capitalize"
                                >
                                    {link}
                                </a>
                            ))}

                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className="ml-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition"
                            >
                                {theme === "light" ? (
                                    <>
                                        <Moon className="w-5 h-5" /> Dark
                                    </>
                                ) : (
                                    <>
                                        <Sun className="w-5 h-5" /> Light
                                    </>
                                )}
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className="md:hidden p-2 rounded-lg border bg-background dark:bg-gray-800">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 text-gray-700 dark:text-gray-200"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
}
