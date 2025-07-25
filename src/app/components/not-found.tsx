import { getLocale, getTranslations } from "next-intl/server";
import PageLayout from "./page-layout";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "not_found" });

  return (
    <PageLayout title={t("title")}>
      <p className="max-w-[460px]">{t("description")}</p>
    </PageLayout>
  );
}
