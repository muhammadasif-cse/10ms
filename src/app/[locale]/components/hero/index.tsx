import React from "react";
import Banner from "./banner";
import Image from "next/image";
import { TProduct } from "@/app/types/product";
import ProductCard from "../ui/product-card/card";

const Hero = ({ data }: { data: TProduct }) => {
  return (
    <section id="hero">
      <Banner />
      <div className="hero-background w-full">
        <section className="container mx-auto relative">
          <section className="flex flex-col gap-4 md:flex-row md:gap-12 py-10">
            <div className="space-y-2 w-full md:w-[calc(100%-348px)] lg:w-[calc(100%-448px)] max-w-full">
              <h1 className="text-white text-[21px] font-semibold md:text-4xl">
                {data.title}
              </h1>
              <button className="flex flex-row flex-wrap gap-2 text-white">
                <span className="inline-block">
                  <Image
                    alt="Rating"
                    width={130}
                    height={100}
                    loading="lazy"
                    decoding="async"
                    className="md:w-[130px] w-[100px]"
                    src="https://cdn.10minuteschool.com/images/Dev_Handoff_Q1_24_Frame_2_1725444418666.png"
                  />
                </span>
                <span className="inline-block text-sm md:text-base">
                  (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                </span>
              </button>
              <article
                className="whitespace-pre-wrap !text-[#A3A3A3] text-[14px] md:text-[18px] font-normal"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
            <div className="lg:max-w-[400px] md:max-w-80 sm:w-full md:absolute right-0 top-14 z-10">
              <ProductCard className="md:bg-white bg-transparent p-2 md:border md:border-gray-300" data={data} />
            </div>
          </section>
        </section>
      </div>
    </section>
  );
};

export default Hero;
