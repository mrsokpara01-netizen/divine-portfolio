import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
const geistSans=Geist({variable:'--font-geist-sans',subsets:['latin']}); const geistMono=Geist_Mono({variable:'--font-geist-mono',subsets:['latin']});
export const metadata:Metadata={title:'Okpara Divine Kelechukwu — Full-Stack Developer',description:'Portfolio of Okpara Divine Kelechukwu, a full-stack developer and software builder in Lagos, Nigeria.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>}
