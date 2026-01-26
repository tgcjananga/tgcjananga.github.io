// src/components/Contact.js
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 group">
            <Mail className="inline mr-3 text-cyan-400 group-hover:rotate-12 transition-transform" size={36} />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            I'm currently looking for opportunities in Software Engineering, ML, and Cloud Computing. 
            Let's connect and build something amazing together!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
          >
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 group-hover:scale-110 group-hover:rotate-12 transition-transform">
              <Mail className="text-cyan-400" size={28} />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm text-gray-400 mb-1">Email Address</div>
              <div className="font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors break-all">
                {personalInfo.email}
              </div>
            </div>
            <Send size={20} className="text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            className="group flex items-center gap-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
          >
            <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 group-hover:scale-110 group-hover:rotate-12 transition-transform">
              <Phone className="text-cyan-400" size={28} />
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm text-gray-400 mb-1">Phone Number</div>
              <div className="font-semibold text-gray-100 group-hover:text-cyan-400 transition-colors">
                {personalInfo.phone}
              </div>
            </div>
            <Send size={20} className="text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          </a>
        </div>

        {/* Location Info */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-full border border-gray-700">
            <MapPin size={18} className="text-cyan-400" />
            <span className="text-gray-300">Based in Sri Lanka</span>
          </div>
        </div>

        {/* Quick Message Section */}
        <div className="mt-12 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/30">
          <h3 className="text-2xl font-bold text-center mb-4 text-cyan-400">
            Ready to Collaborate?
          </h3>
          <p className="text-center text-gray-400 mb-6">
            Whether you have a project in mind, want to discuss opportunities, or just want to say hi, 
            I'd love to hear from you!
          </p>
          <div className="flex justify-center">
            <a
              href={`mailto:${personalInfo.email}?subject=Let's Connect!`}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-lg font-semibold transition-all shadow-lg hover:shadow-cyan-500/50 hover:-translate-y-1"
            >
              Send Message
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;