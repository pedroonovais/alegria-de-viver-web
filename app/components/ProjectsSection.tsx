"use client";

/**
 * Componente da seção de Projetos Recentes
 */
export default function ProjectsSection() {
  const projects = [
    {
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCGz2DnLdJ3Oo-6Pxn2dR42eEG05IQjY7YHk-ijPigbyZYC5Qvv8H8rM9n3FH6jJTiJKKHoAkMb-Vm282hdxgvkvbhUE-oKlB3U8ttbE-J65JU3O2MKpqHKakUMR8xyZGBRNheW2qWi7cMWKeD0L7aZIppCxVUHKmLOloC8HRnmrfPTJ6JS2-jGEVD8wOe9nI6uOieO36kQKXUWWsaKxnVkGLhVSlxA0vU0jokbw64QhNVS5G4eepPEGN3JHk3dwot_a3_YoLgp__o",
      title: "Educação para o Futuro",
      description:
        "Apoio escolar e material didático para 50 crianças da comunidade, garantindo um futuro brilhante.",
      alt: "Children smiling and raising hands in a classroom setting",
    }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col group cursor-pointer"
              onClick={() => handleProjectClick(project.title)}
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <div
                  className="w-full aspect-video bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url("${project.image}")` }}
                  aria-label={project.alt}
                />
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

