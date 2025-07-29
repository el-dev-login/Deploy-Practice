import React, { useState } from 'react';
import { Camera, Mail, Phone, MapPin, Instagram, Twitter, Facebook, Menu, X } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

interface PortfolioImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const portfolioImages: PortfolioImage[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=600&fit=crop',
    alt: 'A\'ja Wilson signature basketball shoes',
    category: 'landscape'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop',
    alt: 'Angel Reese Chicago Sky jersey',
    category: 'portrait'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=600&fit=crop',
    alt: 'Kelsey Plum Las Vegas Aces shoes',
    category: 'landscape'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=800&h=600&fit=crop',
    alt: 'Britney Griner Phoenix Mercury jersey',
    category: 'wedding'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=800&h=600&fit=crop',
    alt: 'Rhyne Howard Atlanta Dream basketball shoes',
    category: 'landscape'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1621951653865-33ea39d0052d?w=800&h=600&fit=crop',
    alt: 'Natasha Cloud Washington Mystics t-shirt',
    category: 'portrait'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    alt: 'Allisha Gray Atlanta Dream basketball shoes',
    category: 'landscape'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&h=600&fit=crop',
    alt: 'Sydney Colson Las Vegas Aces jersey',
    category: 'wedding'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=600&fit=crop',
    alt: 'Paige Bueckers UConn team t-shirt',
    category: 'portrait'
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const categories = ['all', 'landscape', 'portrait', 'wedding'];
  
  const filteredImages = selectedCategory === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields.');
      return;
    }
    
    // Here you would typically send the form data to a backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8" />
              <span className="text-xl">Dijonai Photography</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="hover:text-gray-600 transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')} 
                className="hover:text-gray-600 transition-colors"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="hover:text-gray-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="hover:text-gray-600 transition-colors"
              >
                Contact
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
              <div className="px-4 py-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="block w-full text-left px-3 py-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl mb-6">
                Capturing Life's Beautiful Moments
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional photographer specializing in landscapes, portraits, and wedding photography. 
                Based in San Francisco, available worldwide.
              </p>
              <div className="flex space-x-4">
                <Button size="lg" onClick={() => scrollToSection('portfolio')}>
                  View Portfolio
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1554048612-b6a482b3d8b2?w=600&h=800&fit=crop"
                alt="Photographer at work"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of my favorite captures from recent projects and adventures.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2" role="tablist" aria-label="Portfolio categories">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                  role="tab"
                  aria-selected={selectedCategory === category}
                  aria-label={`Show ${category} photos`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="tabpanel"
            aria-label={`${selectedCategory} portfolio images`}
          >
            {filteredImages.map((image) => (
              <Card 
                key={image.id} 
                className="overflow-hidden group cursor-pointer focus-within:ring-2 focus-within:ring-ring focus:outline-none focus:ring-2 focus:ring-ring"
                tabIndex={0}
                role="button"
                aria-label={`View ${image.alt} - ${image.category} photo`}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white text-lg capitalize">{image.category}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
                alt="Dijonai - Photographer"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6">About Dijonai</h2>
              <p className="text-lg text-gray-600 mb-6">
                With over 8 years of experience behind the lens, I've had the privilege of capturing 
                countless precious moments for families, couples, and businesses across the globe.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                My passion lies in finding the extraordinary in the ordinary, whether it's the golden 
                hour light hitting a mountain peak or the quiet intimacy of a wedding ceremony.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Based in San Francisco, I'm available for projects worldwide and always excited 
                to explore new locations and tell new stories through photography.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg mb-2">Specialties</h3>
                  <ul className="text-gray-600">
                    <li>• Wedding Photography</li>
                    <li>• Portrait Sessions</li>
                    <li>• Landscape Photography</li>
                    <li>• Commercial Work</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg mb-2">Equipment</h3>
                  <ul className="text-gray-600">
                    <li>• Canon EOS R5</li>
                    <li>• Sony A7R IV</li>
                    <li>• Professional Lenses</li>
                    <li>• Drone Photography</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to capture your special moments? I'd love to hear about your project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl mb-6">Let's Connect</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                  <span>dijonai@dijonaiphoto.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open('https://instagram.com/dijonai', '_blank')}
                  aria-label="Visit Instagram profile"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open('https://twitter.com/dijonai', '_blank')}
                  aria-label="Visit Twitter profile"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.open('https://facebook.com/dijonai', '_blank')}
                  aria-label="Visit Facebook profile"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell me about your project..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Camera className="h-6 w-6" />
              <span className="text-lg">Dijonai Photography</span>
            </div>
            <div className="text-gray-400">
              <p>&copy; 2025 Dijonai Photography. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}