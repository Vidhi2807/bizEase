import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  RocketLaunch,
  MailOutline,
  LockOutlined,
  VisibilityOutlined,
  VisibilityOffOutlined,
  ArrowForward,
  Google,
  Apple,
  Globe,
  Megaphone,
  Receipt,
  Chart,
  Building
} from './icons';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      businessName: '',
      email: '',
      password: '',
      agreeTerms: false,
    },
    validationSchema: Yup.object({
      businessName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
      agreeTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    }),
    onSubmit: values => {
      console.log('Signup Form values', values);
      if (values.email === 'vidhi@gmail.com' && values.password === '12345678') {
        navigate('/');
      } else {
        navigate('/onboarding');
      }
    },
  });

  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* Left Side (Purple Section) */}
      <div className="hidden lg:flex w-1/2 bg-[#504192] text-white p-8 flex-col justify-between">
        <div>
          <div className="flex items-center text-xl font-semibold mb-8">
            <RocketLaunch className="h-6 w-6 mr-2" />
            BizEase
          </div>
          
          <div className="max-w-md">
            <h1 className="text-xl font-medium mb-3 text-[#E6E2FF]">Empower your business growth journey.</h1>
            <p className="text-[#BDB4E8] text-sm mb-6 leading-relaxed">
              Manage your presence, track expenses, and run ads from one unified platform built for scale.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
                <Globe className="h-5 w-5 mb-2 text-[#BDB4E8]" />
                <h3 className="font-medium text-sm mb-1">Website Builder</h3>
                <p className="text-[11px] text-[#BDB4E8] leading-relaxed">Launch professional sites in minutes with drag-and-drop ease.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
                <Megaphone className="h-5 w-5 mb-2 text-[#BDB4E8]" />
                <h3 className="font-medium text-sm mb-1">Ads Manager</h3>
                <p className="text-[11px] text-[#BDB4E8] leading-relaxed">Optimize your reach across social networks seamlessly.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
                <Receipt className="h-5 w-5 mb-2 text-[#BDB4E8]" />
                <h3 className="font-medium text-sm mb-1">Expense Tracking</h3>
                <p className="text-[11px] text-[#BDB4E8] leading-relaxed">Maintain financial health with automated receipt scanning.</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 border border-white/10 hover:bg-white/15 transition-colors">
                <Chart className="h-5 w-5 mb-2 text-[#BDB4E8]" />
                <h3 className="font-medium text-sm mb-1">Growth Analytics</h3>
                <p className="text-[11px] text-[#BDB4E8] leading-relaxed">Real-time data visualization for smarter decisions.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white/10 rounded-xl p-4 border border-white/10 flex items-center mt-6 max-w-lg">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-3 flex-shrink-0 bg-gray-300">
            {/* Using a placeholder avatar since we don't have the image file */}
            <img src="https://i.pravatar.cc/150?img=47" alt="Sarah Chen" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs italic mb-0.5">"BizEase transformed our 5-person startup into a market leader."</p>
            <p className="text-[11px] text-[#BDB4E8]">Sarah Chen, Founder of TechFlow</p>
          </div>
        </div>
      </div>

      {/* Right Side (Form Section) */}
      <div className="w-full lg:w-1/2 bg-[#f9f8fc] flex items-center justify-center p-6 sm:p-8">
        <div className="w-full max-w-[400px]">
          {/* Header */}
          <div className="mb-6 block lg:hidden text-center text-[#504192]">
             <div className="flex justify-center items-center font-bold text-2xl mb-2">
                <div className="bg-[#6B5DC2] text-white p-2 rounded-xl mr-2"><RocketLaunch className="h-5 w-5"/></div>BizEase
             </div>
             <p className="text-gray-500 text-sm">Empower your business growth journey.</p>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
            Create your account
          </h2>
          <p className="text-sm text-gray-500 mb-5">
            Start your 14-day free trial. No credit card required.
          </p>

          {/* Form */}
          <form className="space-y-3.5" onSubmit={formik.handleSubmit}>
            {/* Business Name Field */}
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                Business Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" fontSize="small" />
                </div>
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Acme Corp"
                  className={`block w-full pl-11 pr-3 py-2 bg-white border ${
                    formik.touched.businessName && formik.errors.businessName ? 'border-red-300' : 'border-gray-200'
                  } rounded-lg text-gray-900 focus:outline-none focus:ring-[#504192] focus:border-[#504192] sm:text-sm transition-colors`}
                  {...formik.getFieldProps('businessName')}
                />
              </div>
              {formik.touched.businessName && formik.errors.businessName ? (
                <div className="mt-1 text-[11px] text-red-500">{formik.errors.businessName}</div>
              ) : null}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Work Email
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <MailOutline className="h-5 w-5 text-gray-400" fontSize="small" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  className={`block w-full pl-11 pr-3 py-2 bg-white border ${
                    formik.touched.email && formik.errors.email ? 'border-red-300' : 'border-gray-200'
                  } rounded-lg text-gray-900 focus:outline-none focus:ring-[#504192] focus:border-[#504192] sm:text-sm transition-colors`}
                  {...formik.getFieldProps('email')}
                />
              </div>
              {formik.touched.email && formik.errors.email ? (
                <div className="mt-1 text-[11px] text-red-500">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="text-[11px] text-gray-400">
                  Min. 8 characters
                </div>
              </div>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <LockOutlined className="h-5 w-5 text-gray-400" fontSize="small" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  placeholder="••••••••"
                  className={`block w-full pl-11 pr-10 py-2 bg-white border ${
                    formik.touched.password && formik.errors.password ? 'border-red-300' : 'border-gray-200'
                  } rounded-lg text-gray-900 focus:outline-none focus:ring-[#504192] focus:border-[#504192] sm:text-sm tracking-widest placeholder:tracking-normal transition-colors`}
                  {...formik.getFieldProps('password')}
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none transition-colors"
                  >
                    {showPassword ? (
                      <VisibilityOffOutlined fontSize="small" className="h-5 w-5" />
                    ) : (
                      <VisibilityOutlined fontSize="small" className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="mt-1 text-[11px] text-red-500">{formik.errors.password}</div>
              ) : null}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start pt-1">
              <div className="flex items-center h-4">
                <input
                  id="agreeTerms"
                  name="agreeTerms"
                  type="checkbox"
                  className={`h-3.5 w-3.5 text-[#504192] focus:ring-[#504192] border-gray-300 rounded cursor-pointer transition-colors ${
                    formik.touched.agreeTerms && formik.errors.agreeTerms ? 'border-red-300' : ''
                  }`}
                  {...formik.getFieldProps('agreeTerms')}
                />
              </div>
              <div className="ml-2 text-[13px] leading-tight mt-0.5">
                <label htmlFor="agreeTerms" className="text-gray-600 cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="font-medium text-[#504192] hover:text-[#3B306B]">Terms of Service</a>
                  {' '}and{' '}
                  <a href="#" className="font-medium text-[#504192] hover:text-[#3B306B]">Privacy Policy</a>.
                </label>
                {formik.touched.agreeTerms && formik.errors.agreeTerms ? (
                  <div className="mt-1 text-[11px] text-red-500">{formik.errors.agreeTerms}</div>
                ) : null}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#504192] hover:bg-[#3B306B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#504192] transition-colors"
              >
                Get Started for Free
                <ArrowForward fontSize="small" className="ml-2 -mr-1 h-[18px] w-[18px]" />
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="mt-5">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-[11px] uppercase">
                <span className="px-3 bg-[#f9f8fc] text-gray-400 font-medium tracking-wider">
                  OR SIGN UP WITH
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center items-center py-1.5 px-3 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <Google fontSize="small" className="text-gray-800 mr-2 h-4 w-4" />
                  Google
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center items-center py-1.5 px-3 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <Apple fontSize="small" className="text-gray-800 mr-2 h-4 w-4" />
                  Apple
                </a>
              </div>
            </div>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-[#504192] hover:text-[#3B306B] transition-colors">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
