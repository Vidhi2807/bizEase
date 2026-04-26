import React from 'react';
import { Link } from 'react-router-dom';

// General Layout Icons
const SearchIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const BellIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const HelpCircleIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const SettingsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

// Sidebar Icons
const GridIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const Globe = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const Megaphone = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="11 19 2 12 11 5 11 19"></polygon>
    <path d="M22 12A10 10 0 0 0 12 2v20a10 10 0 0 0 10-10z"></path>
  </svg>
);

const Receipt = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 2v20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2V2H4z"></path>
    <line x1="16" y1="12" x2="8" y2="12"></line>
    <line x1="16" y1="16" x2="8" y2="16"></line>
    <line x1="10" y1="8" x2="8" y2="8"></line>
  </svg>
);

// Ads Manager Specific Icons
const PlusIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MoneyIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="6" width="20" height="12" rx="2" ry="2"></rect>
    <circle cx="12" cy="12" r="2"></circle>
    <path d="M6 12h.01"></path>
    <path d="M18 12h.01"></path>
  </svg>
);

const ClickIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 10c0-1.5 1.5-3 3-3s3 1.5 3 3-1.5 3-3 3"></path>
    <path d="M6 14.5c0 1.5-1.5 3-3 3s-3-1.5-3-3 1.5-3 3-3"></path>
    <path d="M14.5 21a6.5 6.5 0 0 1-8.5 0"></path>
    <path d="M12 2v8"></path>
    <path d="m15.5 5.5-3 3"></path>
    <path d="m8.5 5.5 3 3"></path>
  </svg>
);

const CartIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const RateIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

const TrendingUpIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const TrendingDownIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
    <polyline points="17 18 23 18 23 12"></polyline>
  </svg>
);

const FilterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

const DownloadIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const ZapIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

