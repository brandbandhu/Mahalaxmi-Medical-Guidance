import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BadgeCheck, Camera, GraduationCap, ShieldCheck, Sparkles } from "lucide-react";
import { BtnSun, Heading, PageHero, Reveal } from "@/components/site/ui";
import { IMG, STATS } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/results")({
  head: () => ({ meta: [
    { title: "Our Results - Mahalaxmi Medical Guidance" },
    { name: "description", content: "Student selections and achievements with verification notes." },
    { property: "og:title", content: "Our Results - Mahalaxmi Medical Guidance" },
    { property: "og:description", content: "Student selections and achievements." },
  ] }),
  component: Page,
});

const years = ["2025-26", "2024-25", "2023-24"];
const profiles = [
  { name: "Verified student profile", course: "MBBS", college: "College details after consent", score: "NEET score after consent", img: IMG.hero },
  { name: "Verified student profile", course: "BAMS", college: "College details after consent", score: "NEET score after consent", img: IMG.celebration },
  { name: "Verified student profile", course: "BDS", college: "College details after consent", score: "NEET score after consent", img: IMG.doctor },
  { name: "Verified student profile", course: "BHMS", college: "College details after consent", score: "NEET score after consent", img: IMG.lab },
];

function Page() {
  const { t } = useLang();
  const [year, setYear] = useState(years[0]);
  return (
    <>
      <PageHero
        eyebrow={t("Student Achievements", "विद्यार्थी यश")}
        title={t("Results that inspire the next batch.", "पुढच्या बॅचला प्रेरणा देणारे निकाल.")}
        sub={t("Business-reported selection figures are displayed with a verification note. Individual names, scores and photos should be published only after student consent.", "व्यवसायाने दिलेली निवड आकडेवारी पडताळणी नोटसह दाखवली आहे. वैयक्तिक नावे, गुण आणि फोटो विद्यार्थ्यांच्या संमतीनंतरच प्रकाशित करावेत.")}
        img={IMG.celebration}
      />

      <section className="bg-deep py-16 text-on-dark">
        <div className="mx-auto grid max-w-7xl gap-px px-5 sm:px-8 md:grid-cols-4">
          {STATS.map((s) => <Reveal key={s.en} className="p-5"><Sparkles className="h-6 w-6 text-sun" /><p className="mt-4 font-display text-5xl font-extrabold">{s.n}{s.s}</p><p className="mt-2 text-sm text-on-dark/70">{t(s.en, s.mr)}</p></Reveal>)}
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Heading eyebrow={t("Selection Gallery", "निवड गॅलरी")} title={t("Verified profiles can be added here.", "पडताळलेले प्रोफाइल येथे जोडता येतील.")} />
            <div className="flex gap-2">
              {years.map((y) => <button key={y} onClick={() => setYear(y)} className={`rounded-full px-5 py-3 text-sm font-bold ${year === y ? "bg-brand text-primary-foreground" : "bg-muted text-navy"}`}>{y}</button>)}
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {profiles.map((p, i) => <Reveal key={`${p.course}-${i}`} delay={i * 0.07} className="group overflow-hidden rounded-[2rem] bg-background shadow-soft"><div className="relative"><img src={p.img} alt="" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-sun px-3 py-1 text-xs font-bold text-sun-foreground">{year}</span></div><div className="p-5"><h3 className="font-bold text-navy">{p.name}</h3><p className="mt-1 text-sm text-primary">{p.course}</p><p className="mt-3 text-sm text-muted-foreground">{p.score}</p><p className="text-sm text-muted-foreground">{p.college}</p></div></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-ice py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-3">
          {[BadgeCheck, ShieldCheck, Camera].map((Icon, i) => (
            <Reveal key={i} className="rounded-[2rem] bg-background p-7 shadow-soft">
              <Icon className="h-8 w-8 text-teal" />
              <h3 className="mt-5 text-xl font-extrabold text-navy">{[t("Verification first", "आधी पडताळणी"), t("Consent-led publishing", "संमतीनुसार प्रकाशन"), t("Real photos when supplied", "प्रत्यक्ष फोटो उपलब्ध झाल्यावर")][i]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{[t("Numbers should be approved by the client before public campaign use.", "आकडे सार्वजनिक वापरापूर्वी क्लायंटकडून मंजूर करावेत."), t("Student photographs and names require explicit consent.", "विद्यार्थ्यांचे फोटो आणि नावे स्पष्ट संमतीनंतरच."), t("Current imagery is representative until real result photos are supplied.", "प्रत्यक्ष निकाल फोटो मिळेपर्यंत सध्याची छायाचित्रे प्रतिनिधिक आहेत.")][i]}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center"><BtnSun to="/contact">{t("Discuss admission chances", "प्रवेश शक्यता विचारा")}</BtnSun></div>
      </section>
    </>
  );
}
