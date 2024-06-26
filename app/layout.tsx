import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(
  {
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
    <Head>
      <title>Concha claimer</title>
    </Head>
    <body className={inter.className}>
    {children}
    <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive"/>
    </body>
    </html>
  );
}
