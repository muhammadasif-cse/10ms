"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { TMedium, TProduct } from "@/app/types/product";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { cn } from "@/lib/utils";
import Checkout from "./checkout";
import CourseFeature from "./course-feature";

const getImageSrc = (item: TMedium) =>
  item.thumbnail_url && item.thumbnail_url !== ""
    ? item.thumbnail_url
    : item.resource_value;

const ProductCard = ({
  data,
  className,
}: {
  data: TProduct;
  className?: string;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [count, setCount] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const iframeRefs = useRef<Record<number, HTMLIFrameElement | null>>({});

  const filteredMedia = data.media.filter(
    (item) => item.name === "preview_gallery"
  );

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex);
      Object.entries(iframeRefs.current).forEach(([key, iframe]) => {
        if (iframe && Number(key) !== newIndex) {
          iframe.contentWindow?.postMessage(
            JSON.stringify({ event: "command", func: "stopVideo" }),
            "*"
          );
        }
      });
    });
  }, [api]);

  const handleThumbClick = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const handlePlayClick = (index: number) => {
    if (playingIndex === index) return;
    setPlayingIndex(index);
  };

  const next_disabled =
    filteredMedia.length === 0 || current === filteredMedia.length - 1;

  const prev_disabled = filteredMedia.length === 0 || current === 0;

  return (
    <div className={`bg-white p-2 border border-gray-300 ${className}`}>
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {filteredMedia.map((item: TMedium, index) => (
            <CarouselItem key={index}>
              <div className="aspect-video relative">
                {item.resource_type === "video" &&
                item.thumbnail_url &&
                playingIndex !== index ? (
                  <>
                    <Image
                      className="w-full h-full object-cover brightness-[70%]"
                      src={item.thumbnail_url}
                      alt={item.name}
                      width={867}
                      height={480}
                    />
                    <span
                      className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                      onClick={() => handlePlayClick(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="56"
                        height="56"
                        fill="none"
                        viewBox="0 0 56 56"
                      >
                        <circle
                          cx="28"
                          cy="28"
                          r="28"
                          fill="#fff"
                          fillOpacity="0.5"
                        ></circle>
                        <circle
                          cx="27.999"
                          cy="28"
                          r="25.415"
                          fill="#fff"
                        ></circle>
                        <path
                          fill="#1CAB55"
                          d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                        ></path>
                      </svg>
                    </span>
                  </>
                ) : item.resource_type === "video" && playingIndex === index ? (
                  <iframe
                    ref={(el) => {
                      iframeRefs.current[index] = el;
                    }}
                    src={`https://www.youtube.com/embed/${item.resource_value}?autoplay=1&enablejsapi=1`}
                    title={item.name}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <Image
                    className="w-full h-full object-cover brightness-[70%]"
                    src={getImageSrc(item)}
                    alt={item.name}
                    width={867}
                    height={480}
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={`absolute left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] ${
            prev_disabled ? "cursor-default opacity-75" : "cursor-pointer"
          }`}
          disabled={prev_disabled}
        />
        <CarouselNext
          className={`absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] ${
            next_disabled ? "cursor-default opacity-75" : "cursor-pointer"
          }`}
          disabled={next_disabled}
        />
      </Carousel>

      <Carousel className="mt-3">
        <CarouselContent className="flex gap-2">
          {filteredMedia.map((item: TMedium, index) => (
            <CarouselItem
              key={index}
              className={cn("basis-1/5 cursor-pointer")}
              onClick={() => handleThumbClick(index)}
            >
              <div
                className={`w-[72px] h-10 relative ${
                  current === index
                    ? "border-2 border-primary"
                    : "border-2 border-white"
                } rounded-md`}
              >
                <Image
                  src={getImageSrc(item)}
                  alt={item.name}
                  fill
                  className="object-cover brightness-[70%] rounded-[4px]"
                />
                {item.resource_type === "video" && (
                  <span className="absolute inset-0 flex items-center justify-center rounded-md">
                    <Image
                      alt="Play The Video"
                      fetchPriority="high"
                      width="20"
                      height="20"
                      decoding="async"
                      data-nimg="1"
                      src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                    />
                  </span>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div>
        <Checkout data={data.cta_text.name ?? ""} />
        <CourseFeature checklist={data.checklist} />
      </div>
    </div>
  );
};

export default ProductCard;
