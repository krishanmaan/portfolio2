import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Maan Portfolio | Full Stock Developer",
  description: "A Full Stack Developer is a versatile and skilled professional proficient in both front-end and back-end development. They are responsible for designing, developing, and maintaining complete web applications, from the user interface to the server and database. Full Stack Developers possess expertise in a variety of programming languages, frameworks, and tools, enabling them to handle all aspects of the development process, ensuring seamless functionality, performance, and user experience. Their comprehensive knowledge allows them to effectively collaborate with other team members and adapt to various project requirements.",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
