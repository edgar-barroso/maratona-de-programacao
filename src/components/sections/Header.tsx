
import { FaCode } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="gradient-bg shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <FaCode className="text-green-600 text-2xl" />
            </div>
            <div className="text-white">
              <h1 className="text-xl font-bold">Equipe UVA</h1>
              <p className="text-sm opacity-75">Maratona de Programação</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            {['inicio', 'equipe', 'maratona', 'patrocinio', 'contato'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-white hover:text-yellow-300 transition-colors capitalize"
              >
                {item === 'inicio' ? 'Início' : item === 'patrocinio' ? 'Patrocínio' : item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
