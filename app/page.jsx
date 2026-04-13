import React from 'react';
import ContactForm from '../components/ContactForm';
import { Pool, Shield, Zap, Activity, Waves, Settings } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sekcja Hero */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6">BlueCare Control</h1>
          <p className="text-xl mb-8 opacity-90">Premium Pool Management System</p>
          <a href="#contact" className="bg-white text-blue-700 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors shadow-lg">
            Zacznij teraz
          </a>
        </div>
      </header>

      {/* Główne Funkcje */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-4">Pełne Bezpieczeństwo</h3>
          <p className="text-slate-600 leading-relaxed">Inteligentny monitoring parametrów wody i systemów filtracyjnych w czasie rzeczywistym.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Activity className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-4">Analityka 24/7</h3>
          <p className="text-slate-600 leading-relaxed">Zaawansowane raporty i przewidywanie zużycia chemii dla Twojego basenu.</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="text-blue-600" size={32} />
          </div>
          <h3 className="text-xl font-bold mb-4">Automatyzacja</h3>
          <p className="text-slate-600 leading-relaxed">Zdalne sterowanie oświetleniem, temperaturą i systemami czyszczącymi.</p>
        </div>
      </section>

      {/* Formularz Kontaktowy */}
      <section id="contact" className="py-20 bg-slate-100 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Skonfiguruj BlueCare u siebie</h2>
            <p className="text-slate-600">Zostaw nam swój e-mail, a nasz doradca skontaktuje się z Tobą.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Stopka */}
      <footer className="bg-slate-900 text-white py-12 px-4 border-t border-slate-800 text-center text-sm opacity-60">
        <p>© 2026 BlueCare Control. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
