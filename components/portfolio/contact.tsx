import { Download, Mail, Phone } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { profile } from '@/lib/portfolio-data'

const contactCards = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    label: 'GitHub',
    value: profile.github.replace(/^https?:\/\//, ''),
    href: profile.github,
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yasmin-haytham',
    href: profile.linkedin,
    Icon: Linkedin,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    Icon: Phone,
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-card/30 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="04"
          title="Get in touch"
          subtitle="I'm open to internships, collaborations, and front-end opportunities. Let's build something together."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {contactCards.map((card, i) => (
            <Reveal key={card.label} delay={i * 80}>
              <a
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-accent/50"
              >
                <span className="rounded-xl bg-gradient-brand p-3 text-primary-foreground">
                  <card.Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                    {card.label}
                  </span>
                  <span className="block truncate font-medium group-hover:text-accent">
                    {card.value}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex justify-center">
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-lg shadow-brand-violet/25 transition-transform hover:scale-[1.03]"
            >
              <Download className="size-4" />
              Download my resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
