/**
 * Componente do rodapé do site
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const institutionalLinks = [
    { label: "Sobre Nós", href: "#" },
    { label: "Nossa História", href: "#" },
    { label: "Transparência", href: "#" },
    { label: "Diretoria", href: "#" },
  ];

  const participationLinks = [
    { label: "Como Doar", href: "#" },
    { label: "Seja Voluntário", href: "#" },
    { label: "Parcerias Corporativas", href: "#" },
    { label: "Agenda de Eventos", href: "#" },
  ];

  const socialLinks = [
    { icon: "public", href: "#", label: "Facebook" },
    { icon: "photo_camera", href: "#", label: "Instagram" },
    { icon: "smart_display", href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-background-dark text-white/80 pt-16 pb-8">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-primary text-3xl">
                volunteer_activism
              </span>
              <span className="text-xl font-bold">Alegria de Viver</span>
            </div>
            <p className="text-sm leading-relaxed">
              Desde 2010 transformando a sociedade através do amor, da caridade
              e da ação social direta. Junte-se a nós.
            </p>
            <div className="flex gap-4 mt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  className="hover:text-primary transition-colors"
                  href={social.href}
                  aria-label={social.label}
                >
                  <span className="material-symbols-outlined">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Column - Institucional */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg">Institucional</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {institutionalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="hover:text-primary transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions Column - Participe */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg">Participe</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {participationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className="hover:text-primary transition-colors"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-lg">Contato</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                  location_on
                </span>
                <span>
                  Rua da Esperança, 123
                  <br />
                  Centro, São Paulo - SP
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  call
                </span>
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">
                  mail
                </span>
                <span>contato@alegriadeviver.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>
            © {currentYear} Associação Alegria de Viver. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">
              Política de Privacidade
            </a>
            <a className="hover:text-white" href="#">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

