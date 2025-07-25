import { TProduct } from "../types/product";
import { fetchAPI } from "@/lib/fetch-api";
import { Locale } from "next-intl";
import Hero from "./components/hero";
import Instructor from "./components/sections/instructor";
import Feature from "./components/sections/features";
import Pointers from "./components/sections/pointers";
import FeatureExplanations from "./components/sections/feature-explanations";
import About from "./components/sections/about";

type Props = {
  params: Promise<{ locale: Locale }>;
};
export default async function IndexPage({ params }: Props) {
  const locale = (await params).locale;
  const products = await getProducts(locale);
  if (!products || Object.keys(products).length === 0) {
    return <div className="text-center p-4">No products available</div>;
  }

  return (
    <div>
      <Hero data={products} />
      <div className="flex-1 w-full mx-auto container">
        <div className="space-y-2 w-full md:w-[calc(100%-348px)] lg:w-[calc(100%-448px)] max-w-full">
          {products.sections.map((section) => {
            if (section.type === "instructors") {
              return (
                <Instructor
                  key={section.name}
                  title={section.name}
                  data={section.values}
                />
              );
            }
            return null;
          })}
          {products.sections.map((section) => {
            if (section.type === "features") {
              return (
                <Feature
                  key={section.name}
                  title={section.name}
                  data={section.values}
                />
              );
            }
            return null;
          })}
          {products.sections.map((section) => {
            if (section.type === "pointers") {
              return (
                <Pointers
                  key={section.name}
                  title={section.name}
                  data={section.values}
                />
              );
            }
            return null;
          })}
          {products.sections.map((section) => {
            if (section.type === "feature_explanations") {
              return (
                <FeatureExplanations
                  key={section.name}
                  title={section.name}
                  data={section.values}
                />
              );
            }
            return null;
          })}
          {products.sections.map((section) => {
            if (section.type === "about") {
              return (
                <About
                  key={section.name}
                  title={section.name}
                  data={section.values}
                />
              );
            }
            return null;
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
    if (data.code === 200) {
      return data.data as TProduct;
    }
    return {} as TProduct;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to load products:", error);
    }
    return {} as TProduct;
  }
}
