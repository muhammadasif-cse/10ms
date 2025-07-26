import { TChecklist } from "@/app/types/product";
import Image from "next/image";
import React from "react";

const CourseFeature = ({ checklist }: { checklist: TChecklist[] }) => (
  <div>
    <h3 className="mb-4 text-xl font-semibold text-white/80 md:text-gray-800">
      এই কোর্সে যা থাকছে
    </h3>
    <div className="space-y-3 font-medium">
      {checklist.map((item) => (
        <div className="flex items-center gap-3" key={item.id}>
          <Image
            width={20}
            height={20}
            src={item.icon}
            alt="icon"
            className="w-5 h-5 md:bg-transparent bg-white rounded"
          />
          <span className="md:text-gray-700 text-white/80">{item.text}</span>
        </div>
      ))}
    </div>
  </div>
);

export default CourseFeature;
