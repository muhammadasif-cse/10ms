import { routing } from "@/i18n/routing";
import LocaleSwitcherSelect from "./locale-switcher-select";
import { getTranslations, getLocale } from "next-intl/server";

export default async function LocaleSwitcher() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "locale_switcher" });

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
