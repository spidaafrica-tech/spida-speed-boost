import { PortableText } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'

// Custom components for rendering portable text
const components = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset) return null
      return (
        <img
          src={urlFor(value).width(800).height(400).fit('crop').url()}
          alt={value.alt || ''}
          className="w-full h-auto rounded-lg my-6"
        />
      )
    },
  },
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({ children }: { children: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ value, children }: { value: any; children: React.ReactNode }) => (
      <a href={value.href} className="text-primary hover:underline">
        {children}
      </a>
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-3xl font-bold mb-4 text-foreground">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-2xl font-bold mb-3 text-foreground">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-xl font-semibold mb-2 text-foreground">{children}</h3>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-4 leading-relaxed text-foreground">{children}</p>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground bg-muted/50 py-4 rounded-r-lg my-6">
        {children}
      </blockquote>
    ),
  },
}

export function renderPortableText(content: any[]) {
  return <PortableText value={content} components={components} />
}
