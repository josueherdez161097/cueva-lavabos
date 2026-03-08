import { DraftingCompass, Palette, ShieldCheck } from 'lucide-react';
import { MotionFade } from '@/components/ui/motion-fade';

const items = [
  {
    icon: DraftingCompass,
    title: 'Diseño con intención',
    text: 'Piezas pensadas para integrarse con interiorismo contemporáneo y arquitectura sobria.',
  },
  {
    icon: Palette,
    title: 'Paletas personalizables',
    text: 'La base del proyecto queda lista para ajustar branding, tonos y acabados sin rehacer componentes.',
  },
  {
    icon: ShieldCheck,
    title: 'Base optimizada',
    text: 'Arquitectura modular en Next.js preparada para crecer a ecommerce, CMS y sistema de cotización.',
  },
];

export function FeatureGrid() {
  return (
    <section className="container-shell py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <MotionFade key={item.title} delay={index * 0.08}>
              <article className="rounded-[1.75rem] bg-surface p-8 card-border">
                <div className="inline-flex rounded-full bg-primary/8 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
              </article>
            </MotionFade>
          );
        })}
      </div>
    </section>
  );
}
