import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './ui/AnimatedSection'
import { SectionHeading } from './ui/SectionHeading'

const faqs = [
  {
    question: 'Do I need separate apps for tutors and students?',
    answer:
      'Yes — Scribble2Scrabble includes two dedicated apps, one built for tutors to manage classes and one for students to learn and stay updated. They work together in real time.',
  },
  {
    question: 'How does attendance work?',
    answer:
      'Tutors generate a monthly QR code. Students scan it in the app to validate their attendance and access for that month.',
  },
  {
    question: 'Can I brand the app for my own institution?',
    answer:
      'Yes — our Advance plan builds the same platform with your institution\'s own branding.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, student and class data is stored securely with protection built into the platform.',
  },
  {
    question: 'Do students need to pay separately?',
    answer:
      'No — students use the app with login credentials provided by their tutor as part of the institution\'s plan.',
  },
]

function FAQItem({ question, answer, index }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
        open ? 'border-primary/30 shadow-card' : 'border-border hover:border-primary/20'
      } bg-white`}
    >
      <button
        type="button"
        id={`faq-btn-${index}`}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-bold text-text-primary">{question}</span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            open ? 'bg-primary text-white' : 'bg-surface text-text-secondary'
          }`}
        >
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>

      <div
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-btn-${index}`}
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="border-t border-border px-6 pb-5 pt-3 text-sm leading-relaxed text-text-secondary">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  return (
    <AnimatedSection className="section-padding bg-surface" id="faq">
      <div className="container-max">
        <SectionHeading
          title="Frequently Asked Questions"
          eyebrow="FAQ"
          align="center"
        />

        <StaggerContainer className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, idx) => (
            <StaggerItem key={faq.question}>
              <FAQItem question={faq.question} answer={faq.answer} index={idx} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  )
}
