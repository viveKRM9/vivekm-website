"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  SiFlutter, SiFirebase, SiGooglemaps, SiAndroid, SiApple, SiSwift, SiKotlin, SiReact
} from "react-icons/si";
import { FaArrowLeft, FaRocket, FaBug, FaShieldAlt, FaTrophy, FaGift, FaShareAlt, FaStore, FaUserFriends } from "react-icons/fa";
import { MdQrCodeScanner, MdNotifications, MdSavings, MdDashboard, MdOutlineApi } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

// Import types and data
import { ProjectData, Technology, Feature, Challenge, SolutionStep, Screenshot } from './data';

// ============================================
// ICON MAPPING - Map string names to actual components
// ============================================
const iconMap: Record<string, React.ElementType> = {
  // SI icons
  SiFlutter: SiFlutter,
  SiFirebase: SiFirebase,
  SiGooglemaps: SiGooglemaps,
  SiAndroid: SiAndroid,
  SiApple: SiApple,
  SiSwift: SiSwift,
  SiKotlin: SiKotlin,
  SiReact: SiReact,
  
  // Font Awesome
  FaGift: FaGift,
  FaTrophy: FaTrophy,
  FaShareAlt: FaShareAlt,
  FaStore: FaStore,
  FaUserFriends: FaUserFriends,
  FaBug: FaBug,
  FaRocket: FaRocket,
  FaShieldAlt: FaShieldAlt,
  
  // Material Design
  MdDashboard: MdDashboard,
  MdSavings: MdSavings,
  MdNotifications: MdNotifications,
  MdQrCodeScanner: MdQrCodeScanner,
  MdOutlineApi: MdOutlineApi,
  
  // Bootstrap
  BiSupport: BiSupport,
};

export default function ProjectDetailClient({ project }: { project: ProjectData }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      {project.screenshots.map((screenshot: Screenshot, index: number) => (
        <div 
          key={index} 
          className="aspect-[9/16] rounded-xl bg-zinc-200 overflow-hidden border border-zinc-200 flex items-center justify-center"
        >
          <Image
            src={screenshot.src}
            alt={screenshot.alt}
            width={300}
            height={533}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
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
              {project.technologies.map((tech: Technology) => {
                const IconComponent = iconMap[tech.icon as keyof typeof iconMap];
                return (
                  <span key={tech.name} className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 shadow-sm">
                    {IconComponent && <IconComponent className="text-lg" style={{ color: tech.color }} />}
                    {tech.name}
                  </span>
                );
              })}
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
              {project.features.map((feature: Feature, index: number) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="rounded-xl bg-zinc-50 p-5 border border-zinc-100">
                    <div className="text-blue-500 mb-2">
                      {IconComponent && <IconComponent className="text-2xl" />}
                    </div>
                    <h3 className="font-semibold text-zinc-800">{feature.title}</h3>
                    <p className="mt-1 text-sm text-zinc-500">{feature.description}</p>
                  </div>
                );
              })}
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
              {project.challenges.map((challenge: Challenge, index: number) => (
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
                {project.solution.steps.map((step: SolutionStep, index: number) => (
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
            <span>© {new Date().getFullYear()} Vivek Kumar. All rights reserved.</span>
            <span className="text-xs tracking-widest">BUILT WITH ❤️ IN INDIA</span>
          </div>
        </div>
      </footer>
    </main>
  );
}