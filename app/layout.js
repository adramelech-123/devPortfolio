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
      <body className="relative overflow-hidden flex flex-col">
        <Navbar />
        <div className="absolute z-[-3] left-3/4 top-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purplePrimary/40 via-slate-700/40 via-0% to-purpleTint/40 to-100% blur-2xl" />

        <div className="absolute z-[-3] right-1/4  top-[250px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purplePrimary/30 via-slate-700/20 via-0% to-pink-100/20 to-100% blur-3xl" />

        <div className="absolute z-[-3] left-[5px]  top-[400px] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purplePrimary via-slate-700 via-0% to-pink-100 to-100% blur-3xl" />

        <div className="p-6 z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
