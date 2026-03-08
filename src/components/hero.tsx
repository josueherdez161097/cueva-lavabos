import Link from 'next/link';
import { MotionFade } from '@/components/ui/motion-fade';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(76,55,40,0.92), rgba(34,31,28,0.82)), url('/images/hero-01.jpeg')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      />
      <div className="container-shell relative flex min-h-[78vh] items-center py-20 text-white md:min-h-[88vh]">
        <div className="max-w-3xl">
          <MotionFade>
            <p className="eyebrow !text-white/70">Diseño arquitectónico para baño</p>
          </MotionFade>
          <MotionFade delay={0.08}>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight md:text-7xl">
              Lavabos que convierten el baño en una pieza de diseño.
            </h1>
          </MotionFade>
          <MotionFade delay={0.14}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
              cuevaa reúne formas limpias, materiales sobrios y una estética contemporánea para proyectos residenciales,
              hoteleros y comerciales.
            </p>
          </MotionFade>
          <MotionFade delay={0.2}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/catalogo" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-dark transition hover:opacity-90">
                Explorar catálogo
              </Link>
              <Link href="#coleccion" className="rounded-full border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10">
                Ver colección destacada
              </Link>
            </div>
          </MotionFade>
        </div>
      </div>
    </section>
  );
}
