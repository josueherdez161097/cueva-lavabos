import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-line/60 bg-surface">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-3">
        <div>
          <p className="text-2xl font-semibold uppercase tracking-[0.18em]">cuevaa</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
            Lavabos de diseño con lenguaje arquitectónico, materiales sobrios y una presencia visual premium.
          </p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-muted">Navegación</p>
          <div className="space-y-3 text-sm">
            <Link href="/catalogo" className="block hover:text-primary">
              Catálogo
            </Link>
            <Link href="/#inspiracion" className="block hover:text-primary">
              Inspiración
            </Link>
            <Link href="/#coleccion" className="block hover:text-primary">
              Colección destacada
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-muted">Contacto</p>
          <div className="space-y-3 text-sm text-muted">
            <p>hola@cuevaa.com</p>
            <p>+52 555 000 0000</p>
            <p>CDMX, México</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
