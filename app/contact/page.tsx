"use client";

export default function ContactPage() {
  return (
    <section className="py-32 bg-white min-h-screen border-t border-zinc-200">
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
  );
}