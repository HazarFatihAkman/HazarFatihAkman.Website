import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hazar Fatih Akman | Software Engineer",
  description: "Self-taught, researcher and fast learner software developer with professional experience in C# .Net Core, C/C++ and Java Spring Boot. Nowadays I am developing Java Spring Boot, NextJS and C.",
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
