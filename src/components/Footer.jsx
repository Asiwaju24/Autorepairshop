// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram,
  Wrench,
  Shield,
  Star,
  Car
} from 'lucide-react';
import Logo from "../assets/logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
                <img src={Logo} className="w-8 h-5" />
              <h3 className="text-2xl font-bold">AR Auto Repair</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Professional auto repair services with over 5 years of experience. 
              We provide quality automotive care with honest pricing and exceptional customer service.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b-2 border-blue-600 pb-2">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-blue-400 transition">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition">
                About Us
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-blue-400 transition">
                Services
              </Link>
              <Link to="/booking" className="block text-gray-300 hover:text-blue-400 transition">
                Book Appointment
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-blue-400 transition">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b-2 border-blue-600 pb-2">Our Services</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>Brake Repair</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>Engine Diagnostics</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>Oil Change</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>Tire Replacement</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Wrench className="w-4 h-4 text-blue-400" />
                <span>AC Service</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b-2 border-blue-600 pb-2">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">+2349066964407</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text:sm text-wrap">arautomotive<br/>technologycompany.gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat: 9:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AR Auto Repair. All rights reserved.
            </p>
            <p text-gray-500 text-sm>Designed By Wizard Technology</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}