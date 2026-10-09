import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight, ArrowLeft, Award, BadgeCheck, BookOpen, Building2, ChevronDown, Compass, FileText, GraduationCap,
  HeartHandshake, Map, Phone, Plus, ShieldCheck, Sparkles, Stethoscope, TrendingUp, Users, Wallet, Calendar, ExternalLink,
} from "lucide-react";
import { useLang } from "@/lib/i18n";
import { COURSES, FAQS, IMG, JOURNEY, SERVICES, STATS, UPDATES, CONTACT } from "@/lib/data";
import { BtnSun, Counter, Eyebrow, Heading, Reveal } from "@/components/site/ui";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mahalaxmi Medical Guidance — Your Dream of Becoming a Doctor" },
      { name: "description", content: "Expert NEET counselling, MBBS/BAMS/BDS admission guidance and personalised support from Kolhapur & Ichalkaranji." },
      { property: "og:title", content: "Mahalaxmi Medical Guidance — NEET Counselling" },
      { property: "og:description", content: "Expert NEET counselling and medical admission guidance for students and parents." },
    ],
  }),
  component: Home,
});

const SERVICE_ICONS = [Stethoscope, Map, Building2, Compass, GraduationCap, Wallet, TrendingUp, FileText];

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Careers />
      <Why />
      <ServicesSlider />
      <Success />
      <Journey />
      <Director />
      <Events />
      <Updates />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  const { t } = useLang();
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-navy pt-28 pb-16 sm:pt-36 lg:pb-24">
      <img src={IMG.campus} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/76 to-white/20" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      <div className="relative mx-auto flex max-w-7xl items-center px-5 sm:px-8">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow>{t("Your Trusted Admission Partner", "तुमचा विश्वासू प्रवेश साथीदार")}</Eyebrow>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-[2.6rem] font-extrabold leading-[1.02] text-navy sm:text-6xl xl:text-7xl">
            {t("Your Dream of ", "")}<span className="text-gradient">{t("Becoming a Doctor", "डॉक्टर बनण्याचे")}</span>{t(" Starts Here.", " स्वप्न इथून सुरू होते.")}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t("Expert NEET counselling, medical admission guidance and personalized support to help you explore the right college and career opportunities.",
              "योग्य कॉलेज व करिअर संधी शोधण्यासाठी तज्ज्ञ NEET समुपदेशन, वैद्यकीय प्रवेश मार्गदर्शन आणि वैयक्तिक सहाय्य.")}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <BtnSun to="/contact">{t("Get Admission Guidance", "प्रवेश मार्गदर्शन मिळवा")} <ArrowRight className="h-4 w-4" /></BtnSun>
            <Link to="/courses" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-navy/15 bg-background px-7 py-4 text-sm font-bold text-navy transition hover:border-primary hover:text-primary">
              {t("Explore Our Courses", "आमचे कोर्सेस पहा")}
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="relative mt-10 hidden justify-center text-navy/50 lg:flex">
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}

