'use client';

import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

export default function SignupModal({ onClose }) {
  const [email, setEmail] = useState('');

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 relative">
        <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
          <IoClose size={24} />
        </button>
        <h2 className="text-center text-lg font-semibold text-gray-800">Please sign in to get started.</h2>
        
        <div className="mt-4">
          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100">
            <FcGoogle className="mr-2" size={20} /> Sign in with Google
          </button>
          <button className="flex items-center justify-center w-full py-2 mt-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100">
            <FaApple className="mr-2" size={20} /> Sign in with Apple
          </button>
        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <input 
          type="email" 
          placeholder="Your email address" 
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full bg-indigo-600 text-white py-2 mt-3 rounded-lg font-medium hover:bg-indigo-700">
          Sign in with Email
        </button>
      </div>
    </div>
  );
}


