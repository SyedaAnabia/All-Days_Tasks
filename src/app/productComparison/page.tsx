// //src\app\productComparison\page.tsx

// import React from "react";
// import Image from "next/image";

// export const dynamic = "force-dynamic";
// import { Button } from "@/components/ui/button";

// import Link from "next/link";
// import { client } from "@/sanity/lib/client";
// import PcSectionTwo from "@/components/PcSectionsTwo";
// import Shopbottombar from "@/components/Shpbottombar";


// export default async function ProductComparisonContent({ searchParams }: { searchParams: Promise<{ productName: string,productPrice: string,productImage: string,productDescription: string, }> }) {


//   const {productName,productPrice,productImage,productDescription}=await searchParams;

// interface BoxContent {
//   boxTitle: string;
//   field1: string;
//   field2: string;
//   field3: string;
//   field4: string;
//   field5: string;
//   field6: string;
//   field7: string;
//   field8: string;
//   field9: string;
//   field10: string;
//   field11: string;
//   field12: string;
//   field13: string;
//   field14: string;
//   field15: string;
//   field16: string;
//   field17: string;
//   field18: string;
// }


 
//   const res: BoxContent[] = await client.fetch(`
//   *[_type=='pC'][].box[].boxContent[]{
// 'boxTitle':boxTitle,
// 'field1':field1,
// 'field2':field2,
// 'field3':field3,
// 'field4':field4,
// 'field5':field5,
// 'field6':field6,
// 'field7':field7,
// 'field8':field8,
// 'field9':field9,
// 'field10':field10,
// 'field11':field11,
// 'field12':field12,
// 'field13':field13,
// 'field14':field14,
// 'field15':field15,
// 'field16':field16,
// 'field17':field17,
// 'field18':field18,
// }
//   `);

 
   
  

//   return (
//     <>
//       <div className="bg-[url('/blogMainImage.png')] bg-cover bg-center py-16 mb-12">
//         <div className="container text-center">
//           <div className="inline-block w-16 h-16 bg-[url('/logo1.png')] mb-4" />
//           <h1 className="text-3xl md:text-4xl font-medium mb-4 font-poppins">Product Comparison</h1>
//           <div className="flex items-center justify-center gap-2 text-sm">
//             <Link href="/" className="hover:underline">Home</Link>
//             <span>
//               <Image src="/rightA.png" width={20} height={20} alt="arrow" />
//             </span>
//             <span>Comparison</span>
//           </div>
//         </div>
//       </div>

//       <section className="m-auto pb-[112px]">
        
        
//         <PcSectionTwo  productName={productName} productPrice={productPrice} productImage={productImage} productDescription={productDescription}  />

//         <div className="mt-[42px] px-[16px] sm:px-[50px]">
          
//           {res.map((section:BoxContent, index:number) =>{
//             return(
// <div key={index} className="mt-[96px]">
//               <h3 className="text-[18px] sm:text-2xl font-medium">{section.boxTitle}</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 <div className="w-full border-r border-gray-300">
//                   <div className="font-medium mt-[28px] mb-[34px]">{section.field1}</div>
//                   <div className="font-medium mb-[34px]">{section.field2}</div>
//                   <div className="font-medium mb-[34px]">{section.field3}</div>
//                   <div className="font-medium mb-[34px]">{section.field4}</div>
//                   <div className="font-medium mb-[34px]">{section.field5}</div>
//                   <div className="font-medium mb-[34px]">{section.field6}</div>
//                 </div>

//                 <div className="w-full border-r border-gray-300">
//                   <div className="mb-[34px] mt-[28px]">{section.field7}</div>
//                   <div className="mb-[34px]">{section.field8}</div>
//                   <div className="mb-[34px]">{section.field9}</div>
//                   <div className="mb-[34px]">{section.field10}</div>
//                   <div className="mb-[34px]">{section.field11}</div>
//                   <div className="mb-[34px]">{section.field12}</div>
//                 </div>
//                 <div className="w-full border-r border-gray-300">
//                   <div className="mb-[34px] mt-[28px]">{section.field13}</div>
//                   <div className="mb-[34px]">{section.field14}</div>
//                   <div className="mb-[34px]">{section.field15}</div>
//                   <div className="mb-[34px]">{section.field16}</div>
//                   <div className="mb-[34px]">{section.field17}</div>
//                   <div className="mb-[34px]">{section.field18}</div>
//                 </div>
//               </div>
//             </div>

