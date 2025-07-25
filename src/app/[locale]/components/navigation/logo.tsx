import Image from "next/image";
import React from "react";

function Logo({ className }: { className?: string }) {
  return (
    <Image
      decoding="async"
      fetchPriority="high"
      className={className}
      src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
      alt="10mslogo"
      width={100}
      height={27}
    />
  );
}

export default Logo;
