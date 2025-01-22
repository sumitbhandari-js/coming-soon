
import Link from "next/link";

export default function Home() {
  return (

    <div className="relative h-screen">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    ></div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Content */}
    <div className="relative flex items-center justify-center h-full">
      <div className="text-center text-white px-4 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg md:text-xl mb-8">
          We&apos;re building something amazing. Stay tuned!
        </p>
        <Link href="mailto:hi" className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105 animate-pulse">
        Notify Me
        </Link>
      </div>
    </div>
  </div>

  );
}
