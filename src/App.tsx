import React, { useState, useEffect } from 'react';
import { ChevronDown, Monitor, Smartphone, Globe, Target, Zap, Menu, X } from 'lucide-react';
import winkyImg from "./assets/ourTeam/winky.jpg";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  description: string;
}

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Tatang Winky",
      position: "Human Loss",
      image: winkyImg,
      description: "Expert dalam strategi digital dan pengembangan bisnis"
    },
    {
      id: 2,
      name: "Fajrul",
      position: "Creative Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Spesialis UI/UX design dengan pengalaman 8+ tahun"
    },
    {
      id: 3,
      name: "JOkowi",
      position: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Full-stack developer dengan keahlian React dan Node.js"
    },
    {
      id: 4,
      name: "Andre",
      position: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: "Ahli digital marketing dan strategi konten"
    }
  ];

  const services: Service[] = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Development",
      description: "Layanan pengembangan website modern dan responsif"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App",
      description: "Aplikasi mobile iOS dan Android yang user-friendly"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Strategi pemasaran digital yang efektif dan terukur"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Brand Identity",
      description: "Desain identitas brand yang kuat dan memorable"
    }
  ];

  const clientLogos = [
    "https://via.placeholder.com/120x60/4F46E5/FFFFFF?text=Client+1",
    "https://via.placeholder.com/120x60/059669/FFFFFF?text=Client+2",
    "https://via.placeholder.com/120x60/DC2626/FFFFFF?text=Client+3",
    "https://via.placeholder.com/120x60/7C2D12/FFFFFF?text=Client+4",
    "https://via.placeholder.com/120x60/1E40AF/FFFFFF?text=Client+5",
    "https://via.placeholder.com/120x60/166534/FFFFFF?text=Client+6",
    "https://via.placeholder.com/120x60/BE185D/FFFFFF?text=Client+7",
    "https://via.placeholder.com/120x60/9333EA/FFFFFF?text=Client+8"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              <span className="text-purple-400">no</span>Company
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} 
                className="text-white hover:text-purple-400 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById("client")?.scrollIntoView({ behavior: "smooth" })} 
                className="text-white hover:text-purple-400 transition-colors"
              >
                Client
              </button>
              <button 
                onClick={() => document.getElementById("service")?.scrollIntoView({ behavior: "smooth" })} 
                className="text-white hover:text-purple-400 transition-colors"
              >
                Service
              </button>
              <button 
                onClick={() => document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })} 
                className="text-white hover:text-purple-400 transition-colors"
              >
                Team
              </button>
              <button 
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })} 
                className="text-white hover:text-purple-400 transition-colors"
              >
                Portfolio
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full text-white transition-colors">
                Hubungi Kami
              </button>
            </div>


            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-4 border-t border-white/10 mt-4">
              <a 
                href="#about" 
                className="block text-white hover:text-purple-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a 
                href="#client" 
                className="block text-white hover:text-purple-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Client
              </a>
              <a 
                href="#service" 
                className="block text-white hover:text-purple-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Service
              </a>
              <a 
                href="#team" 
                className="block text-white hover:text-purple-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Team
              </a>
              <a 
                href="#portfolio" 
                className="block text-white hover:text-purple-400 transition-colors py-2"
                onClick={closeMobileMenu}
              >
                Portfolio
              </a>
              <button 
                className="w-full bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white transition-colors mt-4"
                onClick={closeMobileMenu}
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='about' className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div 
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Wujudkan Ide Anda dengan{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Solusi Perangkat Lunak Terbaik
              </span>
            </h1>
            
            <div className="flex items-center justify-center mb-8">
              <div className="bg-purple-600/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-400/30">
                <span className="text-purple-400 font-semibold">noCompany</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Merupakan perusahaan yang berfokus dalam mengembangkan solusi mutakhir untuk
              pertumbuhan bisnis di era digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-4 rounded-full text-white font-semibold transition-all transform hover:scale-105">
                Mulai Proyek
              </button>
              <button className="border-2 border-white/30 hover:border-purple-400 px-8 py-4 rounded-full text-white font-semibold transition-all backdrop-blur-sm">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* Client Section */}
      <section id="client" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            scrollY > 400 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-slate-800/80 backdrop-blur-lg rounded-3xl p-12 border border-slate-700/50">
              <h2 className="text-4xl font-bold text-white mb-4">
                Hadirkan Solusi Luar Biasa dengan Sentuhan Inovatif
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-gray-300 text-lg mb-8">
                    Berkomitmen pada layanan maksimal, membantu kami dipercaya oleh berbagai
                    klien. Berikut beberapa mitra berharga yang telah mempercayakan kebutuhan
                    digitalnya kepada kami:
                  </p>
                  
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">8 Klien</span>
                      <span className="text-purple-400">100%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  {clientLogos.map((logo, index) => (
                    <div 
                      key={index}
                      className={`bg-slate-700/50 rounded-2xl p-4 flex items-center justify-center transform transition-all duration-500 hover:scale-110 ${
                        scrollY > 600 ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <img src={logo} alt={`Client ${index + 1}`} className="w-full h-auto object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="service" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            scrollY > 800 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              Maksimalkan Potensi Bisnis Anda dengan Solusi Inovatif dari Kami
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div className="space-y-8">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Team working" 
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-2xl">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Membangun Solusi Perangkat Lunak Inovatif
                    </h3>
                    <p className="text-gray-300">
                      Dengan semangat hati, Kami mengembangkan solusi perangkat 
                      lunak khusus yang disesuaikan dengan kebutuhan bisnis unik Anda.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-pink-600 p-3 rounded-2xl">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Desain UI/UX yang Profesional
                    </h3>
                    <p className="text-gray-300">
                      Layanan desain UI/UX kami berfokus menyediakan pengalaman 
                      pengguna yang menyenangkan untuk meningkatkan konversi dan 
                      kepuasan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ${
            scrollY > 1200 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-slate-800/60 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-purple-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${
            scrollY > 1600 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-white mb-4">
              Tim Profesional Kami
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Berkenalan dengan tim ahli yang berdedikasi untuk menghadirkan solusi terbaik bagi bisnis Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id}
                className={`group bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 ${
                  scrollY > 1800 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-300 text-sm">
                  {member.description}
                </p>
                
                <div className="mt-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
                    <span className="text-white text-xs font-bold">in</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
                    <span className="text-white text-xs font-bold">@</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portofolio */}
      <section id="portfolio" className="py-20">
  <div className="container mx-auto px-6">
    <div
      className={`text-center mb-16 transform transition-all duration-1000 ${
        scrollY > 1600 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-4xl font-bold text-white mb-4">
        Solusi Digital Terbaik Portofolio Proyek Perangkat Lunak Kami
      </h2>
    </div>

    {/* Ubah jadi grid 3 kolom */}
    <div className="grid md:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={member.id}
          className={`group bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 ${
            scrollY > 1800
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0"
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <div className="relative mb-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">
            {member.name}
          </h3>
          <p className="text-purple-400 font-medium mb-3">
            {member.position}
          </p>
          <p className="text-gray-300 text-sm">
            {member.description}
          </p>

          <div className="mt-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-700 transition-colors">
              <span className="text-white text-xs font-bold">in</span>
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 transition-colors">
              <span className="text-white text-xs font-bold">@</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${
            scrollY > 2200 ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-3xl font-bold text-white mb-4">
              <span className="text-purple-400">no</span>Company
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transformasi digital dimulai dari sini. Mari wujudkan visi bisnis Anda bersama solusi teknologi terdepan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-8 py-3 rounded-full text-white font-semibold transition-all">
                Konsultasi Gratis
              </button>
            </div>
            
            <div className="border-t border-slate-800 pt-8">
              <p className="text-gray-500">
                © 2025 noCompany. All rights reserved. Made with in Indonesia
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;