import React from 'react';
import { Target, CalendarClock, BarChart3, FileSpreadsheet } from 'lucide-react';

const FutureObjective: React.FC = () => {
  return (
    <section id="objetivo" className="py-16 md:py-24 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Objetivo a Futuro</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              Basado en mi experiencia de servicio comunitario y mi rol como ciudadano socialmente 
              responsable, he definido el siguiente objetivo personal alineado con los Objetivos 
              de Desarrollo Sostenible de la ONU.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="border-b border-stone-200 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-emerald-100 p-3 rounded-full mr-4">
                    <Target className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-stone-800">Mi Objetivo Personal</h3>
                </div>
                <div className="bg-emerald-100 text-emerald-700 py-2 px-4 rounded-full text-sm font-medium">
                  ODS 15: Vida de eco
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-stone-700 leading-relaxed mb-6">
                [Mi objetivo personal de vida es fundar o apoyar activamente una red de centros comunitarios de protección animal en distintas provincias del país, que no solo rescaten y rehabiliten a animales en situación de calle, sino que también eduquen a la ciudadanía sobre el cuidado responsable de los animales y el respeto por los ecosistemas.
                
                Este objetivo nace directamente de mi experiencia en PAE, donde entendí que ayudar a un perro no solo mejora su vida, sino que transforma también a la comunidad que lo rodea. Vi cómo el compromiso de una organización puede marcar la diferencia en el bienestar animal y en la conciencia colectiva sobre el maltrato y el abandono.
                
                Contribuye al ODS 15 porque promueve la protección de especies vulnerables, fomenta prácticas sostenibles de convivencia entre humanos y animales, y fortalece el vínculo entre la sociedad y el entorno natural.
                
                Este objetivo es significativo para mí porque creo firmemente que los cambios reales comienzan desde lo local, desde pequeños actos con impacto directo. Espero que, al alcanzarlo, más personas reconozcan que el respeto hacia los animales forma parte de una vida digna y de un planeta más justo para todos los seres vivos.]
              </p>
              
              <div className="border-t border-stone-200 pt-6 mt-6">
                <h4 className="font-semibold text-lg mb-4 flex items-center text-stone-800">
                  <BarChart3 className="h-5 w-5 text-emerald-600 mr-2" />
                  Diseño Inverso para el Logro del Objetivo
                </h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-stone-50 p-5 rounded-lg">
                    <h5 className="font-medium text-lg mb-3 flex items-center">
                      <FileSpreadsheet className="h-5 w-5 text-emerald-600 mr-2" />
                      Tipo de Evaluación
                    </h5>
                    <p className="text-stone-700">
                      [Describe el tipo de evaluación que utilizarás para medir el progreso y éxito 
                      de tu objetivo. Incluye metodología, indicadores, herramientas de medición y 
                      frecuencia de evaluación.]
                    </p>
                  </div>
                  
                  <div className="bg-stone-50 p-5 rounded-lg">
                    <h5 className="font-medium text-lg mb-3 flex items-center">
                      <CalendarClock className="h-5 w-5 text-emerald-600 mr-2" />
                      Actividades Planificadas
                    </h5>
                    <ul className="space-y-3 text-stone-700">
                      <li className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">1</span>
                        <div>
                          <p className="font-medium">Actividad 1</p>
                          <p className="text-sm text-stone-600">Tiempo: [duración] • Recursos: [listado de recursos]</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</span>
                        <div>
                          <p className="font-medium">Actividad 2</p>
                          <p className="text-sm text-stone-600">Tiempo: [duración] • Recursos: [listado de recursos]</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</span>
                        <div>
                          <p className="font-medium">Actividad 3</p>
                          <p className="text-sm text-stone-600">Tiempo: [duración] • Recursos: [listado de recursos]</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-100 rounded-lg p-6">
            <p className="text-emerald-800 italic text-center">
              "El servicio comunitario me ha enseñado que pequeñas acciones pueden generar grandes cambios. 
              Mi objetivo es continuar este camino de impacto social positivo, contribuyendo al desarrollo 
              sostenible desde mi campo profesional y personal."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureObjective;
