import { products } from '@/data/products';
import { MotionFade } from '@/components/ui/motion-fade';
import { ProductCard } from '@/components/product-card';

export function FeaturedProducts() {
  const featured = products.filter((product) => product.featured);

  return (
    <section id="coleccion" className="container-shell py-20">
      <MotionFade>
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Colección destacada</p>
            <h2 className="section-title mt-3">Una selección inicial con presencia premium.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">
            Esta base está pensada para que puedas cargar nuevos modelos, materiales, dimensiones e imágenes sin romper
            la estructura visual del sitio.
          </p>
        </div>
      </MotionFade>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featured.map((product, index) => (
          <MotionFade key={product.slug} delay={index * 0.08}>
            <ProductCard product={product} />
          </MotionFade>
        ))}
      </div>
    </section>
  );
}
