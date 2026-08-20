"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  SiNextdotjs, SiReact, SiFlutter, SiNodedotjs, SiAndroid, 
  SiFirebase, SiMongodb, SiMysql, SiVercel, SiFigma, SiStripe, SiTailwindcss, 
  SiPython, SiDart, SiSwift, SiKotlin, SiGooglemaps, SiApple, SiGoogleplay
} from "react-icons/si";
import { FaArrowLeft, FaRocket, FaBug, FaShieldAlt, FaTrophy, FaGift, FaShareAlt, FaStore, FaUserFriends } from "react-icons/fa";
import { MdQrCodeScanner, MdNotifications, MdSavings, MdDashboard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

// ============================================
// TYPE DEFINITIONS
// ============================================

interface Technology {
  name: string;
  icon: React.ElementType;
  color: string;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Challenge {
  title: string;
  description: string;
}

interface SolutionStep {
  title: string;
  description: string;
}

interface Screenshot {
  src: string;
  alt: string;
}

interface StoreLinks {
  android: string | null;
  ios: string | null;
}

interface ProjectData {
  slug: string;
  title: string;
  category: string;
  status: string;
  overview: string;
  myRole: string;
  technologies: Technology[];
  features: Feature[];
  challenges: Challenge[];
  solution: {
    title: string;
    description: string;
    steps: SolutionStep[];
  };
  results: string[];
  screenshots: Screenshot[];
  storeLinks: StoreLinks;
  color: string;
  version?: string;
}

// ============================================
// PROJECT DATA
// ============================================

const benefittzData: ProjectData = {
  slug: "benefittz",
  title: "BeneFittz",
  category: "Mobile Application",
  status: "Live on Stores",
  overview: "A comprehensive rewards and benefits platform where users can earn coins through various activities, spin to win rewards, refer friends, and redeem offers at partner shops.",
  screenshots: [
    { src: "/images/benefittz/home.jpeg", alt: "Home Screen with coin balance and categories" },
    { src: "/images/benefittz/spin.jpeg", alt: "Spin & Win wheel with coin rewards" },
    { src: "/images/benefittz/refer.jpeg", alt: "Refer & Earn with referral code" },
    { src: "/images/benefittz/shops.jpeg", alt: "Shop listings with discounts" },
    { src: "/images/benefittz/profile.jpeg", alt: "User profile with coin balance" },
    { src: "/images/benefittz/leaderboard.jpeg", alt: "Leaderboard with top earners" },
  ],
  myRole: "Flutter Application Developer - Built the complete cross-platform mobile application from scratch, implementing gamification features, real-time notifications, payment integration, and shop discovery.",
  technologies: [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Google Maps", icon: SiGooglemaps, color: "#3DDC84" },
    { name: "REST APIs", icon: BiSupport, color: "#6B7280" },
    { name: "Android", icon: SiAndroid, color: "#3DDC84" },
    { name: "iOS", icon: SiApple, color: "#A2AAAD" },
  ],
  features: [
    { icon: <FaGift className="text-2xl" />, title: "Coin System", description: "Earn coins through daily visits, spins, referrals, and purchases" },
    { icon: <FaTrophy className="text-2xl" />, title: "Spin & Win", description: "Lucky wheel game where users spin to win coin rewards" },
    { icon: <FaShareAlt className="text-2xl" />, title: "Refer & Earn", description: "Unique referral codes to invite friends and earn rewards" },
    { icon: <FaStore className="text-2xl" />, title: "Hot Deals", description: "Curated list of nearby shops with special discounts and offers" },
    { icon: <MdDashboard className="text-2xl" />, title: "Shop Discovery", description: "Search and browse shops by categories with ratings and distance" },
    { icon: <FaUserFriends className="text-2xl" />, title: "Leaderboard", description: "Weekly, Monthly, and Yearly rankings based on coin earnings" },
    { icon: <MdSavings className="text-2xl" />, title: "Savings Tracker", description: "Track total savings and rewards earned" },
    { icon: <MdNotifications className="text-2xl" />, title: "Notifications", description: "Real-time alerts for new deals, offers, and updates" },
    { icon: <MdQrCodeScanner className="text-2xl" />, title: "Scan History", description: "QR code scanning history for in-store redemptions" },
  ],
  challenges: [
    { title: "Gamification Engine", description: "Building a robust coin earning and reward system that keeps users engaged." },
    { title: "Spin & Win Logic", description: "Creating a fair and engaging wheel spin algorithm." },
    { title: "Referral System", description: "Tracking referrals and rewarding users accurately while preventing fraud." },
    { title: "Location-Based Services", description: "Finding nearby shops and deals with accurate location data." },
    { title: "Real-time Updates", description: "Delivering live notifications for new deals and offers." },
    { title: "Payment Integration", description: "Integrating secure payment gateways for membership plans." },
  ],
  solution: {
    title: "Comprehensive Mobile Solution",
    description: "Built with Flutter for seamless cross-platform experience, integrated Firebase for real-time data and authentication.",
    steps: [
      { title: "Cross-Platform Development", description: "Used Flutter to build a single codebase that runs perfectly on both iOS and Android." },
      { title: "Real-Time Data", description: "Integrated Firebase Firestore for real-time data synchronization." },
      { title: "Engaging UI/UX", description: "Designed intuitive, gamified interfaces that encourage daily engagement." },
      { title: "Location Integration", description: "Implemented Google Maps API and geolocation services." },
      { title: "Secure Payments", description: "Integrated Razorpay/Stripe for seamless membership purchases." },
    ]
  },
  results: [
    "✅ Live on both Google Play and App Store",
    "✅ 2100+ coins earned by active users",
    "✅ Growing user base with daily active users",
    "✅ Partnership with multiple local businesses",
    "✅ Positive ratings and reviews from users",
  ],
  storeLinks: {
    android: "https://play.google.com/store/apps/details?id=com.benefitt.app",
    ios: "https://apps.apple.com/in/app/benefittz/id6746153320",
  },
  color: "from-amber-500 to-orange-500",
};

// KIDS FUNZONE
const kidsFunZoneData: ProjectData = {
  slug: "kids-funzone",
  title: "Kids FunZone",
  category: "Kids Educational Application",
  status: "Available on Google Play",
  version: "1.0.0",
  overview: "Kids FunZone is an interactive educational app designed to make learning fun for children with 6 educational games and a reward-based unlock system.",
  myRole: "Flutter Application Developer - Built the complete cross-platform educational app from scratch.",
  technologies: [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Local Storage", icon: BiSupport, color: "#6B7280" },
    { name: "Audio Player", icon: BiSupport, color: "#FFCA28" },
    { name: "Video Player", icon: BiSupport, color: "#3DDC84" },
    { name: "AdMob", icon: BiSupport, color: "#6B7280" },
    { name: "Custom Animations", icon: BiSupport, color: "#FF6B6B" },
  ],
  features: [
    { icon: <FaTrophy className="text-2xl" />, title: "Points System", description: "Earn points by playing games and daily visits." },
    { icon: <FaGift className="text-2xl" />, title: "Unlock System", description: "Use points or watch ads to unlock new cartoons." },
    { icon: <FaUserFriends className="text-2xl" />, title: "6 Educational Games", description: "Math Fun, Color Match, Animal Sounds, Balloon Pop, Shape Sorting, Memory Game." },
    { icon: <MdDashboard className="text-2xl" />, title: "Cartoon Library", description: "Shinchan, Doraemon, Motu Patlu, Chhota Bheem." },
    { icon: <MdNotifications className="text-2xl" />, title: "Progress Tracking", description: "Visual progress bars showing completion status." },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Safe for Kids", description: "Daily limits for healthy screen time." },
  ],
  screenshots: [
    { src: "/images/kids-funzone/menu.jpeg", alt: "Menu Screen - Cartoons collection" },
    { src: "/images/kids-funzone/games.jpeg", alt: "Games Dashboard - 6 educational games" },
    { src: "/images/kids-funzone/animal-land.jpeg", alt: "Animal Sound Game - Land Animals" },
    { src: "/images/kids-funzone/animal-water.jpeg", alt: "Animal Sound Game - Water Animals" },
    { src: "/images/kids-funzone/unlock.jpeg", alt: "Cartoon Unlock - Progress bars" },
    { src: "/images/kids-funzone/video.jpeg", alt: "Video Player - Unlock videos" },
  ],
  challenges: [
    { title: "Child-Friendly UI Design", description: "Creating a colorful, intuitive interface for children." },
    { title: "Game Development", description: "Building 6 different educational games with unique mechanics." },
    { title: "Gamification Engine", description: "Developing a motivating points and unlock system." },
    { title: "Content Management", description: "Organizing cartoon content and unlock conditions." },
    { title: "Audio Integration", description: "Adding animal sounds and game effects." },
    { title: "Screen Time Management", description: "Implementing daily limits and parent controls." },
  ],
  solution: {
    title: "Interactive Learning Solution",
    description: "Built with Flutter to deliver a colorful, engaging, and educational experience.",
    steps: [
      { title: "Kid-Friendly Design", description: "Used bright colors, large touch targets, and simple navigation." },
      { title: "6 Educational Games", description: "Developed diverse games covering math, colors, animals, and shapes." },
      { title: "Points & Unlock System", description: "Created a rewarding gamification system." },
      { title: "Offline Support", description: "Implemented local storage for offline progress tracking." },
      { title: "Safe Usage", description: "Added daily limits and parent controls." },
    ]
  },
  results: [
    "✅ Available on Google Play",
    "✅ 6 educational games for learning",
    "✅ 6 popular cartoon collections",
    "✅ Points system for motivation",
    "✅ Safe for kids with daily limits",
  ],
  storeLinks: {
    android: "https://play.google.com/store/apps/details?id=com.kids.world",
    ios: null,
  },
  color: "from-cyan-500 to-blue-500",
};

// GREEN VISION
const greenVisionData: ProjectData = {
  slug: "green-vision-cleansing",
  title: "Green Vision Cleansing",
  category: "Employee Time-Tracking & Workforce Management",
  status: "Live on App Store & Google Play",
  version: "2.1.50",
  overview: "A comprehensive workforce management app for cleaning businesses to manage worker shifts, locations, and attendance effectively.",
  myRole: "iOS Application Developer - Built the complete iOS native app using Swift.",
  technologies: [
    { name: "Swift", icon: SiSwift, color: "#F05138" },
    { name: "iOS", icon: SiApple, color: "#A2AAAD" },
    { name: "Core Location", icon: BiSupport, color: "#3DDC84" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "MapKit", icon: BiSupport, color: "#6B7280" },
    { name: "REST APIs", icon: BiSupport, color: "#6B7280" },
  ],
  features: [
    { icon: <MdDashboard className="text-2xl" />, title: "Dashboard Overview", description: "View upcoming tasks and assignments." },
    { icon: <BiSupport className="text-2xl" />, title: "Location Tracking", description: "GPS verification for work route tracking." },
    { icon: <FaBug className="text-2xl" />, title: "Task Management", description: "View all tasks with status and dates." },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Clock In/Out", description: "Time tracking with location verification." },
    { icon: <FaStore className="text-2xl" />, title: "My Cleanings", description: "Project list with payment details." },
    { icon: <MdSavings className="text-2xl" />, title: "Payment Tracking", description: "View payments and invoice generation." },
  ],
  screenshots: [
    { src: "/images/green-vision/dashboard.png", alt: "Dashboard - Upcoming tasks" },
    { src: "/images/green-vision/location.png", alt: "Location Permission - GPS tracking" },
    { src: "/images/green-vision/tasks.png", alt: "All Tasks - Filter tasks" },
    { src: "/images/green-vision/cleanings.png", alt: "My Cleanings - Projects" },
    { src: "/images/green-vision/announcements.png", alt: "Announcements" },
    { src: "/images/green-vision/profile.png", alt: "My Profile" },
  ],
  challenges: [
    { title: "Location Tracking Accuracy", description: "Implementing precise GPS tracking for work route verification." },
    { title: "Real-time Data Sync", description: "Synchronizing data in real-time across devices." },
    { title: "Offline Capability", description: "Allowing clock in/out without internet connectivity." },
    { title: "Battery Optimization", description: "Efficient location tracking without battery drain." },
    { title: "Payment Integration", description: "Automatic invoice generation and payment tracking." },
    { title: "Role-based Access", description: "Different access levels for employees and managers." },
  ],
  solution: {
    title: "Comprehensive Workforce Management",
    description: "Built with native iOS using Swift for reliable location tracking and task management.",
    steps: [
      { title: "Native iOS Development", description: "Built with Swift and UIKit for optimal performance." },
      { title: "GPS Location Tracking", description: "Core Location with geofencing for job sites." },
      { title: "Real-time Data Sync", description: "Firebase Firestore for live synchronization." },
      { title: "Task Management System", description: "Flexible task assignment with status tracking." },
      { title: "Payment & Invoicing", description: "Automatic invoice generation and payment tracking." },
    ]
  },
  results: [
    "✅ Live on App Store & Google Play",
    "✅ Used by cleaning businesses for workforce management",
    "✅ Accurate employee attendance and location tracking",
    "✅ Streamlined task assignment and payment processing",
    "✅ Version 2.1.50 with continuous improvements",
  ],
  storeLinks: {
    android: "https://play.google.com/store/apps/details?id=com.green.greencleansing",
    ios: "https://apps.apple.com/in/app/green-vision-cleansing2-0/id6479843416",
  },
  color: "from-green-500 to-emerald-500",
};

// GATENEST
const gateNestData: ProjectData = {
  slug: "gatenest",
  title: "GateNest",
  category: "Apartment Guest Management System",
  status: "Available on Google Play",
  overview: "A smart apartment guest management system for societies to register visitors, manage security logs, and track guest history.",
  myRole: "Flutter Application Developer & Firebase Backend Engineer",
  technologies: [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Firebase Firestore", icon: SiFirebase, color: "#FFCA28" },
    { name: "Firebase Storage", icon: SiFirebase, color: "#FFCA28" },
    { name: "Firebase Auth", icon: SiFirebase, color: "#FFCA28" },
    { name: "Firebase FCM", icon: SiFirebase, color: "#FFCA28" },
    { name: "QR Code", icon: BiSupport, color: "#6B7280" },
  ],
  features: [
    { icon: <MdDashboard className="text-2xl" />, title: "Dashboard", description: "Manage guest visits and recent entries." },
    { icon: <FaUserFriends className="text-2xl" />, title: "Guest Registration", description: "Register guests with complete details." },
    { icon: <FaGift className="text-2xl" />, title: "Digital Visitor Pass", description: "Generate QR code-based digital passes." },
    { icon: <MdNotifications className="text-2xl" />, title: "Guest History", description: "All/Pending/Accepted/Rejected/Completed filters." },
    { icon: <BiSupport className="text-2xl" />, title: "Real-time Tracking", description: "Live status updates with push notifications." },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Secure Authentication", description: "Email/Phone login with role-based access." },
  ],
  screenshots: [
    { src: "/images/gatenest/splash.jpeg", alt: "Splash Screen - GateNest" },
    { src: "/images/gatenest/login.jpeg", alt: "Login Screen" },
    { src: "/images/gatenest/dashboard.jpeg", alt: "Dashboard - Manage guests" },
    { src: "/images/gatenest/guest-history.jpeg", alt: "Guest History filters" },
    { src: "/images/gatenest/owner-dashboard.jpeg", alt: "Owner Dashboard" },
  ],
  challenges: [
    { title: "Database Design for Guest History", description: "Efficient Firestore structure with multiple filters." },
    { title: "Push Notifications Implementation", description: "FCM for real-time alerts to gatekeepers." },
    { title: "Role-based Access Control", description: "Different levels for Owners, Gatekeepers, and Residents." },
    { title: "QR Code Generation", description: "Secure digital visitor passes with QR codes." },
    { title: "Real-time Data Sync", description: "Instant sync across multiple devices." },
    { title: "Offline Support", description: "Guest registration without internet connectivity." },
  ],
  solution: {
    title: "Comprehensive Guest Management",
    description: "Built with Flutter and Firebase for seamless guest management.",
    steps: [
      { title: "Cross-platform Development", description: "Flutter for consistent iOS and Android experience." },
      { title: "Firebase Firestore", description: "Optimized collections with composite indexes." },
      { title: "Push Notifications", description: "FCM for real-time guest arrival alerts." },
      { title: "Digital Visitor Pass", description: "QR code generation for secure passes." },
      { title: "Role-based Authentication", description: "Custom claims for different roles." },
    ]
  },
  results: [
    "✅ Available on Google Play",
    "✅ Digital guest management for societies",
    "✅ Real-time notifications for gatekeepers",
    "✅ Complete guest history with audit trail",
    "✅ Eliminated paper-based visitor logs",
  ],
  storeLinks: {
    android: "https://play.google.com/store/apps/details?id=com.gate.nest",
    ios: null,
  },
  color: "from-purple-500 to-violet-500",
};

// SITTERBOSS
const sitterBossData: ProjectData = {
  slug: "sitterboss",
  title: "SitterBoss",
  category: "Babysitter Booking Platform",
  status: "In Development (TestFlight Available)",
  overview: "A babysitter booking platform connecting parents with trusted babysitters. Sitters manage profiles, receive job requests, and track earnings.",
  myRole: "React Native Application Developer - Built the cross-platform app with real-time booking and video calls.",
  technologies: [
    { name: "React Native", icon: SiReact, color: "#61DAFB" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "REST APIs", icon: BiSupport, color: "#6B7280" },
    { name: "WebRTC", icon: BiSupport, color: "#6B7280" },
    { name: "Stripe", icon: BiSupport, color: "#635BFF" },
    { name: "iOS", icon: SiApple, color: "#A2AAAD" },
    { name: "Android", icon: SiAndroid, color: "#3DDC84" },
  ],
  features: [
    { icon: <MdDashboard className="text-2xl" />, title: "Dashboard", description: "Schedule view and availability status." },
    { icon: <FaUserFriends className="text-2xl" />, title: "Schedule Management", description: "Weekly calendar with Blitz Visibility mode." },
    { icon: <BiSupport className="text-2xl" />, title: "Booking System", description: "All/Pending/Completed filters." },
    { icon: <FaStore className="text-2xl" />, title: "Job Posting", description: "Browse and accept sitter jobs." },
    { icon: <MdSavings className="text-2xl" />, title: "Earnings Tracking", description: "Track earnings per booking." },
    { icon: <FaGift className="text-2xl" />, title: "Ratings & Reviews", description: "Rate sitters and view ratings." },
    { icon: <MdNotifications className="text-2xl" />, title: "Notifications", description: "Real-time alerts for jobs and updates." },
    { icon: <FaBug className="text-2xl" />, title: "Video Calls", description: "Integrated video call functionality." },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Role Management", description: "Switch between Sitter and Parent roles." },
  ],
  screenshots: [
    { src: "/images/sitterboss/home.jpeg", alt: "Home Dashboard" },
    { src: "/images/sitterboss/bookings.jpeg", alt: "Bookings" },
    { src: "/images/sitterboss/jobs.jpeg", alt: "Posted Jobs" },
    { src: "/images/sitterboss/chat.jpeg", alt: "Chat Screen" },
    { src: "/images/sitterboss/account.jpeg", alt: "Account" },
  ],
  challenges: [
    { title: "Real-time Booking System", description: "Instant job posting and acceptance with live updates." },
    { title: "Availability Management", description: "Flexible availability calendar with Blitz Visibility." },
    { title: "Payment Processing", description: "Secure payment system with escrow protection." },
    { title: "Role Switching", description: "Seamless switch between sitter and parent roles." },
    { title: "Video Calls", description: "In-app video calls with WebRTC integration." },
    { title: "Location Tracking", description: "GPS integration for job location display." },
  ],
  solution: {
    title: "Comprehensive Booking Platform",
    description: "Built with React Native for cross-platform compatibility.",
    steps: [
      { title: "Cross-platform Development", description: "React Native for iOS and Android." },
      { title: "Real-time Booking", description: "Firebase Firestore for instant updates." },
      { title: "Payment Processing", description: "Stripe Connect for escrow payments." },
      { title: "Video Calls", description: "WebRTC with Video SDK." },
      { title: "Push Notifications", description: "FCM for real-time alerts." },
    ]
  },
  results: [
    "🚧 Currently in development",
    "✅ TestFlight available for iOS testing",
    "✅ Real-time booking and job posting",
    "✅ Secure payment processing with escrow",
    "✅ Role-based access for sitters and parents",
    "🔜 Ready for production release",
  ],
  storeLinks: {
    android: null,
    ios: "https://testflight.apple.com/join/RTFHr3e8",
  },
  color: "from-blue-500 to-indigo-500",
};

// E WOMEN
const eWomenData: ProjectData = {
  slug: "ewomen-network",
  title: "eWomen Network",
  category: "Mobile Application",
  status: "Live on Stores",
  overview: "A networking platform for women entrepreneurs to connect, collaborate, and access success strategies from premier success coaches.",
  myRole: "Mobile Application Developer - Built both Android and iOS native apps.",
  technologies: [
    { name: "Native Android", icon: SiAndroid, color: "#3DDC84" },
    { name: "Native iOS", icon: SiApple, color: "#A2AAAD" },
    { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    { name: "Swift", icon: SiSwift, color: "#F05138" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "REST APIs", icon: BiSupport, color: "#6B7280" },
  ],
  features: [
    { icon: <FaUserFriends className="text-2xl" />, title: "Networking", description: "Connect with women entrepreneurs." },
    { icon: <FaGift className="text-2xl" />, title: "Community Building", description: "Create interest-based groups." },
    { icon: <FaTrophy className="text-2xl" />, title: "Success Coaching", description: "Access to premier success coaches." },
    { icon: <MdDashboard className="text-2xl" />, title: "Event Management", description: "Discover and register for events." },
    { icon: <MdSavings className="text-2xl" />, title: "Business Resources", description: "Curated resources for growth." },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Entrepreneur Support", description: "Mentorship and peer support." },
  ],
  screenshots: [
    { src: "/images/ewomen/home.jpeg", alt: "Home Screen" },
    { src: "/images/ewomen/network.jpeg", alt: "Networking" },
    { src: "/images/ewomen/coaching.jpeg", alt: "Coaching" },
    { src: "/images/ewomen/events.jpeg", alt: "Events" },
    { src: "/images/ewomen/profile.jpeg", alt: "Profile" },
  ],
  challenges: [
    { title: "Two Separate Native Apps", description: "Maintaining codebases for Android and iOS." },
    { title: "Real-time Community Features", description: "Seamless networking and communication." },
    { title: "Content Management", description: "Dynamic coaching content and resources." },
    { title: "User Engagement", description: "Features that keep entrepreneurs active." },
  ],
  solution: {
    title: "Native Mobile Solution",
    description: "Built native apps with shared Firebase backend.",
    steps: [
      { title: "Native Android", description: "Kotlin with MVVM architecture." },
      { title: "Native iOS", description: "Swift with UIKit." },
      { title: "Firebase Backend", description: "Authentication, data storage, and push notifications." },
      { title: "Community Features", description: "Real-time networking and event management." },
    ]
  },
  results: [
    "✅ Live on both Google Play and App Store",
    "✅ Enables women entrepreneurs to connect globally",
    "✅ Accessible coaching resources for business growth",
  ],
  storeLinks: {
    android: "https://play.google.com/store/apps/details?id=com.ewomennetwork",
    ios: "https://apps.apple.com/in/app/ewomennetwork/id1625056796",
  },
  color: "from-pink-500 to-rose-500",
};

// ============================================
// PROJECT DATA MAP
// ============================================
const projectDataMap: Record<string, ProjectData> = {
  "benefittz": benefittzData,
  "kids-funzone": kidsFunZoneData,
  "green-vision-cleansing": greenVisionData,
  "gatenest": gateNestData,
  "sitterboss": sitterBossData,
  "ewomen-network": eWomenData, 
};

// ============================================
// GENERATE STATIC PATHS
// ============================================
export function generateStaticParams() {
  return [
    { slug: "benefittz" },
    { slug: "kids-funzone" },
    { slug: "green-vision-cleansing" },
    { slug: "gatenest" },
    { slug: "sitterboss" },
    { slug: "ewomen-network" },
  ];
}

// ============================================
// PAGE COMPONENT
// ============================================
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const project = projectDataMap[params.slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-zinc-900">404</h1>
          <p className="mt-2 text-zinc-600">Project not found</p>
          <Link href="/#projects" className="mt-4 inline-block text-blue-600 hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

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
              <div className="text-xl font-bold tracking-tight text-zinc-900">Vivek M</div>
              <div className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">Mobile Developer</div>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <a 
              href={`https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20saw%20your%20${project.title}%20project%20and%20I'd%20like%20to%20discuss%20a%20similar%20project.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl md:block"
            >
              Hire Me
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-16 animate-on-scroll">
        <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${project.color} opacity-[0.08]`} />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-600 transition-colors mb-6">
            <FaArrowLeft className="text-xs" /> Back to Portfolio
          </Link>
          
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <span className="inline-block rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-600 border border-green-500/20 mb-4">
                ✅ {project.status}
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-2 text-lg text-zinc-500">{project.category}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.storeLinks.android && (
                <a 
                  href={project.storeLinks.android} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-500"
                >
                  <SiAndroid className="text-lg" /> Google Play
                </a>
              )}
              {project.storeLinks.ios && (
                <a 
                  href={project.storeLinks.ios} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-800 px-6 py-3 font-semibold text-white transition hover:bg-zinc-700"
                >
                  <SiApple className="text-lg" /> {project.storeLinks.ios.includes('testflight') ? 'TestFlight' : 'App Store'}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-12 border-t border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Overview</h2>
            <p className="mt-4 text-xl leading-8 text-zinc-700">{project.overview}</p>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="py-12 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-6">Screenshots</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {project.screenshots.map((screenshot: { src: string; alt: string }, index: number) => (
              <div key={index} className="aspect-[9/16] rounded-xl bg-zinc-200 overflow-hidden border border-zinc-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-xs text-zinc-500">Screenshot {index + 1}</p>
                  <p className="text-[10px] text-zinc-400 mt-1">{screenshot.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-500 text-center">* Add actual screenshots to this section</p>
        </div>
      </section>

      {/* MY ROLE */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">My Role</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-zinc-700">{project.myRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="py-12 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Technologies</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech: Technology) => (
                <span key={tech.name} className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm">
                  <tech.icon className="text-lg" style={{ color: tech.color }} />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Key Features</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.features.map((feature: Feature, index: number) => (
                <div key={index} className="rounded-xl bg-zinc-50 p-5 border border-zinc-100">
                  <div className="text-blue-500 mb-2">{feature.icon}</div>
                  <h3 className="font-semibold text-zinc-800">{feature.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-12 bg-zinc-50/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Challenges</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.challenges.map((challenge: { title: string; description: string }, index: number) => (
                <div key={index} className="rounded-xl bg-white p-5 border border-zinc-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <FaBug className="text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-zinc-800">{challenge.title}</h3>
                      <p className="mt-1 text-sm text-zinc-500">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Solution</h2>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-zinc-800">{project.solution.title}</h3>
              <p className="mt-2 text-lg leading-8 text-zinc-600">{project.solution.description}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {project.solution.steps.map((step: { title: string; description: string }, index: number) => (
                  <div key={index} className="rounded-xl bg-blue-50/50 p-5 border border-blue-100">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-zinc-800">{step.title}</h4>
                        <p className="mt-1 text-sm text-zinc-500">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Results & Impact</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="rounded-xl bg-white/10 backdrop-blur p-6 border border-white/20">
                  <p className="text-lg font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Interested in a similar project?
          </h2>
          <p className="mt-4 text-lg text-zinc-600">
            Let&apos;s discuss how I can help build your mobile app idea.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a 
              href={`https://api.whatsapp.com/send?phone=919693427671&text=Hi%20Vivek%2C%20I%20saw%20your%20${project.title}%20project%20and%20I'd%20like%20to%20discuss%20a%20similar%20project.`}
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              Let&apos;s Talk →
            </a>
            <Link 
              href="/#projects"
              className="rounded-full border border-zinc-300 px-8 py-3.5 font-semibold transition-all hover:border-blue-600 hover:bg-blue-50"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <span>© {new Date().getFullYear()} Vivek M. All rights reserved.</span>
            <span className="text-xs tracking-widest">BUILT WITH ❤️ IN INDIA</span>
          </div>
        </div>
      </footer>
    </main>
  );
}