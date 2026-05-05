import React from 'react';
import { Code2 } from 'lucide-react';
import { Github, Linkedin, Twitter, Instagram } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          
          <span className="font-bold text-lg tracking-tight">{portfolioData.name}<span className="text-primary">.</span></span>
        </div>

        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {currentYear} {portfolioData.name}. All rights reserved.
          <br className="md:hidden" />
          <span className="hidden md:inline"> • </span>
          Designed by <span className='font-bold text-primary'>MD</span> with ❤️.
        </p>

        <div className="flex items-center gap-4">
          <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-lg hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/mr.manani.19" target="_blank" className="p-2 glass rounded-lg hover:text-primary transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
