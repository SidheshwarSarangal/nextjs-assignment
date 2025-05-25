// app/layout.tsx
import "./globals.css";

import { Inter } from "next/font/google";
import { Merriweather } from "next/font/google";



export const metadata = {
  title: "My App",
  description: "An app with Inter font",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
