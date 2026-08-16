import { Check, Star } from 'lucide-react'
import { AnimatedSection, StaggerContainer, StaggerItem } from './ui/AnimatedSection'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'

const plans = [
  {
    name: 'Basic',
    description:
      'Developing the same SaaS design for your institution, including both the Student app and Tutor app.',
    price: 'LKR 69,000',
    recommended: false,
    features: [
      'Full Tutor App',
      'Full Student App',
      'Student Management',
      'Digital Materials',
      'Online Tests',
      'QR Attendance',
      'Progress Tracking',
      'Instant Announcements',
    ],
  },
  {
    name: 'Advance',
    description:
      'The same full SaaS solution, fully branded to your institution\'s identity — including both apps.',
    price: 'LKR 99,000',
    recommended: true,
    features: [
      'Everything in Basic',
      'Custom Institution Branding',
      'Custom App Name & Icon',
      'Custom Color Scheme',
      'Priority Support',
      'Deployment Assistance',
      'Brand Asset Integration',
      'Dedicated Onboarding',
    ],
  },
]

export function Pricing() {
  return (
    <AnimatedSection className="section-padding bg-surface" id="pricing">
      <div className="container-max">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Yes, you're in the most affordable place."
          eyebrow="Pricing"
          align="center"
        />

        <StaggerContainer className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <div
                tabIndex={0}
                className={`relative flex h-full flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  plan.recommended
                    ? 'border-primary bg-white shadow-[0_0_0_3px_rgba(21,101,232,0.12)] shadow-card-hover'
                    : 'border-border bg-white shadow-card hover:shadow-card-hover'
                }`}
              >
                {/* Recommended Badge */}
                {plan.recommended && (
                  <div className="gradient-primary flex items-center justify-center gap-1.5 py-2.5">
                    <Star size={12} className="fill-warning text-warning" />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                      Recommended
                    </span>
                    <Star size={12} className="fill-warning text-warning" />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-8">
                  {/* Plan Header */}
                  <div className="mb-6 border-b border-border pb-6">
                    <h3 className="mb-2 text-2xl font-extrabold text-text-primary">{plan.name}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-text-secondary">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-3xl font-extrabold sm:text-4xl ${
                          plan.recommended ? 'text-primary' : 'text-text-primary'
                        }`}
                      >
                        {plan.price}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.recommended ? 'bg-primary' : 'bg-success'
                          }`}
                        >
                          <Check size={11} className="text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    href="#contact"
                    variant={plan.recommended ? 'primary' : 'ghost'}
                    className="w-full"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Addon Note */}
        <div className="mt-10 text-center">
          <p className="text-sm font-semibold text-text-secondary">
            Add-on: Ongoing Support & Maintenance — hourly rate, customized to your needs.
          </p>
          <p className="mt-2 text-sm italic text-text-secondary">
            Prices can be negotiated — contact us to discuss what fits your institution.
          </p>
        </div>
      </div>
    </AnimatedSection>
  )
}
