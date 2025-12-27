/**
 * Componente da seção "Por que Contribuir"
 * Explica os motivos e benefícios de contribuir com projetos solidários
 */
export default function WhyContributeSection() {
  const reasons = [
    {
      icon: "groups",
      title: "Fortalecimento Comunitário",
      description:
        "Contribuições direcionadas ajudam a construir uma rede de apoio sólida na comunidade, criando um ambiente mais acolhedor e colaborativo para todos.",
    },
    {
      icon: "verified",
      title: "Uso Responsável dos Recursos",
      description:
        "Trabalhamos com planejamento e acompanhamento constante, garantindo que cada recurso seja aplicado de forma eficiente e transparente nos projetos.",
    },
    {
      icon: "timeline",
      title: "Transformação Sustentável",
      description:
        "Promovendo mudanças estruturais que beneficiam a comunidade de forma permanente.",
    },
    {
      icon: "handshake",
      title: "Participação Ativa",
      description:
        "Contribuir permite que você faça parte de uma iniciativa coletiva, onde cada participação soma para alcançar objetivos comuns de bem-estar social.",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-text-main text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Por que Contribuir?
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              Contribuir com projetos solidários é uma forma prática de participar
              ativamente na construção de uma sociedade mais justa e acolhedora.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-background-light p-6 hover:shadow-md transition-shadow"
              >
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    {reason.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-main text-xl font-bold">
                    {reason.title}
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

