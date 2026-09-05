import { products } from '../data/products.js'
import { PageHero } from '../components/PageHero'
import { ProductGrid } from '../components/ProductGrid'
import { SectionHeading } from '../components/SectionHeading'
import { Button } from '../components/Button'
import { Seo } from '../components/Seo'
import { CTASection } from '../components/CTASection'

export default function Products() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'A1 Iron & Steel Tanzania products',
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://a1ironsteel.co.tz/products/${p.slug}`,
      name: p.name,
    })),
  }

  return (
    <>
      <Seo
        title="Our Products"
        description="Steel products from A1 Iron & Steel Tanzania Limited: TMT bars, round bars, wire rods, angles, channels, flats, hollow sections, mesh and fencing wire."
        path="/products"
        schema={schema}
      />
      <PageHero title="Our products" text="Steel engineered for performance." />
      <section className="section">
        <div className="container-a1">
          <SectionHeading kicker="Catalogue" title={'Specified for\nconstruction and industry.'} />
          <div className="mt-5">
            <ProductGrid products={products} filterable cta="View product" />
          </div>
          <div className="quote-strip mt-5">
            <div>
              <p className="kicker mb-2">Sales</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>Need a quotation?</h2>
              <p className="lede mt-2">Tell us the product, quantity and destination. Technical sheets will follow once mill data is confirmed.</p>
            </div>
            <Button to="/contact">Request a quote</Button>
          </div>
        </div>
      </section>
      <CTASection
        title={"Let’s build something\nstronger."}
        text="Talk to our team about your steel requirements."
        cta="Get in touch"
        to="/contact"
      />
    </>
  )
}
