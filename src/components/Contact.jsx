import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Phone, MessageSquare } from './Icons';
import { LinkedInIcon, GitHubIcon } from './BrandIcons';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 bg-[#020617] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-vibrant-indigo/10 blur-[120px] rounded-full -mr-64 -mb-64 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 md:gap-32">
          
          {/* Left Side: Copy & Info */}
            <div className="annotation mb-12 text-vibrant-indigo font-black tracking-[0.4em]">
              // CONNECT.sys // 
            </div>
            <h2 className="text-editorial mb-12 uppercase font-black tracking-tighter text-white">
              Let's <br />
              Secure <br />
              Impact.
            </h2>
            <p className="text-story text-vibrant-sky/90 mb-16 font-bold tracking-wide">
              Currently accepting strategic PM engagements and AI product orchestration partnerships. Ready to define the standard.
            </p>

            <div className="space-y-10">
               <div className="flex items-center gap-8 group">
                  <div className="w-14 h-14 rounded-2xl border border-vibrant-indigo/20 flex items-center justify-center text-vibrant-sky transition-all group-hover:text-vibrant-cyan group-hover:border-vibrant-cyan/50 group-hover:bg-vibrant-cyan/5">
                     <Mail size={22} />
                  </div>
                  <div>
                     <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-vibrant-indigo block font-black mb-1">Electronic Mail</span>
                     <a href="mailto:chaitanya100502@gmail.com" className="text-xl text-white hover:text-vibrant-cyan transition-colors font-black tracking-tight underline decoration-vibrant-indigo/30 underline-offset-8">chaitanya100502@gmail.com</a>
                  </div>
               </div>

               <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-vibrant-indigo/20 flex items-center justify-center text-vibrant-indigo transition-colors group-hover:text-vibrant-emerald group-hover:border-vibrant-emerald/30">
                     <Phone size={18} />
                  </div>
                  <div>
                     <span className="text-[11px] font-mono uppercase tracking-[0.4em] text-vibrant-indigo block font-black">Direct Line</span>
                     <span className="text-white font-black tracking-widest">+91 7976989699</span>
                  </div>
               </div>

               <div className="pt-12 flex gap-8">
                  <a href="https://linkedin.com/in/chaitanya-khurana" target="_blank" rel="noreferrer" className="text-vibrant-indigo hover:text-white transition-colors">
                     <LinkedInIcon className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/chaitanya-khurana" target="_blank" rel="noreferrer" className="text-vibrant-indigo hover:text-white transition-colors">
                     <GitHubIcon className="w-6 h-6" />
                  </a>
               </div>
            </div>
          </div>

          {/* Right Side: Form & WhatsApp */}
          <div className="space-y-12">
            <form action="https://formspree.io/f/mqakvknl" method="POST" className="grid gap-8 bespoke-card p-8 md:p-14 border-vibrant-violet/20 bg-vibrant-violet/5">
               <div>
                  <label className="block text-[11px] uppercase font-mono tracking-[0.3em] text-zinc-400 mb-4 font-semibold">Identity // Name</label>
                  <input type="text" name="name" required className="input-minimal" placeholder="E.G. SATOSHI NAKAMOTO" />
               </div>
               <div>
                  <label className="block text-[11px] uppercase font-mono tracking-[0.3em] text-zinc-400 mb-4 font-semibold">Channel // Email</label>
                  <input type="email" name="email" required className="input-minimal" placeholder="REACH@EXAMPLE.COM" />
               </div>
               <div>
                  <label className="block text-[11px] uppercase font-mono tracking-[0.3em] text-zinc-400 mb-4 font-semibold">Message // Query</label>
                  <textarea name="message" rows="4" required className="input-minimal resize-none" placeholder="DESCRIBE THE IMPACT TO BE CREATED..."></textarea>
               </div>
               <button type="submit" className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.4em] text-[11px] hover:bg-vibrant-violet hover:text-white transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
                  Execute Send
               </button>
               <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest text-center">
                  Form delivery orchestrated via Formspree API.
               </p>
            </form>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono uppercase text-zinc-600 tracking-widest text-center font-bold">Need an instant response?</span>
              <a 
                href="https://wa.me/917976989699" 
                target="_blank" 
                rel="noreferrer"
                className="whatsapp-pulse w-full py-5 bg-vibrant-emerald flex items-center justify-center gap-4 text-white font-black uppercase tracking-[0.4em] text-[11px] hover:bg-emerald-600 transition-all rounded-xl"
              >
                <MessageSquare size={16} />
                WhatsApp Secure
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
