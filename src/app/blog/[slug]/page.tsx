import { notFound } from 'next/navigation';
import Link from 'next/link';

// In a real application, this data would come from a database or CMS
const blogPosts = {
  'getting-started-with-nextjs': {
    title: 'Getting Started with Next.js',
    date: 'May 15, 2024',
    content: `
      <p>Next.js is a powerful React framework that makes building web applications simple and efficient. In this post, we'll explore how to get started with Next.js and build your first application.</p>
      
      <h2>What is Next.js?</h2>
      <p>Next.js is a React framework that provides structure, features, and optimizations for your application. Some of its key features include:</p>
      <ul>
        <li>Server-side rendering</li>
        <li>Static site generation</li>
        <li>API routes</li>
        <li>File-based routing</li>
        <li>Built-in CSS and Sass support</li>
        <li>Fast refresh</li>
      </ul>
      
      <h2>Setting Up Your First Project</h2>
      <p>To create a new Next.js project, you can use the following command:</p>
      <pre><code>npx create-next-app@latest my-app</code></pre>
      
      <p>This will set up a new Next.js project with all the necessary dependencies and configuration.</p>
      
      <h2>Project Structure</h2>
      <p>A typical Next.js project structure includes:</p>
      <ul>
        <li><strong>pages/</strong> - Contains your application's pages and API routes</li>
        <li><strong>public/</strong> - Static assets like images and fonts</li>
        <li><strong>styles/</strong> - CSS or SCSS files</li>
        <li><strong>components/</strong> - Reusable React components</li>
      </ul>
      
      <h2>Creating Your First Page</h2>
      <p>In Next.js, pages are React components exported from files in the pages directory. To create a new page, simply add a new file to the pages directory:</p>
      <pre><code>// pages/about.js
export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page</p>
    </div>
  )
}</code></pre>
      
      <p>This page will be accessible at /about in your application.</p>
      
      <h2>Conclusion</h2>
      <p>Next.js provides a great developer experience with all the features you need for production. It's a great choice for building modern web applications.</p>
    `,
  },
  'tailwind-css-tips': {
    title: 'Tailwind CSS Tips and Tricks',
    date: 'May 10, 2024',
    content: `
      <p>Tailwind CSS has revolutionized the way we write CSS. Here are some tips and tricks to help you make the most of it.</p>
      
      <h2>Tip 1: Use the JIT (Just-In-Time) Mode</h2>
      <p>Tailwind CSS v3.0 introduced JIT mode by default, which generates styles on-demand as you write your HTML. This results in faster build times and smaller CSS files.</p>
      
      <h2>Tip 2: Leverage the @apply Directive</h2>
      <p>When you find yourself repeating the same set of utility classes, you can extract them into a custom class using the @apply directive:</p>
      <pre><code>@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600;
  }
}</code></pre>
      
      <h2>Tip 3: Use Arbitrary Values</h2>
      <p>Tailwind allows you to use arbitrary values when you need something specific:</p>
      <pre><code>&lt;div class="top-[117px]"&gt;
  This element has a top position of exactly 117px
&lt;/div&gt;</code></pre>
      
      <h2>Tip 4: Create Custom Variants</h2>
      <p>You can create custom variants for specific states or conditions:</p>
      <pre><code>// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      // ...
    }
  },
  // ...
}</code></pre>
      
      <h2>Tip 5: Use Plugins</h2>
      <p>Tailwind has a rich ecosystem of plugins that can extend its functionality:</p>
      <pre><code>// tailwind.config.js
module.exports = {
  // ...
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // ...
  ],
}</code></pre>
      
      <h2>Conclusion</h2>
      <p>Tailwind CSS is a powerful tool that can significantly speed up your development workflow. By leveraging these tips and tricks, you can make your Tailwind experience even better.</p>
    `,
  },
  'react-best-practices': {
    title: 'React Best Practices in 2024',
    date: 'May 5, 2024',
    content: `
      <p>React continues to evolve, and so do the best practices for building efficient applications. Here are some of the most important React best practices for 2024.</p>
      
      <h2>1. Use Functional Components and Hooks</h2>
      <p>Functional components with hooks have become the standard way to write React components. They are more concise and easier to understand than class components.</p>
      <pre><code>// Good
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;Increment&lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>2. Memoize Components and Callbacks</h2>
      <p>Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders and optimize performance.</p>
      <pre><code>// Memoize expensive calculations
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// Memoize callbacks
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);</code></pre>
      
      <h2>3. Use TypeScript</h2>
      <p>TypeScript provides type safety and better developer experience. It helps catch errors early and makes your code more maintainable.</p>
      <pre><code>type Props = {
  name: string;
  age: number;
};

function User({ name, age }: Props) {
  return (
    &lt;div&gt;
      &lt;p&gt;Name: {name}&lt;/p&gt;
      &lt;p&gt;Age: {age}&lt;/p&gt;
    &lt;/div&gt;
  );
}</code></pre>
      
      <h2>4. Implement Code Splitting</h2>
      <p>Use dynamic imports and React.lazy to split your code and load components only when they are needed.</p>
      <pre><code>const LazyComponent = React.lazy(() => import('./LazyComponent'));

function MyComponent() {
  return (
    &lt;React.Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;LazyComponent /&gt;
    &lt;/React.Suspense&gt;
  );
}</code></pre>
      
      <h2>5. Use Modern State Management</h2>
      <p>For simple applications, use React's built-in state management (useState, useReducer, and Context API). For more complex applications, consider using libraries like Redux Toolkit, Zustand, or Jotai.</p>
      
      <h2>Conclusion</h2>
      <p>By following these best practices, you can build more efficient, maintainable, and scalable React applications in 2024.</p>
    `,
  }
};

type Props = {
  params: {
    slug: string;
  };
};

export default function BlogPost({ params }: Props) {
  const { slug } = params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  if (!post) {
    notFound();
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <article className="prose lg:prose-xl max-w-4xl w-full">
        <Link href="/blog" className="text-blue-600 hover:text-blue-800 mb-8 inline-block">
          ← Back to all posts
        </Link>
        
        <h1>{post.title}</h1>
        <div className="text-gray-500 mb-8">{post.date}</div>
        
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </main>
  );
} 