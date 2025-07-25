import { getTranslations } from "next-intl/server";
import NavigationLink from "./navigation-link";
import LocaleSwitcher from "./locale-switcher";

export default async function Navigation({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "navigation" });

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t("admission")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}