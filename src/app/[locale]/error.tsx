"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import PageLayout from "../components/page-layout";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error, reset }: Props) {
  const t = useTranslations("error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout title={t("title")}>
      <div>
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <p className="mt-4">{t("description")}</p>
        <p className="mt-2 text-red-600">{error.message}</p>
        <button
          onClick={() => reset()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {t("reset")}
        </button>
      </div>
    </PageLayout>
  );
}
