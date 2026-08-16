import { AnimatedSection, StaggerContainer, StaggerItem } from './ui/AnimatedSection'
import { SectionHeading } from './ui/SectionHeading'

const steps = [
  {
    number: '01',
    title: 'Create Your Class Groups',
    description:
      'Set up groups for each batch or class and register your students in seconds.',
  },
  {
    number: '02',
    title: 'Upload Materials & Schedule Tests',
    description:
      'Share tutes, notes, videos, and links. Create tests and publish announcements to specific groups.',
  },
  {
    number: '03',
    title: 'Students Access Everything Instantly',
    description:
      'Students log in with credentials you provide, view materials, complete tests, and submit work — all from their own app.',
  },
  {
    number: '04',
    title: 'Track Progress in Real Time',
    description:
      'See attendance, submissions, and performance on your dashboard, and identify students who need extra support before it\'s too late.',
  },
]

export function HowItWorks() {
  return (
    <AnimatedSection className="section-padding bg-white" id="how-it-works">
      <div className="container-max">
        <SectionHeading
          title="Get Started in Minutes"
          eyebrow="How It Works"
          align="center"
        />

        {/* Desktop Timeline */}
        <div className="relative hidden lg:block">
          {/* Connector Line */}
          <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

          <StaggerContainer className="grid grid-cols-4 gap-8">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="group relative flex flex-col items-center text-center">
                  {/* Step Circle */}
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-primary shadow-button transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="text-lg font-extrabold text-white">{step.number}</span>
                  </div>
                  {/* Content */}
                  <div className="rounded-2xl border border-border bg-surface p-5 shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-card-hover">
                    <h3 className="mb-2 text-base font-bold text-text-primary">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Mobile Stack */}
        <StaggerContainer className="space-y-4 lg:hidden">
          {steps.map((step, idx) => (
            <StaggerItem key={step.number}>
              <div className="flex gap-4">
                {/* Number + Line */}
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-extrabold text-white shadow-button">
                    {step.number}
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="mt-2 w-0.5 flex-1 bg-gradient-to-b from-primary/60 to-primary/10" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-6">
                  <h3 className="mb-1 text-base font-bold text-text-primary">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{step.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
