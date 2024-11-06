import localFont from "next/font/local";
import "./globals.css";
import {Poppins} from 'next/font/google'
import 'remixicon/fonts/remixicon.css'
import BottomNav from "./components/BottomNav";

const poppins = Poppins({subsets : ['latin'],weight : ['100','200','300','400']})
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const AmiriReg = localFont({
  src: "./fonts/Amiri-Regular.woff",
  variable: "--font-amiri-reg",
  weight: "100 900",
});
const AmiriBold = localFont({
  src: "./fonts/Amiri-Bold.woff",
  variable: "--font-amiri-bold",
  weight: "100 900",
});

export const metadata = {
  title: "AURAMATIX | Let’s take care of your skin!",
  description: "Let’s take care of your skin!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} text-[#3B2E00] px-5 ${AmiriReg.variable} ${AmiriBold.variable} bg-[#EFEFEF] antialiased`}
      >
        {children}
        <BottomNav/>
      </body>
    </html>
  );
}
