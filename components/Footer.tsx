
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-24 md:pb-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-6">
          <div className="bg-white px-3 py-1.5 rounded inline-block">
            <span className="text-black font-black text-sm tracking-tighter">KAROL - VAQUINHA</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
            A plataforma líder em sorteios e vaquinhas online. Sua sorte começa aqui com segurança e transparência total em cada projeto.
          </p>
          <div className="space-y-4">
            <h4 className="text-white font-black text-xs uppercase tracking-widest italic">Redes sociais</h4>
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 hover:text-cyan-400 border border-white/5 transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-widest italic">Informações</h4>
            <ul className="text-gray-500 text-xs space-y-4 font-bold uppercase tracking-tighter">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center space-x-2">
                <span>Termos de uso</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors flex items-center space-x-2">
                <span>Política de privacidade</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-black text-xs uppercase tracking-widest italic">Segurança</h4>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-xl">
                 <img src="https://logodownload.org/wp-content/uploads/2020/02/pix-logo-1-1.png" alt="PIX" className="h-4 grayscale opacity-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto pt-10 border-t border-white/5 text-center">
        <p className="text-gray-700 text-[9px] font-black uppercase tracking-[0.3em]">
          KAROL VAQUINHA © 2024 - CONFIANÇA QUE GERA SORTE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
