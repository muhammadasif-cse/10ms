import Hero from "./components/sections/hero/hero";
import { TProduct } from "../types/product";
import { fetchAPI } from "@/lib/fetch-api";
import { Locale } from "next-intl";

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
