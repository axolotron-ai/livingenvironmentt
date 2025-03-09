import React from "react";
import TypesOfWaterproofingBox from "./TypesOfWaterproofingBox";

function TypesOfWaterproofing() {
  return (
    <div className="py-8 mx-6 md:py-20 md:px-20 border-b md:mx-20">
      <h1 className="font-bold text-2xl pb-6 md:pb-20 text-center">
        Types of <span className="text-[#FC9713]">Waterproofing</span>
      </h1>
      <div className="md:flex md:mx-48 gap-x-8 ml-6">
        <TypesOfWaterproofingBox
          icon="/tow-01.png"
          heading="1. App Membrane"
          description="Best for: Roofs, terraces.."
          paragraph="Description: APP (Atactic Polypropylene) membrane waterproofing is a heat-applied solution that creates a durable, flexible, and water-resistant layer. It provides excellent protection against water seepage, cracks, and harsh weather conditions, making it ideal for long-term waterproofing."
          bestfor="Best for: Roofs, terraces, basements, and foundations"
        />
        <TypesOfWaterproofingBox
          icon="/tow-02.png"
          heading="2. HDPE/SBS Membrane"
          description="Best for: Underground stru.."
          paragraph="Description: HDPE (High-Density Polyethylene) / SBS (Styrene-Butadiene-Styrene) membrane waterproofing is a high-performance solution that forms a strong, flexible, and water-resistant barrier. It offers superior protection against water infiltration making it an ideal choice for long-lasting waterproofing."
          bestfor="Best for: Roofs, terraces, basements, and underground structures."
        />
        <TypesOfWaterproofingBox
          icon="/tow-03.png"
          heading="3. Brick Bat Coba"
          description="Best for: Roofs, terraces.."
          paragraph="Description: Brick Bat Coba waterproofing is a cement-based solution that creates a strong, insulated, and water-resistant layer. It provides effective protection against water leakage, surface cracks, and temperature variations, making it ideal for long-term waterproofing."
          bestfor="Best for:  Roofs, terraces, sunshades, and waterlogged areas."
        />
      </div>
    </div>
  );
}

export default TypesOfWaterproofing;
