import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, products } from '@/data/products';
import { formatPrice } from '@/lib/utils';

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: 'Producto no encontrado | Cueva' };
  }

  return {
    title: `${product.name} | Cueva`,
    description: product.subtitle,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="container-shell py-16 md:py-20">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="relative aspect-[4/4.5] overflow-hidden rounded-[2rem] bg-surface card-border">
            <Image src={product.image} alt={product.name} fill className="object-cover" sizes="100vw" priority />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {product.gallery.map((src) => (
              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-surface card-border">
                <Image src={src} alt={product.name} fill className="object-cover" sizes="50vw" />
              </div>
            ))}
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{product.name}</h1>
          <p className="mt-5 text-lg text-muted">{product.subtitle}</p>
          <p className="mt-6 text-2xl font-semibold text-primary">{formatPrice(product.price)}</p>

          <div className="mt-8 rounded-[1.75rem] bg-surface p-6 card-border">
            <p className="text-sm leading-7 text-muted">{product.description}</p>

            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-center justify-between gap-4 border-b border-line/60 pb-4">
                <dt className="text-muted">Material</dt>
                <dd className="font-medium">{product.material}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-line/60 pb-4">
                <dt className="text-muted">Dimensiones</dt>
                <dd className="font-medium">{product.dimensions}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-muted">Acabado</dt>
                <dd className="font-medium">{product.finish}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://wa.me/529990000000?text=Hola%2C%20quiero%20informaci%C3%B3n%20del%20lavabo%20Cueva"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Solicitar información
            </Link>
            <Link
              href="/catalogo"
              className="rounded-full border border-line px-6 py-3 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              Volver al catálogo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
