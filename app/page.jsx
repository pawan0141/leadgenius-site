"use client";

import React, { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowUp } from "lucide-react";

export default function LeadGenAgency() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0 });

  const services = [
       {
      title: "🔍 Custom B2B Lead Lists",
      description:
        "Targeted, validated leads by industry, title, region. Includes email, phone, company details.",
      pricing: "Starting at $49 / ₹3,999 per 1,000 leads"
    },
    {
      title: "📧 Cold Email Campaigns",
      description:
        "End-to-end email outreach: content, sending, response tracking, reporting.",
      pricing: "Starting at $99 / ₹7,999 per month"
    },
    {
      title: "✅ Data Validation",
      description:
        "We clean, validate, and verify your existing data to ensure it's ready for outreach or CRM use."
    },
    {
      title: "🌐 Web & LinkedIn Research",
      description:
        "We find the right contacts, enrich company profiles, and extract insights from online sources and LinkedIn."
    },
    {
      title: "⛏️ Data Mining",
      description:
        "Mining targeted data from public sources, directories, databases, and more."
    },
    {
      title: "🔊 Online & Offline Data Entry",
      description:
        "Accurate and efficient data entry services for digital and scanned sources."
    },
    {
      title: "📊 Data Analysis & Visualization",
      description:
        "We transform raw data into actionable insights using advanced analytics and create interactive dashboards to help you make data-driven decisions.",
      pricing: "Custom pricing based on project complexity"
    },
    {
      title: "🎯 Ideal Client Prospect Lists",
      description:
        "Hyper-targeted lists tailored for SaaS startups, EdTech, marketing agencies, and email marketers to help them scale outreach."
    },
    {
      title: "🎓 Verified Leads for EdTech",
      description:
        "Emails and contact data of verified school/college teachers across geographies to help EdTech firms pitch their services."
    },
    {
      title: "🤝 Lead Partnerships for Agencies",
      description:
        "White-label research and email sourcing support for lead-gen and marketing agencies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white text-gray-900 p-4 sm:p-6 relative flex flex-col items-center">
      <nav className="sticky top-0 z-50 w-full max-w-6xl mx-auto bg-white/80 backdrop-blur shadow-md py-4 px-4 sm:px-6 flex items-center justify-between text-sky-800 font-medium text-lg">
        <div className="text-xl font-bold text-sky-700 flex items-center">
          <span className="mr-2">📊</span> LeadGenius
        </div>
        <div className="flex space-x-4 text-sm sm:text-base">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>

      <section id="home" className="text-center mb-16 animate-fadeIn px-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-sky-700">B2B Lead Generation & Email Outreach</h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Helping businesses across the globe reach decision-makers with verified leads, email campaigns, and internet research.
        </p>
      </section>

      <section id="about" className="max-w-4xl mx-auto mb-20 animate-slideUp px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-sky-700 mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          We are a passionate team of data professionals dedicated to helping B2B companies grow through targeted lead generation and expert data handling. With over 25 lakh validated emails and a skilled research team, we serve clients across the globe.
        </p>
        <h3 className="text-xl sm:text-2xl font-semibold text-sky-600 mt-8 mb-2">🚀 Our Mission</h3>
        <p className="text-gray-700">To provide high-quality, verified business leads and email outreach services that help companies connect with their ideal clients and grow efficiently.</p>
        <h3 className="text-xl sm:text-2xl font-semibold text-sky-600 mt-6 mb-2">👥 Our Team</h3>
        <p className="text-gray-700">Our team includes experienced data researchers, marketers, and outreach specialists who understand the value of precision and personalization.</p>
        <h3 className="text-xl sm:text-2xl font-semibold text-sky-600 mt-6 mb-2">🌍 Who We Serve</h3>
        <p className="text-gray-700">Startups, SMBs, marketing agencies, SaaS firms, and enterprises looking for accurate and actionable contact data.</p>
      </section>

      <section id="services" className="mb-20 animate-fadeIn px-4 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-sky-700 mb-10">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Card key={i} className="shadow-xl border-2 border-sky-100 hover:scale-105 transition-transform">
              <CardContent className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-sky-800">{service.title}</h3>
                <p className="text-gray-700 mb-3">{service.description}</p>
                {service.pricing && <p className="text-sky-700 font-medium text-sm">{service.pricing}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow-lg animate-slideUp">
        <h2 className="text-2xl sm:text-3xl font-bold text-sky-800 mb-4 text-center">📨 Contact Us</h2>
        <form action="https://formsubmit.co/pwnsat0141@gmail.com" method="POST" className="flex flex-col space-y-4">
          <input type="hidden" name="_next" value="https://leadgenius-site.vercel.app/thank-you" />
          <input type="text" name="name" placeholder="Your Name" className="p-3 border border-gray-300 rounded-lg" required />
          <input type="email" name="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-lg" required />
          <textarea name="message" placeholder="How can we help you?" className="p-3 border border-gray-300 rounded-lg" rows={5} required></textarea>
          <Button className="py-3 bg-sky-700 text-white text-lg hover:bg-sky-800 rounded-xl shadow">Submit</Button>
        </form>
        <div className="text-center text-sm text-gray-500 mt-8">
          <p>Email us at <a href="mailto:pwnsat0141@gmail.com" className="text-sky-700 underline">pwnsat0141@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/916268699800" className="text-sky-700 underline" target="_blank" rel="noopener noreferrer">+91 6268 699 800</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/pawan-mishra-617937111/" className="text-sky-700 underline" target="_blank" rel="noopener noreferrer">Pawan Mishra</a></p>
        </div>
      </section>

      {showTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-sky-700 text-white p-3 rounded-full shadow-lg hover:bg-sky-800 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </button>
      )}
    </div>
  );
}
