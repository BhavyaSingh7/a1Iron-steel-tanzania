import { products } from '../data/products.js'
import { images } from '../assets/images'
import { PageHero } from '../components/PageHero'
import { ProductGrid } from '../components/ProductGrid'
import { Button } from '../components/Button'
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
        title="Our products"
        text="Steel engineered for performance. A digital catalogue for construction, infrastructure and industry."
        image={images.productsBanner}
      />
      <section className="section">
        <div className="container-a1">
          <ProductGrid products={products} filterable variant="catalogue" />
          <div className="quote-strip mt-5">
            <div>
              <p className="kicker mb-2">Sales</p>
              <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>Request a quote</h2>
              <p className="lede mt-2">
                Technical sheets follow mill confirmation. Sizes and standards remain [TECHNICAL DATA TO BE
                ADDED] until verified.
              </p>
            </div>
            <Button to="/contact">Request a quote</Button>
          </div>
        </div>
      </section>
    </>
  )
}
