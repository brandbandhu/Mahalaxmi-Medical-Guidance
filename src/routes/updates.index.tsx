import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, ExternalLink, Search } from "lucide-react";
import { Heading, PageHero, Reveal } from "@/components/site/ui";
import { CHECKLIST, IMG, UPDATES } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/updates/")({
  head: () => ({ meta: [
    { title: "NEET Updates - Mahalaxmi Medical Guidance" },
    { name: "description", content: "Guides, checklists and official counselling information." },
    { property: "og:title", content: "NEET Updates - Mahalaxmi Medical Guidance" },
    { property: "og:description", content: "Guides, checklists and official counselling information." },
  ] }),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const visible = useMemo(() => UPDATES.filter((u) => `${u.title} ${u.cat} ${u.sum}`.toLowerCase().includes(query.toLowerCase())), [query]);
  const featured = visible[0] || UPDATES[0];
  return (
    <>
      <PageHero
        eyebrow={t("NEET Updates", "NEET अपडेट्स")}
        title={t("Read the process before the pressure begins.", "दबाव सुरू होण्यापूर्वी प्रक्रिया समजून घ्या.")}
        sub={t("Educational guides, archived notices and official-source links for counselling preparation.", "समुपदेशन तयारीसाठी मार्गदर्शक लेख, आर्काइव्ह नोटिस आणि अधिकृत स्रोत लिंक.")}
        img={IMG.study}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <label className="mx-auto flex max-w-xl items-center gap-3 rounded-full bg-ice px-5 py-4 shadow-soft">
            <Search className="h-5 w-5 text-primary" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("Search updates", "अपडेट शोधा")} className="min-w-0 flex-1 bg-transparent outline-none" />
          </label>
          <div className="mt-12 grid gap-7 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <Link to="/updates/$slug" params={{ slug: featured.slug }} className="group block overflow-hidden rounded-[2.5rem] bg-background shadow-soft">
                <img src={featured.img} alt="" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="p-7">
                  <span className="rounded-full bg-sun px-3 py-1 text-xs font-bold text-sun-foreground">{featured.cat}</span>
                  <h2 className="mt-4 text-3xl font-extrabold text-navy">{t(featured.title, featured.titleMr)}</h2>
                  <p className="mt-3 text-muted-foreground">{featured.sum}</p>
                </div>
              </Link>
            </Reveal>
            <div className="grid gap-4">
              {visible.slice(1).map((u, i) => <Reveal key={u.slug} delay={i * 0.06}><Link to="/updates/$slug" params={{ slug: u.slug }} className="group flex gap-4 rounded-3xl bg-ice p-4 transition hover:bg-accent"><img src={u.img} alt="" className="h-24 w-28 rounded-2xl object-cover" /><div><p className="text-xs font-bold text-primary">{u.cat} - {u.date}</p><h3 className="mt-1 font-bold leading-snug text-navy">{t(u.title, u.titleMr)}</h3><span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-primary">{t("Read guide", "वाचा")} <ArrowRight className="h-3 w-3" /></span></div></Link></Reveal>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading eyebrow={t("Document Checklist", "कागदपत्र यादी")} title={t("Keep the basics ready.", "मूलभूत कागदपत्रे तयार ठेवा.")} />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CHECKLIST.map((c) => <div key={c} className="rounded-2xl bg-background p-4 text-sm font-semibold text-navy shadow-soft">{c}</div>)}
          </div>
          <a href="https://neet.nta.nic.in" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-on-dark">{t("Official NTA website", "अधिकृत NTA वेबसाइट")} <ExternalLink className="h-4 w-4" /></a>
        </div>
      </section>
    </>
  );
}
