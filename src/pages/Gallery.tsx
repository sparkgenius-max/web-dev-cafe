import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { X, Camera, Heart } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    gallery: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);
    const galleryTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, gallery: true })), 300);

    return () => {
      clearTimeout(timer);
      clearTimeout(galleryTimer);
    };
  }, []);

  const images: GalleryImage[] = [
    {
      src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr-iXGEsH5fogLF77BKkevOeb9omH7cZyfGCx0J9n5Gth__SIzrsiPmemkWR-h6QtAk3p65eSVY2ubkfBSqCD_fNjSqGOsSdVPesac1I0WmosdVQuuvVoGJHjbpR9f0KG_IadpsgQ=w800-h500-k-no',
      alt: 'Barista preparing pour-over coffee',
      category: 'brewing'
    },
    {
      src: 'https://images.pexels.com/photos/1888838/pexels-photo-1888838.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Beautiful latte art creation',
      category: 'latte-art'
    },
    {
      src: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr-iXGEsH5fogLF77BKkevOeb9omH7cZyfGCx0J9n5Gth__SIzrsiPmemkWR-h6QtAk3p65eSVY2ubkfBSqCD_fNjSqGOsSdVPesac1I0WmosdVQuuvVoGJHjbpR9f0KG_IadpsgQ=w800-h500-k-no',
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

      {/* Hero Section - Fore Style */}
      <section className="relative min-h-96 bg-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00965E]/5 to-[#00965E]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className={`transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="mb-6">
                <span className="inline-block bg-[#00965E]/10 text-[#00965E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ✨ Our Gallery
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#222222] mb-6">
                Coffee <span className="text-[#00965E]">Artistry</span>
              </h1>
              <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                Capturing the essence of our coffee culture and atmosphere through beautiful imagery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid - Fore Style */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible.gallery ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold mb-6 text-[#222222]">
              Coffee Artistry & Atmosphere
            </h2>
            <p className="text-lg text-[#666666] max-w-2xl mx-auto">
              Take a visual journey through our coffee house, from bean to cup and everything in between
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#00965E]/0 group-hover:bg-[#00965E]/30 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Camera className="w-6 h-6 text-[#00965E]" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[#222222] font-semibold text-sm">{image.alt}</p>
                  <div className="flex items-center mt-2">
                    <Heart className="w-4 h-4 text-[#00965E] mr-1" />
                    <span className="text-[#666666] text-xs">{image.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox - Fore Style */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-[#00965E] transition-colors z-10 bg-[#00965E] rounded-full p-3"
            >
              <X size={24} />
            </button>
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-white">
                <p className="text-[#222222] text-lg font-semibold text-center">{selectedImage.alt}</p>
                <div className="flex items-center justify-center mt-2">
                  <span className="bg-[#00965E]/10 text-[#00965E] px-3 py-1 rounded-full text-sm font-medium">
                    {selectedImage.category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;