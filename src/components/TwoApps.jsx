import { Check } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './ui/AnimatedSection'
import { SectionHeading } from './ui/SectionHeading'
import { PhoneMockup } from './ui/PhoneMockup'
import tutorDashboard from '../assets/tutor-dashboard.png'
import studentHome from '../assets/student-home.png'

const tutorFeatures = [
  'Manage students and class groups',
  'Upload materials & publish announcements instantly',
  'Create and evaluate tests',
  'Generate QR codes for attendance, polls, and quick info sharing',
  'Monitor class activity from one organized dashboard',
  'Manage admins and settings, with full light/dark mode support',
]

const studentFeatures = [
  'Log in securely with credentials from their tutor',
  'Scan a monthly QR code to validate access',
  'View and download materials, or mark lessons complete',
  'Take tests and check results instantly, with tutor comments',
  'Track their own learning progress and course completion',
  'Manage their own profile',
]

function AppCard({ title, subtitle, features, variant, src }) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
        variant === 'tutor'
          ? 'border-primary/20 bg-white shadow-card'
          : 'border-success/20 bg-white shadow-card'
      }`}
    >
      {/* Top Accent Bar */}
      <div
        className={`h-1.5 w-full ${variant === 'tutor' ? 'bg-gradient-to-r from-primary-dark to-primary' : 'bg-gradient-to-r from-success to-emerald-400'}`}
      />
      
      <div className="flex flex-col gap-6 p-8 lg:flex-row lg:items-start">
        {/* Phone Mockup */}
        <div className="flex justify-center lg:justify-start">
          <PhoneMockup
            variant={variant}
            src={src}
            alt={variant === 'tutor' ? 'Tutor dashboard screenshot' : 'Student home screenshot'}
            className="scale-90 lg:scale-100"
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div
            className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${
              variant === 'tutor'
                ? 'bg-primary/10 text-primary'
                : 'bg-success/10 text-success'
            }`}
          >
            {variant === 'tutor' ? 'Tutor App' : 'Student App'}
          </div>
          <h3 className="mb-1 text-2xl font-extrabold text-text-primary">{title}</h3>
          <p className="mb-6 text-sm text-text-secondary">{subtitle}</p>

          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    variant === 'tutor' ? 'bg-primary' : 'bg-success'
                  }`}
                >
                  <Check size={11} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-sm leading-snug text-text-secondary">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export function TwoApps() {
  return (
    <AnimatedSection className="section-padding bg-surface" id="two-apps">
      <div className="container-max">
        <SectionHeading
          title="Built for Both Sides of the Classroom"
          eyebrow="Two Dedicated Apps"
          align="center"
        />

        <StaggerContainer className="grid gap-8 lg:grid-cols-2">
          <StaggerItem>
            <AppCard
              title="For Tutors"
              subtitle="A powerful control center to run your entire tuition class"
              features={tutorFeatures}
              variant="tutor"
              src={tutorDashboard}
            />
          </StaggerItem>
          <StaggerItem>
            <AppCard
              title="For Students"
              subtitle="A simple, mobile-friendly space to stay on top of learning"
              features={studentFeatures}
              variant="student"
              src={studentHome}
            />
          </StaggerItem>
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
