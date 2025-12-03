// src/components/shared/ContactForm.tsx
'use client';

import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  serviceType?: string;
  eventDate?: string;
  [key: string]: string | undefined; // Add index signature
}

interface ContactFormProps {
  type?: 'contact' | 'booking';
  onSuccess?: () => void;
}

const ContactForm = ({ type = 'contact', onSuccess }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    serviceType: '',
    eventDate: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your EmailJS credentials
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_default';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_default';
      const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || 'user_default';
      
      // Create a new object with index signature for EmailJS
      const emailData: Record<string, unknown> = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        service_type: formData.serviceType || 'General Inquiry',
        event_date: formData.eventDate || 'Not specified',
        to_name: 'KVNGSHOTIT',
        reply_to: formData.email,
      };
      
      await emailjs.send(serviceId, templateId, emailData, userId);
      setSubmitStatus('success');
      setFormData({ 
        name: '', 
        email: '', 
        message: '', 
        serviceType: '', 
        eventDate: '' 
      });
      onSuccess?.();
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-charcoal border border-silver-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-charcoal border border-silver-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all"
            placeholder="your@email.com"
          />
        </div>
      </div>

      {type === 'booking' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
                Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-charcoal border border-silver-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
              >
                <option value="">Select a service</option>
                <option value="wedding">Wedding Photography</option>
                <option value="portrait">Portrait Session</option>
                <option value="event">Event Coverage</option>
                <option value="commercial">Commercial/Branding</option>
              </select>
            </div>

            <div>
              <label htmlFor="eventDate" className="block text-sm font-medium mb-2">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-charcoal border border-silver-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/50"
              />
            </div>
          </div>
        </>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-charcoal border border-silver-gray/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-gold/50 transition-all resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 bg-accent-gold text-cinematic-black font-semibold rounded-lg hover:bg-accent-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : type === 'booking' ? 'Book Consultation' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-900/20 border border-green-800 rounded-lg">
          <p className="text-green-400 text-center">
            ✅ Thank you! Your message has been sent successfully.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-900/20 border border-red-800 rounded-lg">
          <p className="text-red-400 text-center">
            ❌ Something went wrong. Please try again or contact me directly.
          </p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;