"use client";

import Image from "next/image";

/**
 * Componente da seção de Projetos Recentes
 */
export default function ProjectsSection() {
  const projects = [
    {
      image:
        "/projetos/natal-solidario-2025/cover.jpeg",
      title: "Natal Solidário 2025",
      description:
        "Uma tarde de acolhimento, bem-estar e alegria aos idosos, unindo cuidado com a saúde, momentos de convivência e a entrega de carinho em forma de atenção, presentes e apoio básico.",
      alt: "Uma tarde de acolhimento, bem-estar e alegria aos idosos, unindo cuidado com a saúde, momentos de convivência e a entrega de carinho em forma de atenção, presentes e apoio básico.",
    },
  ];

  const handleProjectClick = (projectTitle: string) => {
    console.log(`Projeto clicado: ${projectTitle}`);
    // TODO: Implementar navegação para página de detalhes do projeto
  };

  const handleViewAllProjects = () => {
    console.log("Ver todos os projetos clicado");
    // TODO: Implementar navegação para página de projetos
  };

  return (
    <section className="w-full py-12 bg-background-light">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-text-main text-3xl md:text-4xl font-bold leading-tight text-center">
            Nossos Projetos Recentes
          </h2>
          <div className="h-1 w-20 bg-primary mt-4 rounded-full" />
        </div>
        <div
          className={
            projects.length < 3
              ? "flex justify-center"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          }
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col group cursor-pointer max-w-md w-full bg-white rounded-xl border border-[#e8dbce] p-4"
              onClick={() => handleProjectClick(project.title)}
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <Image src={project.image} alt={project.alt} width={1024} height={1024} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-text-main text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            className="inline-flex items-center gap-2 text-primary font-bold hover:underline decoration-2 underline-offset-4"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleViewAllProjects();
            }}
          >
            Ver todos os projetos
            <span className="material-symbols-outlined text-sm">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

