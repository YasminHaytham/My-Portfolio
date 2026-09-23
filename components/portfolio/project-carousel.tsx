'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function ProjectCarousel({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0)
  const count = images.length

  function go(next: number) {
    setIndex((prev) => (next + count) % count)
  }

  if (count === 0) return null

  return (
    <div className="mt-4">
      <div className="group relative overflow-hidden rounded-xl border border-border bg-muted/30">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="aspect-video w-full shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src || '/placeholder.svg'}
                alt={`${title} — screenshot ${i + 1} of ${count}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Previous screenshot"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur transition hover:bg-background focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group-hover:opacity-100"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Next screenshot"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-border bg-background/70 p-1.5 text-foreground opacity-0 backdrop-blur transition hover:bg-background focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent group-hover:opacity-100"
            >
              <ChevronRight className="size-4" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to screenshot ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-gradient-brand' : 'w-1.5 bg-border hover:bg-muted-foreground'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
