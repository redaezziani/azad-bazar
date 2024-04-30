import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/home-page/navbar";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import "@uploadthing/react/styles.css";
import { ourFileRouter } from "@/app/api/uploadthing/core";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "azad-bazar | sell and buy anything you want",
  description: "azad-bazar is a platform where you can sell and buy anything you want",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` w-full relative overflow-x-hidden justify-start items-center flex-col flex ${inter.className}`}>
       <Navbar />
       <div className="w-full md:max-w-7xl justify-start flex-col gap-2 items-center overflow-x-hidden  mt-20">
       <NextSSRPlugin
          routerConfig={extractRouterConfig(ourFileRouter)}
        />
       {children}
       </div>
      </body>
    </html>
  );
}
