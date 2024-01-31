import type { Metadata } from 'next'
import './globals.css'
import Menu from './components/menu/menu'

import { Bellefair } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";

export const barlowCondensed = Barlow_Condensed({
  weight: "400",
  subsets: ["latin"],
});

export const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Space tourism',
  description: 'Info about space',
}

export type HomeInfo = {
  title: string;
  subTitle: string;
  text: string;
  buttonText: string
};

export type NavInfo = {
  id: string,
  name: string,
  link: string
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={bellefair.className}>
        <div className='relative h-screen'>
        <Menu />
        {children}
        </div>
      </body>
    </html>
  )
}