//           )})}
//         </div>

//         <div className="flex items-center justify-center mt-[53px] mb-[50px] gap-[24px] sm:gap-[108px] flex-wrap">
//           <div />
//           <Link href="/cart">
//             <Button className="exsm:hidden sm:block text-[16px] sm:text-[20px] leading-[30px] py-[12px] sm:py-[17px] px-[12px] sm:px-8 lg:px-12 w-[160px] sm:w-[215px] bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white h-16">
//               Add To Cart
//             </Button>
//           </Link>

//           <Link href="/cart">
//             <Button className="text-[16px] sm:text-[20px] leading-[30px] w-[160px] sm:w-[215px] py-[12px] sm:py-[17px] px-[12px] sm:px-8 lg:px-12 bg-[#B88E2F] hover:bg-[#B88E2F]/90 text-white h-16">
//               Add To Cart
//             </Button>
//           </Link>
//         </div>

//         <Shopbottombar />
//       </section>
//     </>
//   );
// }










"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { IoMdStarOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io"; // Optional, if you want to use an arrow icon
import Hero from "@/components/common/Hero";
import Shipping from "@/components/shipping";

const Page = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);


  return (
    <>
      {/* Top Section */}
<Hero title="Product Comparison" />

{/* Combined Section */}
<div className="flex flex-wrap items-start justify-center md:justify-between mt-8 px-4 md:px-16 relative">
  {/* Text Section */}
  <div className="flex flex-col mb-6 sm:mb-0 text-center md:text-left">
    <h1 className="text-[24px] sm:text-[28px] font-semibold leading-tight">
      Go to Product <br /> page for more <br />Products
    </h1>
    <span className="text-[#727272] mt-4 sm:mt-6 text-[18px] sm:text-[20px]">
      <button className="underline text-gray-400">View More</button>
    </span>
  </div>

  {/* Product Cards */}
  <div className="flex flex-wrap gap-8 justify-center md:justify-start">
    {/* Product Card 1 */}
    <div className="flex flex-col gap-2 items-center w-[90%] sm:w-[260px]">
      <Image src="/images/PC1.png" alt="Asgaard Sofa" width={250} height={177} className="mt-5 object-cover" />
      <h1 className="text-[20px] sm:text-[24px] font-semibold text-center">Asgaard Sofa</h1>
      <span className="text-center">Rs. 250,000.00</span>
      <div className="flex items-center gap-3 mt-2 justify-center">
        <span>4.7</span>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <IoMdStarOutline key={i} className="text-yellow-500 text-xl" aria-hidden="true" />
          ))}
        </div>
        <div className="border-l border-[#727272] h-[30px]"></div>
        <span className="text-[#727272]">204 Reviews</span>
      </div>
    </div>

    {/* Product Card 2 */}
    <div className="flex flex-col gap-2 items-center w-[90%] sm:w-[260px]">
      <Image src="/images/PC2.png" alt="Asgaard Sofa" width={260} height={177} className="h-[177px] object-cover" />
      <h1 className="text-[20px] sm:text-[24px] font-semibold text-center">Asgaard Sofa</h1>
      <span className="text-center">Rs. 250,000.00</span>
      <div className="flex items-center gap-3 mt-2 justify-center">
        <span>4.7</span>
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <IoMdStarOutline key={i} className="text-yellow-500 text-xl" aria-hidden="true" />
          ))}
        </div>
        <div className="border-l border-[#727272] h-[30px]"></div>
        <span className="text-[#727272]">204 Reviews</span>
      </div>
    </div>
  </div>

  {/* Add Product Section */}
  <div className="flex flex-col w-full sm:w-1/3 mt-8 sm:mt-0">
    <h1 className="text-[20px] sm:text-[24px] font-semibold text-center sm:text-left">Add A Product</h1>
    <div className="relative mt-4 sm:mt-6">
      <button
        className="flex items-center justify-between w-full sm:w-[242px] h-[39px] text-white bg-[#B88E2F] px-4 rounded-md"
        onClick={() => setDropdown(!dropdown)}
      >
        Choose a Product
        <span className="ml-2">
          <IoIosArrowDown />
        </span>
      </button>
      <ul
        className={`absolute ${
          dropdown ? "block" : "hidden"
        } bg-white border border-gray-300 rounded-md w-full sm:w-[242px] mt-2 z-10`}
      >
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 1</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 2</li>
        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Product 3</li>
      </ul>
    </div>
  </div>
