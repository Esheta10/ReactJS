import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();

  const categories = [
    { id: 1, name: "Electronics", icon: "📱", color: "from-blue-500 to-blue-600" },
    { id: 2, name: "Jewelry", icon: "💎", color: "from-purple-500 to-purple-600" },
    { id: 3, name: "Men's Clothing", icon: "👔", color: "from-slate-500 to-slate-600" },
    { id: 4, name: "Women's Clothing", icon: "👗", color: "from-pink-500 to-pink-600" }
  ];

  const features = [
    { id: 1, title: "Free Shipping", description: "On orders over $50", icon: "🚚" },
    { id: 2, title: "Easy Returns", description: "30-day money back guarantee", icon: "↩️" },
    { id: 3, title: "Secure Payment", description: "100% secure transactions", icon: "🔒" },
    { id: 4, title: "24/7 Support", description: "Dedicated customer service", icon: "📞" }
  ];

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Welcome to ShopHub
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Discover thousands of amazing products at unbeatable prices. Shop electronics, jewelry, fashion, and more!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/products')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Shop Now 🛍️
            </button>
            
            <button 
              className="px-8 py-4 border-2 border-purple-500 text-purple-400 text-lg font-bold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
            >
              Learn More →
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Shop by Category
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="group relative overflow-hidden rounded-xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-48">
                  <div className="text-7xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-center">{category.name}</h3>
                  <p className="text-sm mt-2 opacity-90">Explore now →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Why Shop With Us?
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div 
                key={feature.id}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Featured Products
            </span>
          </h2>

          <div className="text-center mb-12">
            <p className="text-gray-400 text-lg mb-8">
              Explore our handpicked collection of the best products available
            </p>
            <button 
              onClick={() => navigate('/products')}
              className="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 inline-block transform hover:scale-105"
            >
              View All Products →
            </button>
          </div>

          {/* Product showcase placeholder */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-12 text-center border border-gray-700 hover:border-purple-500/50 transition-colors duration-300">
            <div className="text-6xl mb-4">🎁</div>
            <h3 className="text-2xl font-bold mb-4">Explore Our Collection</h3>
            <p className="text-gray-400 mb-6">Browse thousands of products with amazing deals and discounts</p>
            <button 
              onClick={() => navigate('/products')}
              className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Subscribe to Our Newsletter
            </span>
          </h2>
          
          <p className="text-gray-400 mb-8 text-lg">
            Get exclusive deals, new arrivals, and special offers delivered to your inbox!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">10K+</div>
              <p className="text-gray-400">Products</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50K+</div>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
              <p className="text-gray-400">Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-t border-purple-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Start Shopping?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers and find exactly what you're looking for
          </p>
          <button 
            onClick={() => navigate('/products')}
            className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Explore Products Now 🚀
          </button>
        </div>
      </section>

    </div>
  )
}

export default Home
