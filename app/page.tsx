export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12 text-white">
      <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl backdrop-blur">
        <p className="text-sm uppercase tracking-[0.4em] text-emerald-300">Live Demo</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Hello from Arnott 👋
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/80">
          This is a bare-bones Next.js + Tailwind app pushed directly from the
          agent workspace. Swap the copy, drop in new sections, or bolt on APIs
          in real time to show what OpenClaw can build on demand.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-white/60">Stack</p>
            <p className="text-xl font-medium">Next.js · Tailwind · TypeScript</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-white/60">Deployment</p>
            <p className="text-xl font-medium">Ready for Vercel</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <span className="rounded-full border border-emerald-300/40 px-4 py-1 text-sm text-emerald-200">
            Instant scaffolding
          </span>
          <span className="rounded-full border border-emerald-300/40 px-4 py-1 text-sm text-emerald-200">
            Real tooling access
          </span>
          <span className="rounded-full border border-emerald-300/40 px-4 py-1 text-sm text-emerald-200">
            Human-in-the-loop
          </span>
        </div>
      </div>
    </div>
  );
}
