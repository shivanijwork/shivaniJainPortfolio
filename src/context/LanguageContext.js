import { createContext, useCallback, useEffect, useMemo, useState } from "react";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  isSupportedLanguage,
  languages,
  messagesByLanguage,
} from "@/i18n/config";

export const LanguageContext = createContext(null);

function getNestedValue(source, key) {
  return key.split(".").reduce((value, part) => value?.[part], source);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (savedLanguage && isSupportedLanguage(savedLanguage)) {
        setLanguageState(savedLanguage);
      }
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage) => {
    if (!isSupportedLanguage(nextLanguage)) return;
    setLanguageState(nextLanguage);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
  }, []);

  const t = useCallback(
    (key, variables = {}) => {
      const translated = getNestedValue(messagesByLanguage[language], key);
      const value = translated ?? getNestedValue(messagesByLanguage[DEFAULT_LANGUAGE], key) ?? key;
      if (typeof value !== "string") return value;
      return Object.entries(variables).reduce(
        (result, [name, replacement]) =>
          result.replaceAll(`{{${name}}}`, String(replacement)),
        value,
      );
    },
    [language],
  );

  const value = useMemo(
    () => ({ language, languages, setLanguage, t }),
    [language, setLanguage, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
