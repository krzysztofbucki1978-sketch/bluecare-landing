'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import axios from 'axios';

const translations = {
  pl: {
    title: 'Skontaktuj się z nami',
    description: 'Nasz zespół wspiera hotele i obiekty sportowe w kilku krajach. Dostępni jesteśmy w języku hiszpańskim, angielskim i polskim.',
    form: {
      name: 'Imię i nazwisko',
      email: 'Adres e-mail',
      phone: 'Numer telefonu',
      company: 'Nazwa hotelu/obiektu',
      message: 'Wiadomość',
      submit: 'Wyślij wiadomość',
      sending: 'Wysyłanie...',
      successTitle: 'Dziękujemy!',
      successMessage: 'Twoja wiadomość została wysłana. Skontaktujemy się z Tobą w ciągu 24 godzin.',
      errorTitle: 'Ups! Coś poszło nie tak',
      errorMessage: 'Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.',
    },
    contactInfo: {
      phone: 'Telefon',
      support: 'Wsparcie',
      supportHours: 'Pon-Pt 8:00-18:00 (UTC+1)',
    },
  },
  en: {
    title: 'Get in touch',
    description: 'Our team supports hotels and sports facilities across several countries. Available in Spanish, English and Polish.',
    form: {
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      company: 'Hotel/Facility Name',
      message: 'Message',
      submit: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Thank you!',
      successMessage: 'Your message has been sent. We will contact you within 24 hours.',
      errorTitle: 'Oops! Something went wrong',
      errorMessage: 'Please try again or contact us directly.',
    },
    contactInfo: {
      phone: 'Phone',
      support: 'Support',
      supportHours: 'Mon-Fri 8:00-18:00 (UTC+1)',
    },
  },
  es: {
    title: 'Ponte en contacto',
    description: 'Nuestro equipo respalda hoteles e instalaciones deportivas en varios países. Disponibles en español, inglés y polaco.',
    form: {
      name: 'Nombre completo',
      email: 'Correo electrónico',
      phone: 'Número de teléfono',
      company: 'Nombre del hotel/instalación',
      message: 'Mensaje',
      submit: 'Enviar mensaje',
      sending: 'Enviando...',
      successTitle: '¡Gracias!',
      successMessage: 'Tu mensaje ha sido enviado. Nos pondremos en contacto contigo dentro de 24 horas.',
      errorTitle: '¡Ups! Algo salió mal',
      errorMessage: 'Intenta de nuevo o contáctanos directamente.',
    },
    contactInfo: {
      phone: 'Teléfono',
      support: 'Soporte',
      supportHours: 'Lun-Vie 8:00-18:00 (UTC+1)',
    },
  },
};

export default function ContactForm({ language = 'pl' }) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Wymagane' || 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Wymagane' || 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Nieprawidłowy e-mail' || 'Invalid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Wymagane' || 'Required';
    return Object.keys(newErrors).length === 0 ? true : (setErrors(newErrors), false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus('sending');

    try {
      // Wysłanie do Formspree
      const response = await axios.post('https://formspree.io/f/xyzabc123', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || 'Nie podano',
        company: formData.company || 'Nie podano',
        message: formData.message,
        _subject: `Nowa wiadomość z BlueCare Control Landing Page - ${formData.name}`,
      });

      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Błąd wysyłania:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              {t.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t.description}
            </p>

            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href="mailto:bluecare.control.app@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-bold text-white">bluecare.control.app@gmail.com</p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+34633363769"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl hover:border-cyan-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t.contactInfo.phone}</p>
                  <p className="font-bold text-white">+34 633 363 769</p>
                </div>
              </motion.a>

              {/* Support Hours */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">{t.contactInfo.support}</p>
                  <p className="font-bold text-white">{t.contactInfo.supportHours}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all ${
                      errors.name ? 'border-red-500' : 'border-cyan-500/30'
                    }`}
                    placeholder="Krzysztof Bucki"
                    disabled={status === 'sending'}
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all ${
                      errors.email ? 'border-red-500' : 'border-cyan-500/30'
                    }`}
                    placeholder="your@email.com"
                    disabled={status === 'sending'}
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                    placeholder="+34 633 363 769"
                    disabled={status === 'sending'}
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.form.company}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all"
                    placeholder="Hotel Flamingo Suite"
                    disabled={status === 'sending'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-3 bg-slate-900/50 border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-all resize-none ${
                      errors.message ? 'border-red-500' : 'border-cyan-500/30'
                    }`}
                    placeholder="Chciałbym wiedzieć więcej o BlueCare Control..."
                    disabled={status === 'sending'}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
                  whileTap={{ scale: status === 'sending' ? 1 : 0.95 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full"
                      />
                      {t.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      {t.form.submit}
                    </>
                  )}
                </motion.button>
              </form>

              {/* Status Messages */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-green-300">{t.form.successTitle}</p>
                      <p className="text-sm text-green-200">{t.form.successMessage}</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-red-300">{t.form.errorTitle}</p>
                      <p className="text-sm text-red-200">{t.form.errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
