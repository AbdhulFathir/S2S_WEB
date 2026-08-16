import { Phone, Mail, ExternalLink } from 'lucide-react'
import { Logo } from './Logo'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
]

const teamContacts = [
  {
    role: 'Product Owner',
    name: 'Zulfa Zulfikar',
    phone: '+94 76 918 8841',
    email: 'Sulfafathima11@gmail.com',
  },
  // {
  //   role: 'Product Manager',
  //   name: 'Tharushi Wijetunga',
  //   phone: '+94 76 308 9219',
  //   email: 'tharushiwijethunga999@gmail.com',
  // },
]

export function Footer() {
  return (
    <footer className="bg-dark-bg" id="contact">
      {/* Main Footer Content */}
      <div className="container-max px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          {/* Brand Column */}
          <div>
            <Logo variant="light" size="md" showTagline />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-text-muted-dark">
              The all-in-one tuition management platform for modern tutors and coaching centers in
              Sri Lanka.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-text-on-dark">
              Contact Us
            </h3>

            {/* Main phone */}
            <a
              href="tel:+94702515037"
              className="group mb-6 flex items-center gap-3 text-text-muted-dark transition-colors hover:text-text-on-dark"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Phone size={15} />
              </div>
              <span className="text-sm font-medium">+94 70 251 5037</span>
            </a>

            {/* Team Contacts */}
            <div className="space-y-5">
              {teamContacts.map((contact) => (
                <div
                  key={contact.name}
                  className="rounded-xl border border-white/5 bg-dark-card p-4"
                >
                  <p className="mb-0.5 text-xs font-bold uppercase tracking-wider text-primary">
                    {contact.role}
                  </p>
                  <p className="mb-2 font-semibold text-text-on-dark">{contact.name}</p>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-1.5 text-xs text-text-muted-dark hover:text-text-on-dark"
                  >
                    <Phone size={11} />
                    {contact.phone}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="mt-1 flex items-center gap-1.5 text-xs text-text-muted-dark hover:text-primary"
                  >
                    <Mail size={11} />
                    {contact.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-text-on-dark">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-text-muted-dark transition-colors hover:text-primary"
                  >
                    {/* <ExternalLink size={12} /> */}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="container-max flex flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-text-muted-dark">
            © {new Date().getFullYear()} Scribble2Scrabble. All rights reserved.
          </p>
          <p className="text-sm font-extrabold tracking-tight text-text-on-dark">
            Turn your <span className="text-primary">Scribble</span> to{' '}
            <span className="text-primary">Scrabble.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
