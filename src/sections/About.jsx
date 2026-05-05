import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <User className="text-primary" />
              Who am I?
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {portfolioData.about}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 glass rounded-xl text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Location</div>
                  <div className="text-sm">{portfolioData.contact.location}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 glass rounded-xl text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Email</div>
                  <div className="text-sm">{portfolioData.contact.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 glass rounded-xl text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Phone</div>
                  <div className="text-sm">{portfolioData.contact.phone}</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="p-8 glass-card text-center flex flex-col items-center justify-center gap-2">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="p-8 glass-card text-center flex flex-col items-center justify-center gap-2">
                <div className="text-3xl font-bold text-accent">2+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="p-8 glass-card text-center flex flex-col items-center justify-center gap-2">
                <div className="text-3xl font-bold text-accent">Full</div>
                <div className="text-sm text-muted-foreground">Stack Support</div>
              </div>
              <div className="p-8 glass-card text-center flex flex-col items-center justify-center gap-2">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Dedication</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
