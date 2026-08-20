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

interface Game {
  name: string;
  points: string;
  status: string;
  color: string;
}

interface Cartoon {
  name: string;
  pointsRequired: number;
  progress: number;
  status: string;
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
  games?: Game[];
  cartoons?: Cartoon[];
}
// ============================================
// PROJECT DATA
// ============================================

// 1. BENEfITTZ
const benefittzData: ProjectData = {
  slug: "benefittz",
  title: "BeneFittz",
  category: "Mobile Application",
  status: "Live on Stores",
  overview: "A comprehensive rewards and benefits platform where users can earn coins through various activities, spin to win rewards, refer friends, and redeem offers at partner shops. The app gamifies the shopping experience with leaderboards, loyalty programs, and exclusive deals.",
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
    { icon: <FaTrophy className="text-2xl" />, title: "Spin & Win", description: "Lucky wheel game where users spin to win coin rewards (20, 50, 100 coins)" },
    { icon: <FaShareAlt className="text-2xl" />, title: "Refer & Earn", description: "Unique referral codes to invite friends and earn rewards" },
    { icon: <FaStore className="text-2xl" />, title: "Hot Deals", description: "Curated list of nearby shops with special discounts and offers" },
    { icon: <MdDashboard className="text-2xl" />, title: "Shop Discovery", description: "Search and browse shops by categories with ratings and distance" },
    { icon: <FaUserFriends className="text-2xl" />, title: "Leaderboard", description: "Weekly, Monthly, and Yearly rankings based on coin earnings" },
    { icon: <MdSavings className="text-2xl" />, title: "Savings Tracker", description: "Track total savings and rewards earned" },
    { icon: <MdNotifications className="text-2xl" />, title: "Notifications", description: "Real-time alerts for new deals, offers, and updates" },
    { icon: <MdQrCodeScanner className="text-2xl" />, title: "Scan History", description: "QR code scanning history for in-store redemptions" },
  ],
  challenges: [
    {
      title: "Gamification Engine",
      description: "Building a robust coin earning and reward system that keeps users engaged and motivated to use the app daily."
    },
    {
      title: "Spin & Win Logic",
      description: "Creating a fair and engaging wheel spin algorithm that balances user excitement with sustainable reward distribution."
    },
    {
      title: "Referral System",
      description: "Tracking referrals and rewarding users accurately while preventing fraud and abuse of the referral program."
    },
    {
      title: "Location-Based Services",
      description: "Finding nearby shops and deals with accurate location data and real-time updates for users on the go."
    },
    {
      title: "Real-time Updates",
      description: "Delivering live notifications for new deals and offers without draining device battery or impacting performance."
    },
    {
      title: "Payment Integration",
      description: "Integrating secure payment gateways for membership plans and premium features with seamless user experience."
    },
  ],
  solution: {
    title: "Comprehensive Mobile Solution",
    description: "Built with Flutter for seamless cross-platform experience, integrated Firebase for real-time data and authentication, implemented REST APIs for business logic and payments.",
    steps: [
      {
        title: "Cross-Platform Development",
        description: "Used Flutter to build a single codebase that runs perfectly on both iOS and Android, saving development time and ensuring consistent user experience."
      },
      {
        title: "Real-Time Data",
        description: "Integrated Firebase Firestore for real-time data synchronization, enabling instant updates for deals, leaderboards, and user coins."
      },
      {
        title: "Engaging UI/UX",
        description: "Designed intuitive, gamified interfaces that encourage daily engagement with spin wheels, leaderboards, and referral programs."
      },
      {
        title: "Location Integration",
        description: "Implemented Google Maps API and geolocation services to find nearby shops, calculate distances, and show personalized deals."
      },
      {
        title: "Secure Payments",
        description: "Integrated Razorpay/Stripe for seamless membership purchases and premium feature upgrades with secure transaction handling."
      },
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

// 2. KIDS FUNZONE
const kidsFunZoneData: ProjectData = {
  slug: "kids-funzone",
  title: "Kids FunZone",
  category: "Kids Educational Application",
  status: "Available on Google Play",
  version: "1.0.0",
  overview: "Kids FunZone is an interactive educational app designed to make learning fun for children. With 6 educational games, popular cartoons, and a reward-based unlock system, kids stay engaged while developing essential skills. Earn points by playing games and unlock favorite cartoon episodes!",
  myRole: "Flutter Application Developer - Built the complete cross-platform educational app from scratch, implementing 6 interactive games, a points/reward system, cartoon content library with unlock mechanics, and a child-friendly user interface.",
  technologies: [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Local Storage", icon: BiSupport, color: "#6B7280" },
    { name: "Audio Player", icon: BiSupport, color: "#FFCA28" },
    { name: "Video Player", icon: BiSupport, color: "#3DDC84" },
    { name: "AdMob", icon: BiSupport, color: "#6B7280" },
    { name: "Custom Animations", icon: BiSupport, color: "#FF6B6B" },
  ],
  features: [
    { icon: <FaTrophy className="text-2xl" />, title: "Points System", description: "Earn points by playing games and daily visits. Track progress and unlock rewards." },
    { icon: <FaGift className="text-2xl" />, title: "Unlock System", description: "Use points or watch ads to unlock new cartoons and videos as you progress." },
    { icon: <FaUserFriends className="text-2xl" />, title: "6 Educational Games", description: "Math Fun, Color Match, Animal Sounds, Balloon Pop, Shape Sorting, Memory Game." },
    { icon: <MdDashboard className="text-2xl" />, title: "Cartoon Library", description: "Shinchan, Doraemon, Motu Patlu, Chhota Bheem, Tom & Jerry, Ninja Hattori." },
    { icon: <MdNotifications className="text-2xl" />, title: "Progress Tracking", description: "Visual progress bars showing completion status for each cartoon." },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Safe for Kids", description: "Daily limits for healthy screen time with parent controls." },
  ],
  games: [
    { name: "Color Match", points: "3 pts per match", status: "Not played yet", color: "from-pink-500 to-rose-500" },
    { name: "Animal Sounds", points: "2 pts per animal", status: "Not played yet", color: "from-green-500 to-emerald-500" },
    { name: "Math Fun", points: "5 pts per correct", status: "Not played yet", color: "from-blue-500 to-indigo-500" },
    { name: "Balloon Pop", points: "1 pt per pop", status: "Not played yet", color: "from-purple-500 to-violet-500" },
    { name: "Shape Sorting", points: "3 pts per sort", status: "Not played yet", color: "from-orange-500 to-red-500" },
    { name: "Memory Game", points: "2 pts per pair + 10 bonus", status: "Not played yet", color: "from-cyan-500 to-teal-500" },
  ],
  cartoons: [
    { name: "Shinchan", pointsRequired: 200, progress: 100, status: "Unlocked" },
    { name: "Doraemon", pointsRequired: 200, progress: 33, status: "In Progress" },
    { name: "Motu Patlu", pointsRequired: 300, progress: 0, status: "Locked" },
    { name: "Chhota Bheem", pointsRequired: 600, progress: 0, status: "Locked" },
    { name: "Tom & Jerry", pointsRequired: 400, progress: 0, status: "Locked" },
    { name: "Ninja Hattori", pointsRequired: 500, progress: 0, status: "Locked" },
  ],
  challenges: [
    {
      title: "Child-Friendly UI Design",
      description: "Creating an interface that's colorful, intuitive, and easy for children to navigate without adult assistance."
    },
    {
      title: "Game Development",
      description: "Building 6 different educational games with unique mechanics, animations, and audio feedback to keep kids engaged."
    },
    {
      title: "Gamification Engine",
      description: "Developing a motivating points and unlock system that encourages kids to learn while having fun."
    },
    {
      title: "Content Management",
      description: "Organizing cartoon content, videos, and unlock conditions in a way that's easy to update and manage."
    },
    {
      title: "Audio Integration",
      description: "Adding animal sounds, game effects, and background music without impacting app performance."
    },
    {
      title: "Screen Time Management",
      description: "Implementing daily limits and parent controls for healthy usage patterns."
    },
  ],
  solution: {
    title: "Interactive Learning Solution",
    description: "Built with Flutter to deliver a colorful, engaging, and educational experience that motivates children to learn through play.",
    steps: [
      {
        title: "Kid-Friendly Design",
        description: "Used bright colors, large touch targets, and simple navigation patterns designed for young children."
      },
      {
        title: "6 Educational Games",
        description: "Developed diverse games covering math, colors, animals, shapes, memory, and motor skills with different mechanics."
      },
      {
        title: "Points & Unlock System",
        description: "Created a rewarding gamification system where kids earn points and unlock favorite cartoon content."
      },
      {
        title: "Offline Support",
        description: "Implemented local storage for offline progress tracking so kids can play anywhere."
      },
      {
        title: "Safe Usage",
        description: "Added daily limits and parent controls to ensure healthy screen time habits."
      },
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
  screenshots: [
    { src: "/images/kids-funzone/menu.jpeg", alt: "Menu Screen - Cartoons collection (Shinchan, Doraemon, Motu Patlu, Chhota Bheem, Tom & Jerry, Ninja Hattori)" },
    { src: "/images/kids-funzone/games.jpeg", alt: "Games Dashboard - 6 educational games with points" },
    { src: "/images/kids-funzone/animal-land.jpeg", alt: "Animal Sound Game - Land Animals (Lion, Elephant, Dog, Cat, Horse)" },
    { src: "/images/kids-funzone/animal-water.jpeg", alt: "Animal Sound Game - Water Animals (Dolphin, Whale, Fish, Frog) with 65 points" },
    { src: "/images/kids-funzone/unlock.jpeg", alt: "Cartoon Unlock - Progress bars for Shinchan, Doraemon, Motu Patlu, Chhota Bheem" },
    { src: "/images/kids-funzone/video.jpeg", alt: "Video Player - Unlock videos with points or watch ads" },
  ],
  color: "from-cyan-500 to-blue-500",
};

// 3. GREEN VISION CLEANSING
const greenVisionData: ProjectData = {
  slug: "green-vision-cleansing",
  title: "Green Vision Cleansing",
  category: "Employee Time-Tracking & Workforce Management",
  status: "Live on App Store & Google Play",
  version: "2.1.50",
  overview: "Green Vision Cleansing is a comprehensive workforce management app designed for cleaning businesses. It enables employees to clock in/out at job sites, track their work routes, view task assignments, manage payments, and communicate with managers in real-time. The app streamlines cleaning operations with location verification and automated time tracking.",
  myRole: "iOS Application Developer - Built the complete iOS native app from scratch using Swift, implementing Core Location for GPS tracking, Firebase for real-time data sync, task management, payment processing with invoice generation, and employee communication features.",
  technologies: [
    { name: "Swift", icon: SiSwift, color: "#F05138" },
    { name: "iOS", icon: SiApple, color: "#A2AAAD" },
    { name: "Core Location", icon: BiSupport, color: "#3DDC84" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "MapKit", icon: BiSupport, color: "#6B7280" },
    { name: "REST APIs", icon: BiSupport, color: "#6B7280" },
  ],
  features: [
    { icon: <MdDashboard className="text-2xl" />, title: "Dashboard Overview", description: "View upcoming tasks, date range filters (08 Jul - 07 Aug), and task assignments with employee names." },
    { icon: <BiSupport className="text-2xl" />, title: "Location Tracking", description: "GPS verification for work route tracking and presence verification at job sites." },
    { icon: <FaBug className="text-2xl" />, title: "Task Management", description: "View all tasks with status (Upcoming/Completed), dates, and employee assignments." },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Clock In/Out", description: "Accurate time tracking with location verification for attendance." },
    { icon: <FaStore className="text-2xl" />, title: "My Cleanings", description: "Project list with manager names, locations, and last/pending payments." },
    { icon: <MdSavings className="text-2xl" />, title: "Payment Tracking", description: "View amount paid, pending payments, and invoice generation." },
    { icon: <MdNotifications className="text-2xl" />, title: "Announcements", description: "Company announcements and updates for employees." },
    { icon: <FaUserFriends className="text-2xl" />, title: "Chat System", description: "In-app chat between employees and managers." },
    { icon: <FaGift className="text-2xl" />, title: "Profile Management", description: "Edit profile, language settings, transaction history, reset password." },
  ],
  challenges: [
    {
      title: "Location Tracking Accuracy",
      description: "Implementing precise GPS tracking for work route verification and ensuring accurate clock in/out at job sites."
    },
    {
      title: "Real-time Data Sync",
      description: "Synchronizing employee clock in/out data in real-time across devices for accurate workforce management."
    },
    {
      title: "Offline Capability",
      description: "Allowing employees to clock in/out and save tasks without internet connectivity, syncing later when online."
    },
    {
      title: "Battery Optimization",
      description: "Efficient location tracking to prevent excessive battery drain while maintaining accurate GPS data."
    },
    {
      title: "Payment Integration",
      description: "Integrating payment processing with automatic invoice generation and payment status tracking."
    },
    {
      title: "Role-based Access",
      description: "Implementing different access levels for employees, managers, and admins with appropriate permissions."
    },
  ],
  solution: {
    title: "Comprehensive Workforce Management",
    description: "Built with native iOS using Swift, the app delivers reliable location tracking, real-time task management, and seamless payment processing for cleaning businesses.",
    steps: [
      {
        title: "Native iOS Development",
        description: "Built with Swift and UIKit for optimal performance and native iOS experience."
      },
      {
        title: "GPS Location Tracking",
        description: "Implemented Core Location with geofencing to verify employee presence at job sites and track work routes."
      },
      {
        title: "Real-time Data Sync",
        description: "Integrated Firebase Firestore for live synchronization of tasks, clock in/out data, and employee assignments."
      },
      {
        title: "Task Management System",
        description: "Built flexible task assignment with employee assignments, date/time tracking, and status management."
      },
      {
        title: "Payment & Invoicing",
        description: "Integrated payment processing with automatic invoice generation and payment tracking."
      },
      {
        title: "Offline Support",
        description: "Implemented local storage with CoreData for offline capability and automatic sync when back online."
      },
    ]
  },
  results: [
    "✅ Live on App Store & Google Play",
    "✅ Used by cleaning businesses for workforce management",
    "✅ Accurate employee attendance and location tracking",
    "✅ Streamlined task assignment and payment processing",
    "✅ Improved communication between managers and employees",
    "✅ Version 2.1.50 with continuous improvements",
  ],
  screenshots: [
    { src: "/images/green-vision/dashboard.png", alt: "Dashboard - Upcoming tasks with date filter and employee assignments" },
    { src: "/images/green-vision/location.png", alt: "Location Permission - GPS tracking for work route verification" },
    { src: "/images/green-vision/tasks.png", alt: "All Tasks - Filter tasks with payment status and invoices" },
    { src: "/images/green-vision/cleanings.png", alt: "My Cleanings - Projects with manager names and payment details" },
    { src: "/images/green-vision/announcements.png", alt: "Announcements - Company updates and notifications" },
    { src: "/images/green-vision/profile.png", alt: "My Profile - User settings with app version 2.1.50" },
  ],
  storeLinks: {
    android: "https://play.google.com/store/apps/details?id=com.green.greencleansing",
    ios: "https://apps.apple.com/in/app/green-vision-cleansing2-0/id6479843416",
  },
  color: "from-green-500 to-emerald-500",
};

// 4. GATENEST
const gateNestData: ProjectData = {
  slug: "gatenest",
  title: "GateNest",
  category: "Apartment Guest Management System",
  status: "Available on Google Play",
  overview: "GateNest is a smart apartment guest management system designed to streamline visitor registration and security management. Gatekeepers can register guests, generate digital visitor passes, track guest history with multiple filters (All, Pending, Accepted, Rejected, Completed), and receive real-time push notifications for guest arrivals. The app eliminates paper-based visitor logs and enhances apartment security with digital tracking.",
  myRole: "Flutter Application Developer & Firebase Backend Engineer - Built the complete cross-platform Flutter app, designed and implemented Firebase Firestore database structure with optimized queries for guest history, integrated Firebase Storage for media and passes, implemented Firebase Cloud Messaging (FCM) for push notifications, and created role-based authentication for Owners, Gatekeepers, and Residents.",
  technologies: [
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Firebase Firestore", icon: SiFirebase, color: "#FFCA28" },
    { name: "Firebase Storage", icon: SiFirebase, color: "#FFCA28" },
    { name: "Firebase Auth", icon: SiFirebase, color: "#FFCA28" },
    { name: "Firebase FCM", icon: SiFirebase, color: "#FFCA28" },
    { name: "QR Code", icon: BiSupport, color: "#6B7280" },
  ],
  features: [
    { icon: <MdDashboard className="text-2xl" />, title: "Dashboard", description: "Welcome gatekeeper with recent guests and quick actions to manage visitor entries." },
    { icon: <FaUserFriends className="text-2xl" />, title: "Guest Registration", description: "Register guests with name, phone, email, apartment number, and purpose of visit." },
    { icon: <FaGift className="text-2xl" />, title: "Digital Visitor Pass", description: "Generate secure QR code-based digital passes for verified guests." },
    { icon: <MdNotifications className="text-2xl" />, title: "Guest History", description: "Complete history with filters: All, Pending, Accepted, Rejected, Completed." },
    { icon: <BiSupport className="text-2xl" />, title: "Real-time Tracking", description: "Live status updates for guest visits with push notifications." },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Secure Authentication", description: "Email/Phone login with Remember Me and Forgot Password options." },
    { icon: <FaStore className="text-2xl" />, title: "Owner Dashboard", description: "Manage account, rate the app, view guest history, link phone numbers." },
    { icon: <FaBug className="text-2xl" />, title: "Security Logs", description: "Complete audit trail of all guest entries and exits." },
  ],
  challenges: [
    {
      title: "Database Design for Guest History",
      description: "Designing a Firestore structure that efficiently handles guest history with multiple filters (All, Pending, Accepted, Rejected, Completed) and fast queries."
    },
    {
      title: "Push Notifications Implementation",
      description: "Setting up Firebase Cloud Messaging for real-time alerts to gatekeepers and residents when guests arrive or status changes."
    },
    {
      title: "Role-based Access Control",
      description: "Implementing secure authentication with different access levels for Owners, Gatekeepers, and Residents with appropriate permissions."
    },
    {
      title: "QR Code Generation",
      description: "Creating secure digital visitor passes with QR codes that can be scanned for verification at the gate."
    },
    {
      title: "Real-time Data Sync",
      description: "Ensuring instant synchronization of guest status across multiple devices and users in the same society."
    },
    {
      title: "Offline Support",
      description: "Allowing gatekeepers to register guests even without internet connectivity, syncing when back online."
    },
  ],
  solution: {
    title: "Comprehensive Guest Management Solution",
    description: "Built with Flutter and Firebase, the app delivers seamless guest management with real-time notifications, secure authentication, and digital visitor tracking for apartment societies.",
    steps: [
      {
        title: "Cross-platform Development",
        description: "Built with Flutter for consistent experience on both iOS and Android devices."
      },
      {
        title: "Firebase Firestore Database",
        description: "Designed optimized Firestore collections with composite indexes for efficient guest history queries with filters."
      },
      {
        title: "Push Notifications",
        description: "Implemented Firebase Cloud Messaging for real-time notifications on guest arrivals and status changes."
      },
      {
        title: "Digital Visitor Pass",
        description: "Integrated QR code generation for secure digital visitor passes with verification system."
      },
      {
        title: "Role-based Authentication",
        description: "Firebase Auth with custom claims for Owner, Gatekeeper, and Resident roles with appropriate permissions."
      },
      {
        title: "Offline Support",
        description: "Firestore offline persistence for guest registration without internet connectivity."
      },
    ]
  },
  results: [
    "✅ Available on Google Play",
    "✅ Digital guest management for apartment societies",
    "✅ Real-time notifications for gatekeepers and residents",
    "✅ Secure visitor verification with digital passes",
    "✅ Complete guest history with audit trail",
    "✅ Eliminated paper-based visitor logs",
    "✅ Enhanced security with digital tracking",
  ],
  screenshots: [
    { src: "/images/gatenest/splash.jpeg", alt: "Splash Screen - GateNest Apartment Guest Management System" },
    { src: "/images/gatenest/login.jpeg", alt: "Login Screen - Welcome Back! Sign in with Email/Phone" },
    { src: "/images/gatenest/dashboard.jpeg", alt: "Dashboard - Manage guest visits with recent guests" },
    { src: "/images/gatenest/guest-history.jpeg", alt: "Guest History - All/Pending/Accepted/Rejected/Completed filters" },
    { src: "/images/gatenest/owner-dashboard.jpeg", alt: "Owner Dashboard - Menu with guest history and account management" },
  ],
  storeLinks: {
    android: "https://play.google.com/store/apps/details?id=com.gate.nest",
    ios: null,
  },
  color: "from-purple-500 to-violet-500",
};

// 5. SITTERBOSS
const sitterBossData = {
  slug: "sitterboss",
  title: "SitterBoss",
  category: "Babysitter Booking Platform",
  status: "In Development (TestFlight Available)",
  overview: "SitterBoss is a comprehensive babysitter booking platform connecting parents with trusted babysitters. Sitters can manage their profiles, receive job requests, update their availability, and track their earnings. Parents can post jobs, review applicants, and book trusted sitters. The app provides a streamlined way for babysitters to manage their bookings and communicate with parents.",
  myRole: "React Native Application Developer - Built the complete cross-platform mobile app using React Native, implementing real-time booking system, job posting, availability management, payment processing with Stripe, video call integration with WebRTC, and role-based access for sitters and parents.",
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
    { icon: <MdDashboard className="text-2xl" />, title: "Dashboard", description: "Hello greeting, schedule view (Thu-Tue), availability status, and quick actions." },
    { icon: <FaUserFriends className="text-2xl" />, title: "Schedule Management", description: "Weekly calendar with availability settings and Blitz Visibility mode for urgent jobs." },
    { icon: <BiSupport className="text-2xl" />, title: "Booking System", description: "All/Pending/Completed filters with detailed booking information and actions." },
    { icon: <FaStore className="text-2xl" />, title: "Job Posting", description: "Browse and accept posted sitter jobs with Accept/Pro buttons." },
    { icon: <MdSavings className="text-2xl" />, title: "Earnings Tracking", description: "Track earnings per booking ($23, $403) with transaction history." },
    { icon: <FaGift className="text-2xl" />, title: "Ratings & Reviews", description: "Rate sitters and view ratings (⭐⭐⭐⭐⭐ 2/5) for trust and quality." },
    { icon: <MdNotifications className="text-2xl" />, title: "Notifications", description: "Real-time alerts for new jobs, booking updates, and messages (18 notifications)." },
    { icon: <FaBug className="text-2xl" />, title: "Video Calls", description: "Integrated video call functionality for interviews and check-ins." },
    { icon: <FaShieldAlt className="text-2xl" />, title: "Role Management", description: "Switch between Sitter and Parent roles with different permissions." },
    { icon: <FaRocket className="text-2xl" />, title: "Account Management", description: "Profile settings, notification center, transaction history, FAQs, and help." },
  ],
  challenges: [
    {
      title: "Real-time Booking System",
      description: "Implementing instant job posting and acceptance with live updates for both sitters and parents."
    },
    {
      title: "Availability Management",
      description: "Building a flexible availability calendar with Blitz Visibility mode for urgent job alerts."
    },
    {
      title: "Payment Processing",
      description: "Integrating secure payment system with escrow protection for babysitting services."
    },
    {
      title: "Role Switching",
      description: "Allowing users to seamlessly switch between sitter and parent roles with different permissions."
    },
    {
      title: "Video Calls",
      description: "Implementing in-app video calls for interviews and check-ins with WebRTC integration."
    },
    {
      title: "Location Tracking",
      description: "GPS integration for job location display and proximity-based job suggestions."
    },
  ],
  solution: {
    title: "Comprehensive Babysitter Booking Platform",
    description: "Built with React Native for cross-platform compatibility, the app delivers real-time booking, secure payments, and seamless communication between parents and sitters.",
    steps: [
      {
        title: "Cross-platform Development",
        description: "Built with React Native for consistent experience on both iOS and Android devices."
      },
      {
        title: "Real-time Booking",
        description: "Implemented Firebase Firestore with real-time listeners for instant job updates and booking confirmations."
      },
      {
        title: "Payment Processing",
        description: "Integrated Stripe Connect for secure escrow payments between parents and sitters."
      },
      {
        title: "Video Calls",
        description: "Implemented WebRTC with Video SDK for in-app video calls and check-ins."
      },
      {
        title: "Role-based Access",
        description: "Created different views and permissions for Sitter and Parent roles."
      },
      {
        title: "Push Notifications",
        description: "Firebase Cloud Messaging for real-time alerts on new jobs and booking updates."
      },
    ]
  },
  results: [
    "🚧 Currently in development",
    "✅ TestFlight available for iOS testing",
    "✅ Real-time booking and job posting",
    "✅ Secure payment processing with escrow",
    "✅ Role-based access for sitters and parents",
    "✅ Rating and review system",
    "🔜 Ready for production release",
  ],
  screenshots: [
    { src: "/images/sitterboss/home.jpeg", alt: "Home Dashboard - Hello Gens greeting, schedule view, availability status" },
    { src: "/images/sitterboss/bookings.jpeg", alt: "Bookings - All/Pending/Completed filters with booking details" },
    { src: "/images/sitterboss/jobs.jpeg", alt: "Posted Jobs - Sitter jobs with Accept/Pro buttons and job details" },
    { src: "/images/sitterboss/chat.jpeg", alt: "Chat Screen - Real-time messaging between sitter and parent with options for text messages, photo sharing, and video call initiation" },
    { src: "/images/sitterboss/account.jpeg", alt: "Account - Settings, notification center, transaction history, role management" },
  ],
  storeLinks: {
    android: null,
    ios: "https://testflight.apple.com/join/RTFHr3e8",
  },
  color: "from-blue-500 to-indigo-500",
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
};

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

  // Get the project data based on the slug
  const project = projectDataMap[params.slug];

  // If project not found, show 404
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
                {/* When you have actual images, uncomment this:
                <Image 
                  src={screenshot.src} 
                  alt={screenshot.alt}
                  width={300}
                  height={533}
                  className="object-cover w-full h-full"
                />
                */}
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