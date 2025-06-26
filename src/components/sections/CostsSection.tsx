import { FaCalculator, FaInfoCircle, FaCheck } from 'react-icons/fa';

export default function CostsSection() {
  const costs = [
    { item: "Passagens Aéreas (4 pessoas)", value: "R$ 8.000" },
    { item: "Hospedagem (5 dias)", value: "R$ 2.500" },
    { item: "Alimentação", value: "R$ 1.500" },
    { item: "Transporte Local", value: "R$ 800" },
    { item: "Material e Equipamentos", value: "R$ 1.200" }
  ];

  const total = "R$ 14.000";

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Para Onde Vai o Seu Apoio?</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">Nossa jornada até a competição envolve custos que vão além da nossa paixão por programar</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  <FaCalculator className="inline text-green-500 mr-3" />
                  Breakdown de Custos
                </h3>
                <div className="space-y-4">
                  {costs.map((cost, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-700">{cost.item}</span>
                      <span className="font-semibold text-green-600">{cost.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t-2 border-green-500">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">Total Necessário:</span>
                    <span className="text-2xl font-bold text-green-600">{total}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  <FaInfoCircle className="inline text-blue-500 mr-2" />
                  Transparência Total
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <FaCheck className="inline text-green-500 mr-2" />
                    Todos os gastos serão documentados e compartilhados
                  </p>
                  <p>
                    <FaCheck className="inline text-green-500 mr-2" />
                    Relatórios financeiros enviados aos patrocinadores
                  </p>
                  <p>
                    <FaCheck className="inline text-green-500 mr-2" />
                    Prestação de contas em tempo real
                  </p>
                  <p>
                    <FaCheck className="inline text-green-500 mr-2" />
                    Notas fiscais disponíveis para consulta
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
