export function Footer() {
  return (
    <footer id="contacto" className="border-t border-theme py-10">
      <div className="container-shell grid gap-8 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold uppercase tracking-[0.22em]">Cueva</p>
          <p className="mt-3 max-w-sm text-sm leading-6" style={{ color: 'var(--muted)' }}>
            Lavabos de diseño con lenguaje arquitectónico, materiales premium y presencia visual sobria.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">Contacto</p>
          <p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
            ventas@cueva.mx
            <br />
            +52 999 000 0000
          </p>
        </div>

        <div>
          <p className="text-sm font-medium">Ubicación</p>
          <p className="mt-3 text-sm" style={{ color: 'var(--muted)' }}>
            Mérida, Yucatán, México
            <br />
            Proyectos residenciales, hoteleros y comerciales.
          </p>
        </div>
      </div>
    </footer>
  );
}
