import React, { useState } from "react";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Search, User, ShoppingBag, ArrowRight, ChevronDown } from "lucide-react";
export default function ClubMPHomepage() {
  const [shopOpen, setShopOpen] = useState(false);
  const placeholders = Array.from({ length: 4 });
  const socialPlaceholders = Array.from({ length: 5 });

  return (
    <main className="min-h-screen bg-white text-black font-sans tracking-wide">
{shopOpen && (
  <div className="fixed inset-0 z-50 flex">
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300"
      onClick={() => setShopOpen(false)}
    />

    <aside className="relative w-80 max-w-[85%] h-full bg-white border-r border-neutral-200 p-8 shadow-2xl animate-[slideIn_0.35s_ease-out]">
      <button
        onClick={() => setShopOpen(false)}
        className="absolute top-6 right-6 text-2xl font-bold"
      >
        ×
      </button>

      <h2 className="text-2xl font-black uppercase mb-10">Shop</h2>

  <nav className="flex flex-col gap-6 text-sm font-bold uppercase tracking-widest">
  <a href="#tracksuits" onClick={() => setShopOpen(false)}>Tracksuits</a>

  <a href="#hoodies" onClick={() => setShopOpen(false)}>Hoodies</a>

  <a href="#caps" onClick={() => setShopOpen(false)}>Caps</a>

  <a href="#tshirts" onClick={() => setShopOpen(false)}>T-Shirts</a>

  <a href="#accessories" onClick={() => setShopOpen(false)}>Accessories</a>
</nav>
    </aside>
  </div>
)}
      <div className="border-b border-neutral-200 py-3 text-center text-xs font-bold uppercase tracking-[0.35em]">
        Free UK shipping on orders over £100
      </div>

      <header className="px-8 md:px-12 py-8 flex items-center justify-between text-xs font-bold uppercase tracking-widest">
        <nav className="hidden md:flex items-center gap-9">
         <button
  onClick={() => setShopOpen(true)}
  className="flex items-center gap-1 hover:opacity-60"
>
  Shop <ChevronDown size={13} />
</button>
          <a href="#collections" className="hover:opacity-60">Collections</a>
          <a href="#about" className="hover:opacity-60">About</a>
          <a href="#contact" className="hover:opacity-60">Contact</a>
        </nav>

        <img
       src="/MMP/logobg.png"
  alt="Club MP"
  className="absolute left-1/2 -translate-x-1/2 top-[40px] h-20 w-auto object-contain"
/>

        <div className="flex items-center gap-6 ml-auto">
          <a href="#search" className="hidden md:flex items-center gap-2 hover:opacity-60">Search <Search size={18} /></a>
          <a href="#account" className="hidden md:flex items-center gap-2 hover:opacity-60">Account <User size={18} /></a>
          <a href="#cart" className="flex items-center gap-2 hover:opacity-60">Cart <ShoppingBag size={18} /><span className="grid place-items-center h-5 w-5 rounded-full bg-black text-white text-[10px]">0</span></a>
        </div>
      </header>

      <section className="relative min-h-[720px] flex flex-col items-center justify-center px-6 border-b border-neutral-200">
<div className="absolute inset-0 overflow-hidden">
  <div className="grid grid-cols-3 h-full">
    <img
      src="/brand-photo.jpg"
      className="w-full h-full object-cover opacity-70 contrast-125 saturate-110"
    />

    <img
      src="/MMP Bingo.png"
      className="w-full h-full object-cover blur-[1px] opacity-40"
    />

    <img
      src="/MMP caps.png"
      className="w-full h-full object-cover blur-[1px] opacity-40"
    />
  </div>

  <div className="absolute inset-0 bg-black/35 backdrop-contrast-125" />
</div>
<img
  src="/MMP/figure 1.png"
  className="absolute left-[-10px] md:left-10 top-[220px] md:top-40 w-20 md:w-36 rotate-[-8deg] opacity-90"
/>

<img
  src="/figure 2.png"
className="absolute right-2 md:right-12 top-[220px] md:top-52 w-20 md:w-36 rotate-[6deg] opacity-90"
/>

<img
  src="/MMP/figure 3.png"
className="h-48 md:h-[350px] w-auto object-contain mx-auto drop-shadow-2xl brightness-110 contrast-125"
/>
        <div className="text-center select-none">
         <img
  src="/MMP/logobg.png"
  alt="Club MP"
className="h-48 md:h-[500px] w-auto object-contain mx-auto mix-blend-multiply drop-shadow-[0_0_40px_rgba(0,0,0,0.25)]"
/>
          <p className="mt-5 text-xs md:text-sm font-extrabold uppercase tracking-[0.em] italic text-black">
            For those who lead, not follow.
       </p>
          <div className="mx-auto mt-7 h-px w-16 bg-black" />
          <a href="#shop" className="inline-flex items-center justify-center gap-5 mt-10 border border-black bg-black text-white px-12 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition">
            Shop New Drop <ArrowRight size={16} />
          </a>
        </div>

        <div className="absolute left-8 bottom-12 text-sm font-bold tracking-widest flex items-center gap-5">
          <span className="underline underline-offset-4">01</span>
          <span className="h-px w-10 bg-black" />
          <span>03</span>
        </div>

        <div className="absolute right-8 bottom-10 hidden md:flex flex-col items-center gap-5 text-xs font-bold uppercase tracking-widest">
          <span className="[writing-mode:vertical-rl] rotate-180">Scroll</span>
          <span className="h-24 w-px bg-black" />
        </div>
      </section>

      <section id="shop" className="px-8 md:px-12 py-16 border-b border-neutral-200">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6">New Drop</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Club MP Essentials</h2>
            <a href="#collections" className="inline-flex items-center justify-center gap-4 mt-14 border border-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition">
              Shop Collection
            </a>
          </div>

          <div>
            <div className="flex gap-4 overflow-x-auto pb-4">
              <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img src="/MMP/essential1.png" alt="Club MP Essential" className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4" />
  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">Club MP Essential</h3>
    <p className="mt-1 text-sm text-neutral-600">Black / Regular Fit</p>
    <p className="mt-2 text-sm font-bold">£30.00</p>
  </div>
</div>
            </div>
            <div className="flex justify-end mt-8">
              <a href="#collections" className="inline-flex items-center gap-5 text-xs font-bold uppercase tracking-widest hover:opacity-60">
                View All <ArrowRight size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="caps" className="px-8 md:px-12 py-16 border-b border-neutral-200">
  <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6">
    Collection
  </p>

  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
    Caps
  </h2>
  

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div>
  <img
    src="/31073984-9D9C-4B0D-A569-D40D06BF6207.JPEG"
    alt="Club MP Cap"
    className="aspect-[3/4] rounded-lg object-cover w-full border border-neutral-200"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Cap
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / One Size
    </p>

    <p className="mt-2 text-sm font-bold">
      £30.00
    </p>
  </div>
</div>
    <div>
  <img
    src="/MMP/caps.jpeg"
    alt="Club MP Cap"
    className="aspect-[3/4] rounded-lg object-cover w-full border border-neutral-200"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Cap
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Blue / One Size
    </p>

    <p className="mt-2 text-sm font-bold">
      £30.00
    </p>
  </div>
</div>
    <div>
  <img
    src="/MMP/IMG_7313.JPEG"
    alt="Club MP Cap"
    className="aspect-[3/4] rounded-lg object-cover w-full border border-neutral-200"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Cap
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Pink / One Size
    </p>

    <p className="mt-2 text-sm font-bold">
      £30.00
    </p>
  </div>
</div>
   <div>
  <img
    src="/MMP/WhatsApp Image 2026-05-25 at 11.39.33.jpeg"
    alt="Club MP Cap"
    className="aspect-[3/4] rounded-lg object-cover w-full border border-neutral-200"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Cap
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Grey / One Size
    </p>

    <p className="mt-2 text-sm font-bold">
      £30.00
    </p>
  </div>
</div>
  </div>
</section>
<section id="tracksuits" className="px-8 md:px-12 py-16 border-b border-neutral-200">
  <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6">
    Collection
  </p>

  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
    Tracksuits
  </h2>

  <div className="flex gap-4 overflow-x-auto pb-4">
<div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/track1.png"
    alt="Club MP Tracksuit"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Tracksuit
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Grey / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £95.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/track2.png"
    alt="Club MP Tracksuit"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Tracksuit
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Grey / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £95.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/track3.png"
    alt="Club MP Tracksuit"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Tracksuit
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Grey / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £95.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/track4.png"
    alt="Club MP Tracksuit"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Tracksuit
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Grey / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £95.00
    </p>
  </div>
</div>
<div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/btrack1.png"
    alt="Club MP Tracksuit"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Tracksuit
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
       Black / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £95.00
    </p>
  </div>
</div>
<div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/btrack2.png"
    alt="Club MP Tracksuit"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Tracksuit
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £95.00
    </p>
  </div>
</div>
<div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/btrack3.png"
    alt="Club MP Tracksuit"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Tracksuit
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £95.00
    </p>
  </div>
</div>
<div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/btrack5.png"
    alt="Club MP Tracksuit"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Tracksuit
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Forest Green / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £95.00
    </p>
  </div>
</div>
  </div>
</section>

<section id="hoodies" className="px-8 md:px-12 py-16 border-b border-neutral-200">
  <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6">
    Collection
  </p>

  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
    Hoodies
  </h2>

 <div className="flex gap-4 overflow-x-auto pb-4">
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/hoodie1.png"
    alt="Club MP Hoodie"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Hoodie
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Grey / Oversized Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £55.00
    </p>
  </div>
</div>
  <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/hoodie2.png"
    alt="Club MP Hoodie"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Hoodie
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Grey / Oversized Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £55.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/hoodie3.png"
    alt="Club MP Hoodie"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Hoodie
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Grey / Oversized Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £55.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/bhoodie1.png"
    alt="Club MP Hoodie"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Hoodie
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / Oversized Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £55.00
    </p>
  </div>
</div>
<div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/bhoodie2.png"
    alt="Club MP Hoodie"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Hoodie
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / Oversized Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £55.00
    </p>
  </div>
</div>
<div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/bhoodie3.png"
    alt="Club MP Hoodie"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Hoodie
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
       Black / Oversized Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £55.00
    </p>
  </div>
</div>
  </div>
</section>

<section id="tshirts" className="px-8 md:px-12 py-16 border-b border-neutral-200">
  <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6">
    Collection
  </p>

  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
    T-Shirts
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div>
  <img
    src="/MMP/shirts2.jpeg"
    alt="Club MP T-Shirt"
    className="aspect-[3/4] rounded-lg object-cover w-full border border-neutral-200"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP T-Shirt
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      White / Classic Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £20.00
    </p>
  </div>
</div>
    <div>
  <img
    src="/MMP/shirt.jpeg"
    alt="Club MP T-Shirt"
    className="aspect-[3/4] rounded-lg object-cover w-full border border-neutral-200"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP T-Shirt
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / Classic Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £20.00
    </p>
  </div>
</div>
    <div>
  <video
    src="/MMP/shirt design.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="aspect-[3/4] rounded-lg object-cover w-full border border-neutral-200"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP T-Shirt
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Promo Video
    </p>

    <p className="mt-2 text-sm font-bold">
      
    </p>
  </div>
</div>
    <div className="aspect-[3/4] rounded-lg bg-neutral-100 border border-neutral-200" />
  </div>
</section>
<section id="joggers" className="px-8 md:px-12 py-16 border-b border-neutral-200">
  <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6">
    Collection
  </p>

  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
    Joggers
  </h2>

  <div className="flex gap-4 overflow-x-auto pb-4">
    
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
      <img
        src="/MMP/joggers.png"
        alt="Club MP Joggers"
        className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
      />

      <div className="mt-4">
        <h3 className="text-sm font-bold uppercase tracking-widest">
          Club MP Joggers
        </h3>

        <p className="mt-1 text-sm text-neutral-600">
          Grey / Relaxed Fit
        </p>

        <p className="mt-2 text-sm font-bold">
          £45.00
        </p>
      </div>
    </div>

    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/joggersg.png"
    alt="Club MP Graphic Joggers"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Graphic Joggers
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Grey / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £45.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/joggersg2.png"
    alt="Club MP Graphic Joggers"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Graphic Joggers
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Grey / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £45.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/bjoggers.png"
    alt="Club MP Joggers"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Joggers
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £45.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/bjoggers2.png"
    alt="Club MP Cargo Joggers"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Graphic Joggers
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £50.00
    </p>
  </div>
</div>
<div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/bjoggers3.png"
    alt="Club MP GraphicJoggers"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Joggers
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Washed Black / Relaxed Fit
    </p>

    <p className="mt-2 text-sm font-bold">
      £50.00
    </p>
  </div>
</div>
  </div>
</section>

<section id="accessories" className="px-8 md:px-12 py-16 border-b border-neutral-200">
  <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6">
    Collection
  </p>

  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
    Accessories
  </h2>

  <div className="flex gap-4 overflow-x-auto pb-4">
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/IMG_1826.JPEG"
    alt="Club MP Accessory"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Beanie
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / One Size
    </p>

    <p className="mt-2 text-sm font-bold">
      £25.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/beanie.jpeg"
    alt="Club MP Accessory"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Beanie
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / One Size
    </p>

    <p className="mt-2 text-sm font-bold">
      £40.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/WhatsApp Image 2026-05-25 at 11.39.33 (1).jpeg"
    alt="Club MP Accessory"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Beanie
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / One Size
    </p>

    <p className="mt-2 text-sm font-bold">
      £45.00
    </p>
  </div>
</div>
    <div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <img
    src="/MMP/wristbandbest.jpeg"
    alt="Club MP Accessory"
    className="aspect-[3/4] rounded-lg object-contain w-full border border-neutral-200 bg-white p-4"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Wristband
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Black / Blue / White
    </p>

    <p className="mt-2 text-sm font-bold">
      £35.00
    </p>
  </div>
</div>
<div className="w-[calc(50%-8px)] md:w-[calc(25%-12px)] flex-shrink-0">
  <video
    src="/MMP/vid.MP4"
    autoPlay
    muted
    loop
    playsInline
    className="aspect-[3/4] rounded-lg object-cover w-full border border-neutral-200"
  />

  <div className="mt-4">
    <h3 className="text-sm font-bold uppercase tracking-widest">
      Club MP Bands
    </h3>

    <p className="mt-1 text-sm text-neutral-600">
      Promo Video
    </p>

    <p className="mt-2 text-sm font-bold">
      
    </p>
  </div>
</div>
  </div>
</section>

      <section id="about" className="px-8 md:px-12 py-12 border-b border-neutral-200">
        <div className="grid md:grid-cols-2 border border-neutral-200 rounded-lg overflow-hidden">
          
          <div className="p-12 md:p-16 flex flex-col justify-center">
            <img
  src="/1000 followers.jpg"
  alt="Club MP Brand"
  className="w-full h-[420px] object-cover rounded-lg mb-8"
/>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6">The Brand</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Built Different.</h2>
            <a href="#story" className="inline-flex items-center gap-5 mt-12 w-fit border border-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition">
              Our Story <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="px-8 md:px-12 py-12 border-b border-neutral-200">
        <div className="flex items-end justify-between gap-6 mb-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-3">Follow us on</p>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight">Millimoveprivéclub</h2>
          </div>
          <a
  href="https://www.instagram.com/millimovepriveclub/"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-flex items-center gap-5 text-xs font-bold uppercase tracking-widest hover:opacity-60"
>
            View Instagram <ArrowRight size={28} />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {socialPlaceholders.map((_, index) => (
            <div key={index} className="aspect-square rounded-md bg-neutral-100 border border-neutral-100" />
          ))}
        </div>
      </section>

      <footer id="contact" className="px-8 md:px-12 py-12">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div>
            <div className="leading-none">
              <div className="text-4xl font-light tracking-tight">CLUB</div>
              <div className="-mt-2 text-6xl italic font-light tracking-tighter">MP</div>
            </div>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.35em]">For those who lead,<br />not follow.</p>
            <div className="mt-6 h-px w-14 bg-black" />
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Shop</h3>
            <ul className="space-y-2 text-xs">
              <li>All Products</li><li>Hoodies</li><li>Tracksuits</li><li>T-Shirts</li><li>Accessories</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Help</h3>
            <ul className="space-y-2 text-xs">
              <li>Shipping</li><li>Returns</li><li>FAQ</li><li>Size Guide</li><li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Stay Updated</h3>
            <p className="text-xs leading-relaxed mb-5">Subscribe to get exclusive access to new drops and special offers.</p>
            <div className="flex border border-black h-12">
              <input className="flex-1 px-4 text-xs outline-none" placeholder="Enter your email" />
              <button className="px-4"><ArrowRight size={18} /></button>
            </div>
          </div>
<div className="min-h-[300px] bg-neutral-100" />
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4">Follow us on</h3>
            <p className="text-2xl font-black uppercase tracking-tight mb-7">Millimoveprivéclub</p>
            <div className="flex items-center gap-6">
              <a
  href="https://www.instagram.com/millimovepriveclub/"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaInstagram size={28} />
</a>
              <a
  href="https://www.tiktok.com/@millimovepriveclub?lang=en"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaTiktok size={28} />
</a>
              
            </div>
          </div>
        </div>
        <p className="text-center mt-12 text-xs font-bold uppercase tracking-[0.25em]">© CLUB MP 2020. All rights reserved.</p>
      </footer>
    </main>
  );
}
