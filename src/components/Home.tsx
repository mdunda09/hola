import React from 'react';
import { Users, Building, Map } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-emerald-50 to-stone-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-6 leading-tight">
            Servicio Comunitario en Ecuador
          </h1>
          
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-stone-800">Presentación Personal</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-stone-50 rounded-lg transition-transform hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mb-3">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-medium text-lg mb-1">Información Personal</h3>
                <p className="text-center text-stone-600">
                  Camilo Mateo Delgado Unda<br />
                  [Tu carrera]<br />
                  [Semestre]
                </p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-stone-50 rounded-lg transition-transform hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mb-3">
                  <Building className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-medium text-lg mb-1">Organización</h3>
                <p className="text-center text-stone-600">
                  [Nombre de la organización donde realizaste el servicio]
                </p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-stone-50 rounded-lg transition-transform hover:scale-105">
                <div className="w-16 h-16 flex items-center justify-center bg-emerald-100 rounded-full mb-3">
                  <Map className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-medium text-lg mb-1">Beneficiarios</h3>
                <p className="text-center text-stone-600">
                  [Grupo humano beneficiado por tu servicio]
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-stone-700 leading-relaxed">
            <p className="mb-4">
              Bienvenido a mi portafolio digital sobre mi experiencia de servicio comunitario en Ecuador. 
              A través de esta página, compartiré mis vivencias, aprendizajes y reflexiones sobre esta 
              enriquecedora experiencia que ha sido fundamental en mi formación académica y personal.
            </p>
            <p>
              Mi tiempo en [nombre de la organización] trabajando con [grupo beneficiario] me permitió 
              desarrollar habilidades importantes mientras contribuía positivamente a la comunidad. 
              En las siguientes secciones, encontrarás detalles sobre mis fortalezas, contribuciones y 
              cómo esta experiencia ha influido en mis objetivos futuros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
