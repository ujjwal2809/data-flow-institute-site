
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Data Engineering: Trends and Technologies in 2024",
      excerpt: "Explore the latest trends shaping the data engineering landscape, from real-time processing to AI-driven data pipelines.",
      author: "Dr. Rahul Krishnan",
      date: "December 5, 2024",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Cloud Data Engineering Career Guide: Skills, Salary, and Growth Path",
      excerpt: "Complete roadmap for building a successful career in cloud data engineering, including skill requirements and salary expectations.",
      author: "Priya Nair",
      date: "November 28, 2024",
      category: "Career Guide",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Building Scalable Data Pipelines with Apache Spark and Kafka",
      excerpt: "Learn how to design and implement robust data pipelines using Apache Spark and Kafka for real-time data processing.",
      author: "Arjun Sharma",
      date: "November 20, 2024",
      category: "Technical Tutorial",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "15 min read"
    },
    {
      id: 4,
      title: "Data Engineering Interview Preparation: Common Questions and Best Practices",
      excerpt: "Comprehensive guide to ace your data engineering interviews with commonly asked questions and expert tips.",
      author: "Sneha Patel",
      date: "November 15, 2024",
      category: "Interview Prep",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "10 min read"
    }
  ];

  const categories = ["All", "Industry Trends", "Career Guide", "Technical Tutorial", "Interview Prep"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2">📚 Knowledge Hub</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Data Engineering
              <span className="text-primary block">Blog & Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay updated with the latest trends, tutorials, and career guidance in data engineering. 
              Expert insights from industry professionals to accelerate your learning journey.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant={index === 0 ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Article</h2>
            </div>
            
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4">
                    {blogPosts[0].category}
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${blogPosts[0].id}`}
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover insights, tutorials, and career guidance from our expert team
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.slice(1).map((post, index) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                    >
                      Read More <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest articles and industry insights
            </p>
            
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                    Subscribe to Newsletter
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
