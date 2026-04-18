import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Phone, MessageSquare } from './Icons';
import { LinkedInIcon, GitHubIcon } from './BrandIcons';

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-40 px-6 bg-[#020617] relative overflow-hidden">
      {/* Moving Aurora Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-vibrant-violet/15 blur-[150px] rounded-full -mr-96 -mb-96 pointer-events-none opacity-50" />
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-vibrant-cyan/10 blur-[130px] rounded-full -ml-64 -mt-64 pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 md:gap-40">
          
          {/* Left Side: System Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="annotation mb-12 text-vibrant-violet font-black">
              // CONNECT.sys // 
            </div>
            <h2 className="text-editorial mb-12 uppercase">
              Secure <br />
              The <br />
              Impact.
            </h2>
            <p className="text-story text-vibrant-sky/90 mb-20 font-black tracking-tight leading-relaxed">
              Currently accepting strategic PM engagements and AI product orchestration partnerships. Ready to define the standard.
            </p>

            <div className="space-y-12">
               <div className="flex items-center gap-10 group">
                  <div className="w-16 h-16 rounded-3xl border-2 border-white/10 flex items-center justify-center text-vibrant-sky transition-all group-hover:text-vibrant-cyan group-hover:border-vibrant-cyan/50 group-hover:bg-vibrant-cyan/10">
                     <Mail size={24} />
                  </div>
                  <div>
                     <span className="text-[12px] font-mono uppercase tracking-[0.4em] text-vibrant-violet block font-black mb-2">Electronic_Mail</span>
                     <a href="mailto:chaitanya100502@gmail.com" className="text-2xl md:text-3xl text-white hover:text-vibrant-cyan transition-colors font-black tracking-tighter underline decoration-white/10 underline-offset-8">chaitanya100502@gmail.com</a>
                  </div>
               </div>

               <div className="flex items-center gap-10 group">
                  <div className="w-16 h-16 rounded-3xl border-2 border-white/10 flex items-center justify-center text-vibrant-sky transition-all group-hover:text-vibrant-emerald group-hover:border-vibrant-emerald/50 group-hover:bg-vibrant-emerald/10">
                     <Phone size={24} />
                  </div>
                  <div>
                     <span className="text-[12px] font-mono uppercase tracking-[0.4em] text-vibrant-violet block font-black mb-2">Direct_Channel</span>
                     <span className="text-2xl md:text-3xl text-white font-black tracking-tighter font-mono">+91 7976989699</span>
                  </div>
               </div>

               <div className="pt-16 flex gap-12">
                  <a href="https://linkedin.com/in/chaitanya-khurana" target="_blank" rel="noreferrer" className="text-vibrant-sky/50 hover:text-white transition-all scale-125">
                     <LinkedInIcon className="w-7 h-7" />
                  </a>
                  <a href="https://github.com/chaitanya-khurana" target="_blank" rel="noreferrer" className="text-vibrant-sky/50 hover:text-white transition-all scale-125">
                     <GitHubIcon className="w-7 h-7" />
                  </a>
               </div>
            </div>
          </div>

          {/* Right Side: Form & WhatsApp Dashboard */}
          <div className="space-y-16">
            <motion.form 
               action="https://formspree.io/f/mqakvknl" 
               method="POST" 
               className="grid gap-10 bespoke-card p-10 md:p-16 border-white/20 bg-white/[0.04] shadow-2xl"
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
               <div className="space-y-6">
                  <label className="block text-[12px] uppercase font-mono tracking-[0.4em] text-vibrant-violet font-black">Identity_Name</label>
                  <input type="text" name="name" required className="input-minimal" placeholder="GUEST_USER" />
               </div>
               <div className="space-y-6">
                  <label className="block text-[12px] uppercase font-mono tracking-[0.4em] text-vibrant-violet font-black">Access_Endpoint</label>
                  <input type="email" name="email" required className="input-minimal" placeholder="INPUT_EMAIL" />
               </div>
               <div className="space-y-6">
                  <label className="block text-[12px] uppercase font-mono tracking-[0.4em] text-vibrant-violet font-black">Payload_Descriptor</label>
                  <textarea name="message" rows="4" required className="input-minimal resize-none" placeholder="DEFINE_OBJECTIVE..."></textarea>
               </div>
               <button type="submit" className="w-full py-6 bg-white text-black font-black uppercase tracking-[0.5em] text-[12px] hover:bg-vibrant-violet hover:text-white transition-all shadow-[0_30px_60px_rgba(255,255,255,0.05)] rounded-2xl">
                  EXECUTE_SEND
               </button>
               <p className="text-[10px] font-mono text-vibrant-sky/30 uppercase tracking-[0.2em] text-center">
                  SECURE_TRANSMISSION // VIA_FORMSPREE_PROTOCOLS
               </p>
            </motion.form>

            <motion.div 
               className="flex flex-col gap-6"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
            >
              <span className="text-[11px] font-mono uppercase text-vibrant-sky/40 tracking-[0.3em] text-center font-black italic">Synchronous Protocol Available</span>
              <a 
                href="https://wa.me/917976989699" 
                target="_blank" 
                rel="noreferrer"
                className="whatsapp-pulse w-full py-6 bg-vibrant-emerald flex items-center justify-center gap-6 text-white font-black uppercase tracking-[0.5em] text-[12px] hover:bg-emerald-600 transition-all rounded-2xl shadow-xl"
              >
                <MessageSquare size={18} />
                WhatsApp.sys
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
