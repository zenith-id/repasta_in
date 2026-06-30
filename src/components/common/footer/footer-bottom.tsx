import packageJson from "../../../../package.json";
import { Mail } from "lucide-react";
import { contact } from "@/constants/sections/footer";

export function FooterBottom() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Divider */}
      <div className="border-t border-slate-800/60" />

      {/* Bottom bar */}
      <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-slate-500 text-xs flex flex-wrap items-center gap-x-1.5 gap-y-1">
          <span>
            © {year} Repasta. Semua hak dilindungi. · v{packageJson.version} ·
          </span>
          <a
            href={contact.emailLink}
            className="hover:text-primary transition-colors inline-flex items-center gap-1"
          >
            <Mail size={12} className="shrink-0" />
            {contact.email}
          </a>
        </div>
        <div className="flex flex-col items-center sm:items-end gap-1">
          <p className="text-slate-600 text-xs text-center sm:text-right">
            Servis Laptop & PC Profesional — Bandung, Indonesia
          </p>
          <p className="text-slate-500 text-[11px] text-center sm:text-right">
            Dibuat dengan ❤️ oleh{" "}
            <a 
              href="https://gybrannauval.site" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary font-medium hover:underline hover:text-primary/80 transition-colors"
            >
              Gybran Nauval
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
