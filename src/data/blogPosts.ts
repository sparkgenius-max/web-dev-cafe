export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  featuredImage: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'perfect-pour-over-guide',
    title: 'The Perfect Pour-Over: A Step-by-Step Guide',
    excerpt: 'Master the art of pour-over coffee brewing with our comprehensive guide. Learn the techniques that will elevate your morning routine and unlock the full potential of your coffee beans.',
    content: `
      <h2>The Art of Pour-Over Coffee</h2>
      <p>Pour-over coffee brewing is both a science and an art form. At Malang Coffee House, we've perfected this technique to bring out the best flavors in every bean. Today, we're sharing our secrets with you.</p>

      <h3>What You'll Need</h3>
      <ul>
        <li>Quality coffee beans (we recommend our Malang Signature Blend)</li>
        <li>Pour-over dripper (V60 or Chemex)</li>
        <li>Paper filters</li>
        <li>Gooseneck kettle</li>
        <li>Digital scale</li>
        <li>Timer</li>
      </ul>

      <h3>The Perfect Recipe</h3>
      <p>Our baristas swear by the 1:16 ratio - that's 1 gram of coffee to 16 grams of water. For a single cup, we use 25g of coffee to 400g of water.</p>

      <h3>Step-by-Step Process</h3>
      <p><strong>Step 1: Heat Your Water</strong><br>
      Heat water to 195-205°F (90-96°C). The right temperature extracts the best flavors without burning the coffee.</p>

      <p><strong>Step 2: Grind Your Beans</strong><br>
      Grind your beans to a medium-fine consistency, similar to table salt. Fresh grinding is essential for optimal flavor.</p>

      <p><strong>Step 3: Rinse the Filter</strong><br>
      Place the filter in your dripper and rinse with hot water. This removes any papery taste and preheats your brewing vessel.</p>

      <p><strong>Step 4: Add Coffee and Bloom</strong><br>
      Add your ground coffee and create a small well in the center. Start your timer and pour twice the weight of water as coffee (50g water for 25g coffee) in a spiral motion. Wait 30 seconds for the bloom.</p>

      <p><strong>Step 5: Continue Pouring</strong><br>
      Pour the remaining water in slow, circular motions, keeping the water level consistent. The total brew time should be 3-4 minutes.</p>

      <h3>Pro Tips from Our Baristas</h3>
      <p>The key to exceptional pour-over coffee lies in consistency and patience. Don't rush the process - let the coffee guide you. Each bean variety may require slight adjustments to timing and technique.</p>

      <p>At Malang Coffee House, we believe that understanding your coffee enhances the experience. Visit us to taste professionally brewed pour-overs and learn more about this beautiful brewing method.</p>
    `,
    author: 'Sari Wijaya',
    date: '2025-01-10',
    category: 'Coffee Education',
    featuredImage: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '5 min read'
  },
  {
    id: '2',
    slug: 'malang-coffee-culture',
    title: 'Discovering Malang\'s Coffee Culture',
    excerpt: 'Explore the rich coffee heritage of Malang and how local traditions influence our brewing methods. From traditional warung kopi to modern specialty coffee shops.',
    content: `
      <h2>The Coffee Heritage of Malang</h2>
      <p>Malang has always been a city where coffee culture thrives. From traditional warung kopi to modern specialty coffee shops, our city has embraced coffee as more than just a beverage - it's a way of life.</p>

      <h3>Traditional Roots</h3>
      <p>The coffee culture in Malang dates back generations. Traditional coffee houses, known as warung kopi, have been gathering places where locals share stories, discuss business, and build community connections over steaming cups of kopi tubruk - traditional Indonesian coffee.</p>

      <h3>Local Coffee Varieties</h3>
      <p>Malang's unique geography and climate create ideal conditions for growing exceptional coffee. The volcanic soil and cool mountain air contribute to the distinctive flavor profiles of our local beans:</p>

      <ul>
        <li><strong>Malang Arabica:</strong> Known for its bright acidity and floral notes</li>
        <li><strong>Highland Robusta:</strong> Bold and full-bodied with chocolate undertones</li>
        <li><strong>Specialty Blends:</strong> Unique combinations that capture the essence of East Java</li>
      </ul>

      <h3>Modern Innovation</h3>
      <p>Today's Malang coffee scene beautifully blends tradition with innovation. Modern cafes like ours honor traditional methods while incorporating contemporary brewing techniques and presentation styles.</p>

      <h3>Community and Connection</h3>
      <p>What makes Malang's coffee culture special is the emphasis on community. Coffee shops serve as informal meeting places where friendships are formed, business deals are made, and ideas are shared.</p>

      <p>At Malang Coffee House, we're proud to be part of this rich tradition while contributing to its evolution. We source our beans from local farmers, supporting the community that has made Malang's coffee culture so vibrant.</p>

      <h3>Experience Malang Coffee Culture</h3>
      <p>Whether you're a longtime resident or visiting our beautiful city, we invite you to experience authentic Malang coffee culture. Come taste the difference that local tradition and modern expertise can make in every cup.</p>
    `,
    author: 'Andi Pratama',
    date: '2025-01-08',
    category: 'Local Malang Stories',
    featuredImage: 'https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '4 min read'
  },
  {
    id: '3',
    slug: 'meet-head-barista',
    title: 'Meet Our Head Barista: Behind the Perfect Cup',
    excerpt: 'Get to know Sari Wijaya, our talented head barista who brings artistry and precision to every cup. Learn about her journey and philosophy on coffee excellence.',
    content: `
      <h2>The Artist Behind Your Morning Coffee</h2>
      <p>Every morning at Malang Coffee House begins with Sari Wijaya's careful inspection of our coffee beans, precise calibration of brewing equipment, and passionate dedication to creating the perfect cup. As our Head Barista, Sari brings both technical expertise and artistic flair to every beverage we serve.</p>

      <h3>A Journey of Passion</h3>
      <p>Sari's love affair with coffee began during her university years in Yogyakarta, where she discovered the intricate world of specialty coffee. "I was amazed by how different brewing methods could completely transform the same beans," she recalls. "It was like painting with flavors."</p>

      <p>After graduating with a degree in hospitality management, Sari pursued professional barista training and competed in several latte art competitions across Indonesia. Her achievements include second place in the East Java Latte Art Championship and certification from the Specialty Coffee Association.</p>

      <h3>Philosophy of Excellence</h3>
      <p>"Every cup tells a story," Sari explains. "From the farmer who grew the beans to the moment it reaches the customer's hands. My job is to honor that journey by extracting the best possible flavors and presenting them beautifully."</p>

      <h3>The Science of Brewing</h3>
      <p>Sari's approach to coffee combines scientific precision with creative intuition. She meticulously tracks brewing variables - water temperature, grind size, extraction time - while also relying on her refined palate to make real-time adjustments.</p>

      <p>"Coffee is incredibly complex," she notes. "There are over 800 flavor compounds in coffee beans. My goal is to highlight the best characteristics of each variety while creating a balanced, enjoyable experience."</p>

      <h3>Latte Art Mastery</h3>
      <p>Beyond technical brewing skills, Sari is renowned for her latte art. Her designs range from classic rosettas and hearts to intricate patterns that showcase her artistic background.</p>

      <p>"Latte art isn't just for show," Sari emphasizes. "When done properly, it indicates perfect milk texture and espresso extraction. It's both beautiful and functional."</p>

      <h3>Training the Next Generation</h3>
      <p>As Head Barista, Sari mentors our entire team, ensuring every staff member understands the importance of consistency and quality. She conducts weekly training sessions and is always available to help team members improve their skills.</p>

      <p>"I want every barista here to feel confident and proud of their work," she says. "When our team is passionate and skilled, our customers can taste the difference."</p>

      <h3>Looking Forward</h3>
      <p>Sari continues to innovate at Malang Coffee House, developing new recipes and refining existing ones. She's currently working on a signature cold brew blend that will highlight the unique characteristics of Malang-grown coffee beans.</p>

      <p>Next time you visit us, take a moment to appreciate the artistry and dedication that goes into your cup. And if you're lucky, you might catch Sari in action, creating coffee magic one cup at a time.</p>
    `,
    author: 'Budi Santoso',
    date: '2025-01-05',
    category: 'Behind the Scenes',
    featuredImage: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800',
    readTime: '6 min read'
  }
];