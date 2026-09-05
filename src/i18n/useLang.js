import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function useLang() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLang debe usarse dentro de <LanguageProvider>");
  }
  return context;
}
