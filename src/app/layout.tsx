import type { Metadata } from "next";
import "./globals.css";



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
      <body>
        {children}
      </body>
    </html>
  );
}
