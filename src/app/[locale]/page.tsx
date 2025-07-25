// app/[locale]/page.tsx
import { fetchAPI } from "@/lib/fetch-api";
import { Locale } from "next-intl";
import Hero from "./components/hero";
import Instructor from "./components/sections/instructor";
import Feature from "./components/sections/features";
import Pointers from "./components/sections/pointers";
import FeatureExplanations from "./components/sections/feature-explanations";
import About from "./components/sections/about";
import { Metadata } from "next";
import { generateSeoMetadata } from "./components/seo";
import { TProduct } from "../types/product";

type Props = {
  params: Promise<{ locale: Locale }> | undefined;
};

type MetadataProps = {
  params: Promise<{ locale: Locale }> | undefined;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const fallbackLocale: Locale = "bn";
  const locale = (await params)?.locale ?? fallbackLocale;

  try {
    const res = await fetchAPI(
      `${process.env.BASE_URL}/products/ielts-course?lang=${locale}`
    );

    if (res.code !== 200 || !res.data?.seo) {
      return generateSeoMetadata({
        seo: {},
        locale,
        fallbackTitle: "10 Minutes School - IELTS Course",
        fallbackDescription: "Join the best IELTS preparation course today.",
      });
    }

    return generateSeoMetadata({
      seo: res.data.seo,
      locale,
      fallbackTitle: "10 Minutes School - IELTS Course",
      fallbackDescription: "Join the best IELTS preparation course today.",
    });
  } catch (error) {
    console.error("meta error:", error);
    return generateSeoMetadata({
      seo: {},
      locale,
      fallbackTitle: "10 Minutes School - IELTS Course",
      fallbackDescription: "Join the best IELTS preparation course today.",
    });
  }
}

export default async function RootPage({ params }: Props) {
  const fallbackLocale: Locale = "bn";
  const locale = (await params)?.locale ?? fallbackLocale;

  const products = await getProducts(locale);

  if (!products || !products.sections || products.sections.length === 0) {
    return <div className="text-center p-4">No products available</div>;
  }

  return (
    <div className="pb-10">
      <Hero data={products} />
      <div className="flex-1 w-full mx-auto container">
        <div className="space-y-2 w-full md:w-[calc(100%-348px)] lg:w-[calc(100%-448px)] max-w-full">
          {products.sections.map((section) => {
            const key = section.name;
            const common_props = {
              title: section.name,
              data: section.values,
            };

            switch (section.type) {
              case "instructors":
                return <Instructor key={key} {...common_props} />;
              case "features":
                return <Feature key={key} {...common_props} />;
              case "pointers":
                return <Pointers key={key} {...common_props} />;
              case "feature_explanations":
                return <FeatureExplanations key={key} {...common_props} />;
              case "about":
                return <About key={key} {...common_props} />;
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

async function getProducts(locale: Locale): Promise<TProduct> {
  try {
    const data = await fetchAPI(
      `${process.env.BASE_URL}/products/ielts-course?lang=${locale}`
    );

    if (data.code === 200 && data.data) {
      return data.data as TProduct;
    }
    return {} as TProduct;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("failed to load products:", error);
    }
    return {} as TProduct;
  }
}
