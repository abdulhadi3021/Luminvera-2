import { useState, useMemo } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CategoryGrid from './components/CategoryGrid';
import DealsSection from './components/DealsSection';
import SearchResults from './components/SearchResults';
import Footer from './components/Footer';
import { products } from './data/products';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.subcategory.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onSearch={handleSearch} />
      
      {searchQuery ? (
        <SearchResults results={searchResults} query={searchQuery} />
      ) : (
        <>
          <HeroSection />
          <CategoryGrid />
          <DealsSection />
        </>
      )}
      
      <Footer />
    </div>
  );
}

export default App;