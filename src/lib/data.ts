import hero from "@/assets/hero-students.jpg";
import counselling from "@/assets/counselling.jpg";
import celebration from "@/assets/celebration.jpg";
import study from "@/assets/study.jpg";
import seminar from "@/assets/seminar.jpg";
import campus from "@/assets/campus.jpg";
import lab from "@/assets/lab.jpg";
import doctor from "@/assets/doctor.jpg";

export const IMG = { hero, counselling, celebration, study, seminar, campus, lab, doctor };

export const CONTACT = {
  phone1: "9689365500",
  phone2: "9689000708",
  instagram: "https://instagram.com/mahalaxmimedicalguidance",
  branches: [
    { en: "Kolhapur", mr: "कोल्हापूर", addr: "713 'E', Shahupuri 4th Lane, Kolhapur – 416001", addrMr: "७१३ 'ई', शाहूपुरी ४थी गल्ली, कोल्हापूर – ४१६००१" },
    { en: "Ichalkaranji", mr: "इचलकरंजी", addr: "Gandhi Chowk, near Nagar Parishad, Ichalkaranji – 416115", addrMr: "गांधी चौक, नगर परिषदेजवळ, इचलकरंजी – ४१६११५" },
  ],
};

export type Category = "medical" | "engineering" | "pharmacy";
export type Course = {
  slug: string; name: string; full: string; fullMr: string; sub: string; subMr: string;
  category: Category; img: string; duration: string;
};

export const COURSES: Course[] = [
  { slug: "mbbs", name: "MBBS", full: "Bachelor of Medicine & Bachelor of Surgery", fullMr: "बॅचलर ऑफ मेडिसिन अँड बॅचलर ऑफ सर्जरी", sub: "The classic path to becoming a doctor", subMr: "डॉक्टर बनण्याचा पारंपरिक मार्ग", category: "medical", img: hero, duration: "5.5 years incl. internship" },
  { slug: "bds", name: "BDS", full: "Bachelor of Dental Surgery", fullMr: "बॅचलर ऑफ डेंटल सर्जरी", sub: "Build a career in dental care", subMr: "दंत आरोग्यात करिअर", category: "medical", img: lab, duration: "5 years incl. internship" },
  { slug: "bams", name: "BAMS", full: "Bachelor of Ayurvedic Medicine & Surgery", fullMr: "बॅचलर ऑफ आयुर्वेदिक मेडिसिन अँड सर्जरी", sub: "Ayurveda meets modern practice", subMr: "आयुर्वेद आणि आधुनिक उपचार", category: "medical", img: doctor, duration: "5.5 years incl. internship" },
  { slug: "bhms", name: "BHMS", full: "Bachelor of Homoeopathic Medicine & Surgery", fullMr: "बॅचलर ऑफ होमिओपॅथिक मेडिसिन अँड सर्जरी", sub: "Holistic homoeopathic care", subMr: "समग्र होमिओपॅथिक उपचार", category: "medical", img: campus, duration: "5.5 years incl. internship" },
  { slug: "bums", name: "BUMS", full: "Bachelor of Unani Medicine & Surgery", fullMr: "बॅचलर ऑफ युनानी मेडिसिन अँड सर्जरी", sub: "Traditional Unani medicine", subMr: "पारंपरिक युनानी वैद्यक", category: "medical", img: study, duration: "5.5 years incl. internship" },
  { slug: "bvsc", name: "B.V.Sc", full: "Bachelor of Veterinary Science", fullMr: "बॅचलर ऑफ व्हेटर्नरी सायन्स", sub: "Care for animal health", subMr: "प्राणी आरोग्याची सेवा", category: "medical", img: celebration, duration: "5.5 years incl. internship" },
  { slug: "bpth", name: "B.P.Th", full: "Bachelor of Physiotherapy", fullMr: "बॅचलर ऑफ फिजिओथेरपी", sub: "Restore movement, restore lives", subMr: "हालचाल व आरोग्य पुनर्संचयित करा", category: "medical", img: counselling, duration: "4.5 years incl. internship" },
  { slug: "nursing", name: "B.Sc Nursing", full: "Bachelor of Science in Nursing", fullMr: "बी.एस्सी. नर्सिंग", sub: "The heart of healthcare", subMr: "आरोग्यसेवेचा कणा", category: "medical", img: doctor, duration: "4 years" },
  { slug: "engineering", name: "Engineering", full: "B.E. / B.Tech admissions", fullMr: "बी.ई. / बी.टेक प्रवेश", sub: "Admission guidance for engineering", subMr: "अभियांत्रिकी प्रवेश मार्गदर्शन", category: "engineering", img: campus, duration: "4 years" },
  { slug: "pharmacy", name: "Pharmacy", full: "B.Pharm / D.Pharm admissions", fullMr: "बी.फार्म / डी.फार्म प्रवेश", sub: "Careers in pharmaceutical science", subMr: "औषधनिर्माण शास्त्रात करिअर", category: "pharmacy", img: lab, duration: "4 years (B.Pharm)" },
];

