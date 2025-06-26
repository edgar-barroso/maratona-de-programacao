import { FaCode, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    { platform: "Facebook", icon: FaFacebookF, color: "bg-blue-600 hover:bg-blue-700" },
    { platform: "Twitter", icon: FaTwitter, color: "bg-blue-400 hover:bg-blue-500" },
    { platform: "Instagram", icon: FaInstagram, color: "bg-pink-600 hover:bg-pink-700" },
    { platform: "LinkedIn", icon: FaLinkedinIn, color: "bg-blue-800 hover:bg-blue-900" }
  ];

  const sponsors = ["Sua Empresa Aqui", "Apoiador 1", "Apoiador 2", "Apoiador 3"];

  return (
    <footer className="bg-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-500 p-2 rounded-lg">
                  <FaCode className="text-white text-xl" />
                </div>
                <div className="text-white">
                  <h3 className="text-lg font-bold">Equipe UVA</h3>
                  <p className="text-sm opacity-75">Maratona de Programação</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Levando o nome de Sobral para a elite mundial da programação competitiva.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Links Úteis</h4>
              <ul className="space-y-2">
                <li><a href="#equipe" className="text-gray-400 hover:text-white transition-colors">Nossa Equipe</a></li>
                <li><a href="#maratona" className="text-gray-400 hover:text-white transition-colors">Sobre a Maratona</a></li>
                <li><a href="#patrocinio" className="text-gray-400 hover:text-white transition-colors">Como Patrocinar</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href="#" className={`w-10 h-10 ${social.color} rounded-full flex items-center justify-center transition-colors`}>
                    <i className={`${social.icon} text-white`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Sponsors Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <h4 className="text-white font-bold mb-6 text-center">Nossos Apoiadores</h4>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-75">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <span className="text-gray-600 font-semibold">{sponsor}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 - Equipe de Maratona de Programação UVA. Desenvolvido com o apoio da comunidade de Sobral.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
