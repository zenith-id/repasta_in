import { SERVICE_PAGES } from "../src/constants/seo-pages";
import { laptopServices } from "../src/constants/sections/services";

let failed = 0;
function assert(cond: boolean, msg: string) {
  if (!cond) { console.error("FAIL:", msg); failed++; }
}

assert(SERVICE_PAGES.length === 4, "harus 4 halaman layanan");

const slugs = SERVICE_PAGES.map((p) => p.slug);
assert(
  JSON.stringify(slugs) ===
    JSON.stringify(["repaste-laptop", "deep-cleaning-laptop", "repaste-pc", "servis-pc"]),
  "slug harus exact 4 ini"
);

for (const p of SERVICE_PAGES) {
  assert(p.h1.length > 0 && p.h1.length < 70, `h1 ${p.slug} harus 1-70 char`);
  assert(p.title.length <= 60, `title ${p.slug} max 60 char, dapat ${p.title.length}`);
  assert(p.description.length <= 160, `description ${p.slug} max 160 char, dapat ${p.description.length}`);
  assert(p.intro.length > 80, `intro ${p.slug} min 80 char`);
  assert(p.sections.length >= 3, `sections ${p.slug} min 3`);
  assert(p.faqs.length >= 3, `faqs ${p.slug} min 3`);
  assert(p.relatedSlugs.length >= 1 && p.relatedSlugs.length <= 3, `relatedSlugs ${p.slug} 1-3`);
  for (const r of p.relatedSlugs) {
    assert(slugs.includes(r), `related ${r} di ${p.slug} tidak ada`);
  }
  for (const s of p.sections) {
    assert(s.body.length > 40, `section ${p.slug}/${s.h2} body min 40 char`);
    assert(!s.body.includes("—") && !s.h2.includes("—"), `em dash dilarang di ${p.slug}`);
  }
  for (const f of p.faqs) {
    assert(f.a.length > 20, `faq ${p.slug}/${f.q} jawaban min 20 char`);
  }
}

const repaste = SERVICE_PAGES.find((p) => p.slug === "repaste-laptop")!;
assert(repaste.sections.some((s) => s.body.includes("Rp 120.000")), "repaste-laptop harus sebut Rp 120.000");
assert(repaste.sections.some((s) => s.body.includes("Rp 170.000")), "repaste-laptop harus sebut Rp 170.000");
assert(repaste.sections.some((s) => s.body.includes("Rp 200.000")), "repaste-laptop harus sebut Rp 200.000");
const dc = SERVICE_PAGES.find((p) => p.slug === "deep-cleaning-laptop")!;
assert(dc.sections.some((s) => s.body.includes("Rp 200.000")), "deep-cleaning harus sebut Rp 200.000");
assert(dc.sections.some((s) => s.body.includes("Rp 250.000")), "deep-cleaning harus sebut Rp 250.000");
const rp = SERVICE_PAGES.find((p) => p.slug === "repaste-pc")!;
assert(rp.sections.some((s) => s.body.includes("Rp 220.000")), "repaste-pc harus sebut Rp 220.000");
const sp = SERVICE_PAGES.find((p) => p.slug === "servis-pc")!;
assert(sp.sections.some((s) => s.body.includes("Rp 75.000")), "servis-pc harus sebut Rp 75.000");
assert(sp.sections.some((s) => s.body.includes("Rp 150.000")), "servis-pc harus sebut Rp 150.000");

for (const n of ["Repaste Premium", "Repaste Phase change", "Repaste Liquid Metal"]) {
  assert(laptopServices.some((s) => s.name === n), `sumber services.ts harus punya ${n}`);
  assert(repaste.sections.some((s) => s.body.includes(n)), `repaste-laptop harus sebut ${n}`);
}

if (failed) { process.exit(1); }
console.log("all seo-pages assertions passed");
