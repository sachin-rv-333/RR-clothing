"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import emailjs from "emailjs-com";

const contactDetails = [
  { icon: MapPin, title: "Visit Us", value: "Chitradurga Fort", sub: "Chitradurga, Karnataka" },
  { icon: Phone, title: "Call Us", value: "+91 91481 61724", sub: "10:00 AM – 10:00 PM" },
  { icon: Mail, title: "Email Us", value: "info@rrclothing.in", sub: "We reply within 24 hours" },
  { icon: Clock, title: "Store Hours", value: "10:00 AM – 10:00 PM", sub: "Open All Days" },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    setLoading(true);

    const serviceId = "service_rrclothing";
    const templateId = "template_rrclothing";
    const publicKey = "user_public_key";

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
    };

    // SIMULATION MODE: If keys are still placeholders, just simulate success for the demo
    if (serviceId === "service_rrclothing" || publicKey === "user_public_key") {
      console.log("EmailJS Simulation Mode: To enable real emails, update serviceId and publicKey in Contact.tsx");
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        setFormData({ name: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      }, 1000);
      return;
    }

    emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    ).then(
      () => {
        setSubmitted(true);
        setLoading(false);
        setFormData({ name: "", phone: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert(`Failed to send message: ${error?.text || "Unknown Error"}. Please call us directly.`);
        setLoading(false);
      }
    );
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-[#0B0B0B] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#262626] text-[#A1A1AA] text-[10px] font-black tracking-widest uppercase mb-6 rounded-lg bg-[#141414] shadow-sm">
            Connect With Us
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 uppercase tracking-tight">
            Get In <span className="text-white/40">Touch</span>
          </h2>
          <p className="text-[#A1A1AA] max-w-md mx-auto text-sm">Have a question? We&apos;d love to hear from you. Send us a message or visit our store.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {contactDetails.map(({ icon: Icon, title, value, sub }) => (
                <div key={title} className="bg-[#141414] p-6 rounded-xl border border-[#262626] group hover:border-white transition-all duration-300 shadow-lg">
                  <div className="mb-4">
                    <Icon size={24} className="text-[#A1A1AA] group-hover:text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-2 font-black">{title}</div>
                  <div className="font-bold text-white text-sm tracking-wide mb-1">{value}</div>
                  <div className="text-xs text-[#A1A1AA]">{sub}</div>
                </div>
              ))}
            </div>

            <a
              href="https://instagram.com/rr.__.clothing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-6 mb-8 bg-[#141414] rounded-xl text-white border border-[#262626] hover:shadow-xl hover:border-white transition-all duration-300 group"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram group-hover:scale-110 transition-transform duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <div className="text-left">
                <div className="text-[10px] text-[#A1A1AA] uppercase tracking-widest mb-1 font-black">Follow Us On</div>
                <div className="font-bold text-white text-sm tracking-wide">Instagram</div>
              </div>
            </a>

            {/* Map embed */}
            <div className="rounded-xl border border-[#262626] bg-[#141414] h-64 flex items-center justify-center grayscale invert overflow-hidden shadow-2xl relative group">
              <iframe
                title="RR Clothing Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.66416187766!2d76.39343394627402!3d14.225916045542845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba142417c82c3%3A0xe74ec0ad9baad0b0!2sChitradurga%20Fort!5e0!3m2!1sen!2sin!4v1711900000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-black/40 pointer-events-none group-hover:opacity-0 transition-opacity" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="bg-[#141414] rounded-xl border border-[#262626] p-8 md:p-10 shadow-2xl">
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-wide">Send a Message</h3>
              <p className="text-[#A1A1AA] text-sm mb-8">Fill in the form and we&apos;ll get back to you shortly.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 gap-4 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <CheckCircle size={32} className="text-white" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-wider">Message Sent!</h4>
                  <p className="text-[#A1A1AA] text-sm max-w-xs">Thank you for reaching out. We&apos;ll contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-[#A1A1AA] mb-3">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 rounded-lg bg-[#0B0B0B] border border-[#262626] text-white placeholder:text-[#3F3F46] focus:outline-none focus:border-white transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest text-[#A1A1AA] mb-3">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 91481 61724"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-4 rounded-lg bg-[#0B0B0B] border border-[#262626] text-white placeholder:text-[#3F3F46] focus:outline-none focus:border-white transition-all duration-200 text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-[#A1A1AA] mb-3">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Ask about products, availability, bulk orders..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-4 rounded-lg bg-[#0B0B0B] border border-[#262626] text-white placeholder:text-[#3F3F46] focus:outline-none focus:border-white transition-all duration-200 text-sm resize-none"
                    />
                  </div>
                  <button
                    id="contact-submit"
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-3 py-5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl active:scale-[0.98]"
                  >
                    {loading ? "Sending..." : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
