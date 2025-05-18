import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">My Blog</h1>
        
        <div className="grid gap-8">
          {/* Featured post */}
          <Button onClick={() => console.log('Primary button clicked')}>
            Primary Button
          </Button>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-sm text-gray-500">May 15, 2024</span>
            <h2 className="text-2xl font-semibold mt-2 mb-3">
              <Link href="/blog/getting-started-with-nextjs" className="hover:underline">
                Getting Started with Next.js
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              Learn how to build modern web applications with Next.js, React, and Tailwind CSS.
            </p>
            <Link 
              href="/blog/getting-started-with-nextjs" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </Link>
          </div>
          
          {/* More posts */}
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-sm text-gray-500">May 10, 2024</span>
            <h2 className="text-2xl font-semibold mt-2 mb-3">
              <Link href="/blog/tailwind-css-tips" className="hover:underline">
                Tailwind CSS Tips and Tricks
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              Discover useful techniques to make the most out of Tailwind CSS in your projects.
            </p>
            <Link 
              href="/blog/tailwind-css-tips" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </Link>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <span className="text-sm text-gray-500">May 5, 2024</span>
            <h2 className="text-2xl font-semibold mt-2 mb-3">
              <Link href="/blog/react-best-practices" className="hover:underline">
                React Best Practices in 2024
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">
              Stay up-to-date with the latest React patterns and practices for building efficient applications.
            </p>
            <Link 
              href="/blog/react-best-practices" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Read more →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
