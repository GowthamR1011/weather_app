import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Weather APP with NextJS",
  description: "Pet Project to learn NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      {/* <script async src="node_modules/@material-tailwind/html/scripts/ripple.js"></script>
      

      <script async src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script> */}

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
