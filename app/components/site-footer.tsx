export function SiteFooter() {
  return (
    <footer className="no-print">
      <div className="brand-stripe">
        <span className="g" style={{ flex: "0 0 68%" }} />
        <span className="b" style={{ flex: 1 }} />
      </div>
      <div className="data-plate">
        <div className="mx-auto max-w-6xl px-6 py-10 grid gap-12 sm:grid-cols-2 text-sm" style={{ color: "var(--color-light-gray)" }}>
          <div>
            <p className="font-head text-base" style={{ color: "var(--color-white)" }}>
              Moyer Fuel Tank Renu
            </p>
            <p className="mt-2">2011 Western Avenue</p>
            <p>Greensburg, PA 15601</p>
          </div>
          <div>
            <p className="font-head text-base" style={{ color: "var(--color-white)" }}>
              Reach us
            </p>
            <p className="mt-2">
              <a href="tel:18003289550">1-800-328-9550</a>
            </p>
            <p>
              <a href="tel:7246969391">Shop: 724-696-9391</a> · 9 to 9, any day
            </p>
            <p>
              <a href="mailto:moyer@westol.com">moyer@westol.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
