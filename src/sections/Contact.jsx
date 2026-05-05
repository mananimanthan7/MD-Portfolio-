import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Format the message for WhatsApp
    const text = `*New Portfolio Inquiry*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/91${portfolioData.contact.phone}?text=${text}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset the form
    e.target.reset();
  };

  return (
    <section id="contact" className="section-padding bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Have a project in mind? Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-card p-6 md:p-8 flex items-center gap-3 group">
              <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Email Me</h4>
                <a href={`mailto:${portfolioData.contact.email}`} className="text-base md:text-lg font-bold hover:text-primary transition-colors break-all">
                    {portfolioData.contact.email}
                </a>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 flex items-center gap-3 group">
              <div className="p-4 glass rounded-2xl text-accent group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Call Me</h4>
                <a href={`tel:${portfolioData.contact.phone}`} className="text-base md:text-lg font-bold hover:text-accent transition-colors">
                    {portfolioData.contact.phone}
                </a>
              </div>
            </div>

            <div className="glass-card p-8 flex items-center gap-3 group">
              <div className="p-4 glass rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mb-1">Location</h4>
                <p className="text-base md:text-lg font-bold">{portfolioData.contact.location}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground">Your Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-muted-foreground">Your Email</label>
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground">Subject</label>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-muted-foreground">Message</label>
                <textarea
                  required
                  name="message"
                  placeholder="How can I help you?"
                  rows="4"
                  className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
              >
                <Send className="w-5 h-5" />
                Send Message via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
