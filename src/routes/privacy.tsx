import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/ui";
import { IMG } from "@/lib/data";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [
    { title: "Privacy Policy - Mahalaxmi Medical Guidance" },
    { name: "description", content: "How we handle your enquiry information." },
    { property: "og:title", content: "Privacy Policy - Mahalaxmi Medical Guidance" },
    { property: "og:description", content: "How we handle your enquiry information." },
  ] }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero eyebrow="Privacy" title="Privacy Policy" sub="How Mahalaxmi Medical Guidance handles enquiry information shared through this website." img={IMG.study} />
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <div className="space-y-8 rounded-[2rem] bg-background p-7 shadow-soft sm:p-10">
          {[
            ["Information we collect", "We may collect student name, mobile number, selected course, NEET score and enquiry message when you submit the contact form or contact us through WhatsApp/phone."],
            ["How we use it", "Your information is used to respond to enquiries, understand your counselling needs and coordinate admission guidance discussions."],
            ["Sharing", "We do not sell enquiry information. Information may be shared only when required for counselling support, legal compliance or with your consent."],
            ["Student photos and results", "Names, scores, college details and photographs should be published only after verification and consent."],
            ["Contact", "For privacy questions, call 9689365500 or 9689000708."],
          ].map(([h, p]) => <div key={h}><h2 className="text-2xl font-extrabold text-navy">{h}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{p}</p></div>)}
        </div>
      </section>
    </>
  );
}
