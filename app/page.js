"use client";
import React from "react";
import {
  Search,
  ArrowRight,
  TrendingUp,
  BookOpen,
  Zap,
  Star,
  Calendar,
  Eye,
} from "lucide-react";
import Link from "next/link";

const Home = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What's Coming in 2025",
      excerpt:
        "Explore the latest trends and technologies shaping the future of web development...",
      author: "Sarah Chen",
      date: "June 8, 2025",
      readTime: "8 min read",
      views: "2.1k",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      category: "Technology",
    },
    {
      id: 2,
      title: "Mastering React Hooks: Advanced Patterns and Best Practices",
      excerpt:
        "Deep dive into advanced React hooks patterns that will level up your development...",
      author: "Alex Rodriguez",
      date: "June 7, 2025",
      readTime: "12 min read",
      views: "3.4k",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      category: "React",
    },
    {
      id: 3,
      title: "Building Scalable Applications with Microservices Architecture",
      excerpt:
        "Learn how to design and implement microservices that scale with your business...",
      author: "Emma Thompson",
      date: "June 6, 2025",
      readTime: "15 min read",
      views: "1.8k",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop",
      category: "Architecture",
    },
  ];

  const categories = [
    { name: "Technology", count: 124, icon: Zap, color: "bg-blue-500" },
    { name: "Design", count: 89, icon: Star, color: "bg-purple-500" },
    { name: "Development", count: 156, icon: BookOpen, color: "bg-green-500" },
    { name: "Business", count: 67, icon: TrendingUp, color: "bg-orange-500" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-background to-purple-50 dark:from-background dark:via-muted/20 dark:to-background">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-600 to-purple-600 dark:from-foreground dark:via-blue-300 dark:to-purple-300 bg-clip-text text-transparent leading-tight">
              Share Your Echo,
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">
                Amplify Ideas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover thought-provoking articles, connect with brilliant minds,
              and let your voice echo across the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={"/blog"}>
                {" "}
                <button className="group cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-xl flex items-center space-x-2">
                  <span>Start Reading</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              {/* <button className="px-8 py-4 border-2 border-border text-foreground rounded-full text-lg font-semibold hover:border-blue-500 hover:text-blue-500 transition-all">
                Write Your First Post
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                50K+
              </div>
              <div className="text-muted-foreground">Active Readers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                12K+
              </div>
              <div className="text-muted-foreground">Published Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                2.5K+
              </div>
              <div className="text-muted-foreground">Writers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                95%
              </div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dive into our handpicked selection of the most engaging and
              insightful content
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                className={`group cursor-pointer ${
                  index === 0 ? "lg:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full border">
                  <div
                    className={`relative overflow-hidden ${
                      index === 0 ? "h-80" : "h-48"
                    }`}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className={`p-6 ${index === 0 ? "lg:p-8" : ""}`}>
                    <h3
                      className={`font-bold text-card-foreground mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
                        index === 0 ? "text-2xl lg:text-3xl" : "text-xl"
                      }`}
                    >
                      {post.title}
                    </h3>
                    <p
                      className={`text-muted-foreground mb-4 ${
                        index === 0 ? "text-lg" : ""
                      }`}
                    >
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <span className="font-medium">{post.author}</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span>{post.readTime}</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect content tailored to your interests
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.name}
                  className="group bg-card p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border"
                >
                  <div
                    className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {category.count} articles
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Share Your Voice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of writers who are making their mark on EchoBlogs.
            Your unique perspective matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/blog"}>
              <button className="bg-white cursor-pointer text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-xl">
                Start Writing Today
              </button>
            </Link>
            <Link href={"/about"}>
              {" "}
              <button className="border-2 cursor-pointer border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted text-foreground py-16 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-xl font-bold">EchoBlogs</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Amplifying voices, sharing stories, and building a community of
                thoughtful writers and engaged readers.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-accent transition-colors border">
                  <span className="sr-only">Twitter</span>
                  📱
                </button>
                <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-accent transition-colors border">
                  <span className="sr-only">LinkedIn</span>
                  💼
                </button>
                <button className="w-10 h-10 bg-card rounded-full flex items-center justify-center hover:bg-accent transition-colors border">
                  <span className="sr-only">GitHub</span>
                  🔗
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Authors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2025 EchoBlogs. All rights reserved. Made with ❤️ for
              writers and readers.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
