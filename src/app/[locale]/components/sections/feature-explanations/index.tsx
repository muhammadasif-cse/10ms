import React from "react";
import Image from "next/image";
import { TFeatureExplanation } from "@/app/types/product";

type Props = {
  title: string;
  data: TFeatureExplanation[];
};

const FeatureExplanations = ({ title, data }: Props) => {
  return (
    <section className="pt-6 bg-white">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>

        <div className="flex flex-col border divide-y-2 divide-gray-200 border-gray-200 rounded-md p-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-start justify-between gap-5 py-6"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-[14px] md:text-[16px] font-medium leading-[30px] text-[#111827]">
                  {item.title}
                </h3>

                {item.checklist.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="15"
                      fill="none"
                      viewBox="0 0 19 15"
                      className="mt-1 shrink-0"
                    >
                      <path
                        fill="#6294F8"
                        stroke="#6294F8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="0.893"
                        d="M18.168 1.508a.792.792 0 01-.006 1.111L6.645 14.143a.77.77 0 01-1.087.005L.77 9.433a.792.792 0 01-.015-1.11.77.77 0 011.098-.016l4.242 4.177L17.07 1.502a.77.77 0 011.098.006z"
                      />
                    </svg>
                    <p className="text-[14px] md:text-[16px] text-[#4B5563] leading-[24px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mx-auto md:mx-0 max-w-[350px]">
                {item.file_type === "image" && (
                  <Image
                    src={item.file_url}
                    alt={item.title}
                    width={250}
                    height={200}
                    className="w-full h-auto rounded-md object-contain"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureExplanations;
