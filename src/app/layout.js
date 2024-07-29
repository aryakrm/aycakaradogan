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
  title: "Design By Ayça Karadoğan's Official Website",
  description:
    "We do Architectural Design, Interior Design, Landscape Design, 3D Modeling, Website Design & Development, Mobile App Design & Development, Graphic Design, Web App Design & Development, SEO Management, Digital Marketing and Ads Management",
  icons: {
    icon: "/src/app/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta charset="UTF-8"></meta>
        <meta
          name="keywords"
          content="Architecture, Interior design, Landscape Design, 3D Modeling, Website Design & Development, Mobile App Design & Development, Graphic Design"
        ></meta>
        <title>Design By Ayça Karadoğan's Official Website</title>
        <meta
          name="description"
          content="We do Architectural Design, Interior Design, Landscape Design, 3D Modeling, Website Design & Development, Mobile App Design & Development, Graphic Design, Web App Design & Development, SEO Management, Digital Marketing and Ads Management"
        ></meta>
        <meta name="author" content="Ayça Karadoğan"></meta>
      </Head>
      <body className={petit.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
