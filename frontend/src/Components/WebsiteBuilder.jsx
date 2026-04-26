import React from 'react';
import { Link } from 'react-router-dom';

// Inline Icons
const SearchIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const DesktopIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
  </svg>
);

const MobileIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
    <line x1="12" y1="18" x2="12.01" y2="18"></line>
  </svg>
);

const RocketIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

const HelpIcon = ({ className }) => (
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

const TextIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="4 7 4 4 20 4 20 7"></polyline>
    <line x1="9" y1="20" x2="15" y2="20"></line>
    <line x1="12" y1="4" x2="12" y2="20"></line>
  </svg>
);

const AlignLeftIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="21" y1="6" x2="3" y2="6"></line>
    <line x1="15" y1="12" x2="3" y2="12"></line>
    <line x1="17" y1="18" x2="3" y2="18"></line>
  </svg>
);
const AlignCenterIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="21" y1="6" x2="3" y2="6"></line>
    <line x1="17" y1="12" x2="7" y2="12"></line>
    <line x1="19" y1="18" x2="5" y2="18"></line>
  </svg>
);
const AlignRightIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="21" y1="6" x2="3" y2="6"></line>
    <line x1="21" y1="12" x2="9" y2="12"></line>
    <line x1="21" y1="18" x2="7" y2="18"></line>
  </svg>
);

const ImageIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

const ButtonIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="8" width="18" height="8" rx="2" ry="2"></rect>
  </svg>
);

const VideoIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <line x1="7" y1="2" x2="7" y2="22"></line>
    <line x1="17" y1="2" x2="17" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="2" y1="7" x2="7" y2="7"></line>
    <line x1="2" y1="17" x2="7" y2="17"></line>
    <line x1="17" y1="17" x2="22" y2="17"></line>
    <line x1="17" y1="7" x2="22" y2="7"></line>
  </svg>
);

const ShareIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

const LayersIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
    <polyline points="2 12 12 17 22 12"></polyline>
  </svg>
);

const HistoryIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3v5h5"></path>
    <path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"></path>
    <polyline points="12 7 12 12 15 15"></polyline>
  </svg>
);

const UndoIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 14 4 9 9 4"></polyline>
    <path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>
  </svg>
);

const RedoIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="15 14 20 9 15 4"></polyline>
    <path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>
  </svg>
);

