import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "./CartContext.jsx";


const products = {
  "cap-black": {
    name: "Club MP Cap",
    price: "£30.00",
    color: "Black / One Size",
    image: "/31073984-9D9C-4B0D-A569-D40D06BF6207.JPEG",
    description: "Premium Club MP cap with embroidered branding.",
  },
  "cap-blue": {
    name: "Club MP Cap",
    price: "£30.00",
    color: "Blue / One Size",
    image: "/MMP/caps.jpeg",
    description: "Premium Club MP cap with embroidered branding.",
  },
  "cap-pink": {
    name: "Club MP Cap",
    price: "£30.00",
    color: "Pink / One Size",
    image: "/MMP/IMG_7313.JPEG",
    description: "Premium Club MP cap with embroidered branding.",
  },
  "cap-grey": {
    name: "Club MP Cap",
    price: "£30.00",
    color: "Grey / One Size",
    image: "/MMP/WhatsApp Image 2026-05-25 at 11.39.33.jpeg",
    description: "Premium Club MP cap with embroidered branding.",
  },
  "tracksuit-grey-1": {
  name: "Club MP Tracksuit",
  price: "£95.00",
  color: "Grey / Relaxed Fit",
  image: "/MMP/track1.png",
  description: "Premium oversized Club MP tracksuit.",
  sizes: ["S", "M", "L", "XL"],
},
"tracksuit-grey-2": {
  name: "Club MP Tracksuit",
  price: "£95.00",
  color: "Grey / Relaxed Fit",
  image: "/MMP/track2.png",
  description: "Premium oversized Club MP tracksuit.",
  sizes: ["S", "M", "L", "XL"],
},
"tracksuit-grey-3": {
  name: "Club MP Tracksuit",
  price: "£95.00",
  color: "Grey / Relaxed Fit",
  image: "/MMP/track3.png",
  description: "Premium oversized Club MP tracksuit.",
  sizes: ["S", "M", "L", "XL"],
},
"tracksuit-grey-4": {
  name: "Club MP Tracksuit",
  price: "£95.00",
  color: "Grey / Relaxed Fit",
  image: "/MMP/track4.png",
  description: "Premium oversized Club MP tracksuit.",
  sizes: ["S", "M", "L", "XL"],
},
"tracksuit-black-1": {
  name: "Club MP Tracksuit",
  price: "£95.00",
  color: "Black / Relaxed Fit",
  image: "/MMP/btrack1.png",
  description: "Premium oversized Club MP tracksuit.",
  sizes: ["S", "M", "L", "XL"],
},
"tracksuit-black-2": {
  name: "Club MP Tracksuit",
  price: "£95.00",
  color: "Black / Relaxed Fit",
  image: "/MMP/btrack2.png",
  description: "Premium oversized Club MP tracksuit.",
  sizes: ["S", "M", "L", "XL"],
},
"tracksuit-black-3": {
  name: "Club MP Tracksuit",
  price: "£95.00",
  color: "Black / Relaxed Fit",
  image: "/MMP/btrack3.png",
  description: "Premium oversized Club MP tracksuit.",
  sizes: ["S", "M", "L", "XL"],
},
"tracksuit-black-4": {
  name: "Club MP Tracksuit",
  price: "£95.00",
  color: "Black / Relaxed Fit",
  image: "/MMP/btrack5.png",
  description: "Premium oversized Club MP tracksuit.",
  sizes: ["S", "M", "L", "XL"],
},
"hoodie-grey-1": {
  name: "Club MP Hoodie",
  price: "£55.00",
  color: "Grey / Oversized Fit",
  image: "/MMP/hoodie1.png",
  description: "Premium oversized Club MP hoodie.",
  sizes: ["S", "M", "L", "XL"],
},
"hoodie-grey-2": {
  name: "Club MP Hoodie",
  price: "£55.00",
  color: "Grey / Oversized Fit",
  image: "/MMP/hoodie2.png",
  description: "Premium oversized Club MP hoodie.",
  sizes: ["S", "M", "L", "XL"],
},
"hoodie-grey-3": {
  name: "Club MP Hoodie",
  price: "£55.00",
  color: "Grey / Oversized Fit",
  image: "/MMP/hoodie3.png",
  description: "Premium oversized Club MP hoodie.",
  sizes: ["S", "M", "L", "XL"],
},
"hoodie-black-1": {
  name: "Club MP Hoodie",
  price: "£55.00",
  color: "Black / Oversized Fit",
  image: "/MMP/bhoodie1.png",
  description: "Premium oversized Club MP hoodie.",
  sizes: ["S", "M", "L", "XL"],
},
"hoodie-black-2": {
  name: "Club MP Hoodie",
  price: "£55.00",
  color: "Black / Oversized Fit",
  image: "/MMP/bhoodie2.png",
  description: "Premium oversized Club MP hoodie.",
  sizes: ["S", "M", "L", "XL"],
},
"hoodie-black-3": {
  name: "Club MP Hoodie",
  price: "£55.00",
  color: "Black / Oversized Fit",
  image: "/MMP/bhoodie3.png",
  description: "Premium oversized Club MP hoodie.",
  sizes: ["S", "M", "L", "XL"],
},
"tshirt-white-1": {
  name: "Club MP T-Shirt",
  price: "£20.00",
  color: "White / Classic Fit",
  image: "/MMP/shirts2.jpeg",
  description: "Premium Club MP T-Shirt.",
  sizes: ["S", "M", "L", "XL"],
},
"tshirt-black-1": {
  name: "Club MP T-Shirt",
  price: "£20.00",
  color: "Black / Classic Fit",
  image: "/MMP/shirt.jpeg",
  description: "Premium Club MP T-Shirt.",
  sizes: ["S", "M", "L", "XL"],
},
"joggers-grey-1": {
  name: "Club MP Joggers",
  price: "£45.00",
  color: "Grey / Relaxed Fit",
  image: "/MMP/joggers.png",
  description: "Premium relaxed-fit Club MP joggers.",
  sizes: ["S", "M", "L", "XL"],
},
"joggers-grey-2": {
  name: "Club MP Graphic Joggers",
  price: "£45.00",
  color: "Grey / Relaxed Fit",
  image: "/MMP/joggersg.png",
  description: "Premium graphic Club MP joggers.",
  sizes: ["S", "M", "L", "XL"],
},
"joggers-grey-3": {
  name: "Club MP Graphic Joggers",
  price: "£45.00",
  color: "Grey / Relaxed Fit",
  image: "/MMP/joggersg2.png",
  description: "Premium graphic Club MP joggers.",
  sizes: ["S", "M", "L", "XL"],
},
"joggers-black-1": {
  name: "Club MP Joggers",
  price: "£45.00",
  color: "Black / Relaxed Fit",
  image: "/MMP/bjoggers.png",
  description: "Premium relaxed-fit Club MP joggers.",
  sizes: ["S", "M", "L", "XL"],
},
"joggers-black-2": {
  name: "Club MP Graphic Joggers",
  price: "£50.00",
  color: "Black / Relaxed Fit",
  image: "/MMP/bjoggers2.png",
  description: "Premium graphic Club MP joggers.",
  sizes: ["S", "M", "L", "XL"],
},
"joggers-black-3": {
  name: "Club MP Joggers",
  price: "£50.00",
  color: "Washed Black / Relaxed Fit",
  image: "/MMP/bjoggers3.png",
  description: "Premium washed-black Club MP joggers.",
  sizes: ["S", "M", "L", "XL"],
},
"beanie-black-1": {
  name: "Club MP Beanie",
  price: "£25.00",
  color: "Black / One Size",
  image: "/MMP/IMG_1826.JPEG",
  description: "Premium Club MP beanie.",
},
"beanie-black-2": {
  name: "Club MP Beanie",
  price: "£40.00",
  color: "Black / One Size",
  image: "/MMP/beanie.jpeg",
  description: "Premium Club MP beanie.",
},
"beanie-black-3": {
  name: "Club MP Beanie",
  price: "£45.00",
  color: "Black / One Size",
  image: "/MMP/WhatsApp Image 2026-05-25 at 11.39.33 (1).jpeg",
  description: "Premium Club MP beanie.",
},
"wristband-black-1": {
  name: "Club MP Wristband",
  price: "£35.00",
  color: "Black / Blue / White",
  image: "/MMP/wristbandbest.jpeg",
  description: "Premium Club MP wristband.",
},
};

