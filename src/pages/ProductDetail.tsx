import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../data/products.js'
import { ProductDetailView } from '../components/ProductDetail'
import { Seo } from '../components/Seo'

export default function ProductDetailPage() {
  const { slug = '' } = useParams()
  const product = getProduct(slug)

  if (!product) {
    return (
      <section className="section" style={{ paddingTop: 'calc(var(--nav-h) + 4rem)' }}>
        <div className="container-a1">
          <h1>Product not found</h1>
          <p className="lede mt-3">That product is not in the current catalogue.</p>
          <p className="mt-3">
            <Link to="/products" className="explore">
              ← Back to products
            </Link>
          </p>
        </div>
      </section>
    )
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: 'A1 Iron & Steel Tanzania Limited' },
    category: product.categoryLabel,
  }

  return (
    <>
      <Seo
        title={product.name}
        description={`${product.name} from A1 Iron & Steel Tanzania Limited. ${product.shortDescription}`}
        path={`/products/${product.slug}`}
        schema={schema}
      />
      <ProductDetailView product={product} />
    </>
  )
}
