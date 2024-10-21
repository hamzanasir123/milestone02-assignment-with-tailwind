import Header from "./Components/Header/Header";
import "./globals.css";
import Footer from "./Components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-300">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
