import { Petit_Formal_Script } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Head from "next/head";
import "../i18n.js";

const petit = Petit_Formal_Script({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ayça Karadoğan Design",
  description: "You Design As Much As You Can Imagine",
  icons: {
    icon: "/src/app/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={petit.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
