'use client';

import { useState } from 'react';
import ContactForm from '@/components/shared/ContactForm';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ContactPage() {
  const [formType, setFormType] = useState<'contact' | 'booking'>('contact');

  const handleFormSuccess = () => {
    toast.success('Message sent successfully! I\'ll get back to you within 24 hours.');
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'hello@kvnghotit.com',
      action: 'mailto:hello@kvnghotit.com',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Location',
      value: 'Based in New York, NY\nAvailable Worldwide',
      action: null,
    },
  ];

  const socialLinks = [
    { icon: <Instagram />, href: 'https://instagram.com/kvngshotit', label: 'Instagram' },
    { icon: <Facebook />, href: 'https://facebook.com/kvngshotit', label: 'Facebook' },
    { icon: <Youtube />, href: 'https://youtube.com/kvngshotit', label: 'YouTube' },
  ];

  return (
    <div className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Let's Create Magic
          </h1>
          <p className="text-xl text-silver-gray/80">
            Ready to capture your story? Get in touch to discuss your vision, 
            ask questions, or book your session.
          </p>
        </div>

        {/* Form Type Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg p-1 glass-effect">
            <button
              onClick={() => setFormType('contact')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                formType === 'contact'
                  ? 'bg-accent-gold text-cinematic-black'
                  : 'text-silver-gray hover:text-white'
              }`}
            >
              General Inquiry
            </button>
            <button
              onClick={() => setFormType('booking')}
              className={`px-8 py-3 rounded-lg font-medium transition-all ${
                formType === 'booking'
                  ? 'bg-accent-gold text-cinematic-black'
                  : 'text-silver-gray hover:text-white'
              }`}
            >
              Book a Session
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-effect p-8 rounded-2xl">
              <h2 className="font-playfair text-3xl font-bold mb-6">
                {formType === 'booking' ? 'Book Your Session' : 'Send a Message'}
              </h2>
              <ContactForm type={formType} onSuccess={handleFormSuccess} />
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-effect p-6 rounded-xl hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-accent-gold">{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-silver-gray/80 hover:text-accent-gold transition-colors whitespace-pre-line"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-silver-gray/80 whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Response Time */}
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2">Response Time</h3>
              <p className="text-silver-gray/80">
                I typically respond within <span className="text-accent-gold font-semibold">24 hours</span> 
                during weekdays. For urgent inquiries, please call or text.
              </p>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-charcoal flex items-center justify-center text-silver-gray hover:text-accent-gold hover:bg-accent-gold/10 transition-all hover-lift"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}