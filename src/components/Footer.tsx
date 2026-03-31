import { MapPin, Phone, Mail, Camera, Globe, Share2, ExternalLink } from "lucide-react";

const links = {
  Quick: [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  Categories: [
    { label: "Jeans", href: "#products" },
    { label: "Formal Shirts", href: "#products" },
    { label: "Casual Shirts", href: "#products" },
    { label: "T-Shirts", href: "#products" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center mb-6 group inline-block">
              <span className="font-black tracking-[0.2em] text-lg sm:text-xl text-white uppercase">
                RR <span className="text-white/40">Clothing</span>
              </span>
            </a>
            <p className="text-sm italic text-[#A1A1AA] mb-6 border-l-2 border-white pl-4 uppercase text-[10px] tracking-widest font-black">
              "Quality and Trust"
            </p>
            <div className="flex gap-4">
              {[
                { icon: Camera, href: "https://instagram.com/rr.__.clothing", id: "footer-instagram" },
                { icon: Globe, href: "#", id: "footer-facebook" },
                { icon: Share2, href: "#", id: "footer-twitter" },
              ].map(({ icon: Icon, href, id }) => (
                <a
                  key={id}
                  id={id}
                  href={href}
                  className="w-10 h-10 rounded-lg border border-[#262626] flex items-center justify-center text-[#3F3F46] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                  aria-label={id}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <h4 className="font-black text-white mb-6 text-[10px] uppercase tracking-widest text-white/50">{section}</h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-xs font-bold uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors duration-200">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="font-black text-white mb-6 text-[10px] uppercase tracking-widest text-white/50">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <MapPin size={16} className="text-[#A1A1AA] mt-0.5 flex-shrink-0" />
                <span className="text-xs font-medium text-[#A1A1AA] group-hover:text-slate-200 transition-colors">Chitradurga Fort, Karnataka</span>
              </li>
              <li className="flex items-start gap-4 group">
                <Phone size={16} className="text-[#A1A1AA] mt-0.5 flex-shrink-0" />
                <span className="text-xs font-medium text-[#A1A1AA] group-hover:text-slate-200 transition-colors">+91 91481 61724</span>
              </li>
              <li className="flex items-start gap-4 group">
                <Mail size={16} className="text-[#A1A1AA] mt-0.5 flex-shrink-0" />
                <span className="text-xs font-medium text-[#A1A1AA] group-hover:text-slate-200 transition-colors">info@rrclothing.in</span>
              </li>
              <li className="pt-2">
                <a 
                  href="https://maps.app.goo.gl/uLrxuNGPQFBY7BPz8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:underline transition-all"
                >
                  Get Directions <ExternalLink size={10} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-bold uppercase tracking-widest">
          <p className="text-[#3F3F46]">© {new Date().getFullYear()} RR <span className="text-white">Clothing</span>. Premium Essentials.</p>
        </div>
      </div>
    </footer>
  );
}
