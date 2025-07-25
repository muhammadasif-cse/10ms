import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <Image
      alt="banner image"
      decoding="async"
      className="hidden w-auto sm:block"
      src="https://cdn.10minuteschool.com/images/dasktop_banner_1753270611489.png?w=1800?w=1800&h=150"
      loading="lazy"
      layout="responsive"
      width={1800}
      height={150}
    />
  );
};

export default Banner;
