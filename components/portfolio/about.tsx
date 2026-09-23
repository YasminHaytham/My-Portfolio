import { GraduationCap, Languages } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { education, profile, spokenLanguages } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeading index="01" title="About me" />

      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-3">
          {profile.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 90}>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="space-y-4 lg:col-span-2">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <GraduationCap className="size-5 text-accent" />
                <h3 className="font-semibold">Education</h3>
              </div>
              <ul className="space-y-5">
                {education.map((item) => (
                  <li key={item.school}>
                    <p className="text-sm font-medium leading-snug">{item.school}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                    <p className="mt-1 font-mono text-xs text-accent">{item.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <Languages className="size-5 text-accent" />
                <h3 className="font-semibold">Languages</h3>
              </div>
              <ul className="space-y-2">
                {spokenLanguages.map((lang) => (
                  <li
                    key={lang.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span>{lang.name}</span>
                    <span className="text-muted-foreground">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
