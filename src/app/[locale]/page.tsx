import Hero from "./components/hero/hero";
import { TProduct } from "../types/product";
import { fetchAPI } from "@/lib/fetch-api";
import { Locale } from "next-intl";
import Instructor from "./components/sections/instructor";

type Props = {
  params: Promise<{ locale: Locale }>;
};
export default async function IndexPage({ params }: Props) {
  const locale = (await params).locale;
  const products = await getProducts(locale);
  if (!products || Object.keys(products).length === 0) {
    return <div className="text-center p-4">No products available</div>;
  }
  if (!products.sections || products.sections.length === 0) {
    return <div className="text-center p-4">No sections available</div>;
  }
  const instructorSection = products.sections.find(
    (section) => section.type === "instructors"
  );

  if (!instructorSection || !instructorSection.values?.length) return null;

  return (
    <div>
      <Hero data={products} />
      <div className="flex-1 w-full mx-auto container">
        <div className=" md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <Instructor
            title={instructorSection.name || ""}
            data={instructorSection.values}
          />
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
      console.log("data.data", data.data);
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
