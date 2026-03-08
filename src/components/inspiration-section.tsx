import Image from 'next/image';
import { MotionFade } from '@/components/ui/motion-fade';

const images = [
  '/images/inspiration-01.jpeg',
  '/images/inspiration-02.jpeg',
  '/images/inspiration-03.jpeg',
];

export function InspirationSection() {
  return (
    <section id="inspiracion" className="bg-surface py-20">
      <div className="container-shell">
        <MotionFade>
          <p className="eyebrow">Inspiración</p>
          <h2 className="section-title mt-3 max-w-3xl">Ambientes que muestran cómo vive la marca dentro del espacio.</h2>
        </MotionFade>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.3fr_0.7fr]">
          <MotionFade>
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem]">
              <Image src={images[0]} alt="Baño con lavabo de diseño" fill className="object-cover" sizes="100vw" />
            </div>
          </MotionFade>

          <div className="grid gap-6">
            {images.slice(1).map((src, index) => (
              <MotionFade key={src} delay={index * 0.08}>
                <div className="relative min-h-[198px] overflow-hidden rounded-[2rem]">
                  <Image src={src} alt="Inspiración de interiorismo" fill className="object-cover" sizes="50vw" />
                </div>
              </MotionFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
