/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "next-intl" {
  export const NextIntlClientProvider: any;
  export const hasLocale: (locales: string[], locale: string) => boolean;
  export type Locale = string;

  export function useLocale(): string;
  export function useTranslations<T extends string = string>(namespace?: T): {
    [x: string]: any;
    (key: string, ...args: any[]): string;
  };
}