export default function AdsManager() {
  return (
    <div className="flex h-screen bg-[#e9e6ec] font-sans text-gray-800 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#e9e6ec] flex flex-col justify-between shrink-0 h-full overflow-y-auto hidden md:flex border-r border-[#d4d0da]">
        <div>
          <div className="p-6 pb-8 pl-8">
            <h1 className="text-[25px] font-bold text-[#443179] tracking-tight">BizEase</h1>
            <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Growth Platform</p>
          </div>
          <nav className="space-y-1.5 px-4 block">
            <Link to="/" className="flex items-center gap-3 px-4 py-3 text-[14px] font-semibold rounded-xl text-gray-600 hover:bg-[#dcd8e1] transition-colors">
              <GridIcon className="w-[18px] h-[18px] text-gray-500" />
              Dashboard
            </Link>
            <Link to="/builder" className="flex items-center gap-3 px-4 py-3 text-[14px] font-semibold rounded-xl text-gray-600 hover:bg-[#dcd8e1] transition-colors">
              <Globe className="w-[18px] h-[18px] text-gray-500" />
              Website Builder
            </Link>
            <Link to="/ads" className="flex items-center gap-3 px-4 py-3 text-[14px] font-bold rounded-xl text-[#443179] bg-[#dcd8e1] shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-[#d2ced6]">
              <Megaphone className="w-[18px] h-[18px] text-[#443179]" />
              Ads Manager
            </Link>
            <Link to="/expenses" className="flex items-center gap-3 px-4 py-3 text-[14px] font-semibold rounded-xl text-gray-600 hover:bg-[#dcd8e1] transition-colors">
              <Receipt className="w-[18px] h-[18px] text-gray-500" />
              Expenses
            </Link>
            <Link to="/settings" className="flex items-center gap-3 px-4 py-3 text-[14px] font-semibold rounded-xl text-gray-600 hover:bg-[#dcd8e1] transition-colors mt-6">
              <SettingsIcon className="w-[18px] h-[18px] text-gray-500" />
              Settings
            </Link>
          </nav>
        </div>
        
        {/* Pro Plan Active Footer block */}
        <div className="p-6 mt-auto">
          <div className="bg-[#dfd8e6] border border-[#d2cbdb] p-4 rounded-[1.25rem] relative overflow-hidden shadow-sm">
             <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="w-8 h-8 rounded-full bg-[#443179] flex items-center justify-center text-white shrink-0">
                   <ZapIcon className="w-4 h-4" />
                </div>
                <span className="text-[14px] font-bold text-[#b5aacc]">Pro Plan Active</span>
             </div>
             <div className="relative z-10">
                <div className="w-full bg-[#cdc4db] rounded-full h-1.5 overflow-hidden">
                   <div className="bg-[#443179] w-[75%] h-full rounded-full"></div>
                </div>
                <p className="text-[12px] font-semibold text-gray-500 mt-2.5 tracking-tight">75% of your ad credit used</p>
             </div>
             {/* Decorative faint background element */}
             <div className="absolute right-0 bottom-0 w-24 h-24 bg-[#d4cce2] rounded-full blur-2xl -mr-10 -mb-10 pointer-events-none"></div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto h-full relative scroll-smooth">
        
        {/* Topbar */}
        <header className="h-[72px] bg-[#e9e6ec] flex items-center justify-between px-8 shrink-0 sticky top-0 z-20">
          <div className="max-w-[480px] w-full relative">
            <SearchIcon className="w-[15px] h-[15px] absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search campaigns, metrics, or tools..." 
              className="w-full pl-11 pr-4 py-2.5 bg-[#dbd7e0] border border-transparent rounded-[10px] text-[13px] font-medium focus:outline-none focus:ring-2 focus:ring-[#443179] focus:bg-white transition-all placeholder-gray-500 text-gray-800"
            />
          </div>
          <div className="flex items-center gap-5">
            <button className="text-gray-500 hover:text-gray-800 transition-colors">
               <BellIcon className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-800 transition-colors">
              <HelpCircleIcon className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-gray-800 transition-colors">
              <SettingsIcon className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-gray-300 mx-2"></div>
            <div className="flex items-center gap-3 cursor-pointer group">
               <img src="https://ui-avatars.com/api/?name=Vidhi+Mandaliya&background=334155&color=fff&rounded=true&v=2" alt="Vidhi Mandaliya" className="w-[34px] h-[34px] rounded-full shadow-sm" />
               <span className="text-[14px] font-semibold text-gray-700 group-hover:text-gray-900 transition-colors">Vidhi Mandaliya</span>
            </div>
          </div>
        </header>

        {/* Dashboard Content Container */}
        <div className="flex-1 px-8 py-6 w-full max-w-[1400px] mx-auto pb-12">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
            <div>
              <h2 className="text-[28px] font-bold text-gray-900 tracking-tight">Ads Manager</h2>
              <p className="text-[15px] text-gray-600 mt-1.5 font-medium leading-relaxed max-w-sm">Real-time performance analytics for your active growth campaigns.</p>
            </div>
            
            <div className="flex gap-4">
              {/* Date Filter Toggle */}
              <div className="flex bg-[#dbd7e0] rounded-xl p-1 shadow-sm border border-[#d2ced6]">
                 <button className="px-5 py-2 text-[13px] font-bold rounded-lg bg-[#e9e6ec] text-[#443179] shadow-sm">
                    7<br />Days
                 </button>
                 <button className="px-5 py-2 text-[13px] font-bold rounded-lg text-gray-600 hover:text-gray-800 transition-colors">
                    30<br />Days
                 </button>
                 <button className="px-5 py-2 text-[13px] font-bold rounded-lg text-gray-600 hover:text-gray-800 transition-colors flex items-center justify-center">
                    Quarter
                 </button>
              </div>

              {/* Action Button */}
              <button className="flex flex-col items-center justify-center px-6 py-2 bg-[#443179] text-white rounded-xl text-[14px] font-bold shadow-lg shadow-[#443179]/20 hover:bg-[#352561] transition-all group ml-2 relative overflow-hidden h-[60px] w-[180px]">
                 <div className="flex items-center gap-2">
                    <PlusIcon className="w-[18px] h-[18px] opacity-80" />
                    <span className="text-left leading-tight">Create New<br/>Campaign</span>
                 </div>
              </button>
            </div>
          </div>

          {/* KPI Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {/* Card 1 */}
            <div className="bg-[#e9e6ec] rounded-2xl p-6 border border-[#d2ced6] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-[#b5aacc] transition-colors">
               <div className="flex items-center justify-between mb-4">
                  <span className="text-[14px] font-semibold text-gray-600">Spend</span>
                  <MoneyIcon className="w-5 h-5 text-[#8878aa]" />
               </div>
               <p className="text-[28px] font-bold text-gray-900 tracking-tight mb-3">$12,480.00</p>
               <div className="flex items-center gap-1.5 text-[13px]">
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                     <TrendingUpIcon className="w-3.5 h-3.5" />
                     12%
                  </span>
                  <span className="text-gray-500 font-medium">vs last period</span>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#e9e6ec] rounded-2xl p-6 border border-[#d2ced6] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-[#b5aacc] transition-colors">
               <div className="flex items-center justify-between mb-4">
                  <span className="text-[14px] font-semibold text-gray-600">Clicks</span>
                  <ClickIcon className="w-5 h-5 text-[#8878aa]" />
               </div>
               <p className="text-[28px] font-bold text-gray-900 tracking-tight mb-3">45,210</p>
               <div className="flex items-center gap-1.5 text-[13px]">
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                     <TrendingUpIcon className="w-3.5 h-3.5" />
                     8.4%
                  </span>
                  <span className="text-gray-500 font-medium">vs last period</span>
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#e9e6ec] rounded-2xl p-6 border border-[#d2ced6] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-[#b5aacc] transition-colors">
               <div className="flex items-center justify-between mb-4">
                  <span className="text-[14px] font-semibold text-gray-600">Conversions</span>
                  <CartIcon className="w-5 h-5 text-[#8878aa]" />
               </div>
               <p className="text-[28px] font-bold text-gray-900 tracking-tight mb-3">3,124</p>
               <div className="flex items-center gap-1.5 text-[13px]">
                  <span className="flex items-center gap-1 text-emerald-600 font-bold">
                     <TrendingUpIcon className="w-3.5 h-3.5" />
                     21%
                  </span>
                  <span className="text-gray-500 font-medium">vs last period</span>
               </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#e9e6ec] rounded-2xl p-6 border border-[#d2ced6] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden group hover:border-[#b5aacc] transition-colors">
               <div className="flex items-center justify-between mb-4">
                  <span className="text-[14px] font-semibold text-gray-600">CTR</span>
                  <RateIcon className="w-5 h-5 text-[#8878aa]" />
               </div>
               <p className="text-[28px] font-bold text-gray-900 tracking-tight mb-3">3.82%</p>
               <div className="flex items-center gap-1.5 text-[13px]">
                  <span className="flex items-center gap-1 text-red-500 font-bold">
                     <TrendingDownIcon className="w-3.5 h-3.5" />
                     0.5%
                  </span>
                  <span className="text-gray-500 font-medium">vs last period</span>
               </div>
            </div>
            
          </div>

          {/* Middle Analytics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
             
             {/* Main Chart Widget */}
             <div className="lg:col-span-2 bg-[#e9e6ec] rounded-2xl shadow-sm border border-[#d2ced6] p-8 flex flex-col min-h-[350px]">
                <div className="flex items-center justify-between mb-10">
                   <h3 className="text-[16px] font-bold text-gray-900">Performance Over Time</h3>
                   <div className="flex gap-5 text-[13px] font-semibold">
                      <div className="flex items-center gap-2">
                         <div className="w-2.5 h-2.5 rounded-full bg-[#443179]"></div>
                         <span className="text-gray-700">Spend</span>
                      </div>
                      <div className="flex items-center gap-2">
                         <div className="w-2.5 h-2.5 rounded-full bg-[#8878aa]"></div>
                         <span className="text-gray-700">Conversions</span>
                      </div>
                   </div>
                </div>
                
                {/* Visual Chart Placeholder */}
                <div className="flex-1 flex items-end justify-between px-4 pb-2 relative w-full mt-4">
                   {/* Horizontal Axis lines (faux) */}
                   <div className="absolute inset-x-0 bottom-0 border-b-2 border-gray-300"></div>

                   {/* Bars representing days */}
                   {[
                     { spend: 30, conv: 30, label: 'Mon' },
                     { spend: 40, conv: 40, label: 'Tue' },
                     { spend: 35, conv: 35, label: 'Wed' },
                     { spend: 65, conv: 65, label: 'Thu (Today)', active: true },
                     { spend: 20, conv: 20, label: 'Fri' },
                     { spend: 45, conv: 45, label: 'Sat' },
                     { spend: 50, conv: 50, label: 'Sun' },
                   ].map((bar, i) => (
                      <div key={i} className="flex flex-col items-center w-full max-w-[50px] relative group h-full justify-end">
                         {/* Bar SVG matching image closely - the image uses overlapping or stacked blocky shapes. Realistically, it looks like a single colored block per day for simplicity in the mockup */}
                         <div 
                           className={`w-full rounded-t-sm transition-all duration-300 ${bar.active ? 'bg-[#443179]' : 'bg-[#d8d3dc] group-hover:bg-[#c9c2cf]'}`} 
                           style={{ height: `${bar.spend}%` }}
                         ></div>
                         <span className={`text-[11px] font-bold absolute -bottom-8 ${bar.active ? 'text-gray-900' : 'text-gray-400'}`}>
                            {bar.label}
                         </span>
                      </div>
                   ))}
                </div>
             </div>

             {/* Right Panel Widget */}
             <div className="bg-[#e9e6ec] rounded-2xl shadow-sm border border-[#d2ced6] p-8 flex flex-col">
                <h3 className="text-[16px] font-bold text-gray-900 mb-8">Spend by Platform</h3>
                
                <div className="space-y-6 flex-1">
                   {/* Platform 1 */}
                   <div>
                      <div className="flex justify-between text-[13px] font-bold text-gray-800 mb-2">
                         <span>Google Ads</span>
                         <span>65%</span>
                      </div>
                      <div className="w-full bg-[#d8d3dc] rounded-full h-1.5 overflow-hidden">
                         <div className="bg-[#3b82f6] h-full rounded-full" style={{ width: '65%' }}></div>
                      </div>
                   </div>

                   {/* Platform 2 */}
                   <div>
                      <div className="flex justify-between text-[13px] font-bold text-gray-800 mb-2">
                         <span>Meta Ads</span>
                         <span>25%</span>
                      </div>
                      <div className="w-full bg-[#d8d3dc] rounded-full h-1.5 overflow-hidden">
                         <div className="bg-[#0ea5e9] h-full rounded-full" style={{ width: '25%' }}></div>
                      </div>
                   </div>

                   {/* Platform 3 */}
                   <div>
                      <div className="flex justify-between text-[13px] font-bold text-gray-800 mb-2">
                         <span>LinkedIn Ads</span>
                         <span>10%</span>
                      </div>
                      <div className="w-full bg-[#d8d3dc] rounded-full h-1.5 overflow-hidden">
                         <div className="bg-[#0284c7] h-full rounded-full" style={{ width: '10%' }}></div>
                      </div>
                   </div>
                </div>

                <div className="mt-8 bg-[#d8d3dc] rounded-xl p-5 border border-[#ccc4d4]">
                   <p className="text-[12px] font-bold text-[#443179] mb-1.5 flex items-center gap-2">
                      <ZapIcon className="w-3.5 h-3.5" /> Optimization Tip
                   </p>
                   <p className="text-[13px] font-medium text-gray-600 leading-relaxed">
                      Google Ads is performing 15% better than last week. Consider reallocating $200 from Meta to maximize ROI.
                   </p>
                </div>
             </div>

          </div>

          {/* Active Campaigns Table */}
          <div className="bg-[#e9e6ec] rounded-2xl shadow-sm border border-[#d2ced6] overflow-hidden">
             
             {/* Table Header area */}
             <div className="px-8 py-6 border-b border-[#d2ced6] flex items-center justify-between bg-[#e9e6ec]">
                <h3 className="text-[16px] font-bold text-gray-900">Active Campaigns</h3>
                <div className="flex items-center gap-4 text-gray-500">
                   <button className="hover:text-gray-800 transition-colors">
                      <FilterIcon className="w-[18px] h-[18px]" />
                   </button>
                   <button className="hover:text-gray-800 transition-colors">
                      <DownloadIcon className="w-[18px] h-[18px]" />
                   </button>
                </div>
             </div>

             {/* Table */}
             <div className="w-full overflow-x-auto">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="border-b border-[#d2ced6]">
                         <th className="px-8 py-4 text-[12px] font-bold text-gray-700 tracking-wider uppercase">Campaign Name</th>
                         <th className="px-6 py-4 text-[12px] font-bold text-gray-700 tracking-wider uppercase">Status</th>
                         <th className="px-6 py-4 text-[12px] font-bold text-gray-700 tracking-wider uppercase">Platform</th>
                         <th className="px-6 py-4 text-[12px] font-bold text-gray-700 tracking-wider uppercase">Budget</th>
                         <th className="px-8 py-4 text-[12px] font-bold text-gray-700 tracking-wider uppercase text-right">Performance</th>
                      </tr>
                   </thead>
                   <tbody className="divide-y divide-[#d2ced6]">
                      
                      {/* Row 1 */}
                      <tr className="hover:bg-[#e4e0e8] transition-colors group">
                         <td className="px-8 py-5">
                            <p className="text-[14px] font-bold text-gray-900 group-hover:text-[#443179] transition-colors">Summer Flash Sale 2024</p>
                            <p className="text-[12px] font-medium text-gray-500 mt-0.5">Started May 12, 2024</p>
                         </td>
                         <td className="px-6 py-5">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-100/80 text-emerald-700 text-[11px] font-bold">
                               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                            </span>
                         </td>
                         <td className="px-6 py-5">
                            <div className="flex items-center gap-2">
                               <div className="font-bold text-blue-500 text-[18px] tracking-tighter">G<span className="text-red-500">o</span><span className="text-yellow-500">o</span>g<span className="text-green-500">l</span><span className="text-red-500">e</span></div>
                            </div>
                         </td>
                         <td className="px-6 py-5">
                            <span className="text-[14px] font-bold text-gray-800">$500.00/day</span>
                         </td>
                         <td className="px-8 py-5 text-right">
                            <p className="text-[14px] font-bold text-gray-900">1,240 clicks</p>
                            <p className="text-[12px] font-bold text-emerald-600 mt-0.5">4.2% CTR</p>
                         </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="hover:bg-[#e4e0e8] transition-colors group">
                         <td className="px-8 py-5">
                            <p className="text-[14px] font-bold text-gray-900 group-hover:text-[#443179] transition-colors">Retargeting: Cart Abandoners</p>
                            <p className="text-[12px] font-medium text-gray-500 mt-0.5">Started June 01, 2024</p>
                         </td>
                         <td className="px-6 py-5">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-100/80 text-emerald-700 text-[11px] font-bold">
                               <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                            </span>
                         </td>
                         <td className="px-6 py-5">
                            <div className="flex items-center gap-2">
                               <div className="w-5 h-5 bg-[#e0f2fe] text-blue-600 rounded flex items-center justify-center font-serif font-bold text-[13px] italic">M</div>
                               <span className="text-[14px] font-bold text-gray-700">Meta</span>
                            </div>
                         </td>
                         <td className="px-6 py-5">
                            <span className="text-[14px] font-bold text-gray-800">$120.00/day</span>
                         </td>
                         <td className="px-8 py-5 text-right">
                            <p className="text-[14px] font-bold text-gray-900">845 clicks</p>
                            <p className="text-[12px] font-bold text-emerald-600 mt-0.5">6.8% CTR</p>
                         </td>
                      </tr>

                      {/* Row 3 */}
                      <tr className="hover:bg-[#e4e0e8] transition-colors group">
                         <td className="px-8 py-5">
                            <p className="text-[14px] font-bold text-gray-900 opacity-60 group-hover:text-[#443179] transition-colors group-hover:opacity-100">Brand Awareness: North America</p>
                            <p className="text-[12px] font-medium text-gray-500 mt-0.5">Ended June 15, 2024</p>
                         </td>
                         <td className="px-6 py-5">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-gray-200 text-gray-600 text-[11px] font-bold">
                               <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Paused
                            </span>
                         </td>
                         <td className="px-6 py-5">
                            <div className="flex items-center gap-2 grayscale opacity-60">
                               <div className="font-bold text-blue-500 text-[18px] tracking-tighter">G<span className="text-red-500">o</span><span className="text-yellow-500">o</span>g<span className="text-green-500">l</span><span className="text-red-500">e</span></div>
                            </div>
                         </td>
                         <td className="px-6 py-5 opacity-60">
                            <span className="text-[14px] font-bold text-gray-800">$0.00/day</span>
                         </td>
                         <td className="px-8 py-5 text-right opacity-60">
                            <p className="text-[14px] font-bold text-gray-900">0 clicks</p>
                            <p className="text-[12px] font-bold text-gray-500 mt-0.5">0.0% CTR</p>
                         </td>
                      </tr>
                   </tbody>
                </table>
             </div>

             {/* Pagination / Footer */}
             <div className="px-8 py-4 border-t border-[#d2ced6] flex items-center justify-between text-[12px] font-bold text-gray-600 bg-[#e9e6ec]">
                <span>Showing 3 of 12 campaigns</span>
                <div className="flex gap-2">
                   <button className="px-4 py-2 border border-[#d2ced6] rounded-md hover:bg-[#dcd8e1] transition-colors disabled:opacity-50">Previous</button>
                   <button className="px-4 py-2 border border-[#d2ced6] rounded-md bg-[#dcd8e1] text-gray-800 hover:bg-[#c9c2cf] transition-colors">Next</button>
                </div>
             </div>

          </div>
        </div>
      </main>

      {/* Floating Action Button - Trend Icon mapping to the one on image right side */}
      <button className="fixed bottom-36 right-8 w-[48px] h-[48px] bg-[#443179] hover:bg-[#352561] text-white rounded-xl shadow-lg shadow-[#443179]/20 flex items-center justify-center transition-all z-50 hover:-translate-y-1">
        <TrendingUpIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
