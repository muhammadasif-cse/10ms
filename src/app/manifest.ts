import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const t = await getTranslations({
    locale: routing.defaultLocale,
    namespace: "meta_data",
  });
  return {
    name: t("name"),
    start_url: "/",
    theme_color: "#101E33",
  };
}