export const SERVICES = [
  { en: "NEET Admission Counselling", mr: "NEET प्रवेश समुपदेशन", d: "One-to-one guidance through every round of counselling.", dm: "समुपदेशनाच्या प्रत्येक फेरीत वैयक्तिक मार्गदर्शन." },
  { en: "All India Quota (MCC)", mr: "ऑल इंडिया कोटा (MCC)", d: "Understand MCC rounds, choice filling and reporting.", dm: "MCC फेऱ्या, पसंतीक्रम व रिपोर्टिंग समजून घ्या." },
  { en: "Maharashtra State Counselling", mr: "महाराष्ट्र राज्य समुपदेशन", d: "Support with the state CET Cell process.", dm: "राज्य CET सेल प्रक्रियेत मदत." },
  { en: "Other-State Admission Guidance", mr: "इतर राज्य प्रवेश मार्गदर्शन", d: "Explore eligible options outside Maharashtra.", dm: "महाराष्ट्राबाहेरील पात्र पर्याय जाणून घ्या." },
  { en: "College Selection", mr: "कॉलेज निवड", d: "Shortlist colleges that fit your score and goals.", dm: "गुण व ध्येयानुसार कॉलेजची यादी." },
  { en: "Fee & Scholarship Guidance", mr: "फी व शिष्यवृत्ती मार्गदर्शन", d: "Clarity on fee structures and scholarship schemes.", dm: "फी रचना व शिष्यवृत्ती योजनांची स्पष्टता." },
  { en: "Low NEET Score Options", mr: "कमी NEET गुणांसाठी पर्याय", d: "Discover realistic paths for every score range.", dm: "प्रत्येक गुणश्रेणीसाठी वास्तववादी मार्ग." },
  { en: "NEET Application Assistance", mr: "NEET अर्ज सहाय्य", d: "Avoid mistakes in forms and documents.", dm: "अर्ज व कागदपत्रांतील चुका टाळा." },
];

export const STATS = [
  { n: 10, s: "+", en: "Years Experience", mr: "वर्षांचा अनुभव" },
  { n: 3000, s: "+", en: "Successful Admissions", mr: "यशस्वी प्रवेश" },
  { n: 127, s: "+", en: "MBBS Selections (2025–26)", mr: "MBBS निवड (२०२५–२६)" },
  { n: 388, s: "+", en: "BAMS Selections (2025–26)", mr: "BAMS निवड (२०२५–२६)" },
];

export const JOURNEY = [
  { en: "Connect With Us", mr: "आमच्याशी संपर्क साधा" },
  { en: "Discuss Your NEET Profile", mr: "तुमच्या NEET प्रोफाइलवर चर्चा" },
  { en: "Explore Suitable Courses & Colleges", mr: "योग्य कोर्स व कॉलेज शोधा" },
  { en: "Receive Counselling Process Guidance", mr: "समुपदेशन प्रक्रियेचे मार्गदर्शन" },
  { en: "Get Admission Process Support", mr: "प्रवेश प्रक्रियेत सहाय्य" },
];

