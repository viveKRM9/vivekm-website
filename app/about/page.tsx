"use client";

export default function AboutPage() {
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

  return (
    <>
      <section className="pt-32 pb-24 bg-white">
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

      <section className="border-b border-zinc-200 py-20 bg-white">
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
    </>
  );
}