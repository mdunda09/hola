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
      title: "Empatía",
      description: "Desde el primer día en PAE me di cuenta de que muchos de los perros llegaban con miedo, desconfiaban incluso de una simple caricia. Tener empatía me permitió no solo entender por qué reaccionaban así, sino también saber cómo acercarme sin invadir su espacio. Aprendí a observar, a esperar, y a dar afecto cuando ellos lo pedían. Poco a poco, algunos comenzaron a mover la cola cuando me veían, y eso, aunque parezca mínimo, fue enorme."
    },
    {
      title: "Compromiso",
      description: "No todo fue fácil. Hubo días largos, de mucho trabajo físico, y a veces el cansancio se hacía sentir. Pero cada vez que pensaba en lo que esos perros habían pasado, me sentía motivado a seguir. No falté ni una sola vez, y me aseguré de dar lo mejor en cada tarea, desde limpiar los espacios hasta acompañar a los perros en sus paseos. Saber que mi esfuerzo tenía un impacto real fue mi mayor motor."
    },
    {
      title: "Trabajo en equipo",
      description: "En el refugio no estaba solo. Trabajé con otros voluntarios y con el equipo de PAE, y ahí descubrí lo importante que es saber escuchar, repartir tareas y ayudarnos entre todos. Muchas veces organizábamos juntos los horarios para las caminatas o colaborábamos en actividades de adopción. Esa coordinación hizo todo más fluido y también me enseñó a valorar el trabajo colectivo."
    }
  ];
  
  const beneficiaryStrengths = [
    {
      title: "Resiliencia",
      description: "Los perros me enseñaron mucho más de lo que imaginé. A pesar de sus historias difíciles, muchos de ellos mostraban una increíble capacidad para salir adelante. Algunos llegaban en muy mal estado, física y emocionalmente, pero con tiempo y cuidados, volvían a confiar. Ver cómo recuperaban su alegría fue muy inspirador."
    },
    {
      title: "Socialización",
      description: "Una de las cosas más lindas fue ver cómo iban socializando entre ellos y también con nosotros. Al principio, algunos eran muy retraídos, pero después de varios días ya buscaban compañía, jugaban, y hasta pedían cariño. Esa conexión fue clave para que puedan integrarse mejor al refugio… y también para que puedan encontrar un hogar."
    },
    {
      title: "Inteligencia",
      description: "Muchos perros aprendían rápidamente las rutinas del refugio. Sabían cuándo era hora de comer, cuándo salíamos a caminar, e incluso algunos seguían indicaciones simples. Esa capacidad de adaptación no solo hacía más fácil el día a día en PAE, sino que aumentaba sus chances de ser adoptados."
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
                  Mi empatía y compromiso encontraron una respuesta en la resiliencia y confianza de los perros. Fue una conexión mutua: yo les ofrecía tiempo y cuidado, y ellos, con sus progresos diarios, me devolvían esperanza. Trabajar en equipo con otros voluntarios y ver cómo los perros se unían al grupo, me hizo sentir parte de algo más grande. Esa mezcla de fortalezas, tanto humanas como animales, hizo que cada actividad tuviera un impacto real.
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
