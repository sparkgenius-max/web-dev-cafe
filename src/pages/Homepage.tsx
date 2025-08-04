import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, Star, Users, Award, Coffee, Download, MapPin, Clock } from 'lucide-react';

const Homepage: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    menu: false,
    cta: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);
    const featuresTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, features: true })), 300);
    const menuTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, menu: true })), 500);
    const ctaTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, cta: true })), 700);

    return () => {
      clearTimeout(timer);
      clearTimeout(featuresTimer);
      clearTimeout(menuTimer);
      clearTimeout(ctaTimer);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Malang Coffee House - Premium Coffee Experience in Malang</title>
        <meta name="description" content="Discover the finest coffee experience in Malang, Indonesia. Premium coffee, warm atmosphere, and exceptional service since 2020." />
      </Helmet>

      {/* Hero Section - Fore Coffee Style */}
      <section className="relative min-h-screen bg-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00965E]/5 to-[#00965E]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className={`transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="mb-6">
                <span className="inline-block bg-[#00965E]/10 text-[#00965E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ✨ Something new is brewing!
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#222222] mb-6 leading-tight">
                Let Malang Coffee House take your coffee-enjoying moments to the 
                <span className="text-[#00965E]"> next level!</span>
              </h1>
              <p className="text-xl text-[#666666] mb-8 leading-relaxed">
                Experience the finest Indonesian coffee beans crafted by skilled artisans. 
                Where passion meets perfection in every cup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/menu" 
                  className="bg-[#00965E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00784A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Explore Our Menu <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-[#00965E] text-[#00965E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00965E] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Our Story
                </Link>
              </div>
            </div>
            
            {/* Right Content - Coffee Image */}
            <div className={`transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#00965E]/20 to-[#00965E]/5 rounded-3xl p-8">
                  <img 
                    src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Premium Coffee" 
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                    <Coffee className="w-8 h-8 text-[#00965E]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Fore Style */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible.features ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-[#222222] mb-6">
              Grind The Essentials
            </h2>
            <p className="text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed">
              Dibuat dari biji kopi Indonesia pilihan untuk pengalaman minum kopi terbaik setiap hari. 
              Our commitment to quality beans, masterful brewing techniques, and genuine hospitality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Premium Quality",
                description: "Hand-selected beans from Indonesia's finest coffee regions",
                color: "from-[#00965E] to-[#00784A]"
              },
              {
                icon: Users,
                title: "Community Focus",
                description: "A welcoming space where connections are made over great coffee",
                color: "from-[#00965E] to-[#00784A]"
              },
              {
                icon: Award,
                title: "Expert Craftsmanship",
                description: "Skilled baristas who treat every cup as a work of art",
                color: "from-[#00965E] to-[#00784A]"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${feature.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <feature.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-4 text-center">{feature.title}</h3>
                <p className="text-[#666666] text-center leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Highlights - Fore Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible.menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-[#222222] mb-6">
              Today's Featured Specials
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Discover our carefully curated selection of specialty drinks and seasonal favorites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Malang Signature Blend",
                description: "Our house specialty featuring locally sourced beans with notes of chocolate and caramel",
                price: "Rp 32,000"
              },
              {
                image: "https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Cold Brew Paradise",
                description: "Smooth, refreshing cold brew perfect for Malang's warm afternoons",
                price: "Rp 28,000"
              },
              {
                image: "https://images.pexels.com/photos/1888838/pexels-photo-1888838.jpeg?auto=compress&cs=tinysrgb&w=800",
                title: "Artisan Latte Art",
                description: "Expertly crafted lattes with beautiful designs that are almost too pretty to drink",
                price: "Rp 30,000"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url('${item.image}')`}}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#222222] mb-3">{item.title}</h3>
                  <p className="text-[#666666] mb-4 leading-relaxed">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#00965E]">{item.price}</span>
                    <Link 
                      to="/menu" 
                      className="text-[#00965E] hover:text-[#00784A] font-semibold transition-colors flex items-center"
                    >
                      View Menu <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download App Section - Fore Style */}
      <section className="py-20 bg-[#00965E] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-1000 ease-out ${isVisible.cta ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-4xl font-bold mb-6">
                MALANG COFFEE HOUSE APP
              </h2>
              <p className="text-xl mb-8 opacity-90">
                <strong>Kopi hanya dalam satu ketukan!</strong><br />
                Cepat dan mudah dengan berbagai keuntungan ekstra
              </p>
              <p className="text-lg mb-8 opacity-80">
                Nikmati pengalaman minum kopi terbaik, promo, dan banyak lainnya!
              </p>
              <button className="bg-white text-[#00965E] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center">
                <Download className="mr-2 w-5 h-5" />
                Download App
              </button>
            </div>
            
            <div className={`transition-all duration-1000 ease-out ${isVisible.cta ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center">
                <div className="bg-white rounded-2xl p-6 mb-6">
                  <div className="flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#00965E] mr-2" />
                    <span className="text-[#222222] font-semibold">Find Nearest Store</span>
                  </div>
                  <p className="text-[#666666] text-sm">Jl. Semarang No. 45, Lowokwaru, Malang</p>
                </div>
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-[#00965E] mr-2" />
                    <span className="text-[#222222] font-semibold">Operating Hours</span>
                  </div>
                  <p className="text-[#666666] text-sm">Monday - Sunday<br />7:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible.cta ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-[#222222] mb-6">
              Ready for Your Perfect Cup?
            </h2>
            <p className="text-lg text-[#666666] mb-8 max-w-2xl mx-auto">
              Visit us today and discover why Malang Coffee House is the city's favorite coffee destination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-[#00965E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00784A] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Visit Us Today
              </Link>
              <Link 
                to="/menu" 
                className="border-2 border-[#00965E] text-[#00965E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00965E] hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Browse Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;