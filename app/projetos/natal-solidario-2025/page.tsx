import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Natal Solidário 2025 - Alegria de Viver",
  description:
    "Uma tarde de acolhimento, bem-estar e alegria aos idosos, unindo cuidado com a saúde, momentos de convivência e a entrega de carinho.",
};

/**
 * Página de detalhes do projeto Natal Solidário 2025
 */
export default function NatalSolidario2025Page() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light">
      <Header />
      <main className="flex-1">
        {/* Hero Section do Projeto */}
        <section className="w-full bg-white border-b border-[#e8dbce]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-6 text-sm font-medium"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_back
              </span>
              Voltar para a página inicial
            </Link>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-text-secondary text-sm">
                <span>Duração da Campanha:</span>
                <span className="font-medium">7 de nov. de 2025 - 13 de dez. de 2025</span>
              </div>
              <h1 className="text-text-main text-4xl md:text-5xl font-black leading-tight">
                Natal Solidário 2025
              </h1>
            </div>
          </div>
        </section>

        {/* Índice de Navegação */}
        <section className="w-full bg-white border-b border-[#e8dbce] sticky top-[73px] z-40">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
            <nav className="flex flex-wrap gap-4 py-4 text-sm">
              <a
                href="#sobre"
                className="text-text-secondary hover:text-primary transition-colors font-medium"
              >
                Sobre a Campanha
              </a>
              <a
                href="#prestacao"
                className="text-text-secondary hover:text-primary transition-colors font-medium"
              >
                Prestação de Contas
              </a>
              <a
                href="#fotos"
                className="text-text-secondary hover:text-primary transition-colors font-medium"
              >
                Fotos do Evento
              </a>
              <a
                href="#agradecimentos"
                className="text-text-secondary hover:text-primary transition-colors font-medium"
              >
                Agradecimentos
              </a>
            </nav>
          </div>
        </section>

        {/* Seção: Sobre a Campanha */}
        <section id="sobre" className="w-full py-12 bg-white scroll-mt-24">
          <div className="max-w-[1024px] mx-auto px-4 sm:px-10">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-text-main text-3xl md:text-4xl font-bold mb-6">
                  Sobre a Campanha
                </h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="text-text-main text-xl font-bold mb-3">
                    Objetivo
                  </h3>
                  <p className="text-text-secondary text-base leading-relaxed">
                    Proporcionar uma tarde de acolhimento, bem-estar e alegria aos
                    idosos, unindo cuidado com a saúde, momentos de convivência e a
                    entrega de carinho em forma de atenção, presentes e apoio básico.
                  </p>
                </div>

                <div>
                  <h3 className="text-text-main text-xl font-bold mb-3">
                    Resumo da Ação
                  </h3>
                  <div className="flex flex-col gap-4 text-text-secondary text-base leading-relaxed">
                    <p>
                      No último sábado (13/12), realizamos uma ação de Natal especial
                      para 70 idosos atendidos pela Associação Camila, com o objetivo
                      de promover acolhimento, bem-estar e momentos de alegria. O que
                      começou com a proposta de um encontro com café da tarde e
                      entregas solidárias se transformou, graças ao apoio e generosidade
                      de todos os envolvidos, em uma programação completa e cheia de
                      significado.
                    </p>
                    <p>
                      A ação teve início com a abertura oficial, seguida por uma
                      palestra com a fisioterapeuta Carina, que falou sobre a importância
                      da atividade física na terceira idade, reforçando cuidados com a
                      saúde e qualidade de vida. Em seguida, os idosos prestigiaram uma
                      apresentação de violão, que trouxe leveza e emoção ao ambiente, e
                      participaram de uma mini aula de pilates, promovendo movimento e
                      bem-estar de forma acessível e segura.
                    </p>
                    <p>
                      Após as atividades, foi servido um café da tarde, preparado com
                      muito carinho, criando um momento de convivência e troca. Na
                      sequência, realizamos um animado bingo com prendas (itens da
                      Natura, Loccitane e cesta da Bauducco), além de sorteios,
                      garantindo interação, risadas e muita animação entre os
                      participantes.
                    </p>
                    <p>
                      Para encerrar a ação, realizamos a entrega de panetones,
                      necessaires (arrecadadas por doações) e cestas básicas (com arroz,
                      feijão, sal, macarrão e molho de tomate), garantindo que cada
                      idoso levasse não apenas presentes, mas também itens essenciais
                      para o dia a dia. O encerramento foi marcado por gratidão e
                      emoção, reforçando o verdadeiro espírito do Natal: Solidariedade,
                      cuidado e amor ao próximo.
                    </p>
                  </div>
                </div>

                {/* Espaço para imagens da ação */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                    <Image src="/projetos/natal-solidario-2025/cover-papai-noel.jpeg" alt="Natal Solidário 2025" width={1024} height={1024} className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                    <Image src="/projetos/natal-solidario-2025/cover.jpeg" alt="Natal Solidário 2025" width={1024} height={1024} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Prestação de Contas */}
        <section id="prestacao" className="w-full py-12 bg-background-light scroll-mt-24">
          <div className="max-w-[1024px] mx-auto px-4 sm:px-10">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-text-main text-3xl md:text-4xl font-bold mb-6">
                  Prestação de Contas
                </h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
              </div>

              <div className="flex flex-col gap-6">
                <div className="bg-white rounded-xl border border-[#e8dbce] p-6">
                  <h3 className="text-text-main text-xl font-bold mb-4">
                    Resumo Financeiro
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center py-3 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Total arrecadado</span>
                      <span className="text-text-main font-bold text-lg">
                        R$ 3.415,63
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Total gasto</span>
                      <span className="text-text-main font-bold text-lg">
                        R$ 3.415,63
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-text-main font-bold">Saldo</span>
                      <span className="text-text-main font-bold text-lg text-primary">
                        R$ 0,00
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#e8dbce] p-6">
                  <h3 className="text-text-main text-xl font-bold mb-4">
                    Relatório de Gastos
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    Obs: conseguimos negociar alguns descontos, os valores finais
                    encontram-se abaixo!
                  </p>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Panettones</span>
                      <span className="text-text-main font-medium">R$ 1.199,20</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Descartáveis</span>
                      <span className="text-text-main font-medium">R$ 42,16</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Sacolinhas cestas</span>
                      <span className="text-text-main font-medium">R$ 18,73</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Molho de tomate</span>
                      <span className="text-text-main font-medium">R$ 90,30</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Macarrão</span>
                      <span className="text-text-main font-medium">R$ 223,30</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Feijão</span>
                      <span className="text-text-main font-medium">R$ 307,30</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Arroz</span>
                      <span className="text-text-main font-medium">R$ 220,50</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Bolos café</span>
                      <span className="text-text-main font-medium">R$ 230,00</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Frutas</span>
                      <span className="text-text-main font-medium">R$ 197,02</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Sal</span>
                      <span className="text-text-main font-medium">R$ 140,70</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Padaria</span>
                      <span className="text-text-main font-medium">R$ 361,53</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Pão + mortadela</span>
                      <span className="text-text-main font-medium">R$ 85,05</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Lembrancinha voluntários</span>
                      <span className="text-text-main font-medium">R$ 38,98</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#e8dbce]">
                      <span className="text-text-secondary">Bingo + cartelas</span>
                      <span className="text-text-main font-medium">R$ 19,97</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-text-main font-bold">Mercado</span>
                      <span className="text-text-main font-bold">R$ 240,89</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-[#e8dbce]">
                    <a
                      href="#"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Clique aqui para acessar os comprovantes
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-[#e8dbce] p-6">
                  <h3 className="text-text-main text-xl font-bold mb-4">
                    Doações em Espécie
                  </h3>
                  <div className="flex flex-col gap-2 text-sm text-text-secondary">
                    <p>• Cesta Bauducco - Doação</p>
                    <p>• Prendas Natura - Doação</p>
                    <p>• Prenda Loccitane - Doação</p>
                    <p>• Necessaires - Doação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Fotos do Evento */}
        <section id="fotos" className="w-full py-12 bg-white scroll-mt-24">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-text-main text-3xl md:text-4xl font-bold mb-6">
                  Fotos do Evento
                </h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
                <p className="text-text-secondary text-base leading-relaxed max-w-2xl">
                  Abaixo, acompanhe um pouco do nosso trabalho por meio de fotos da
                  preparação e do dia do evento.
                </p>
              </div>

              {/* Grid de imagens - espaços reservados */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
                  <div
                    key={index}
                    className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center border border-[#e8dbce]"
                  >
                    <Image src={`/projetos/natal-solidario-2025/${index}.jpeg`} alt="Natal Solidário 2025" width={1024} height={1024} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Agradecimentos */}
        <section id="agradecimentos" className="w-full py-12 bg-background-light scroll-mt-24">
          <div className="max-w-[1024px] mx-auto px-4 sm:px-10">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-text-main text-3xl md:text-4xl font-bold mb-6">
                  Agradecimentos
                </h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full" />
              </div>

              <div className="bg-white rounded-xl border border-[#e8dbce] p-8">
                <div className="flex flex-col gap-4 text-text-secondary text-base leading-relaxed">
                  <p>
                    Quero agradecer de coração a todos que fizeram parte dessa ação tão
                    especial. Obrigada ao público que nos recebeu de braços abertos e nos
                    permitiu viver momentos cheios de alegria, carinho e troca.
                  </p>
                  <p>
                    Um agradecimento mais do que especial aos doadores, que foram
                    fundamentais para que tudo isso acontecesse. Cada contribuição fez
                    diferença e permitiu que essa ação fosse muito além do que
                    imaginávamos. Sem vocês, nada disso seria possível.
                  </p>
                  <p>
                    Também agradeço a todos que estiveram comigo no dia, ajudando de
                    várias formas, doando tempo, cuidado e espalhando energia boa. E, é
                    claro, à minha família, que esteve comigo do começo ao fim. Um
                    agradecimento especial aos meus pais, que me apoiaram em cada etapa,
                    desde as compras até os mínimos detalhes.
                  </p>
                  <p>
                    Encerramos essa ação com o coração cheio de gratidão e a certeza de
                    que isso é só o começo. Que venham muitas outras iniciativas,
                    encontros e histórias para compartilhar.
                  </p>
                  <p className="text-text-main font-medium mt-4">
                    Juntos, seguimos espalhando a magia do Natal — e de muitos outros
                    dias do ano 🎄♥️
                  </p>
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

