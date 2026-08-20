"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; 
import { 
  SiNextdotjs, SiReact, SiFlutter, SiNodedotjs, SiAndroid, 
  SiFirebase, SiMongodb, SiMysql, SiVercel, SiFigma, SiStripe, SiTailwindcss, 
  SiPython, SiDart, SiSwift, SiKotlin, SiGooglemaps, SiApple, SiGoogleplay
} from "react-icons/si";
import { FaCloud, FaGear, FaCartShopping } from "react-icons/fa6";

export default function Home() {

  interface ServiceType {
    number: string;
    title: string;
    description: string;
    tags: { name: string; icon: React.ElementType; color: string }[];
    icon: string;
    fullDescription: string;
    process: { step: string; detail: string }[];
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hi there! 👋 I'm your AI assistant. Ask me about VivekM Technologies, our services, or how we can help build your product!" }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // --- Scroll Animation & Navbar Effects ---
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.15 }
    );

    const sections = document.querySelectorAll(".animate-on-scroll");
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
    setSelectedService(null); 
  };

  // --- Chatbot Logic ---
  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newMessages = [...chatMessages, { role: 'user' as const, text: inputText }];
    setChatMessages(newMessages);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      simulateAIResponse(newMessages);
    }, 1000);
  };

  const simulateAIResponse = (history: { role: 'user' | 'ai'; text: string }[]) => {
    const lastUserMsg = history[history.length - 1].text.toLowerCase();
    let response = "";

    if (lastUserMsg.includes("price") || lastUserMsg.includes("cost") || lastUserMsg.includes("hire")) {
      response = "Our pricing depends entirely on your project's specific needs. Could you share a brief description of what you're trying to build? I can give you a rough estimate right now!";
    } else if (lastUserMsg.includes("web") || lastUserMsg.includes("website")) {
      response = "We specialize in high-performance websites using Next.js, React, and Tailwind CSS. We focus on speed, SEO, and beautiful UI. Do you have an existing design, or do you need help with the design too?";
    } else if (lastUserMsg.includes("mobile") || lastUserMsg.includes("app")) {
      response = "We build amazing mobile apps using Flutter and React Native. This allows us to launch on both iOS and Android simultaneously, saving you time and money!";
    } else if (lastUserMsg.includes("hello") || lastUserMsg.includes("hi") || lastUserMsg.includes("hey")) {
      response = "Hello! 😊 Great to meet you. I'm here to answer any questions about VivekM Technologies and our software development services. What can I help you with today?";
    } else {
      response = "That's a great question! To give you the best answer, could you tell me a bit more about your project? You can also explore our Services section right below!";
    }

    setIsTyping(false);
    setChatMessages((prev) => [...prev, { role: 'ai', text: response }]);
  };

  // --- DATA: Services with Full Details & Tech Logos ---
  const services = [
    {
      number: "01",
      title: "Web Development",
      description: "High-performance websites and web applications built for startups, businesses and enterprises using modern frameworks.",
      tags: [
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" }
      ],
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
      tags: [
        { name: "Flutter", icon: SiFlutter, color: "#02569B" },
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "Android", icon: SiAndroid, color: "#3DDC84" }
      ],
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
      tags: [
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "Prototyping", icon: FaGear, color: "#6B7280" }
      ],
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
      tags: [
        { name: "Stripe", icon: SiStripe, color: "#635BFF" },
        { name: "Payments", icon: FaCartShopping, color: "#F59E0B" },
        { name: "APIs", icon: FaCloud, color: "#3B82F6" }
      ],
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
      tags: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" }
      ],
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
      tags: [
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Cloud", icon: FaCloud, color: "#3B82F6" },
        { name: "Maintenance", icon: FaGear, color: "#6B7280" }
      ],
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

  // --- DATA: Freelance Services ---
  const freelanceServices = [
    { icon: "📱", title: "Flutter Development", desc: "Cross-platform Android and iOS apps from a single codebase.", color: "from-blue-500 to-cyan-400" },
    { icon: "🤖", title: "Android Development", desc: "Native Android apps, WebView applications, and troubleshooting.", color: "from-green-500 to-teal-400" },
    { icon: "🍎", title: "iOS Development", desc: "Swift/UIKit development, Xcode troubleshooting and App Store deployment.", color: "from-purple-500 to-pink-500" },
    { icon: "🔧", title: "Existing App Fixes", desc: "Flutter build errors, Gradle issues, Xcode, CocoaPods, crashes and more.", color: "from-orange-500 to-red-400" },
    { icon: "🔗", title: "API Integration", desc: "REST APIs, Firebase, Google Maps, WebView, and third-party services.", color: "from-indigo-500 to-blue-400" },
    { icon: "🔄", title: "App Maintenance", desc: "Bug fixes, new features, SDK upgrades, and store releases.", color: "from-teal-500 to-emerald-400" },
  ];

  // --- DATA: Projects with Expanded Details ---
  const projects = [
    {
      category: "Mobile Application",
      title: "BeneFittz",
      description: "A complete rewards and benefits platform for shoppers. Earn, track, and redeem points seamlessly at partner shops.",
      technologies: ["Flutter", "REST API", "Firebase", "Android", "iOS"],
      features: ["Authentication", "API Integration", "Rewards/Points", "UI/UX Design", "App Deployment", "Bug Fixing"],
      metrics: ["Live on Stores", "Reward System", "User Friendly"],
      ios: "https://apps.apple.com/in/app/benefittz/id6746153320",
      android: "https://play.google.com/store/apps/details?id=com.benefitt.app"
    },
    {
      category: "Mobile Application",
      title: "Green Vision Cleansing",
      description: "An employee time-tracking app designed for cleaning businesses to manage worker shifts, locations, and attendance effectively.",
      technologies: ["Flutter", "Google Maps", "Firebase", "Location Services", "Android", "iOS"],
      features: ["Employee Management", "Clock-in/out", "Location Tracking", "Shift Management", "Attendance", "Task Management", "Notifications"],
      metrics: ["Time Tracking", "Shift Management", "Live"],
      ios: "https://apps.apple.com/in/app/green-vision-cleansing2-0/id6479843416",
      android: "https://play.google.com/store/apps/details?id=com.green.greencleansing"
    },
    {
    category: "Mobile Application",
    title: "eWomen Network",
    description: "A networking platform for women entrepreneurs and business owners. Connect, collaborate, and access success strategies from premier success coaches to achieve business growth and success.",
    technologies: ["Native Android", "Native iOS", "Kotlin", "Swift", "Firebase", "REST APIs"],
    features: ["Networking", "Community Building", "Success Coaching", "Event Management", "Business Resources", "Entrepreneur Support"],
    metrics: ["Live on Stores", "Women Entrepreneurs", "Networking"],
    ios: "https://apps.apple.com/in/app/ewomennetwork/id1625056796",
    android: "https://play.google.com/store/apps/details?id=com.ewomennetwork",
    status: "live",
    isFeatured: true
  },
  {
    category: "Mobile Application (In Development)",
    title: "SitterBoss",
    description: "A comprehensive babysitter booking platform connecting parents with trusted babysitters. Sitters can manage profiles, receive job requests, update availability, and track earnings seamlessly.",
    technologies: ["React Native", "Firebase", "REST APIs", "iOS", "Android"],
    features: ["Profile Management", "Job Requests", "Availability Management", "Earnings Tracking", "Booking System", "Parent-Sitter Communication"],
    metrics: ["In Development", "TestFlight Available"],
    ios: "https://testflight.apple.com/join/RTFHr3e8",
    android: null,
    status: "development",
    isFeatured: true
  },
    {
      category: "Smart Management (In Dev)",
      title: "GateNest",
      description: "A smart apartment guest management system allowing societies to digitally register visitors, manage security logs, and ensure safety.",
      technologies: ["Flutter", "Firebase", "Android"],
      features: ["Guest Registration", "Security Logs", "Visitor Management"],
      metrics: ["Guest Logs", "Security", "In Development"],
      ios: null,
      android: "https://play.google.com/store/apps/details?id=com.gate.nest"
    },
    {
      category: "Kids Application (In Dev)",
      title: "Kids FunZone",
      description: "An interactive and educational mobile app designed for children to learn through fun games, puzzles, and engaging activities.",
      technologies: ["Flutter", "Animation", "Android"],
      features: ["Interactive UI", "Educational Content", "Games", "Puzzles"],
      metrics: ["Interactive UI", "Educational", "In Development"],
      ios: null,
      android: "https://play.google.com/store/apps/details?id=com.kids.world"
    },
  ];

  const technologies = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Android", icon: SiAndroid, color: "#3DDC84" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
  ];

  // --- Pricing Data ---
  const pricingData = [
    { service: "Bug Fixes", price: "₹500+" },
    { service: "UI Changes", price: "₹1,000+" },
    { service: "API Integration", price: "₹2,000+" },
    { service: "Flutter Features", price: "₹3,000+" },
    { service: "Google Maps / Location", price: "₹3,000+" },
    { service: "App Maintenance", price: "₹5,000/month" },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* NAVBAR */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-zinc-200/80 bg-white/95 shadow-sm backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg">VM</div>
            <div>
              <div className="text-xl font-bold tracking-tight text-zinc-900">VivekM</div>
              <div className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">Technologies</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            <button onClick={() => scrollToSection("hire")} className="text-sm font-medium text-zinc-600 transition-all hover:text-blue-600 hover:after:w-full relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
              Hire Me
            </button>
            <button onClick={() => scrollToSection("services")} className="text-sm font-medium text-zinc-600 transition-all hover:text-blue-600 hover:after:w-full relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
              Services
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-sm font-medium text-zinc-600 transition-all hover:text-blue-600 hover:after:w-full relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
              Projects
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium text-zinc-600 transition-all hover:text-blue-600 hover:after:w-full relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
              About
            </button>
          </nav>

          <button onClick={() => scrollToSection("contact")} className="hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl md:block">Get a Quote</button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-zinc-200 px-3 py-2 transition hover:bg-zinc-50 md:hidden" aria-label="Open menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-zinc-200 bg-white px-6 py-5 shadow-lg md:hidden">
            <div className="flex flex-col gap-4">
              <button onClick={() => { setMenuOpen(false); scrollToSection("hire"); }} className="text-left text-base font-medium text-zinc-600 transition hover:text-blue-600">Hire Me</button>
              <button onClick={() => { setMenuOpen(false); scrollToSection("services"); }} className="text-left text-base font-medium text-zinc-600 transition hover:text-blue-600">Services</button>
              <button onClick={() => { setMenuOpen(false); scrollToSection("projects"); }} className="text-left text-base font-medium text-zinc-600 transition hover:text-blue-600">Projects</button>
              <button onClick={() => { setMenuOpen(false); scrollToSection("about"); }} className="text-left text-base font-medium text-zinc-600 transition hover:text-blue-600">About</button>
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-center font-semibold text-white shadow-lg">Get a Quote</Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden pt-24 animate-on-scroll">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_20%,rgba(37,99,235,0.15),transparent_50%),radial-gradient(ellipse_at_30%_80%,rgba(99,102,241,0.08),transparent_50%)]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-purple-500/5 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-blue-200 bg-blue-50/80 px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-blue-700">Digital Technology & Development Partner</span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              We build digital products that
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> move businesses</span> forward.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
              VivekM Technologies helps businesses transform ideas into powerful websites, mobile applications, and scalable software solutions with modern technology.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button onClick={() => scrollToSection("hire")} className="group rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                Hire a Mobile Developer <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button onClick={() => scrollToSection("services")} className="rounded-full border border-zinc-300 px-8 py-3.5 text-center font-semibold transition-all hover:border-blue-600 hover:bg-blue-50">Explore Services</button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-zinc-200 pt-7">
              {[
                { label: "Web", value: "Applications" },
                { label: "Mobile", value: "Applications" },
                { label: "Cloud", value: "Solutions" },
                { label: "24/7", value: "Support" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-bold text-blue-600">{item.label}</div>
                  <div className="text-sm text-zinc-500">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl">
              <div className="rounded-[2rem] border border-zinc-200 bg-white/80 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-zinc-900 to-zinc-950 p-8">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-zinc-700" />
                      <span className="h-3 w-3 rounded-full bg-zinc-700" />
                      <span className="h-3 w-3 rounded-full bg-zinc-700" />
                    </div>
                    <span className="text-xs font-semibold text-blue-400">VIVEKM TECHNOLOGIES</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                      <div className="mb-10 text-sm font-medium text-zinc-500">DIGITAL PRODUCT</div>
                      <div className="text-3xl font-bold text-white">Idea<br /><span className="text-blue-400">→ Product</span></div>
                    </div>
                    <div className="rounded-2xl bg-blue-600/20 p-6 backdrop-blur">
                      <div className="mb-10 text-sm text-zinc-400">TECHNOLOGY</div>
                      <div className="text-3xl font-bold text-white">Design<br /><span className="text-blue-400">+ Code</span></div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-zinc-800 p-6">
                    <div className="mb-3 text-sm text-zinc-500">OUR APPROACH</div>
                    <div className="flex items-center justify-between text-sm text-zinc-300">
                      <span className="text-white">Strategy</span><span className="text-blue-400">→</span>
                      <span className="text-white">Design</span><span className="text-blue-400">→</span>
                      <span className="text-white">Build</span><span className="text-blue-400">→</span>
                      <span className="text-white">Grow</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Built for</div>
                <div className="mt-1 font-bold text-zinc-900">Modern Businesses</div>
              </div>
              <div className="absolute -right-5 -top-5 rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Trusted by</div>
                <div className="mt-1 font-bold text-zinc-900">10+ Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">Scroll</span>
            <div className="h-8 w-0.5 rounded-full bg-gradient-to-b from-blue-500 to-transparent" />
          </div>
        </div>
      </section>

      {/* HIRE A MOBILE DEVELOPER SECTION - NEW */}
      <section id="hire" className="py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-white/80 backdrop-blur border border-zinc-200 p-8 sm:p-12 lg:p-16 shadow-xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
              
              {/* Left: Developer Identity */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 mb-4">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                  </span>
                  Available for Freelance
                </div>
                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vivek</span>
                </h2>
                <p className="mt-4 text-xl font-semibold text-zinc-800">
                  Mobile App Developer
                </p>
                <p className="mt-4 text-lg leading-8 text-zinc-600">
                  I help startups, businesses and development teams build new mobile applications, 
                  fix existing apps, integrate APIs, and maintain applications already in production.
                </p>
                
                {/* Core Expertise Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Flutter", "Dart", "Swift", "Android", "Kotlin/Java", "Firebase", "REST APIs", "Google Maps"].map((skill) => (
                    <span key={skill} className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 border border-zinc-200">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  <a 
                    href="https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20found%20your%20portfolio%20and%20I'm%20looking%20for%20help%20with%20a%20Flutter/iOS/Android%20project." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                  >
                    Hire Me <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
                  </a>
                  <button 
                    onClick={() => scrollToSection("projects")} 
                    className="rounded-full border border-zinc-300 px-8 py-3.5 font-semibold transition-all hover:border-blue-600 hover:bg-blue-50"
                  >
                    View My Work
                  </button>
                </div>
              </div>
              
              {/* Right: Services Boxes - Build, Fix, Upgrade, Maintain */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "🚀", title: "Build", desc: "New applications from scratch", color: "from-blue-500 to-cyan-400" },
                  { icon: "🔧", title: "Fix", desc: "Bugs, crashes & issues", color: "from-orange-500 to-red-400" },
                  { icon: "⬆️", title: "Upgrade", desc: "Old apps & SDK versions", color: "from-purple-500 to-pink-500" },
                  { icon: "🔄", title: "Maintain", desc: "Monthly recurring support", color: "from-green-500 to-teal-400" },
                ].map((item) => (
                  <div key={item.title} className="group relative rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg hover:-translate-y-1 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity`} />
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                    <div className="relative z-10">
                      <div className="text-3xl">{item.icon}</div>
                      <h3 className="mt-3 text-lg font-bold text-zinc-800">{item.title}</h3>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - FREELANCE FOCUS */}
      <section id="services" className="bg-zinc-50/80 py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">What I can do</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Mobile Development<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services for You</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              Whether you need a new app, a bug fixed, or an old app upgraded, I&apos;m here to help.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {freelanceServices.map((service, index) => (
              <div key={index} className="group cursor-pointer relative rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden border border-zinc-100">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-[0.02] group-hover:opacity-[0.05] transition-opacity`} />
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color}`} />
                <div className="relative z-10">
                  <div className="text-4xl">{service.icon}</div>
                  <h3 className="mt-4 text-xl font-bold group-hover:text-blue-600">{service.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENCY SERVICES - ORIGINAL */}
      <section className="py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Agency Services</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technology services built around<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">your business</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              From the first idea to production and beyond, we provide the technology expertise required to build and grow digital products.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const gradients = [
                "from-blue-500 to-cyan-400",
                "from-purple-500 to-pink-500",
                "from-green-500 to-teal-400",
                "from-orange-500 to-red-400",
                "from-indigo-500 to-blue-400",
                "from-teal-500 to-emerald-400"
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div
                  key={service.number}
                  onClick={() => setSelectedService(service)}
                  className="group cursor-pointer relative rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden border border-zinc-100"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300`}></div>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{service.icon}</span>
                      <span className="text-sm font-bold text-zinc-400 group-hover:text-blue-600">{service.number}</span>
                    </div>
                    <h3 className="mt-8 text-2xl font-bold group-hover:text-blue-600">{service.title}</h3>
                    <p className="mt-4 leading-7 text-zinc-600">{service.description}</p>
                    <div className="mt-7 flex flex-wrap gap-2">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 group-hover:bg-blue-50 group-hover:text-blue-600">
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL FOR SERVICE DETAILS */}
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
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Service {selectedService.number}</span>
                  <h2 className="text-4xl font-bold tracking-tight text-zinc-900">{selectedService.title}</h2>
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

              <h3 className="text-xl font-bold text-zinc-900 mb-6">Powered By:</h3>
              <div className="flex flex-wrap gap-3 mb-10">
                {selectedService.tags.map((tag, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 animate-in fade-in slide-in-from-bottom-4 duration-500"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <tag.icon className="text-lg" style={{ color: tag.color }} />
                    {tag.name}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-zinc-900 mb-6">How we execute:</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {selectedService.process.map((step, idx) => (
                  <div key={idx} className="flex gap-4 rounded-xl bg-zinc-50 p-5 border border-zinc-100/50">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold">{idx + 1}</div>
                    <div>
                      <h4 className="font-semibold text-zinc-800">{step.step}</h4>
                      <p className="text-sm text-zinc-500 mt-1">{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex justify-end border-t border-zinc-100 pt-8">
                <button
                  onClick={() => { setSelectedService(null); scrollToSection("contact"); }}
                  className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
                >
                  Discuss this Service →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SOLUTIONS */}
      <section id="solutions" className="py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Built to scale</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                From a simple idea to a<br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">complete digital platform</span>
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                We combine product thinking, design, and engineering to create solutions that are reliable today and ready for tomorrow.
              </p>
              <button onClick={() => scrollToSection("contact")} className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                Discuss your idea →
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Discover", "Understand your business, users and goals.", "from-blue-500 to-cyan-400"],
                ["02", "Design", "Create intuitive experiences and interfaces.", "from-purple-500 to-pink-500"],
                ["03", "Develop", "Build secure, scalable and maintainable software.", "from-green-500 to-teal-400"],
                ["04", "Launch", "Deploy, monitor and continuously improve.", "from-orange-500 to-red-400"],
              ].map(([number, title, description, gradient]) => (
                <div
                  key={number}
                  className="group relative rounded-3xl border border-zinc-200 p-7 transition-all hover:border-transparent hover:shadow-lg overflow-hidden bg-white"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-300`}></div>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}></div>

                  <div className="relative z-10">
                    <span className={`text-sm font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                      {number}
                    </span>
                    <h3 className="mt-8 text-xl font-bold group-hover:text-blue-600">{title}</h3>
                    <p className="mt-3 leading-6 text-zinc-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS - EXPANDED WITH CASE STUDY DETAILS */}
      <section id="projects" className="bg-zinc-950 py-24 text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">Selected work</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Solutions that solve<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">real business problems</span>
              </h2>
            </div>
            <p className="max-w-md text-zinc-400">
              Each project showcases my ability to deliver practical, working solutions.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <div key={project.title} className="group overflow-hidden rounded-3xl border border-zinc-800 transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10">
                <div className="relative flex h-64 items-end bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-8">
                  <div className="absolute right-4 top-4 text-6xl font-bold text-white/5">{String(index + 1).padStart(2, "0")}</div>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">{project.category}</div>
                    <div className="text-3xl font-bold text-white">{project.title}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-lg leading-7 text-zinc-300">{project.description}</p>
                  
                  {/* Technology Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400 border border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* What I Worked On - Key Features */}
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Key Functionality</p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span key={feature} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Store Links */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.android && (
                      <a href={project.android} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500">
                        <SiGoogleplay className="text-lg" /> Google Play
                      </a>
                    )}
                    {project.ios && (
                      <a href={project.ios} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-zinc-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-600">
                        <SiApple className="text-lg" /> App Store
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING - STARTING FROM */}
      <section className="py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Transparent Pricing</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Starting from</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {pricingData.map((item) => (
              <div key={item.service} className="rounded-2xl border border-zinc-200 p-6 text-center transition-all hover:border-blue-400 hover:shadow-lg">
                <p className="text-sm font-medium text-zinc-500">{item.service}</p>
                <p className="mt-2 text-2xl font-bold text-zinc-900">{item.price}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-zinc-500 mb-4">Have a specific requirement?</p>
            <a 
              href="https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20have%20a%20specific%20requirement%20and%20would%20like%20a%20quote." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-b border-zinc-200 py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-zinc-50/80">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Technology expertise
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Modern technology.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Practical solutions.
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
            {[
              { name: "React", icon: SiReact, color: "#61DAFB" },
              { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
              { name: "Flutter", icon: SiFlutter, color: "#02569B" },
              { name: "React Native", icon: SiReact, color: "#61DAFB" },
              { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
              { name: "Python", icon: SiPython, color: "#3776AB" },
              { name: "Android", icon: SiAndroid, color: "#3DDC84" },
              { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
              { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
              { name: "MySQL", icon: SiMysql, color: "#4479A1" },
              { name: "Vercel", icon: SiVercel, color: "#000000" },
            ].map((tech) => (
              <div
                key={tech.name}
                className="group relative flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 overflow-hidden"
              >
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[${tech.color}] to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className={`absolute -inset-1 bg-[${tech.color}] opacity-0 group-hover:opacity-[0.03] blur-xl transition-opacity`}></div>
                <tech.icon className="text-2xl relative z-10" style={{ color: tech.color }} />
                <span className="text-[15px] font-semibold text-zinc-700 relative z-10 group-hover:text-zinc-900 transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-zinc-50 to-blue-50/50 p-8 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              
              <div className="flex flex-col justify-center">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  About VivekM
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight">
                  Your technology partner for
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    the digital era.
                  </span>
                </h2>
                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  VivekM Technologies is a software development company focused
                  on helping businesses turn ideas into dependable digital products.
                </p>
                <p className="mt-4 leading-7 text-zinc-600">
                  Whether you need a business website, mobile application, custom
                  software, API integration, or ongoing technical support, we work
                  closely with you from concept to launch and beyond.
                </p>
              </div>

              <div className="relative group overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl transition-all hover:shadow-3xl hover:-translate-y-1 h-[400px] w-full border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-zinc-900 to-purple-950"></div>

                <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/10 blur-[80px]"></div>
                  <div className="relative w-[80%] h-[55%] bg-zinc-950 rounded-2xl border border-zinc-700/50 shadow-[0_0_50px_rgba(59,130,246,0.2)] overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 p-8">
                      <div className="flex justify-between items-start mb-6">
                        <div className="text-blue-400 font-bold tracking-widest text-xs">Q2 STRATEGY</div>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                        </div>
                      </div>
                      <div className="flex gap-4 h-[60%] items-end">
                        <div className="w-8 bg-blue-500/80 rounded-t-lg h-[40%]"></div>
                        <div className="w-8 bg-blue-400/80 rounded-t-lg h-[70%]"></div>
                        <div className="w-8 bg-purple-500/80 rounded-t-lg h-[50%]"></div>
                        <div className="w-8 bg-blue-500/80 rounded-t-lg h-[85%]"></div>
                        <div className="w-8 bg-purple-400/80 rounded-t-lg h-[60%]"></div>
                      </div>
                      <div className="mt-4 flex gap-2">
                        <div className="h-2 w-20 rounded-full bg-zinc-700"></div>
                        <div className="h-2 w-16 rounded-full bg-zinc-700"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[70%] flex justify-center gap-4">
                  <div className="w-10 h-14 bg-zinc-800/80 rounded-t-xl border border-zinc-700/50 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-zinc-800/80 rounded-full border border-zinc-700/50"></div>
                  </div>
                  <div className="w-10 h-14 bg-zinc-700/80 rounded-t-xl border border-blue-500/50 relative animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-zinc-700/80 rounded-full border border-blue-500/50"></div>
                  </div>
                  <div className="w-10 h-14 bg-zinc-800/80 rounded-t-xl border border-zinc-700/50 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-zinc-800/80 rounded-full border border-zinc-700/50"></div>
                  </div>
                  <div className="w-10 h-14 bg-zinc-800/80 rounded-t-xl border border-zinc-700/50 relative">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-6 h-6 bg-zinc-800/80 rounded-full border border-zinc-700/50"></div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-zinc-900/90 via-zinc-900/60 to-transparent backdrop-blur-sm border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                      </div>
                      <span className="text-xs font-bold tracking-widest text-red-400 uppercase">Live</span>
                      <span className="text-xs text-zinc-400 ml-2 border-l border-zinc-700 pl-2">Boardroom Strategy</span>
                    </div>

                    <div className="flex gap-3">
                      <div className="h-9 w-9 rounded-full bg-zinc-800/80 backdrop-blur border border-zinc-700/50 flex items-center justify-center text-zinc-400 text-xs cursor-pointer hover:bg-zinc-700 transition">
                        🎤
                      </div>
                      <div className="h-9 w-9 rounded-full bg-zinc-800/80 backdrop-blur border border-zinc-700/50 flex items-center justify-center text-zinc-400 text-xs cursor-pointer hover:bg-zinc-700 transition">
                        📹
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-zinc-200 bg-white py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Start a conversation</p>
          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Have an idea?<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Let&apos;s build it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Tell us what you are building and what you need. We will help you find the right technology and development approach for your project.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://api.whatsapp.com/send?phone=919693427671&text=Hello%20VivekM%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="group rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <span className="mr-2">💬</span> WhatsApp Us
            </a>
            <a href="mailto:rncvivek@gmail.com?subject=Project%20Enquiry%20-%20VivekM%20Technologies" className="rounded-full border border-zinc-300 px-8 py-3.5 font-semibold transition-all hover:border-blue-600 hover:bg-blue-50">
              <span className="mr-2">✉️</span> Email Us
            </a>
          </div>
          <div className="mt-12 flex justify-center gap-8 text-sm text-zinc-500">
            <span>📞 +91 9693427671</span>
            <span>📍 Faridabad, Haryana, India</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg">VM</div>
                <div>
                  <div className="text-xl font-bold tracking-tight">VivekM Technologies</div>
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">Digital Solutions & Development</div>
                </div>
              </div>
              <p className="mt-6 max-w-md leading-7 text-zinc-400">Building modern websites, mobile applications, and software solutions that help businesses grow in the digital era.</p>
              <div className="mt-6 flex gap-4">
                <a href="https://api.whatsapp.com/send?phone=919693427671" target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-600/20 p-2.5 text-green-400 transition hover:bg-green-600 hover:text-white" aria-label="WhatsApp">💬</a>
                <a href="mailto:rncvivek@gmail.com" className="rounded-full bg-blue-600/20 p-2.5 text-blue-400 transition hover:bg-blue-600 hover:text-white" aria-label="Email">✉️</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Services</h3>
              <div className="mt-5 space-y-3 text-sm text-zinc-400">
                <button onClick={() => scrollToSection("services")} className="block hover:text-white transition text-left w-full">Web Development</button>
                <button onClick={() => scrollToSection("services")} className="block hover:text-white transition text-left w-full">Mobile App Development</button>
                <button onClick={() => scrollToSection("services")} className="block hover:text-white transition text-left w-full">UI/UX Design</button>
                <button onClick={() => scrollToSection("services")} className="block hover:text-white transition text-left w-full">E-Commerce</button>
                <button onClick={() => scrollToSection("services")} className="block hover:text-white transition text-left w-full">Backend & APIs</button>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Contact</h3>
              <div className="mt-5 space-y-3 text-sm text-zinc-400">
                <a href="mailto:rncvivek@gmail.com" className="block hover:text-white transition">rncvivek@gmail.com</a>
                <a href="https://api.whatsapp.com/send?phone=919693427671" target="_blank" rel="noopener noreferrer" className="block hover:text-white transition">+91 9693427671</a>
                <div>Faridabad, Haryana</div>
                <div>India</div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-800 pt-7 text-sm text-zinc-500">
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <span>© {new Date().getFullYear()} VivekM Technologies. All rights reserved.</span>
              <span className="text-xs tracking-widest">BUILT WITH ❤️ IN INDIA</span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING AI CHATBOT */}
      <div className="group fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {chatOpen && (
          <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300 border-b-4 border-green-500">
            <div className="p-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/80">
              <div className="flex items-center gap-3">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-sm font-semibold text-white">AI Assistant</span>
                <span className="text-[10px] text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded-full">Online</span>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-zinc-400 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-900/50">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-zinc-800/80 text-zinc-200 border border-zinc-700/50 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-zinc-800/80 border border-zinc-700/50 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce"></div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-zinc-800 bg-zinc-900/80 flex gap-2">
              <input 
                type="text" 
                placeholder="Ask me anything..." 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                className="flex-1 bg-zinc-800/50 border border-zinc-700/50 text-white rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500/50 transition-all placeholder:text-zinc-500"
              />
              <button 
                onClick={handleSendMessage}
                className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!inputText.trim()}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
          </div>
        )}

        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-2xl transition-all hover:scale-110 active:scale-95"
        >
          <span className={`absolute inset-0 rounded-full bg-green-500/30 animate-ping ${chatOpen ? 'opacity-0' : 'opacity-100'}`} />
          
          {chatOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          )}
        </button>
      </div>
    </main>
  );
}