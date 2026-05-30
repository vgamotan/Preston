import { Menu, X, MessageSquare, ShieldCheck, Handshake, Landmark } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'portfolio' | 'insights' | 'about_contact';
  setActiveTab: (tab: 'home' | 'portfolio' | 'insights' | 'about_contact') => void;
  openInquiryModal: () => void;
}

export default function Navbar({ activeTab, setActiveTab, openInquiryModal }: NavbarProps) {
  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-white dark:bg-slate-905 border-b border-slate-200 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center h-20 px-4 md:px-12 max-w-7xl mx-auto">
          {/* Logo */}
          <button 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-2 cursor-pointer focus:outline-none"
            id="nav-logo"
          >
            <div className="flex items-center justify-center p-2 rounded-lg bg-red-50 text-red-650">
              <span className="font-sans font-bold text-lg text-red-700 tracking-wider">FS</span>
            </div>
            <span className="font-sans text-xl md:text-2xl font-bold text-red-700 tracking-tight">
              Food-Grade <span className="font-light text-slate-800">Specialist</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`font-sans font-medium text-[15px] pb-1 transition-all focus:outline-none cursor-pointer ${
                activeTab === 'portfolio'
                  ? 'text-red-700 border-b-2 border-red-700 font-bold'
                  : 'text-slate-600 hover:text-red-700 border-b-2 border-transparent'
              }`}
              id="nav-portfolio"
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab('insights')}
              className={`font-sans font-medium text-[15px] pb-1 transition-all focus:outline-none cursor-pointer ${
                activeTab === 'insights'
                  ? 'text-red-700 border-b-2 border-red-700 font-bold'
                  : 'text-slate-600 hover:text-red-700 border-b-2 border-transparent'
              }`}
              id="nav-insights"
            >
              Insights
            </button>
            <button
              onClick={() => setActiveTab('about_contact')}
              className={`font-sans font-medium text-[15px] pb-1 transition-all focus:outline-none cursor-pointer ${
                activeTab === 'about_contact'
                  ? 'text-red-700 border-b-2 border-red-700 font-bold'
                  : 'text-slate-600 hover:text-red-700 border-b-2 border-transparent'
              }`}
              id="nav-about-contact"
            >
              Consultation & About
            </button>
            
            <button
              onClick={openInquiryModal}
              className="bg-red-650 text-white hover:bg-red-700 transition-all font-sans font-semibold text-sm px-6 py-3 rounded-lg flex items-center gap-2 active:scale-95 duration-150 transform hover:shadow-md cursor-pointer"
              id="nav-cta-whatsapp"
            >
              <MessageSquare className="w-4 h-4 fill-white text-white" />
              WhatsApp Inquiry
            </button>
          </div>

          {/* Mobile Hamburguer to trigger consultation tab */}
          <button 
            onClick={() => setActiveTab('about_contact')}
            className="md:hidden text-red-700 p-2 focus:outline-none"
            id="mobile-menu-trigger"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Bottom Navigation Bar styled exactly like the screenshot */}
      <nav className="fixed bottom-0 left-0 w-full bg-[#fcfdfe] border-t border-slate-100 flex justify-around items-center py-2 px-1 md:hidden z-40 shadow-xl">
        <button
          onClick={() => setActiveTab('portfolio')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-all ${
            activeTab === 'portfolio'
              ? 'bg-orange-100/80 text-orange-850 font-semibold'
              : 'text-slate-500'
          }`}
          id="m-nav-portfolio"
        >
          <span className="text-[20px] leading-tight">🏢</span>
          <span className="text-[10px] uppercase font-bold tracking-wider mt-1">Portfolio</span>
        </button>
        
        <button
          onClick={openInquiryModal}
          className="flex flex-col items-center justify-center p-1 text-slate-500"
          id="m-nav-inquiry"
        >
          <span className="text-[20px] leading-tight flex items-center">💬</span>
          <span className="text-[10px] uppercase font-bold tracking-wider mt-1">Inquiry</span>
        </button>

        <button
          onClick={() => setActiveTab('insights')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-all ${
            activeTab === 'insights'
              ? 'bg-red-100 text-red-800 font-semibold'
              : 'text-slate-500'
          }`}
          id="m-nav-insights"
        >
          <span className="text-[20px] leading-tight">📈</span>
          <span className="text-[10px] uppercase font-bold tracking-wider mt-1">Insights</span>
        </button>

        <button
          onClick={() => setActiveTab('about_contact')}
          className={`flex flex-col items-center justify-center py-1 px-3 rounded-lg transition-all ${
            activeTab === 'about_contact'
              ? 'bg-red-50 text-red-700'
              : 'text-slate-500'
          }`}
          id="m-nav-contact"
        >
          <span className="text-[20px] leading-tight">📞</span>
          <span className="text-[10px] uppercase font-bold tracking-wider mt-1">Contact</span>
        </button>
      </nav>
    </>
  );
}
