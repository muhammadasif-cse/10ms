import PageLayout from "@/app/components/page-layout";
import { Locale, useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: Locale };
};

export default function PathnamesPage({ params }: Props) {
  const { locale } = params;

  setRequestLocale(locale);

  const t = useTranslations("home");

  return (
    <PageLayout title={t("title")}>
      <div className="max-w-[490px]">
        {t("description")}
      </div>
    </PageLayout>
  );
}
