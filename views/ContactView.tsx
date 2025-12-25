
import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="p-6 space-y-8 min-h-screen">
      <div className="space-y-1">
        <h2 className="text-3xl font-black text-white">Atendimento</h2>
        <p className="text-gray-500">Estamos aqui para tirar suas dúvidas.</p>
      </div>

      <div className="space-y-4">
        {[
          { label: 'WhatsApp Suporte', value: '(11) 99999-9999', icon: 'M17 8l4 4m0 0l-4 4m4-4H3', color: 'bg-emerald-500' },
          { label: 'Instagram Oficial', value: '@karolvaquinhas', icon: 'M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z', color: 'bg-pink-500' },
          { label: 'E-mail para Parcerias', value: 'contato@karol.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', color: 'bg-cyan-500' },
        ].map((item, i) => (
          <button key={i} className="w-full glass p-5 rounded-3xl flex items-center space-x-4 border border-white/5 active:scale-95 transition-all text-left">
            <div className={`w-12 h-12 ${item.color}/10 rounded-2xl flex items-center justify-center text-white`}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
            </div>
            <div className="flex-1">
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest block">{item.label}</span>
              <span className="text-lg font-bold text-white">{item.value}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="p-8 glass rounded-3xl space-y-6">
        <h4 className="font-bold text-white text-lg">Perguntas Frequentes</h4>
        <div className="space-y-6">
          {[
            { q: 'Como recebo meus números?', a: 'Os números são gerados automaticamente após a confirmação do pagamento via PIX.' },
            { q: 'Quanto tempo demora a compensação?', a: 'Pagamentos via PIX são compensados instantaneamente em nosso sistema.' },
            { q: 'Onde vejo o resultado?', a: 'Os resultados são postados em nosso Instagram oficial e na aba "Ganhadores" deste app.' }
          ].map((faq, i) => (
            <div key={i} className="space-y-1">
              <p className="font-bold text-cyan-400 text-sm">¿ {faq.q}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center pb-10">
        <p className="text-[10px] text-gray-700 font-black uppercase tracking-widest">Karol Vaquinhas v1.0.4 - 2024</p>
      </div>
    </div>
  );
};

export default ContactView;
