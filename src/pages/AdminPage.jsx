import React, { useState } from 'react';

function AdminPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Bagian Kiri: Branding & Tagline */}
      <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500 text-white p-10">
        <h1 className="text-5xl font-bold mb-4">Sentify</h1>
        <p className="text-lg max-w-md text-center">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum</p>
      </div>

      {/* Bagian Kanan: Form Login */}
      <div className="flex flex-1 items-center justify-center p-8 bg-white">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Login</h2>
          <form>
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="youremail@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-transparent"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="@1234jabdmdnsjahdbaiabd"
                className="w-full px-4 py-2 border border-gray-300 rounded-md
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           focus:border-transparent"
              />
            </div>

            {/* Checkbox Show Password */}
            <div className="flex items-center mb-6">
              <input type="checkbox" id="showPassword" checked={showPassword} onChange={() => setShowPassword(!showPassword)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
              <label htmlFor="showPassword" className="ml-2 block text-sm text-gray-800">
                Show Password
              </label>
            </div>

            {/* Tombol Login */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 
                         text-white font-semibold rounded-md 
                         transition-colors duration-200 focus:outline-none 
                         focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
