# RR Clothing — Premium Streetwear Redesign

A high-performance, modern "Black Minimal" fashion e-commerce landing page built for **RR Clothing** in Chitradurga. Optimized for premium mobile-first shopping experiences and lead generation.

---

### 🎨 Design System: "Black Minimal"
*   **Palette:** Background `#0B0B0B` | Cards `#141414` | Borders `#262626`
*   **Typography:** Bold uppercase headers with tight tracking and Inter-based body text.
*   **Focus:** Visual-first product presentation with zero layout clutter and smooth transitions.

---

### ✨ Key Features
*   **Infinite Reviews Slider:** Seamless horizontal auto-scroll loop with pause-on-hover logic for community engagement.
*   **Smart Category Navigation:** Category bar with automatic centering (`scrollIntoView`) for premium touch-device navigation.
*   **Floating Action Buttons (FAB):** Integrated glass-style WhatsApp and Direct Call buttons for instant lead conversion.
*   **Optimized Visuals:** High-resolution fashion assets with built-in `onError` fallbacks to prevent empty placeholders.
*   **Interactive UI:** Micro-animations using `framer-motion` (0.8s ease transitions) and `hover:scale-[1.03]` effects.
*   **Fixed Hero UX:** Multi-layer dark gradient overlay to ensure text legibility without blocking model imagery.

---

### 🛠️ Tech Stack
*   **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Forms/Lead Gen:** [EmailJS](https://www.emailjs.com/) (Integrated with Simulation Mode)

---

### 📨 Contact Form Configuration
The form in `src/components/Contact.tsx` is currently in **Simulation Mode** for development. To go live, replace the following in `Contact.tsx`:

```tsx
const serviceId = "service_xxx";
const templateId = "template_xxx";
const publicKey = "xxx_public_key";
```

Ensure your EmailJS template variables match: `{{name}}`, `{{phone}}`, `{{message}}`.

---

### 🚀 Getting Started

1.  **Clone the Repo:**
    ```bash
    git clone [repository-url]
    cd rr-clothing
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Run Development Server:**
    ```bash
    npm run dev
    ```

4.  **Production Build:**
    ```bash
    npm run build
    ```

---

### 🗺️ Deployment
This project is fully compatible with **Vercel**. Connect your repository and it will deploy instantly with optimized static generation for peak performance.
