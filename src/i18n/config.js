import en from "@/locales/en.json";
import hi from "@/locales/hi.json";
import ja from "@/locales/ja.json";

export const DEFAULT_LANGUAGE = "en";
export const LANGUAGE_STORAGE_KEY = "portfolio-language";

export const languages = [
  { code: "en", name: "English", nativeName: "English", flag: "🇺🇸", messages: en },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", flag: "🇮🇳", messages: hi },
  { code: "ja", name: "Japanese", nativeName: "日本語", flag: "🇯🇵", messages: ja },
];

export const messagesByLanguage = Object.fromEntries(
  languages.map(({ code, messages }) => [code, messages]),
);

export const isSupportedLanguage = (code) =>
  languages.some((language) => language.code === code);
