"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../../src/store/authStore";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;
    
    // Sin auth todavía
    setUser({ username });
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffefe] text-[#1a1a1a] selection:bg-[#f5c542] selection:text-[#1a1a1a]">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Bienvenido</h1>
          <p className="text-gray-500">Ingresá a tu cuenta de Cash List</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="username">
              Usuario
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#f5c542] focus:ring-2 focus:ring-[#f5c542]/20 outline-none transition-all duration-200 bg-gray-50/50 focus:bg-white"
              placeholder="tu usuario"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#f5c542] focus:ring-2 focus:ring-[#f5c542]/20 outline-none transition-all duration-200 bg-gray-50/50 focus:bg-white"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1a1a1a] text-white font-medium py-3 rounded-xl hover:bg-black hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-lg shadow-black/10 relative overflow-hidden group"
          >
            <span className="relative z-10">Ingresar</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f5c542]/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </form>
      </div>
    </div>
  );
}
