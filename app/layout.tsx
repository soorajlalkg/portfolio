import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Backend Developer Portfolio",
  description: "Fullstack Backend-Focused Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}