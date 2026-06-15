'use client';

import { MapPin, Home, Menu, X, ArrowRight, ChevronRight, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: 'Sea View 4 BHK Apartment',
    location: 'Worli, South Mumbai',
    price: 'Price on Request',
    beds: 4,
    baths: 4,
    sqft: '2,200',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1e52b154cb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.9,
  },
  {
    id: 2,
    title: 'Premium 3 BHK Flat',
    location: 'Bandra West, Mumbai',
    price: 'Contact for Price',
    beds: 3,
    baths: 3,
    sqft: '1,500',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687931-ceeb66d11f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.8,
  },
  {
    id: 3,
    title: 'Luxury High-Rise Penthouse',
    location: 'Lower Parel, Mumbai',
    price: 'Available on Request',
    beds: 4,
    baths: 5,
    sqft: '3,100',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 5.0,
  },
  {
    id: 4,
    title: 'Spacious Lakeside 2 BHK',
    location: 'Powai, Mumbai',
    price: 'Call for Details',
    beds: 2,
    baths: 2,
    sqft: '1,100',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1513694203252-719d28061dc0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80'
    ],
    rating: 4.7,
  }
];

function FlatImageCarousel({ images, title, rating }: { images: string[], title: string, rating: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="relative aspect-[4/3] overflow-hidden m-2 rounded-[1.5rem] group/inner">
      <div 
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="w-full h-full shrink-0 relative">
             <Image
              src={img}
              alt={`${title} - Image ${idx + 1}`}
              fill
              loading={idx === 0 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 85vw, 350px"
              className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      
      {/* Navigation Arrows */}
      <button 
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm text-teal-900 flex items-center justify-center opacity-100 sm:opacity-0 group-hover/inner:opacity-100 transition-all hover:bg-white z-20 hover:scale-110 shadow-sm"
      >
        <ChevronRight className="w-5 h-5 rotate-180" />
      </button>
      <button 
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm text-teal-900 flex items-center justify-center opacity-100 sm:opacity-0 group-hover/inner:opacity-100 transition-all hover:bg-white z-20 hover:scale-110 shadow-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Badges */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-900 shadow-sm z-10 pointer-events-none">
        Featured
      </div>
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full font-display font-bold text-teal-950 shadow-sm flex items-center gap-1 text-sm z-10 pointer-events-none">
        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
        {rating}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
        {images.map((_, idx) => (
          <button 
            key={idx}
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setCurrentIndex(idx); }}
            className={`w-1.5 h-1.5 rounded-full transition-all ${currentIndex === idx ? 'bg-white w-3.5' : 'bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -carouselRef.current.offsetWidth : carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#d1f5e8] via-white to-white text-gray-900 selection:bg-[#a7e8d0] selection:text-teal-900 overflow-x-hidden">
      {/* Navigation Header */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        {/* Glowing Accent Line */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden pointer-events-none opacity-100"
        >
          {/* Base gradient line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-500/40 to-transparent"></div>
          
          {/* Moving glowing beam */}
          <div className="absolute -top-[2px] -bottom-[2px] w-[40%] bg-gradient-to-r from-transparent via-teal-400 via-50% to-transparent blur-[3px] animate-glowing-line"></div>
          <div className="absolute inset-0 w-[40%] bg-gradient-to-r from-transparent via-white via-50% to-transparent animate-glowing-line"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-sm">
                <Home className="w-6 h-6" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-teal-950">
                Elite Property
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 bg-white/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-teal-100/50 shadow-sm">
              {['Buy Flat', 'Rent Flat'].map((item) => (
                <a
                  key={item}
                  href={`#${item.split(' ')[0].toLowerCase()}`}
                  className="text-sm font-semibold text-teal-900/80 hover:text-teal-600 transition-colors"
                >
                  {item}
                </a>
              ))}
              <Link href="/contact" className="text-sm font-semibold text-teal-900/80 hover:text-teal-600 transition-colors">Contact Us</Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                href="/contact"
                className="text-sm font-bold bg-teal-950 text-white px-6 py-2.5 rounded-full hover:bg-teal-800 transition-all shadow-sm active:scale-95"
              >
                Get in Touch
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-teal-950 bg-white/50 rounded-full backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-teal-100 shadow-xl p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            {['Buy Flat', 'Rent Flat'].map((item) => (
              <a
                key={item}
                href={`#${item.split(' ')[0].toLowerCase()}`}
                className="text-base font-semibold text-teal-900/80 hover:text-teal-900 p-2 border-b border-teal-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2">
              <Link 
                href="/contact"
                className="text-base font-semibold text-teal-900/80 hover:text-teal-900 p-2 border-b border-teal-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-bold bg-teal-950 text-white p-3 rounded-xl text-center shadow-md active:scale-95 transition-transform"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-32 pb-16 lg:pt-40 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-8 overflow-hidden animate-in fade-in duration-500">
        <div className="flex-[1.2] w-full flex flex-col items-start gap-7 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/60 text-teal-800 text-sm font-semibold border border-teal-200/60 shadow-sm backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-teal-500 animate-pulse"></span>
            Premium flats in Mumbai
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-extrabold tracking-tight text-teal-950 leading-[1.05] relative pb-6 sm:pb-8">
            Find your <br className="hidden sm:block" />
            dream flat with <span className="text-teal-600 relative whitespace-nowrap">
              complete ease
              <svg className="absolute w-full h-[0.3em] -bottom-[0.05em] left-0 text-teal-300 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>.
            
            {/* Glowing Accent Line under Heading */}
            <div className="absolute bottom-0 left-0 w-[85%] max-w-lg h-[3px] overflow-hidden rounded-full pointer-events-none opacity-80">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/30 to-transparent"></div>
              <div className="absolute -top-[2px] -bottom-[2px] w-[50%] bg-gradient-to-r from-transparent via-teal-400 via-50% to-transparent blur-[3px] animate-glowing-line"></div>
              <div className="absolute inset-0 w-[50%] bg-gradient-to-r from-transparent via-white via-50% to-transparent animate-glowing-line"></div>
            </div>
          </h1>

          <p className="text-lg sm:text-xl text-teal-900/70 leading-relaxed max-w-xl font-medium">
            We are Mumbai&apos;s premier experts in buying and renting premium flats. Whether you&apos;re searching for your permanent dream home or looking for a seamless rental experience, we provide a transparent and entirely personalized journey across the city.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full mt-2">
            <a 
              href="#contact"
              className="w-full sm:w-auto bg-teal-600 text-white px-8 py-3.5 rounded-full hover:bg-teal-500 transition-all shadow-md hover:shadow-lg font-bold text-center"
            >
              Consult an Agent
            </a>
            <a 
              href="#listings"
              className="w-full sm:w-auto bg-white/80 backdrop-blur-sm text-teal-950 px-8 py-3.5 rounded-full hover:bg-white transition-all shadow-sm border border-teal-100 font-bold text-center"
            >
              View Listings
            </a>
          </div>

          <div className="flex items-center gap-4 mt-2 opacity-80">
            <div className="flex items-center gap-2 text-sm text-teal-900">
               <div className="flex -space-x-2">
                 {[1, 2, 3].map((i) => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-[#d1f5e8] overflow-hidden bg-white shadow-sm">
                      <Image src={`https://picsum.photos/seed/face${i}/100/100`} alt="User" width={32} height={32} />
                   </div>
                 ))}
               </div>
               <span><strong className="font-bold text-teal-950">800+</strong> happy families</span>
            </div>
          </div>
        </div>

        {/* Hero Illustration/Image */}
        <div className="flex-1 w-full relative max-w-lg lg:max-w-none ml-auto animate-in slide-in-from-bottom-8 fade-in duration-700 delay-100">
           <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/15 ring-4 ring-white/80">
             <Image
               src="https://picsum.photos/seed/mumbai-luxury-apartment/1200/1600"
               alt="Premium Mumbai High-rise Flat"
               fill
               priority
               sizes="(max-width: 1024px) 100vw, 50vw"
               className="object-cover"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 via-transparent to-transparent"></div>
             
             {/* Floating Badge */}
             <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 w-[240px]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                    <Star className="fill-teal-500 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-teal-950 text-sm">Top Rated Agency</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                       {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                    </div>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Featured Properties Section (Carousel) */}
      <section id="listings" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-sm font-extrabold tracking-widest text-teal-600 uppercase mb-3 flex items-center gap-2">
                 <span className="w-8 h-[3px] bg-teal-600 rounded-full"></span>
                 Mumbai&apos;s Best
              </h2>
              <h3 className="text-3xl sm:text-4xl font-display font-extrabold text-teal-950 tracking-tight">
                Premium Mumbai Flats
              </h3>
            </div>
            <div className="flex items-center gap-2 hidden sm:flex">
               <button 
                 onClick={() => scrollCarousel('left')}
                 className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center hover:bg-teal-100 transition-colors"
               >
                 <ChevronRight className="w-5 h-5 rotate-180" />
               </button>
               <button 
                 onClick={() => scrollCarousel('right')}
                 className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center hover:bg-teal-100 transition-colors"
               >
                 <ChevronRight className="w-5 h-5" />
               </button>
            </div>
          </div>

          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar scroll-smooth"
          >
            {FEATURED_PROPERTIES.map((property) => (
              <div
                key={property.id}
                className="w-[85vw] sm:w-[350px] shrink-0 snap-start group flex flex-col bg-white rounded-[2rem] border border-teal-100/50 shadow-sm hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <FlatImageCarousel images={property.images} title={property.title} rating={property.rating} />

                {/* Content Container */}
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="text-xl font-display font-bold text-teal-950 mb-2 truncate group-hover:text-teal-600 transition-colors">
                    {property.title}
                  </h4>
                  <div className="flex items-center gap-2 text-teal-900/60 text-sm mb-4 font-semibold">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-teal-50">
                     <span className="text-lg sm:text-xl font-display font-extrabold text-teal-950">
                        {property.price}
                     </span>
                     <button className="w-10 h-10 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center transform group-hover:bg-teal-600 group-hover:text-white transition-all shadow-sm shrink-0">
                        <ChevronRight className="w-5 h-5" />
                     </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer Section (Combined) */}
      <section id="contact" className="bg-teal-950 text-white relative pt-24 pb-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center border-b border-teal-800/50 pb-20 mb-12">
            {/* Contact Info text */}
            <div className="flex flex-col gap-6 max-w-lg">
              <h2 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">
                Ready to find your <span className="text-teal-400">new flat?</span>
              </h2>
              <p className="text-teal-100/70 text-lg font-medium leading-relaxed">
                Leave your details below and our Mumbai property experts will get back to you within 24 hours.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mt-4">
                 <div className="flex flex-col gap-2">
                   <span className="text-4xl font-display font-bold text-teal-50">₹1000Cr+</span>
                   <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">Properties Sold</span>
                 </div>
                 <div className="flex flex-col gap-2">
                   <span className="text-4xl font-display font-bold text-teal-50">15+</span>
                   <span className="text-teal-400 font-semibold text-sm uppercase tracking-wider">Years Exp</span>
                 </div>
              </div>
            </div>

            {/* Lead Capture Form */}
            <div className="bg-white rounded-[2rem] p-6 sm:p-8 shadow-2xl relative w-full lg:max-w-md lg:ml-auto text-teal-950">
               <h3 className="text-2xl font-display font-extrabold mb-6">Get in Touch</h3>
               <form className="flex flex-col gap-4 text-left" onSubmit={(e) => { e.preventDefault(); alert("Request Sent!"); }}>
                  <div>
                    <label className="block text-sm font-bold mb-1.5 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-teal-50/50 border border-teal-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all placeholder:text-teal-900/30 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5 ml-1">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-teal-50/50 border border-teal-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all placeholder:text-teal-900/30 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-teal-50/50 border border-teal-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all placeholder:text-teal-900/30 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5 ml-1">I&apos;m interested in</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-teal-50/50 border border-teal-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all font-medium appearance-none cursor-pointer">
                      <option value="buy">Buying a flat</option>
                      <option value="rent">Renting a flat</option>
                      <option value="other">Other inquiries</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5 ml-1">Message</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Tell us what you are looking for..."
                      className="w-full px-4 py-3 rounded-xl bg-teal-50/50 border border-teal-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all placeholder:text-teal-900/30 font-medium resize-none"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full mt-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-3.5 rounded-xl shadow-md shadow-teal-600/20 hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    Send Request
                  </button>
                </form>
            </div>
          </div>

          {/* Low Footer Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 opacity-90">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-white flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl text-white">
                Elite Property
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-teal-100/60 font-semibold">
               <Link href="/#buy" className="hover:text-white transition-colors">Buy Flat</Link>
               <Link href="/#rent" className="hover:text-white transition-colors">Rent Flat</Link>
               <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
               <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>

            <p className="text-sm text-teal-100/40 font-medium text-center md:text-right">
              &copy; {new Date().getFullYear()} Elite Property. All rights reserved.
            </p>
          </div>
        </div>
      </section>
      
      {/* Global & Utility Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes glowingLine {
          0% { transform: translateX(-150%); }
          100% { transform: translateX(300%); }
        }
        .animate-glowing-line {
          animation: glowingLine 3s ease-in-out infinite;
        }
      `}} />
    </div>
  );
}
