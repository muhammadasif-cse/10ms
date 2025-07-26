import React from "react";
import { CheckCircle2 } from "lucide-react";
import { TPointer } from "@/app/types/product";

type Props = {
  title: string;
  data: TPointer[];
};

const Pointers = ({ title, data }: Props) => {
  return (
    <section className="pt-6 bg-white">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>

      <div className="p-2 md:p-6 border border-gray-200 rounded-md">
        <ul className="grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4">
          {data.map((item) => (
            <li key={item.id} className="flex items-start gap-2 mb-2">
              <CheckCircle2
                className="mt-1 text-green-600 min-w-[20px]"
                size={20}
                strokeWidth={2}
              />
              <p className="flex-1 text-secondary leading-relaxed">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Pointers;
