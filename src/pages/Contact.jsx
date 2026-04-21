import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    <rect width="20" height="16" x="2" y="4" rx="2"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const WhatsApp = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const Contact = () => {
  const { email } = portfolioData;

  const links = [
    {
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
      Icon: MailIcon,
      detail: 'Preferred for opportunities',
      accentClass: '',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/chaitanya-khurana',
      href: 'https://linkedin.com/in/chaitanya-khurana',
      Icon: LinkedInIcon,
      detail: 'Connect professionally',
      accentClass: 'accent-linkedin',
    },
    {
      label: 'GitHub',
      value: 'github.com/CHAITANYA-2002',
      href: 'https://github.com/CHAITANYA-2002',
      Icon: GitHubIcon,
      detail: 'See the code',
      accentClass: 'accent-github',
    },
  ];

  return (
    <div className="pt-24 pb-48 px-6 bg-[#08080A]">
      <div className="max-w-[1240px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7B27A]" />
            <p className="label translate-y-[1px]">Contact & Collaboration</p>
          </div>
          <h1
            className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.95]"
          >
            Let's build something<br />
            <span className="premium-text italic">worth shipping.</span>
          </h1>
          <p className="text-stone-500 max-w-xl text-lg md:text-xl leading-relaxed font-medium">
            Based in JAIPUR, INDIA. Open to strategic PM engagements, AI product partnerships, and consulting.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_420px] gap-20">
          <div className="flex flex-col gap-16">
            {/* Map & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white tracking-tight uppercase font-mono text-[11px] text-stone-500 tracking-[0.2em]">Base Operations // JAIPUR</h3>
                <span className="text-[10px] font-mono text-[#C7B27A]">LAT: 26.9124° N, LONG: 75.7873° E</span>
              </div>
              <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-700">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113874.28932785646!2d75.71391696013322!3d26.885447917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db61232b11f07%3A0x2ff2efcdfdc3ae13!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1713524000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </motion.div>

            {/* Contact links */}
            <div className="grid md:grid-cols-2 gap-6">
              {links.map(({ label, value, href, Icon, detail, accentClass }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className={`glass-card p-8 flex flex-col gap-8 no-underline group transition-all duration-500 ${accentClass}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 bg-white/[0.03] border border-white/10 text-stone-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                      <Icon />
                    </div>
                    <span className="text-[10px] font-mono text-stone-600 group-hover:text-[#C7B27A]">{label}</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-2">{value}</p>
                    <p className="text-xs text-stone-600 group-hover:text-stone-400 truncate">{detail}</p>
                  </div>
                </motion.a>
              ))}

              {/* WhatsApp Emerald */}
              <motion.a
                href="https://wa.me/917976989699"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="col-span-1 md:col-span-2 group relative overflow-hidden flex items-center p-8 rounded-[2rem] bg-[#121212] border border-[#25D36640] hover:border-[#25D366] transition-all duration-500 no-underline"
              >
                <div className="absolute inset-0 bg-[#25D36605] group-hover:bg-[#25D36610] transition-colors" />
                <div className="relative flex items-center justify-between w-full">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#25D36620] border border-[#25D36650] flex items-center justify-center text-[#25D366] group-hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all">
                      <WhatsApp />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Direct Secure Line</h4>
                      <p className="text-stone-500 text-sm font-medium">WhatsApp Business Messaging</p>
                    </div>
                  </div>
                  <div className="text-[#25D366] opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all font-mono text-xs font-bold tracking-widest hidden sm:block">
                    OPERATIONAL // CONNECTING...
                  </div>
                </div>
              </motion.a>
            </div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              action="https://formspree.io/f/mqakvknl"
              method="POST"
              className="glass-card p-8 flex flex-col gap-6"
            >
              <div className="flex flex-col gap-2">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="input-field"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your@email.com"
                  className="input-field"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="label">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="What are you building?"
                  className="input-field resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
              </button>
              <p className="text-xs text-gray-600 text-center">
                Secure. Sent via Formspree.
              </p>
            </form>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
