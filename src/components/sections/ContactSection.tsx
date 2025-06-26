import { FaUser, FaEnvelope, FaPhone, FaQrcode, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: FaUser,
      title: "Responsável",
      info: "João Silva"
    },
    {
      icon: FaEnvelope,
      title: "E-mail",
      info: "equipe@uva.br"
    },
    {
      icon: FaPhone,
      title: "WhatsApp",
      info: "(88) 99999-9999"
    },
    {
      icon: FaQrcode,
      title: "PIX",
      info: "equipe@uva.br"
    }
  ];

  return (
    <section id="contato" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Faça Parte da Nossa História!</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-white mb-12 opacity-90">
            Qualquer contribuição nos aproxima do nosso objetivo. Entre em contato conosco e vamos juntos levar o talento de Sobral para o mundo!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-gray-800/80 bg-opacity-10 backdrop-blur-lg rounded-xl p-6 text-center">
                <contact.icon className="text-3xl text-yellow-300 mb-4 mx-auto" />
                <h3 className="text-white font-bold mb-2">{contact.title}</h3>
                <p className="text-white opacity-90">{contact.info}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:equipe@uva.br" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 px-8 rounded-full transition-colors shadow-lg">
              <FaEnvelope className="inline mr-2" />
              Enviar E-mail
            </a>
            <a href="https://wa.me/5588999999999" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-full transition-colors">
              <FaWhatsapp className="inline mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
