"use client";

import { useAuthStore } from "../../src/store/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    // Optionally redirect back to login if no user is set
    // if (!user) {
    //   router.push("/login");
    // }
  }, [user, router]);

  return (
    <div className="min-h-screen bg-[#fffefe] text-[#1a1a1a] p-8">
      <header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <h1 className="text-3xl font-bold">
          Hola, <span className="text-[#f5c542]">{user?.username || "Invitado"}</span> 👋
        </h1>
        <button 
          onClick={() => {
            useAuthStore.getState().setUser(null);
            router.push("/login");
          }}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
        >
          Cerrar Sesión
        </button>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <DashboardCard title="Mensual" description="Ver el resumen de finanzas por mes." href="/dashboard/mensual" />
          <DashboardCard title="Anual" description="Analizar el ciclo completo del año." href="/dashboard/anual" />
          <DashboardCard title="Rango" description="Filtrar movimientos por fechas personalizadas." href="/dashboard/rango" />
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';

function DashboardCard({ title, description, href }: { title: string, description: string, href: string }) {
  return (
    <Link href={href} className="group relative bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-left overflow-hidden block">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#f5c542] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <p className="text-gray-500 leading-relaxed">{description}</p>
      
      <div className="mt-8 flex items-center text-sm font-semibold text-[#1a1a1a] group-hover:text-[#f5c542] transition-colors duration-300">
        Ver Detalle
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
