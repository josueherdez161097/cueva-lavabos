import Link from 'next/link';

const links = [
  { href: '#coleccion', label: 'Colección' },
  { href: '#inspiracion', label: 'Inspiración' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-background/85 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="text-2xl font-semibold tracking-[0.18em] uppercase">
          Cuevaa
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-muted transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/catalogo"
          className="rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition hover:bg-primary hover:text-white"
        >
          Ver productos
        </Link>
      </div>
    </header>
  );
}
