import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Work <span className="gradient-text">Experience</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-primary rounded-full"
          />
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon Dot */}
                <div className="absolute left-0 md:left-1/2 w-12 h-12 glass rounded-full flex items-center justify-center -translate-x-1/2 z-10 hidden md:flex border-2 border-primary/20">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>

                <div className="w-full md:w-1/2">
                   <div className="glass-card p-8 group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-primary font-bold">{exp.duration}</span>
                        <div className="p-2 glass rounded-lg md:hidden">
                            <Briefcase className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-lg font-medium text-white/80 mb-4">{exp.company}</div>
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                   </div>
                </div>
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
