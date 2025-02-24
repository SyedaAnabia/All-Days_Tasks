
// "use client";

// import { useState } from "react"
// import { CartProvider , useCart} from '@/components/CartContext';
// import Link from "next/link";

// const AddToCartButton = ({ product }: { product: any }) => {
//   const { addToCart } = useCart();
//   const [showNotification, setShowNotification] = useState(false);

//   // const handleAddToCart = () => {
//   //   addToCart({
//   //     id: product._id,
//   //     name: product.title,
//   //     price: product.price.toFixed(2),
//   //     image: product.image,
//   //     quantity: 1,
//   //   });




//   const handleAddToCart = () => {
//     addToCart({
//       id: product._id,
//       name: product.title,
//       price: parseFloat(product.price.toFixed(2)), // Ensure price is a number
//       image: product.imagel,
//       quantity: 1,
//     });
  
//     setShowNotification(true);
//     setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
//     setShowNotification(true);
//     setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
//   };

//   return (
//     <div className="relative">
//       {/* Add to Cart Button */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
//       >
//         Add to Cart
//       </button>

//       {/* Notification */}
//       {showNotification && (
//         <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4">
//           <span>✅ Product added to cart</span>
//           <Link href="/cart" className="underline font-semibold hover:text-gray-200">
//             View Cart
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddToCartButton;
















// "use client";

// import { useState } from "react";
// import { useCart } from '@/components/CartContext';
// import Link from "next/link";

// const AddToCartButton = ({ product }: { product:any }) => {
//   const { addToCart } = useCart();
//   const [showNotification, setShowNotification] = useState(false);

//   const handleAddToCart = () => {
//     addToCart({
//       id: product._id,
//       name: product.title,
//       price: parseFloat(product.price.toFixed(2)), // Ensure price is a number
//       image: product.image,
//       quantity: 1,
//       heading: product.heading,
//       selectedColor: product.selectedColor,
//       selectedSize: product.selectedSize
//     });

//     setShowNotification(true);
//     setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
//   };

//   return (
//     <div className="relative">
//       {/* Add to Cart Button */}
//       <button
//         onClick={handleAddToCart}
//         className="w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
//       >
//         Add to Cart
//       </button>

//       {/* Notification */}
//       {showNotification && (
//         <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4">
//           <span>✅
          
          
//            Product added to cart</span>
//           <Link href="/cart" className="underline font-semibold hover:text-gray-200">
//             View Cart
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddToCartButton;






"use client";

import { useState } from "react";
import { useCart } from "@/components/Cartcontext";
import Link from "next/link";

// Define Product type
type Product = {
  _id: string;
  title: string;
price: number;
  Image: string;
  heading: string;
  selectedColor?: string;
  selectedSize?: string;
};

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product._id,
      name: product.title,
      price: parseFloat(product.price.toFixed(2)), // Ensure price is a number
      image: product.Image,
      quantity: 1,
      heading: product.heading,
      selectedColor: product.selectedColor?? "",
      selectedSize: product.selectedSize ?? "",
     
    });

    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000); // Hide after 3 seconds
  };

  return (
    <div className="relative">
      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
      >
        Add to Cart
      </button>

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-4">
          <span>✅ Product added to cart</span>
          <Link href="/cart" className="underline font-semibold hover:text-gray-200">
            View Cart
          </Link>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
