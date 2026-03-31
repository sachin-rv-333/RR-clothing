"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { id: 1, name: "Rahul Kumar", role: "Regular Customer", rating: 5, initials: "RK", color: "from-blue-500 to-blue-700", content: "RR Clothing has the best collection in Chitradurga. I've been shopping here for 5 years and the quality never disappoints. The staff is very helpful in finding the right fit." },
  { id: 2, name: "Suresh Gowda", role: "Loyal Customer", rating: 5, initials: "SG", color: "from-emerald-500 to-emerald-700", content: "Amazing variety and great prices! I bought 3 shirts and a pair of jeans last month. The slim fit jeans are my favourite — excellent quality for the price." },
  { id: 3, name: "Manjunath B.", role: "First-Time Buyer", rating: 5, initials: "MB", color: "from-purple-500 to-purple-700", content: "Was looking for a good clothing store in Chitradurga and stumbled upon RR Clothing. Absolutely loved the experience. Will definitely come back for more!" },
  { id: 4, name: "Vikas Nair", role: "Corporate Professional", rating: 5, initials: "VN", color: "from-amber-500 to-amber-700", content: "Their formal shirts are a game-changer. Perfect for office wear and very affordable. The fabric quality is comparable to much more expensive brands." },
  { id: 5, name: "Arun Patel", role: "College Student", rating: 4, initials: "AP", color: "from-rose-500 to-rose-700", content: "Love the casual T-shirts here. Great prints, good quality fabric, and the prices are student-friendly. Recommended to all my friends!" },
  { id: 6, name: "Kiran Reddy", role: "Business Owner", rating: 5, initials: "KR", color: "from-teal-500 to-teal-700", content: "I buy uniforms and formal shirts for my staff from RR Clothing. Always consistent quality, and they accommodate bulk orders very professionally." },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-[#0B0B0B] border-t border-[#262626] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#262626] text-[#A1A1AA] text-[10px] font-black tracking-widest uppercase mb-6 rounded-lg bg-[#141414] shadow-sm">
            Community Love
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Loved by <span className="text-white/40">Hundreds</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-md mx-auto text-sm">Real reviews from our premium community in Chitradurga.</p>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative flex overflow-hidden py-10 border-y border-[#262626] group">
        <div className="flex gap-6 animate-scroll whitespace-nowrap pause-on-hover px-10">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[400px] bg-[#141414] rounded-2xl p-8 border border-[#262626] flex flex-col group/card shadow-2xl transition-all duration-500 hover:border-white/50"
            >
              <Quote size={34} className="text-white/5 mb-8 flex-shrink-0 group-hover/card:text-white/20 transition-all duration-500 transform group-hover/card:-translate-y-1" />
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-10 italic whitespace-normal">&quot;{t.content}&quot;</p>
              
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-[#262626]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-[#262626] flex items-center justify-center text-white text-sm font-black uppercase tracking-widest group-hover/card:bg-white group-hover/card:text-black transition-all duration-500">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <div className="font-black text-white text-[10px] uppercase tracking-widest mb-0.5">{t.name}</div>
                    <div className="text-[10px] text-[#A1A1AA] uppercase tracking-[0.05em]">{t.role}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={11} className={j < t.rating ? "text-white fill-white" : "text-[#262626] fill-[#262626]"} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-8 px-10 py-8 bg-[#141414] rounded-2xl border border-[#262626] shadow-2xl">
          <div className="text-center">
            <div className="text-4xl font-black text-white mb-2">4.9/5.0</div>
            <div className="flex gap-1 justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-white fill-white" />)}
            </div>
          </div>
          <div className="hidden md:block w-px h-12 bg-[#262626]" />
          <div className="text-center md:text-left">
            <div className="font-black text-white text-[10px] uppercase tracking-widest">Trustpilot Rating</div>
            <div className="text-[10px] text-[#A1A1AA] uppercase tracking-widest mt-1">Based on 1,500+ Verified Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
}
