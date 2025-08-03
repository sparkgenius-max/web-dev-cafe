import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Calendar, User, Clock, ArrowLeft, Facebook, Twitter, Share2 } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="section-padding">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#2E1A0F]">Article Not Found</h1>
          <p className="text-lg text-[#8B5A2B] mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="btn-primary">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{post.title} - Malang Coffee House Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="section-padding">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link 
              to="/blog"
              className="inline-flex items-center text-[#8B5A2B] hover:text-[#D4A017] transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <span className="bg-[#D4A017] text-[#2E1A0F] px-4 py-2 rounded-full text-sm font-medium mb-4 inline-block">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#2E1A0F] font-montserrat leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-[#8B5A2B] mb-6">
                <span className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  {post.author}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {new Date(post.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  {post.readTime}
                </span>
              </div>

              <img 
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none mb-12"
              style={{
                '--tw-prose-body': '#8B5A2B',
                '--tw-prose-headings': '#2E1A0F',
                '--tw-prose-links': '#D4A017',
                '--tw-prose-bold': '#2E1A0F',
                '--tw-prose-counters': '#D4A017',
                '--tw-prose-bullets': '#D4A017',
                '--tw-prose-quotes': '#8B5A2B'
              } as React.CSSProperties}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Social Sharing */}
            <div className="border-t border-[#F8F4E9] pt-8 mb-12">
              <h3 className="text-lg font-semibold mb-4 text-[#2E1A0F] font-montserrat">
                Share This Article
              </h3>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 bg-[#3b5998] text-white px-4 py-2 rounded-lg hover:bg-[#2d4373] transition-colors">
                  <Facebook className="w-5 h-5" />
                  <span>Facebook</span>
                </button>
                <button className="flex items-center space-x-2 bg-[#1da1f2] text-white px-4 py-2 rounded-lg hover:bg-[#0d8bd9] transition-colors">
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </button>
                <button className="flex items-center space-x-2 bg-[#8B5A2B] text-white px-4 py-2 rounded-lg hover:bg-[#6B4423] transition-colors">
                  <Share2 className="w-5 h-5" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="border-t border-[#F8F4E9] pt-12">
                <h3 className="text-2xl font-bold mb-8 text-[#2E1A0F] font-montserrat">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {relatedPosts.map((relatedPost) => (
                    <article key={relatedPost.id} className="card overflow-hidden">
                      <img 
                        src={relatedPost.featuredImage}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <span className="bg-[#D4A017] text-[#2E1A0F] px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                          {relatedPost.category}
                        </span>
                        <h4 className="text-lg font-semibold mb-3 font-montserrat">
                          {relatedPost.title}
                        </h4>
                        <p className="text-[#8B5A2B] mb-4 text-sm">
                          {relatedPost.excerpt.substring(0, 120)}...
                        </p>
                        <Link 
                          to={`/blog/${relatedPost.slug}`}
                          className="text-[#D4A017] font-medium hover:text-[#2E1A0F] transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;