export const FAQS = [
  { q: "When should I start NEET counselling guidance?", qm: "NEET समुपदेशन मार्गदर्शन केव्हा सुरू करावे?", a: "Ideally right after the NEET result is declared, before registration for MCC and state counselling opens. Early planning helps you prepare documents and a realistic college list.", am: "NEET निकाल लागल्यानंतर लगेच, MCC व राज्य समुपदेशनाची नोंदणी सुरू होण्यापूर्वी. लवकर नियोजनाने कागदपत्रे व कॉलेज यादी तयार ठेवता येते." },
  { q: "What is the difference between All India Quota and State Quota?", qm: "ऑल इंडिया कोटा आणि राज्य कोटा यात काय फरक आहे?", a: "All India Quota seats are filled by MCC across government colleges nationally; State Quota seats are filled by the state authority (CET Cell in Maharashtra) for eligible domicile candidates.", am: "ऑल इंडिया कोटा जागा MCC मार्फत देशभर भरल्या जातात; राज्य कोटा जागा राज्य प्राधिकरणामार्फत (महाराष्ट्रात CET सेल) पात्र रहिवासी उमेदवारांसाठी भरल्या जातात." },
  { q: "Do you guarantee admission?", qm: "तुम्ही प्रवेशाची हमी देता का?", a: "No. Admissions are decided by official counselling authorities based on merit and rules. We provide guidance so you can make informed, timely decisions.", am: "नाही. प्रवेश अधिकृत समुपदेशन प्राधिकरण गुणवत्ता व नियमांनुसार ठरवतात. आम्ही योग्य व वेळेवर निर्णय घेण्यासाठी मार्गदर्शन करतो." },
  { q: "Can you help if my NEET score is low?", qm: "माझे NEET गुण कमी असतील तर मदत मिळेल का?", a: "Yes. We help you explore all realistic options — AYUSH courses, allied health sciences, other states and alternative careers.", am: "होय. आम्ही AYUSH कोर्स, संलग्न आरोग्य विज्ञान, इतर राज्ये आणि पर्यायी करिअर अशा सर्व वास्तववादी पर्यायांचा विचार करण्यास मदत करतो." },
  { q: "Where are your offices?", qm: "तुमची कार्यालये कुठे आहेत?", a: "We have branches in Kolhapur (Shahupuri) and Ichalkaranji (Gandhi Chowk).", am: "आमच्या शाखा कोल्हापूर (शाहूपुरी) आणि इचलकरंजी (गांधी चौक) येथे आहेत." },
];

export const UPDATES = [
  { slug: "mcc-counselling-explained", cat: "MCC", title: "How MCC All India Quota counselling works", titleMr: "MCC ऑल इंडिया कोटा समुपदेशन कसे चालते", date: "Archived guide", img: campus, sum: "A step-by-step overview of registration, choice filling, seat allotment and reporting.", source: "https://mcc.nic.in" },
  { slug: "maharashtra-cet-cell", cat: "State", title: "Maharashtra state medical counselling basics", titleMr: "महाराष्ट्र राज्य वैद्यकीय समुपदेशनाची मूलतत्त्वे", date: "Archived guide", img: counselling, sum: "Understand state quota eligibility, domicile rules and the CET Cell process.", source: "https://cetcell.mahacet.org" },
  { slug: "document-checklist", cat: "Checklist", title: "NEET counselling document checklist", titleMr: "NEET समुपदेशन कागदपत्रांची यादी", date: "Evergreen", img: study, sum: "Keep these documents ready before counselling rounds begin.", source: "https://neet.nta.nic.in" },
  { slug: "low-score-options", cat: "Careers", title: "Options to explore with a lower NEET score", titleMr: "कमी NEET गुणांसह विचार करण्याजोगे पर्याय", date: "Evergreen", img: lab, sum: "AYUSH, allied health and other pathways worth considering.", source: "https://neet.nta.nic.in" },
];

export const CHECKLIST = [
  "NEET admit card & score card", "Class 10 & 12 mark sheets and certificates", "Birth certificate / proof of age",
  "Domicile certificate (for state quota)", "Caste / category certificate (if applicable)", "Non-creamy layer certificate (if applicable)",
  "Aadhaar card / photo ID", "Passport-size photographs", "Income certificate (for fee concessions)",
];
