import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, Coffee, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isVisible, setIsVisible] = useState({
    hero: false,
    contactInfo: false,
    form: false,
    visitUs: false
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);
    const contactInfoTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, contactInfo: true })), 300);
    const formTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, form: true })), 500);
    const visitUsTimer = setTimeout(() => setIsVisible(prev => ({ ...prev, visitUs: true })), 700);

    return () => {
      clearTimeout(timer);
      clearTimeout(contactInfoTimer);
      clearTimeout(formTimer);
      clearTimeout(visitUsTimer);
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Malang Coffee House</title>
        <meta name="description" content="Get in touch with Malang Coffee House. Visit us, call, or send a message. We're located in the heart of Malang, East Java." />
      </Helmet>

      {/* Hero Section - Fore Style */}
      <section className="relative min-h-96 bg-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#00965E]/5 to-[#00965E]/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className={`transition-all duration-1000 ease-out ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="mb-6">
                <span className="inline-block bg-[#00965E]/10 text-[#00965E] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  ✨ Get In Touch
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#222222] mb-6">
                Contact <span className="text-[#00965E]">Us</span>
              </h1>
              <p className="text-xl text-[#666666] max-w-3xl mx-auto">
                We'd love to hear from you. Visit us or get in touch for the best coffee experience in Malang!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information - Fore Style */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className={`transition-all duration-1000 ease-out ${isVisible.contactInfo ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <h2 className="text-4xl font-bold mb-10 text-[#222222]">
                Visit Our Coffee House
              </h2>
              
              <div className="space-y-8 mb-10">
                {[
                  { icon: MapPin, title: "Address", content: "Jl. Semarang No. 45, Lowokwaru\nMalang, East Java 65141\nIndonesia" },
                  { icon: Phone, title: "Phone", content: "+62 341-555-0123" },
                  { icon: Mail, title: "Email", content: "hello@malangcoffeehouse.com" },
                  { icon: Clock, title: "Operating Hours", content: "Monday - Sunday\n7:00 AM - 10:00 PM" }
                ].map((item, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-to-br from-[#00965E] to-[#00784A] p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-white w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-[#222222] mb-2 group-hover:text-[#00965E] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-[#666666] leading-relaxed whitespace-pre-line">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Section */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-xl text-[#222222] mb-6 flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-[#00965E]" />
                  Find Us on the Map
                </h3>
                <div className="w-full h-72 bg-gradient-to-br from-[#00965E]/10 to-[#00965E]/5 rounded-xl flex items-center justify-center border-2 border-dashed border-[#00965E]/30 hover:border-[#00965E]/50 transition-colors duration-300">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-[#00965E]" />
                    <p className="text-[#666666] text-lg font-semibold">Interactive Map</p>
                    <p className="text-[#666666] text-sm mt-2">Jl. Semarang No. 45, Lowokwaru, Malang</p>
                    <div className="mt-4 px-4 py-2 bg-[#00965E] text-white rounded-full text-sm font-semibold inline-block">
                      View on Google Maps
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Fore Style */}
            <div className={`transition-all duration-1000 ease-out ${isVisible.form ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <h2 className="text-4xl font-bold mb-10 text-[#222222]">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-semibold text-[#222222] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#00965E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965E] focus:border-transparent bg-[#F5F5F5] placeholder-[#666666]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-semibold text-[#222222] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#00965E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965E] focus:border-transparent bg-[#F5F5F5] placeholder-[#666666]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-base font-semibold text-[#222222] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#00965E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965E] focus:border-transparent bg-[#F5F5F5] placeholder-[#666666]"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="mb-8">
                  <label htmlFor="message" className="block text-base font-semibold text-[#222222] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#00965E]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00965E] focus:border-transparent bg-[#F5F5F5] placeholder-[#666666] resize-vertical"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#00965E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00784A] transition-all duration-300 transform hover:scale-105 shadow-lg w-full flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section - Fore Style */}
      <section className={`py-20 bg-white transition-all duration-1000 ease-out ${isVisible.visitUs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#222222]">
            Come Visit Us
          </h2>
          <p className="text-lg text-[#666666] max-w-2xl mx-auto mb-8">
            Experience the warmth of Malang Coffee House in person. We're located in the heart of 
            Lowokwaru, easily accessible and always ready to serve you the perfect cup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/menu" 
              className="bg-[#00965E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00784A] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Our Menu
            </Link>
            <Link 
              to="/about" 
              className="border-2 border-[#00965E] text-[#00965E] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00965E] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;