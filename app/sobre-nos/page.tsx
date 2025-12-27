import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nós - Alegria de Viver",
  description:
    "Conheça a Associação Alegria de Viver, uma organização sem fins lucrativos que atua na região de Barueri promovendo acolhimento, bem-estar e solidariedade.",
};

/**
 * Página Sobre Nós da Associação Alegria de Viver
 */
export default function SobreNosPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-2 lg:py-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors mb-6 text-sm font-medium z-10 relative"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_back
              </span>
              Voltar para a página inicial
            </Link>
            <div className="@container">
              <div
                className="flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-start justify-end px-6 pb-12 sm:px-12 sm:pb-16 shadow-lg overflow-hidden relative group"
                style={{
                  backgroundImage:
                    'linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0,0,0,0) 100%), url("/sobre-nos-hero.jpg")',
                }}
              >
                <div
                  className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"
                  aria-label="Imagem representativa da Associação Alegria de Viver"
                />
                <div className="relative z-10 flex flex-col gap-4 text-left max-w-3xl">
                  <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em] drop-shadow-md">
                    Conheça a{" "}
                    <span className="text-primary">Alegria de Viver</span>
                  </h1>
                  <h2 className="text-gray-100 text-base sm:text-lg font-medium leading-relaxed max-w-2xl drop-shadow-sm">
                    Uma organização sem fins lucrativos dedicada a transformar
                    vidas através da solidariedade, acolhimento e amor ao próximo
                    na região de Barueri.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Nossa História */}
        <section id="historia" className="w-full py-12 bg-white scroll-mt-24">
          <div className="max-w-[1024px] mx-auto px-4 sm:px-10">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-text-main text-3xl md:text-4xl font-bold mb-6">
                  Nossa História
                </h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-background-light rounded-xl border border-[#e8dbce] p-8">
                  <p className="text-text-secondary text-base leading-relaxed mb-4">
                    A Alegria de Viver foi fundada em 2025 com o propósito
                    de promover acolhimento, bem-estar e momentos de alegria para quem
                    mais precisa. Como uma organização sem fins lucrativos, nascemos
                    do desejo de fazer a diferença na vida das pessoas através de
                    ações concretas e projetos estruturados.
                  </p>
                  <p className="text-text-secondary text-base leading-relaxed mb-4">
                    Apesar de ser uma organização recente, já demonstramos nosso
                    compromisso com a comunidade através de iniciativas como o{" "}
                    <Link
                      href="/projetos/natal-solidario-2025"
                      className="text-primary hover:underline font-medium"
                    >
                      Natal Solidário 2025
                    </Link>
                    , que beneficiou 70 idosos com uma programação completa de
                    acolhimento, atividades de saúde e entrega de itens essenciais.
                  </p>
                  <p className="text-text-secondary text-base leading-relaxed">
                    Trabalhamos exclusivamente com voluntários dedicados, que doam seu
                    tempo e energia para tornar nossos projetos realidade. Sem
                    localização física fixa, nossa atuação se concentra na região de
                    Barueri, onde desenvolvemos ações diretas que impactam
                    positivamente a vida das pessoas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Nossa Missão e Valores */}
        <section className="w-full py-12 bg-background-light">
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
                <div className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-white p-6 hover:shadow-md transition-shadow">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      visibility
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-main text-xl font-bold">
                      Transparência Total
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Prestação de contas clara e acessível para todos os doadores.
                      Você sabe exatamente para onde vai sua ajuda.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-white p-6 hover:shadow-md transition-shadow">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      diversity_1
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-main text-xl font-bold">
                      Tratamento Humanizado
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Cuidado e respeito em cada interação. Tratamos cada
                      beneficiário como parte da nossa família.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-white p-6 hover:shadow-md transition-shadow">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      trending_up
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-main text-xl font-bold">
                      Impacto Real
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Projetos estruturados que trazem alegria e esperança para a
                      comunidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Como Atuamos */}
        <section className="w-full py-12 bg-white">
          <div className="max-w-[1024px] mx-auto px-4 sm:px-10">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-text-main text-3xl md:text-4xl font-bold mb-6">
                  Como Atuamos
                </h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-background-light p-6">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      location_on
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-main text-xl font-bold">
                      Região de Atuação
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Atuamos principalmente na região de Barueri, desenvolvendo
                      projetos que atendem diretamente às necessidades da comunidade
                      local.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-background-light p-6">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      volunteer_activism
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-main text-xl font-bold">
                      Trabalho Voluntário
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Nossa organização é composta exclusivamente por voluntários
                      dedicados, que doam tempo e energia para tornar nossos projetos
                      realidade.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-background-light p-6">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      groups
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-main text-xl font-bold">
                      Projetos Estruturados
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Desenvolvemos ações planejadas e organizadas, com foco em
                      resultados concretos e impacto positivo na vida das pessoas.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-background-light p-6">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      handshake
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-main text-xl font-bold">
                      Parcerias Estratégicas
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Trabalhamos em conjunto com outras organizações e instituições
                      para ampliar nosso alcance e impacto na comunidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Nossos Projetos */}
        <section className="w-full py-12 bg-background-light">
          <div className="max-w-[1024px] mx-auto px-4 sm:px-10">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-text-main text-3xl md:text-4xl font-bold mb-6">
                  Nossos Projetos
                </h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
              </div>

              <div className="bg-white rounded-xl border border-[#e8dbce] p-8">
                <p className="text-text-secondary text-base leading-relaxed mb-6">
                  Desenvolvemos projetos que promovem acolhimento, bem-estar e
                  momentos de alegria. Cada iniciativa é planejada com cuidado para
                  garantir impacto real na vida das pessoas atendidas.
                </p>
                <Link
                  href="/projetos/natal-solidario-2025"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline decoration-2 underline-offset-4 text-lg"
                >
                  Conheça nosso projeto mais recente
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Como Contribuir */}
        <section className="w-full py-12 bg-white">
          <div className="max-w-[1024px] mx-auto px-4 sm:px-10">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-text-main text-3xl md:text-4xl font-bold mb-6">
                  Como Contribuir
                </h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-background-light p-6">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      favorite
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-main text-xl font-bold">
                      Faça uma Doação
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Sua contribuição financeira ajuda a manter nossos projetos vivos
                      e a ampliar nosso alcance na comunidade.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4 rounded-xl border border-[#e8dbce] bg-background-light p-6">
                  <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">
                      groups
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-text-main text-xl font-bold">
                      Seja um Voluntário
                    </h3>
                    <p className="text-text-secondary text-base leading-relaxed">
                      Junte-se à nossa equipe de voluntários e faça parte de projetos
                      que transformam vidas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

