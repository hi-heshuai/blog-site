import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog",
  description: "A personal blog built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="font-bold text-xl">My Blog</Link>
              </div>
              <nav className="flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900">All Posts</Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              </nav>
            </div>
          </div>
        </header>
        
        {children}
        
        <footer className="bg-gray-50 border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-500 text-sm">© 2024 My Blog. All rights reserved.</p>
              <div className="flex space-x-6 mt-4">
                <Link href="/about" className="text-gray-500 hover:text-gray-900">About</Link>
                <Link href="/contact" className="text-gray-500 hover:text-gray-900">Contact</Link>
                <Link href="/privacy" className="text-gray-500 hover:text-gray-900">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
