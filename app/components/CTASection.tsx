"use client";

/**
 * Componente da seção de Call-to-Action para doações
 */
export default function CTASection() {
  const handleDonateClick = () => {
    console.log("Botão Quero Doar Agora clicado");
    // TODO: Implementar navegação para página de doação
  };

  const handleVolunteerClick = () => {
    console.log("Botão Seja um Voluntário clicado");
    // TODO: Implementar navegação para página de voluntariado
  };

  return (
    <section className="w-full py-16 bg-primary text-white">
      <div className="max-w-[960px] mx-auto px-4 text-center">
        <span className="material-symbols-outlined text-5xl mb-4 opacity-90">
          favorite
        </span>
        <h2 className="text-3xl md:text-4xl font-black mb-6">
          Sua ajuda é a nossa força
        </h2>
        <p className="text-lg md:text-xl font-medium opacity-90 mb-10 max-w-2xl mx-auto">
          Não importa o valor, cada doação contribui diretamente para manter
          nossos projetos vivos e levar esperança para quem mais precisa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-lg transition-colors text-lg"
            onClick={handleDonateClick}
          >
            Quero Doar Agora
          </button>
          <button
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition-colors text-lg"
            onClick={handleVolunteerClick}
          >
            Seja um Voluntário
          </button>
        </div>
      </div>
    </section>
  );
}

