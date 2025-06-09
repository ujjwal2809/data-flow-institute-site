
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Data Engineering, and why is it important?",
      answer: "Data Engineering is the practice of designing and building systems for collecting, storing, and analyzing data at scale. It's crucial in today's data-driven world as it enables organizations to make informed decisions, build AI/ML models, and create data products. With the exponential growth of data, skilled data engineers are in high demand across all industries."
    },
    {
      question: "Do you provide placement support?",
      answer: "Yes, we provide 100% placement assurance. Our dedicated placement team works closely with 500+ partner companies including Google, Microsoft, Amazon, and leading startups. We offer resume building, interview preparation, mock interviews, and continuous support until you land your dream job. Our average placement rate is 95% with an average package of 12 LPA."
    },
    {
      question: "What is the duration of the program?",
      answer: "Our comprehensive Data Engineering program is designed as a 6-month intensive course. This includes 4 months of classroom training (weekends) and 2 months of hands-on project work and placement preparation. We also offer flexible schedules for working professionals with evening and weekend batches."
    },
    {
      question: "What are the prerequisites for joining?",
      answer: "We welcome students from all backgrounds. While a basic understanding of programming is helpful, it's not mandatory. We provide foundation courses for complete beginners. The ideal candidates are graduates (any stream), working professionals looking to switch careers, or anyone passionate about data and technology. Our curriculum is designed to take you from beginner to industry-ready professional."
    },
    {
      question: "What technologies will I learn in the course?",
      answer: "You'll master industry-standard tools including Python, SQL, Apache Spark, Hadoop, Kafka, Airflow, AWS/Azure/GCP cloud platforms, Docker, Kubernetes, and modern data warehousing solutions like Snowflake and BigQuery. We also cover data modeling, ETL/ELT processes, and real-time data processing."
    },
    {
      question: "Are there any live projects included?",
      answer: "Absolutely! Our curriculum includes 5+ real-world projects based on actual industry use cases. You'll work on building end-to-end data pipelines, creating data warehouses, implementing real-time analytics systems, and developing ML data pipelines. These projects will be showcased in your portfolio to potential employers."
    }
  ];

  // Generate FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our Data Engineering program
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
