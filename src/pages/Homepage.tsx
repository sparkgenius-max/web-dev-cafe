import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const Homepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Malang Coffee House - Premium Coffee Experience in Malang</title>
        <meta name="description" content="Discover the finest coffee experience in Malang, Indonesia. Premium coffee, warm atmosphere, and exceptional service since 2020." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: `url('https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`}}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E1A0F]/80 to-[#8B5A2B]/60"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-montserrat leading-tight">
              Exceptional Coffee in the Heart of Malang
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Where passion meets perfection in every cup. Experience the finest Indonesian coffee beans crafted by skilled artisans in a warm, welcoming atmosphere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu" className="btn-primary text-center">
                Explore Our Menu <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="btn-secondary text-center text-white border-white hover:bg-white hover:text-[#2E1A0F]">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-[#F8F4E9]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-[#2E1A0F] font-montserrat">
              Welcome to Malang Coffee House
            </h2>
            <p className="text-lg text-[#8B5A2B] leading-relaxed mb-8">
              Since 2020, we've been Malang's premier destination for exceptional coffee experiences. 
              Our commitment to quality beans, masterful brewing techniques, and genuine hospitality 
              creates more than just a coffee shop – we create a community where every visit feels like coming home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-[#D4A017] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-[#2E1A0F] w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat">Premium Quality</h3>
                <p className="text-[#8B5A2B]">Hand-selected beans from Indonesia's finest coffee regions</p>
              </div>
              <div className="text-center">
                <div className="bg-[#D4A017] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-[#2E1A0F] w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat">Community Focus</h3>
                <p className="text-[#8B5A2B]">A welcoming space where connections are made over great coffee</p>
              </div>
              <div className="text-center">
                <div className="bg-[#D4A017] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-[#2E1A0F] w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-montserrat">Expert Craftsmanship</h3>
                <p className="text-[#8B5A2B]">Skilled baristas who treat every cup as a work of art</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Coffee Highlights */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#2E1A0F] font-montserrat">
              Today's Featured Specials
            </h2>
            <p className="text-lg text-[#8B5A2B] max-w-2xl mx-auto">
              Discover our carefully curated selection of specialty drinks and seasonal favorites
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="h-48 bg-cover bg-center" 
                   style={{backgroundImage: `url('https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800')`}}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-montserrat">Malang Signature Blend</h3>
                <p className="text-[#8B5A2B] mb-4">
                  Our house specialty featuring locally sourced beans with notes of chocolate and caramel
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#D4A017]">Rp 32,000</span>
                  <Link to="/menu" className="text-[#2E1A0F] hover:text-[#D4A017] transition-colors">
                    View Menu <ArrowRight className="inline ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="h-48 bg-cover bg-center" 
                   style={{backgroundImage: `url('https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=800')`}}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-montserrat">Cold Brew Paradise</h3>
                <p className="text-[#8B5A2B] mb-4">
                  Smooth, refreshing cold brew perfect for Malang's warm afternoons
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#D4A017]">Rp 28,000</span>
                  <Link to="/menu" className="text-[#2E1A0F] hover:text-[#D4A017] transition-colors">
                    View Menu <ArrowRight className="inline ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="h-48 bg-cover bg-center" 
                   style={{backgroundImage: `url('https://images.pexels.com/photos/1888838/pexels-photo-1888838.jpeg?auto=compress&cs=tinysrgb&w=800')`}}>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-montserrat">Artisan Latte Art</h3>
                <p className="text-[#8B5A2B] mb-4">
                  Expertly crafted lattes with beautiful designs that are almost too pretty to drink
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#D4A017]">Rp 30,000</span>
                  <Link to="/menu" className="text-[#2E1A0F] hover:text-[#D4A017] transition-colors">
                    View Menu <ArrowRight className="inline ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-[#2E1A0F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-montserrat">
            Ready for Your Perfect Cup?
          </h2>
          <p className="text-xl mb-8 text-[#F0E6D2] max-w-2xl mx-auto">
            Visit us today and discover why Malang Coffee House is the city's favorite coffee destination
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Visit Us Today
            </Link>
            <Link to="/menu" className="btn-secondary text-white border-white hover:bg-white hover:text-[#2E1A0F]">
              Browse Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;