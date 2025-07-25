import React from "react";
import Image from "next/image";

type FeatureItem = {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
};

type Props = {
  title: string;
  data: FeatureItem[];
};

const Feature = ({ title, data }: Props) => {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">{title}</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-4 p-4 border border-gray-200 rounded-md bg-[#F9FAFB]"
            >
              <div className="w-12 h-12 shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
