import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Jerry's Sweet",
  description: "Custom Cake Ordering Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-pink-100 min-h-screen flex flex-col">

        <Header />

        <div className="flex-grow">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}