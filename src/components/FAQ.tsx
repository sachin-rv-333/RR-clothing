"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { question: "What types of clothing do you sell at RR Clothing?", answer: "We specialise in men's readymade garments including a wide range of jeans (slim fit, regular, stretch), formal and casual shirts, polo and graphic T-shirts, and more. We carry styles suitable for everyday wear, office, and special occasions." },
  { question: "What are your store hours?", answer: "We are open every day from 10:00 AM to 10:00 PM. We're open on most public holidays as well." },
  { question: "Do you offer alterations or custom tailoring?", answer: "We offer basic alteration services for items purchased from our store. For specific needs like hemming jeans or adjusting shirt sizes, please speak with our in-store team who can guide you based on availability." },
  { question: "What is your exchange and return policy?", answer: "We offer exchanges within 7 days of purchase for unworn items with original tags and receipt. We currently do not offer cash refunds, but we're happy to exchange for another item or provide store credit." },
  { question: "Do you handle bulk or wholesale orders?", answer: "Yes! We accommodate bulk orders for organisations, schools, and businesses. Please visit our store or call us to discuss your requirements, pricing, and timelines for bulk orders." },
  { question: "What price range can I expect at RR Clothing?", answer: "Our products are priced to be accessible for everyone. T-shirts start from ₹499, shirts from ₹799, and jeans from ₹1,199. We also periodically run seasonal sales and discounts." },
  { question: "Where exactly is RR Clothing located?", answer: "We are located at Chitradurga Fort, Chitradurga. We're easy to find with parking available nearby. You can also call us at +91 91481 61724 for directions." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 md:py-16 bg-[#0B0B0B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#262626] text-[#A1A1AA] text-[10px] font-black tracking-widest uppercase mb-6 rounded-lg bg-[#141414] shadow-sm">
            Support Center
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Frequently Asked <span className="text-white/40">Questions</span>
          </h2>
          <p className="text-[#A1A1AA] text-sm">Everything you need to know about our premium collection.</p>
        </motion.div>

        <div className="border-t border-[#262626]">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}
              className="border-b border-[#262626] bg-[#0B0B0B]"
            >
              <button
                id={`faq-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className={`font-black text-[11px] uppercase tracking-widest leading-relaxed transition-all duration-200 ${openIndex === i ? "text-white underline underline-offset-8" : "text-[#A1A1AA] group-hover:text-white"}`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "text-white rotate-180" : "text-[#3F3F46]"}`}>
                  {openIndex === i ? <Minus size={16} strokeWidth={2} /> : <Plus size={16} strokeWidth={2} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="pb-8 text-[#A1A1AA] text-xs leading-relaxed max-w-3xl border-l border-white/20 pl-6 ml-1">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
