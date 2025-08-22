export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm">
            <p className="text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
          BoysCare Foundation
        </span>
                . All rights reserved.
            </p>
        </footer>
    );
}
