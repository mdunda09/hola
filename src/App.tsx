import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Strengths from './components/Strengths';
import Contributions from './components/Contributions';
import FutureObjective from './components/FutureObjective';
import VideoReflection from './components/VideoReflection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Header />
      <main>
        <Home />
        <Strengths />
        <Contributions />
        <FutureObjective />
        <VideoReflection />
      </main>
      <Footer />
    </div>
  );
}

export default App;