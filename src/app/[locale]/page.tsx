import Hero from "./components/sections/hero/hero";
import { TProduct } from "../types/product";
import { fetchAPI } from "@/lib/fetch-api";

const DEFAULT_PRODUCTS: TProduct[] = [];

export default async function IndexPage() {
  const products = await getProducts();
  console.log("products", products);
  
  return (
    <div>
      <Hero />
    </div>
  );
}

async function getProducts(): Promise<TProduct[]> {
  try {
    const data = await fetchAPI(
      `${process.env.BASE_URL}/products/ielts-course`
    );
    if (data.code === 200) {
      console.log("data.data", data.data);
      return data.data as TProduct[];
    }
    return DEFAULT_PRODUCTS;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to load products:", error);
    }
    return DEFAULT_PRODUCTS;
  }
}
