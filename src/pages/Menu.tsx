import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

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
          price: 'Rp 20,000'
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

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: `url('https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`}}>
        <div className="absolute inset-0 bg-[#2E1A0F]/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white fade-in">
            <h1 className="text-5xl font-bold mb-4 font-montserrat">Our Menu</h1>
            <p className="text-xl">Discover our carefully crafted coffee and food offerings</p>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#D4A017] text-[#2E1A0F] shadow-lg'
                    : 'bg-[#F8F4E9] text-[#8B5A2B] hover:bg-[#D4A017] hover:text-[#2E1A0F]'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-[#2E1A0F] font-montserrat text-center">
              {menuData[activeCategory].title}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuData[activeCategory].items.map((item, index) => (
                <div 
                  key={index} 
                  className={`card p-6 relative ${item.featured ? 'ring-2 ring-[#D4A017]' : ''}`}
                >
                  {item.featured && (
                    <div className="absolute top-4 right-4 bg-[#D4A017] text-[#2E1A0F] px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-[#2E1A0F] font-montserrat flex-1">
                      {item.name}
                    </h3>
                    <span className="text-xl font-bold text-[#D4A017] ml-4">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-[#8B5A2B] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;