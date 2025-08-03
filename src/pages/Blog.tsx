import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, User, Clock, Search } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'all',
    'Coffee Education', 
    'Local Malang Stories', 
    'Behind the Scenes'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Blog - Malang Coffee House</title>
        <meta name="description" content="Read the latest from Malang Coffee House. Coffee education, local stories, and behind-the-scenes insights from our passionate team." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center bg-no-repeat" 
               style={{backgroundImage: `url('https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`}}>
        <div className="absolute inset-0 bg-[#2E1A0F]/70"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white fade-in">
            <h1 className="text-5xl font-bold mb-4 font-montserrat">Our Blog</h1>
            <p className="text-xl">Stories, insights, and coffee wisdom from the heart of Malang</p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#2E1A0F] font-montserrat">Featured Stories</h2>
            <p className="text-lg text-[#8B5A2B]">Our latest insights on coffee, culture, and community</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <article key={post.id} className="card overflow-hidden">
                <img 
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-[#8B5A2B] mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="bg-[#D4A017] text-[#2E1A0F] px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 font-montserrat line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[#8B5A2B] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm text-[#8B5A2B]">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-[#D4A017] font-medium hover:text-[#2E1A0F] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Search and Filter */}
          <div className="bg-[#F8F4E9] rounded-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8B5A2B] w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[#D4A017]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-[#D4A017]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4A017] focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* All Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="card overflow-hidden">
                <img 
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-[#8B5A2B] mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="bg-[#D4A017] text-[#2E1A0F] px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3 font-montserrat">
                    {post.title}
                  </h3>
                  <p className="text-[#8B5A2B] mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm text-[#8B5A2B]">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-[#D4A017] font-medium hover:text-[#2E1A0F] transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-[#8B5A2B]">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;