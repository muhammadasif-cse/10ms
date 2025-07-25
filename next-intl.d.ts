/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "next-intl" {
  export const NextIntlClientProvider: any;
  export const hasLocale: (locales: string[], locale: string) => boolean;
  export type Locale = string;
}