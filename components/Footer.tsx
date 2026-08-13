import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-lg font-bold text-white shadow-lg">VM</div>
              <div>
                <div className="text-xl font-bold tracking-tight">VivekM Technologies</div>
                <div className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-400">Digital Solutions & Development</div>
              </div>
            </div>
            <p className="mt-6 max-w-md leading-7 text-zinc-400">Building modern websites, mobile applications, and software solutions that help businesses grow in the digital era.</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Services</h3>
            <div className="mt-5 space-y-3 text-sm text-zinc-400">
              <Link href="/services" className="block hover:text-white transition">Web Development</Link>
              <Link href="/services" className="block hover:text-white transition">Mobile App Development</Link>
              <Link href="/services" className="block hover:text-white transition">UI/UX Design</Link>
              <Link href="/services" className="block hover:text-white transition">Cloud & Backend</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">Contact</h3>
            <div className="mt-5 space-y-3 text-sm text-zinc-400">
              <a href="mailto:rncvivek@gmail.com" className="block hover:text-white transition">rncvivek@gmail.com</a>
              <a href="https://api.whatsapp.com/send?phone=919693427671" target="_blank" className="block hover:text-white transition">+91 9693427671</a>
              <div>Faridabad, Haryana, India</div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-7 text-sm text-zinc-500">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <span>© {new Date().getFullYear()} VivekM Technologies. All rights reserved.</span>
            <span className="text-xs tracking-widest">BUILT WITH ❤️ IN INDIA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}