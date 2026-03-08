import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-4xl font-semibold">No encontramos esta página.</h1>
      <p className="mt-4 max-w-lg text-sm leading-7 text-muted">
        Puede que el producto haya cambiado, se haya movido o aún no esté publicado dentro del catálogo.
      </p>
      <Link href="/" className="mt-8 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white">
        Regresar al inicio
      </Link>
    </section>
  );
}
