import { Inter } from "next/font/google"
import Navbar from "./components/Navbar/Navbar"
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MagisTV | Series, películas y canales en vivo",
  description: "MagisTV te permite disfrutar miles de películas, series y canales de televisión de manera segura y sin publicidad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
