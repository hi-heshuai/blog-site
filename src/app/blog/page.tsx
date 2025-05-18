import Link from 'next/link';

export default function BlogPage() {
  // In a real application, this data would come from a database or CMS
  const posts = [
    {
      id: 'getting-started-with-nextjs',
      title: 'Getting Started with Next.js',
      date: 'May 15, 2024',
      excerpt: 'Learn how to build modern web applications with Next.js, React, and Tailwind CSS.',
    },
    {
      id: 'tailwind-css-tips',
      title: 'Tailwind CSS Tips and Tricks',
      date: 'May 10, 2024',
      excerpt: 'Discover useful techniques to make the most out of Tailwind CSS in your projects.',
    },
    {
      id: 'react-best-practices',
      title: 'React Best Practices in 2024',
      date: 'May 5, 2024',
      excerpt: 'Stay up-to-date with the latest React patterns and practices for building efficient applications.',
    },
    {
      id: 'building-a-blog-with-nextjs',
      title: 'Building a Blog with Next.js',
      date: 'April 28, 2024',
      excerpt: 'A step-by-step guide to creating your own blog using Next.js and Tailwind CSS.',
    },
    {
      id: 'responsive-design-principles',
      title: 'Responsive Design Principles',
      date: 'April 20, 2024',
      excerpt: 'Learn the key principles of responsive design to ensure your website looks great on all devices.',
    },
    {
      id: 'optimizing-nextjs-performance',
      title: 'Optimizing Next.js Performance',
      date: 'April 15, 2024',
      excerpt: 'Tips and strategies to improve the performance of your Next.js applications.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">All Blog Posts</h1>
        
        <div className="grid gap-8">
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
            >
              <span className="text-sm text-gray-500">{post.date}</span>
              <h2 className="text-2xl font-semibold mt-2 mb-3">
                <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              <Link 
                href={`/blog/${post.id}`} 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 