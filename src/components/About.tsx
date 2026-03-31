"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, CreditCard, Shirt, Tag, Award, Package } from "lucide-react";

const features = [
  { icon: Shirt, title: "Trendy Collection", description: "Stay ahead of the fashion curve with our latest arrivals and seasonal picks." },
  { icon: Tag, title: "Affordable Price", description: "Premium quality menswear that fits your budget perfectly." },
  { icon: Award, title: "Trusted Quality", description: "Every piece is crafted to perfection because we believe in quality and trust." },
  { icon: Package, title: "Bulk Orders Available", description: "Special pricing for uniforms, events, and corporate bulk purchases." },
];

const storeInfo = [
  { icon: MapPin, label: "Location", value: "Chitradurga Fort, Chitradurga" },
  { icon: Clock, label: "Store Hours", value: "10:00 AM – 10:00 PM (All days)" },
  { icon: Phone, label: "Phone", value: "+91 91481 61724" },
  { icon: CreditCard, label: "Payments", value: "Cash, UPI Accepted" }
];

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-[#0B0B0B] border-y border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Store card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-xl border border-[#262626] p-8 lg:p-10 bg-[#141414] shadow-2xl">
              <div className="text-center mb-8">
                <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center mx-auto mb-4">
                  <Shirt size={34} className="text-black" />
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-wider">RR <span className="text-white/40">Clothing</span></h3>
                <p className="text-[#A1A1AA] font-black text-[10px] mt-2 tracking-widest uppercase mb-2">Since 2024 • Menswear</p>
              </div>
              <div className="space-y-4">
                {storeInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4 p-4 border-b border-[#262626] last:border-0 hover:bg-white/5 transition-all rounded-lg group">
                    <div className="flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-[#A1A1AA] group-hover:text-white" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-1 font-black">{label}</div>
                      <div className="text-sm font-bold text-white">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative background shape */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#262626] rounded-xl -z-10 bg-[#141414]/50" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#262626] text-[#A1A1AA] text-[10px] font-black tracking-widest uppercase mb-6 rounded-lg bg-[#141414] shadow-sm">
              Our Vision
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 uppercase tracking-tight leading-[1.1]">
              Redefining <br/><span className="text-white/40">Modern Men&apos;s Wear</span>
            </h2>
            <p className="text-[#A1A1AA] text-base leading-relaxed mb-6">
              RR Clothing is your ultimate destination for men&apos;s premium fashion in Chitradurga. <strong className="text-white block mt-2 font-black italic opacity-90 border-l-2 border-white pl-4 uppercase text-xs tracking-widest">"We Believe In Quality and Trust"</strong>
            </p>
            <p className="text-[#A1A1AA]/70 leading-relaxed mb-10 text-sm">
              We curate high-quality clothing for men who want to make an impression. Whether you are looking for oversized tees, premium denim, or casual streetwear, we ensure you always look your best.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {features.map(({ icon: Icon, title, description }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.08 }}
                  className="group"
                >
                  <div className="mb-3 w-12 h-12 rounded-lg bg-[#141414] flex items-center justify-center border border-[#262626] group-hover:border-white transition-all">
                    <Icon size={20} className="text-[#A1A1AA] group-hover:text-white" strokeWidth={2} />
                  </div>
                  <h4 className="font-black text-white text-[10px] mb-2 uppercase tracking-widest group-hover:text-white">{title}</h4>
                  <p className="text-[11px] text-[#A1A1AA] leading-relaxed line-clamp-2">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
