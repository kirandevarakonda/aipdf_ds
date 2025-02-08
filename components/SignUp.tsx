// 'use client';

// import { useState } from 'react';
// import { FcGoogle } from 'react-icons/fc';
// import { FaApple } from 'react-icons/fa';
// import { IoClose } from 'react-icons/io5';

// export default function SignupModal({ onClose }) {
//   const [email, setEmail] = useState('');

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//       <div className="bg-white p-6 rounded-2xl shadow-xl w-96 relative">
//         <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
//           <IoClose size={24} />
//         </button>
//         <h2 className="text-center text-lg font-semibold text-gray-800">Please sign in to get started.</h2>
        
//         <div className="mt-4">
//           <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100">
//             <FcGoogle className="mr-2" size={20} /> Sign in with Google
//           </button>
//           <button className="flex items-center justify-center w-full py-2 mt-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100">
//             <FaApple className="mr-2" size={20} /> Sign in with Apple
//           </button>
//         </div>

//         <div className="flex items-center my-4">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="px-3 text-gray-500 text-sm">OR</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         <input 
//           type="email" 
//           placeholder="Your email address" 
//           className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <button className="w-full bg-indigo-600 text-white py-2 mt-3 rounded-lg font-medium hover:bg-indigo-700">
//           Sign in with Email
//         </button>
//       </div>
//     </div>
//   );
// }


'use client';

import { createContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { auth, db, googleProvider, signInWithPopup, signInWithEmailAndPassword } from '../src/firebase';
import { doc, getDoc } from 'firebase/firestore';
import React,{ useContext } from 'react';
import { useTheme } from './SignIn';
import { LoginContext } from "../src/app/page";


export let uid=null;
// export const LoginContext = createContext();

// export const LoginProvider = ({ children }) => {
//   const [theme, setTheme] = useState(null);
//   return (
//     <LoginContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };




export default function SignupModal({ onClose }) {
  const {login,setLogin} = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userUid, setUserUid] = useState(null);
  const {userId,setUserId} = useContext(LoginContext);

  // const {theme,setTheme} = useContext(LoginContext);
  // 🔹 Sign in with Google
  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const user = auth.currentUser;
      console.log("Google User:", user);
    //  const uid = await fetchUserUid(user?.uid);
      uid = user?.uid;
      // if(theme===null){
      //   setTheme(uid)
      //   console.log(uid)
      // }
      setUserId(user?.uid);
      setLogin(!login);
     setLoading(!loading);
     console.log(uid,login);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Sign in with Email
  const handleEmailSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      console.log("Email User:", user);
      await fetchUserUid(user.uid);
    } catch (error) {
      console.error("Email Sign-In Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Fetch User UID from Firestore
  const fetchUserUid = async (uid) => {
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setUserUid(userSnap.data().uid);
        console.log("User UID from Firestore:", userSnap.data().uid);
      } else {
        console.log("No user data found.");
      }
    } catch (error) {
      console.error("Error fetching UID:", error);
    }
  };

  return (
    <>{userId==null?
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-96 relative">
        <button className="absolute top-4 right-4 text-gray-600" onClick={onClose}>
          <IoClose size={24} />
        </button>
        <h2 className="text-center text-lg font-semibold text-gray-800">Please sign in to get started.</h2>

        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-100"
          >
            <FcGoogle className="mr-2" size={20} /> {loading ? "Signing in..." : "Sign in with Google"}
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

        <input
          type="password"
          placeholder="Your password"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleEmailSignIn}
          className="w-full bg-indigo-600 text-white py-2 mt-3 rounded-lg font-medium hover:bg-indigo-700"
        >
          {loading ? "Signing in..." : "Sign in with Email"}
        </button>

        {userUid && <p className="mt-4 text-green-600 text-center">UID: {userUid}</p>}
      </div>
    </div>
    :''}
    </>
  );
}

