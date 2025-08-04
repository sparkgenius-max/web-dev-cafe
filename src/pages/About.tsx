import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Heart, Leaf, Users, Target, Coffee, Award } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    story: false,
    mission: false,
    values: false,
    team: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);
    const storyTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, story: true })), 300);
    const missionTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, mission: true })), 500);
    const valuesTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, values: true })), 700);
    const teamTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, team: true })), 900);

    return () => {
      clearTimeout(timer);
      clearTimeout(storyTimer);
      clearTimeout(missionTimer);
      clearTimeout(valuesTimer);
      clearTimeout(teamTimer);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us - Malang Coffee House</title>
        <meta name="description" content="Learn about Malang Coffee House's story, mission, and values. Discover how we've been serving exceptional coffee and building community since 2020." />
      </Helmet>

      {/* Hero Section - Fore Style */}
      <section className="relative min-h-96 bg-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00965E]/5 to-[#00965E]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className={`transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="mb-6">
                <span className="inline-block bg-[#00965E]/10 text-[#00965E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ✨ Our Story
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#222222] mb-6">
                About <span className="text-[#00965E]">Malang Coffee House</span>
              </h1>
              <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                Discover the story behind Malang's finest coffee experience. 
                Learn about our mission, values, and the passionate team behind every cup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Fore Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transition-all duration-1000 ease-out ${isVisible.story ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-4xl font-bold mb-8 text-[#222222]">
                Our Story
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-[#666666]">
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
            <div className={`transition-all duration-1000 ease-out ${isVisible.story ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative">
                <div className="bg-gradient-to-br from-[#00965E]/20 to-[#00965E]/5 rounded-3xl p-8">
                  <img 
                    src="https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=800" 
                    alt="Coffee farmers working with beans"
                    className="rounded-2xl shadow-2xl w-full h-auto"
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

      {/* Mission Statement - Fore Style */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center">
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ease-out ${isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-8 text-[#222222]">Our Mission</h2>
            <p className="text-xl text-[#666666] leading-relaxed">
              To create exceptional coffee experiences that connect people, celebrate Indonesian coffee culture, 
              and contribute positively to our local community. We believe that great coffee brings people together, 
              and every cup should be a moment of joy and connection.
            </p>
          </div>
        </div>
      </section>

      {/* Values - Fore Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible.values ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-6 text-[#222222]">Our Values</h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              The principles that guide everything we do at Malang Coffee House
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Quality",
                description: "We never compromise on quality, from bean selection to the final cup in your hands.",
                color: "from-[#00965E] to-[#00784A]"
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Environmental responsibility through ethical sourcing and eco-friendly practices.",
                color: "from-[#00965E] to-[#00784A]"
              },
              {
                icon: Users,
                title: "Community",
                description: "Building connections and supporting our local community in everything we do.",
                color: "from-[#00965E] to-[#00784A]"
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Every cup is crafted with love and dedication to the art of coffee making.",
                color: "from-[#00965E] to-[#00784A]"
              }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className={`bg-gradient-to-br ${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-4">{value.title}</h3>
                <p className="text-[#666666] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Fore Style */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible.team ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-6 text-[#222222]">Meet Our Team</h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              The passionate individuals who make Malang Coffee House a special place
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                name: "Andi Pratama",
                role: "Founder & Head Roaster",
                description: "With 15 years of experience in coffee, Andi brings expertise in roasting and a passion for showcasing Indonesian coffee culture."
              },
              {
                image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                name: "Sari Wijaya",
                role: "Head Barista",
                description: "A latte art champion and coffee brewing expert, Sari ensures every cup meets our highest standards of excellence."
              },
              {
                image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
                name: "Budi Santoso",
                role: "Community Manager",
                description: "Budi creates connections between our cafe and the local community, organizing events and building lasting relationships."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#00965E] rounded-full p-2">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#222222] mb-2">{member.name}</h3>
                <p className="text-[#00965E] font-semibold mb-4">{member.role}</p>
                <p className="text-[#666666] text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;