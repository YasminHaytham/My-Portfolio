import { Rocket } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { skillGroups } from '@/lib/portfolio-data'

const accentDot: Record<string, string> = {
  violet: 'bg-brand-violet',
  fuchsia: 'bg-brand-fuchsia',
  cyan: 'bg-brand-cyan',
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-y border-border bg-card/30 py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          index="02"
          title="Skills"
          subtitle="A front-end developer proficient in HTML, CSS, and JavaScript, building toward full-stack."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
                <div className="mb-5 flex items-center gap-2">
                  <span className={`size-2.5 rounded-full ${accentDot[group.accent]}`} />
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    {group.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-sm"
                    >
                      <span className="font-medium">{item.name}</span>
                      {item.level && (
                        <span className="text-xs text-muted-foreground">· {item.level}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-accent/30 bg-gradient-to-br from-brand-violet/10 via-brand-fuchsia/5 to-brand-cyan/10 p-6">
            <div className="rounded-xl bg-gradient-brand p-2.5 text-primary-foreground">
              <Rocket className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold">Focused on back-end growth</h3>
              <p className="mt-1 text-pretty text-muted-foreground">
                I&apos;m especially interested and invested in growing my back-end development
                skills — deepening my work with Node.js, Angular, MongoDB, and Python (Django) to
                build complete, end-to-end applications.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
