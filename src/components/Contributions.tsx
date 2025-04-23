import React from 'react';
import { Calendar, Clock, Target, Users, ArrowRight } from 'lucide-react';

const ContributionCard: React.FC<{
  title: string;
  date: string;
  duration: string;
  goals: string;
  beneficiaries: string;
  description: string;
  index: number;
}> = ({ title, date, duration, goals, beneficiaries, description, index }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
      index === 0 ? 'border-l-4 border-emerald-500' : 'border-l-4 border-amber-500'
    }`}>
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-4 text-stone-800">{title}</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
            <span className="text-stone-600">{date}</span>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-emerald-600 mr-2" />
            <span className="text-stone-600">{duration}</span>
          </div>
          
          <div className="flex items-center">
            <Target className="h-5 w-5 text-emerald-600 mr-2" />
            <span className="text-stone-600">{goals}</span>
          </div>
          
          <div className="flex items-center">
            <Users className="h-5 w-5 text-emerald-600 mr-2" />
            <span className="text-stone-600">{beneficiaries}</span>
          </div>
        </div>
        
        <p className="text-stone-700 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const Contributions: React.FC = () => {
  // Sample data - replace with actual content
  const contributions = [
    {
      title: "Actividad 1",
      date: "Enero - Febrero 2023",
      duration: "4 semanas",
      goals: "Educación y capacitación",
      beneficiaries: "25 personas",
      description: `Descripción detallada de la primera actividad específica en la que colaboraste 
      activamente dentro de la organización. Incluye tu rol, responsabilidades, metodología aplicada, 
      desafíos enfrentados y resultados obtenidos. Explica también cómo aplicaste tus conocimientos 
      académicos y qué aprendizajes nuevos adquiriste durante esta experiencia.`
    },
    {
      title: "Actividad 2",
      date: "Marzo - Abril 2023",
      duration: "6 semanas",
      goals: "Desarrollo comunitario",
      beneficiaries: "40 personas",
      description: `Descripción detallada de la segunda actividad específica en la que colaboraste 
      activamente dentro de la organización. Incluye tu rol, responsabilidades, metodología aplicada, 
      desafíos enfrentados y resultados obtenidos. Explica también cómo aplicaste tus conocimientos 
      académicos y qué aprendizajes nuevos adquiriste durante esta experiencia.`
    }
  ];

  return (
    <section id="aportes" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Mis Aportes</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Estas son las principales actividades en las que participé activamente durante mi servicio 
              comunitario, demostrando compromiso, creatividad y responsabilidad social.
            </p>
          </div>
          
          <div className="space-y-8">
            {contributions.map((contribution, index) => (
              <ContributionCard 
                key={index}
                title={contribution.title}
                date={contribution.date}
                duration={contribution.duration}
                goals={contribution.goals}
                beneficiaries={contribution.beneficiaries}
                description={contribution.description}
                index={index}
              />
            ))}
          </div>

          <div className="mt-12 bg-stone-100 rounded-xl p-6 border-l-4 border-emerald-500">
            <h3 className="text-xl font-semibold mb-4 flex items-center text-stone-800">
              <ArrowRight className="h-5 w-5 text-emerald-600 mr-2" />
              Impacto General
            </h3>
            <p className="text-stone-700 leading-relaxed">
              A través de estas actividades, logré contribuir significativamente al bienestar de la comunidad 
              mientras desarrollaba habilidades profesionales y personales. El impacto de estas intervenciones 
              se evidenció en [describe los resultados concretos y cambios positivos generados en la comunidad]. 
              Esta experiencia me permitió entender la importancia de la responsabilidad social y el valor del 
              trabajo comunitario en el desarrollo sostenible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;