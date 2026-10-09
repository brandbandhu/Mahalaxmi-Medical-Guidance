import { createFileRoute } from "@tanstack/react-router";
import { Award, Building2, Compass, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { BtnSun, Heading, PageHero, Reveal } from "@/components/site/ui";
import { CONTACT, IMG, STATS } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Us - Mahalaxmi Medical Guidance" },
    { name: "description", content: "Our story, director and two branches in Kolhapur and Ichalkaranji." },
    { property: "og:title", content: "About Us - Mahalaxmi Medical Guidance" },
    { property: "og:description", content: "Our story, director and two branches in Kolhapur and Ichalkaranji." },
  ] }),
  component: Page,
});

function Page() {
  const { t } = useLang();
  const values = [
    { icon: HeartHandshake, title: t("Student-first counselling", "विद्यार्थी-केंद्रित समुपदेशन"), copy: t("Every profile is discussed with patience, clarity and realistic options.", "प्रत्येक विद्यार्थ्याच्या प्रोफाइलवर संयमाने आणि स्पष्टतेने चर्चा केली जाते.") },
    { icon: ShieldCheck, title: t("Transparent guidance", "पारदर्शक मार्गदर्शन"), copy: t("No false promises. Admissions remain subject to official merit and counselling rules.", "खोटी हमी नाही. प्रवेश अधिकृत गुणवत्ता आणि नियमांनुसारच ठरतात.") },
    { icon: Compass, title: t("Course-fit thinking", "योग्य कोर्स निवड"), copy: t("We help families compare MBBS, AYUSH, allied health, engineering and pharmacy paths.", "MBBS, AYUSH, आरोग्य विज्ञान, इंजिनिअरिंग आणि फार्मसी पर्यायांची तुलना करण्यात मदत.") },
  ];

  return (
    <>
      <PageHero
        eyebrow={t("About Mahalaxmi", "महालक्ष्मी बद्दल")}
        title={t("Guiding medical dreams with clarity, care and local trust.", "स्पष्टता, काळजी आणि विश्वासाने वैद्यकीय स्वप्नांना दिशा.")}
        sub={t("Mahalaxmi Medical Guidance supports students and parents through NEET counselling, college selection and admission process decisions from Kolhapur and Ichalkaranji.", "महालक्ष्मी मेडिकल गाइडन्स कोल्हापूर आणि इचलकरंजी येथून विद्यार्थ्यांना NEET समुपदेशन, कॉलेज निवड आणि प्रवेश प्रक्रियेत मदत करते.")}
        img={IMG.campus}
      />

      <section className="bg-cream py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="relative">
            <img src={IMG.counselling} alt="" className="aspect-[5/4] w-full rounded-[2.5rem] rounded-br-[7rem] object-cover shadow-soft" />
            <div className="absolute -bottom-7 left-8 rounded-3xl bg-background p-5 shadow-soft">
              <p className="font-display text-4xl font-extrabold text-navy">10+</p>
              <p className="text-sm font-semibold text-muted-foreground">{t("years guiding families", "वर्षांचे मार्गदर्शन")}</p>
            </div>
          </Reveal>
          <div>
            <Heading eyebrow={t("Our Story", "आमची कहाणी")} title={t("A counselling office built around families, not forms.", "फक्त फॉर्म नव्हे, कुटुंबांच्या विश्वासावर उभी सेवा.")} />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {t("Medical admission counselling can feel complex: quotas, rounds, documents, fees and college choices all arrive at once. Mahalaxmi Medical Guidance exists to make that journey understandable for students and reassuring for parents.", "वैद्यकीय प्रवेश प्रक्रिया गुंतागुंतीची वाटू शकते. कोटा, फेऱ्या, कागदपत्रे, फी आणि कॉलेज निवड या सर्व बाबी सोप्या भाषेत समजावून देण्यासाठी Mahalaxmi Medical Guidance कार्य करते.")}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {CONTACT.branches.map((b) => (
                <Reveal key={b.en} className="rounded-3xl bg-background p-6 shadow-soft">
                  <Building2 className="h-7 w-7 text-teal" />
                  <h3 className="mt-4 text-xl font-extrabold text-navy">{t(b.en, b.mr)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(b.addr, b.addrMr)}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading center eyebrow={t("Director", "संचालक")} title={t("Bhimrao Patil", "भीमराव पाटील")} sub={t("Director & Admission Consultant", "संचालक आणि प्रवेश सल्लागार")} />
          <div className="mt-12 grid overflow-hidden rounded-[2.5rem] bg-deep lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid min-h-[360px] place-items-center p-8 text-on-dark">
              <div className="grid aspect-[4/5] w-full max-w-xs place-items-center rounded-[2.5rem] rounded-tl-[7rem] glass-dark">
                <div className="text-center text-on-dark/70"><Users className="mx-auto h-16 w-16" /><p className="mt-3 text-sm">{t("Portrait coming soon", "छायाचित्र लवकरच")}</p></div>
              </div>
            </div>
            <div className="bg-background p-8 sm:p-12">
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t("Bhimrao Patil leads the guidance team with a practical, parent-friendly approach. The focus is to explain eligibility, counselling rounds and college choices clearly so every family can take timely decisions.", "भीमराव पाटील प्रवेश मार्गदर्शन टीमचे नेतृत्व करतात. पात्रता, समुपदेशन फेऱ्या आणि कॉलेज निवडी स्पष्ट करून प्रत्येक कुटुंबाला योग्य वेळी निर्णय घेता यावा हा उद्देश आहे.")}
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {STATS.map((s) => <div key={s.en} className="rounded-3xl bg-ice p-5"><Award className="mb-3 h-5 w-5 text-sun" /><p className="font-display text-3xl font-extrabold text-navy">{s.n}{s.s}</p><p className="mt-1 text-sm font-semibold text-muted-foreground">{t(s.en, s.mr)}</p></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ice py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading eyebrow={t("Guidance Approach", "मार्गदर्शन पद्धत")} title={t("Calm, structured and decision-ready.", "शांत, नियोजनबद्ध आणि निर्णयासाठी उपयुक्त.")} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {values.map((v, i) => <Reveal key={v.title} delay={i * 0.08} className="rounded-[2rem] bg-background p-7 shadow-soft"><v.icon className="h-8 w-8 text-primary" /><h3 className="mt-5 text-xl font-extrabold text-navy">{v.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.copy}</p></Reveal>)}
          </div>
          <div className="mt-12 text-center"><BtnSun to="/contact">{t("Talk to our team", "आमच्या टीमशी बोला")}</BtnSun></div>
        </div>
      </section>
    </>
  );
}
