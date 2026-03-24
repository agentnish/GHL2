import React, { useState } from 'react';
import { Compass, ShieldCheck, MessageSquare, ArrowRight, CheckCircle2, Phone, Mail } from 'lucide-react';
import './index.css';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real GoHighLevel setup, this form would either POST to a GHL webhook,
    // or you would replace this entire form section with your GHL Form Embed snippet.
    alert("Thanks for reaching out! In production, this connects to your GoHighLevel CRM.");
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-amber-500/30">

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold tracking-tighter text-white flex items-center gap-2 uppercase">
            <span className="text-amber-500">◆</span> NISH SIVANATHAN
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#approach" className="hover:text-amber-400 transition-colors">My Approach</a>
            <a href="#services" className="hover:text-amber-400 transition-colors">Expertise</a>
            <a href="#manifesto" className="hover:text-amber-400 transition-colors">Philosophy</a>
          </div>
          <a
            href="#contact"
            className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-sm font-semibold transition-colors text-sm"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-zinc-950 to-zinc-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-3/5">
            <div className="inline-block border border-amber-500/30 bg-amber-500/10 text-amber-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              Real Estate & Mortgage Strategist
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Navigate complex decisions with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                absolute confidence.
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
              I combine deep credit expertise with a holistic understanding of property markets to provide
              actionable advice. No jargon, no pressure—just clarity and practical solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-8 py-4 rounded-sm font-bold text-lg transition-all"
              >
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#approach"
                className="flex items-center justify-center px-8 py-4 rounded-sm font-semibold text-white border border-white/20 hover:bg-white/5 transition-all"
              >
                Learn How I Work
              </a>
            </div>
          </div>
          <div className="md:w-2/5 hidden md:block">
            {/* Replace /SQCFinalNish-7468.jpg with your headshot placed in the /public folder */}
            <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] bg-zinc-900 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
              <img
                src="/SQCFinalNish-7468.jpg"
                alt="Nish Sivanathan - Professional portrait"
                className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white font-bold text-2xl mb-1">Nish Sivanathan</p>
                <p className="text-amber-500 font-medium flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 416-895-0891
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Difference / Positioning */}
      <section id="approach" className="py-24 bg-zinc-900/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Unlike "Sales-First" Agents</h2>
            <p className="text-lg text-zinc-400">
              I operate ethically, holistically, and strategically. Expect a rare mix of financial intelligence,
              relatable advice, and a little humor along the way.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-950 p-8 rounded-sm border border-white/5 hover:border-amber-500/30 transition-colors">
              <Compass className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Holistic Strategy</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I look at the big picture. Your real estate goals are tied directly to your financial health,
                credit, and mortgage strategy. We plan for the long term.
              </p>
            </div>
            <div className="bg-zinc-950 p-8 rounded-sm border border-white/5 hover:border-amber-500/30 transition-colors">
              <ShieldCheck className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Radical Honesty</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                I never overpromise or push you into a deal. I manage expectations honestly and deliver expert
                advice tailored specifically to your unique situation.
              </p>
            </div>
            <div className="bg-zinc-950 p-8 rounded-sm border border-white/5 hover:border-amber-500/30 transition-colors">
              <MessageSquare className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">Always Accessible</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                No question is too dumb, and no deal is too small. You get my full attention, clear
                explanations, and consistent follow-through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Manifesto */}
      <section id="manifesto" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-amber-500 font-semibold tracking-wider uppercase text-sm mb-4 block">
            The Core Philosophy
          </span>
          <blockquote className="text-3xl md:text-5xl font-serif font-medium text-white leading-tight mb-8">
            "I believe every client deserves clarity, confidence, and practical solutions. I guide, I explain,
            I advise—never rushing, never overselling."
          </blockquote>
          <p className="text-xl text-zinc-400">
            My work is about people, not transactions. <br className="hidden md:block" />
            Relationships last far longer than any deal.
          </p>
        </div>
      </section>

      {/* Services/Expertise Layout */}
      <section id="services" className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Expertise That Empowers You</h2>
              <p className="text-lg text-zinc-400 mb-8">
                By combining comprehensive real estate knowledge with "behind-the-scenes" credit intelligence,
                I provide solutions others simply miss.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-amber-500" /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Real Estate Navigation</h4>
                    <p className="text-zinc-400 text-sm mt-1">
                      Strategic buying and selling advice focused on your timeline and bottom line.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-amber-500" /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Mortgage & Credit Mastery</h4>
                    <p className="text-zinc-400 text-sm mt-1">
                      Deep insights into how credit works to secure the best possible financing options.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1"><CheckCircle2 className="w-6 h-6 text-amber-500" /></div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Actionable Problem-Solving</h4>
                    <p className="text-zinc-400 text-sm mt-1">
                      Facing a hurdle? I bring alternative strategies and practical solutions to the table.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-zinc-950 border border-white/10 p-8 rounded-sm relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[50px]"></div>
                <h3 className="text-2xl font-bold text-white mb-6">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-zinc-300 border-b border-white/5 pb-4">
                    <span className="text-amber-500 font-bold">01.</span> Data-driven insights, simply explained.
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300 border-b border-white/5 pb-4">
                    <span className="text-amber-500 font-bold">02.</span> A conversational, approachable environment.
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300 border-b border-white/5 pb-4">
                    <span className="text-amber-500 font-bold">03.</span> Consistent follow-through on every promise.
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300 pb-2">
                    <span className="text-amber-500 font-bold">04.</span> A focus on your long-term wealth and stability.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GoHighLevel Lead Capture Section */}
      <section id="contact" className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/10 rounded-lg p-8 md:p-16 flex flex-col md:flex-row gap-12">

            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's map out your strategy.</h2>
              <p className="text-zinc-400 mb-8">
                Ready for clear, practical advice? Drop your details below. I'm always responsive, and I promise
                to bring clarity to your situation.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Direct Line</p>
                    <a href="tel:416-895-0891" className="text-lg font-medium text-white hover:text-amber-400 transition-colors">
                      416-895-0891
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Email</p>
                    <a href="mailto:advice@agentnish.com" className="text-lg font-medium text-white hover:text-amber-400 transition-colors">
                      advice@agentnish.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              {/*
                === GOHIGHLEVEL INTEGRATION ===
                Option A (GHL Hosted Funnel): Delete the <form> below and paste
                your GHL Form embed iframe/script snippet here instead.

                Option B (Webhook): Replace the handleSubmit function to POST
                formData as JSON to your GHL Webhook URL:
                  fetch('https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                  })
              */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-zinc-950 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                      placeholder="(555) 123-4567"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-950 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">How can I help you?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full bg-zinc-950 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Tell me a bit about your real estate or mortgage goals..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-lg py-4 rounded-sm transition-colors mt-4"
                >
                  Request Consultation
                </button>
                <p className="text-xs text-zinc-500 text-center mt-4">
                  Your information is secure. No spam, just actionable advice.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-zinc-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold tracking-tighter text-white flex items-center gap-2 uppercase">
            <span className="text-amber-500">◆</span> NISH SIVANATHAN
          </div>
          <div className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} All rights reserved. Operating ethically, always.
          </div>
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
