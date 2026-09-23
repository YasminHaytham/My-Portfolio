import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'
import { ProjectCarousel } from './project-carousel'
import { experiences } from '@/lib/portfolio-data'

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <SectionHeading
        index="03"
        title="Projects & experience"
        subtitle="Selected projects, internships, and volunteer work."
      />

      <div className="relative">
        {/* timeline line */}
        <span
          aria-hidden
          className="absolute left-2 top-2 h-full w-px bg-gradient-to-b from-brand-violet via-brand-fuchsia to-brand-cyan opacity-40 sm:left-2.5"
        />

        <ul className="space-y-6">
          {experiences.map((item, i) => (
            <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
              <div className="relative pl-10 sm:pl-12">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 size-4 rounded-full border-2 border-background bg-gradient-brand sm:left-0.5"
                />
                <article className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/40">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-accent">
                      {item.type}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{item.title}</h3>
                  {'tag' in item && item.tag && (
                    <span className="mt-2 inline-flex items-center rounded-full bg-gradient-brand px-2.5 py-0.5 text-xs font-medium text-background">
                      {item.tag}
                    </span>
                  )}
                  <ul className="mt-3 space-y-2">
                    {item.points.map((point, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="text-pretty leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                  {'images' in item && Array.isArray(item.images) && item.images.length > 0 && (
                    <ProjectCarousel images={item.images} title={item.title} />
                  )}
                </article>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
