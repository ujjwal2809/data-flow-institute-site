
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Courses = () => {
  const courseModules = [
    {
      title: "Data Engineering Fundamentals",
      duration: "Week 1-2",
      topics: ["Introduction to Data Engineering", "Data Types and Structures", "Database Fundamentals", "SQL Mastery"]
    },
    {
      title: "Python for Data Engineering",
      duration: "Week 3-4", 
      topics: ["Python Programming", "Data Manipulation with Pandas", "NumPy for Data Processing", "APIs and Web Scraping"]
    },
    {
      title: "Big Data Technologies",
      duration: "Week 5-8",
      topics: ["Apache Spark", "Hadoop Ecosystem", "Distributed Computing", "Data Processing at Scale"]
    },
    {
      title: "Cloud Data Platforms",
      duration: "Week 9-12",
      topics: ["AWS Data Services", "Azure Data Factory", "Google Cloud Platform", "Cloud Architecture"]
    },
    {
      title: "Data Pipeline Development",
      duration: "Week 13-16",
      topics: ["Apache Airflow", "ETL/ELT Processes", "Data Orchestration", "Pipeline Monitoring"]
    },
    {
      title: "Real-time Data Processing",
      duration: "Week 17-20",
      topics: ["Apache Kafka", "Stream Processing", "Real-time Analytics", "Event-driven Architecture"]
    },
    {
      title: "Data Warehousing & Analytics",
      duration: "Week 21-24",
      topics: ["Data Modeling", "Snowflake", "BigQuery", "Data Visualization", "Business Intelligence"]
    }
  ];

  const features = [
    { icon: <Clock className="w-5 h-5" />, text: "6 months intensive training" },
    { icon: <Users className="w-5 h-5" />, text: "Small batch size (15-20 students)" },
    { icon: <Award className="w-5 h-5" />, text: "Industry certification" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "100% placement assistance" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-sm px-4 py-2">🎓 Professional Certification Program</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Master Data Engineering with
              <span className="text-primary block">Industry Experts</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive 6-month program designed to transform you into an industry-ready Data Engineer. 
              Learn cutting-edge technologies with hands-on projects and guaranteed placement support.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2 text-muted-foreground">
                  {feature.icon}
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
              Enroll Now - ₹1,50,000
            </Button>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Course Curriculum
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive curriculum designed by industry experts covering all aspects of modern data engineering
            </p>
          </div>
          
          <div className="grid gap-6 max-w-6xl mx-auto">
            {courseModules.map((module, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground">{module.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2">{module.duration}</Badge>
                    </div>
                    <div className="text-3xl font-bold text-primary/20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What Makes Our Course Special?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Industry-Relevant Curriculum</h3>
                      <p className="text-muted-foreground">Updated every 6 months based on industry trends and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Expert Instructors</h3>
                      <p className="text-muted-foreground">Learn from senior data engineers with 10+ years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Hands-on Projects</h3>
                      <p className="text-muted-foreground">Work on 5+ real-world projects used by Fortune 500 companies</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Career Support</h3>
                      <p className="text-muted-foreground">Dedicated placement team with 500+ company partnerships</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Data Engineering Training"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
