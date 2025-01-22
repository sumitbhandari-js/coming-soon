import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "./CommonIcon";

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
        <div className="text-center text-white px-4 animate-fade-in space-y-8">
          <div className="">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Shashwatam Gems
            </h1>
            <p className="text-lg md:text-xl mb-8">
              We&apos;re building something amazing. Stay tuned!
            </p>
            <Link
              href="mailto:hi"
              className="px-6 py-3 bg-[#ffefd5] text-[#DFA33C] font-semibold rounded-lg shadow-lg hover:bg-[#ffe4b6] transition transform hover:scale-105 animate-pulse"
            >
              Notify Me
            </Link>
          </div>

          <div className="flex items-center space-x-3 justify-center mx-auto">
            <a href="https://www.facebook.com/shashwatamgems">
              {" "}
              <FacebookIcon className="w-6 h-6 text-[#DFA33C]" />
            </a>
            <a href="https://www.instagram.com/shashwatamgems">
              {" "}
              <InstagramIcon className="w-6 h-6 text-[#DFA33C]" />
            </a>
            <a href="https://www.youtube.com/@shashwatamgems">
              {" "}
              <YoutubeIcon className="w-6 h-6 text-[#DFA33C]" />
            </a>
            {/* <a href="https://www.x.com/"> <TwitterIcon className="w-5 h-5 text-[#DFA33C]" /></a> */}
          </div>
         
        </div>
        <p className="text-white absolute bottom-2 text-sm">Copyright © 2025 Shashwatam Gems. All Rights Reserved</p>
      </div>
     
     
    </div>
  );
}
