"use client";
import { useState, useEffect } from "react";
import {
  BookOpen,
  Edit,
  Users,
  Globe,
  Heart,
  MessageCircle,
  TrendingUp,
  Shield,
} from "lucide-react";

export default function EchoBlogsAbout() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const features = [
    {
      name: "Read & Discover",
      description: "Explore thousands of stories from writers around the world",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Write & Share",
      description: "Express your thoughts with our intuitive writing tools",
      icon: Edit,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Connect & Engage",
      description:
        "Build meaningful connections with fellow writers and readers",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Global Community",
      description: "Join voices from every corner of the world",
      icon: Globe,
      color: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "50K+", label: "Active Writers", icon: Edit },
    { number: "2M+", label: "Stories Published", icon: BookOpen },
    { number: "10M+", label: "Monthly Readers", icon: Users },
    { number: "500K+", label: "Comments & Interactions", icon: MessageCircle },
  ];

  const values = [
    {
      title: "Authentic Voices",
      description:
        "We believe every story matters and every voice deserves to be heard.",
      icon: Heart,
    },
    {
      title: "Quality Content",
      description:
        "Curated and community-driven content that inspires and informs.",
      icon: TrendingUp,
    },
    {
      title: "Safe Space",
      description:
        "A respectful environment where creativity and expression flourish.",
      icon: Shield,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-500">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000 bg-primary"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-2xl opacity-10 animate-pulse bg-secondary" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full blur-2xl opacity-15 animate-bounce bg-accent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-primary transition-all duration-500 hover:scale-110 flex items-center justify-center bg-gradient-to-br from-primary to-secondary shadow-2xl">
              <BookOpen className="text-primary-foreground" size={48} />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-ping bg-green-500" />
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
            EchoBlogs
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Where stories come alive and voices echo across the digital world.
            Write, read, connect, and be part of a thriving community of
            storytellers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 bg-primary text-primary-foreground shadow-2xl hover:shadow-primary/50">
              Start Writing
            </button>
            <button className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-110 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Explore Stories
            </button>
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="p-8 rounded-3xl bg-card border border-border backdrop-blur-md transition-all duration-500 hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Our Mission
            </h2>
            <p className="text-lg leading-relaxed mb-4 text-card-foreground">
              EchoBlogs was born from a simple belief: everyone has a story
              worth telling. We've created a platform where writers can share
              their authentic voices and readers can discover content that truly
              resonates.
            </p>
            <p className="text-lg leading-relaxed text-card-foreground">
              Our mission is to democratize storytelling, making it accessible
              for anyone to share their thoughts, experiences, and creativity
              with the world.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border backdrop-blur-md transition-all duration-500 hover:scale-105">
            <h2 className="text-3xl font-bold mb-6 text-secondary">
              Why EchoBlogs?
            </h2>
            <ul className="space-y-3 text-lg text-card-foreground">
              <li className="flex items-center">
                <span className="mr-3">✨</span>Clean, distraction-free writing
                experience
              </li>
              <li className="flex items-center">
                <span className="mr-3">🌍</span>Global community of passionate
                writers
              </li>
              <li className="flex items-center">
                <span className="mr-3">📚</span>Diverse content across all
                genres and topics
              </li>
              <li className="flex items-center">
                <span className="mr-3">💬</span>Meaningful engagement and
                feedback
              </li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            What We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border backdrop-blur-md transition-all duration-500 hover:scale-105 group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {feature.name}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Our Growing Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border backdrop-blur-md transition-all duration-500 hover:scale-110"
              >
                <stat.icon className="mx-auto mb-4 text-primary" size={32} />
                <div className="text-3xl font-bold mb-2 text-card-foreground">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border backdrop-blur-md transition-all duration-500 hover:scale-105 text-center"
              >
                <value.icon className="mx-auto mb-6 text-primary" size={48} />
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {value.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 rounded-3xl bg-card border border-border backdrop-blur-md">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Join the EchoBlogs Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
            Ready to share your voice with the world? Join thousands of writers
            and readers who have made EchoBlogs their creative home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 bg-primary text-primary-foreground shadow-2xl hover:shadow-primary/50">
              Create Your Account
            </button>
            <button className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-110 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Browse Popular Posts
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
