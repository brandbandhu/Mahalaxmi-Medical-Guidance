import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "mr";
type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (en: string, mr: string) => string };
const LangContext = createContext<Ctx>({ lang: "en", setLang: () => {}, t: (en) => en });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  useEffect(() => {
    const saved = localStorage.getItem("mmg-lang");
    if (saved === "mr" || saved === "en") setLangState(saved);
  }, []);
  useEffect(() => {
    document.documentElement.lang = lang === "mr" ? "mr" : "en";
  }, [lang]);
  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("mmg-lang", l);
  };
  return (
    <LangContext.Provider value={{ lang, setLang, t: (en, mr) => (lang === "mr" ? mr : en) }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
