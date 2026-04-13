import React from 'react';
import ContactForm from '../components/ContactForm';

export default function LandingPage() {
  // Tutaj wklejam skróconą strukturę, którą Claude przygotował dla BlueCare Control
  return (
    <div className="min-h-screen bg-slate-50">
      <main>
        {/* Sekcja Hero */}
        <section className="py-20 px-4 text-center bg-gradient-to-b from-blue-600 to-blue-800 text-white">
          <h1 className="text-5xl font-bold mb-6">TechCare Control</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kompleksowe zarządzanie utrzymaniem ruchu i infrastrukturą w standardzie Premium.
          </p>
        </section>

        {/* Sekcja Funkcji - zgodnie z Twoimi pomysłami */}
        <section className="py-16 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-blue-600 mb-2">Moduł Preventivo</h3>
            <p className="text-slate-600 text-sm">Inteligentny harmonogram prewencji i przeglądów.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-blue-600 mb-2">Cyfrowy Paszport</h3>
            <p className="text-slate-600 text-sm">System kodów QR dla każdego urządzenia.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-blue-600 mb-2">Zarządzanie Awariami</h3>
            <p className="text-slate-600 text-sm">Błyskawiczne zgłaszanie i monitorowanie incydentów.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-blue-600 mb-2">Audyt Energii</h3>
            <p className="text-slate-600 text-sm">Pełna kontrola zużycia mediów i odczytów.</p>
          </div>
        </section>

        {/* Twój Killer Feature */}
        <section className="py-16 bg-blue-50 text-center">
          <h2 className="text-3xl font-bold mb-4">Killer Feature: Ronda de Mañana</h2>
          <p className="text-slate-700">Zoptymalizowany poranny obchód, który oszczędza czas Twojego zespołu.</p>
        </section>

        {/* Formularz Kontaktowy */}
        <section id="contact" className="py-20">
          <ContactForm />
        </section>
      </main>

      <footer className="py-8 text-center text-slate-500 border-t">
        <p>© 2026 TechCare Control. Wszystkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
}
