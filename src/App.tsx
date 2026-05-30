import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  VolumeX,
  Volume2,
  Mail,
  Zap,
  Phone
} from 'lucide-react';

import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PropertyPortfolio from './components/PropertyPortfolio';
import InsightsHub from './components/InsightsHub';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

export default function App() {
  
  // Tab controller state
  const [activeTab, setActiveTab] = useState<'home' | 'portfolio' | 'insights' | 'about_contact'>('home');
  
  // Portfolio filter router state (allows dashboard finder to pass states to Portfolio)
  const [portfolioFilters, setPortfolioFilters] = useState<{
    category?: string | null;
    transaction?: string;
    minPower?: number;
    search?: string;
  } | undefined>(undefined);

  // Insights Hub deep-link route state (allows preview items to jump straight to reading specific guide)
  const [targetArticleId, setTargetArticleId] = useState<string | null>(null);

  // Inquiry modal states
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [prefMsgType, setPrefMsgType] = useState('Schedule Walkthrough Tour');
  const [userInquiryText, setUserInquiryText] = useState('');
  const [userInquiryEmail, setUserInquiryEmail] = useState('');
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  // Redirection routers
  const handleNavigateToPortfolio = (filters?: any) => {
    setPortfolioFilters(filters);
    setActiveTab('portfolio');
    // Scroll smoothly to top on navigation block
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToInsights = (articleId?: string) => {
    if (articleId) {
      setTargetArticleId(articleId);
    } else {
      setTargetArticleId(null);
    }
    setActiveTab('insights');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToContact = () => {
    setActiveTab('about_contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Safe global WhatsApp dispatch helper
  const handleOpenWhatsApp = (customMessage?: string) => {
    const baseMessage = customMessage || "Hi Preston, I am exploring specialized food-grade industrial properties on the portal.";
    const encoded = encodeURIComponent(baseMessage);
    const whatsappUrl = `https://wa.me/6588033890?text=${encoded}`;
    
    // Create hidden anchor and click it to bypass sandboxing issues safely, or trigger fallback popup layout
    const a = document.createElement('a');
    a.href = whatsappUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Direct Submission on Form inside Inquiry Overlay
  const handleInquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitSuccess(true);
    
    setTimeout(() => {
      // Build tailored whatsapp post-redirect message
      const completeMsg = `Hi Preston, I am requesting details for [${prefMsgType}]. Prefiled message: ${userInquiryText || 'Please contact me regarding current active SFA-approved units.'} Email: ${userInquiryEmail || 'not provided'}.`;
      handleOpenWhatsApp(completeMsg);
      
      // Reset after launching WhatsApp redirect
      setIsSubmitSuccess(false);
      setIsInquiryOpen(false);
      setUserInquiryText('');
      setUserInquiryEmail('');
    }, 2200);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800 selection:bg-red-100 selection:text-red-800 antialiased">
      
      {/* Dynamic Header navbar navigation component */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={(tab) => {
          setActiveTab(tab);
          // Auto reset target parameters on standard clicks
          if (tab !== 'portfolio') setPortfolioFilters(undefined);
          if (tab !== 'insights') setTargetArticleId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        openInquiryModal={() => setIsInquiryOpen(true)}
      />

      {/* Main screen view router container with transition effects */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full"
          >
            {activeTab === 'home' && (
              <Dashboard 
                onNavigateToPortfolio={handleNavigateToPortfolio}
                onNavigateToInsights={handleNavigateToInsights}
                onNavigateToContact={handleNavigateToContact}
                openWhatsAppChat={handleOpenWhatsApp}
              />
            )}

            {activeTab === 'portfolio' && (
              <PropertyPortfolio 
                initialFilters={portfolioFilters}
                openWhatsAppChat={handleOpenWhatsApp}
              />
            )}

            {activeTab === 'insights' && (
              <InsightsHub 
                initialArticleId={targetArticleId}
                clearInitialArticle={() => setTargetArticleId(null)}
                openWhatsAppChat={handleOpenWhatsApp}
              />
            )}

            {activeTab === 'about_contact' && (
              <AboutContact 
                openWhatsAppChat={handleOpenWhatsApp}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer rendering universally */}
      <Footer 
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        openInquiryModal={() => setIsInquiryOpen(true)}
      />

      {/* Persistent floating action triggers (Styled perfectly corresponding to elite corporate themes) */}
      <div className="fixed bottom-20 md:bottom-6 right-6 flex flex-col gap-3 z-40 select-none">
        
        {/* Floating WhatsApp trigger */}
        <button
          onClick={() => handleOpenWhatsApp("Hi Preston, I am looking for a specialized food-grade industrial property in Singapore. Can we discuss options?")}
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-108 active:scale-95 duration-150 transition-all cursor-pointer group relative flex items-center justify-center border-2 border-white"
          title="Direct WhatsApp"
          id="float-whatsapp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-sans font-bold">
            Chat with Preston
          </span>
        </button>

        {/* Quick Consultation Scheduler Trigger */}
        <button
          onClick={() => setIsInquiryOpen(true)}
          className="bg-red-650 text-white p-4 rounded-full shadow-2xl hover:scale-108 active:scale-95 duration-150 transition-all cursor-pointer group relative flex items-center justify-center border-2 border-white"
          title="Consulation scheduler"
          id="float-scheduler"
        >
          <Sparkles className="w-6 h-6 animate-pulse" />
          <span className="absolute right-14 bg-slate-900 text-white text-xs py-1.5 px-3 rounded-lg shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-sans font-bold">
            Project Consult Form
          </span>
        </button>
      </div>

      {/* Enterprise Inquiry Modal Backdrop overlay */}
      <AnimatePresence>
        {isInquiryOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full relative shadow-2xl border border-slate-100"
            >
              <button 
                onClick={() => setIsInquiryOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 cursor-pointer transition-colors"
                id="close-inquiry-modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                
                {/* Header indicators */}
                <div className="text-center space-y-2 select-none">
                  <div className="inline-flex py-1.5 px-4 bg-red-50 text-red-650 rounded-full font-sans font-bold text-xs uppercase tracking-wider items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Secure Direct Contact Channel</span>
                  </div>
                  
                  <h3 className="font-sans font-bold text-2xl text-slate-900 leading-tight">Request SFA Specification Brief</h3>
                  <p className="font-sans text-xs text-slate-505 text-slate-500">
                    Connect instantly with Preston soon. Fill in your project specifications below to construct a tailored brief.
                  </p>
                </div>

                {isSubmitSuccess ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-green-50 p-6 rounded-2xl text-center space-y-3"
                  >
                    <CheckCircle2 className="w-12 h-12 text-green-650 mx-auto" />
                    <h4 className="font-bold text-green-800 font-sans text-base">Inquiry Prepared Successful!</h4>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                      Opening WhatsApp sandbox channel to dispatch your technical brief... If it doesn't open automatically, look for your browser pop-up permissions or click the manual link.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4 text-left">
                    
                    {/* Prefered message type dropdown */}
                    <div className="space-y-1.5">
                      <label className="font-sans font-bold text-[10px] text-slate-500 uppercase tracking-wider">Inquiry Reason</label>
                      <select
                        value={prefMsgType}
                        onChange={(e) => setPrefMsgType(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 text-slate-800 font-sans text-sm focus:outline-none focus:ring-1 focus:ring-red-650"
                      >
                        <option>Schedule Walkthrough Tour</option>
                        <option>Request SFA Compliance Specifications</option>
                        <option>Reference unlisted off-market units</option>
                        <option>BNI Partner Introduction</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans font-bold text-[10px] text-slate-500 uppercase tracking-wider">Your Work email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={userInquiryEmail}
                          onChange={(e) => setUserInquiryEmail(e.target.value)}
                          placeholder="e.g. facilitymgr@premiumbrands.sg"
                          className="w-full pl-9 pr-3 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-sans text-sm focus:outline-none focus:ring-1 focus:ring-red-650"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-sans font-bold text-[10px] text-slate-500 uppercase tracking-wider">Additional Message Context</label>
                      <textarea
                        rows={3}
                        value={userInquiryText}
                        onChange={(e) => setUserInquiryText(e.target.value)}
                        placeholder="Detail target region, minimum floor capacity, or estimated lease timelines here..."
                        className="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 text-slate-800 font-sans text-sm placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-red-650"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-red-650 hover:bg-red-700 text-white font-sans font-bold text-sm tracking-wide rounded-xl shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                      id="submit-inquiry-modal"
                    >
                      <Send className="w-4 h-4 fill-white" />
                      <span>Generate Technical Brief & Chat</span>
                    </button>

                  </form>
                )}

                {/* Back up manual whatsapp link in case of block */}
                <div className="bg-slate-50 p-4 rounded-xl text-center select-none">
                  <p className="text-slate-400 text-[10px] leading-relaxed">
                    * By submitting, you agree to connect directly with Preston Soon via WhatsApp. You can also bypass this form and 
                    <button 
                      onClick={() => handleOpenWhatsApp("Hi Preston, I am looking to connect regarding specialized BBNI referrals.")}
                      className="text-red-700 font-bold hover:underline ml-1 cursor-pointer"
                    >
                      Chat Directly Now
                    </button>
                  </p>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
