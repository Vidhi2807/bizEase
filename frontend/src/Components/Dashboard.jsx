import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Megaphone, Receipt } from './icons';

// Inline Icons (since we don't have all specific versions in icons.jsx)
const GridIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);

const SettingsIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

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

const CalendarIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const DownloadIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const TrendingUpIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const PlusIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const CheckCircleOutlineIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-[#fcfcfd] font-sans text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col justify-between shrink-0 h-full overflow-y-auto hidden md:flex">
        <div>
          <div className="p-6 pb-8">
            <h1 className="text-2xl font-bold text-[#4c3983]">BizEase</h1>
            <p className="text-[13px] text-gray-500 font-medium">Growth Platform</p>
          </div>
          <nav className="space-y-1.5 px-4 block">
            <Link to="/" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-indigo-700 bg-indigo-50/60 border border-indigo-100">
              <GridIcon className="w-[18px] h-[18px]" />
              Dashboard
            </Link>
            <Link to="/builder" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Globe className="w-[18px] h-[18px] text-gray-400" />
              Website Builder
            </Link>
            <Link to="/ads" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Megaphone className="w-[18px] h-[18px] text-gray-400" />
              Ads Manager
            </Link>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
              <Receipt className="w-[18px] h-[18px] text-gray-400" />
              Expenses
            </a>
            <div className="pt-6 mt-6 border-t border-gray-100/60">
              <Link to="/settings" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                <SettingsIcon className="w-[18px] h-[18px] text-gray-400" />
                Settings
              </Link>
              <Link to="/login" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-red-600 hover:bg-red-50 transition-colors mt-1 pointer-events-auto">
                <svg className="w-[18px] h-[18px] text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                Logout
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-5 border-t mt-auto">
          <div className="flex items-center gap-3">
            <img src="https://ui-avatars.com/api/?name=Vidhi+Mandaliya&background=e0e7ff&color=4c3983&rounded=true&v=2" alt="Vidhi Mandaliya" className="w-10 h-10 rounded-full" />
            <div>
              <p className="text-sm font-medium text-gray-900 leading-tight">Vidhi Mandaliya</p>
              <p className="text-xs text-gray-500 mt-0.5">Marketing Director</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto h-full relative">
        {/* Topbar */}
        <header className="h-16 bg-white border-b flex items-center justify-between px-6 shrink-0 sticky top-0 z-10 w-full">
          <div className="max-w-md w-full relative">
            <SearchIcon className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search analytics, campaigns, or builder..." 
              className="w-full pl-11 pr-4 py-2 bg-[#f4f5f8] border border-transparent rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all placeholder-gray-400"
            />
          </div>
          <div className="flex items-center gap-5">
            <button className="text-gray-400 hover:text-gray-600 transition-colors relative">
               <BellIcon className="w-5 h-5" />
               <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-400 border-2 border-white"></span>
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <HelpCircleIcon className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <SettingsIcon className="w-5 h-5" />
            </button>
            <img src="https://ui-avatars.com/api/?name=Vidhi+Mandaliya&background=e0e7ff&color=4c3983&rounded=true&v=2" alt="User" className="w-8 h-8 rounded-full" />
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 px-8 py-8 w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <h2 className="text-[22px] font-semibold text-gray-900 leading-tight">Dashboard</h2>
              <p className="text-[15px] text-gray-500 mt-1">Welcome back, Vidhi. Here's what's happening today.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-gray-100/80 text-gray-600 border border-gray-200/60 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
                <CalendarIcon className="w-4 h-4 text-gray-500" />
                Last 30 Days
              </button>
              <button className="flex items-center gap-2 px-4 py-2.5 bg-[#543b87] text-white rounded-xl text-sm font-medium hover:bg-[#452f74] transition-colors shadow-sm">
                <DownloadIcon className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[1.25rem] p-6 shadow-sm border border-gray-100 flex flex-col h-[170px]">
              <div className="flex justify-between items-start mb-auto">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-500">
                  <Globe className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 text-[11px] font-bold bg-emerald-100/80 text-emerald-600 rounded-full">LIVE</span>
              </div>
              <div className="mt-4">
                <p className="text-[11px] font-bold text-gray-500 tracking-wider uppercase mb-1.5">Website Status</p>
                <p className="text-[17px] font-medium text-gray-900">bizease-pro.com</p>
              </div>
              <div className="flex items-center gap-1.5 text-[13px] text-emerald-600 mt-3 font-medium">
                <CheckCircleOutlineIcon className="w-4 h-4" />
                <span>All systems operational</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[1.25rem] p-6 shadow-sm border border-gray-100 flex flex-col h-[170px]">
              <div className="flex justify-between items-start mb-auto">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500">
                  <Megaphone className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-[13px] font-semibold text-indigo-600 bg-indigo-50/50 px-2 py-0.5 rounded-full">
                  <TrendingUpIcon className="w-[14px] h-[14px]" />
                  +12.5%
                </div>
              </div>
              <div className="mt-4">
                <p className="text-[11px] font-bold text-gray-500 tracking-wider uppercase mb-1">Ad Performance</p>
                <div className="flex items-baseline gap-1.5">
                  <p className="text-2xl font-semibold text-gray-900">12,482</p>
                  <p className="text-[13px] text-gray-500 font-medium">Clicks</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-[13px] text-gray-500 mt-2.5">
                <span>Spend: $1,240.00</span>
                <span className="font-semibold text-gray-900">$0.09 CPC</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[1.25rem] p-6 shadow-sm border border-gray-100 flex flex-col h-[170px]">
              <div className="flex justify-between items-start mb-auto">
                <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500">
                  <Receipt className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-[13px] font-semibold text-rose-500 bg-rose-50/50 px-2 py-0.5 rounded-full">
                  <TrendingUpIcon className="w-[14px] h-[14px]" />
                  +4.2%
                </div>
              </div>
              <div className="mt-4">
                <p className="text-[11px] font-bold text-gray-500 tracking-wider uppercase mb-1">Monthly Expenses</p>
                <p className="text-2xl font-semibold text-gray-900">$3,150.40</p>
              </div>
              <div className="mt-2.5 text-[13px] text-gray-500 flex flex-col gap-2">
                <div className="w-full bg-gray-100 rounded-full h-1 overflow-hidden">
                  <div className="bg-orange-400 h-1 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <p className="font-medium">78% of monthly budget utilized</p>
              </div>
            </div>
          </div>

          {/* Main Grid area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-20">
            {/* Chart Column */}
            <div className="lg:col-span-2 bg-white rounded-[1.25rem] shadow-sm border border-gray-100 p-6">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Digital Growth Over Time</h3>
                  <p className="text-[13px] text-gray-500 mt-0.5">Combined performance of website traffic and ad conversions</p>
                </div>
                <div className="flex gap-4 text-[13px] font-medium mt-1">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#533d82]"></div>
                    <span className="text-gray-600">Traffic</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#d7cdf2]"></div>
                    <span className="text-gray-600">Leads</span>
                  </div>
                </div>
              </div>
              {/* Chart Placeholder Image matching UI */}
              <div className="w-full bg-[#0b0f19] rounded-xl flex items-center justify-center overflow-hidden min-h-[400px] h-[450px] relative shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-[#0b0f19] to-[#04060a] flex flex-col items-center justify-center pt-8 pb-4">
                     <h4 className="text-white/80 tracking-widest text-[11px] mb-8 font-mono">DIGITAL GROWTH CHART</h4>
                     <div className="border border-white/20 w-4/5 h-[300px] flex items-end justify-around px-8 pb-0 pt-4 relative">
                        {/* Faux Y axis */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-[9px] text-white/50 -ml-8 items-end py-2 h-full font-mono">
                            <span>150</span><span>120</span><span>90</span><span>60</span><span>30</span><span>0</span>
                        </div>
                        {/* Faux X axis */}
                        <div className="absolute left-0 bottom-0 right-0 h-4 flex justify-around text-[7px] text-white/30 -mb-5 font-mono">
                            <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
                        </div>

                        {/* Faux bars to match stylized chart */}
                        {[20, 35, 25, 45, 60, 50, 80, 100, 130, 80, 95, 110].map((h, i) => (
                           <div key={i} className="flex gap-1 h-full items-end group">
                             <div className="w-1.5 lg:w-2.5 bg-white/10 rounded-t-sm relative flex items-end transition-all duration-300 group-hover:bg-white/20" style={{height: `${h}%`}}></div>
                             <div className="w-1.5 lg:w-2.5 bg-white/40 rounded-t-sm relative flex items-end transition-all duration-300 group-hover:bg-white/60" style={{height: `${h * 0.6}%`}}></div>
                           </div>
                        ))}
                     </div>
                  </div>
              </div>
            </div>

            {/* Side Column */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-[1.25rem] shadow-sm border border-gray-100 p-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3.5 rounded-xl border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all group">
                    <div className="flex items-center gap-3 text-[14px] font-semibold text-gray-700">
                      <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100 transition-colors">
                        <PlusIcon className="w-4 h-4" />
                      </div>
                      Create Website
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-gray-300 group-hover:text-indigo-600 transition-colors" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3.5 rounded-xl border border-gray-100 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all group">
                    <div className="flex items-center gap-3 text-[14px] font-semibold text-gray-700">
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 transition-colors">
                        <Megaphone className="w-4 h-4" />
                      </div>
                      Run Ads
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-gray-300 group-hover:text-emerald-600 transition-colors" />
                  </button>
                  <button className="w-full flex items-center justify-between p-3.5 rounded-xl border border-gray-100 hover:border-orange-200 hover:bg-orange-50/50 transition-all group">
                    <div className="flex items-center gap-3 text-[14px] font-semibold text-gray-700">
                      <div className="p-2 rounded-lg bg-orange-50 text-orange-600 group-hover:bg-orange-100 transition-colors">
                        <Receipt className="w-4 h-4" />
                      </div>
                      Add Expense
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-gray-300 group-hover:text-orange-600 transition-colors" />
                  </button>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-[1.25rem] shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
                  <a href="#" className="flex items-center gap-1 text-[13px] font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                    View All
                  </a>
                </div>
                <div className="space-y-6">
                   {/* Item 1 */}
                   <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0 mt-0.5">
                         <Globe className="w-4 h-4" />
                      </div>
                      <div>
                         <p className="text-[14px] font-medium text-gray-900 leading-snug">Website updated</p>
                         <p className="text-[13px] text-gray-500 mt-0.5 mb-1">New landing page published</p>
                         <p className="text-[12px] font-medium text-indigo-400">2h ago</p>
                      </div>
                   </div>
                   {/* Item 2 */}
                   <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 shrink-0 mt-0.5">
                         <Receipt className="w-4 h-4" />
                      </div>
                      <div>
                         <p className="text-[14px] font-medium text-gray-900 leading-snug">Payment successful</p>
                         <p className="text-[13px] text-gray-500 mt-0.5 mb-1">Google Ads invoice paid</p>
                         <p className="text-[12px] font-medium text-emerald-400">5h ago</p>
                      </div>
                   </div>
                   {/* Item 3 */}
                   <div className="flex gap-4">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0 mt-0.5">
                         <Megaphone className="w-4 h-4" />
                      </div>
                      <div>
                         <p className="text-[14px] font-medium text-gray-900 leading-snug">Campaign paused</p>
                         <p className="text-[13px] text-gray-500 mt-0.5 mb-1">Winter Sale 2024 (Budget limit)</p>
                         <p className="text-[12px] font-medium text-orange-400">Yesterday</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <button className="fixed bottom-8 right-8 w-[50px] h-[50px] bg-[#533d82] hover:bg-[#433068] text-white rounded-xl shadow-lg shadow-indigo-200 flex items-center justify-center transition-all z-50 hover:-translate-y-1">
        <PlusIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
