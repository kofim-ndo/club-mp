import React from "react";
import { useParams, Link } from "react-router-dom";

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
};

export default function ProductPage() {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return <div className="p-10">Product not found.</div>;
  }

  return (
    <main className="min-h-screen bg-white text-black px-8 md:px-16 py-10">
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

          <button className="mt-10 w-full bg-black text-white py-5 text-xs font-bold uppercase tracking-widest">
            Coming Soon
          </button>
        </div>
      </div>
    </main>
  );
}