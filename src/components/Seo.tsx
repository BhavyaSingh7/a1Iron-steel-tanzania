import { useEffect } from 'react'
import { company } from '../data/company'

type Props = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  image?: string
  schema?: Record<string, unknown> | Record<string, unknown>[]
}

const site = 'https://a1ironsteel.co.tz'

export function Seo({ title, description, path, type = 'website', image, schema }: Props) {
  const url = `${site}${path}`
  const full = `${title} | ${company.shortName}`
  const json = schema ? JSON.stringify(schema) : ''

  useEffect(() => {
    document.title = full
    const set = (attr: string, key: string, value: string) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }
    set('name', 'description', description)
    set('property', 'og:title', full)
    set('property', 'og:description', description)
    set('property', 'og:type', type)
    set('property', 'og:url', url)
    set('name', 'twitter:card', 'summary_large_image')
    set('name', 'twitter:title', full)
    set('name', 'twitter:description', description)
    if (image) {
      set('property', 'og:image', image)
      set('name', 'twitter:image', image)
    }
    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = url

    const id = 'a1-jsonld'
    let script = document.getElementById(id)
    if (json) {
      if (!script) {
        script = document.createElement('script')
        script.id = id
        ;(script as HTMLScriptElement).type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = json
    } else if (script) {
      script.remove()
    }
  }, [full, description, url, type, image, json])

  return null
}

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.legalName,
  url: site,
  description:
    'Steel manufacturer in Tanzania producing TMT bars, structural steel, wire products and related construction steel.',
  areaServed: 'Tanzania',
}
