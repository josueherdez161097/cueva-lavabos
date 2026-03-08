import Link from 'next/link';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '#coleccion', label: 'Colección' },
  { href: '#marca', label: 'Marca' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-theme bg-[color:var(--background)]/90 backdrop-blur">
      <div className="container-shell flex h-18 items-center justify-between gap-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-[0.22em] uppercase">
          Cueva
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm transition-opacity hover:opacity-70"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/catalogo"
          className="rounded-full border border-[color:var(--foreground)] px-5 py-2 text-sm transition hover:bg-[color:var(--foreground)] hover:text-[color:var(--background)]"
        >
          Ver productos
        </Link>
      </div>
    </header>
  );
}
