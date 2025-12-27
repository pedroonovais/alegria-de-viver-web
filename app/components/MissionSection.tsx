/**
 * Componente da seção de Missão e Valores
 */
export default function MissionSection() {
  const values = [
    {
      icon: "visibility",
      title: "Transparência Total",
      description:
        "Prestação de contas clara e acessível para todos os doadores. Você sabe exatamente para onde vai sua ajuda.",
    },
    {
      icon: "diversity_1",
      title: "Tratamento Humanizado",
      description:
        "Cuidado e respeito em cada interação. Tratamos cada beneficiário como parte da nossa família.",
    },
    {
      icon: "trending_up",
      title: "Impacto Real",
      description:
        "Projetos estruturados que trazem alegria e esperança para a comunidade.",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-text-main text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              Nossa Missão e Valores
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
              Trabalhamos com transparência e dedicação para garantir que cada
              doação faça a diferença na comunidade.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-background-light p-6 hover:shadow-md transition-shadow"
              >
                <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">
                    {value.icon}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-text-main text-xl font-bold">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed">
                    {value.description}
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

