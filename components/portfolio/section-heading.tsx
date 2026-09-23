import { Reveal } from './reveal'

interface SectionHeadingProps {
  index: string
  title: string
  subtitle?: string
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span className="h-px flex-1 bg-gradient-brand opacity-60" />
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-muted-foreground">{subtitle}</p>}
    </Reveal>
  )
}
