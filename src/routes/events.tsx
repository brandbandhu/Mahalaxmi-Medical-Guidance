import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Images, PlayCircle, Users } from "lucide-react";
import { BtnSun, Heading, PageHero, Reveal } from "@/components/site/ui";
import { IMG } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [
    { title: "Seminars & Events - Mahalaxmi Medical Guidance" },
    { name: "description", content: "Admission guidance seminars for students and parents." },
    { property: "og:title", content: "Seminars & Events - Mahalaxmi Medical Guidance" },
    { property: "og:description", content: "Admission guidance seminars for students and parents." },
  ] }),
  component: Page,
});

const events = [
  { title: "NEET Admission Guidance Seminar", type: "Past", place: "Kolhapur", img: IMG.seminar },
  { title: "Parent Counselling Session", type: "Past", place: "Ichalkaranji", img: IMG.counselling },
  { title: "Upcoming seminar dates", type: "Upcoming", place: "To be announced", img: IMG.campus },
];

function Page() {
  const { t } = useLang();
  const [tab, setTab] = useState<"all" | "Past" | "Upcoming">("all");
  const visible = events.filter((e) => tab === "all" || e.type === tab);
  return (
    <>
      <PageHero
        eyebrow={t("Seminars & Events", "सेमिनार आणि कार्यक्रम")}
        title={t("Guidance sessions for students and parents.", "विद्यार्थी आणि पालकांसाठी मार्गदर्शन सत्रे.")}
        sub={t("Explore past seminar highlights and a verified space for genuine upcoming announcements.", "मागील सेमिनार हायलाइट्स आणि खऱ्या आगामी घोषणांसाठी स्वतंत्र विभाग.")}
        img={IMG.seminar}
      />

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <Heading eyebrow={t("Event Journal", "कार्यक्रम नोंद")} title={t("Big seminar visuals, clear status labels.", "मोठी दृश्ये आणि स्पष्ट स्थिती.")} />
            <div className="flex gap-2 rounded-full bg-muted p-1">
              {(["all", "Past", "Upcoming"] as const).map((x) => <button key={x} onClick={() => setTab(x)} className={`rounded-full px-5 py-2.5 text-sm font-bold ${tab === x ? "bg-brand text-primary-foreground" : "text-navy"}`}>{t(x, x === "all" ? "सर्व" : x === "Past" ? "मागील" : "आगामी")}</button>)}
            </div>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {visible.map((e, i) => <Reveal key={e.title} delay={i * 0.08} className={i === 0 ? "lg:col-span-2" : ""}><article className="group relative h-full min-h-[360px] overflow-hidden rounded-[2.5rem]"><img src={e.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-7 text-on-dark"><span className="rounded-full bg-sun px-3 py-1 text-xs font-bold text-sun-foreground">{t(e.type, e.type === "Past" ? "मागील" : "आगामी")}</span><h3 className="mt-4 text-3xl font-extrabold">{t(e.title, e.title)}</h3><p className="mt-2 text-on-dark/75">{e.place}</p></div></article></Reveal>)}
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-3">
          {[Images, PlayCircle, Calendar].map((Icon, i) => <Reveal key={i} className="rounded-[2rem] bg-background p-7 shadow-soft"><Icon className="h-8 w-8 text-primary" /><h3 className="mt-5 text-xl font-extrabold text-navy">{[t("Gallery-ready", "गॅलरीसाठी तयार"), t("Video previews", "व्हिडिओ प्रिव्ह्यू"), t("Registration area", "नोंदणी विभाग")][i]}</h3><p className="mt-3 text-sm text-muted-foreground">{[t("Add real event photographs as soon as the client supplies approved media.", "मंजूर फोटो मिळताच येथे जोडता येतील."), t("Seminar video links can be embedded when available.", "व्हिडिओ लिंक उपलब्ध झाल्यावर एम्बेड करता येतील."), t("Upcoming event registrations should open only for verified events.", "खरे आगामी कार्यक्रम निश्चित झाल्यावरच नोंदणी सुरू करावी.")][i]}</p></Reveal>)}
        </div>
        <div className="mt-12 text-center"><BtnSun to="/contact">{t("Ask about next seminar", "पुढील सेमिनार विचारा")}</BtnSun></div>
      </section>
    </>
  );
}
