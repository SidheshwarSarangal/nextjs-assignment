// src/app/layout.tsx
import "./globals.css";
import { Inter, Merriweather } from "next/font/google";
import { Providers } from "./providers";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
