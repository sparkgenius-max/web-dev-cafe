import React from 'react';
import { Helmet } from 'react-helmet';
import { Heart, Leaf, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Malang Coffee House</title>
        <meta name="description" content="Learn about Malang Coffee House's story, mission, and values. Discover how we've been serving exceptional coffee and building community since 2020." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: `url('https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop')`}}>
        <div className="absolute inset-0 bg-[#2E1A0F]/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white fade-in">
            <h1 className="text-5xl font-bold mb-4 font-montserrat">About Us</h1>
            <p className="text-xl">Discover the story behind Malang's finest coffee experience</p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-[#2E1A0F] font-montserrat">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed text-[#8B5A2B]">
                <p>
                  Malang Coffee House was born from a simple dream: to bring the authentic taste of Indonesian coffee 
                  to the heart of Malang. Founded in 2020 by passionate coffee enthusiasts, we started our journey 
                  with a commitment to sourcing the finest beans from local farmers and creating a space where 
                  community thrives.
                </p>
                <p>
                  What began as a small cafe with just three tables has grown into Malang's beloved coffee destination. 
                  Our founders, inspired by travels across Indonesia's coffee regions, wanted to showcase the incredible 
                  diversity and quality of local beans while creating a warm, welcoming environment where every customer 
                  feels at home.
                </p>
                <p>
                  Today, we continue to honor our roots by maintaining direct relationships with coffee farmers, 
                  investing in sustainable practices, and never compromising on quality. Every cup tells a story 
                  of dedication, craftsmanship, and the rich coffee heritage of Indonesia.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Coffee farmers working with beans"
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding bg-[#F8F4E9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-[#2E1A0F] font-montserrat">Our Mission</h2>
          <p className="text-xl text-[#8B5A2B] max-w-4xl mx-auto leading-relaxed">
            To create exceptional coffee experiences that connect people, celebrate Indonesian coffee culture, 
            and contribute positively to our local community. We believe that great coffee brings people together, 
            and every cup should be a moment of joy and connection.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#2E1A0F] font-montserrat">Our Values</h2>
            <p className="text-lg text-[#8B5A2B] max-w-2xl mx-auto">
              The principles that guide everything we do at Malang Coffee House
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card p-8 text-center">
              <div className="bg-[#D4A017] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-[#2E1A0F] w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Quality</h3>
              <p className="text-[#8B5A2B]">
                We never compromise on quality, from bean selection to the final cup in your hands.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-[#D4A017] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-[#2E1A0F] w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Sustainability</h3>
              <p className="text-[#8B5A2B]">
                Environmental responsibility through ethical sourcing and eco-friendly practices.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-[#D4A017] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#2E1A0F] w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Community</h3>
              <p className="text-[#8B5A2B]">
                Building connections and supporting our local community in everything we do.
              </p>
            </div>

            <div className="card p-8 text-center">
              <div className="bg-[#D4A017] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-[#2E1A0F] w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-montserrat">Passion</h3>
              <p className="text-[#8B5A2B]">
                Every cup is crafted with love and dedication to the art of coffee making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[#F8F4E9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#2E1A0F] font-montserrat">Meet Our Team</h2>
            <p className="text-lg text-[#8B5A2B] max-w-2xl mx-auto">
              The passionate individuals who make Malang Coffee House a special place
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                alt="Andi Pratama - Founder & Head Roaster"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Andi Pratama</h3>
              <p className="text-[#D4A017] font-medium mb-3">Founder & Head Roaster</p>
              <p className="text-[#8B5A2B] text-sm">
                With 15 years of experience in coffee, Andi brings expertise in roasting and 
                a passion for showcasing Indonesian coffee culture.
              </p>
            </div>

            <div className="card p-6 text-center">
              <img 
                src="https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                alt="Sari Wijaya - Head Barista"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Sari Wijaya</h3>
              <p className="text-[#D4A017] font-medium mb-3">Head Barista</p>
              <p className="text-[#8B5A2B] text-sm">
                A latte art champion and coffee brewing expert, Sari ensures every cup 
                meets our highest standards of excellence.
              </p>
            </div>

            <div className="card p-6 text-center">
              <img 
                src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop" 
                alt="Budi Santoso - Community Manager"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Budi Santoso</h3>
              <p className="text-[#D4A017] font-medium mb-3">Community Manager</p>
              <p className="text-[#8B5A2B] text-sm">
                Budi creates connections between our cafe and the local community, 
                organizing events and building lasting relationships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;