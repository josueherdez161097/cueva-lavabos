import Link from 'next/link';
import { MotionFade } from '@/components/ui/motion-fade';

export function BrandSection() {
  return (
    <section className="container-shell py-20">
      <MotionFade>
        <div className="grid gap-10 rounded-[2rem] bg-primary px-8 py-12 text-white md:grid-cols-[1.2fr_0.8fr] md:px-12">
          <div>
            <p className="eyebrow !text-white/60">La esencia de Cuevaa</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Un lenguaje sobrio, táctil y arquitectónico para piezas que se sienten permanentes.
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-6">
            <p className="text-sm leading-7 text-white/80">
              El proyecto está listo para evolucionar a una tienda completa con catálogo administrable, formularios de
              cotización, pasarela de pago y páginas editoriales de marca.
            </p>
            <Link
              href="/catalogo"
              className="inline-flex w-fit rounded-full bg-white px-5 py-3 text-sm font-medium text-primary transition hover:opacity-90"
            >
              Abrir catálogo completo
            </Link>
          </div>
        </div>
      </MotionFade>
    </section>
  );
}
