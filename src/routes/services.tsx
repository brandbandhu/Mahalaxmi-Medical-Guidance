import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Building2, ClipboardCheck, FileText, GraduationCap, Map, ShieldCheck, Stethoscope, Wallet } from "lucide-react";
import { BtnSun, Heading, PageHero, Reveal } from "@/components/site/ui";
import { IMG, JOURNEY, SERVICES } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Our Services - Mahalaxmi Medical Guidance" },
    { name: "description", content: "NEET counselling, MCC, state counselling and college selection support." },
    { property: "og:title", content: "Our Services - Mahalaxmi Medical Guidance" },
    { property: "og:description", content: "NEET counselling, MCC, state counselling and college selection support." },
  ] }),
  component: Page,
});

const icons = [Stethoscope, Map, Building2, GraduationCap, ClipboardCheck, Wallet, ShieldCheck, FileText];

function Page() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("Counselling Services", "समुपदेशन सेवा")}
        title={t("From NEET score to admission process support.", "NEET गुणांपासून प्रवेश प्रक्रियेच्या सहाय्यापर्यंत.")}
        sub={t("A practical support system for MCC, state counselling, college selection, documents, fee clarity and realistic alternatives.", "MCC, राज्य समुपदेशन, कॉलेज निवड, कागदपत्रे, फी स्पष्टता आणि वास्तववादी पर्यायांसाठी मार्गदर्शन.")}
        img={IMG.counselling}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading eyebrow={t("What we help with", "आमची मदत")} title={t("Counselling support designed around real admission decisions.", "खऱ्या प्रवेश निर्णयांसाठी उपयुक्त मार्गदर्शन.")} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => {
              const I = icons[i]!;
              return (
                <Reveal key={s.en} delay={(i % 4) * 0.06} className="group rounded-[2rem] bg-background p-6 shadow-soft transition hover:-translate-y-1">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-accent text-primary transition group-hover:bg-brand group-hover:text-primary-foreground"><I className="h-6 w-6" /></span>
                  <h3 className="mt-6 text-xl font-extrabold leading-tight text-navy">{t(s.en, s.mr)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t(s.d, s.dm)}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal className="relative">
            <img src={IMG.seminar} alt="" className="aspect-[4/3] w-full rounded-[2.5rem] rounded-tr-[7rem] object-cover shadow-soft" />
            <div className="absolute -bottom-6 right-8 rounded-3xl bg-background p-5 shadow-soft">
              <p className="font-bold text-navy">{t("Parent-friendly process", "पालकांसाठी सोपी प्रक्रिया")}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t("Clear next steps after every discussion.", "प्रत्येक चर्चेनंतर स्पष्ट पुढची पावले.")}</p>
            </div>
          </Reveal>
          <div>
            <Heading eyebrow={t("Process", "प्रक्रिया")} title={t("A calm roadmap for a busy admission season.", "व्यस्त प्रवेश हंगामासाठी शांत आणि स्पष्ट रोडमॅप.")} />
            <div className="mt-8 space-y-4">
              {JOURNEY.map((j, i) => <Reveal key={j.en} delay={i * 0.05} className="flex items-center gap-4 rounded-3xl bg-background p-5 shadow-soft"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand font-bold text-primary-foreground">{i + 1}</span><p className="font-bold text-navy">{t(j.en, j.mr)}</p></Reveal>)}
            </div>
            <div className="mt-8"><BtnSun to="/contact">{t("Start counselling", "समुपदेशन सुरू करा")} <ArrowRight className="h-4 w-4" /></BtnSun></div>
          </div>
        </div>
      </section>
    </>
  );
}
