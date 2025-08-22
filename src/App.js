import Hero from "./components/Hero";
import About from "./components/About";
import Events from "./components/Events";
import Academy from "./components/Academy";
import Club from "./components/Club";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Navbar";

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <Nav />

            <main className="flex-1">
                <Hero />
                <About />
                <Events />
                <Academy />
                <Club />
                <Team />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;
