import Contacts from "./components/Global/Contacts/Contacts";
import Footer from "./components/Global/Footer/Footer";
import Navbar from "./components/Global/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Медицински Център Терзийски.",
  description:
    "МЦ Терзийски предлага висококачествена доболнична помощ в областта на Акушерството и Гинекологията",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Contacts />
        <Footer />
      </body>
    </html>
  );
}
