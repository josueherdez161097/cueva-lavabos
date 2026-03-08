import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import { formatPrice } from '@/lib/utils';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] bg-surface card-border">
      <div className="relative aspect-[4/4.6] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted">{product.category}</p>
            <h3 className="mt-2 text-xl font-semibold">{product.name}</h3>
          </div>
          <p className="text-sm font-medium text-primary">{formatPrice(product.price)}</p>
        </div>

        <p className="text-sm leading-6 text-muted">{product.subtitle}</p>

        <Link
          href={`/catalogo/${product.slug}`}
          className="inline-flex rounded-full border border-line px-4 py-2 text-sm transition hover:border-primary hover:text-primary"
        >
          Ver producto
        </Link>
      </div>
    </article>
  );
}
