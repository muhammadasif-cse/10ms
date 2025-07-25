"use client";

import { TAbout } from "@/app/types/product";
import React from "react";

type Props = {
  title?: string;
  data: TAbout[];
};

const About = ({ title, data }: Props) => {
  return (
    <section className="pt-6 bg-white">
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
        <div className="rounded-lg md:border border-gray-200 md:px-4 py-2">
          {data.map((item) => (
            <details
              key={item.id}
              className="mb-0 border-b border-dashed border-gray-200 last:border-none group"
            >
              <summary className="py-4 cursor-pointer transition-all list-none flex items-center justify-between">
                <article
                  className="font-medium"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <svg
                  className="w-5 h-5 text-gray-600 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <article
                className="pb-4 text-secondary leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
