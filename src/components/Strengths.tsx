import React from 'react';
import { Star, Users, Lightbulb } from 'lucide-react';

const StrengthCard: React.FC<{
  title: string;
  description: string;
  index: number;
  type: 'personal' | 'beneficiaries';
}> = ({ title, description, index, type }) => {
  const baseDelay = type === 'personal' ? 0 : 300;
  const delay = baseDelay + index * 100;
  
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-5 transform transition-all duration-500 hover:shadow-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
        type === 'personal' ? 'bg-emerald-100 text-emerald-600' : 'bg-amber-100 text-amber-600'
      }`}>
        <Star className="h-6 w-6" />
      </div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-stone-600">{description}</p>
    </div>
  );
};

const Strengths: React.FC = () => {
  // Sample data - replace with actual content
  const personalStrengths = [
    {
      title: "Fortaleza Personal 1",
      description: "Descripción detallada de tu primera fortaleza personal y cómo la aplicaste durante tu servicio comunitario."
    },
    {
      title: "Fortaleza Personal 2",
      description: "Descripción detallada de tu segunda fortaleza personal y cómo la aplicaste durante tu servicio comunitario."
    },
    {
      title: "Fortaleza Personal 3",
      description: "Descripción detallada de tu tercera fortaleza personal y cómo la aplicaste durante tu servicio comunitario."
    }
  ];
  
  const beneficiaryStrengths = [
    {
      title: "Fortaleza Observada 1",
      description: "Descripción detallada de la primera fortaleza que observaste en los beneficiarios durante tu servicio."
    },
    {
      title: "Fortaleza Observada 2",
      description: "Descripción detallada de la segunda fortaleza que observaste en los beneficiarios durante tu servicio."
    },
    {
      title: "Fortaleza Observada 3",
      description: "Descripción detallada de la tercera fortaleza que observaste en los beneficiarios durante tu servicio."
    }
  ];

  return (
    <section id="fortalezas" className="py-16 md:py-24 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Fortalezas</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Durante mi servicio comunitario, identifiqué fortalezas tanto personales como en los beneficiarios,
              que contribuyeron significativamente al éxito de las actividades desarrolladas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-emerald-100 p-2 rounded-full mr-3">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold text-emerald-700">Mis Fortalezas</h3>
              </div>
              <div className="space-y-4">
                {personalStrengths.map((strength, index) => (
                  <StrengthCard 
                    key={`personal-${index}`}
                    title={strength.title}
                    description={strength.description}
                    index={index}
                    type="personal"
                  />
                ))}
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-amber-100 p-2 rounded-full mr-3">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-700">Fortalezas de los Beneficiarios</h3>
              </div>
              <div className="space-y-4">
                {beneficiaryStrengths.map((strength, index) => (
                  <StrengthCard 
                    key={`beneficiary-${index}`}
                    title={strength.title}
                    description={strength.description}
                    index={index}
                    type="beneficiaries"
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-l-4 border-emerald-500">
            <div className="flex items-start">
              <div className="bg-emerald-100 p-3 rounded-full mr-4 mt-1 flex-shrink-0">
                <Lightbulb className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Reflexión sobre la Combinación de Fortalezas</h3>
                <p className="text-stone-700 leading-relaxed">
                  La combinación de mis fortalezas personales con las observadas en los beneficiarios 
                  creó una sinergia especial que facilitó enormemente el desarrollo de las actividades.
                  [Explica detalladamente cómo la combinación de estas fortalezas ayudó al desarrollo 
                  de las actividades, con ejemplos concretos y reflexiones sobre el impacto generado].
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Strengths;