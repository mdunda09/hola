import React from 'react';
import { Heart, Mail, Globe, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-stone-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-emerald-400 mr-2" />
              <span className="text-xl font-semibold">Mi Servicio Comunitario</span>
            </div>
            
            <div className="flex space-x-6">
              <a href="#inicio" className="text-stone-300 hover:text-white transition-colors">
                Inicio
              </a>
              <a href="#fortalezas" className="text-stone-300 hover:text-white transition-colors">
                Fortalezas
              </a>
              <a href="#aportes" className="text-stone-300 hover:text-white transition-colors">
                Aportes
              </a>
              <a href="#objetivo" className="text-stone-300 hover:text-white transition-colors">
                Objetivo
              </a>
              <a href="#video" className="text-stone-300 hover:text-white transition-colors">
                Video
              </a>
            </div>
          </div>
          
          <div className="border-t border-stone-700 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-lg mb-4">Sobre el Proyecto</h4>
                <p className="text-stone-400">
                  Este e-portafolio fue creado para documentar mi experiencia de servicio comunitario,
                  reflexionar sobre los aprendizajes adquiridos y compartir mis objetivos 
                  futuros como ciudadano socialmente responsable.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Información de Contacto</h4>
                <div className="space-y-2 text-stone-400">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-400 mr-2" />
                    <span>mdelgadou@estud.edu.ec</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-emerald-400 mr-2" />
                    <span>Universidad San Francisco de Quito</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-emerald-400 mr-2" />
                    <span>Sexto semestre</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">Agradecimientos</h4>
                <p className="text-stone-400">
                  Agradezco a Protección Animal Ecuador por la oportunidad de realizar mi servicio 
                  comunitario, a los beneficiarios por su apertura y enseñanzas, y a mis profesores 
                  y compañeros por su apoyo durante esta experiencia.
                </p>
              </div>
            </div>
            
            <div className="text-center text-stone-400 border-t border-stone-700 pt-6">
              <p>&copy; {currentYear} [Tu Nombre] | E-Portafolio de Servicio Comunitario</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
