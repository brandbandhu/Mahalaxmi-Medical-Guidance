import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ExternalLink, FileCheck2 } from "lucide-react";
import { BtnSun, PageHero, Reveal } from "@/components/site/ui";
import { CHECKLIST, IMG, UPDATES } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/updates/$slug")({
  loader: ({ params }) => {
    const update = UPDATES.find((u) => u.slug === params.slug);
    if (!update) throw notFound();
    return { update };
  },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.update.title || "NEET Update"} - Mahalaxmi Medical Guidance` },
    { name: "description", content: loaderData?.update.sum || "NEET counselling guide." },
    { property: "og:title", content: loaderData?.update.title || "NEET Update" },
    { property: "og:description", content: loaderData?.update.sum || "NEET counselling guide." },
  ] }),
  component: Page,
});

function Page() {
  const { update } = Route.useLoaderData();
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={`${update.cat} - ${update.date}`}
        title={t(update.title, update.titleMr)}
        sub={update.sum}
        img={update.img}
      >
        <Link to="/updates" className="mt-8 inline-flex items-center gap-2 rounded-full glass-dark px-5 py-3 text-sm font-bold text-on-dark"><ArrowLeft className="h-4 w-4" /> {t("Back to updates", "अपडेट्सकडे परत")}</Link>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.55fr]">
          <Reveal className="prose prose-lg max-w-none">
            <div className="rounded-[2rem] bg-background p-7 shadow-soft sm:p-10">
              <p className="text-xl leading-relaxed text-muted-foreground">{update.sum}</p>
              <h2 className="mt-8 text-3xl font-extrabold text-navy">{t("What students should remember", "विद्यार्थ्यांनी लक्षात ठेवावे")}</h2>
              <ul className="mt-5 space-y-4 text-muted-foreground">
                <li>{t("Official portals publish the final schedules, eligibility rules and allotment notices.", "अंतिम वेळापत्रक, पात्रता आणि अलॉटमेंट नोटिस अधिकृत पोर्टलवरच प्रकाशित होतात.")}</li>
                <li>{t("Keep login details, documents and payment readiness organised before choice filling begins.", "चॉइस फिलिंगपूर्वी लॉगिन तपशील, कागदपत्रे आणि पेमेंट तयारी व्यवस्थित ठेवा.")}</li>
                <li>{t("Never rely on unverified screenshots or forwarded deadlines for counselling decisions.", "समुपदेशन निर्णयांसाठी अप्रमाणित स्क्रीनशॉट किंवा फॉरवर्डेड डेडलाइनवर अवलंबून राहू नका.")}</li>
              </ul>
              <a href={update.source} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-primary-foreground">{t("Open official source", "अधिकृत स्रोत उघडा")} <ExternalLink className="h-4 w-4" /></a>
            </div>
          </Reveal>
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] bg-ice p-6 shadow-soft">
              <FileCheck2 className="h-8 w-8 text-teal" />
              <h2 className="mt-4 text-2xl font-extrabold text-navy">{t("Quick checklist", "झटपट यादी")}</h2>
              <div className="mt-5 space-y-3">
                {CHECKLIST.slice(0, 6).map((c) => <p key={c} className="rounded-2xl bg-background p-3 text-sm font-semibold text-navy">{c}</p>)}
              </div>
              <div className="mt-6"><BtnSun to="/contact">{t("Need help?", "मदत हवी?")}</BtnSun></div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
