import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Coffee, Star, Clock } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  featured?: boolean;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('espresso');
  const [isVisible, setIsVisible] = useState({
    hero: false,
    menu: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);
    const menuTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, menu: true })), 300);

    return () => {
      clearTimeout(timer);
      clearTimeout(menuTimer);
    };
  }, []);

  const menuData: Record<string, MenuCategory> = {
    espresso: {
      title: 'Espresso-Based Drinks',
      items: [
        {
          name: 'Espresso Single',
          description: 'Pure, intense shot of our signature Malang blend with rich crema',
          price: 'Rp 18,000'
        },
        {
          name: 'Espresso Double',
          description: 'Double shot for the true coffee connoisseur seeking bold flavor',
          price: 'Rp 25,000'
        },
        {
          name: 'Cappuccino',
          description: 'Double shot espresso with steamed milk and velvety microfoam',
          price: 'Rp 28,000',
          featured: true
        },
        {
          name: 'Latte',
          description: 'Smooth espresso with steamed milk, topped with beautiful latte art',
          price: 'Rp 30,000'
        },
        {
          name: 'Flat White',
          description: 'Double ristretto with steamed milk for a strong, smooth taste',
          price: 'Rp 32,000'
        },
        {
          name: 'Macchiato',
          description: 'Espresso "marked" with a dollop of steamed milk foam',
          price: 'Rp 26,000'
        }
      ]
    },
    coldbrew: {
      title: 'Cold Brew & Iced Drinks',
      items: [
        {
          name: 'Classic Cold Brew',
          description: 'Smooth, low-acid cold brew steeped for 24 hours for perfect extraction',
          price: 'Rp 28,000',
          featured: true
        },
        {
          name: 'Nitro Cold Brew',
          description: 'Cold brew infused with nitrogen for a creamy, cascading effect',
          price: 'Rp 35,000'
        },
        {
          name: 'Iced Americano',
          description: 'Double espresso over ice with cold water for a refreshing kick',
          price: 'Rp 24,000'
        },
        {
          name: 'Iced Latte',
          description: 'Espresso with cold milk over ice, perfect for warm Malang days',
          price: 'Rp 28,000'
        },
        {
          name: 'Cold Brew Float',
          description: 'Cold brew with a scoop of vanilla ice cream for indulgent treat',
          price: 'Rp 38,000'
        }
      ]
    },
    specialty: {
      title: 'Specialty Drinks',
      items: [
        {
          name: 'Malang Signature Blend',
          description: 'Our house special with locally sourced beans, chocolate and caramel notes',
          price: 'Rp 32,000',
          featured: true
        },
        {
          name: 'Indonesian Spice Latte',
          description: 'Latte infused with traditional Indonesian spices: cinnamon, cardamom, clove',
          price: 'Rp 34,000'
        },
        {
          name: 'Coconut Coffee',
          description: 'Espresso with coconut milk and palm sugar, a tropical Indonesian twist',
          price: 'Rp 30,000'
        },
        {
          name: 'Gula Jawa Latte',
          description: 'Traditional latte sweetened with authentic Javanese palm sugar',
          price: 'Rp 33,000'
        }
      ]
    },
    tea: {
      title: 'Tea & Non-Coffee',
      items: [
        {
          name: 'Jasmine Green Tea',
          description: 'Premium jasmine green tea served hot or iced',
          price: 'Rp 20,000',
        },
        {
          name: 'Indonesian Black Tea',
          description: 'Rich, full-bodied black tea from Indonesian highlands',
          price: 'Rp 18,000'
        },
        {
          name: 'Chamomile Honey Tea',
          description: 'Soothing chamomile tea with local wildflower honey',
          price: 'Rp 22,000'
        },
        {
          name: 'Hot Chocolate',
          description: 'Rich Belgian chocolate with steamed milk and whipped cream',
          price: 'Rp 25,000'
        }
      ]
    },
    bites: {
      title: 'Light Bites & Pastries',
      items: [
        {
          name: 'Croissant Butter',
          description: 'Freshly baked French butter croissant, flaky and golden',
          price: 'Rp 15,000'
        },
        {
          name: 'Pain au Chocolat',
          description: 'Buttery pastry with rich Belgian chocolate filling',
          price: 'Rp 18,000'
        },
        {
          name: 'Indonesian Banana Bread',
          description: 'Moist banana bread made with local bananas and palm sugar',
          price: 'Rp 12,000'
        },
        {
          name: 'Avocado Toast',
          description: 'Multigrain bread with fresh avocado, lime, and cherry tomatoes',
          price: 'Rp 28,000'
        },
        {
          name: 'Malang Apple Pastry',
          description: 'Local Malang apples in flaky pastry with cinnamon',
          price: 'Rp 16,000'
        }
      ]
    }
  };

  const categories = [
    { id: 'espresso', label: 'Espresso' },
    { id: 'coldbrew', label: 'Cold Brew' },
    { id: 'specialty', label: 'Specialty' },
    { id: 'tea', label: 'Tea & More' },
    { id: 'bites', label: 'Light Bites' }
  ];

  return (
    <>
      <Helmet>
        <title>Menu - Malang Coffee House</title>
        <meta name="description" content="Explore our extensive menu of premium coffee drinks, specialty beverages, and light bites. From classic espresso to unique Indonesian blends." />
      </Helmet>

      {/* Hero Section - Fore Style */}
      <section className="relative min-h-96 bg-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00965E]/5 to-[#00965E]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className={`transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="mb-6">
                <span className="inline-block bg-[#00965E]/10 text-[#00965E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ✨ Our Menu
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#222222] mb-6">
                Discover Our <span className="text-[#00965E]">Menu</span>
              </h1>
              <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                Carefully crafted coffee and food offerings that showcase the best of Indonesian coffee culture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Content - Fore Style */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          {/* Category Navigation */}
          <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ease-out ${isVisible.menu ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-[#00965E] text-white shadow-lg'
                    : 'bg-white text-[#666666] hover:bg-[#00965E] hover:text-white shadow-md'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-[#222222] text-center">
              {menuData[activeCategory].title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {menuData[activeCategory].items.map((item, index) => (
                <div 
                  key={index} 
                  className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden ${
                    item.featured ? 'ring-2 ring-[#00965E]' : ''
                  }`}
                >
                  {item.featured && (
                    <div className="absolute bottom-2 right-4 bg-[#00965E] text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Featured
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-[#222222] flex-1">
                      {item.name}
                    </h3>
                    <span className="text-2xl font-bold text-[#00965E] ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[#666666] leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-4 flex items-center text-[#00965E] text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Freshly prepared</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section - Fore Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-[#222222]">
              Special Offers
            </h2>
            <p className="text-lg text-[#666666] mb-8">
              Enjoy exclusive deals and seasonal specials
            </p>
            <div className="bg-gradient-to-br from-[#00965E]/10 to-[#00965E]/5 rounded-3xl p-8">
              <div className="flex items-center justify-center mb-4">
                <Coffee className="w-8 h-8 text-[#00965E] mr-3" />
                <h3 className="text-2xl font-bold text-[#222222]">Happy Hour</h3>
              </div>
              <p className="text-lg text-[#666666] mb-4">
                Get 20% off on all cold drinks from 2 PM to 5 PM daily
              </p>
              <button className="bg-[#00965E] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00784A] transition-all duration-300 transform hover:scale-105">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;