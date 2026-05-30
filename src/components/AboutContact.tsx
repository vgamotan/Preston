import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  MessageSquare, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Handshake, 
  Zap, 
  Sparkles,
  Users,
  Compass
} from 'lucide-react';

interface AboutContactProps {
  openWhatsAppChat: (message?: string) => void;
}

export default function AboutContact({ openWhatsAppChat }: AboutContactProps) {
  
  // Custom states for BNI referral / consult form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [bniChapter, setBniChapter] = useState('');
  const [region, setRegion] = useState('All Regions');
  const [projectType, setProjectType] = useState('Central Kitchen');
  const [bSupply, setBSupply] = useState('150A');
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmissionSuccess(true);
    
    // Auto message for WhatsApp after standard form fill
    setTimeout(() => {
      const whatsappMsg = `Hi Preston, my name is ${name} ${bniChapter ? `from BNI ${bniChapter}` : ''}. I am interested in exploring a ${projectType} in ${region} with ${bSupply} supply. Let us discuss regulatory requirements!`;
      openWhatsAppChat(whatsappMsg);
      setSubmissionSuccess(false);
      setName('');
      setEmail('');
      setBniChapter('');
    }, 2000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 md:py-16 px-4 md:px-12 max-w-7xl mx-auto space-y-12">
      
      {/* Title */}
      <header className="space-y-3 text-center md:text-left">
        <span className="font-sans font-bold text-xs uppercase tracking-wider text-red-700">Preston Soon | Consultant Profile</span>
        <h1 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Consultation & Specialist Bio
        </h1>
        <p className="font-sans text-slate-600 text-[17px] leading-relaxed max-w-2xl">
          Get in touch with Singapore’s dedicated expert for food manufacturing licenses, cold chain logistics layouts, and high-spec industrial assets.
        </p>
      </header>

      {/* Grid containing Preston biography on left and referral planner on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Profile Details Block */}
        <div className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200/60 shadow-sm lg:col-span-7 space-y-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
          
          {/* Headshot section */}
          <div className="w-44 h-56 rounded-2xl overflow-hidden relative border-4 border-white shadow-lg shrink-0 select-none bg-slate-100">
            <img 
              alt="Preston Soon Specialist" 
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMPs2h8Y_H0chSaafguQxL11ZX-8uMUf2gwqdgQsdCGme9SdyI9SNcvT1lwZeY6po7tUpoarj1g7K2wpBhzU8kg4dS9D0ZC0RxKZCNe1x4b5Uckd1T2p41IAgNHuQzzKna8b2qAWUL_QEvwk-5dMC1g-Z8zbq6gc3YdEWHCd7-Fju1ZdFIrktjfdVzva7ynXm9b01FyfzbV7OinXWGz-UzAU-RZvFLNg9XiVJnfTL-30gP59h25Z1S27d-8mETIuXdX7Y5spX-T5IM" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-950/40 via-transparent to-transparent"></div>
          </div>

          <div className="space-y-6 flex-1 text-center md:text-left">
            <div className="space-y-1">
              <h2 className="font-sans text-2xl font-bold text-slate-900">Preston Soon</h2>
              <p className="font-sans text-red-750 font-bold text-sm tracking-wide uppercase">Premier Food-Grade Industrial Specialist</p>
              <div className="flex justify-center md:justify-start gap-1 items-center text-xs text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-red-650" />
                <span>Operating Island-wide, Singapore HQ</span>
              </div>
            </div>

            <p className="font-sans text-sm text-slate-600 leading-relaxed">
              With years of hands-on expertise navigating Singapore Food Agency (SFA) licensing codes, floor capacities, power supply subdivisions, and waste management setups, Preston Soon is the first call for companies seeking to scale culinary production, build cold-chain storage hubs, or construct large-scale central kitchens.
            </p>

            {/* BNI Specific Block highlighting BNI principles */}
            <div className="p-4 bg-orange-50/50 border-l-4 border-orange-650 rounded-r-xl text-left space-y-2">
              <div className="flex items-center gap-2 text-orange-950 font-sans font-bold text-xs tracking-wider uppercase">
                <Users className="w-4 h-4 text-orange-700" />
                <span>BNI Chapter Referral Network</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                As a focused industrial property representative within the BNI enterprise circle, Preston prides himself on upholding absolute transparency, instant referral clearances, and premium "Givers Gain" cooperation.
              </p>
            </div>

            {/* Direct coordinate links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-sans text-left border-t border-slate-100 pt-6">
              <a 
                href="tel:+6588033890" 
                className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 transition-colors text-slate-700 hover:text-slate-950"
              >
                <Phone className="w-4 h-4 text-red-650 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">Call directly</span>
                  <strong>+65 8803 3890</strong>
                </div>
              </a>

              <a 
                href="mailto:preston.soon@industrialspace.sg" 
                className="flex items-center gap-3 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl border border-slate-100 transition-colors text-slate-700 hover:text-slate-950"
              >
                <Mail className="w-4 h-4 text-red-650 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">Inquiry Email</span>
                  <strong>preston.soon@industrial.sg</strong>
                </div>
              </a>
            </div>
          </div>
          
        </div>

        {/* Project planner and compliance scheduler */}
        <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/60 shadow-lg lg:col-span-5 space-y-6">
          <div className="space-y-1.5 text-center lg:text-left select-none">
            <h3 className="font-sans font-bold text-lg text-slate-900 flex items-center justify-center lg:justify-start gap-1">
              <span>SFA Compliance Project Planner</span>
              <Sparkles className="w-4 h-4 text-red-650 shrink-0" />
            </h3>
            <p className="font-sans text-xs text-slate-500">
              Complete the quick brief below to automatically compile relevant units and guidelines before your WhatsApp briefing session.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submissionSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="bg-green-50 p-8 rounded-2xl text-center space-y-4 text-green-800"
              >
                <CheckCircle2 className="w-12 h-12 text-green-650 mx-auto animate-bounce" />
                <div className="space-y-1.5">
                  <p className="font-sans font-bold text-base">Planner compiled successfully!</p>
                  <p className="text-xs text-slate-600 max-w-xs mx-auto">
                    Initiating secure WhatsApp integration to forward your custom search specifications directly to Preston soon...
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {/* Name */}
                <div className="space-y-1">
                  <label className="font-sans font-bold text-[10px] uppercase text-slate-500 tracking-wider">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Marcus Lim (F&B Director)"
                    className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-650 bg-slate-50 text-slate-800 font-sans"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* BNI CHAPTER IF ANY */}
                  <div className="space-y-1">
                    <label className="font-sans font-bold text-[10px] uppercase text-slate-500 tracking-wider">BNI Chapter (Optional)</label>
                    <input
                      type="text"
                      value={bniChapter}
                      onChange={(e) => setBniChapter(e.target.value)}
                      placeholder="e.g. BNI Synergy"
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-650 bg-slate-50 text-slate-800 font-sans"
                    />
                  </div>

                  {/* PROJECT TYPE */}
                  <div className="space-y-1">
                    <label className="font-sans font-bold text-[10px] uppercase text-slate-500 tracking-wider">Project Type</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-650 bg-slate-50 text-slate-800 font-sans"
                    >
                      <option>Central Kitchen</option>
                      <option>Food Factory</option>
                      <option>Cold Storage</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Target Zone */}
                  <div className="space-y-1">
                    <label className="font-sans font-bold text-[10px] uppercase text-slate-500 tracking-wider">Target Region</label>
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-650 bg-slate-50 text-slate-800 font-sans"
                    >
                      <option>All Regions</option>
                      <option>Mandai Area</option>
                      <option>Tuas South</option>
                      <option>Bedok Area</option>
                      <option>woodlands Hub</option>
                      <option>Senoko complex</option>
                    </select>
                  </div>

                  {/* Power Rating */}
                  <div className="space-y-1">
                    <label className="font-sans font-bold text-[10px] uppercase text-slate-500 tracking-wider">Required Inbound Power</label>
                    <select
                      value={bSupply}
                      onChange={(e) => setBSupply(e.target.value)}
                      className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-red-650 bg-slate-50 text-slate-800 font-sans"
                    >
                      <option>100A supply</option>
                      <option>150A supply</option>
                      <option>200A 3-Phase</option>
                      <option>400A heavy</option>
                      <option>500A+ Substation</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-red-650 hover:bg-red-700 text-white font-sans font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transform active:scale-98 transition-all hover:shadow-lg mt-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 fill-white" />
                  <span>Submit & Clear through WhatsApp</span>
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
