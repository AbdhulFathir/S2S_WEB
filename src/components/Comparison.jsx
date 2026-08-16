import { X, Check } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './ui/AnimatedSection'
import { SectionHeading } from './ui/SectionHeading'

const comparisons = [
  {
    old: 'High printing costs, every batch',
    smart: 'Digital tutes — create once, share unlimited',
  },
  {
    old: 'Paper waste from printing & reprinting',
    smart: 'Online tests — instant, automatic, paperless',
  },
  {
    old: 'Transport & delivery of physical tutes',
    smart: 'Instant delivery — shared with students in seconds',
  },
  {
    old: 'Manual, time-consuming tracking',
    smart: 'Smart, automated progress tracking',
  },
  {
    old: 'Lost papers mean starting over',
    smart: 'Save money and time — teach better',
  },
]

export function Comparison() {
  return (
    <AnimatedSection className="section-padding bg-white" id="comparison">
      <div className="container-max">
        <SectionHeading
          title="Stop Spending. Start Saving."
          eyebrow="Why Switch"
          align="center"
        />

        {/* Table Header */}
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border shadow-card">
          {/* Column Headers */}
          <div className="grid grid-cols-2">
            <div className="flex items-center gap-3 border-b border-r border-border bg-error/5 px-6 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-error/10">
                <X size={16} className="text-error" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-error">The Old Way</span>
            </div>
            <div className="flex items-center gap-3 border-b border-border bg-success/5 px-6 py-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10">
                <Check size={16} className="text-success" strokeWidth={2.5} />
              </div>
              <span className="font-extrabold text-success">The Smart Way</span>
            </div>
          </div>

          {/* Rows */}
          <StaggerContainer>
            {comparisons.map((row, idx) => (
              <StaggerItem key={idx}>
                <div
                  className={`grid grid-cols-2 transition-colors hover:bg-surface ${
                    idx < comparisons.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  {/* Old Way */}
                  <div className="flex items-center gap-3 border-r border-border px-6 py-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-error/10">
                      <X size={12} className="text-error" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm text-text-secondary line-through decoration-error/40">{row.old}</span>
                  </div>
                  {/* Smart Way */}
                  <div className="flex items-center gap-3 px-6 py-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10">
                      <Check size={12} className="text-success" strokeWidth={2.5} />
                    </div>
                    <span className="text-sm font-semibold text-text-primary">{row.smart}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  )
}
