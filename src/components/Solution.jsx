import { AnimatedSection } from './ui/AnimatedSection'
import { SectionHeading } from './ui/SectionHeading'

export function Solution() {
  return (
    <AnimatedSection className="section-padding bg-white" id="solution">
      <div className="container-max">
        <SectionHeading title="One App. Everything Your Tuition Class Needs." align="center" />

        <div className="mx-auto max-w-3xl space-y-6 text-center text-lg leading-relaxed text-text-secondary">
          <p>
            Scribble2Scrabble replaces scattered tools — messaging apps, cloud folders,
            spreadsheets, printed papers — with a single, structured platform built specifically
            for tuition teachers and coaching centers.
          </p>
          <p>
            Create class groups, upload materials once and share them instantly, run digital tests
            with automatic results, track attendance with a simple QR scan, and see exactly how
            every student is progressing — all from your phone.
          </p>
          <p>
            Students get their own dedicated app to access lessons, take tests, and stay updated —
            no more digging through chat history for a PDF.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-4 sm:gap-8">
          {[
            { value: '70%', label: 'Learning Progress' },
            { value: '30%', label: 'Course Complete' },
            { value: '100%', label: 'Digital Delivery' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <div className="relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28">
                <svg className="absolute inset-0 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#E2E5EA" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="#1565E8"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${parseInt(stat.value) * 2.64} 264`}
                  />
                </svg>
                <span className="text-xl font-extrabold text-primary sm:text-2xl">{stat.value}</span>
              </div>
              <p className="mt-3 text-center text-xs font-semibold text-text-secondary sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
