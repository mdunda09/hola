import React, { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const VideoReflection: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('https://youtu.be/JDg0Picgyco'); // Replace with actual video URL
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  // Convert YouTube URL to embed format if needed
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    } else if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    // Return original URL if not YouTube or already in embed format
    return url;
  };

  return (
    <section id="video" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Reflexión en Video</h2>
            <p className="text-stone-600 max-w-3xl mx-auto">
              En este video comparto mis reflexiones personales sobre la experiencia de servicio 
              comunitario, los aprendizajes adquiridos y cómo esta vivencia ha transformado mi 
              perspectiva personal y profesional.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {isPlaying ? (
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src={getEmbedUrl(videoUrl)}
                  title="Video de reflexión"
                  className="w-full h-96 md:h-[500px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div 
                className="relative bg-stone-900 w-full h-96 md:h-[500px] flex items-center justify-center cursor-pointer"
                onClick={handlePlayVideo}
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-60" 
                  style={{ backgroundImage: "url('https://images.pexels.com/photos/3280130/pexels-photo-3280130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
                </div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mb-4 transition-transform transform hover:scale-110">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                  <p className="text-white font-medium text-xl">Reproducir Video</p>
                </div>
              </div>
            )}
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3">Resumen del Video</h3>
              <p className="text-stone-700 mb-6">
                En este video de reflexión, comparto mis experiencias durante el servicio comunitario en 
                Ecuador, destacando los momentos más significativos, los desafíos enfrentados y las 
                lecciones aprendidas que han contribuido a mi crecimiento personal y profesional.
              </p>
              
              <div className="flex justify-center">
                <a 
                  href={videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
                >
                  Ver video en plataforma original
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoReflection;