</div>


      {/* Divider */}
<div className="border-b border-[#E8E8E8] w-full mt-16"></div>

{/* Specifications Section */}
<div className="flex flex-wrap items-start justify-center md:justify-between mt-14 px-4 md:px-16">
  {/* General Details */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3 mb-6 sm:mb-0">
    <h1 className="text-[24px] sm:text-[28px] font-semibold">General</h1>
    <h4>Sales Package</h4>
    <h4>Model Number</h4>
    <h4>Secondary Material</h4>
    <h4>Configuration</h4>
    <h4>Upholstery Material</h4>
    <h4>Upholstery Color</h4>
  </div>

  {/* Product Info */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3">
    <h4>1 sectional sofa</h4>
    <h4>TFCBLIGRBL6SRHS</h4>
    <h4>Solid Wood</h4>
    <h4>L-shaped</h4>
    <h4>Fabric + Cotton</h4>
    <h4>Bright Grey & Lion</h4>
  </div>

  {/* Product Info for Second Item */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3">
    <h4>1 Three Seater, 2 Single Seater</h4>
    <h4>DTUBLIGRBL568</h4>
    <h4>Solid Wood</h4>
    <h4>L-shaped</h4>
    <h4>Fabric + Cotton</h4>
    <h4>Bright Grey & Lion</h4>
  </div>
</div>

{/* Product Details */}
<div className="flex flex-wrap items-start justify-center md:justify-between mt-14 px-4 md:px-16">
  {/* Labels */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3 mb-6 sm:mb-0">
    <h1 className="text-[24px] sm:text-[28px] font-semibold">Product</h1>
    <h4>Filling Material</h4>
    <h4>Finish Type</h4>
    <h4>Adjustable Headrest</h4>
    <h4>Maximum Load Capacity</h4>
    <h4>Origin of Manufacture</h4>
  </div>

  {/* Product Info Column 1 */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3">
    <h4>Foam</h4>
    <h4>Bright Grey & Lion</h4>
    <h4>No</h4>
    <h4>280 KG</h4>
    <h4>India</h4>
  </div>

  {/* Product Info Column 2 */}
  <div className="flex flex-col gap-6 text-[18px] sm:text-[20px] w-full sm:w-1/3">
    <h4>Matte</h4>
    <h4>Bright Grey & Lion</h4>
    <h4>Yes</h4>
    <h4>300 KG</h4>
    <h4>India</h4>
  </div>
</div>

{/* Warranty Details */}
<div className="flex flex-wrap items-start justify-center md:justify-between mt-14 px-4 md:px-16">
  {/* Column 1 - Warranty Labels */}
  <div className="flex flex-col gap-6 w-full sm:w-1/3 mb-6 sm:mb-0">
    <h1 className="text-[24px] sm:text-[28px] font-semibold">Warranty</h1>
    <h4>Warranty Summary</h4>
    <h4>Warranty Service Type</h4>
    <h4>Covered in Warranty</h4>
    <h4>Not Covered in Warranty</h4>
    <h4>Domestic Warranty</h4>
  </div>

  {/* Column 2 - Warranty Details for Product 1 */}
  <div className="flex flex-col gap-6 w-full sm:w-1/3">
    <h4>1 Year Manufacturing Warranty</h4>
    <h4>For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</h4>
    <h4>Warranty Against Manufacturing Defect</h4>
    <h4>
      The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear.
    </h4>
    <h4>1 Year</h4>
    <button className="w-[300px] h-[50px] bg-[#B88E2F] text-white mt-6 rounded-lg shadow-lg">Add To Cart</button>
  </div>

  {/* Column 3 - Warranty Details for Product 2 */}
  <div className="flex flex-col gap-6 w-full sm:w-1/3">
    <h4>1.2 Year Manufacturing Warranty</h4>
    <h4>For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</h4>
    <h4>Warranty of the product is limited to manufacturing defects only.</h4>
    <h4>
      The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use.
    </h4>
    <h4>3 Months</h4>
    <button className="w-[300px] h-[50px] bg-[#B88E2F] text-white mt-6 rounded-lg shadow-lg">Add To Cart</button>
  </div>
</div>

<Shipping />

    </>
  );
};

export default Page;

