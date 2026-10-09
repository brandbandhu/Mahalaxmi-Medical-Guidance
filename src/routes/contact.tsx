import { createFileRoute } from "@tanstack/react-router";
import { Camera as Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { EnquiryForm, Heading, PageHero, Reveal } from "@/components/site/ui";
import { CONTACT, IMG } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us - Mahalaxmi Medical Guidance" },
    { name: "description", content: "Visit our Kolhapur or Ichalkaranji branch or call 9689365500." },
    { property: "og:title", content: "Contact Us - Mahalaxmi Medical Guidance" },
    { property: "og:description", content: "Visit our Kolhapur or Ichalkaranji branch or call 9689365500." },
  ] }),
  component: Page,
});

function Page() {
  const { t } = useLang();
  return (
    <>
      <PageHero
        eyebrow={t("Contact", "संपर्क")}
        title={t("Let us understand your admission profile.", "तुमची प्रवेश प्रोफाइल समजून घेऊया.")}
        sub={t("Call, WhatsApp or visit our Kolhapur and Ichalkaranji branches for counselling guidance.", "समुपदेशन मार्गदर्शनासाठी कॉल, WhatsApp किंवा कोल्हापूर/इचलकरंजी शाखेला भेट द्या.")}
        img={IMG.counselling}
      />
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Heading eyebrow={t("Branches", "शाखा")} title={t("Two offices, one clear guidance process.", "दोन कार्यालये, एक स्पष्ट मार्गदर्शन प्रक्रिया.")} />
            <div className="mt-8 space-y-4">
              {CONTACT.branches.map((b) => <Reveal key={b.en} className="rounded-[2rem] bg-ice p-6 shadow-soft"><MapPin className="h-7 w-7 text-primary" /><h3 className="mt-4 text-xl font-extrabold text-navy">{t(b.en, b.mr)}</h3><p className="mt-2 text-muted-foreground">{t(b.addr, b.addrMr)}</p><div className="mt-4 h-36 rounded-3xl bg-background p-5 text-sm font-semibold text-muted-foreground">{t("Map embed will be added after location verification.", "लोकेशन पडताळणीनंतर नकाशा जोडला जाईल.")}</div></Reveal>)}
            </div>
          </div>
          <Reveal className="rounded-[2.5rem] bg-background p-6 shadow-soft sm:p-9">
            <h2 className="text-3xl font-extrabold text-navy">{t("Send an enquiry", "चौकशी पाठवा")}</h2>
            <p className="mt-3 text-muted-foreground">{t("The form validates your details and opens a WhatsApp enquiry to the Mahalaxmi team.", "फॉर्म माहिती तपासतो आणि Mahalaxmi टीमला WhatsApp चौकशी उघडतो.")}</p>
            <div className="mt-8"><EnquiryForm /></div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a href={`tel:${CONTACT.phone1}`} className="flex items-center justify-center gap-2 rounded-full bg-navy px-4 py-3 text-sm font-bold text-on-dark"><Phone className="h-4 w-4" /> {CONTACT.phone1}</a>
              <a href={`https://wa.me/91${CONTACT.phone1}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-sun px-4 py-3 text-sm font-bold text-sun-foreground"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-navy"><Instagram className="h-4 w-4" /> Instagram</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
