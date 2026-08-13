"use client";

export default function SolutionsPage() {
  return (
    <section className="min-h-screen py-32 bg-white">
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
  );
}