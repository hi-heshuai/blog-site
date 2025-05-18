export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 md:p-24">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <div className="prose lg:prose-xl">
          <p>
            Welcome to my blog! I'm a passionate web developer who loves to share knowledge and experiences
            about modern web development technologies.
          </p>
          
          <h2>My Background</h2>
          <p>
            I have been working in web development for several years, specializing in React, Next.js, and
            other modern JavaScript frameworks. I enjoy building performant, accessible, and beautiful web applications.
          </p>
          
          <h2>Why I Blog</h2>
          <p>
            I started this blog as a way to document my learning journey and share insights with the community.
            Writing helps me solidify my understanding of complex topics, and I hope my articles can help others
            on their development journey.
          </p>
          
          <h2>Topics I Cover</h2>
          <p>
            On this blog, you'll find articles about:
          </p>
          <ul>
            <li>React and Next.js</li>
            <li>JavaScript and TypeScript</li>
            <li>CSS and Tailwind</li>
            <li>Web performance optimization</li>
            <li>Developer tools and workflows</li>
          </ul>
          
          <h2>Get in Touch</h2>
          <p>
            I love connecting with fellow developers and readers. If you have any questions, suggestions,
            or just want to say hello, feel free to reach out to me through the contact page or connect
            with me on social media.
          </p>
          
          <p>
            Thank you for visiting my blog, and I hope you find the content helpful and informative!
          </p>
        </div>
      </div>
    </main>
  );
} 