export default function ProductPage() {
  const { id } = useParams();
  const product = products[id];
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="p-10">Product not found.</div>;
  }

  return (
  <motion.main
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="min-h-screen bg-white text-black px-8 md:px-16 py-10"
  >
    {showToast && (
      <div className="fixed top-6 right-6 z-50 bg-black text-white px-6 py-4 rounded-lg shadow-xl text-sm font-bold uppercase tracking-widest">
        ✓ Added To Cart
      </div>
    )}

    <Link to="/" className="text-xs font-bold uppercase tracking-widest">
      ← Back
    </Link>

      <div className="grid md:grid-cols-2 gap-12 mt-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[320px] md:h-[520px] rounded-lg border border-neutral-200 object-contain bg-white"
        />

        <div>
          <h1 className="text-3xl md:text-6xl font-black uppercase">
            {product.name}
          </h1>

          <p className="mt-4 text-neutral-600">{product.color}</p>
          <p className="mt-6 text-2xl font-bold">{product.price}</p>

          <p className="mt-8 text-sm leading-relaxed">
            {product.description}
          </p>
          {product.sizes && (
  <div className="mt-8">
    <p className="text-xs font-bold uppercase tracking-widest mb-3">
      Size
    </p>

    <div className="flex gap-2 flex-wrap">
      {product.sizes.map((size) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className={`border px-5 py-3 text-xs font-bold uppercase ${
            selectedSize === size
              ? "bg-black text-white border-black"
              : "border-black"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  </div>
)}

          <button
  onClick={() => {
    if (product.sizes && !selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({
  id: product.sizes ? `${id}-${selectedSize}` : id,
  ...product,
  selectedSize,
});

setShowToast(true);

setTimeout(() => {
  setShowToast(false);
}, 2000);
  }}
  className="mt-10 w-full bg-black text-white py-5 text-xs font-bold uppercase tracking-widest"
>
  Add To Cart
</button>
        </div>
      </div>
    </motion.main>
  );
}