import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/NewHeader/Navbar";
import Footer from "@/components/Footer/Footer";

// Configure Inter
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional weights
});

// ✅ Only keep favicon global
export const metadata = {
  icons: {
    icon: "/image/ZLogo.svg", // path from /public/image/ZLogo.svg
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
