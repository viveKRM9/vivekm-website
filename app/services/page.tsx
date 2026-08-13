"use client";

import { useState } from "react";

export default function ServicesPage() {
  // --- 1. Define the Interface (Fixes the 'any' error) ---
  interface ServiceType {
    number: string;
    title: string;
    description: string;
    tags: string[];
    icon: string;
    fullDescription: string;
    process: { step: string; detail: string }[];
  }

  // --- 2. Define state with correct typing (Fixes 'any' and 'unused' errors) ---
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);

  // --- 3. Paste your exact Services Data here ---
  const services: ServiceType[] = [
    {
      number: "01",
      title: "Web Development",
      description: "High-performance websites and web applications built for startups, businesses and enterprises using modern frameworks.",
      tags: ["Next.js", "React", "Node.js"],
      icon: "🌐",
      fullDescription: "From high-traffic SaaS platforms to sleek corporate websites, we leverage the power of React, Next.js, and Node.js to craft solutions that are blazing fast, SEO-optimized, and conversion-focused. We prioritize clean code and responsive design to ensure your brand looks perfect on every screen.",
      process: [
        { step: "Discovery & Strategy", detail: "Understanding your business goals and target audience to create a roadmap." },
        { step: "UI/UX Design", detail: "Designing wireframes and high-fidelity prototypes that are both beautiful and user-friendly." },
        { step: "Agile Development", detail: "Building the application using component-based architecture and modern tooling." },
        { step: "Deployment & SEO", detail: "Launching on Vercel/AWS with full SEO setup, analytics, and performance monitoring." },
      ]
    },
    {
      number: "02",
      title: "Mobile App Development",
      description: "Scalable Android and iOS applications with beautiful interfaces, offline support, and reliable backend systems.",
      tags: ["Flutter", "React Native", "Android"],
      icon: "📱",
      fullDescription: "We build native-quality cross-platform applications using Flutter and React Native, saving you time and money without compromising on performance. Whether you need a customer-facing app or an internal workforce tool, we handle the entire lifecycle—from app store submissions to push notifications.",
      process: [
        { step: "Market Research", detail: "Analyzing the app store landscape to define unique features and competitive edge." },
        { step: "Prototyping", detail: "Interactive mobile-first prototypes to test user flow and navigation." },
        { step: "Native Integration", detail: "Deep integration with device hardware like GPS, Camera, and Biometrics." },
        { step: "Launch & ASO", detail: "Publishing to App Store and Google Play with App Store Optimization (ASO)." },
      ]
    },
    {
      number: "03",
      title: "UI/UX Design",
      description: "User-focused digital experiences that combine modern design principles, usability research, and business goals.",
      tags: ["Figma", "Design Systems", "Prototyping"],
      icon: "🎨",
      fullDescription: "Design is not just about how things look—it's about how they work. We use Figma to design intuitive interfaces backed by user research and behavior psychology. We create consistent design systems that scale, ensuring your users stay engaged and delighted at every touchpoint.",
      process: [
        { step: "User Research", detail: "Conducting interviews, surveys, and creating empathy maps." },
        { step: "Information Architecture", detail: "Organizing content and defining clear user paths." },
        { step: "High-Fidelity Design", detail: "Creating pixel-perfect mockups, animations, and interaction states." },
        { step: "Usability Testing", detail: "Validating the design with real users to refine the experience." },
      ]
    },
    {
      number: "04",
      title: "E-Commerce Solutions",
      description: "Complete online shopping platforms with integrated payments, inventory management, orders, and customer management.",
      tags: ["E-Commerce", "Payments", "APIs"],
      icon: "🛒",
      fullDescription: "We build robust online stores that turn visitors into customers. By integrating secure payment gateways (Stripe, Razorpay), real-time inventory sync, and order management systems, we give you a complete backend dashboard. We also ensure your checkout flow is optimized for conversion.",
      process: [
        { step: "Catalog Architecture", detail: "Setting up categories, product variants, and dynamic pricing rules." },
        { step: "Payment Integration", detail: "Secure implementation of multiple payment methods (Credit Card, UPI, Paypal)." },
        { step: "Inventory & Logistics", detail: "Sync warehouse data with your storefront for real-time stock updates." },
        { step: "Analytics Dashboard", detail: "Building admin panels to track sales, abandoned carts, and customer behavior." },
      ]
    },
    {
      number: "05",
      title: "Backend & APIs",
      description: "Secure and scalable APIs that power mobile apps, websites, and business applications with high performance.",
      tags: ["REST API", "Node.js", "Database"],
      icon: "⚙️",
      fullDescription: "The backend is the engine of your application. We build highly scalable RESTful and GraphQL APIs using Node.js, Python, or Java, ensuring your data flows securely between your database, frontend, and third-party services. We prioritize database optimization, caching, and error handling.",
      process: [
        { step: "Data Modeling", detail: "Designing efficient schemas for SQL (MySQL) and NoSQL (MongoDB) databases." },
        { step: "API Development", detail: "Building robust endpoints with JWT authentication and role-based access." },
        { step: "Security & Testing", detail: "Implementing rate limiting, data encryption, and unit/integration tests." },
        { step: "System Monitoring", detail: "Setting up logs and alerts using tools like Sentry and New Relic." },
      ]
    },
    {
      number: "06",
      title: "Cloud & Support",
      description: "Deployment, maintenance, monitoring, and continuous improvements for your digital products in production.",
      tags: ["Vercel", "Cloud", "Maintenance"],
      icon: "☁️",
      fullDescription: "Launching is just the beginning. We offer comprehensive cloud hosting solutions on Vercel, AWS, and Google Cloud. Beyond deployment, we provide 24/7 monitoring, automatic backups, security patches, and continuous feature improvements so you never have to worry about technical downtime.",
      process: [
        { step: "Deployment Strategy", detail: "CI/CD pipelines to automatically deploy new code safely." },
        { step: "Infrastructure Setup", detail: "Configuring server instances, load balancers, and CDNs for speed." },
        { step: "Ongoing Maintenance", detail: "Fixing bugs, updating libraries, and handling security vulnerabilities." },
        { step: "Growth Optimization", detail: "Refactoring code and scaling infrastructure as your user base grows." },
      ]
    },
  ];

  return (
    <section className="pt-32 pb-24 bg-zinc-50/80 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Our Services</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Enterprise-grade technology solutions</h2>
        </div>
        
        {/* --- PASTE YOUR SERVICE CARD GRID HERE --- */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              onClick={() => setSelectedService(service)}
              className="group cursor-pointer rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{service.icon}</span>
                <span className="text-sm font-bold text-zinc-400 group-hover:text-blue-600">
                  {service.number}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-bold group-hover:text-blue-600">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-600">
                {service.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 group-hover:bg-blue-50 group-hover:text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- PASTE YOUR MODAL CODE HERE --- */}
        {selectedService && (
          <div 
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-6 transition-opacity duration-300"
            onClick={() => setSelectedService(null)}
          >
            <div 
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute right-6 top-6 rounded-full bg-zinc-100 p-2 text-zinc-600 transition hover:bg-zinc-200 hover:text-black"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>

              <div className="p-8 sm:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-6xl">{selectedService.icon}</span>
                  <div>
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                      Service {selectedService.number}
                    </span>
                    <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>

                <div className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-6 sm:p-10 border border-zinc-100 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <div className="text-8xl mb-4 opacity-90">{selectedService.icon}</div>
                    <h3 className="text-xl font-semibold text-zinc-800">Modern {selectedService.title} Pipeline</h3>
                    <p className="text-zinc-500">AI-driven workflow automation & design preview</p>
                  </div>
                </div>

                <p className="text-lg leading-8 text-zinc-700 mb-10 border-b border-zinc-100 pb-10">
                  {selectedService.fullDescription}
                </p>

                <h3 className="text-xl font-bold text-zinc-900 mb-6">How we execute:</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {selectedService.process.map((step: { step: string; detail: string }, idx: number) => (
                    <div key={idx} className="flex gap-4 rounded-xl bg-zinc-50 p-5 border border-zinc-100/50">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-800">{step.step}</h4>
                        <p className="text-sm text-zinc-500 mt-1">{step.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex justify-end border-t border-zinc-100 pt-8">
                  <button
                    onClick={() => { setSelectedService(null); window.location.href="/contact"; }}
                    className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                  >
                    Discuss this Service →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}