import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

function hasLocale(locales: ReadonlyArray<string>, locale: string | undefined): boolean {
  return !!locale && locales.includes(locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: string = hasLocale(routing.locales, requested)
    ? requested!
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
