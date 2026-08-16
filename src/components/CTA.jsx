import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'

export function CTA() {
  return (
    <section className="gradient-primary relative overflow-hidden py-24 lg:py-32" id="cta">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-primary/40 blur-3xl" />

      {/* Subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container-max relative px-4 text-center sm:px-6 lg:px-8">
        <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
          Get Started Today
        </span>
        <h2 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3rem]">
          Ready to Modernize Your
          <br className="hidden sm:block" /> Tuition Class?
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/75">
          Join the next generation of tuition management. Manage students, share materials, run
          tests, and track attendance — all from one app.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button href="#pricing" variant="white" className="px-8 py-3.5 text-base">
            Start Today <ArrowRight size={18} />
          </Button>
          <Button href="#how-it-works" variant="ghost" className="px-8 py-3.5 text-base">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  )
}
