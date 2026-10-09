import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, ClipboardList, GraduationCap, MapPinned } from "lucide-react";
import { EnquiryForm, Heading, PageHero, Reveal } from "@/components/site/ui";
import { CHECKLIST, COURSES, IMG, SERVICES } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/courses/$slug")({
  loader: ({ params }) => {
    const course = COURSES.find((c) => c.slug === params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.course.name || "Course"} Guidance - Mahalaxmi Medical Guidance` },
    { name: "description", content: loaderData?.course.full || "Admission guidance and course overview." },
    { property: "og:title", content: `${loaderData?.course.name || "Course"} Guidance` },
    { property: "og:description", content: "Admission guidance and course overview." },
  ] }),
  component: Page,
});

function Page() {
  const { course } = Route.useLoaderData();
  const { t } = useLang();
  const support = SERVICES.slice(0, 5);

  return (
    <>
      <PageHero
        eyebrow={t("Course Detail", "कोर्स तपशील")}
        title={<>{course.name} <span className="text-sun">{t("Admission Guidance", "प्रवेश मार्गदर्शन")}</span></>}
        sub={t(course.full, course.fullMr)}
        img={course.img}
      >
        <Link to="/courses" className="mt-8 inline-flex items-center gap-2 rounded-full glass-dark px-5 py-3 text-sm font-bold text-on-dark"><ArrowLeft className="h-4 w-4" /> {t("Back to courses", "कोर्सेसकडे परत")}</Link>
      </PageHero>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <Heading eyebrow={t("Overview", "आढावा")} title={t(course.sub, course.subMr)} sub={t("Course duration and eligibility details should always be verified from official counselling authorities and the selected college before final admission decisions.", "अंतिम प्रवेश निर्णयापूर्वी कालावधी, पात्रता आणि नियम अधिकृत प्राधिकरण व निवडलेल्या कॉलेजकडून तपासा.")} />
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: GraduationCap, label: t("Course", "कोर्स"), value: course.name },
                { icon: ClipboardList, label: t("Duration", "कालावधी"), value: course.duration },
                { icon: MapPinned, label: t("Support", "सहाय्य"), value: t("India + State rounds", "भारत + राज्य फेऱ्या") },
              ].map((item) => <Reveal key={item.label} className="rounded-3xl bg-ice p-6"><item.icon className="h-7 w-7 text-primary" /><p className="mt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p><p className="mt-1 font-bold text-navy">{item.value}</p></Reveal>)}
            </div>

            <div className="mt-12 rounded-[2rem] bg-cream p-7 sm:p-9">
              <h2 className="text-2xl font-extrabold text-navy">{t("How Mahalaxmi helps", "महालक्ष्मी कशी मदत करते")}</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {support.map((s) => <div key={s.en} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" /><span className="text-sm font-semibold text-muted-foreground">{t(s.en, s.mr)}</span></div>)}
              </div>
            </div>
          </div>

          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[2rem] bg-background shadow-soft">
              <img src={IMG.counselling} alt="" className="aspect-[16/10] w-full object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-extrabold text-navy">{t("Ask about this course", "या कोर्सबद्दल विचारा")}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{t("Share your details and our team will contact you.", "तुमची माहिती पाठवा, आमची टीम संपर्क साधेल.")}</p>
                <div className="mt-6"><EnquiryForm compact defaultCourse={course.name} /></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-ice py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Heading eyebrow={t("Document Readiness", "कागदपत्र तयारी")} title={t("Keep documents ready before counselling starts.", "समुपदेशन सुरू होण्यापूर्वी कागदपत्रे तयार ठेवा.")} />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CHECKLIST.slice(0, 9).map((item) => <div key={item} className="rounded-2xl bg-background p-4 text-sm font-semibold text-navy shadow-soft"><CheckCircle2 className="mr-2 inline h-4 w-4 text-teal" />{item}</div>)}
          </div>
        </div>
      </section>
    </>
  );
}
