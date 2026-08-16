import { MessageSquareOff, EyeOff, Printer } from 'lucide-react'
import {
  AnimatedSection,
  StaggerContainer,
  StaggerItem,
} from './ui/AnimatedSection'
import { SectionHeading } from './ui/SectionHeading'

const painPoints = [
  {
    icon: MessageSquareOff,
    title: 'Scattered Communication',
    description:
      'Important updates get buried in group chats and missed by students and parents.',
  },
  {
    icon: EyeOff,
    title: 'No Visibility on Progress',
    description:
      'Attendance, test scores, and submissions are tracked manually — or not at all.',
  },
  {
    icon: Printer,
    title: 'Rising Costs & Wasted Time',
    description:
      'Printing, reprinting, and delivering tutes and test papers eats into your time and your income.',
  },
]

export function Problem() {
  return (
    <AnimatedSection className="section-padding bg-surface" id="problem">
      <div className="container-max">
        <SectionHeading title="Every Tuition Teacher Knows This Feeling" align="center" />

        <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-text-secondary">
          532 unread WhatsApp messages. A tute PDF nobody can find. A parent asking &ldquo;did my
          child submit the assignment?&rdquo; and you have no idea. Printing hundreds of pages of
          test papers every month, only to reprint when a student loses theirs.
          <br />
          <br />
          Managing a tuition class today means juggling messaging apps, cloud folders, spreadsheets,
          and paper — and something always slips through the cracks.
        </p>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group h-full rounded-2xl border border-border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-error/10 text-error transition-colors group-hover:bg-error group-hover:text-white">
                  <item.icon size={22} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-text-primary">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <p className="mt-14 text-center text-2xl font-extrabold tracking-tight text-text-primary sm:text-3xl">
          Stop the chaos. <span className="text-primary">Start smarter.</span>
        </p>
      </div>
    </AnimatedSection>
  )
}
