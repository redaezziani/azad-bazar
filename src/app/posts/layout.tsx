import type { Metadata } from "next";
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
      <div>
        {children}
       </div>
  );
}
