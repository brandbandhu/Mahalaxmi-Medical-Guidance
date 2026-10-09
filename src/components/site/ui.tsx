import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { useLang } from "@/lib/i18n";
import { CONTACT } from "@/lib/data";
import { CheckCircle2, Send } from "lucide-react";

export function Reveal({ children, delay = 0, className, y = 28 }: { children: ReactNode; delay?: number; className?: string | undefined; y?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children, dark }: { children: ReactNode; dark?: boolean | undefined }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em]", dark ? "glass-dark text-on-dark" : "bg-accent text-navy")}>
      <span className="h-1.5 w-1.5 rounded-full bg-sun" />
      {children}
    </span>
  );
}

export function Heading({ eyebrow, title, sub, center, dark }: { eyebrow?: string; title: ReactNode; sub?: string; center?: boolean; dark?: boolean | undefined }) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2 className={cn("mt-5 text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-5xl", dark ? "text-on-dark" : "text-navy")}>{title}</h2>
      {sub && <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", dark ? "text-on-dark/75" : "text-muted-foreground")}>{sub}</p>}
    </Reveal>
  );
}

export function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / dur);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{v.toLocaleString("en-IN")}{suffix}</span>;
}

export function PageHero({ eyebrow, title, sub, img, children }: { eyebrow: string; title: ReactNode; sub: string; img: string; children?: ReactNode }) {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-ice pt-28 pb-10 sm:pt-32 sm:pb-12">
      <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/48 to-black/24" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <nav className="flex items-center gap-2 text-sm font-bold text-on-dark/78" aria-label="Breadcrumb">
            <Link to="/" className="transition hover:text-sun">{t("Home", "मुख्यपृष्ठ")}</Link>
            <span className="text-sun">/</span>
            <span className="text-on-dark">{eyebrow}</span>
          </nav>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-[1.08] text-on-dark sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-base font-semibold text-on-dark/78">{sub}</p>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function BtnSun({ to, children, href }: { to?: string; href?: string; children: ReactNode }) {
  const cls = "inline-flex items-center justify-center gap-2 rounded-full bg-sun px-7 py-4 text-sm font-bold text-sun-foreground shadow-glow transition hover:-translate-y-0.5 hover:brightness-105";
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <Link to={to as "/"} className={cls}>{children}</Link>;
}

export function EnquiryForm({ compact, defaultCourse }: { compact?: boolean; defaultCourse?: string }) {
  const { t } = useLang();
  const [done, setDone] = useState(false);
  const [err, setErr] = useState("");
  const field = "w-full rounded-2xl border border-input bg-background px-4 py-3.5 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15";
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") || "").trim();
    const phone = String(f.get("phone") || "").replace(/\D/g, "");
    if (name.length < 2) return setErr(t("Please enter your name.", "कृपया तुमचे नाव लिहा."));
    if (phone.length !== 10) return setErr(t("Please enter a valid 10-digit mobile number.", "कृपया वैध १० अंकी मोबाईल नंबर लिहा."));
    setErr("");
    const msg = `Enquiry from ${name} (${phone})%0ACourse: ${f.get("course")}%0ANEET score: ${f.get("score") || "-"}%0A${f.get("message") || ""}`;
    window.open(`https://wa.me/91${CONTACT.phone1}?text=${msg}`, "_blank");
    setDone(true);
  };
  if (done)
    return (
      <div className="flex flex-col items-center rounded-3xl bg-accent p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-teal" />
        <h3 className="mt-4 text-2xl font-bold text-navy">{t("Thank you!", "धन्यवाद!")}</h3>
        <p className="mt-2 text-muted-foreground">{t("Our team will get in touch with you shortly.", "आमची टीम लवकरच तुमच्याशी संपर्क साधेल.")}</p>
      </div>
    );
  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className={cn("grid gap-4", !compact && "sm:grid-cols-2")}>
        <input name="name" placeholder={t("Student name", "विद्यार्थ्याचे नाव")} className={field} maxLength={80} />
        <input name="phone" inputMode="numeric" placeholder={t("Mobile number", "मोबाईल नंबर")} className={field} maxLength={14} />
        <select name="course" defaultValue={defaultCourse || "MBBS"} className={field}>
          {["MBBS", "BDS", "BAMS", "BHMS", "BUMS", "B.V.Sc", "B.P.Th", "B.Sc Nursing", "Engineering", "Pharmacy"].map((c) => <option key={c}>{c}</option>)}
        </select>
        <input name="score" inputMode="numeric" placeholder={t("NEET score (optional)", "NEET गुण (ऐच्छिक)")} className={field} maxLength={4} />
      </div>
      {!compact && <textarea name="message" rows={4} placeholder={t("Your question", "तुमचा प्रश्न")} className={field} maxLength={600} />}
      {err && <p className="text-sm font-medium text-destructive">{err}</p>}
      <button className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-bold text-primary-foreground shadow-soft transition hover:-translate-y-0.5">
        <Send className="h-4 w-4" /> {t("Send Enquiry", "चौकशी पाठवा")}
      </button>
    </form>
  );
}