function Stats() {
  const { t } = useLang();
  const icons = [Award, Users, Stethoscope, BookOpen];
  return (
    <section className="relative -mt-2 bg-deep py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden px-5 sm:px-8 lg:grid-cols-4">
        {STATS.map((s, i) => {
          const I = icons[i]!;
          return (
            <Reveal key={s.en} delay={i * 0.08} className="group p-5 sm:p-8">
              <I className="h-7 w-7 text-sun transition group-hover:scale-110" />
              <p className="mt-4 font-display text-4xl font-extrabold text-on-dark sm:text-6xl"><Counter to={s.n} suffix={s.s} /></p>
              <p className="mt-2 text-sm font-medium text-on-dark/70">{t(s.en, s.mr)}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function Careers() {
  const { t } = useLang();
  const spans = ["sm:col-span-2 sm:row-span-2", "", "", "sm:col-span-2", "", "", "", "", "sm:col-span-2", ""];
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Heading eyebrow={t("Explore your medical career", "तुमचे वैद्यकीय करिअर")} title={<>{t("One Dream. ", "एक स्वप्न. ")}<span className="text-gradient">{t("Multiple Career Possibilities.", "अनेक करिअर संधी.")}</span></>} />
          <Reveal><Link to="/courses" className="inline-flex items-center gap-2 font-bold text-primary">{t("View all courses", "सर्व कोर्सेस")} <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
        <div className="mt-12 grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-4 sm:auto-rows-[220px]">
          {COURSES.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 4) * 0.06} className={spans[i]}>
              <Link to="/courses/$slug" params={{ slug: c.slug }} className="group relative block h-full overflow-hidden rounded-3xl">
                <img src={c.img} alt={c.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className={cn("absolute inset-0 bg-gradient-to-t to-transparent", i % 3 === 0 ? "from-navy/90 via-navy/40" : i % 3 === 1 ? "from-primary/90 via-primary/30" : "from-teal/90 via-teal/30")} />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <div className="min-w-0">
                    <h3 className={cn("font-extrabold text-on-dark", i === 0 ? "text-4xl" : "text-2xl")}>{c.name}</h3>
                    <p className="mt-1 truncate text-sm text-on-dark/80">{t(c.sub, c.subMr)}</p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full glass-dark text-on-dark transition group-hover:rotate-[-45deg] group-hover:bg-sun group-hover:text-sun-foreground"><ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  const { t } = useLang();
  const items = [
    { i: Award, en: "10+ years of guidance", mr: "१०+ वर्षांचे मार्गदर्शन" },
    { i: Users, en: "Experienced guidance team", mr: "अनुभवी मार्गदर्शन टीम" },
    { i: HeartHandshake, en: "Personalized counselling", mr: "वैयक्तिक समुपदेशन" },
    { i: Map, en: "All India & State counselling support", mr: "ऑल इंडिया व राज्य समुपदेशन सहाय्य" },
    { i: ShieldCheck, en: "Transparent admission guidance", mr: "पारदर्शक प्रवेश मार्गदर्शन" },
    { i: Compass, en: "Support with college & career options", mr: "कॉलेज व करिअर पर्यायांत मदत" },
  ];
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <img src={IMG.counselling} alt={t("Counselling session with a family", "कुटुंबासोबत समुपदेशन")} loading="lazy" className="aspect-[4/3] w-full rounded-[2.5rem] rounded-bl-[7rem] object-cover shadow-soft" />
          <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-3xl bg-background p-4 shadow-soft">
            <BadgeCheck className="h-8 w-8 text-teal" />
            <div><p className="font-bold text-navy">{t("Parent-trusted", "पालकांचा विश्वास")}</p><p className="text-xs text-muted-foreground">{t("Kolhapur & Ichalkaranji", "कोल्हापूर व इचलकरंजी")}</p></div>
          </div>
          <div className="absolute -top-5 left-6 rounded-full bg-sun px-5 py-2.5 text-sm font-bold text-sun-foreground shadow-glow">{t("Honest, student-first advice", "प्रामाणिक, विद्यार्थी-केंद्रित सल्ला")}</div>
        </Reveal>
        <div>
          <Heading eyebrow={t("Why Mahalaxmi?", "महालक्ष्मीच का?")} title={t("Guidance that families trust, every step of the way.", "प्रत्येक टप्प्यावर कुटुंबांचा विश्वास असलेले मार्गदर्शन.")} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {items.map((it, i) => (
              <Reveal key={it.en} delay={i * 0.06} className={cn(i % 2 === 1 && "sm:translate-y-8")}>
                <div className="group flex items-start gap-4 rounded-3xl bg-background p-5 shadow-soft transition hover:-translate-y-1">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-primary transition group-hover:bg-brand group-hover:text-primary-foreground"><it.i className="h-5 w-5" /></span>
                  <p className="pt-2.5 font-bold text-navy">{t(it.en, it.mr)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSlider() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => ref.current?.scrollBy({ left: d * 340, behavior: "smooth" });
  return (
    <section className="overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Heading eyebrow={t("Our counselling services", "आमच्या समुपदेशन सेवा")} title={t("Everything you need, from score to seat.", "गुणांपासून प्रवेशापर्यंत सर्व काही.")} />
          <div className="flex gap-2">
            <button aria-label="Previous" onClick={() => scroll(-1)} className="grid h-12 w-12 place-items-center rounded-full border-2 border-border text-navy transition hover:border-primary hover:text-primary"><ArrowLeft className="h-5 w-5" /></button>
            <button aria-label="Next" onClick={() => scroll(1)} className="grid h-12 w-12 place-items-center rounded-full bg-navy text-on-dark transition hover:bg-primary"><ArrowRight className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
      <div ref={ref} className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        {SERVICES.map((s, i) => {
          const I = SERVICE_ICONS[i]!;
          return (
            <motion.div key={s.en} whileHover={{ y: -8 }} className={cn("group relative flex min-h-[320px] w-[280px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-[2rem] p-7 sm:w-[320px]",
              i % 4 === 0 ? "bg-deep text-on-dark" : i % 4 === 1 ? "bg-accent text-navy" : i % 4 === 2 ? "bg-cream text-navy" : "bg-brand text-on-dark")}>
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sun/20 blur-2xl transition group-hover:scale-150" />
              <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-background text-primary shadow-soft"><I className="h-6 w-6" /></span>
              <div className="relative">
                <p className="text-xs font-bold opacity-60">0{i + 1}</p>
                <h3 className="mt-2 text-2xl font-extrabold leading-tight">{t(s.en, s.mr)}</h3>
                <p className="mt-3 text-sm opacity-75">{t(s.d, s.dm)}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Success() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-deep py-20 sm:py-28">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-teal/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Heading dark center eyebrow={t("Student success stories", "विद्यार्थ्यांच्या यशोगाथा")} title={<>{t("Their Success. ", "त्यांचे यश. ")}<span className="text-sun">{t("Your Inspiration.", "तुमची प्रेरणा.")}</span></>} />
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="relative overflow-hidden rounded-[2.5rem]">
            <img src={IMG.celebration} alt={t("Students celebrating admission", "प्रवेशाचा आनंद साजरा करणारे विद्यार्थी")} loading="lazy" className="aspect-[4/3] h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/30 to-transparent" />
            <div className="absolute bottom-0 p-7 sm:p-10">
              <span className="rounded-full bg-sun px-3 py-1 text-xs font-bold text-sun-foreground">2025–26</span>
              <p className="mt-4 font-display text-5xl font-extrabold text-on-dark sm:text-6xl">127+ <span className="text-2xl">MBBS</span></p>
              <p className="mt-1 text-on-dark/75">{t("and 388+ BAMS selections reported this year", "आणि या वर्षी ३८८+ BAMS निवडी")}</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-5">
            {[IMG.doctor, IMG.lab, IMG.study, IMG.hero].map((src, i) => (
              <Reveal key={i} delay={i * 0.08} className="group relative overflow-hidden rounded-3xl">
                <img src={src} alt="" loading="lazy" className="aspect-square h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
                <div className="absolute bottom-0 p-4">
                  <p className="text-sm font-bold text-on-dark">{t("Student profile", "विद्यार्थी प्रोफाइल")}</p>
                  <p className="text-xs text-on-dark/70">{t("Awaiting verified details", "पडताळणीनंतर तपशील")}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center"><BtnSun to="/results">{t("Explore All Results", "सर्व निकाल पहा")} <ArrowRight className="h-4 w-4" /></BtnSun></div>
      </div>
    </section>
  );
}

function Journey() {
  const { t } = useLang();
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Heading center eyebrow={t("Your admission journey", "तुमचा प्रवेश प्रवास")} title={t("Five clear steps to your medical seat.", "वैद्यकीय प्रवेशाकडे पाच स्पष्ट पावले.")} />
        <div className="relative mt-16">
          <div className="absolute left-7 top-0 h-full w-0.5 bg-brand lg:left-0 lg:top-7 lg:h-0.5 lg:w-full" />
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {JOURNEY.map((s, i) => (
              <Reveal key={s.en} delay={i * 0.12} className="relative flex gap-5 lg:block">
                <span className={cn("relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full font-display text-lg font-extrabold shadow-soft ring-8 ring-background",
                  i === JOURNEY.length - 1 ? "bg-sun text-sun-foreground" : "bg-brand text-primary-foreground")}>{i + 1}</span>
                <div className="pt-2 lg:pt-6">
                  <h3 className="text-lg font-bold text-navy">{t(s.en, s.mr)}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Director() {
  const { t } = useLang();
  return (
    <section className="grid lg:grid-cols-2">
      <div className="relative flex min-h-[420px] items-center justify-center bg-navy p-10">
        <div className="absolute inset-0 bg-deep opacity-80" />
        <Reveal className="relative w-full max-w-sm">
          <div className="grid aspect-[4/5] place-items-center rounded-[2.5rem] rounded-tl-[7rem] glass-dark text-on-dark/60">
            <div className="text-center"><Users className="mx-auto h-16 w-16" /><p className="mt-3 text-sm">{t("Director's portrait coming soon", "संचालकांचे छायाचित्र लवकरच")}</p></div>
          </div>
        </Reveal>
      </div>
      <div className="flex items-center bg-cream px-6 py-16 sm:px-12 lg:px-16">
        <Reveal className="max-w-xl">
          <Eyebrow>{t("Meet our director", "आमचे संचालक")}</Eyebrow>
          <h2 className="mt-6 text-4xl font-extrabold text-navy sm:text-5xl">{t("Bhimrao Patil", "भीमराव पाटील")}</h2>
          <p className="mt-2 font-semibold text-primary">{t("Director & Admission Consultant", "संचालक व प्रवेश सल्लागार")}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("For more than a decade, Bhimrao Patil has guided students and parents from Kolhapur, Ichalkaranji and beyond through the complex world of medical admissions — with patience, clarity and honesty.",
              "दहा वर्षांहून अधिक काळ भीमराव पाटील कोल्हापूर, इचलकरंजी व परिसरातील विद्यार्थी व पालकांना वैद्यकीय प्रवेशाच्या गुंतागुंतीच्या प्रक्रियेत संयम, स्पष्टता व प्रामाणिकपणे मार्गदर्शन करत आहेत.")}
          </p>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-navy">{t("Read our story", "आमची कहाणी वाचा")} <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}

function Events() {
  const { t } = useLang();
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Heading eyebrow={t("Seminars & events", "सेमिनार व कार्यक्रम")} title={t("Free guidance seminars for students & parents.", "विद्यार्थी व पालकांसाठी मार्गदर्शन सेमिनार.")} />
          <Reveal><Link to="/events" className="inline-flex items-center gap-2 font-bold text-primary">{t("All events", "सर्व कार्यक्रम")} <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Reveal className="group relative overflow-hidden rounded-[2rem] md:col-span-2 md:row-span-2">
            <img src={IMG.seminar} alt={t("Admission guidance seminar", "प्रवेश मार्गदर्शन सेमिनार")} loading="lazy" className="h-full min-h-[320px] w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent" />
            <div className="absolute bottom-0 p-7"><span className="rounded-full glass-dark px-3 py-1 text-xs font-bold text-on-dark">{t("Past seminar", "मागील सेमिनार")}</span>
              <h3 className="mt-3 text-2xl font-extrabold text-on-dark sm:text-3xl">{t("NEET Admission Guidance Seminar", "NEET प्रवेश मार्गदर्शन सेमिनार")}</h3></div>
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden rounded-[2rem]"><img src={IMG.campus} alt="" loading="lazy" className="h-full min-h-[200px] w-full object-cover" /></Reveal>
          <Reveal delay={0.2} className="flex flex-col justify-between rounded-[2rem] bg-brand p-7 text-on-dark">
            <Calendar className="h-8 w-8" />
            <div><h3 className="text-xl font-extrabold">{t("Upcoming events", "आगामी कार्यक्रम")}</h3><p className="mt-2 text-sm opacity-80">{t("New dates will be announced once confirmed.", "तारखा निश्चित झाल्यावर जाहीर केल्या जातील.")}</p></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Updates() {
  const { t } = useLang();
  return (
    <section className="bg-ice py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Heading eyebrow={t("NEET updates", "NEET अपडेट्स")} title={t("Know the process before it begins.", "प्रक्रिया सुरू होण्याआधी समजून घ्या.")} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {UPDATES.map((u, i) => (
            <Reveal key={u.slug} delay={i * 0.07}>
              <Link to="/updates/$slug" params={{ slug: u.slug }} className="group block h-full overflow-hidden rounded-3xl bg-background shadow-soft transition hover:-translate-y-1">
                <div className="overflow-hidden"><img src={u.img} alt="" loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-110" /></div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs font-bold"><span className="rounded-full bg-accent px-2.5 py-1 text-primary">{u.cat}</span><span className="text-muted-foreground">{u.date}</span></div>
                  <h3 className="mt-3 font-bold leading-snug text-navy">{t(u.title, u.titleMr)}</h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqList() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {FAQS.map((f, i) => (
        <div key={f.q} className={cn("overflow-hidden rounded-3xl border transition", open === i ? "border-primary/30 bg-accent/50" : "border-border bg-background")}>
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6" aria-expanded={open === i}>
            <span className="font-bold text-navy">{t(f.q, f.qm)}</span>
            <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-full transition", open === i ? "rotate-45 bg-brand text-primary-foreground" : "bg-muted text-navy")}><Plus className="h-4 w-4" /></span>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                <p className="px-5 pb-6 leading-relaxed text-muted-foreground sm:px-6">{t(f.a, f.am)}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function Faq() {
  const { t } = useLang();
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Heading eyebrow="FAQ" title={t("Questions parents often ask.", "पालक नेहमी विचारतात ते प्रश्न.")} />
          <Reveal><img src={IMG.study} alt="" loading="lazy" className="mt-8 hidden aspect-[4/3] w-full rounded-[2rem] rounded-br-[6rem] object-cover lg:block" /></Reveal>
        </div>
        <Reveal><FaqList /></Reveal>
      </div>
    </section>
  );
}

function FinalCta() {
  const { t } = useLang();
  return (
    <section className="px-4 pb-20 sm:px-8">
      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-brand animate-gradient lg:grid-cols-[1.3fr_1fr]">
        <div className="relative z-10 p-8 sm:p-14">
          <Sparkles className="h-8 w-8 text-sun" />
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-on-dark sm:text-5xl">{t("Your Future Deserves the Right Guidance.", "तुमच्या भविष्याला योग्य मार्गदर्शनाची गरज आहे.")}</h2>
          <p className="mt-4 max-w-lg text-lg text-on-dark/80">{t("Take the next step toward your medical career with Mahalaxmi Medical Guidance.", "महालक्ष्मी मेडिकल गायडन्ससोबत तुमच्या वैद्यकीय करिअरकडे पुढचे पाऊल टाका.")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BtnSun to="/contact">{t("Enquire Now", "चौकशी करा")} <ArrowRight className="h-4 w-4" /></BtnSun>
            <a href={`tel:${CONTACT.phone1}`} className="inline-flex items-center justify-center gap-2 rounded-full glass-dark px-7 py-4 text-sm font-bold text-on-dark"><Phone className="h-4 w-4" /> {t("Call", "कॉल")} {CONTACT.phone1}</a>
          </div>
        </div>
        <img src={IMG.doctor} alt="" loading="lazy" className="h-72 w-full object-cover object-top lg:h-full" />
      </div>
    </section>
  );
}

export { ExternalLink };
