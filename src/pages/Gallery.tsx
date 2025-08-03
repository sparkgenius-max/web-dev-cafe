import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      src: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Barista preparing pour-over coffee',
      category: 'brewing'
    },
    {
      src: 'https://images.pexels.com/photos/1888838/pexels-photo-1888838.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beautiful latte art creation',
      category: 'latte-art'
    },
    {
      src: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Cozy interior seating area',
      category: 'interior'
    },
    {
      src: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Fresh coffee beans',
      category: 'products'
    },
    {
      src: 'https://images.pexels.com/photos/851555/pexels-photo-851555.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Iced coffee with milk',
      category: 'products'
    },
    {
      src: 'https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Coffee roasting process',
      category: 'brewing'
    },
    {
      src: 'https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Coffee shop counter and equipment',
      category: 'interior'
    },
    {
      src: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Barista at work',
      category: 'staff'
    },
    {
      src: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Customer enjoying coffee',
      category: 'experience'
    },
    {
      src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Coffee shop atmosphere',
      category: 'interior'
    },
    {
      src: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Espresso machine in action',
      category: 'brewing'
    },
    {
      src: 'https://images.pexels.com/photos/1002543/pexels-photo-1002543.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Perfect cup of coffee',
      category: 'products'
    }
  ];

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Malang Coffee House</title>
        <meta name="description" content="Browse our gallery showcasing the coffee brewing process, beautiful latte art, cozy interior, and the passionate team behind Malang Coffee House." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: `url('https://images.pexels.com/photos/1888838/pexels-photo-1888838.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`}}>
        <div className="absolute inset-0 bg-[#2E1A0F]/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white fade-in">
            <h1 className="text-5xl font-bold mb-4 font-montserrat">Gallery</h1>
            <p className="text-xl">Capturing the essence of our coffee culture and atmosphere</p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#2E1A0F] font-montserrat">
              Coffee Artistry & Atmosphere
            </h2>
            <p className="text-lg text-[#8B5A2B] max-w-2xl mx-auto">
              Take a visual journey through our coffee house, from bean to cup and everything in between
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#2E1A0F]/0 group-hover:bg-[#2E1A0F]/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-[#D4A017] transition-colors z-10"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white text-center">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;