import { products } from '../data/products.js'
import { productShowSrc } from '../assets/products'
import { PageHero } from '../components/PageHero'
import { ProductWall } from '../components/ProductWall'
import { Button } from '../components/Button'
import { SteelLine } from '../components/SteelLine'
import { Seo } from '../components/Seo'

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
      <PageHero
        compact
        className="products-hero"
        title={'Built for strength.\nEngineered for progress.'}
        image={productShowSrc('tmt-bars')}
        imageAlt="Bundled TMT bars in the mill yard"
      >
        <p className="lede products-hero-copy">
          Explore the A1 Iron &amp; Steel product range — manufactured to meet the demands of
          construction, engineering, infrastructure, and industry.
        </p>
      </PageHero>

      <ProductWall products={products} />

      <section className="show-cta" aria-labelledby="show-cta-title">
        <div className="container-a1">
          <p className="kicker">Next</p>
          <h2 id="show-cta-title">The right steel for every build.</h2>
          <SteelLine className="my-3" />
          <p className="lede">
            From reinforcement to structural sections, A1 Iron &amp; Steel delivers products
            engineered for strength, reliability, and progress.
          </p>
          <div className="hero-actions mt-4">
            <Button to="/contact">Talk to Our Team →</Button>
            <Button to="/contact" variant="outline">
              Contact Us →
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
