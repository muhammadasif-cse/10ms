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
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">{title}</h2>

        <ul className="space-y-4">
          {data.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <CheckCircle2
                className="mt-1 text-green-600 min-w-[20px]"
                size={20}
                strokeWidth={2}
              />
              <p className="text-sm text-gray-700 leading-relaxed">
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
