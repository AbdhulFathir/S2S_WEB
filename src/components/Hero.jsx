import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/Button'
import { PhoneMockup } from './ui/PhoneMockup'
import tutorDashboard from '../assets/tutor-dashboard.png'
import studentHome from '../assets/student-home.png'

export function Hero() {
  return (
    <section className="gradient-primary relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

      <div className="container-max relative px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm">
              Built for Modern Tutors
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Still Running Your Tuition Class Through WhatsApp?
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Scribble2Scrabble is the all-in-one app for tuition teachers — manage students,
              share tutes, run tests, and track attendance, without the lost messages, missed
              updates, and printing costs.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#pricing" variant="secondary">
                Start Today <ArrowRight size={16} />
              </Button>
              <Button href="#how-it-works" variant="ghost">
                See How It Works
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/60">
              Two dedicated apps — one for Tutors, one for Students — working together in real
              time.
            </p>
          </motion.div>

          <motion.div
            className="relative flex items-end justify-center gap-4 sm:gap-6 lg:justify-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhoneMockup
              variant="tutor"
              label="Tutor App"
              src={tutorDashboard}
              alt="Tutor dashboard screenshot"
              className="translate-y-6 sm:translate-y-8"
            />
            <PhoneMockup
              variant="student"
              label="Student App"
              src={studentHome}
              alt="Student home screenshot"
              className="-translate-y-2"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
