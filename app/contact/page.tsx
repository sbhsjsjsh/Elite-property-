'use client';

import { MapPin, Home, Menu, X, ArrowRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-teal-50/30 selection:bg-teal-200 selection:text-teal-900 font-sans text-teal-950 flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-10 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-teal-500/30 group-hover:scale-105 transition-transform duration-300">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-extrabold tracking-tight text-teal-950">
                Luxe<span className="text-teal-600">Mumbai</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 bg-white/60 backdrop-blur-md px-6 py-2.5 rounded-full border border-teal-100/50 shadow-sm">
              <Link href="/#buy" className="text-sm font-semibold text-teal-900/80 hover:text-teal-600 transition-colors">Buy Flat</Link>
              <Link href="/#rent" className="text-sm font-semibold text-teal-900/80 hover:text-teal-600 transition-colors">Rent Flat</Link>
              <Link href="/contact" className="text-sm font-semibold text-teal-600 transition-colors">Contact Us</Link>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4 z-10">
              <a href="tel:+919876543210" className="text-sm font-bold text-teal-900 hover:text-teal-600 transition-colors">
                +91 98765 43210
              </a>
              <Link href="/contact" className="bg-teal-950 hover:bg-teal-900 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-teal-900/10 hover:shadow-lg hover:-translate-y-0.5">
                Get Callback
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden z-10 p-2 text-teal-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-teal-100 shadow-xl p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <Link href="/#buy" className="text-base font-semibold text-teal-900/80 hover:text-teal-900 p-2 border-b border-teal-50" onClick={() => setIsMobileMenuOpen(false)}>Buy Flat</Link>
            <Link href="/#rent" className="text-base font-semibold text-teal-900/80 hover:text-teal-900 p-2 border-b border-teal-50" onClick={() => setIsMobileMenuOpen(false)}>Rent Flat</Link>
            <Link href="/contact" className="text-base font-semibold text-teal-600 p-2 border-b border-teal-50" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            <Link href="/contact" className="w-full bg-teal-950 text-white text-center py-3 rounded-xl font-bold mt-2" onClick={() => setIsMobileMenuOpen(false)}>
              Get Callback
            </Link>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight text-teal-950 mb-4">
              Get in <span className="text-teal-600">Touch</span>
            </h1>
            <p className="text-lg text-teal-900/70 font-medium">
              We&apos;re here to help you find your perfect flat in Mumbai. Reach out to our expert team.
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-2xl border border-teal-100/50">
             <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert("Message Sent Successfully!"); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-1.5 ml-1 text-teal-900/80">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-teal-50/50 border border-teal-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all placeholder:text-teal-900/30 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5 ml-1 text-teal-900/80">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-teal-50/50 border border-teal-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all placeholder:text-teal-900/30 font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-1.5 ml-1 text-teal-900/80">Email Address</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-teal-50/50 border border-teal-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all placeholder:text-teal-900/30 font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-1.5 ml-1 text-teal-900/80">I&apos;m interested in</label>
                    <select className="w-full px-4 py-3 rounded-xl bg-teal-50/50 border border-teal-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all font-medium appearance-none cursor-pointer">
                      <option value="buy">Buying a flat</option>
                      <option value="rent">Renting a flat</option>
                      <option value="other">Other inquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1.5 ml-1 text-teal-900/80">Message</label>
                  <textarea 
                    required
                    rows={5}
                    placeholder="Tell us what you are looking for..."
                    className="w-full px-4 py-3 rounded-xl bg-teal-50/50 border border-teal-100 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 outline-none transition-all placeholder:text-teal-900/30 font-medium resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full mt-2 bg-teal-600 hover:bg-teal-500 text-white font-bold py-4 rounded-xl shadow-md shadow-teal-600/20 hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  Send Message <ArrowRight className="w-5 h-5" />
                </button>
             </form>
          </div>

          {/* Direct Contact Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-teal-50">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-teal-950 mb-2">Visit Us</h4>
              <p className="text-sm font-medium text-teal-900/60">
                Level 4, Trade Centre,<br/>Bandra Kurla Complex, Mumbai
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-teal-50">
               <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
               </div>
               <h4 className="font-bold text-teal-950 mb-2">Call Us</h4>
               <p className="text-sm font-medium text-teal-900/60">
                 +91 98765 43210<br/>Mon-Sat, 9AM to 6PM
               </p>
            </div>
             <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-teal-50">
               <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
               </div>
               <h4 className="font-bold text-teal-950 mb-2">Email Us</h4>
               <p className="text-sm font-medium text-teal-900/60">
                 hello@luxemumbai.com<br/>support@luxemumbai.com
               </p>
             </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-950 text-white pt-12 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-teal-800/50 pb-8 mb-8">
            <div className="flex items-center gap-2 opacity-90">
              <div className="w-8 h-8 rounded-lg bg-teal-500 text-white flex items-center justify-center">
                <Home className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-extrabold tracking-tight">
                Luxe<span className="text-teal-400">Mumbai</span>
              </span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-teal-100/60 font-semibold">
               <Link href="/#buy" className="hover:text-white transition-colors">Buy Flat</Link>
               <Link href="/#rent" className="hover:text-white transition-colors">Rent Flat</Link>
               <Link href="/contact" className="text-white transition-colors">Contact Us</Link>
               <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>

            <div className="flex items-center gap-4 text-teal-100/40">
               <a href="#" className="hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
               <a href="#" className="hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
               <a href="#" className="hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
               <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div className="text-center text-teal-100/40 text-sm font-medium">
            <p>&copy; {new Date().getFullYear()} LuxeMumbai Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
