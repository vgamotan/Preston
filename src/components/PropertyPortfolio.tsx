import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  Search, 
  SlidersHorizontal,
  ChevronRight,
  MessageSquare,
  FileDown,
  Mail,
  ThumbsUp,
  X,
  MapPin,
  Flame,
  Layout,
  RefreshCw,
  Sparkles
} from 'lucide-react';
import { PROPERTIES } from '../data';
import { Property } from '../types';

interface PropertyPortfolioProps {
  initialFilters?: {
    category?: string | null;
    transaction?: string;
    minPower?: number;
    search?: string;
  };
  openWhatsAppChat: (message?: string) => void;
}

export default function PropertyPortfolio({ initialFilters, openWhatsAppChat }: PropertyPortfolioProps) {
  
  // Category filter state
  const [categories, setCategories] = useState({
    'Food Factory': true,
    'Central Kitchen': true,
    'Cold Storage': true
  });

  // Transaction radio state
  const [transactionType, setTransactionType] = useState('All Listings');

  // Specs filters
  const [minPower, setMinPower] = useState(60);
  const [sfaOnly, setSfaOnly] = useState(false);
  const [loadingBayAccess, setLoadingBayAccess] = useState(false);

  // Search filter
  const [searchQuery, setSearchQuery] = useState('');

  // Selected property for dynamic spec details modal
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // PDF download modal state
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [pdfEmail, setPdfEmail] = useState('');
  const [pdfSuccess, setPdfSuccess] = useState(false);

  // Handle initial active filter overrides from other tabs/triggers
  useEffect(() => {
    if (initialFilters) {
      if (initialFilters.category) {
        setCategories({
          'Food Factory': initialFilters.category === 'Food Factory',
          'Central Kitchen': initialFilters.category === 'Central Kitchen',
          'Cold Storage': initialFilters.category === 'Cold Storage'
        });
      }
      if (initialFilters.transaction) {
        setTransactionType(initialFilters.transaction);
      }
      if (initialFilters.minPower) {
        setMinPower(initialFilters.minPower);
      }
      if (initialFilters.search) {
        setSearchQuery(initialFilters.search);
      }
    }
  }, [initialFilters]);

  // Clean Reset Filters action
  const handleResetFilters = () => {
    setCategories({
      'Food Factory': true,
      'Central Kitchen': true,
      'Cold Storage': true
    });
    setTransactionType('All Listings');
    setMinPower(60);
    setSfaOnly(false);
    setLoadingBayAccess(false);
    setSearchQuery('');
  };

  // Toggle checklist category helpers
  const handleCategoryChange = (key: 'Food Factory' | 'Central Kitchen' | 'Cold Storage') => {
    setCategories(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter application calculation
  const filteredProperties = PROPERTIES.filter(prop => {
    // Category check
    const isCategorySelected = categories[prop.type];
    if (!isCategorySelected) return false;

    // Transaction check
    if (transactionType !== 'All Listings') {
      if (transactionType === 'For Sale' && prop.transaction !== 'For Sale') return false;
      if (transactionType === 'For Lease' && prop.transaction !== 'For Lease') return false;
    }

    // Min power check
    if (prop.power < minPower) return false;

    // SFA Target check
    if (sfaOnly && !prop.sfaApproved) return false;

    // Loading bay check
    if (loadingBayAccess && !prop.loadingBay) return false;

    // Search query check
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = prop.title.toLowerCase().includes(q);
      const matchRegion = prop.region.toLowerCase().includes(q);
      const matchTag = prop.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchRegion && !matchTag) return false;
    }

    return true;
  });

  const handlePdfSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!pdfEmail) return;
    setPdfSuccess(true);
    setTimeout(() => {
      setIsPdfModalOpen(false);
      setPdfSuccess(false);
      setPdfEmail('');
    }, 2500);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 md:py-12 px-4 md:px-12 max-w-7xl mx-auto space-y-8">
      
      {/* Portfolio Title & Subtitle */}
      <header className="space-y-3">
        <h1 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
          Industrial Property Portfolio
        </h1>
        <p className="font-sans text-slate-600 text-[17px] leading-relaxed max-w-3xl">
          Expertly curated selection of SFA-approved food factories, central kitchens, and cold storage facilities in Singapore. Use the technical filter sidebar to isolate targets.
        </p>
      </header>

      {/* Main filter sidebar & property grid hybrid */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sticky Filter Sidebar styled exactly like screenshot Page-3 */}
        <aside className="w-full lg:w-72 flex-shrink-0 select-none">
          <div className="sticky top-24 bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-6">
            
            {/* SEARCH INPUT REDUX inside sidebar */}
            <div className="space-y-1.5 focus-within:text-red-700">
              <label className="font-sans font-bold text-[10px] text-slate-400 uppercase tracking-widest block">Search Title / Location</label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-450" />
                <input
                  type="text"
                  placeholder="e.g. Mandai, Tuas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm text-slate-800 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-red-650"
                />
              </div>
            </div>

            {/* CATEGORY SEC */}
            <div>
              <h3 className="font-sans font-bold text-[11px] text-orange-650 uppercase tracking-widest mb-3">Category</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={categories['Food Factory']}
                    onChange={() => handleCategoryChange('Food Factory')}
                    className="w-4 h-4 rounded border-slate-300 text-red-650 focus:ring-red-650"
                  />
                  <span className="font-sans font-medium text-sm text-slate-700 group-hover:text-red-650 transition-colors">Food Factory</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={categories['Central Kitchen']}
                    onChange={() => handleCategoryChange('Central Kitchen')}
                    className="w-4 h-4 rounded border-slate-300 text-red-650 focus:ring-red-650"
                  />
                  <span className="font-sans font-medium text-sm text-slate-700 group-hover:text-red-650 transition-colors">Central Kitchen</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={categories['Cold Storage']}
                    onChange={() => handleCategoryChange('Cold Storage')}
                    className="w-4 h-4 rounded border-slate-300 text-red-650 focus:ring-red-650"
                  />
                  <span className="font-sans font-medium text-sm text-slate-700 group-hover:text-red-650 transition-colors">Cold Storage</span>
                </label>
              </div>
            </div>

            <div className="h-px bg-slate-100"></div>

            {/* TRANSACTION TYPE */}
            <div>
              <h3 className="font-sans font-bold text-[11px] text-orange-650 uppercase tracking-widest mb-3">Transaction</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="txnType"
                    checked={transactionType === 'All Listings'}
                    onChange={() => setTransactionType('All Listings')}
                    className="w-4 h-4 border-slate-300 text-red-650 focus:ring-red-650"
                  />
                  <span className="font-sans font-medium text-sm text-slate-700 group-hover:text-red-650 transition-colors">All Listings</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="txnType"
                    checked={transactionType === 'For Sale'}
                    onChange={() => setTransactionType('For Sale')}
                    className="w-4 h-4 border-slate-300 text-red-650 focus:ring-red-650"
                  />
                  <span className="font-sans font-medium text-sm text-slate-700 group-hover:text-red-650 transition-colors">For Sale</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="txnType"
                    checked={transactionType === 'For Lease'}
                    onChange={() => setTransactionType('For Lease')}
                    className="w-4 h-4 border-slate-300 text-red-650 focus:ring-red-650"
                  />
                  <span className="font-sans font-medium text-sm text-slate-700 group-hover:text-red-650 transition-colors">For Lease</span>
                </label>
              </div>
            </div>

            <div className="h-px bg-slate-100"></div>

            {/* TECHNICAL SPECS */}
            <div className="space-y-4">
              <h3 className="font-sans font-bold text-[11px] text-orange-650 uppercase tracking-widest">Technical Specs</h3>
              
              {/* Range Power bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-500 font-medium">Min Power (Amp)</span>
                  <span className="text-red-700 font-bold font-mono">{minPower}A</span>
                </div>
                <input
                  type="range"
                  min="60"
                  max="1000"
                  step="20"
                  value={minPower}
                  onChange={(e) => setMinPower(parseInt(e.target.value))}
                  className="w-full accent-red-650 bg-slate-100 rounded-lg cursor-pointer h-1.5"
                />
              </div>

              {/* Extra check gates */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={sfaOnly}
                    onChange={() => setSfaOnly(!sfaOnly)}
                    className="w-4 h-4 rounded border-slate-300 text-red-650 focus:ring-red-650"
                  />
                  <span className="font-sans font-medium text-sm text-slate-700 group-hover:text-red-650 transition-colors">SFA-Approved Only</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={loadingBayAccess}
                    onChange={() => setLoadingBayAccess(!loadingBayAccess)}
                    className="w-4 h-4 rounded border-slate-300 text-red-650 focus:ring-red-650"
                  />
                  <span className="font-sans font-medium text-sm text-slate-700 group-hover:text-red-650 transition-colors">Loading Bay Access</span>
                </label>
              </div>
            </div>

            {/* Reset Filters trigger */}
            <button
              onClick={handleResetFilters}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-sans font-semibold text-xs tracking-wider rounded-xl transition-colors cursor-pointer mt-2 text-center"
            >
              Reset Filters
            </button>
          </div>
        </aside>

        {/* Gallery Grid Section */}
        <div className="flex-1 space-y-6">
          
          <div className="flex justify-between items-center text-xs text-slate-400 font-medium select-none px-1">
            <span>Showing <strong className="text-slate-700 font-sans">{filteredProperties.length}</strong> qualified units in catalog</span>
            {filteredProperties.length < PROPERTIES.length && (
              <span className="text-red-650 font-sans flex items-center gap-1">
                <span>Active Filters configured</span>
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProperties.map((prop, idx) => (
                <motion.div
                  key={prop.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="bg-white border border-slate-200/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative">
                    {/* Floating badge */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5 z-10 select-none">
                      <span className="bg-orange-700 text-white font-sans font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                        {prop.badge || prop.transaction.toUpperCase()}
                      </span>
                      {prop.sfaApproved && (
                        <span className="bg-[#1A5C5C] text-white font-sans font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          SFA APPROVED
                        </span>
                      )}
                    </div>

                    {/* Image */}
                    <div className="h-56 relative overflow-hidden bg-slate-100 select-none">
                      <img
                        alt={prop.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        src={prop.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      
                      {/* Price in overlay */}
                      <span className="absolute bottom-4 left-4 text-white text-lg font-bold font-sans drop-shadow-md">
                        {prop.priceFormatted}
                      </span>
                    </div>

                    {/* Specifications Body */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-1">
                        <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#1A5C5C]">
                          {prop.type}
                        </span>
                        <h2 className="font-sans text-lg font-bold text-slate-800 tracking-tight leading-snug">
                          {prop.title}
                        </h2>
                      </div>

                      {/* Power and loading dual columns matching mockup page-3 exactly */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#F7F5F0] p-3 rounded-xl border-l-4 border-[#fc820c]">
                          <span className="font-sans font-bold text-[9px] text-slate-400 block tracking-widest uppercase">POWER</span>
                          <strong className="text-slate-800 text-sm font-bold font-sans block mt-1">{prop.powerFormatted}</strong>
                        </div>

                        {prop.ceiling && (
                          <div className="bg-[#F7F5F0] p-3 rounded-xl border-l-4 border-[#fc820c]">
                            <span className="font-sans font-bold text-[9px] text-slate-400 block tracking-widest uppercase">CEILING</span>
                            <strong className="text-slate-800 text-sm font-bold font-sans block mt-1">{prop.ceiling}</strong>
                          </div>
                        )}

                        {prop.loading && (
                          <div className="bg-[#F7F5F0] p-3 rounded-xl border-l-4 border-[#fc820c]">
                            <span className="font-sans font-bold text-[9px] text-slate-400 block tracking-widest uppercase font-mono">LOADING</span>
                            <strong className="text-slate-800 text-sm font-bold font-sans block mt-1">{prop.loading}</strong>
                          </div>
                        )}

                        {prop.temp && (
                          <div className="bg-[#F7F5F0] p-3 rounded-xl border-l-4 border-[#fc820c]">
                            <span className="font-sans font-bold text-[9px] text-slate-400 block tracking-widest uppercase">TEMP</span>
                            <strong className="text-slate-800 text-sm font-bold font-sans block mt-1">{prop.temp}</strong>
                          </div>
                        )}
                      </div>

                      <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
                        <MapPin className="w-3.5 h-3.5 text-red-650" />
                        <span>Address/Zone range:</span>
                        <strong className="text-slate-800">{prop.region} Area, Singapore</strong>
                      </div>
                    </div>
                  </div>

                  {/* Specification controls */}
                  <div className="p-6 pt-0 space-y-2">
                    <button
                      onClick={() => openWhatsAppChat(`Hi Preston, I would like to request technical specifications, layouts, and SFA guidelines for: ${prop.title}`)}
                      className="flex items-center justify-center gap-2 w-full py-3.5 bg-red-650 text-white font-sans font-bold text-sm rounded-xl hover:bg-red-700 hover:shadow-md transition-all active:scale-98 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>WhatsApp for Specs</span>
                    </button>
                    
                    <button
                      onClick={() => setSelectedProperty(prop)}
                      className="w-full text-center text-xs font-sans font-bold text-slate-500 hover:text-slate-700 py-1"
                    >
                      View Advanced Regulatory Checklist
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Specialist CTA placeholder item exactly like requested design Page-3 last item */}
              <motion.div
                layout
                className="bg-white border-2 border-dashed border-slate-200/90 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-5"
              >
                <div className="w-14 h-14 bg-red-50 text-red-650 rounded-full flex items-center justify-center shadow-inner">
                  <Layout className="w-6 h-6" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-lg text-slate-800">
                    10+ More Specialist Listings Available
                  </h3>
                  <p className="font-sans text-sm text-slate-500 leading-relaxed">
                    Request our comprehensive active spreadsheet detailing unlisted off-market units across western and eastern zones.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPdfModalOpen(true)}
                  className="px-6 py-3 border-2 border-red-650 text-red-700 hover:bg-red-50 font-sans font-bold text-xs rounded-xl transition-all cursor-pointer shadow-sm active:scale-95 flex items-center gap-2"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Portfolio PDF</span>
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {filteredProperties.length === 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center space-y-4">
              <RefreshCw className="w-8 h-8 text-slate-350 animate-spin mx-auto" />
              <div className="space-y-1">
                <p className="font-sans font-bold text-base text-slate-800">No properties match these filters.</p>
                <p className="font-sans text-sm text-slate-500">
                  Try clearing your search query or enabling Central Kitchen & Food Factory categories.
                </p>
              </div>
              <button
                onClick={handleResetFilters}
                className="bg-slate-900 text-white font-sans font-bold text-xs py-2.5 px-6 rounded-xl cursor-pointer"
              >
                Reset Filter Overrides
              </button>
            </div>
          )}

        </div>
      </div>

      {/* PDF Download slide-over modal simulator */}
      <AnimatePresence>
        {isPdfModalOpen && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full scroll-smooth shadow-2xl relative"
            >
              <button 
                onClick={() => setIsPdfModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-red-55 rounded-full flex items-center justify-center mx-auto text-red-650">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                  <h3 className="font-sans font-bold text-xl text-slate-900">Download Portfolio Brochure</h3>
                  <p className="font-sans text-sm text-slate-500">
                    Get instantly the full, unlisted food-grade spreadsheet complete with SFA zoning classifications.
                  </p>
                </div>

                {pdfSuccess ? (
                  <motion.div 
                    initial={{ scale: 0.9 }} 
                    animate={{ scale: 1 }}
                    className="bg-green-50 text-green-800 p-4 rounded-xl text-center space-y-2"
                  >
                    <ThumbsUp className="w-8 h-8 text-green-650 mx-auto" />
                    <p className="font-sans font-bold text-sm">Download link is sent successfully!</p>
                    <p className="text-xs">Please check your inbox at {pdfEmail}</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handlePdfSubmit} className="space-y-4">
                    <div className="space-y-1.5 text-left">
                      <label className="font-sans font-bold text-[10px] uppercase text-slate-600">Your Work Email address</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={pdfEmail}
                          onChange={(e) => setPdfEmail(e.target.value)}
                          placeholder="e.g. director@foodlogistics.com"
                          className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-650 text-slate-800"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-red-650 hover:bg-red-700 text-white font-sans font-bold text-sm tracking-wide rounded-xl shadow-md transition-colors cursor-pointer"
                    >
                      Email Me the Spreadsheet Guide
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Advanced Regulatory Checklist Modal for Single Property selection */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl p-6 md:p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
            >
              <button 
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-sans font-bold text-red-650 uppercase tracking-widest block">SFA / NEA Compliance Specification</span>
                  <h3 className="font-sans font-bold text-xl text-slate-900 leading-tight mt-0.5">{selectedProperty.title}</h3>
                </div>

                {/* Grid checklist highlights */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3 text-sm text-slate-700 text-left">
                  <h4 className="font-sans font-bold text-xs uppercase text-slate-500 tracking-wider">Compliance Checklist Verification:</h4>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Unidirectional personnel flow capability:</strong> Yes, layout supports complete clean-to-raw separation paths smoothly.</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Flooring finish constraints:</strong> Coated in heavy-duty commercial anti-slip polyurethane coving grade.</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Minimum slab heights:</strong> Approved at {selectedProperty.ceiling || '6.0m'} ceiling, compliant for multi-tier exhaust.</span>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className={`${selectedProperty.loadingBay ? 'text-green-600' : 'text-orange-500'}`}>
                      {selectedProperty.loadingBay ? '✓' : '⚠'}
                    </span>
                    <span>
                      <strong>Container loading options:</strong> {selectedProperty.loadingBay ? 'Equipped with heavy hydraulic loading dock lifts.' : 'Ramp level or ground-access delivery bays.'}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-slate-500 text-xs text-center leading-relaxed">
                    * The regulatory clearances for SFA manufacturing codes can fluctuate. Preston Soon provides 1-to-1 site walkthrough consulting prior to tenure.
                  </p>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        openWhatsAppChat(`Hi Preston, I am reviewing the SFA compliance check list for: ${selectedProperty.title}. Let us arrange a 15-minute consultation briefing.`);
                        setSelectedProperty(null);
                      }}
                      className="flex-1 py-3 bg-red-650 hover:bg-red-700 text-white font-sans font-bold text-xs tracking-wider rounded-xl cursor-pointer text-center"
                    >
                      Book Walkthrough Tour
                    </button>
                    <button
                      onClick={() => setSelectedProperty(null)}
                      className="py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans font-bold text-xs rounded-xl cursor-pointer"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
