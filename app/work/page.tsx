"use client";

export default function WorkPage() {
  // --- Copy your projects data here ---
  const projects = [
    {
      category: "Mobile Application",
      title: "BeneFittz",
      description: "A complete rewards and benefits platform for shoppers. Earn, track, and redeem points seamlessly at partner shops.",
      metrics: ["Live on Stores", "Reward System", "User Friendly"],
      ios: "https://apps.apple.com/in/app/benefittz/id6746153320",
      android: "https://play.google.com/store/apps/details?id=com.benefitt.app"
    },
    {
      category: "Mobile Application",
      title: "Green Vision Cleansing",
      description: "An employee time-tracking app designed for cleaning businesses to manage worker shifts, locations, and attendance effectively.",
      metrics: ["Time Tracking", "Shift Management", "Live"],
      ios: "https://apps.apple.com/in/app/green-vision-cleansing2-0/id6479843416",
      android: "https://play.google.com/store/apps/details?id=com.green.greencleansing"
    },
    {
      category: "Smart Management (In Dev)",
      title: "GateNest",
      description: "A smart apartment guest management system allowing societies to digitally register visitors, manage security logs, and ensure safety.",
      metrics: ["Guest Logs", "Security", "In Development"],
      ios: null,
      android: "https://play.google.com/store/apps/details?id=com.gate.nest"
    },
    {
      category: "Kids Application (In Dev)",
      title: "Kids FunZone",
      description: "An interactive and educational mobile app designed for children to learn through fun games, puzzles, and engaging activities.",
      metrics: ["Interactive UI", "Educational", "In Development"],
      ios: null,
      android: "https://play.google.com/store/apps/details?id=com.kids.world"
    },
  ];

  return (
    <section className="bg-zinc-950 py-32 text-white min-h-screen">
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
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}