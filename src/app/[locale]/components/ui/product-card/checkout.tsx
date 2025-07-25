import { useTranslations } from "next-intl";
import React from "react";

const Checkout = ({ data }: { data: string }) => {
  const t = useTranslations("products");

  return (
    <div className="flex flex-col w-full py-6">
      <div className="flex items-center justify-between md:flex-col md:items-start">
        <div className="md:mb-4">
          <div className="inline-block text-2xl font-semibold">
            {t("price")}
          </div>
          <span className="infline-flex">
            <del className="ml-2 text-base font-normal md:text-xl">
              {t("original_price")}
            </del>
            <div className="card inline-block">
              <p className="card-price">{t("discounted_price")}</p>
            </div>
          </span>
        </div>
      </div>
      <button className="cursor-pointer transition-all bg-[#1CAB55] text-white px-6 pt-2.5 pb-1 rounded-md border-[#15803d] border-b-[4px] hover:brightness-110 hover:bg-[#15803d]">
        {data}
      </button>
    </div>
  );
};

export default Checkout;
