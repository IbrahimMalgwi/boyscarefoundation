/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // CRA paths
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    red: "#e63946",   // strong red
                    blue: "#1d4ed8",  // bold blue
                },
            },
        },
    },
    plugins: [],
}
