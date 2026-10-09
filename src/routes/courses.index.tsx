import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Filter, GraduationCap, Search } from "lucide-react";
import { BtnSun, Heading, PageHero, Reveal } from "@/components/site/ui";
import { COURSES, IMG, type Category } from "@/lib/data";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/courses/")({
  head: () => ({ meta: [
    { title: "Courses - Mahalaxmi Medical Guidance" },
    { name: "description", content: "MBBS, BDS, BAMS, BHMS, BUMS, B.V.Sc, B.P.Th, Nursing, Engineering and Pharmacy guidance." },
    { property: "og:title", content: "Courses - Mahalaxmi Medical Guidance" },
    { property: "og:description", content: "Explore course options and admission guidance support." },
  ] }),
  component: Page,
});

const filters: Array<{ key: "all" | Category; en: string; mr: string }> = [
  { key: "all", en: "All", mr: "सर्व" },
  { key: "medical", en: "Medical", mr: "मेडिकल" },
  { key: "engineering", en: "Engineering", mr: "इंजिनिअरिंग" },
  { key: "pharmacy", en: "Pharmacy", mr: "फार्मसी" },
];

function Page() {
  const { t } = useLang();
  const [filter, setFilter] = useState<"all" | Category>("all");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => COURSES.filter((c) => (filter === "all" || c.category === filter) && `${c.name} ${c.full}`.toLowerCase().includes(query.toLowerCase())), [filter, query]);

  return (
    <>
      <PageHero
        eyebrow={t("Course Catalogue", "कोर्स कॅटलॉग")}
        title={t("Choose a career path with confidence.", "विश्वासाने करिअरचा मार्ग निवडा.")}
        sub={t("Explore medical, allied health, engineering and pharmacy admission guidance options with clear course overviews.", "मेडिकल, आरोग्य विज्ञान, इंजिनिअरिंग आणि फार्मसी प्रवेश मार्गदर्शन पर्याय समजून घ्या.")}
        img={IMG.study}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 rounded-[2rem] bg-ice p-4 shadow-soft md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                <button key={f.key} onClick={() => setFilter(f.key)} className={cn("inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition", filter === f.key ? "bg-brand text-primary-foreground" : "bg-background text-navy hover:text-primary")}>
                  <Filter className="h-4 w-4" /> {t(f.en, f.mr)}
                </button>
              ))}
            </div>
            <label className="flex min-w-0 items-center gap-3 rounded-full bg-background px-5 py-3 text-sm shadow-soft md:w-80">
              <Search className="h-4 w-4 shrink-0 text-primary" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("Search courses", "कोर्स शोधा")} className="min-w-0 flex-1 bg-transparent outline-none" />
            </label>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 0.07}>
                <Link to="/courses/$slug" params={{ slug: c.slug }} className="group block h-full overflow-hidden rounded-[2rem] bg-background shadow-soft transition hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img src={c.img} alt={c.name} className="aspect-[16/11] w-full object-cover transition duration-700 group-hover:scale-110" />
                    <span className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-bold text-navy">{c.duration}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div><h3 className="text-3xl font-extrabold text-navy">{c.name}</h3><p className="mt-1 text-sm font-semibold text-primary">{t(c.full, c.fullMr)}</p></div>
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent text-primary transition group-hover:-rotate-45 group-hover:bg-sun group-hover:text-sun-foreground"><ArrowRight className="h-4 w-4" /></span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t(c.sub, c.subMr)}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
          <Heading dark eyebrow={t("Not sure yet?", "अजून निश्चित नाही?")} title={t("Match your score, budget and goal to the right options.", "तुमचे गुण, बजेट आणि ध्येय यानुसार योग्य पर्याय निवडा.")} />
          <Reveal className="rounded-[2rem] bg-background p-7 shadow-soft">
            <GraduationCap className="h-9 w-9 text-teal" />
            <p className="mt-4 text-muted-foreground">{t("Our team can help you compare realistic admission possibilities across rounds and states without making unverified promises.", "आमची टीम प्रवेशाच्या वास्तविक शक्यता समजावून देते, पण अप्रमाणित हमी देत नाही.")}</p>
            <div className="mt-6"><BtnSun to="/contact">{t("Get course guidance", "कोर्स मार्गदर्शन घ्या")}</BtnSun></div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
