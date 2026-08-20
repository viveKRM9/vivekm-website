// This file contains ONLY data - NO JSX, NO React components

export interface Technology {
  name: string;
  icon: string; // ← Changed from React.ElementType to string
  color: string;
}

export interface Feature {
  icon: string; // ← Changed from React.ReactNode to string
  title: string;
  description: string;
}

export interface Challenge {
  title: string;
  description: string;
}

export interface SolutionStep {
  title: string;
  description: string;
}

export interface Screenshot {
  src: string;
  alt: string;
}

export interface StoreLinks {
  android: string | null;
  ios: string | null;
}

export interface ProjectData {
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
// PROJECT DATA - All icons are STRINGS
// ============================================

export const benefittzData: ProjectData = {
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
    { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
    { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
    { name: "Google Maps", icon: "SiGooglemaps", color: "#3DDC84" },
    { name: "REST APIs", icon: "BiSupport", color: "#6B7280" },
    { name: "Android", icon: "SiAndroid", color: "#3DDC84" },
    { name: "iOS", icon: "SiApple", color: "#A2AAAD" },
  ],
  features: [
    { icon: "FaGift", title: "Coin System", description: "Earn coins through daily visits, spins, referrals, and purchases" },
    { icon: "FaTrophy", title: "Spin & Win", description: "Lucky wheel game where users spin to win coin rewards" },
    { icon: "FaShareAlt", title: "Refer & Earn", description: "Unique referral codes to invite friends and earn rewards" },
    { icon: "FaStore", title: "Hot Deals", description: "Curated list of nearby shops with special discounts and offers" },
    { icon: "MdDashboard", title: "Shop Discovery", description: "Search and browse shops by categories with ratings and distance" },
    { icon: "FaUserFriends", title: "Leaderboard", description: "Weekly, Monthly, and Yearly rankings based on coin earnings" },
    { icon: "MdSavings", title: "Savings Tracker", description: "Track total savings and rewards earned" },
    { icon: "MdNotifications", title: "Notifications", description: "Real-time alerts for new deals, offers, and updates" },
    { icon: "MdQrCodeScanner", title: "Scan History", description: "QR code scanning history for in-store redemptions" },
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
export const kidsFunZoneData: ProjectData = {
  slug: "kids-funzone",
  title: "Kids FunZone",
  category: "Kids Educational Application",
  status: "Available on Google Play",
  version: "1.0.0",
  overview: "Kids FunZone is an interactive educational app designed to make learning fun for children with 6 educational games and a reward-based unlock system.",
  myRole: "Flutter Application Developer - Built the complete cross-platform educational app from scratch.",
  technologies: [
    { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
    { name: "Local Storage", icon: "BiSupport", color: "#6B7280" },
    { name: "Audio Player", icon: "BiSupport", color: "#FFCA28" },
    { name: "Video Player", icon: "BiSupport", color: "#3DDC84" },
    { name: "AdMob", icon: "BiSupport", color: "#6B7280" },
    { name: "Custom Animations", icon: "BiSupport", color: "#FF6B6B" },
  ],
  features: [
    { icon: "FaTrophy", title: "Points System", description: "Earn points by playing games and daily visits." },
    { icon: "FaGift", title: "Unlock System", description: "Use points or watch ads to unlock new cartoons." },
    { icon: "FaUserFriends", title: "6 Educational Games", description: "Math Fun, Color Match, Animal Sounds, Balloon Pop, Shape Sorting, Memory Game." },
    { icon: "MdDashboard", title: "Cartoon Library", description: "Shinchan, Doraemon, Motu Patlu, Chhota Bheem." },
    { icon: "MdNotifications", title: "Progress Tracking", description: "Visual progress bars showing completion status." },
    { icon: "FaShieldAlt", title: "Safe for Kids", description: "Daily limits for healthy screen time." },
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
export const greenVisionData: ProjectData = {
  slug: "green-vision-cleansing",
  title: "Green Vision Cleansing",
  category: "Employee Time-Tracking & Workforce Management",
  status: "Live on App Store & Google Play",
  version: "2.1.50",
  overview: "A comprehensive workforce management app for cleaning businesses to manage worker shifts, locations, and attendance effectively.",
  myRole: "iOS Application Developer - Built the complete iOS native app using Swift.",
  technologies: [
    { name: "Swift", icon: "SiSwift", color: "#F05138" },
    { name: "iOS", icon: "SiApple", color: "#A2AAAD" },
    { name: "Core Location", icon: "BiSupport", color: "#3DDC84" },
    { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
    { name: "MapKit", icon: "BiSupport", color: "#6B7280" },
    { name: "REST APIs", icon: "BiSupport", color: "#6B7280" },
  ],
  features: [
    { icon: "MdDashboard", title: "Dashboard Overview", description: "View upcoming tasks and assignments." },
    { icon: "BiSupport", title: "Location Tracking", description: "GPS verification for work route tracking." },
    { icon: "FaBug", title: "Task Management", description: "View all tasks with status and dates." },
    { icon: "FaShieldAlt", title: "Clock In/Out", description: "Time tracking with location verification." },
    { icon: "FaStore", title: "My Cleanings", description: "Project list with payment details." },
    { icon: "MdSavings", title: "Payment Tracking", description: "View payments and invoice generation." },
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
export const gateNestData: ProjectData = {
  slug: "gatenest",
  title: "GateNest",
  category: "Apartment Guest Management System",
  status: "Available on Google Play",
  overview: "A smart apartment guest management system for societies to register visitors, manage security logs, and track guest history.",
  myRole: "Flutter Application Developer & Firebase Backend Engineer",
  technologies: [
    { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
    { name: "Firebase Firestore", icon: "SiFirebase", color: "#FFCA28" },
    { name: "Firebase Storage", icon: "SiFirebase", color: "#FFCA28" },
    { name: "Firebase Auth", icon: "SiFirebase", color: "#FFCA28" },
    { name: "Firebase FCM", icon: "SiFirebase", color: "#FFCA28" },
    { name: "QR Code", icon: "BiSupport", color: "#6B7280" },
  ],
  features: [
    { icon: "MdDashboard", title: "Dashboard", description: "Manage guest visits and recent entries." },
    { icon: "FaUserFriends", title: "Guest Registration", description: "Register guests with complete details." },
    { icon: "FaGift", title: "Digital Visitor Pass", description: "Generate QR code-based digital passes." },
    { icon: "MdNotifications", title: "Guest History", description: "All/Pending/Accepted/Rejected/Completed filters." },
    { icon: "BiSupport", title: "Real-time Tracking", description: "Live status updates with push notifications." },
    { icon: "FaShieldAlt", title: "Secure Authentication", description: "Email/Phone login with role-based access." },
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
export const sitterBossData: ProjectData = {
  slug: "sitterboss",
  title: "SitterBoss",
  category: "Babysitter Booking Platform",
  status: "In Development (TestFlight Available)",
  overview: "A babysitter booking platform connecting parents with trusted babysitters. Sitters manage profiles, receive job requests, and track earnings.",
  myRole: "React Native Application Developer - Built the cross-platform app with real-time booking and video calls.",
  technologies: [
    { name: "React Native", icon: "SiReact", color: "#61DAFB" },
    { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
    { name: "REST APIs", icon: "BiSupport", color: "#6B7280" },
    { name: "WebRTC", icon: "BiSupport", color: "#6B7280" },
    { name: "Stripe", icon: "BiSupport", color: "#635BFF" },
    { name: "iOS", icon: "SiApple", color: "#A2AAAD" },
    { name: "Android", icon: "SiAndroid", color: "#3DDC84" },
  ],
  features: [
    { icon: "MdDashboard", title: "Dashboard", description: "Schedule view and availability status." },
    { icon: "FaUserFriends", title: "Schedule Management", description: "Weekly calendar with Blitz Visibility mode." },
    { icon: "BiSupport", title: "Booking System", description: "All/Pending/Completed filters." },
    { icon: "FaStore", title: "Job Posting", description: "Browse and accept sitter jobs." },
    { icon: "MdSavings", title: "Earnings Tracking", description: "Track earnings per booking." },
    { icon: "FaGift", title: "Ratings & Reviews", description: "Rate sitters and view ratings." },
    { icon: "MdNotifications", title: "Notifications", description: "Real-time alerts for jobs and updates." },
    { icon: "FaBug", title: "Video Calls", description: "Integrated video call functionality." },
    { icon: "FaShieldAlt", title: "Role Management", description: "Switch between Sitter and Parent roles." },
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
export const eWomenData: ProjectData = {
  slug: "ewomen-network",
  title: "eWomen Network",
  category: "Mobile Application",
  status: "Live on Stores",
  overview: "A networking platform for women entrepreneurs to connect, collaborate, and access success strategies from premier success coaches.",
  myRole: "Mobile Application Developer - Built both Android and iOS native apps.",
  technologies: [
    { name: "Native Android", icon: "SiAndroid", color: "#3DDC84" },
    { name: "Native iOS", icon: "SiApple", color: "#A2AAAD" },
    { name: "Kotlin", icon: "SiKotlin", color: "#7F52FF" },
    { name: "Swift", icon: "SiSwift", color: "#F05138" },
    { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
    { name: "REST APIs", icon: "BiSupport", color: "#6B7280" },
  ],
  features: [
    { icon: "FaUserFriends", title: "Networking", description: "Connect with women entrepreneurs." },
    { icon: "FaGift", title: "Community Building", description: "Create interest-based groups." },
    { icon: "FaTrophy", title: "Success Coaching", description: "Access to premier success coaches." },
    { icon: "MdDashboard", title: "Event Management", description: "Discover and register for events." },
    { icon: "MdSavings", title: "Business Resources", description: "Curated resources for growth." },
    { icon: "FaShieldAlt", title: "Entrepreneur Support", description: "Mentorship and peer support." },
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
export const projectDataMap: Record<string, ProjectData> = {
  "benefittz": benefittzData,
  "kids-funzone": kidsFunZoneData,
  "green-vision-cleansing": greenVisionData,
  "gatenest": gateNestData,
  "sitterboss": sitterBossData,
  "ewomen-network": eWomenData,
};