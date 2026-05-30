import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Handshake, 
  Zap, 
  Cpu, 
  Send,
  Download,
  BookOpen,
  ArrowUpRight,
  Compass
} from 'lucide-react';
import { PROPERTIES, INSIGHTS, TESTIMONIALS } from '../data';
import { Property, InsightArticle } from '../types';

interface DashboardProps {
  onNavigateToPortfolio: (initialFilters?: any) => void;
  onNavigateToInsights: (articleId?: string) => void;
  onNavigateToContact: () => void;
  openWhatsAppChat: (message?: string) => void;
}

export default function Dashboard({ 
  onNavigateToPortfolio, 
  onNavigateToInsights, 
  onNavigateToContact,
  openWhatsAppChat 
}: DashboardProps) {
  
  // Testimonial slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Search section state
  const [facilityType, setFacilityType] = useState('All Types');
  const [transaction, setTransaction] = useState('Sale / Lease');
  const [minPower, setMinPower] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for active properties count to show live update on search bar find properties
  const [liveResultsCount, setLiveResultsCount] = useState(PROPERTIES.slice(0, 8).length);

  // Auto slide testimonial every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Live filter properties derived state for search section
  const searchSectionProperties = PROPERTIES.slice(0, 8).filter(prop => {
    const matchesType = facilityType === 'All Types' || prop.type === facilityType;
    const matchesTx = transaction === 'Sale / Lease' || 
                      (transaction === 'For Sale' && prop.transaction === 'For Sale') ||
                      (transaction === 'For Lease' && prop.transaction === 'For Lease');
    const matchesPower = minPower === '' || prop.power >= parseInt(minPower);
    const matchesQuery = searchQuery === '' || 
                         prop.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         prop.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesTx && matchesPower && matchesQuery;
  });

  const handleFindPropertiesClick = () => {
    // Navigate to Portfolio screen passing active filters
    onNavigateToPortfolio({
      category: facilityType !== 'All Types' ? facilityType : null,
      transaction: transaction !== 'Sale / Lease' ? transaction : 'All Listings',
      minPower: minPower !== '' ? parseInt(minPower) : 60,
      search: searchQuery
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50/50 to-white py-16 md:py-24 border-b border-blue-100/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-6">
            {/* Tag/Credential banner */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 rounded-full border border-red-100/50">
              <span className="flex h-2 w-2 rounded-full bg-red-650 animate-pulse"></span>
              <span className="font-sans font-semibold text-xs uppercase tracking-wider">Trusted BNI Partner</span>
            </div>

            <h1 className="font-sans text-3xl md:text-5xl font-bold leading-tight text-slate-900 tracking-tight max-w-2xl">
              Singapore’s Specialist in <span className="text-red-700 font-extrabold relative inline-block">
                Food-Grade
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-red-100 -z-10 rounded"></span>
              </span> Industrial Real Estate.
            </h1>
            
            <p className="font-sans text-lg text-slate-600 leading-relaxed max-w-xl">
              Expert guidance for Food Storage, Cold Rooms, Central Kitchens and Manufacturing properties. Trusted by BNI members and food industry leaders to deliver precision-compliant facilities.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => onNavigateToPortfolio()}
                className="bg-red-650 text-white font-sans font-semibold text-base py-4 px-8 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              >
                View Portfolio
              </button>
              <button 
                onClick={onNavigateToContact}
                className="border-2 border-red-650 text-red-700 bg-white font-sans font-semibold text-base py-4 px-8 rounded-lg hover:bg-red-50 active:scale-95 transition-all duration-150 cursor-pointer"
              >
                Request Consultation
              </button>
            </div>

            {/* Quick stats banner */}
            <div className="grid grid-cols-3 gap-4 pt-6 select-none">
              <div className="border-l-2 border-red-600 pl-3">
                <span className="block text-xl md:text-2xl font-bold text-slate-800">100%</span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">SFA/NEA Targets</span>
              </div>
              <div className="border-l-2 border-red-600 pl-3">
                <span className="block text-xl md:text-2xl font-bold text-slate-800">15+</span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Core Properties</span>
              </div>
              <div className="border-l-2 border-red-600 pl-3">
                <span className="block text-xl md:text-2xl font-bold text-slate-800">20+</span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-medium">Food Brands served</span>
              </div>
            </div>
          </div>

          {/* Right Image with subtle framing shadows and highlights */}
          <div className="flex-1 relative w-full">
            <div className="relative z-10 w-full max-w-lg mx-auto aspect-[4/3] rounded-2xl overflow-hidden border-8 border-white shadow-2xl">
              <img 
                alt="Singapore premier food-grade logistics factory park" 
                className="w-full h-full object-cover select-none"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkF_SNPVsS86Tq6EV070HIocOrTdKKVUCJZwgGgZXt4FHW-l8GMOrKugLbu9gSn-vjZFfS34GEhoKQT-kyIjYy02BEvohhoiljpGVpC1ZJvqdfHikwnJwfbUuknj2KqNV6MDYb5wLH4NoKUiNa-GbBPhJVGYJSfnlb-ZWFP92tob3XULk_h9QEV_e1bNhGMw5APQFB02j-ojH92qTI2Dv_cwUV28oxOTAaKoBvvCdZSuG8Y1mpUbl-wVJcr106jzqnCzzp7ADyqev3"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white font-sans text-sm bg-black/60 backdrop-blur-md py-1 px-3 rounded-full">
                Singapore Industrial Food Complex Area
              </div>
            </div>
            {/* Glowing Accent Orbs */}
            <div className="absolute -bottom-8 -right-8 w-60 h-60 bg-red-600 opacity-15 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-8 -left-8 w-44 h-44 bg-orange-500 opacity-20 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </section>


      {/* Search Food-Grade Properties Section */}
      <section className="py-16 bg-blue-50/40 border-b border-blue-900/5">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="mb-10 text-center space-y-2">
            <h2 className="font-sans text-2xl md:text-3.5xl font-bold text-slate-900">Search Food-Grade Properties</h2>
            <p className="font-sans text-slate-600 text-base max-w-xl mx-auto">
              Filter through our active, SFA-approved database of specialized industrial units instantly.
            </p>
          </div>

          {/* Master Search Widget */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 max-w-5xl mx-auto space-y-4">
            
            {/* Search Query String */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-slate-400 w-5 h-5 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type location, region, name or title (e.g. Mandai, Cold Chain, Bedok)..."
                className="w-full pl-12 pr-4 py-3 placeholder-slate-400 text-slate-800 bg-slate-50 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent font-sans"
              />
            </div>

            {/* Filter Dropdowns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="space-y-1.5">
                <label className="font-sans font-bold text-xs text-slate-500 uppercase tracking-wider block">Facility Type</label>
                <select 
                  value={facilityType}
                  onChange={(e) => setFacilityType(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 text-slate-800 font-sans focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option>All Types</option>
                  <option>Food Factory</option>
                  <option>Cold Storage</option>
                  <option>Central Kitchen</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-sans font-bold text-xs text-slate-500 uppercase tracking-wider block">Transaction</label>
                <select
                  value={transaction}
                  onChange={(e) => setTransaction(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 text-slate-800 font-sans focus:outline-none focus:ring-2 focus:ring-red-600"
                >
                  <option>Sale / Lease</option>
                  <option>For Sale</option>
                  <option>For Lease</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-sans font-bold text-xs text-slate-500 uppercase tracking-wider block">Min Power supply (Amp)</label>
                <input
                  type="number"
                  placeholder="e.g. 100"
                  value={minPower}
                  onChange={(e) => setMinPower(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 p-3 bg-slate-50 text-slate-800 font-sans focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>

              <button 
                onClick={handleFindPropertiesClick}
                className="bg-red-650 hover:bg-red-700 text-white font-sans font-semibold text-base py-3 px-6 rounded-xl shadow-md transition-all active:scale-95 duration-100 flex items-center justify-center gap-2 cursor-pointer w-full h-[50px]"
              >
                <span>Find Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Helper Filter Diagnostics */}
            <div className="flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-100">
              <span>* Live matching properties in preview: <strong className="text-red-700">{searchSectionProperties.length}</strong></span>
              {(searchQuery || facilityType !== 'All Types' || transaction !== 'Sale / Lease' || minPower) && (
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setFacilityType('All Types');
                    setTransaction('Sale / Lease');
                    setMinPower('');
                  }}
                  className="text-red-700 font-medium hover:underline"
                >
                  Clear search overrides
                </button>
              )}
            </div>
          </div>

          {/* Interactive Live Property Results Grid on Home */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <AnimatePresence mode="popLayout">
              {searchSectionProperties.map((prop, index) => (
                <motion.div
                  key={prop.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Image Area */}
                    <div className="aspect-video overflow-hidden relative bg-slate-100 select-none">
                      <img 
                        alt={prop.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={prop.image}
                      />
                      {/* Price tag positioned cleanly over image with absolute bounds */}
                      <span className="absolute bottom-3 left-3 bg-red-650 text-white font-sans font-bold text-sm px-3 py-1 rounded-lg">
                        {prop.priceFormatted}
                      </span>
                    </div>

                    {/* Content Detail Area */}
                    <div className="p-4 space-y-3">
                      <h3 className="font-sans text-[16px] font-bold text-slate-800 leading-snug line-clamp-2">
                        {prop.title}
                      </h3>
                      
                      {/* Technical tag badges */}
                      <div className="flex flex-wrap gap-2">
                        {prop.tags.map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="bg-purple-100/90 text-purple-950 font-sans font-bold text-[10px] px-2 py-0.5 rounded tracking-wide uppercase"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="text-xs text-slate-500 flex items-center gap-1">
                        <span>🗺️ Region:</span>
                        <strong className="text-slate-700">{prop.region}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Operational details card foot */}
                  <div className="p-4 pt-0">
                    <button 
                      onClick={() => onNavigateToPortfolio({ search: prop.title })}
                      className="w-full py-2 bg-slate-50 group-hover:bg-red-50 text-slate-700 group-hover:text-red-700 font-sans font-bold text-xs text-center rounded-lg transition-colors flex items-center justify-center gap-1 cursor-pointer border border-slate-100"
                    >
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}

              {searchSectionProperties.length === 0 && (
                <motion.div 
                  className="col-span-full py-16 bg-white border border-dashed border-slate-200 rounded-2xl text-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-slate-500 font-sans text-base">
                    No properties match your current search constraints under the first page overview.
                  </p>
                  <button 
                    onClick={() => onNavigateToPortfolio()}
                    className="bg-slate-900 text-white font-sans font-bold text-xs py-2 px-4 rounded-lg cursor-pointer"
                  >
                    View All available in Portfolio Tab
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigateToPortfolio()}
              className="text-red-700 font-sans font-bold text-sm tracking-wide inline-flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
            >
              <span>Explore full 15+ properties in advanced portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* Trusted BNI Industrial Specialist Section */}
      <section className="bg-[#f8fafc] py-20 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="bg-white p-8 md:p-16 rounded-3xl shadow-md border border-slate-200/50 flex flex-col items-center text-center space-y-10 relative overflow-hidden">
            
            {/* Top Right absolute badge */}
            <div className="absolute top-0 right-0 bg-red-650 text-white p-4 rounded-bl-3xl shadow-sm">
              <Compass className="w-8 h-8 rotate-12" />
            </div>

            <div className="space-y-4 max-w-3xl">
              <h2 className="font-sans text-2xl md:text-3.5xl font-bold text-slate-900">
                Trusted BNI Industrial Specialist
              </h2>
              <p className="font-sans text-slate-600 text-base leading-relaxed">
                As a dedicated BNI member, Preston Soon upholds the "Givers Gain" philosophy. Our focus is to provide high-integrity referrals and expert consulting for the complex food-grade industrial real estate needs of fellow members and their networks.
              </p>

              {/* Three Pill certifications centered exactly like original wire */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 max-w-xl mx-auto w-full select-none">
                <div className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-100 py-3 px-4 rounded-xl shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#1A5C5C]" />
                  <span className="font-sans font-bold text-xs text-slate-700 tracking-wider">ISO COMPLIANT</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-100 py-3 px-4 rounded-xl shadow-sm">
                  <Handshake className="w-5 h-5 text-[#1A5C5C]" />
                  <span className="font-sans font-bold text-xs text-slate-700 tracking-wider">BNI PARTNER</span>
                </div>

                <div className="flex items-center justify-center gap-2 bg-slate-50 border border-slate-100 py-3 px-4 rounded-xl shadow-sm">
                  <Zap className="w-5 h-5 text-[#1A5C5C]" />
                  <span className="font-sans font-bold text-xs text-slate-700 tracking-wider">FAST TURNOVER</span>
                </div>
              </div>
            </div>

            {/* Carousel slider area for BNI testimonials */}
            <div className="w-full relative max-w-4xl bg-slate-50/50 p-6 md:p-10 rounded-2xl border border-slate-100 mt-12">
              
              {/* Testimonial Quote display */}
              <div className="min-h-[140px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 text-left"
                  >
                    <p className="font-sans italic text-slate-600 text-base md:text-lg leading-relaxed text-center">
                      "{TESTIMONIALS[currentSlide].quote}"
                    </p>
                    <div className="text-center font-sans">
                      <p className="font-bold text-red-700 text-sm tracking-wide uppercase">
                        — {TESTIMONIALS[currentSlide].author}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        {TESTIMONIALS[currentSlide].role}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Dots */}
              <div className="flex justify-center gap-2 mt-8 select-none">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx 
                        ? 'bg-red-700 w-8' 
                        : 'bg-slate-300 hover:bg-slate-400 w-2.5'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={handlePrevSlide}
                className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 bg-white hover:bg-red-50 w-10 h-10 rounded-full shadow-md flex items-center justify-center text-red-700 border border-slate-100 transition-colors focus:outline-none cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={handleNextSlide}
                className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-white hover:bg-red-50 w-10 h-10 rounded-full shadow-md flex items-center justify-center text-red-700 border border-slate-100 transition-colors focus:outline-none cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* Food-Grade Market Insights Preview */}
      <section className="py-20 bg-white border-b border-blue-900/5">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="flex justify-between items-end mb-12">
            <div className="space-y-2">
              <span className="font-sans font-bold text-xs uppercase text-red-700 tracking-widest block">Expert Analysis</span>
              <h2 className="font-sans text-2xl md:text-3.5xl font-bold text-slate-900">Food-Grade Market Insights</h2>
            </div>
            
            <button
              onClick={() => onNavigateToInsights()}
              className="text-red-700 font-sans font-bold text-sm tracking-wide flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
            >
              <span>Explore Insights Hub</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS.slice(0, 3).map((article) => (
              <div 
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm flex flex-col justify-between group hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Article Thumbnail Area */}
                  <div className="aspect-[16/10] overflow-hidden relative select-none">
                    <img 
                      alt={article.title} 
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      src={article.image}
                    />
                    {/* Category Label Overlay */}
                    <span className="absolute top-3 right-3 bg-orange-600 text-white font-sans font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {article.tag}
                    </span>
                  </div>

                  {/* Article Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-sans text-lg font-bold text-slate-800 tracking-tight leading-snug line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 flex justify-between items-center border-t border-slate-50 mt-4">
                  <span className="text-xs text-slate-400 font-medium">{article.readTime}</span>
                  <button 
                    onClick={() => onNavigateToInsights(article.id)}
                    className="text-red-600 hover:text-red-700 font-sans font-bold text-xs inline-flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    <span>Read Guide</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      
      {/* Immersive CTA Block */}
      <section className="bg-[#0A0F1A] py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="font-sans text-3xl font-bold tracking-tight">Ready to find your specialized facility?</h2>
          <p className="font-sans text-slate-350 text-base max-w-xl mx-auto leading-relaxed">
            Connect directly with Preston Soon, Singapore's leading food-grade consultant for target-compliant property briefs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <button 
              onClick={() => openWhatsAppChat("Hi Preston, I am looking for a specialized food-grade industrial facility in Singapore.")}
              className="bg-red-650 hover:bg-red-700 text-white font-sans font-semibold text-sm px-8 py-4 rounded-lg flex items-center justify-center gap-2 transform hover:shadow-lg active:scale-95 duration-100 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 fill-white hover:translate-x-1 transition-transform" />
              <span>WhatsApp Preston</span>
            </button>
            <button 
              onClick={onNavigateToContact}
              className="bg-transparent border border-white/25 hover:bg-white/5 text-white font-sans font-semibold text-sm px-8 py-4 rounded-lg active:scale-95 transition-all cursor-pointer"
            >
              Request E-Brochure
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
