import packageJson from "../../../../package.json";

export function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Divider */}
      <div className="border-t border-slate-800/60" />

      {/* Bottom bar */}
      <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-slate-500 text-xs">
          © {year} Repasta. Semua hak dilindungi. · v{packageJson.version} ·
          hello@repasta.in
        </p>
        <p className="text-slate-600 text-xs">
          Servis Laptop & PC Profesional — Bandung, Indonesia
        </p>
      </div>
    </>
  );
}
