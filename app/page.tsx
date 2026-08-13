"use client";

import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "High-performance websites and web applications built for startups, businesses and enterprises.",
    tags: ["Next.js", "React", "Node.js"],
  },
  {
    number: "02",
    title: "Mobile App Development",
    description:
      "Scalable Android and iOS applications with beautiful interfaces and reliable backend systems.",
    tags: ["Flutter", "React Native", "Android"],
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "User-focused digital experiences that combine modern design, usability and business goals.",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    number: "04",
    title: "E-Commerce Solutions",
    description:
      "Complete online shopping platforms with payments, inventory, orders and customer management.",
    tags: ["E-Commerce", "Payments", "APIs"],
  },
  {
    number: "05",
    title: "Backend & APIs",
    description:
      "Secure and scalable APIs that power mobile apps, websites and business applications.",
    tags: ["REST API", "Node.js", "Database"],
  },
  {
    number: "06",
    title: "Cloud & Support",
    description:
      "Deployment, maintenance, monitoring and continuous improvements for your digital products.",
    tags: ["Vercel", "Cloud", "Maintenance"],
  },
];

const projects = [
  {
    category: "Mobile Application",
    title: "Business & Workforce Platform",
    description:
      "A complete mobile platform designed to manage users, tasks, locations and business operations.",
  },
  {
    category: "Web Application",
    title: "Education Platform",
    description:
      "A responsive digital platform connecting learners, administrators and educational services.",
  },
  {
    category: "Business Solution",
    title: "Custom Management System",
    description:
      "A customized business application designed to simplify daily operations and improve productivity.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Flutter",
  "React Native",
  "Node.js",
  "Java",
  "Android",
  "Firebase",
  "MongoDB",
  "MySQL",
  "REST APIs",
  "Vercel",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-950 text-lg font-bold text-white">
              VM
            </div>

            <div>
              <div className="text-lg font-bold tracking-tight">
                VivekM
              </div>
              <div className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Technologies
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#services"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Services
            </a>
            <a
              href="#solutions"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Solutions
            </a>
            <a
              href="#projects"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              Projects
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              About
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-800 md:block"
          >
            Get a Quote
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-zinc-200 px-3 py-2 md:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-zinc-200 bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4">
              <a href="#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="#solutions" onClick={() => setMenuOpen(false)}>
                Solutions
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-zinc-950 px-5 py-3 text-center font-semibold text-white"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-200">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.12),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(99,102,241,0.08),transparent_30%)]" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium shadow-sm">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              Digital Technology & Development Partner
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              We build digital products that move businesses forward.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-600">
              VivekM Technologies helps businesses transform ideas into
              powerful websites, mobile applications and scalable software
              solutions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-zinc-950 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-zinc-800"
              >
                Start a Project →
              </a>

              <a
                href="#services"
                className="rounded-full border border-zinc-300 px-7 py-3.5 text-center font-semibold transition hover:bg-zinc-50"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-5 border-t border-zinc-200 pt-7">
              <div>
                <div className="text-2xl font-bold">Web</div>
                <div className="text-sm text-zinc-500">Applications</div>
              </div>

              <div>
                <div className="text-2xl font-bold">Mobile</div>
                <div className="text-sm text-zinc-500">Applications</div>
              </div>

              <div>
                <div className="text-2xl font-bold">Cloud</div>
                <div className="text-sm text-zinc-500">Solutions</div>
              </div>

              <div>
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-zinc-500">Support</div>
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl">
              <div className="rounded-[2rem] border border-zinc-200 bg-zinc-950 p-4 shadow-2xl">
                <div className="rounded-[1.5rem] border border-zinc-800 bg-zinc-900 p-6">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex gap-2">
                      <span className="h-3 w-3 rounded-full bg-zinc-700" />
                      <span className="h-3 w-3 rounded-full bg-zinc-700" />
                      <span className="h-3 w-3 rounded-full bg-zinc-700" />
                    </div>
                    <span className="text-xs text-zinc-500">
                      VIVEKM TECHNOLOGIES
                    </span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white p-6">
                      <div className="mb-10 text-sm font-medium text-zinc-500">
                        DIGITAL PRODUCT
                      </div>
                      <div className="text-3xl font-bold">
                        Idea
                        <br />
                        → Product
                      </div>
                    </div>

                    <div className="rounded-2xl bg-zinc-800 p-6 text-white">
                      <div className="mb-10 text-sm text-zinc-400">
                        TECHNOLOGY
                      </div>
                      <div className="text-3xl font-bold">
                        Design
                        <br />
                        + Code
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-zinc-800 p-6">
                    <div className="mb-3 text-sm text-zinc-500">
                      OUR APPROACH
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white">Strategy</span>
                      <span className="text-zinc-500">→</span>
                      <span className="text-white">Design</span>
                      <span className="text-zinc-500">→</span>
                      <span className="text-white">Build</span>
                      <span className="text-zinc-500">→</span>
                      <span className="text-white">Grow</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-zinc-200 bg-white px-5 py-4 shadow-xl">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Built for
                </div>
                <div className="mt-1 font-bold">Modern Businesses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-zinc-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              What we do
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Technology services built around your business.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              From the first idea to production and beyond, we provide the
              technology expertise required to build and grow digital products.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.number}
                className="group bg-white p-8 transition hover:bg-zinc-950 hover:text-white"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-zinc-400 group-hover:text-zinc-500">
                    {service.number}
                  </span>
                  <span className="text-2xl transition group-hover:translate-x-1">
                    →
                  </span>
                </div>

                <h3 className="mt-12 text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600 group-hover:text-zinc-400">
                  {service.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 group-hover:bg-zinc-800 group-hover:text-zinc-300"
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
      <section id="solutions" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                Built to scale
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                From a simple idea to a complete digital platform.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                We combine product thinking, design and engineering to create
                solutions that are reliable today and ready for tomorrow.
              </p>

              <a
                href="#contact"
                className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-3 font-semibold text-white transition hover:bg-zinc-800"
              >
                Discuss your idea →
              </a>
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
                  className="rounded-3xl border border-zinc-200 p-7"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {number}
                  </span>
                  <h3 className="mt-8 text-xl font-bold">{title}</h3>
                  <p className="mt-3 leading-6 text-zinc-600">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-zinc-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Selected work
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                Solutions that solve real business problems.
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
                className="group overflow-hidden rounded-3xl border border-zinc-800"
              >
                <div className="flex h-64 items-end bg-gradient-to-br from-zinc-800 via-zinc-900 to-black p-7">
                  <div>
                    <div className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-400">
                      {project.category}
                    </div>
                    <div className="text-2xl font-bold">
                      Project {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-400">
                    {project.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-block font-semibold text-white transition group-hover:text-blue-400"
                  >
                    Discuss a similar project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="border-b border-zinc-200 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
              Technology expertise
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Modern technology. Practical solutions.
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-5 py-3 text-sm font-medium text-zinc-700"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-[2rem] bg-zinc-50 p-8 sm:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
                  About VivekM
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight">
                  Your technology partner for the digital era.
                </h2>
              </div>

              <div>
                <p className="text-xl leading-9 text-zinc-700">
                  VivekM Technologies is a software development company
                  focused on helping businesses turn ideas into dependable
                  digital products.
                </p>

                <p className="mt-6 leading-8 text-zinc-600">
                  Whether you need a business website, mobile application,
                  custom software, API integration or ongoing technical
                  support, we work closely with you from concept to launch.
                </p>

                <div className="mt-9 grid gap-6 sm:grid-cols-3">
                  <div>
                    <div className="text-2xl font-bold">01</div>
                    <div className="mt-2 text-sm text-zinc-500">
                      Business-first thinking
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold">02</div>
                    <div className="mt-2 text-sm text-zinc-500">
                      Modern engineering
                    </div>
                  </div>

                  <div>
                    <div className="text-2xl font-bold">03</div>
                    <div className="mt-2 text-sm text-zinc-500">
                      Long-term partnership
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="border-t border-zinc-200 bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Start a conversation
          </p>

          <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
            Have an idea?
            <br />
            Let&apos;s build it.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Tell us what you are building and what you need. We&apos;ll help
            you find the right technology and development approach.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://api.whatsapp.com/send?phone=919693427671&text=Hello%20VivekM%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-7 py-3.5 font-semibold text-white transition hover:bg-green-700"
            >
              WhatsApp Us
            </a>

            <a
              href="mailto:rncvivek@gmail.com?subject=Project%20Enquiry%20-%20VivekM%20Technologies"
              className="rounded-full border border-zinc-300 px-7 py-3.5 font-semibold transition hover:bg-zinc-50"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-zinc-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-zinc-950">
                  VM
                </div>

                <div>
                  <div className="font-bold">VivekM Technologies</div>
                  <div className="text-xs text-zinc-500">
                    Digital Solutions & Development
                  </div>
                </div>
              </div>

              <p className="mt-6 max-w-md leading-7 text-zinc-400">
                Building modern websites, mobile applications and software
                solutions that help businesses grow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Services</h3>
              <div className="mt-5 space-y-3 text-sm text-zinc-400">
                <div>Web Development</div>
                <div>Mobile App Development</div>
                <div>UI/UX Design</div>
                <div>E-Commerce</div>
                <div>Backend & APIs</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">Contact</h3>
              <div className="mt-5 space-y-3 text-sm text-zinc-400">
                <a
                  href="mailto:rncvivek@gmail.com"
                  className="block hover:text-white"
                >
                  rncvivek@gmail.com
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=919693427671"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white"
                >
                  WhatsApp
                </a>

                <div>Faridabad, Haryana, India</div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-zinc-800 pt-7 text-sm text-zinc-500">
            © {new Date().getFullYear()} VivekM Technologies. All rights
            reserved.
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://api.whatsapp.com/send?phone=919693427671&text=Hello%20VivekM%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with VivekM Technologies on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-2xl text-white shadow-2xl transition hover:scale-105 hover:bg-green-700"
      >
        ☎
      </a>
    </main>
  );
}