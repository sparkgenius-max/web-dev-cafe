import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Malang Coffee House</title>
        <meta name="description" content="Get in touch with Malang Coffee House. Visit us, call, or send a message. We're located in the heart of Malang, East Java." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: `url('https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`}}>
        <div className="absolute inset-0 bg-[#2E1A0F]/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white fade-in">
            <h1 className="text-5xl font-bold mb-4 font-montserrat">Contact Us</h1>
            <p className="text-xl">We'd love to hear from you. Visit us or get in touch!</p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#2E1A0F] font-montserrat">
                Visit Our Coffee House
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4A017] p-3 rounded-full">
                    <MapPin className="text-[#2E1A0F] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#2E1A0F] mb-1">Address</h3>
                    <p className="text-[#8B5A2B]">
                      Jl. Semarang No. 45, Lowokwaru<br />
                      Malang, East Java 65141<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4A017] p-3 rounded-full">
                    <Phone className="text-[#2E1A0F] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#2E1A0F] mb-1">Phone</h3>
                    <p className="text-[#8B5A2B]">+62 341-555-0123</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4A017] p-3 rounded-full">
                    <Mail className="text-[#2E1A0F] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#2E1A0F] mb-1">Email</h3>
                    <p className="text-[#8B5A2B]">hello@malangcoffeehouse.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4A017] p-3 rounded-full">
                    <Clock className="text-[#2E1A0F] w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#2E1A0F] mb-1">Operating Hours</h3>
                    <p className="text-[#8B5A2B]">
                      Monday - Sunday<br />
                      7:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-[#F8F4E9] p-4 rounded-lg">
                <h3 className="font-semibold text-lg text-[#2E1A0F] mb-4">Find Us on the Map</h3>
                <div className="w-full h-64 bg-[#8B5A2B]/20 rounded-lg flex items-center justify-center">
                  <p className="text-[#8B5A2B] text-center">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    Interactive Map<br />
                    <span className="text-sm">Jl. Semarang No. 45, Lowokwaru, Malang</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-[#2E1A0F] font-montserrat">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#2E1A0F] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#2E1A0F] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#2E1A0F] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#2E1A0F] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent resize-vertical"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="section-padding bg-[#F8F4E9]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#2E1A0F] font-montserrat">
            Come Visit Us
          </h2>
          <p className="text-lg text-[#8B5A2B] max-w-2xl mx-auto mb-8">
            Experience the warmth of Malang Coffee House in person. We're located in the heart of 
            Lowokwaru, easily accessible and always ready to serve you the perfect cup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-primary">
              View Our Menu
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;