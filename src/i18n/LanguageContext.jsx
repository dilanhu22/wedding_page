import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import es from "./es";
import en from "./en";

const dictionaries = { es, en };
const STORAGE_KEY = "wedding-lang";
const DEFAULT_LANG = "es";

// eslint-disable-next-line react-refresh/only-export-components
export const LanguageContext = createContext(null);

function readStoredLang() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored in dictionaries ? stored : DEFAULT_LANG;
  } catch {
    return DEFAULT_LANG;
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  useEffect(() => {
    const t = dictionaries[lang];
    document.documentElement.lang = t.htmlLang;
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Un navegador sin almacenamiento no debe romper el cambio de idioma.
    }
  }, [lang]);

  const toggleLang = useCallback(
    () => setLang((current) => (current === "es" ? "en" : "es")),
    [],
  );

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t: dictionaries[lang] }),
    [lang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
