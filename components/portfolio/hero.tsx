'use client'

import { ArrowDown, Download, Mail, MapPin } from 'lucide-react'
import { Github, Linkedin } from './brand-icons'
import { Reveal } from './reveal'
import { profile } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-24 pb-16"
    >
      {/* ambient gradient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[36rem] rounded-full bg-brand-violet/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-32 size-[32rem] rounded-full bg-brand-cyan/15 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm text-muted-foreground">
            <MapPin className="size-3.5 text-accent" />
            {profile.location}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient">{profile.firstName}</span>.
            <br />I build for the web.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-brand-violet/25 transition-transform hover:scale-[1.03]"
            >
              Get in touch
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Download className="size-4" />
              Download Resume
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-8 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowDown className="size-5 animate-bounce" />
      </a>
    </section>
  )
}
