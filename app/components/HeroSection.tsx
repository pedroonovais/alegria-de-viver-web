"use client";

/**
 * Componente da seção hero (banner principal)
 */
export default function HeroSection() {
  const handleDonationClick = () => {
    console.log("Botão Faça uma Doação clicado");
    // TODO: Implementar navegação para página de doação
  };

  const handleHistoryClick = () => {
    console.log("Botão Conheça Nossa História clicado");
    // TODO: Implementar navegação para página sobre nós
  };

  return (
    <section className="w-full">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-8 lg:py-12">
        <div className="@container">
          <div
            className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 sm:px-12 sm:pb-16 shadow-lg overflow-hidden relative group"
            style={{
              backgroundImage:
                'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0,0,0,0) 100%), url("/cover-hero-section.jpeg")',
            }}
          >
            <div
              className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"
              aria-label="Group of diverse happy volunteers hugging outdoors in sunlight"
            />
            <div className="relative z-10 flex flex-col gap-4 text-left max-w-3xl">
              <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em] drop-shadow-md">
                Transformando Vidas com{" "}
                <span className="text-primary">Alegria</span> e Solidariedade
              </h1>
              <h2 className="text-gray-100 text-base sm:text-lg font-medium leading-relaxed max-w-2xl drop-shadow-sm">
                Construindo um futuro melhor através
                da sua generosidade. Junte-se a nós nesta missão de amor ao
                próximo.
              </h2>
            </div>
            <div className="relative z-10 flex flex-wrap gap-4 mt-2">
              <button
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-colors text-white text-base font-bold shadow-lg"
                onClick={handleDonationClick}
              >
                <span className="truncate">Faça uma Doação</span>
              </button>
              <button
                className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/90 hover:bg-white transition-colors text-text-main text-base font-bold shadow-lg backdrop-blur-sm"
                onClick={handleHistoryClick}
              >
                <span className="truncate">Conheça Nossa História</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

