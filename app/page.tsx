"use client";

import { useState, useEffect } from "react";

// --- YOUR EXACT ORIGINAL SERVICES ---
const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built for startups, businesses and enterprises using modern frameworks.",
    tags: ["Next.js", "React", "Node.js"],
    icon: "🌐",
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Scalable Android and iOS applications with beautiful interfaces, offline support, and reliable backend systems.",
    tags: ["Flutter", "React Native", "Android"],
    icon: "📱",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "User-focused digital experiences that combine modern design principles, usability research, and business goals.",
    tags: ["Figma", "Design Systems", "Prototyping"],
    icon: "🎨",
  },
  {
    number: "04",
    title: "E-Commerce Solutions",
    description:
      "Complete online shopping platforms with integrated payments, inventory management, orders, and customer management.",
    tags: ["E-Commerce", "Payments", "APIs"],
    icon: "🛒",
  },
  {
    number: "05",
    title: "Backend & APIs",
    description:
      "Secure and scalable APIs that power mobile apps, websites, and business applications with high performance.",
    tags: ["REST API", "Node.js", "Database"],
    icon: "⚙️",
  },
  {
    number: "06",
    title: "Cloud & Support",
    description:
      "Deployment, maintenance, monitoring, and continuous improvements for your digital products in production.",
    tags: ["Vercel", "Cloud", "Maintenance"],
    icon: "☁️",
  },
];

// --- UPDATED PROJECTS WITH YOUR SPECIFIC APPS & LINKS ---
const projects = [
  {
    category: "Mobile Application",
    title: "BeneFittz",
    description:
      "A complete rewards and benefits platform for shoppers. Earn, track, and redeem points seamlessly at partner shops.",
    metrics: ["Live on Stores", "Reward System", "User Friendly"],
    ios: "https://apps.apple.com/in/app/benefittz/id6746153320",
    android: "https://play.google.com/store/apps/details?id=com.benefitt.app"
  },
  {
    category: "Mobile Application",
    title: "Green Vision Cleansing",
    description:
      "An employee time-tracking app designed for cleaning businesses to manage worker shifts, locations, and attendance effectively.",
    metrics: ["Time Tracking", "Shift Management", "Live"],
    ios: "https://apps.apple.com/in/app/green-vision-cleansing2-0/id6479843416",
    android: "https://play.google.com/store/apps/details?id=com.green.greencleansing"
  },
  {
    category: "Smart Management (In Dev)",
    title: "GateNest",
    description:
      "A smart apartment guest management system allowing societies to digitally register visitors, manage security logs, and ensure safety.",
    metrics: ["Guest Logs", "Security", "In Development"],
    ios: null,
    android: "https://play.google.com/store/apps/details?id=com.gate.nest"
  },
  {
    category: "Kids Application (In Dev)",
    title: "Kids FunZone",
    description:
      "An interactive and educational mobile app designed for children to learn through fun games, puzzles, and engaging activities.",
    metrics: ["Interactive UI", "Educational", "In Development"],
    ios: null,
    android: "https://play.google.com/store/apps/details?id=com.kids.world"
  },
];

