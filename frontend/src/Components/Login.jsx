import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  GitHub
} from './icons';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Must be at least 8 characters').required('Required'),
    }),
    onSubmit: values => {
      console.log('Form values', values);
    },
  });

  return (
    <div className="min-h-screen bg-[#f9f8fc] flex flex-col justify-center py-4 sm:px-6 lg:px-8 font-sans">
      {/* Header Section */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center">
        <div className="bg-[#6B5DC2] text-white p-2 rounded-xl mb-3 shadow-sm inline-flex items-center justify-center">
          <RocketLaunch fontSize="medium" />
        </div>
        <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900">
          BizEase
        </h2>
        <p className="mt-1 text-center text-sm text-gray-500">
          Growth platform for modern commerce
        </p>
      </div>

      {/* Main Card */}
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-[420px]">
        <div className="bg-white py-6 px-4 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.05)] sm:rounded-[12px] sm:px-10 border border-gray-100">
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1.5 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <MailOutline className="h-5 w-5 text-gray-400" fontSize="small" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  className={`block w-full pl-11 pr-3 py-2 border ${
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
                <div className="text-sm">
                  <a href="#" className="font-medium text-[#504192] hover:text-[#3B306B] transition-colors">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-1.5 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <LockOutlined className="h-5 w-5 text-gray-400" fontSize="small" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className={`block w-full pl-11 pr-10 py-2 border ${
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

            {/* Remember Me */}
            <div className="flex items-center pt-0.5">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-[#504192] focus:ring-[#504192] border-gray-300 rounded cursor-pointer transition-colors"
                {...formik.getFieldProps('rememberMe')}
              />
              <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-600 cursor-pointer">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-1">
              <button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#504192] hover:bg-[#3B306B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#504192] transition-colors"
              >
                Sign In
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
                <span className="px-3 bg-white text-gray-400 font-medium tracking-wider">
                  OR CONTINUE WITH
                </span>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center items-center py-1.5 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <Google fontSize="small" className="text-gray-800 mr-2 h-4 w-4" />
                  Google
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="w-full inline-flex justify-center items-center py-1.5 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                  <GitHub fontSize="small" className="text-gray-800 mr-2 h-4 w-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Texts */}
      <div className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium text-[#504192] hover:text-[#3B306B] transition-colors">
          Create an account
        </Link>
      </div>
      
      <div className="mt-4 flex justify-center space-x-6 text-xs text-gray-500">
        <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Help Center</a>
      </div>
    </div>
  );
}
