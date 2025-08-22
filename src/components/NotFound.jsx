export default function NotFound() {
    return (
        <div className="container py-20 text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                404 – Page Not Found
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
                The page you’re looking for doesn’t exist.
            </p>
        </div>
    );
}
