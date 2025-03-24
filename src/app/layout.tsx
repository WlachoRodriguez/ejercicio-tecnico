"use client";

import type { Metadata } from "next";
import usePageStore from '../store/Store'
import "./globals.css";
import { Status } from "@/types/Status";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { status } = usePageStore()

  return (
    <html lang="en">
      <body className={`relative w-full h-[calc(100vh-20px)] bg-[linear-gradient(rgba(17,30,62,0.8),rgba(17,30,62,0.8),rgba(2,13,32,0.8)),url('/fondo.png')] bg-cover bg-center bg-no-repeat flex flex-col ${status === Status.HOME ? 'justify-center' : 'justify-between'} mb-[20px]`}>
        {children}
      </body>
    </html>
  );
}
