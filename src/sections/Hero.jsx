import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, MousePointer2, Award, Rocket } from 'lucide-react';
import { Github, Linkedin } from '../components/BrandIcons';
import { portfolioData } from '../data/portfolioData';
import HeroVisual from '../components/HeroVisual';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Building Digital <span className="gradient-text">Masterpieces</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-lg leading-relaxed">
            Hi, I'm <span className="text-foreground font-bold">{portfolioData.name}</span>. I transform complex ideas into elegant, high-performance web applications.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-10">
            <Link
              to="projects"
              smooth={true}
              className="group px-10 py-4 bg-primary text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xl shadow-primary/25"
            >
              Explore My Work
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-4">
              <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:bg-secondary/50 transition-all hover:scale-110 active:scale-95">
                <Github className="w-6 h-6" />
              </a>
              <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass rounded-2xl hover:bg-secondary/50 transition-all hover:scale-110 active:scale-95">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <HeroVisual />
          
          {/* Floating Badges */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 p-5 glass rounded-3xl shadow-2xl flex items-center gap-3"
          >
            <div className="p-3 bg-primary/20 rounded-xl">
                <Award className="w-6 h-6 text-primary" />
            </div>
            <div>
                <div className="font-bold">Creative</div>
                <div className="text-[10px] text-muted-foreground uppercase">Design Focus</div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 p-5 glass rounded-3xl shadow-2xl flex items-center gap-3"
          >
            <div className="p-3 bg-accent/20 rounded-xl">
                <Rocket className="w-6 h-6 text-accent" />
            </div>
            <div>
                <div className="font-bold">Fast</div>
                <div className="text-[10px] text-muted-foreground uppercase">Performance</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer hidden md:block">
        <Link to="about" smooth={true}>
          <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-primary rounded-full" />
          </div>
        </Link>
      </div>
    </section>
  );
}
