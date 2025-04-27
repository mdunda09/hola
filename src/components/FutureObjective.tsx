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
                  ODS 15: Vida de ecosistemas terrestres
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-stone-700 leading-relaxed mb-6">
                Mi objetivo personal de vida es desarrollar proyectos de reforestación y protección de áreas verdes urbanas en distintas ciudades del país, involucrando activamente a la comunidad en el cuidado del medio ambiente.
                
                Mi experiencia de servicio comunitario me hizo comprender la importancia de actuar a nivel local para promover cambios globales. Aunque en el servicio trabajé directamente con animales, el respeto por todas las formas de vida, incluidos los ecosistemas, es una responsabilidad que quiero asumir como ciudadano socialmente responsable.
                
                Este objetivo contribuye al ODS 15: Vida de ecosistemas terrestres, porque busca restaurar espacios naturales, proteger la biodiversidad urbana y fomentar prácticas sostenibles en la convivencia entre seres humanos y la naturaleza.
                
                Para mí es significativo porque creo que recuperar áreas verdes no solo mejora el entorno físico, sino también la calidad de vida de las personas y el bienestar de futuras generaciones. Al lograrlo, espero crear conciencia sobre la importancia de preservar nuestro planeta en cada acción diaria.
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
                      Utilizaré una evaluación basada en resultados medibles y percepciones comunitarias.
                      Mis indicadores principales serán: número de árboles plantados, número de espacios verdes rehabilitados y número de personas participantes en las jornadas ambientales.
                      Aplicaré encuestas de satisfacción y conocimiento ambiental antes y después de cada intervención, usando formularios digitales y entrevistas.
                      La frecuencia de evaluación será semestral, con informes de avance y retroalimentación de la comunidad.
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
                          <p className="font-medium">Actividad 1: Planificación de las campañas de reforestación</p>
                          <p className="text-sm text-stone-600">Tiempo: 2 meses</p>
                          <p className="text-sm text-stone-600">Recursos:</p>
                          <ul className="space-y-3 text-stone-700">
                            <li>Contacto con viveros y autoridades locales</li>
                            <li>Diseño de campañas de sensibilización (Canva, redes sociales)</li>
                            <li>Voluntarios comprometidos</li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</span>
                        <div>
                          <p className="font-medium">Actividad 2: Ejecución de jornadas de siembra comunitaria</p>
                          <p className="text-sm text-stone-600">Tiempo: 4 meses (fase inicial)</p>
                          <p className="text-sm text-stone-600">Recursos:</p>
                          <ul className="space-y-3 text-stone-700">
                            <li>Árboles y plantas nativas</li>
                            <li>Herramientas de jardinería (palas, guantes, abono)</li>
                            <li>Logística de transporte y materiales</li>
                            <li>Espacios designados por municipios</li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-emerald-100 text-emerald-700 w-6 h-6 rounded-full flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</span>
                        <div>
                          <p className="font-medium">Actividad 3: Seguimiento y mantenimiento de los espacios verdes</p>
                          <p className="text-sm text-stone-600">Tiempo: 6 meses</p>
                          <p className="text-sm text-stone-600">Recursos:</p>
                          <ul className="space-y-3 text-stone-700">
                            <li>Equipos de voluntarios para riego y cuidado</li>
                            <li>Herramientas básicas de mantenimiento</li>
                            <li>Planillas de seguimiento de crecimiento y estado de los árboles</li>
                          </ul>
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
