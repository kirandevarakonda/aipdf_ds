"use client"
import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

type Props = {
    children: React.ReactNode
}

const queryClient = new QueryClient()

const Provider = ({ children }: Props) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Provider;


// "use client"; // Mark it as a client component

// import { useState, useEffect, ReactNode } from "react";
// import { auth } from "/src/firebase"; // Import Firebase auth
// import { onAuthStateChanged, User } from "firebase/auth";
// import { useRouter } from "next/navigation";

// export default function AuthProvider({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     // Listen for authentication state changes
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => unsubscribe();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
