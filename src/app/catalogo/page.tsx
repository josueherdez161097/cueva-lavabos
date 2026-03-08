import type { Metadata } from 'next';
import { ProductCard } from '@/components/product-card';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Catálogo | Cueva',
  description: 'Explora la colección de lavabos de diseño de Cueva.',
};

export default function CatalogPage() {
  return (
    <section className="container-shell py-20">
      <div className="max-w-3xl">
        <p className="eyebrow">Catálogo</p>
        <h1 className="section-title mt-3">Colección completa de lavabos.</h1>
        <p className="mt-5 text-sm leading-7 text-muted">
          Esta página ya está preparada para evolucionar a filtros reales, búsqueda, CMS o integración con inventario.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
