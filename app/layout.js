import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TheRealTaku",
  description: "Welcome to my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col justify-between">
        <Navbar />
        <div className="p-6">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
