import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato - Alegria de Viver",
  description:
    "Entre em contato com a Associação Alegria de Viver para parcerias, informações sobre projetos e doações.",
};

/**
 * Página de Contato da Associação Alegria de Viver
 */
export default function ContatoPage() {
  return (
    <div className="relative flex flex-col min-h-screen w-full bg-background-light">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-white border-b border-[#e8dbce]">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-10 py-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 text-sm font-medium"
            >
              <span className="material-symbols-outlined text-lg">
                arrow_back
              </span>
              Voltar para a página inicial
            </Link>
            <div className="flex flex-col gap-4 max-w-3xl">
              <h1 className="text-text-main text-4xl md:text-5xl font-black leading-tight">
                Contato
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed">
                Entre em contato conosco para parcerias, informações sobre nossos
                projetos ou para saber mais sobre como fazer doações.
              </p>
            </div>
          </div>
        </section>

        {/* Seção: Informações de Contato */}
        <section className="w-full py-12 bg-background-light">
          <div className="max-w-[1024px] mx-auto px-4 sm:px-10">
            <div className="flex flex-col gap-8">
              <div className="bg-white rounded-xl border border-[#e8dbce] p-8">
                <h2 className="text-text-main text-2xl md:text-3xl font-bold mb-6">
                  Entre em Contato
                </h2>
                <div className="h-1 w-20 bg-primary mb-8 rounded-full" />

                <div className="flex flex-col gap-8">
                  {/* Telefone */}
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined text-3xl">
                        call
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-text-main text-lg font-bold">
                        Telefone
                      </h3>
                      <a
                        href="tel:+5511999999999"
                        className="text-text-secondary text-base hover:text-primary transition-colors"
                      >
                        (11) 99999-9999
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <span className="material-symbols-outlined text-3xl">
                        mail
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-text-main text-lg font-bold">
                        E-mail
                      </h3>
                      <a
                        href="mailto:contato@alegriadeviver.org"
                        className="text-text-secondary text-base hover:text-primary transition-colors"
                      >
                        contato@alegriadeviver.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Informações sobre contato */}
              <div className="bg-white rounded-xl border border-[#e8dbce] p-8">
                <h2 className="text-text-main text-2xl md:text-3xl font-bold mb-6">
                  Como Podemos Ajudar
                </h2>
                <div className="h-1 w-20 bg-primary mb-6 rounded-full" />

                <div className="flex flex-col gap-4 text-text-secondary text-base leading-relaxed">
                  <p>
                    Estamos à disposição para responder suas dúvidas e conversar
                    sobre diferentes formas de contribuir com nossos projetos.
                  </p>
                  <div className="flex flex-col gap-3 mt-2">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                        handshake
                      </span>
                      <p>
                        <strong className="text-text-main">Parcerias:</strong>{" "}
                        Se você representa uma empresa ou organização e tem
                        interesse em estabelecer uma parceria conosco, entre em
                        contato para conversarmos sobre possibilidades de
                        colaboração.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                        info
                      </span>
                      <p>
                        <strong className="text-text-main">
                          Informações sobre Projetos:
                        </strong>{" "}
                        Quer saber mais detalhes sobre nossos projetos e ações?
                        Ficaremos felizes em compartilhar informações sobre
                        nossas iniciativas e resultados.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                        favorite
                      </span>
                      <p>
                        <strong className="text-text-main">Doações:</strong>{" "}
                        Se você tem interesse em fazer uma doação ou contribuir
                        de outras formas, entre em contato para receber
                        informações sobre como proceder e sobre a transparência
                        de nossos processos.
                      </p>
                    </div>
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