const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#000000" },
  { name: "Flutter", color: "#02569B" },
  { name: "React Native", color: "#61DAFB" },
  { name: "Node.js", color: "#339933" },
  { name: "Java", color: "#007396" },
  { name: "Android", color: "#3DDC84" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "MongoDB", color: "#47A248" },
  { name: "MySQL", color: "#4479A1" },
  { name: "REST APIs", color: "#009688" },
  { name: "Vercel", color: "#000000" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- NEW: Scroll Animation Logic ---
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

    // Observe all sections that should animate
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
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* NAVBAR - Identical to yours */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-zinc-200/80 bg-white/95 shadow-sm backdrop-blur"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg">
              VM
            </div>
            <div>
              <div className="text-xl font-bold tracking-tight text-zinc-900">
                VivekM
              </div>
              <div className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">
                Technologies
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-10 md:flex">
            {["Services", "Solutions", "Projects", "About"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-zinc-600 transition-all hover:text-blue-600 hover:after:w-full relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl md:block"
          >
            Get a Quote
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-zinc-200 px-3 py-2 transition hover:bg-zinc-50 md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-zinc-200 bg-white px-6 py-5 shadow-lg md:hidden">
            <div className="flex flex-col gap-4">
              {["Services", "Solutions", "Projects", "About", "Contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-base font-medium text-zinc-600 transition hover:text-blue-600"
                  >
                    {item}
                  </button>
                )
              )}
              <button
                onClick={() => scrollToSection("contact")}
                className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-center font-semibold text-white shadow-lg"
              >
                Get a Quote
              </button>
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
              <span className="text-blue-700">
                Digital Technology & Development Partner
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              We build digital products that
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                move businesses
              </span>{" "}
              forward.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
              VivekM Technologies helps businesses transform ideas into
              powerful websites, mobile applications, and scalable software
              solutions with modern technology.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => scrollToSection("contact")}
                className="group rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Start a Project
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>

              <button
                onClick={() => scrollToSection("services")}
                className="rounded-full border border-zinc-300 px-8 py-3.5 text-center font-semibold transition-all hover:border-blue-600 hover:bg-blue-50"
              >
                Explore Services
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-zinc-200 pt-7">
              {[
                { label: "Web", value: "Applications" },
                { label: "Mobile", value: "Applications" },
                { label: "Cloud", value: "Solutions" },
                { label: "24/7", value: "Support" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-2xl font-bold text-blue-600">
                    {item.label}
                  </div>
                  <div className="text-sm text-zinc-500">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* HERO VISUAL */}
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
                    <span className="text-xs font-semibold text-blue-400">
                      VIVEKM TECHNOLOGIES
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                      <div className="mb-10 text-sm font-medium text-zinc-500">
                        DIGITAL PRODUCT
                      </div>
                      <div className="text-3xl font-bold text-white">
                        Idea
                        <br />
                        <span className="text-blue-400">→ Product</span>
                      </div>
                    </div>

                    <div className="rounded-2xl bg-blue-600/20 p-6 backdrop-blur">
                      <div className="mb-10 text-sm text-zinc-400">
                        TECHNOLOGY
                      </div>
                      <div className="text-3xl font-bold text-white">
                        Design
                        <br />
                        <span className="text-blue-400">+ Code</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-zinc-800 p-6">
                    <div className="mb-3 text-sm text-zinc-500">
                      OUR APPROACH
                    </div>
                    <div className="flex items-center justify-between text-sm text-zinc-300">
                      <span className="text-white">Strategy</span>
                      <span className="text-blue-400">→</span>
                      <span className="text-white">Design</span>
                      <span className="text-blue-400">→</span>
                      <span className="text-white">Build</span>
                      <span className="text-blue-400">→</span>
                      <span className="text-white">Grow</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Built for
                </div>
                <div className="mt-1 font-bold text-zinc-900">
                  Modern Businesses
                </div>
              </div>

              <div className="absolute -right-5 -top-5 rounded-2xl border border-zinc-200 bg-white px-6 py-4 shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Trusted by
                </div>
                <div className="mt-1 font-bold text-zinc-900">100+ Clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce lg:block">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-medium uppercase tracking-widest text-zinc-400">
              Scroll
            </span>
            <div className="h-8 w-0.5 rounded-full bg-gradient-to-b from-blue-500 to-transparent" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-zinc-50/80 py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technology services built around
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                your business
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600">
              From the first idea to production and beyond, we provide the
              technology expertise required to build and grow digital products.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
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
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Built to scale
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                From a simple idea to a
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  complete digital platform
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                We combine product thinking, design, and engineering to create
                solutions that are reliable today and ready for tomorrow.
              </p>

              <button
                onClick={() => scrollToSection("contact")}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              >
                Discuss your idea →
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["01", "Discover", "Understand your business, users and goals."],
                ["02", "Design", "Create intuitive experiences and interfaces."],
                ["03", "Develop", "Build secure, scalable and maintainable software."],
                ["04", "Launch", "Deploy, monitor and continuously improve."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="group rounded-3xl border border-zinc-200 p-7 transition-all hover:border-blue-200 hover:shadow-lg"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {number}
                  </span>
                  <h3 className="mt-8 text-xl font-bold group-hover:text-blue-600">
                    {title}
                  </h3>
                  <p className="mt-3 leading-6 text-zinc-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS - Now with your specific apps & buttons */}
      <section id="projects" className="bg-zinc-950 py-24 text-white animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Selected work
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Solutions that solve
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  real business problems
                </span>
              </h2>
            </div>

            <p className="max-w-md text-zinc-400">
              We build digital products across industries, adapting the
              technology to the business rather than the other way around.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-zinc-800 transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="relative flex h-56 items-end bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-7">
                  <div className="absolute right-4 top-4 text-6xl font-bold text-white/5">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
                      {project.category}
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {project.title}
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <p className="leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* --- NEW: Actual Store Buttons --- */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {project.android && (
                      <a 
                        href={project.android} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-green-500"
                      >
                        <span>▶</span> Play Store
                      </a>
                    )}
                    {project.ios && (
                      <a 
                        href={project.ios} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-zinc-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-zinc-600"
                      >
                        <span></span> App Store
                      </a>
                    )}
                    {!project.ios && !project.android && (
                      <span className="text-xs text-zinc-500 italic">Coming Soon</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-b border-zinc-200 py-20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Technology expertise
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Modern technology.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Practical solutions.
              </span>
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-gradient-to-br from-zinc-50 to-blue-50/50 p-8 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
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
              </div>

              <div>
                <p className="text-xl leading-9 text-zinc-700">
                  VivekM Technologies is a software development company focused
                  on helping businesses turn ideas into dependable digital products.
                </p>

                <p className="mt-6 leading-8 text-zinc-600">
                  Whether you need a business website, mobile application, custom
                  software, API integration, or ongoing technical support, we work
                  closely with you from concept to launch and beyond.
                </p>

                <div className="mt-9 grid gap-6 sm:grid-cols-3">
                  {[
                    ["01", "Business-first thinking", "We align technology with your business goals"],
                    ["02", "Modern engineering", "We use the latest frameworks and best practices"],
                    ["03", "Long-term partnership", "We support you beyond launch"],
                  ].map(([number, title, description]) => (
                    <div key={number} className="rounded-2xl bg-white/50 p-5">
                      <div className="text-2xl font-bold text-blue-600">
                        {number}
                      </div>
                      <div className="mt-2 font-semibold text-zinc-900">
                        {title}
                      </div>
                      <div className="mt-1 text-sm text-zinc-500">
                        {description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="border-t border-zinc-200 bg-white py-24 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Start a conversation
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Have an idea?
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let&apos;s build it.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Tell us what you are building and what you need. We&apos;ll help you find
            the right technology and development approach for your project.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://api.whatsapp.com/send?phone=919693427671&text=Hello%20VivekM%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-full bg-gradient-to-r from-green-500 to-green-600 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
            >
              <span className="mr-2">💬</span>
              WhatsApp Us
            </a>

            <a
              href="mailto:rncvivek@gmail.com?subject=Project%20Enquiry%20-%20VivekM%20Technologies"
              className="rounded-full border border-zinc-300 px-8 py-3.5 font-semibold transition-all hover:border-blue-600 hover:bg-blue-50"
            >
              <span className="mr-2">✉️</span>
              Email Us
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
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg">
                  VM
                </div>

                <div>
                  <div className="text-xl font-bold tracking-tight">
                    VivekM Technologies
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">
                    Digital Solutions & Development
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-md leading-7 text-zinc-400">
                Building modern websites, mobile applications, and software
                solutions that help businesses grow in the digital era.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="https://api.whatsapp.com/send?phone=919693427671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-green-600/20 p-2.5 text-green-400 transition hover:bg-green-600 hover:text-white"
                  aria-label="WhatsApp"
                >
                  💬
                </a>
                <a
                  href="mailto:rncvivek@gmail.com"
                  className="rounded-full bg-blue-600/20 p-2.5 text-blue-400 transition hover:bg-blue-600 hover:text-white"
                  aria-label="Email"
                >
                  ✉️
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                Services
              </h3>
              <div className="mt-5 space-y-3 text-sm text-zinc-400">
                <div className="hover:text-white transition">Web Development</div>
                <div className="hover:text-white transition">Mobile App Development</div>
                <div className="hover:text-white transition">UI/UX Design</div>
                <div className="hover:text-white transition">E-Commerce</div>
                <div className="hover:text-white transition">Backend & APIs</div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
                Contact
              </h3>
              <div className="mt-5 space-y-3 text-sm text-zinc-400">
                <a
                  href="mailto:rncvivek@gmail.com"
                  className="block hover:text-white transition"
                >
                  rncvivek@gmail.com
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=919693427671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition"
                >
                  +91 9693427671
                </a>

                <div>Faridabad, Haryana</div>
                <div>India</div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-800 pt-7 text-sm text-zinc-500">
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <span>
                © {new Date().getFullYear()} VivekM Technologies. All rights reserved.
              </span>
              <span className="text-xs tracking-widest">
                BUILT WITH ❤️ IN INDIA
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://api.whatsapp.com/send?phone=919693427671&text=Hello%20VivekM%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VivekM Technologies on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-green-600 text-3xl text-white shadow-2xl transition-all hover:scale-110 hover:shadow-green-500/50"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-green-500/30" />
        <span className="relative">💬</span>
      </a>
    </main>
  );
}