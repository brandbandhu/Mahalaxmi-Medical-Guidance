import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Camera as Instagram, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { useLang } from "@/lib/i18n";
import { CONTACT, COURSES, SERVICES } from "@/lib/data";
import { cn } from "@/lib/utils";
import mahalaxmiLogo from "@/assets/mahalaxmi logo .png";

const NAV = [
  { to: "/", en: "Home", mr: "मुख्यपृष्ठ" },
  { to: "/about", en: "About", mr: "आमच्याबद्दल" },
  { to: "/courses", en: "Courses", mr: "कोर्सेस" },
  { to: "/services", en: "Services", mr: "सेवा" },
  { to: "/results", en: "Results", mr: "निकाल" },
  { to: "/events", en: "Events", mr: "सेमिनार" },
  { to: "/updates", en: "NEET Updates", mr: "NEET अपडेट्स" },
  { to: "/contact", en: "Contact", mr: "संपर्क" },
] as const;

function Logo({ light }: { light?: boolean }) {
  return (
    <Link to="/" className="flex min-w-0 items-center">
      <span className={cn("inline-flex shrink-0 items-center", light && "drop-shadow-sm")}>
        <img src={mahalaxmiLogo} alt="Mahalaxmi Admission Guidance" className="h-12 w-auto max-w-[220px] object-contain sm:h-14" />
      </span>
    </Link>
  );
}

function LangToggle({ light }: { light?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div className={cn("flex shrink-0 rounded-full p-1 text-xs font-bold", light ? "glass-dark" : "bg-muted")}>
      {(["en", "mr"] as const).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={cn("rounded-full px-3 py-1.5 transition", lang === l ? "bg-brand text-primary-foreground" : light ? "text-on-dark" : "text-navy")}>
          {l === "en" ? "EN" : "मराठी"}
        </button>
      ))}
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const { t } = useLang();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);
  const light = true;

  return (
    <div className="min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-on-dark/10 bg-navy shadow-soft transition-all duration-300">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
          <Logo light={light} />
          <nav className="hidden justify-center gap-1 lg:flex">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
                className={cn("rounded-full px-3 py-2 text-sm font-semibold transition", light ? "text-on-dark/70 hover:text-sun" : "text-navy/75 hover:bg-muted hover:text-navy")}
                activeProps={{ className: light ? "!text-sun" : "!text-primary bg-accent" }}>
                {t(n.en, n.mr)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden sm:block"><LangToggle light={light} /></div>
            <Link to="/contact" className="hidden rounded-full bg-sun px-5 py-2.5 text-sm font-bold text-sun-foreground shadow-glow transition hover:-translate-y-0.5 md:inline-flex">
              {t("Enquire Now", "चौकशी करा")}
            </Link>
            <button onClick={() => setOpen(true)} aria-label="Open menu" className={cn("grid h-11 w-11 place-items-center rounded-full lg:hidden", light ? "glass-dark text-on-dark" : "bg-muted text-navy")}>
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div className="fixed inset-0 z-[60] bg-navy/50 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
            <motion.aside className="fixed inset-y-0 right-0 z-[70] flex w-[86%] max-w-sm flex-col bg-deep p-6"
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 260 }}>
              <div className="flex items-center justify-between">
                <Logo light />
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="grid h-11 w-11 place-items-center rounded-full glass-dark text-on-dark"><X className="h-5 w-5" /></button>
              </div>
              <nav className="mt-10 flex flex-col gap-1">
                {NAV.map((n, i) => (
                  <motion.div key={n.to} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i }}>
                    <Link to={n.to} activeOptions={{ exact: n.to === "/" }} className="block rounded-2xl px-4 py-3 text-xl font-bold text-on-dark/80" activeProps={{ className: "!text-on-dark glass-dark" }}>{t(n.en, n.mr)}</Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto space-y-4">
                <LangToggle light />
                <a href={`tel:${CONTACT.phone1}`} className="flex items-center justify-center gap-2 rounded-full bg-sun py-4 font-bold text-sun-foreground"><Phone className="h-4 w-4" /> {CONTACT.phone1}</a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <motion.main key={path} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        {children}
      </motion.main>

      <Footer />

      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 rounded-full glass p-1.5 shadow-soft md:hidden">
        <a href={`tel:${CONTACT.phone1}`} className="flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-sm font-bold text-on-dark"><Phone className="h-4 w-4" /> {t("Call", "कॉल")}</a>
        <Link to="/contact" className="flex items-center justify-center gap-2 rounded-full bg-sun py-3 text-sm font-bold text-sun-foreground"><MessageCircle className="h-4 w-4" /> {t("Enquire", "चौकशी")}</Link>
      </div>
    </div>
  );
}

function Footer() {
  const { t } = useLang();
  return (
    <footer className="relative overflow-hidden bg-navy pb-28 pt-20 text-on-dark md:pb-10">
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-on-dark/70">
            {t("Trusted NEET counselling and medical admission guidance from Kolhapur & Ichalkaranji.", "कोल्हापूर व इचलकरंजीतून विश्वासार्ह NEET समुपदेशन व वैद्यकीय प्रवेश मार्गदर्शन.")}
          </p>
          <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full glass-dark px-4 py-2 text-sm font-semibold"><Instagram className="h-4 w-4" /> @mahalaxmimedicalguidance</a>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-sun">{t("Courses", "कोर्सेस")}</h4>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-on-dark/75 md:grid-cols-1">
            {COURSES.slice(0, 7).map((c) => <li key={c.slug}><Link to="/courses/$slug" params={{ slug: c.slug }} className="hover:text-on-dark">{c.name}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-sun">{t("Services", "सेवा")}</h4>
          <ul className="mt-5 space-y-2 text-sm text-on-dark/75">
            {SERVICES.slice(0, 5).map((s) => <li key={s.en}><Link to="/services" className="hover:text-on-dark">{t(s.en, s.mr)}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-sun">{t("Branches", "शाखा")}</h4>
          <ul className="mt-5 space-y-4 text-sm text-on-dark/75">
            {CONTACT.branches.map((b) => (
              <li key={b.en} className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" /><span><b className="text-on-dark">{t(b.en, b.mr)}</b><br />{t(b.addr, b.addrMr)}</span></li>
            ))}
            <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-teal" /><span><a href={`tel:${CONTACT.phone1}`}>{CONTACT.phone1}</a> · <a href={`tel:${CONTACT.phone2}`}>{CONTACT.phone2}</a></span></li>
          </ul>
        </div>
      </div>
      <div className="relative mx-auto mt-14 flex max-w-7xl flex-col gap-3 border-t border-on-dark/10 px-5 pt-6 text-xs text-on-dark/55 sm:flex-row sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Mahalaxmi Medical Guidance. {t("Guidance only — admissions are decided by official authorities.", "केवळ मार्गदर्शन — प्रवेश अधिकृत प्राधिकरणांद्वारे ठरवले जातात.")}</p>
        <div className="flex gap-5"><Link to="/privacy">{t("Privacy", "गोपनीयता")}</Link><Link to="/terms">{t("Terms", "अटी")}</Link></div>
      </div>
    </footer>
  );
}
