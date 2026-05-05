import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Academic <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 flex items-start gap-6 group hover:border-primary/30 transition-all"
            >
              <div className="p-4 glass rounded-2xl text-primary group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                   <h3 className="text-xl font-bold">{edu.degree}</h3>
                   {edu.score && (
                      <div className="flex items-center gap-1 text-accent text-sm font-bold bg-accent/10 px-3 py-1 rounded-full">
                         <Award className="w-4 h-4" />
                         {edu.score}
                      </div>
                   )}
                </div>
                <p className="text-lg text-white/70 mb-1">{edu.institution}</p>
                {edu.status && (
                    <span className="text-xs uppercase tracking-widest font-bold text-primary">{edu.status}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
