"use client"; // Required for the scroll animation effect (useEffect)

import { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  // Animation Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-scroll");
          }
        });
      },
      { threshold: 0.15 }
    );

    const hiddenElements = document.querySelectorAll(".hidden-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Your Apps Data
  const apps = [
    {
      name: "BeneFittz",
      description: "Reward & Benefits on shop",
      ios: "https://apps.apple.com/in/app/benefittz/id6746153320",
      android: "https://play.google.com/store/apps/details?id=com.benefitt.app",
      iconBg: "#1e3a8a",
      status: "Live",
    },
    {
      name: "Green Vision Cleansing",
      description: "Employee time tracking App",
      ios: "https://apps.apple.com/in/app/green-vision-cleansing2-0/id6479843416",
      android: "https://play.google.com/store/apps/details?id=com.green.greencleansing",
      iconBg: "#166534",
      status: "Live",
    },
    {
      name: "GateNest",
      description: "Smart Apartment Guest Management",
      ios: null,
      android: "https://play.google.com/store/apps/details?id=com.gate.nest",
      iconBg: "#0f172a",
      status: "Development",
    },
    {
      name: "Kids FunZone",
      description: "Interactive Children's App",
      ios: null,
      android: "https://play.google.com/store/apps/details?id=com.kids.world",
      iconBg: "#eab308",
      status: "Development",
    },
  ];

  const services = [
    { icon: "📱", title: "Mobile App Dev" },
    { icon: "🌐", title: "Web Development" },
    { icon: "</>", title: "Custom Solutions" },
    { icon: "🎨", title: "UI/UX Design" },
    { icon: "☁️", title: "Maintenance & Support" },
  ];

  return (
    <>
      <style jsx>{`
        /* CSS for scroll animations */
        .hidden-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .show-scroll {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <main style={{ backgroundColor: "#f8fafc", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
        
        {/* Header with Logo */}
        <header style={{ background: "white", padding: "20px", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)", position: "sticky", top: 0, zIndex: 100 }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
            {/* Replace '/logo.png' with your actual image file in the public folder */}
            {/* <Image src="/logo.png" alt="VivekM Logo" width={200} height={60} /> */}
            <h2 style={{ color: "#0a4b8c", letterSpacing: "2px" }}>VIVEKM</h2>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hidden-scroll" style={{ textAlign: "center", padding: "80px 20px", background: "linear-gradient(135deg, #e0f2fe 0%, #ffffff 100%)" }}>
          <h1 style={{ fontSize: "2.5rem", color: "#0f172a", marginBottom: "10px" }}>
            Building Ideas. <br /> Delivering Solutions.
          </h1>
          <p style={{ color: "#0a4b8c", fontWeight: "bold", letterSpacing: "1px", fontSize: "1.2rem" }}>
            App / Web Developer
          </p>
          <p style={{ marginTop: "15px", maxWidth: "600px", marginInline: "auto", color: "#555" }}>
            Transforming concepts into high-performance mobile and web applications with a focus on UI/UX and clean code.
          </p>
        </section>

        {/* Services Section */}
        <section className="hidden-scroll" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "20px", maxWidth: "1200px", margin: "40px auto", padding: "0 20px" }}>
          {services.map((s, i) => (
            <div key={i} style={{ background: "white", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: "10px" }}>{s.icon}</div>
              <h4 style={{ fontSize: "0.9rem", color: "#0f172a" }}>{s.title}</h4>
            </div>
          ))}
        </section>

        {/* Portfolio / Apps Section */}
        <section className="hidden-scroll" style={{ maxWidth: "1200px", margin: "40px auto", padding: "20px" }}>
          <h2 style={{ textAlign: "center", fontSize: "2rem", color: "#0f172a", marginBottom: "40px" }}>My Recent Projects</h2>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px" }}>
            {apps.map((app, i) => (
              <div key={i} style={{ background: "white", borderRadius: "16px", padding: "25px", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)", borderTop: `4px solid ${app.iconBg}`, transition: "transform 0.3s", cursor: "default" }}>
                
                <div style={{ display: "flex", alignItems: "center", gap: "15px", marginBottom: "15px" }}>
                  {/* Placeholder for App Icon */}
                  <div style={{ width: "60px", height: "60px", borderRadius: "12px", background: app.iconBg, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "0.8rem", textAlign: "center" }}>
                    {app.name.slice(0, 4)}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", color: "#0f172a" }}>{app.name}</h3>
                    <span style={{ fontSize: "0.8rem", color: "#64748b" }}>{app.description}</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "20px" }}>
                  {app.ios && (
                    <a href={app.ios} target="_blank" style={{ textDecoration: "none", background: "#000", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600" }}>
                      <i className="fab fa-apple"></i> App Store
                    </a>
                  )}
                  {app.android && (
                    <a href={app.android} target="_blank" style={{ textDecoration: "none", background: "#34a853", color: "white", padding: "8px 16px", borderRadius: "20px", fontSize: "0.85rem", fontWeight: "600" }}>
                      <i className="fab fa-google-play"></i> Play Store
                    </a>
                  )}
                  {app.status === "Development" && (
                    <span style={{ background: "#f1f5f9", color: "#334155", padding: "8px 16px", borderRadius: "20px", fontSize: "0.85rem", border: "1px solid #e2e8f0" }}>
                      🛠️ In Development
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: "center", padding: "40px 20px", background: "#0f172a", color: "white", marginTop: "60px" }}>
          <p>&copy; 2026 VivekM Developer. All Rights Reserved.</p>
          <p style={{ marginTop: "10px", color: "#94a3b8", fontSize: "0.9rem" }}>Building Ideas. Delivering Solutions.</p>
        </footer>
      </main>
    </>
  );
}