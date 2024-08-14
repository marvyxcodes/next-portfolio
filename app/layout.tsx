import type { Metadata } from "next";
import { Big_Shoulders_Text, Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";

const chicagoText = Big_Shoulders_Text({ subsets: ["latin"] });
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Marvin Trujillo",
  description: "Marvin Trujillo's Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles['bio-div']}>
          <h1 className="">hello, marvin here</h1>
          <p>avid enjoyor of nature</p>
          <p>aspiring retiree programmer & future homesteader</p>
        </div>
        <Navbar />
        {children}

        </body>
        {/* <div className="green-block"></div> */}

    </html>
  );
}
