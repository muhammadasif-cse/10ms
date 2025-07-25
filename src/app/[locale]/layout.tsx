import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import {
  getTranslations,
  getMessages,
  setRequestLocale,
} from "next-intl/server";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { routing } from "@/i18n/routing";
import "../[locale]/globals.css";
import Navigation from "../components/navigation";

type Locale = (typeof routing.locales)[number];

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: Omit<Props, "children">) {
  const { locale } = await props.params;
  const t = await getTranslations({ locale, namespace: "meta_data" });
  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    author: t("author"),
    robots: t("robots"),
    og_title: t("og_title"),
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages({ locale });

  return (
    <html className="h-full" lang={locale}>
      <body className={`flex h-full flex-col ${inter.className}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navigation locale={locale} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
