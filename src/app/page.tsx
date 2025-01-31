//src\app\page.tsx

import BeautifulRoom from "@/components/BeautifulRoom";
import Browserange from "@/components/Browserange";
import Hero from "@/components/Hero";
// import OurProducts from "@/components/OurProducts";
import PhotoGallery from "@/components/PhotoGallery";
import Cartcontext from "@/components/Cartcontext";

export default async function Home() {  
  return (
    <>
 <Cartcontext>
   <Hero/>
   <Browserange/>
   <PhotoGallery/>
   <BeautifulRoom/>
   <PhotoGallery/>
 </Cartcontext>
    </>
  );
}
