import React, { useState } from 'react';
import { Search, Menu, X, User, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigationItems = [
    'Home',
    'Kitchen & Home',
    'Tech & Gadgets',
    'Fashion & Travel',
    'Health & Beauty',
    'Baby & Family',
    'Pets & Outdoors',
    'Auto & DIY',
    'Office & Stationery'
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-gray-50 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Free shipping on orders over $50</span>
            <div className="flex items-center space-x-4">
              <button className="hover:text-primary-600 transition-colors">
                Sign In
              </button>
              <span>|</span>
              <button className="hover:text-primary-600 transition-colors">
                Create Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Luminvera</h1>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearchSubmit} className="w-full">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Search for products..."
                  className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </a>
            <div className="flex items-center space-x-6">
              <button className="text-gray-700 hover:text-primary-600 transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="text-gray-700 hover:text-primary-600 transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden py-3 border-t border-gray-200">
          <form onSubmit={handleSearchSubmit}>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search for products..."
                className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-primary-600 transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>

        {/* Category navigation */}
        <div className="border-t border-gray-200 py-3">
          <div className="flex overflow-x-auto space-x-6 lg:space-x-8 scrollbar-hide">
            {navigationItems.map((item) => (
              <button
                key={item}
                className="whitespace-nowrap text-sm text-gray-700 hover:text-primary-600 transition-colors font-medium py-1"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item}
                className="block w-full text-left text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
              >
                {item}
              </button>
            ))}
            <div className="border-t pt-3 mt-4">
              <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors py-2">
                <User className="h-5 w-5" />
                <span>Sign In</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors py-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Cart (3)</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;