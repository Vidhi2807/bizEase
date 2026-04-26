import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Storefront, 
  Briefcase, 
  CheckCircle, 
  Palette, 
  Lightbulb, 
  ArrowBack, 
  ArrowForward 
} from './icons';

export default function Onboarding() {
  const navigate = useNavigate();
  // Ensure "services" is selected by default as in the design
  const [selectedIndustry, setSelectedIndustry] = useState('services');

  const industries = [
    {
      id: 'ecommerce',
      icon: Storefront,
      title: 'E-commerce',
      description: 'Selling physical or digital products online.'
    },
    {
      id: 'services',
      icon: Briefcase,
      title: 'Services',
      description: 'Agencies, consultants, and local service providers.'
    },
    {
      id: 'content',
      icon: Palette,
      title: 'Content Creator',
      description: 'Influencers, bloggers, and creative professionals.'
    }
  ];

  const handleNext = () => {
    // Proceed to next step
    console.log("Selected Industry:", selectedIndustry);
  };

  return (
    <div className="min-h-screen bg-[#f9f8fc] font-sans flex flex-col relative pb-32 xl:pb-0">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 px-6 sm:px-12 py-4 flex items-center justify-between top-0 sticky z-10 shadow-sm">
        <div className="text-[17px] font-semibold text-[#504192]">BizEase</div>
        <Link to="/" className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors">
          Save & Exit
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col items-center pt-10 sm:pt-16 px-4 sm:px-6 relative z-0">
        <div className="w-full max-w-3xl">
          
          {/* Progress Section */}
          <div className="mb-14 w-full px-2 sm:px-8">
            <div className="flex justify-between items-center text-xs font-bold mb-3">
              <span className="text-[#504192]">Step 1 of 3</span>
              <span className="text-gray-500">Business Setup</span>
            </div>
            {/* The single long pill-shaped progress bar */}
            <div className="w-full bg-[#f0ecfe] h-[6px] rounded-full flex overflow-hidden">
              <div className="bg-[#504192] w-1/3 h-full rounded-r-lg"></div>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center mb-10 px-4">
            <h1 className="text-[22px] font-semibold text-gray-800 mb-2">Tell us about your business</h1>
            <p className="text-[14px] text-gray-500 font-medium">We'll customize your dashboard based on your industry.</p>
          </div>

          {/* Selections Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14 px-2">
            {industries.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedIndustry === item.id;
              
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedIndustry(item.id)}
                  className={`relative p-6 rounded-[10px] border-[1.5px] cursor-pointer transition-all ${
                    isSelected 
                      ? 'border-[#504192] bg-white shadow-sm' 
                      : 'border-transparent bg-white hover:border-gray-200 shadow-sm'
                  }`}
                >
                  {/* Selected checkmark badge in top-right corner */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 text-[#504192]">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  )}

                  {/* Icon Block */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    isSelected ? 'bg-[#504192] text-white' : 'bg-[#EAE6FF] text-[#6b5dc2]'
                  }`}>
                    <Icon className="w-[22px] h-[22px]" />
                  </div>

                  <h3 className="font-semibold text-[15px] text-gray-900 mb-[6px]">{item.title}</h3>
                  <p className="text-[13px] text-gray-500 leading-snug">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Step Actions */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-6 px-2 sm:px-4">
            <button 
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center text-[14px] font-medium text-gray-400 hover:text-gray-600 transition-colors"
            >
              <ArrowBack className="w-4 h-4 border-2 border-transparent mr-1" />
              Back
            </button>
            
            <button 
              type="button"
              onClick={handleNext}
              className="flex items-center justify-center py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-[#504192] hover:bg-[#3B306B] transition-colors shadow-sm"
            >
              Next Step
              <ArrowForward className="w-4 h-4 ml-1.5" />
            </button>
          </div>

        </div>
      </main>

      {/* Floating Quick Tip (Hidden on small screens, shown absolute or fixed on large) */}
      <div className="static xl:fixed xl:bottom-8 xl:right-8 mt-12 mb-8 xl:m-0 mx-auto max-w-sm w-[90%] sm:w-auto bg-white rounded-xl shadow-[0_4px_25px_rgb(0,0,0,0.05)] border border-gray-100 p-6 z-50">
        <div className="flex items-center mb-3 text-[#a08320] font-semibold text-[14px]">
          <Lightbulb className="w-4 h-4 mr-2" />
          Quick Tip
        </div>
        <p className="text-[13px] text-gray-600 leading-relaxed mb-5">
          Selecting "Services" will unlock our specialized Appointment Booking module in your final dashboard setup.
        </p>
        
        <div className="border-t border-gray-100 pt-4 flex items-center">
          <div className="w-8 h-8 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-gray-200">
            <img src="https://i.pravatar.cc/150?img=32" alt="Sarah from BizEase" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-900">Sarah from BizEase</p>
            <p className="text-[10px] text-gray-500 font-medium mt-0.5">Online now to help</p>
          </div>
        </div>
      </div>
    </div>
  );
}