export default function WebsiteBuilder() {
  return (
    <div className="flex flex-col h-screen bg-white font-sans text-gray-800">
      {/* Top Navigation Bar */}
      <header className="h-14 border-b flex items-center justify-between px-4 bg-white shrink-0">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold text-[#4c3983] shrink-0">
            <LayersIcon className="w-5 h-5" />
            BizEase
          </Link>
          <div className="h-6 w-px bg-gray-200"></div>
          <span className="text-[13px] text-gray-500 font-medium">Untitled Website</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 rounded-lg p-0.5">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-semibold bg-white shadow-sm text-[#4c3983]">
              <DesktopIcon className="w-[14px] h-[14px]" />
              Desktop
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[13px] font-medium text-gray-500 hover:text-gray-700 transition">
              <MobileIcon className="w-[14px] h-[14px]" />
              Mobile
            </button>
          </div>
          
          <button className="text-[13px] font-semibold text-gray-600 hover:text-gray-900 ml-2">
            Preview
          </button>
          
          <button className="flex items-center gap-1.5 bg-[#4c3983] hover:bg-[#3f2f6d] text-white px-4 py-1.5 rounded-lg text-[13px] font-semibold transition ml-2">
            Publish
            <RocketIcon className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-600">
            <HelpIcon className="w-[18px] h-[18px]" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <SettingsIcon className="w-[18px] h-[18px]" />
          </button>
          <img src="https://ui-avatars.com/api/?name=Vidhi+Mandaliya&background=e0e7ff&color=4c3983&rounded=true&v=2" alt="Vidhi Mandaliya" className="w-[26px] h-[26px] rounded-full" />
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar - Components */}
        <aside className="w-[260px] bg-white border-r flex flex-col h-full overflow-y-auto shrink-0">
          <div className="p-4 border-b">
            <div className="relative">
              <SearchIcon className="w-[14px] h-[14px] absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search components..." 
                className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-[13px] focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div className="p-4 space-y-6">
            <div>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">Basic Elements</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-indigo-100 bg-[#f8f6fb] rounded-lg p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-indigo-300 transition">
                  <TextIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-[11px] font-semibold text-gray-700">Heading</span>
                </div>
                <div className="border border-gray-200 bg-gray-50/50 rounded-lg p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-gray-300 transition">
                  <AlignLeftIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-[11px] font-semibold text-gray-700">Text Block</span>
                </div>
                <div className="border border-gray-200 bg-gray-50/50 rounded-lg p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-gray-300 transition">
                  <ImageIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-[11px] font-semibold text-gray-700">Image</span>
                </div>
                <div className="border border-gray-200 bg-gray-50/50 rounded-lg p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-gray-300 transition">
                  <ButtonIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-[11px] font-semibold text-gray-700">Button</span>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">Layout Sections</p>
              <div className="space-y-2">
                <div className="border border-gray-200 bg-gray-50/50 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:border-gray-300 transition">
                  <div className="w-6 h-4 bg-[#d0c9f1] rounded flex-shrink-0"></div>
                  <span className="text-[12px] font-semibold text-gray-700">Hero Section</span>
                </div>
                <div className="border border-gray-200 bg-gray-50/50 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:border-gray-300 transition">
                  <div className="w-6 h-4 flex gap-0.5 flex-shrink-0">
                    <div className="w-1/3 bg-[#d0c9f1] rounded-sm"></div>
                    <div className="w-1/3 bg-[#e5e1f8] rounded-sm"></div>
                    <div className="w-1/3 bg-[#d0c9f1] rounded-sm"></div>
                  </div>
                  <span className="text-[12px] font-semibold text-gray-700">Feature Grid</span>
                </div>
                <div className="border border-gray-200 bg-gray-50/50 rounded-lg p-3 flex items-center gap-3 cursor-pointer hover:border-gray-300 transition">
                  <div className="w-6 h-4 flex flex-col gap-0.5 flex-shrink-0 justify-center">
                    <div className="h-1 bg-[#d0c9f1] rounded-sm w-full"></div>
                    <div className="h-1 bg-[#e5e1f8] rounded-sm w-3/4"></div>
                  </div>
                  <span className="text-[12px] font-semibold text-gray-700">Pricing Table</span>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">Media & Social</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="border border-gray-200 bg-gray-50/50 rounded-lg p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-gray-300 transition">
                  <VideoIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-[11px] font-semibold text-gray-700">Video</span>
                </div>
                <div className="border border-gray-200 bg-gray-50/50 rounded-lg p-3 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-gray-300 transition">
                  <ShareIcon className="w-5 h-5 text-gray-600" />
                  <span className="text-[11px] font-semibold text-gray-700">Social Icons</span>
                </div>
              </div>
            </div>

          </div>
        </aside>

        {/* Canvas - Middle Area */}
        <main className="flex-1 bg-[#f0ecf6] overflow-y-auto p-8 flex justify-center relative">
          <div className="w-full max-w-[800px] bg-white shadow-sm border border-gray-200 rounded-b-xl min-h-full">
            
            {/* Website Preview Content */}
            <div className="p-8 pb-12 rounded-lg relative overflow-hidden bg-white group">
                {/* Highlight box around Hero block */}
                <div className="absolute inset-2 border-2 border-dashed border-[#57419e] bg-[#57419e]/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 rounded"></div>
                
                {/* Header Navbar */}
                <div className="flex items-center justify-between mb-16 relative z-20">
                   <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[#3b277d] flex items-center justify-center text-white">
                         <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10L7 0L14 10L7 20L0 10Z" fill="currentColor"/>
                         </svg>
                      </div>
                      <span className="text-xl font-bold text-gray-900">Velocity</span>
                   </div>
                   <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-gray-600">
                     <a href="#" className="hover:text-gray-900">Services</a>
                     <a href="#" className="hover:text-gray-900">Process</a>
                     <a href="#" className="hover:text-gray-900">Portfolio</a>
                   </nav>
                   <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-[13px] font-semibold">
                      Hire Us
                   </button>
                </div>

                {/* Hero section inside builder */}
                <div className="flex justify-between relative z-20">
                   <div className="max-w-[450px]">
                      <span className="inline-block px-3 py-1 bg-[#ebe5f5] text-[#553f9e] rounded-full text-[12px] font-bold mb-6">
                         Design Studio v2.0
                      </span>
                      {/* Active edited element */}
                      <div className="relative">
                        <div className="absolute -inset-1 border-2 border-[#57419e] rounded shadow-sm z-0"></div>
                        <h1 className="text-[52px] leading-[1.05] font-bold text-gray-900 mb-6 relative z-10 bg-white">
                           Elevate your <br/>brand with <br/>digital <br/>excellence.
                        </h1>
                      </div>
                      
                      <p className="text-gray-500 text-[16px] leading-relaxed mb-8 pr-8">
                         We create immersive digital experiences that resonate with modern audiences through high-fidelity design and technical precision.
                      </p>

                      <div className="flex items-center gap-4">
                         <button className="bg-[#4d3a82] hover:bg-[#3b2b64] text-white px-8 py-3.5 rounded-lg text-[14px] font-bold transition-colors">
                            Get Started
                         </button>
                         <button className="flex items-center gap-2 border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3.5 rounded-lg text-[14px] font-bold transition-colors">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            View Reel
                         </button>
                      </div>
                   </div>

                   {/* Right side image placeholder */}
                   <div className="w-[300px] h-[200px] bg-[#3a3530] rounded-xl self-center relative overflow-hidden flex items-end justify-center shadow-lg transform translate-y-8 mr-4">
                      {/* Faux laptop matching image loosely */}
                      <div className="w-[200px] h-[120px] bg-gray-800 rounded-t-lg mx-auto border-[4px] border-b-0 border-gray-700 relative">
                         <div className="absolute inset-0 bg-black"></div>
                      </div>
                      <div className="absolute bottom-0 w-full h-[6px] bg-gray-500"></div>
                      <div className="absolute bottom-[6px] w-[240px] h-3 bg-gray-300 rounded-t-sm"></div>
                   </div>
                </div>
            </div>

            {/* Next section stub to match image */}
            <div className="p-16 text-center border-t border-gray-100">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategic Capabilities</h2>
               <p className="text-gray-500 text-[15px] max-w-2xl mx-auto mb-12">We provide end-to-end solutions that scale with your business needs and market demands.</p>
               
               <div className="grid grid-cols-2 gap-6">
                  <div className="h-[200px] border border-gray-200 rounded-2xl bg-gray-50/50 flex flex-col items-center justify-center relative shadow-sm">
                      <div className="absolute right-4 top-4 text-[#c8bdf1]">
                        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      </div>
                  </div>
                  <div className="h-[200px] border border-gray-900 rounded-2xl bg-[#1c1c1c] shadow-lg flex flex-col items-center justify-center relative">
                     <div className="absolute left-6 bottom-6 text-white w-10 h-10 border-2 border-white/20 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                     </div>
                  </div>
               </div>
            </div>

          </div>

          {/* Floating Action Buttons bottom right canvas */}
          <div className="fixed bottom-6 right-[300px] flex flex-col gap-3 mr-6 z-50">
             <button className="w-11 h-11 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 transition">
                <UndoIcon className="w-4 h-4" />
             </button>
             <button className="w-11 h-11 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-500 hover:text-gray-800 transition">
                <RedoIcon className="w-4 h-4 ml-0.5" />
             </button>
             <button className="w-12 h-12 bg-[#4b3780] rounded-xl shadow-lg shadow-indigo-200 flex items-center justify-center text-white mt-1 hover:bg-[#3d2a6a] transition transform hover:-translate-y-0.5">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
             </button>
          </div>
        </main>

        {/* Right Sidebar - Properties */}
        <aside className="w-[280px] bg-white border-l h-full overflow-y-auto shrink-0 flex flex-col">
           <div className="p-4 border-b flex items-center justify-between">
              <span className="text-[11px] font-bold text-gray-600 tracking-widest uppercase">Styles</span>
              <div className="flex gap-2">
                 <button className="text-gray-400 hover:text-gray-700">
                    <LayersIcon className="w-4 h-4" />
                 </button>
                 <button className="text-gray-400 hover:text-gray-700">
                    <HistoryIcon className="w-4 h-4" />
                 </button>
              </div>
           </div>

           <div className="p-4 border-b bg-indigo-50/20">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded bg-[#ebdcf9] text-[#5c4091] font-bold flex items-center justify-center text-sm shrink-0">
                    T
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-[#5c4091] tracking-wider mb-0.5">HERO_TITLE</p>
                    <p className="text-[13px] font-bold text-gray-900 leading-none">Heading Element</p>
                 </div>
              </div>
           </div>

           <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-4 cursor-pointer">
                 <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Typography</span>
                 <svg className="w-3.5 h-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
              </div>
              
              <div className="space-y-4">
                 <div>
                    <label className="block text-[11px] font-semibold text-gray-600 mb-1.5">Font Family</label>
                    <div className="relative">
                       <select className="w-full appearance-none bg-white border border-gray-200 rounded-md py-1.5 pl-3 pr-8 text-[13px] font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                          <option>Inter (Default)</option>
                          <option>Roboto</option>
                       </select>
                       <svg className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </div>
                 </div>

                 <div className="flex gap-3">
                    <div className="flex-1">
                       <label className="block text-[11px] font-semibold text-gray-600 mb-1.5">Weight</label>
                       <div className="relative">
                          <select className="w-full appearance-none bg-white border border-gray-200 rounded-md py-1.5 pl-3 pr-8 text-[13px] font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                             <option>700 (Bold)</option>
                             <option>400 (Normal)</option>
                          </select>
                          <svg className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>
                       </div>
                    </div>
                    <div className="flex-1">
                       <label className="block text-[11px] font-semibold text-gray-600 mb-1.5">Size</label>
                       <div className="flex items-center border border-gray-200 rounded-md bg-white px-3 py-1.5">
                          <input type="text" value="48" readOnly className="w-full bg-transparent text-[13px] font-bold text-gray-700 outline-none" />
                          <span className="text-[10px] font-bold text-gray-400 ml-1">PX</span>
                       </div>
                    </div>
                 </div>

                 <div className="flex border border-gray-200 rounded-md overflow-hidden">
                    <button className="flex-1 py-1.5 flex justify-center bg-gray-50 border-r border-gray-200 text-gray-800">
                       <AlignLeftIcon className="w-[14px] h-[14px]" />
                    </button>
                    <button className="flex-1 py-1.5 flex justify-center bg-[#eae4f4] border-r border-gray-200 text-[#4c3983]">
                       <AlignCenterIcon className="w-[14px] h-[14px]" />
                    </button>
                    <button className="flex-1 py-1.5 flex justify-center bg-white text-gray-500 hover:bg-gray-50">
                       <AlignRightIcon className="w-[14px] h-[14px]" />
                    </button>
                 </div>
              </div>
           </div>

           <div className="p-4 border-b">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Spacing</span>
               </div>
               
               <div className="bg-[#f8f6fb] border border-gray-100 rounded-lg p-3 py-4 flex flex-col gap-2">
                  <div className="text-center bg-[#efe9f9] text-[#7154ac] text-[9px] font-bold py-2 rounded border border-[#dacced]">MARGIN (24px)</div>
                  <div className="bg-[#e2d5f3] p-1.5 rounded border border-[#c1acf1] shadow-inner text-center">
                     <div className="bg-[#efe9f9] text-[#7154ac] text-[9px] font-bold py-2 rounded">PADDING (48px)</div>
                  </div>
                  <div className="text-center bg-[#efe9f9] text-[#7154ac] text-[9px] font-bold py-2 rounded border border-[#dacced]">MARGIN (24px)</div>
               </div>
           </div>

           <div className="p-4 flex-1">
               <div className="flex items-center justify-between mb-4">
                 <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Appearance</span>
               </div>

               <div>
                 <label className="block text-[11px] font-semibold text-gray-600 mb-2">Background Color</label>
                 <div className="flex gap-2">
                    <button className="w-8 h-8 rounded border-2 border-[#57419e] bg-white"></button>
                    <button className="w-8 h-8 rounded border border-gray-200 bg-[#1e1e1e]"></button>
                    <button className="w-8 h-8 rounded border border-gray-200 bg-[#3c2a79]"></button>
                    <button className="w-8 h-8 rounded border border-gray-200 bg-[#5d5977]"></button>
                    <button className="h-8 flex-1 rounded border border-gray-200 border-dashed bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-gray-100">
                       <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                 </div>
               </div>

               <div className="mt-5 flex items-center justify-between">
                 <span className="text-[12px] font-semibold text-gray-700">Opacity</span>
                 <span className="text-[12px] font-bold text-gray-900">100%</span>
               </div>
               <div className="mt-2 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-gray-300"></div>
               </div>
           </div>
           
           <div className="p-4 border-t bg-gray-50/50 mt-auto">
              <button className="w-full py-2 bg-white border border-gray-200 rounded-lg text-[12px] font-bold text-gray-700 flex items-center justify-center gap-2 shadow-sm hover:bg-gray-50 transition-colors">
                 <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                 Advanced CSS
              </button>
           </div>
        </aside>

      </div>
    </div>
  );
}
