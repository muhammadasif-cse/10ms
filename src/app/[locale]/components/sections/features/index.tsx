import React from "react";
import Image from "next/image";
import { TFeature } from "@/app/types/product";

type Props = {
  title: string;
  data: TFeature[];
};

const Feature = ({ title, data }: Props) => {
  return (
    <section className="pt-6 bg-white">
      <h2 className="my-4 text-xl font-semibold md:text-2xl">{title}</h2>

      <article className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
        {data.map((item) => (
          <div key={item.id} className="flex flex-row items-start gap-3 m-1">
            <div className="mb-4 mx-auto shrink-0">
              <Image
                src={item.icon}
                alt={item.title}
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col flex-1 gap-2">
              <h3 className="text-[18px] font-medium leading-[26px] text-white">
                {item.title}
              </h3>
              <p className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Feature;
