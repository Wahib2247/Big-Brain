import { Antonio } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar.jsx';

const ant = Antonio({ subsets: ["latin"] });

export const metadata = {
  title: "Big Brain 🧠",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ant.className} tracking-wide overflow-x-hidden dark`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
