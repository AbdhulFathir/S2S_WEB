import {
  Users,
  UsersRound,
  FileText,
  ClipboardList,
  BarChart3,
  QrCode,
  Bell,
  Moon,
  LayoutDashboard,
  Cloud,
  Shield,
  Clock,
  Zap,
  LineChart,
} from 'lucide-react'
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from './ui/AnimatedSection'
import { SectionHeading } from './ui/SectionHeading'

const features = [
  {
    icon: Users,
    title: 'Student Management',
    description: 'Add, organize, and manage all your students in one place.',
  },
  {
    icon: UsersRound,
    title: 'Class Group Management',
    description: 'Group students by class, batch, or session for easy handling.',
  },
  {
    icon: FileText,
    title: 'Digital Tutes & Materials',
    description: 'Upload once, share unlimited times — notes, PDFs, videos, and links.',
  },
  {
    icon: ClipboardList,
    title: 'Online Tests',
    description: 'Create, conduct, and evaluate tests instantly with automatic scoring.',
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    description: "Track each student's performance with smart, real-time reports.",
  },
  {
    icon: QrCode,
    title: 'QR Attendance',
    description: 'Mark attendance and validate monthly access with a single scan.',
  },
  {
    icon: Bell,
    title: 'Instant Announcements',
    description: 'Notify your students the moment something changes — no repeat messages.',
  },
  {
    icon: Moon,
    title: 'Light & Dark Mode',
    description: 'Use the app your way, day or night.',
  },
]

const trustChips = [
  { icon: LayoutDashboard, label: 'All-in-One Dashboard' },
  { icon: Cloud, label: 'Cloud Storage' },
  { icon: Shield, label: 'Secure & Safe' },
  { icon: Clock, label: 'Save Time' },
  { icon: Zap, label: 'Instant Updates' },
  { icon: LineChart, label: 'Smart Analytics' },
]

export function Features() {
  return (
    <AnimatedSection className="section-padding bg-surface" id="features">
      <div className="container-max">
        <SectionHeading
          title="Everything a Tutor Needs. In One Dashboard."
          subtitle="Manage smarter. Teach better."
          align="center"
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div
                tabIndex={0}
                className="group flex h-full flex-col items-center rounded-2xl border border-border bg-white p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <feature.icon size={26} />
                </div>
                <h3 className="mb-2 text-base font-bold text-text-primary">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {trustChips.map((chip) => (
            <span
              key={chip.label}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-text-secondary shadow-sm"
            >
              <chip.icon size={14} className="text-primary" />
              {chip.label}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
