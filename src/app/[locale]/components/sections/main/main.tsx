import React from "react";
import InstructorCard from "./instructor-card";
import { TProduct } from "@/app/types/product";

const Main = ({ data }: { data: TProduct }) => {
  const instructorSection = data.sections.find(
    (section) => section.type === "instructors"
  );

  if (!instructorSection || !instructorSection.values?.length) return null;

  return (
    <div className="flex-1 w-full mx-auto container">
      <div className=" md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]"> 
        <InstructorCard
          title={instructorSection.name || ""}
          data={instructorSection.values}
        />
      </div>
    </div>
  );
};

export default Main;
