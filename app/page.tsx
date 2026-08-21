"use client";

import { useState, useEffect } from "react";
import Link from "next/link"; 
import { Analytics } from "@vercel/analytics/next"
import { 
  SiNextdotjs, SiReact, SiFlutter, SiNodedotjs, SiAndroid, 
  SiFirebase, SiMongodb, SiMysql, SiVercel, SiFigma, SiStripe, SiTailwindcss, 
  SiPython, SiDart, SiSwift, SiKotlin, SiGooglemaps, SiApple, SiGoogleplay
} from "react-icons/si";
import { FaCloud, FaGear, FaCartShopping, FaBug, FaRocket } from "react-icons/fa6";
import { MdOutlineDesignServices, MdOutlineApi, MdShield } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

// Define Project interface
interface Project {
  category: string;
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  myRole: string;
  ios: string | null;
  android: string | null;
  status: "live" | "development";
  isFeatured: boolean;
  color: string;
  slug?: string; // Optional slug for linking
}

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hi there! 👋 I'm Vivek's AI assistant. Ask me about his work, services, or how he can help with your mobile app project!" }
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
    setSelectedProject(null); 
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
      response = "I'd be happy to discuss pricing! My rates depend on the project scope. For bug fixes and small tasks, I typically start from ₹500. For larger projects, I provide custom quotes. Could you tell me more about what you need?";
    } else if (lastUserMsg.includes("flutter") || lastUserMsg.includes("mobile") || lastUserMsg.includes("app")) {
      response = "I specialize in Flutter, iOS, and Android development! I can build new apps, fix existing ones, upgrade outdated code, or maintain production apps. What kind of help are you looking for?";
    } else if (lastUserMsg.includes("fix") || lastUserMsg.includes("bug") || lastUserMsg.includes("issue")) {
      response = "I love fixing bugs! I regularly solve Flutter build errors, Android Gradle issues, iOS/Xcode problems, CocoaPods conflicts, and more. Tell me what issue you're facing and I can help!";
    } else if (lastUserMsg.includes("hello") || lastUserMsg.includes("hi") || lastUserMsg.includes("hey")) {
      response = "Hello! 😊 Great to meet you. I'm here to help you with your mobile development needs. What project can I assist you with today?";
    } else {
      response = "That's a great question! I specialize in mobile app development with Flutter, iOS, and Android. Whether you need a new app built, an existing app fixed, or maintenance support, I'm here to help. Tell me more about what you're working on!";
    }

    setIsTyping(false);
    setChatMessages((prev) => [...prev, { role: 'ai', text: response }]);
  };

  // --- DATA: Projects ---
  const projects: Project[] = [ 
   {
  category: "Mobile Application",
  title: "eWomen Network",
  description: "A networking platform for women entrepreneurs and business owners. Connect, collaborate, and access success strategies from premier success coaches to achieve business growth and success.",
  technologies: ["Native Android", "Native iOS", "Kotlin", "Swift", "Firebase", "REST APIs"],
  features: ["Networking", "Community Building", "Success Coaching", "Event Management", "Business Resources", "Entrepreneur Support"],
  myRole: "Mobile Application Developer - Built both Android and iOS native apps, integrated Firebase backend, implemented community features and coaching modules.",
  ios: "https://apps.apple.com/in/app/ewomennetwork/id1625056796",
  android: "https://play.google.com/store/apps/details?id=com.ewomennetwork",
  status: "live",
  isFeatured: false,
  color: "from-pink-500 to-rose-500",
  slug: "ewomen-network"  // ← ADD THIS
},
    // Add this to your projects array
{
  category: "Mobile Application (In Development)",
  title: "SitterBoss",
  description: "A comprehensive babysitter booking platform connecting parents with trusted babysitters. Sitters can manage profiles, receive job requests, update availability, and track earnings seamlessly.",
  technologies: ["React Native", "Firebase", "REST APIs", "WebRTC", "Stripe"],
  features: [
    "Real-time Booking System",
    "Job Posting & Acceptance",
    "Availability Management",
    "Earnings Tracking",
    "Video Calls using Twillio and Agora",
    "Rating & Reviews",
    "Role Switching (Sitter/Parent)",
    "Push Notifications"
  ],
  myRole: "React Native Application Developer - Built the complete cross-platform app with real-time booking system, job posting, availability management, payment processing, and video call integration.",
  ios: "https://testflight.apple.com/join/RTFHr3e8",
  android: null,
  status: "development",
  isFeatured: false,
  color: "from-blue-500 to-indigo-500",
  slug: "sitterboss"
},
    {
      category: "Mobile Application",
    title: "BeneFittz",
    description: "A complete rewards and benefits platform where users earn coins through spins, referrals, and purchases. Redeem rewards at partner shops with gamified engagement.",
    technologies: ["Flutter", "Firebase", "REST APIs", "Google Maps", "QR Scanner"],
    features: ["Spin & Win", "Refer & Earn", "Leaderboard", "Hot Deals", "Shop Discovery", "Coin System", "Membership Plans", "Notifications", "Savings Tracker"],
    myRole: "Flutter Application Developer - Built the complete cross-platform app with gamification features, spin wheel, referral system, shop discovery, and real-time notifications.",
    ios: "https://apps.apple.com/in/app/benefittz/id6746153320",
    android: "https://play.google.com/store/apps/details?id=com.benefitt.app",
    status: "live",
    isFeatured: true,
    color: "from-amber-500 to-orange-500",
    slug: "benefittz" // Add slug for linking
    },
    // Add this to your projects array
{
  category: "Mobile Application",
  title: "Green Vision Cleansing",
  description: "An employee time-tracking and workforce management app for cleaning businesses to manage worker shifts, locations, and attendance effectively.",
  technologies: ["Swift", "iOS", "Core Location", "Firebase", "REST APIs", "MapKit"],
  features: [
    "Location Tracking & GPS Verification",
    "Clock In/Out with Time Tracking",
    "Task Management & Assignment",
    "Real-time Employee Sync",
    "Payment Processing & Invoices",
    "Chat System",
    "Announcements & Updates",
    "Profile Management"
  ],
  myRole: "iOS Application Developer - Built the complete iOS native app with Swift, implementing location tracking, task management, payment processing, and real-time workforce management features.",
  ios: "https://apps.apple.com/in/app/green-vision-cleansing2-0/id6479843416",
  android: "https://play.google.com/store/apps/details?id=com.green.greencleansing",
  status: "live",
  isFeatured: true,
  color: "from-green-500 to-emerald-500",
  slug: "green-vision-cleansing"
},
    // Add this to your projects array
{
  category: "Smart Management Application",
  title: "GateNest",
  description: "A smart apartment guest management system allowing societies to digitally register visitors, manage security logs, track guest history, and ensure resident safety with real-time notifications.",
  technologies: ["Flutter", "Firebase Firestore", "Firebase Storage", "FCM", "Firebase Auth", "QR Code"],
  features: [
    "Guest Registration & Management",
    "Digital Visitor Pass (QR Code)",
    "Guest History (All/Pending/Accepted/Rejected/Completed)",
    "Real-time Push Notifications",
    "Role-based Authentication (Owner/Gatekeeper/Resident)",
    "Phone Number Linking",
    "Secure & Verified Entry",
    "Audit Trail & Security Logs"
  ],
  myRole: "Flutter Application Developer & Firebase Backend Engineer - Built the complete Flutter app, designed Firebase Firestore database, integrated Firebase Storage, and implemented push notifications with Firebase Cloud Messaging.",
  ios: null,
  android: "https://play.google.com/store/apps/details?id=com.gate.nest",
  status: "development",
  isFeatured: false,
  color: "from-purple-500 to-violet-500",
  slug: "gatenest"
},
  
{
  category: "Kids Application",
  title: "Kids FunZone",
  description: "An interactive and educational mobile app for children to learn through fun games, puzzles, and engaging activities. Earn points, unlock cartoons, and progress through levels.",
  technologies: ["Flutter", "Local Storage", "Animations", "Audio", "Video Player", "AdMob"],
  features: [
    "Educational Games (Math, Colors, Animals, Puzzles)",
    "Points & Unlock System",
    "Cartoon Library (Shinchan, Doraemon, Motu Patlu, Chhota Bheem)",
    "Progress Tracking",
    "Rewarded Ads",
    "Daily Limits for Safe Screen Time"
  ],
  myRole: "Flutter Application Developer - Built the complete app with 6 educational games, points system, unlockable content, and kid-friendly UI.",
  ios: null,
  android: "https://play.google.com/store/apps/details?id=com.kids.world",
  status: "development",
  isFeatured: true,
  color: "from-cyan-500 to-blue-500",
  slug: "kids-funzone"
},
  ];

  // --- DATA: Services ---
  const services = [
    { 
      icon: <SiFlutter className="text-3xl text-blue-500" />, 
      title: "Flutter Development", 
      desc: "Build cross-platform Android and iOS apps from a single codebase with beautiful, native-like experiences." 
    },
    { 
      icon: <SiAndroid className="text-3xl text-green-500" />, 
      title: "Android Development", 
      desc: "Native Android apps, WebView applications, Google Play submissions, and troubleshooting." 
    },
    { 
      icon: <SiSwift className="text-3xl text-orange-500" />, 
      title: "iOS Development", 
      desc: "Swift/UIKit development, Xcode troubleshooting, TestFlight testing, and App Store deployment." 
    },
    { 
      icon: <FaBug className="text-3xl text-red-500" />, 
      title: "Fix & Upgrade Existing Apps", 
      desc: "Flutter build errors, Android Gradle issues, iOS/Xcode problems, CocoaPods, dependency upgrades, and crash fixes." 
    },
    { 
      icon: <MdOutlineApi className="text-3xl text-purple-500" />, 
      title: "API & Firebase Integration", 
      desc: "REST APIs, Firebase (Auth, Firestore, Storage, FCM), Google Maps, WebView, and third-party services." 
    },
    { 
      icon: <FaRocket className="text-3xl text-indigo-500" />, 
      title: "App Maintenance & Support", 
      desc: "Bug fixes, new features, SDK upgrades, performance optimization, and regular store releases." 
    },
  ];

  // --- DATA: Pricing ---
  const pricingData = [
    { service: "Bug Fixes", price: "₹500+", icon: <FaBug className="text-red-500" /> },
    { service: "UI Changes", price: "₹1,000+", icon: <MdOutlineDesignServices className="text-purple-500" /> },
    { service: "API Integration", price: "₹2,000+", icon: <MdOutlineApi className="text-blue-500" /> },
    { service: "Flutter Features", price: "₹3,000+", icon: <SiFlutter className="text-cyan-500" /> },
    { service: "Google Maps / Location", price: "₹3,000+", icon: <SiGooglemaps className="text-green-500" /> },
    { service: "App Maintenance", price: "₹5,000/month", icon: <MdShield className="text-indigo-500" /> },
  ];

  const skills = ["Flutter", "Dart", "Swift", "Kotlin/Java", "Firebase", "REST APIs", "Google Maps", "iOS", "Android", "React Native"];

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
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg">V</div>
            <div>
              <div className="text-xl font-bold tracking-tight text-zinc-900">Vivek Kumar</div>
              <div className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">Mobile Developer</div>
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

          <div className="flex items-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20found%20your%20portfolio%20and%20I'm%20looking%20for%20help%20with%20a%20mobile%20app%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl md:block"
            >
              Hire Me
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-zinc-200 px-3 py-2 transition hover:bg-zinc-50 md:hidden" aria-label="Open menu">
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-zinc-200 bg-white px-6 py-5 shadow-lg md:hidden">
            <div className="flex flex-col gap-4">
              <button onClick={() => { setMenuOpen(false); scrollToSection("hire"); }} className="text-left text-base font-medium text-zinc-600 transition hover:text-blue-600">Hire Me</button>
              <button onClick={() => { setMenuOpen(false); scrollToSection("services"); }} className="text-left text-base font-medium text-zinc-600 transition hover:text-blue-600">Services</button>
              <button onClick={() => { setMenuOpen(false); scrollToSection("projects"); }} className="text-left text-base font-medium text-zinc-600 transition hover:text-blue-600">Projects</button>
              <button onClick={() => { setMenuOpen(false); scrollToSection("about"); }} className="text-left text-base font-medium text-zinc-600 transition hover:text-blue-600">About</button>
              <a 
                href="https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20found%20your%20portfolio%20and%20I'm%20looking%20for%20help%20with%20a%20mobile%20app%20project." 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-center font-semibold text-white shadow-lg"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO - Freelance Focus */}
      <section className="relative min-h-screen overflow-hidden pt-24 animate-on-scroll">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_20%,rgba(37,99,235,0.12),transparent_50%),radial-gradient(ellipse_at_30%_80%,rgba(99,102,241,0.06),transparent_50%)]" />
        <div className="absolute right-0 top-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] -translate-x-1/4 translate-y-1/4 rounded-full bg-purple-500/5 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-blue-200 bg-blue-50/80 px-5 py-2.5 text-sm font-medium shadow-sm backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-blue-700">Available for Freelance Projects</span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Need a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mobile Developer</span>?
            </h1>

            <p className="mt-6 text-2xl font-semibold text-zinc-800">
              I build, fix and maintain Flutter, iOS and Android applications.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
              Specializing in cross-platform and native mobile development. From new apps to bug fixes and maintenance — I&apos;ve got you covered.
            </p>

            {/* Core Skills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Flutter", "iOS", "Android", "React Native", "Firebase", "REST APIs", "Google Maps"].map((skill) => (
                <span key={skill} className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 border border-zinc-200">
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a 
                href="https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20found%20your%20portfolio%20and%20I'm%20looking%20for%20help%20with%20a%20mobile%20app%20project." 
                target="_blank" 
                rel="noopener noreferrer"
                className="group rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Hire Me <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
              </a>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="rounded-full border border-zinc-300 px-8 py-3.5 text-center font-semibold transition-all hover:border-blue-600 hover:bg-blue-50"
              >
                View My Work
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-zinc-200 pt-7">
              {[
                { label: "Apps Built", value: "10+" },
                { label: "Platforms", value: "iOS & Android" },
                { label: "Experience", value: "6+ Years" },
                { label: "Available", value: "Now" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-bold text-blue-600">{item.value}</div>
                  <div className="text-sm text-zinc-500">{item.label}</div>
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
                    <span className="text-xs font-semibold text-blue-400">MOBILE DEVELOPER</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                      <div className="mb-10 text-sm font-medium text-zinc-500">BUILD</div>
                      <div className="text-2xl font-bold text-white">New<br /><span className="text-blue-400">Apps</span></div>
                    </div>
                    <div className="rounded-2xl bg-blue-600/20 p-6 backdrop-blur">
                      <div className="mb-10 text-sm text-zinc-400">FIX</div>
                      <div className="text-2xl font-bold text-white">Bugs<br /><span className="text-blue-400">+ Issues</span></div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-zinc-800 p-6">
                    <div className="mb-3 text-sm text-zinc-500">MY PROCESS</div>
                    <div className="flex items-center justify-between text-sm text-zinc-300">
                      <span className="text-white">Discuss</span><span className="text-blue-400">→</span>
                      <span className="text-white">Plan</span><span className="text-blue-400">→</span>
                      <span className="text-white">Build</span><span className="text-blue-400">→</span>
                      <span className="text-white">Deliver</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Built for</div>
                <div className="mt-1 font-bold text-zinc-900">Startups & Businesses</div>
              </div>
              <div className="absolute -right-5 -top-5 rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Available for</div>
                <div className="mt-1 font-bold text-zinc-900">Freelance Work</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIRE ME SECTION - PROMINENT */}
      <section id="hire" className="py-20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Need a Mobile App Developer?
          </h2>
          <p className="mt-4 text-xl text-white/80">
            I build, fix and maintain Flutter, iOS and Android applications.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href="https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20found%20your%20portfolio%20and%20I'm%20looking%20for%20help%20with%20a%20mobile%20app%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="group rounded-full bg-white px-10 py-4 font-semibold text-blue-600 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
            >
              Hire Me <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <button 
              onClick={() => scrollToSection("projects")} 
              className="rounded-full border-2 border-white px-10 py-4 font-semibold text-white transition-all hover:bg-white/10"
            >
              View My Work
            </button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {skills.slice(0, 6).map((skill) => (
              <span key={skill} className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES - Mobile Focus */}
      <section id="services" className="py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">What I Do</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Mobile Development<br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              From building new apps to fixing existing ones — I help with every stage of mobile development.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="group relative rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden border border-zinc-100">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                <div className="relative z-10">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold group-hover:text-blue-600">{service.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIX & UPGRADE - Highlighted Service */}
      <section className="py-20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-red-700 mb-4">
            <FaBug className="text-red-500" /> Highly Requested Service
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Fix & Upgrade Existing Apps
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-zinc-700">
            Already have an app but facing bugs, build errors, outdated dependencies or store submission issues? 
            I can help troubleshoot, fix and upgrade your existing Flutter, Android or iOS application.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Flutter Build Errors", "Android Gradle Issues", "iOS/Xcode Problems", "CocoaPods Conflicts", "WebView Issues", "Google Maps Integration", "Firebase Setup", "API Integration", "App Store Issues", "Play Store Issues"].map((issue) => (
              <span key={issue} className="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 shadow-sm border border-zinc-200">
                {issue}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <a 
              href="https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20have%20an%20existing%20app%20that%20needs%20fixing/upgrading." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Need Help With Your App? → 
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
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
                <div className="flex justify-center text-3xl mb-2">{item.icon}</div>
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

      {/* PROJECTS */}
      <section id="projects" className="bg-zinc-950 py-24 text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">My Portfolio</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Mobile Apps I&apos;ve<br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Built & Shipped</span>
              </h2>
            </div>
            <p className="max-w-md text-zinc-400">
              Each project showcases my ability to deliver practical, working solutions across Flutter, iOS, and Android.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {projects.filter(p => p.isFeatured).map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-zinc-900 to-zinc-950 transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className={`relative flex h-64 items-end bg-gradient-to-br ${project.color} via-zinc-900 to-zinc-950 p-8`}>
                  <div className="absolute right-4 top-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold border ${project.status === 'live' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}`}>
                      {project.status === 'live' ? '🌟 Live on Stores' : '🚧 In Development'}
                    </span>
                  </div>
                  <div>
                    <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/60">{project.category}</div>
                    <div className="text-3xl font-bold text-white">{project.title}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-lg leading-7 text-zinc-300">{project.description}</p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400 border border-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-zinc-800">
                    <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-3">Key Features</p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span key={feature} className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 border border-blue-500/20">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.android && (
                      <a href={project.android} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-500" onClick={(e) => e.stopPropagation()}>
                        <SiGoogleplay className="text-lg" /> Google Play
                      </a>
                    )}
                    {project.ios && (
                      <a href={project.ios} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-zinc-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-600" onClick={(e) => e.stopPropagation()}>
                        <SiApple className="text-lg" /> {project.status === 'development' ? 'TestFlight' : 'App Store'}
                      </a>
                    )}
                  </div>
                  {/* <button className="mt-4 text-sm text-blue-400 hover:text-blue-300" onClick={() => setSelectedProject(project)}>
                    View Details →
                  </button> */}
                 <Link 
  href={`/projects/${project.slug || project.title.toLowerCase().replace(/\s+/g, '-')}`}
  className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300"
>
  View Case Study →
</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.filter(p => !p.isFeatured).map((project) => (
              <div key={project.title} className="group overflow-hidden rounded-3xl border border-zinc-800 transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer" onClick={() => setSelectedProject(project)}>
                <div className={`relative flex h-48 items-end bg-gradient-to-br ${project.color} via-zinc-900 to-black p-6`}>
                  <div>
                    <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/60">{project.category}</div>
                    <div className="text-xl font-bold text-white">{project.title}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-sm leading-6 text-zinc-400">{project.description}</p>
                  
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-500 border border-zinc-700">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-[10px] font-medium text-zinc-500 border border-zinc-700">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-zinc-800 flex flex-wrap gap-2">
                    {project.android && (
                      <a href={project.android} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-green-600/20 px-3 py-1 text-xs font-medium text-green-400 transition hover:bg-green-600 hover:text-white" onClick={(e) => e.stopPropagation()}>
                        <SiGoogleplay className="text-sm" /> Play Store
                      </a>
                    )}
                    {project.ios && (
                      <a href={project.ios} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-zinc-700/50 px-3 py-1 text-xs font-medium text-zinc-400 transition hover:bg-zinc-700 hover:text-white" onClick={(e) => e.stopPropagation()}>
                        <SiApple className="text-sm" /> {project.status === 'development' ? 'TestFlight' : 'App Store'}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6" onClick={() => setSelectedProject(null)}>
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-zinc-900 shadow-2xl border border-zinc-700" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 rounded-full bg-zinc-800 p-2 text-zinc-400 transition hover:bg-zinc-700 hover:text-white z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div className={`h-2 w-full bg-gradient-to-r ${selectedProject.color}`} />
            
            <div className="p-8 sm:p-10">
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-sm font-medium text-blue-400">{selectedProject.category}</span>
                  <h2 className="mt-1 text-3xl font-bold text-white">{selectedProject.title}</h2>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${selectedProject.status === 'live' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {selectedProject.status === 'live' ? '✅ Live' : '🚧 In Development'}
                </span>
              </div>

              <p className="mt-4 text-lg leading-7 text-zinc-300">{selectedProject.description}</p>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">My Role</h3>
                <p className="mt-2 text-zinc-300">{selectedProject.myRole}</p>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Technologies</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech: string) => (
  <span key={tech} className="rounded-full bg-zinc-800 px-3 py-1 text-sm font-medium text-zinc-300 border border-zinc-700">
    {tech}
  </span>
))}
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Key Features</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedProject.features.map((feature: string) => (
  <span key={feature} className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 border border-blue-500/20">
    {feature}
  </span>
))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                {selectedProject.android && (
                  <a href={selectedProject.android} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500">
                    <SiGoogleplay className="text-lg" /> Google Play
                  </a>
                )}
                {selectedProject.ios && (
                  <a href={selectedProject.ios} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-zinc-700 px-6 py-3 font-semibold text-white transition hover:bg-zinc-600">
                    <SiApple className="text-lg" /> {selectedProject.status === 'development' ? 'TestFlight' : 'App Store'}
                  </a>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800">
                <a 
                 href={`https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20saw%20your%20project%20'${selectedProject.title}'%20and%20I'd%20like%20to%20discuss%20a%20similar%20project.`}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  Interested in a similar project? Let&apos;s talk →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

     {/* ABOUT - With Experience & Education */}
<section id="about" className="py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 bg-white">
  <div className="mx-auto max-w-6xl px-6 lg:px-8">
    <div className="text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">About Me</p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vivek</span>
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
        Mobile application developer with 6.5+ years of expertise in building scalable iOS and cross-platform 
        solutions using Swift, Dart, and Flutter. Experienced in designing and delivering production-ready 
        applications across the full mobile development lifecycle.
      </p>
    </div>

    {/* Experience */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-zinc-800 mb-8 flex items-center gap-3">
        <span className="text-3xl">💼</span> Work Experience
      </h3>
      <div className="space-y-8">
        {/* Experience 1 */}
        <div className="rounded-2xl bg-zinc-50 p-8 border border-zinc-100 transition-all hover:shadow-md">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <h4 className="text-xl font-bold text-zinc-800">iOS & Flutter Developer</h4>
              <p className="text-blue-600 font-semibold">Bizhawkz IT Solutions Pvt. Ltd.</p>
            </div>
            <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              02/2022 - Present
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-zinc-600 text-sm leading-7 list-disc list-inside">
            <li>Collaborated with cross-functional teams to define product requirements and deliver high-quality iOS features.</li>
            <li>Designed, developed, and maintained scalable Swift-based applications using UIKit, Xcode, and MVC architecture.</li>
            <li>Built modular and reusable components using protocol-delegate patterns and Notification Center.</li>
            <li>Integrated RESTful APIs, JSON parsing/decoding, and third-party SDKs to enhance functionality.</li>
            <li>Improved application performance through debugging, profiling, and multithreading.</li>
            <li>Conducted code reviews and enforced clean architecture principles for maintainability.</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="rounded-2xl bg-zinc-50 p-8 border border-zinc-100 transition-all hover:shadow-md">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <h4 className="text-xl font-bold text-zinc-800">iOS & Unity Developer</h4>
              <p className="text-blue-600 font-semibold">Ettelligens Technologies Pvt. Ltd.</p>
            </div>
            <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              10/2020 - 01/2022
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-zinc-600 text-sm leading-7 list-disc list-inside">
            <li>Developed immersive 2D and 3D game experiences using Unity engine and C#.</li>
            <li>Designed game architecture including scene management, physics systems, and animation pipelines.</li>
            <li>Built interactive UI systems with scoring, timers, and gameplay controls.</li>
            <li>Optimized game performance through memory management and physics tuning.</li>
            <li>Integrated assets, terrain systems, and environmental elements for dynamic gameplay.</li>
          </ul>
        </div>

        {/* Experience 3 */}
        <div className="rounded-2xl bg-zinc-50 p-8 border border-zinc-100 transition-all hover:shadow-md">
          <div className="flex flex-wrap justify-between items-start gap-4">
            <div>
              <h4 className="text-xl font-bold text-zinc-800">iOS Developer</h4>
              <p className="text-blue-600 font-semibold">Roadcast</p>
            </div>
            <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
              07/2019 - 08/2020
            </span>
          </div>
          <ul className="mt-4 space-y-2 text-zinc-600 text-sm leading-7 list-disc list-inside">
            <li>Developed and maintained scalable iOS applications using Swift, UIKit, Cocoa Touch, and Core Location.</li>
            <li>Delivered new features aligned with product roadmap using Agile methodologies.</li>
            <li>Debugged and optimized application performance, resolving memory leaks and UI lag.</li>
            <li>Collaborated within cross-functional Agile teams for App Store-ready applications.</li>
            <li>Managed version control using Git with branching strategies and merge conflict resolution.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Education */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-zinc-800 mb-8 flex items-center gap-3">
        <span className="text-3xl">🎓</span> Education
      </h3>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8 border border-blue-100">
          <h4 className="text-xl font-bold text-zinc-800">MCA - Computers</h4>
          <p className="text-blue-600 font-semibold">REVA Institute of Technology and Management</p>
          <p className="text-sm text-zinc-500 mt-1">Bangalore | 2019</p>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 p-8 border border-purple-100">
          <h4 className="text-xl font-bold text-zinc-800">BCA - Computers</h4>
          <p className="text-purple-600 font-semibold">Ranchi University</p>
          <p className="text-sm text-zinc-500 mt-1">Ranchi | 2016</p>
        </div>
      </div>
    </div>

    {/* Core Competencies */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-3">
        <span className="text-3xl">⚡</span> Core Competencies
      </h3>
      <div className="flex flex-wrap gap-3">
        {[
          "Mobile Application Development",
          "iOS Development",
          "Flutter Development",
          "API Integration (REST/JSON)",
          "UI/UX Development",
          "Payment Gateway Integration",
          "Cross-Platform Development",
          "Application Architecture (MVC)",
          "Performance Optimization"
        ].map((skill) => (
          <span key={skill} className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700 border border-zinc-200">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Technical Skills */}
    <div className="mt-8">
      <h3 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-3">
        <span className="text-3xl">🛠️</span> Technical Skills
      </h3>
      <div className="flex flex-wrap gap-2">
        {[
          "Swift", "Cocoa Touch", "iOS", "Xcode", "Interface Builder",
          "Flutter", "Dart", "Firebase", "Git", "JSON", "Google APIs",
          "HTML", "CSS", "C#", "Android Studio", "REST APIs"
        ].map((skill) => (
          <span key={skill} className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 border border-blue-200">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Projects Undertaken */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-zinc-800 mb-6 flex items-center gap-3">
        <span className="text-3xl">📁</span> Projects Undertaken
      </h3>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl bg-green-50 p-6 border border-green-100">
          <h4 className="font-bold text-zinc-800">Smart Garden Monitoring</h4>
          <p className="text-sm text-zinc-600 mt-2">Automated irrigation system with Raspberry Pi, sensors, and relay control.</p>
          <span className="inline-block mt-3 text-xs text-green-600 font-medium bg-green-200 px-2 py-0.5 rounded">31 Days</span>
        </div>
        <div className="rounded-xl bg-orange-50 p-6 border border-orange-100">
          <h4 className="font-bold text-zinc-800">Smart Locking System</h4>
          <p className="text-sm text-zinc-600 mt-2">Home security solution with fingerprint sensor and Raspberry Pi integration.</p>
          <span className="inline-block mt-3 text-xs text-orange-600 font-medium bg-orange-200 px-2 py-0.5 rounded">31 Days</span>
        </div>
        <div className="rounded-xl bg-purple-50 p-6 border border-purple-100">
          <h4 className="font-bold text-zinc-800">Medical Inventory Management</h4>
          <p className="text-sm text-zinc-600 mt-2">Software for medical vendors to manage inventory, track expenses, and generate bills.</p>
          <span className="inline-block mt-3 text-xs text-purple-600 font-medium bg-purple-200 px-2 py-0.5 rounded">396 Days</span>
        </div>
      </div>
    </div>

    {/* Certifications */}
    <div className="mt-10 text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 px-6 py-2">
        <span className="text-lg">🏅</span>
        <span className="text-sm font-medium text-yellow-800">iOS, Swift & Flutter Certification</span>
      </div>
    </div>

    <div className="mt-10 text-center">
      <a 
        href="https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project." 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
      >
        Let&apos;s Build Something Together →
      </a>
    </div>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-zinc-200 bg-white py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Start a conversation</p>
          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Have a project?<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Let&apos;s build it.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Tell me what you&apos;re building and what you need. I&apos;ll help you find the right approach for your mobile app project.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" className="group rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              <span className="mr-2">💬</span> WhatsApp Me
            </a>
            <a href="mailto:rncvivek@gmail.com?subject=Project%20Enquiry" className="rounded-full border border-zinc-300 px-8 py-3.5 font-semibold transition-all hover:border-blue-600 hover:bg-blue-50">
              <span className="mr-2">✉️</span> Email Me
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
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg">V</div>
                <div>
                  <div className="text-xl font-bold tracking-tight">Vivek Kumar</div>
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">Mobile Developer</div>
                </div>
              </div>
              <p className="mt-4 max-w-md leading-7 text-zinc-400">
                Building modern mobile applications with Flutter, iOS and Android. Available for freelance projects.
              </p>
              <div className="mt-6 flex gap-4">
                <a href="https://api.whatsapp.com/send?phone=919693427671" target="_blank" rel="noopener noreferrer" className="rounded-full bg-green-600/20 p-2.5 text-green-400 transition hover:bg-green-600 hover:text-white" aria-label="WhatsApp">💬</a>
                <a href="mailto:rncvivek@gmail.com" className="rounded-full bg-blue-600/20 p-2.5 text-blue-400 transition hover:bg-blue-600 hover:text-white" aria-label="Email">✉️</a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Services</h3>
              <div className="mt-5 space-y-3 text-sm text-zinc-400">
                <button onClick={() => scrollToSection("services")} className="block hover:text-white transition text-left w-full">Flutter Development</button>
                <button onClick={() => scrollToSection("services")} className="block hover:text-white transition text-left w-full">iOS Development</button>
                <button onClick={() => scrollToSection("services")} className="block hover:text-white transition text-left w-full">Android Development</button>
                <button onClick={() => scrollToSection("services")} className="block hover:text-white transition text-left w-full">Fix & Upgrade Apps</button>
                <button onClick={() => scrollToSection("services")} className="block hover:text-white transition text-left w-full">App Maintenance</button>
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
              <span>© {new Date().getFullYear()} Vivek Kumar. All rights reserved.</span>
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
                <span className="text-sm font-semibold text-white">Vivek&apos;s AI Assistant</span>
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