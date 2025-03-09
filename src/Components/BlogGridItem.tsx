import Image from "next/image";
import React from "react";

function BlogGridItem({
  icon,
  heading,
  description,
}: {
  icon: string;
  heading: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center h-[400px] w-fit mb-8 md:mb-0">
      <Image
        src={icon}
        width={400}
        height={400}
        alt="blog image"
        className="h-2/3 rounded-md"
      />
      <div className="h-1/2 text-left mt-4">
        <h1 className="text-lg font-bold mb-4">{heading}</h1>
              <p className="text-sm">{description}</p>
              <button className="border w-full mt-4 py-2 rounded-md">View Article</button>
      </div>
    </div>
  );
}

export default BlogGridItem;
