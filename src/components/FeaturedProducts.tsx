"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const categories = ["All", "T-Shirts", "Jeans", "Shirts", "Sneakers", "Track Pants", "Accessories"];

const products = [
  { id: 1, name: "Drop Shoulder Graphic Tee", category: "T-Shirts", type: "Drop Shoulder", price: 899, image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be7a?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Classic Oversized Boxy", category: "T-Shirts", type: "Oversized", price: 799, image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Premium Slim Fit Jeans", category: "Jeans", type: "Jeans", price: 1499, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=800&auto=format&fit=crop" },
  { id: 4, name: "Comfort Track Pants", category: "Track Pants", type: "Track Pants", price: 899, image: "https://images.unsplash.com/photo-1515434126000-961d90ff09db?q=80&w=800&auto=format&fit=crop" },
  { id: 5, name: "Casual Linen Shirt", category: "Shirts", type: "Casual Shirts", price: 1199, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop" },
  { id: 6, name: "Chunky Street Sneakers", category: "Sneakers", type: "Sneakers", price: 2499, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop" },
  { id: 7, name: "Everyday Slides", category: "Accessories", type: "Slippers", price: 599, image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?q=80&w=800&auto=format&fit=crop" },
  { id: 8, name: "Minimalist Leather Belt", category: "Accessories", type: "Belts", price: 499, image: "https://images.unsplash.com/photo-1624222247344-550fbadcd973?q=80&w=800&auto=format&fit=crop" },
];

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [handleImgError, setHandleImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group cursor-pointer bg-[#141414] rounded-xl overflow-hidden border border-[#262626] hover:scale-[1.03] transition-all duration-300 shadow-xl min-w-[280px] sm:min-w-0"
    >
      <div className="relative h-[300px] sm:h-[400px] overflow-hidden bg-black/50">
        <img
          src={handleImgError ? "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=800&auto=format&fit=crop" : product.image}
          alt={product.name}
          onError={() => setHandleImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-widest text-[#A1A1AA] bg-black/60 px-3 py-1.5 backdrop-blur-md rounded-lg border border-white/5">{product.type}</div>
      </div>

      <div className="p-5">
        <h3 className="font-black text-white text-xs uppercase tracking-widest mb-1 leading-tight line-clamp-1">{product.name}</h3>
        <p className="font-bold text-slate-400 text-xs mb-4">₹{product.price}</p>

        <a
          href="tel:+919148161724"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center justify-center w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-colors duration-300 rounded-xl"
        >
          📞 Call to Order
        </a>
      </div>
    </motion.div>
  );
}

export default function FeaturedProducts() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);
  const catRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (index: number, cat: string) => {
    setActive(cat);
    catRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-12 md:py-16 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
              The <span className="text-white/40">Collection</span>
            </h2>

            {/* Nav Arrows */}
            <div className="hidden sm:flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 flex items-center justify-center bg-[#141414] border border-[#262626] text-white rounded-full hover:bg-white hover:text-black transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 flex items-center justify-center bg-[#141414] border border-[#262626] text-white rounded-full hover:bg-white hover:text-black transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Scrolling Category Bar with Auto Center */}
          <div className="overflow-x-auto no-scrollbar py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-3 min-w-max">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  ref={(el) => { catRefs.current[i] = el; }}
                  onClick={() => handleCategoryClick(i, cat)}
                  className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all duration-300 rounded-full border ${active === cat
                      ? "bg-white text-black border-white shadow-lg shadow-white/5"
                      : "bg-[#141414] text-[#A1A1AA] border-[#262626] hover:border-white hover:text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product Grid with Horizontal Scroll on Mobile */}
        <div
          ref={scrollContainerRef}
          className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 overflow-x-auto sm:overflow-x-visible no-scrollbar pb-6 sm:pb-0"
        >
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>

        <div className="mt-10 md:mt-14 text-center">
          <a
            href="https://maps.app.goo.gl/uLrxuNGPQFBY7BPz8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-gray-200 transition-all duration-300 rounded-xl shadow-xl shadow-white/5"
          >
            Visit Store to View All <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
