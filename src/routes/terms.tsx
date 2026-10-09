import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";
import { IMG } from "@/lib/data";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [
    { title: "Terms of Use - Mahalaxmi Medical Guidance" },
    { name: "description", content: "Terms for using this website." },
    { property: "og:title", content: "Terms of Use - Mahalaxmi Medical Guidance" },
    { property: "og:description", content: "Terms for using this website." },
  ] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Terms" title="Terms of Use" sub="Important notes for using this website and admission guidance information." img={IMG.campus} />
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <div className="space-y-8 rounded-[2rem] bg-background p-7 shadow-soft sm:p-10">
          {[
            ["Guidance only", "Mahalaxmi Medical Guidance provides counselling and admission process guidance. Admission decisions are made by official counselling authorities and institutions."],
            ["No guarantee", "No seat, college, fee, scholarship or admission outcome is guaranteed through this website."],
            ["Official information", "Visitors should verify schedules, eligibility, documents and rules on official portals such as MCC, NTA and the relevant state authority."],
            ["Content updates", "Course and counselling information may change. We aim to keep the website useful, but official notices remain final."],
            ["Enquiries", "Submitting an enquiry does not create a formal contract unless separately agreed with Mahalaxmi Medical Guidance."],
          ].map(([h, p]) => <div key={h}><h2 className="text-2xl font-extrabold text-navy">{h}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{p}</p></div>)}
        </div>
      </section>
    </>
  );
}
