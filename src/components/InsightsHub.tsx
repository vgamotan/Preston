import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Clock, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  Bookmark,
  Share2,
  X,
  Compass
} from 'lucide-react';
import { INSIGHTS } from '../data';
import { InsightArticle } from '../types';

interface InsightsHubProps {
  initialArticleId?: string | null;
  clearInitialArticle: () => void;
  openWhatsAppChat: (message?: string) => void;
}

export default function InsightsHub({ initialArticleId, clearInitialArticle, openWhatsAppChat }: InsightsHubProps) {
  
  // Custom states
  const [selectedCategory, setSelectedCategory] = useState<string>('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Reading state: if an article is active, we expand / modal read it!
  const [readingArticle, setReadingArticle] = useState<InsightArticle | null>(null);

  // Trigger viewing deep article if redirected from another tab's link
  useEffect(() => {
    if (initialArticleId) {
      const match = INSIGHTS.find(art => art.id === initialArticleId);
      if (match) {
        setReadingArticle(match);
      }
      clearInitialArticle();
    }
  }, [initialArticleId]);

  // Clean filters computation
  const filteredArticles = INSIGHTS.filter(art => {
    const matchesCategory = selectedCategory === 'All Categories' || art.category === selectedCategory;
    const matchesQuery = searchQuery === '' || 
                         art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  const featuredArticle = INSIGHTS.find(art => art.featured) || INSIGHTS[0];

  return (
    <div className="bg-slate-50 min-h-screen py-8 md:py-12 px-4 md:px-12 max-w-7xl mx-auto space-y-10">
      
      {/* If reading an article, show beautiful full article reading screen with sticky back button */}
      {readingArticle ? (
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 md:p-12 border border-slate-200 border-b-4 border-b-red-700 shadow-md space-y-8"
        >
          {/* Back Action top row */}
          <div className="flex justify-between items-center select-none">
            <button
              onClick={() => setReadingArticle(null)}
              className="inline-flex items-center gap-2 hover:gap-3 text-red-700 hover:text-red-800 font-sans font-bold text-sm transition-all focus:outline-none cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Insights Hub</span>
            </button>

            <button 
              onClick={() => openWhatsAppChat(`Hi Preston, I am referencing the article "${readingArticle.title}" and would like to ask a technical question.`)}
              className="px-4 py-2 bg-red-50 text-red-700 hover:bg-red-100 font-sans text-xs font-bold rounded-lg transition-colors cursor-pointer"
            >
              Consult Preston
            </button>
          </div>

          {/* Article Banner */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs select-none">
              <span className="bg-orange-700 text-white font-sans font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
                {readingArticle.tag}
              </span>
              <div className="flex items-center gap-1 text-slate-400 font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{readingArticle.date}</span>
              </div>
              <div className="flex items-center gap-1 text-slate-400 font-semibold">
                <Clock className="w-3.5 h-3.5" />
                <span>{readingArticle.readTime}</span>
              </div>
            </div>

            <h1 className="font-sans text-2xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              {readingArticle.title}
            </h1>
          </div>

          {/* Article Large Cover Illustration */}
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-inner border border-slate-100 bg-slate-100 select-none">
            <img 
              alt={readingArticle.title} 
              className="w-full h-full object-cover"
              src={readingArticle.image}
            />
          </div>

          {/* Core Markdown-Body compliant rendering */}
          <div className="max-w-4xl mx-auto font-sans text-slate-750 leading-relaxed text-sm md:text-base space-y-6">
            <div className="p-4 bg-orange-50/50 border-l-4 border-orange-650 rounded-r-xl italic text-slate-700 font-medium my-4">
              {readingArticle.summary}
            </div>

            {/* Custom styled breakdown of detailed content */}
            <div className="space-y-6 prose max-w-none prose-slate">
              {readingArticle.content.split('\n\n').map((para, idx) => {
                if (para.startsWith('###')) {
                  return (
                    <h3 key={idx} className="font-sans text-lg md:text-xl font-bold text-slate-900 pt-3 border-b border-slate-200 pb-1">
                      {para.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (para.startsWith('1.') || para.startsWith('2.') || para.startsWith('-')) {
                  return (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1.5 pl-6 list-none text-left">
                      {para.split('\n').map((line, lidx) => (
                        <p key={lidx} className="text-slate-700 text-sm">
                          {line.trim()}
                        </p>
                      ))}
                    </div>
                  );
                }
                return (
                  <p key={idx} className="text-slate-600 font-sans leading-relaxed text-sm md:text-base">
                    {para}
                  </p>
                );
              })}
            </div>
          </div>

          {/* End CTA Card inside Reader */}
          <div className="max-w-2xl mx-auto p-6 bg-slate-50 border border-slate-200/60 rounded-2xl text-center space-y-4">
            <h4 className="font-sans font-bold text-base text-slate-900">Need specific clarifications on SFA technical configurations?</h4>
            <p className="font-sans text-xs text-slate-500 max-w-lg mx-auto">
              Our consultation services help you calculate slab capacities, model unidirectional paths, and structure compliant plumbing structures efficiently.
            </p>
            <button
              onClick={() => openWhatsAppChat(`Hi Preston, I would like to set up a consultation regarding: ${readingArticle.title}`)}
              className="bg-red-650 text-white font-sans font-bold text-xs py-2.5 px-6 rounded-lg hover:bg-red-750 transition-colors inline-block cursor-pointer"
            >
              Consult Preston 1-on-1 via WhatsApp
            </button>
          </div>

        </motion.div>
      ) : (
        <>
          {/* Main List view */}
          <header className="space-y-3">
            <h1 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Food-Grade Market Insights
            </h1>
            <p className="font-sans text-slate-600 text-[17px] leading-relaxed max-w-2xl">
              Knowledge hub for central kitchen parameters, SFA compliance changes, Singapore real estate logistics trends, and retrofitting.
            </p>
          </header>

          {/* SFA COMPLIANCE FEATURED BANNER exactly like top of Page-2 */}
          {featuredArticle && (
            <section className="bg-white border border-slate-200 border-b-4 border-b-red-700 rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row shadow-sm hover:shadow-lg transition-all duration-300">
              
              <div className="flex-1 overflow-hidden h-72 lg:h-auto relative bg-slate-100 select-none">
                <img 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover"
                  src={featuredArticle.image}
                />
              </div>

              <div className="flex-1 p-6 md:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  
                  {/* Category, Date and reading length */}
                  <div className="flex flex-wrap items-center gap-4 text-xs select-none">
                    <span className="bg-[#1A5C5C] text-white font-sans font-bold text-[10px] px-2.5 py-1 roundeduppercase tracking-wider">
                      {featuredArticle.tag}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 font-semibold font-mono">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-400 font-semibold font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>

                  <h2 className="font-sans text-xl md:text-2.5xl font-bold text-slate-900 tracking-tight leading-snug">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="font-sans text-slate-500 text-sm md:text-base leading-relaxed line-clamp-3">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div>
                  <button 
                    onClick={() => setReadingArticle(featuredArticle)}
                    className="inline-flex items-center gap-2 bg-red-650 hover:bg-red-700 text-white font-sans font-bold text-sm tracking-wide py-3 px-6 rounded-xl hover:shadow-md transition-all active:scale-95 duration-100 cursor-pointer"
                  >
                    <span>Read Featured Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </section>
          )}

          {/* Search bar + Pill Filters */}
          <div className="space-y-6">
            
            {/* Category pills aligned horizontally styled exactly like screenshot Page-2 */}
            <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 select-none">
              
              {/* Pill category selection */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {['All Categories', 'Regulation Updates', 'Market Trends', 'Technical Specs', 'Case Studies'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 font-sans font-semibold text-xs tracking-wide rounded-full transition-all focus:outline-none cursor-pointer ${
                      selectedCategory === cat 
                        ? 'bg-red-700 text-white shadow-sm' 
                        : 'bg-white hover:bg-slate-200 text-slate-600 border border-slate-200'
                    }`}
                  >
                    {cat === 'All Categories' ? 'ALL INSIGHTS' : cat.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* SEARCH HUB BLOCK */}
              <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Query regulatory topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white text-slate-800 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-red-650 font-sans"
                />
              </div>

            </div>

            {/* Articles List / Grid of non-featured guides */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredArticles.map((art, idx) => (
                  <motion.div
                    key={art.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white rounded-2xl overflow-hidden border border-slate-250/30 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div>
                      {/* Image Thumbnail Area */}
                      <div className="aspect-[16/10] overflow-hidden relative select-none bg-slate-100">
                        <img 
                          alt={art.title} 
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          src={art.image}
                        />
                        <span className="absolute top-3 right-3 bg-red-800 text-white font-sans font-bold text-[10px] px-2 py-0.5 rounded uppercase tracking-wider">
                          {art.tag}
                        </span>
                      </div>

                      {/* Content details */}
                      <div className="p-6 space-y-4 text-left">
                        <div className="flex gap-4 text-[11px] text-slate-400 font-bold select-none">
                          <span className="font-sans uppercase text-[#1A5C5C]">{art.category}</span>
                          <span>•</span>
                          <span>{art.date}</span>
                        </div>
                        
                        <h3 className="font-sans text-[17px] font-bold text-slate-800 tracking-tight leading-snug group-hover:text-red-700 transition-colors line-clamp-2">
                          {art.title}
                        </h3>
                        
                        <p className="font-sans text-sm text-slate-500 leading-relaxed line-clamp-3">
                          {art.summary}
                        </p>
                      </div>
                    </div>

                    <div className="p-6 pt-0 flex justify-between items-center border-t border-slate-50 mt-4 select-none">
                      <span className="text-xs text-slate-400/80 font-bold">{art.readTime}</span>
                      <button 
                        onClick={() => setReadingArticle(art)}
                        className="text-red-650 hover:text-red-700 font-sans font-bold text-xs inline-flex items-center gap-1 group-hover:underline cursor-pointer"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {filteredArticles.length === 0 && (
              <div className="bg-white p-12 border border-slate-200 rounded-2xl text-center space-y-4">
                <BookOpen className="w-8 h-8 text-slate-300 mx-auto" />
                <p className="font-sans font-medium text-slate-500 text-sm">
                  We currently have no advisory articles on that precise query.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Categories');
                  }}
                  className="bg-slate-900 text-white font-sans font-bold text-xs py-2 px-4 rounded-lg cursor-pointer"
                >
                  Clear search overrides
                </button>
              </div>
            )}

          </div>
        </>
      )}

    </div>
  );
}
