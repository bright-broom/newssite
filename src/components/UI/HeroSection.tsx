import React, { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  children: ReactNode;
}

const HeroSection = ({ title, subtitle, description, children }: HeroSectionProps) => {
  return (
    <header className="container px-4 pt-24 pb-16 mx-auto text-center">
      <h1 className="mb-8 text-5xl font-bold md:text-7xl font-outfit">
        <span className="text-gradient-primary drop-shadow-lg">
          {title}
        </span>
        <br />
        <span className="block mt-4 text-4xl md:text-5xl font-noto-sans-jp">
          {subtitle}
        </span>
      </h1>
      <p className="mb-12 text-xl font-light text-gray-300 font-noto-sans-jp">
        {description}
      </p>
      {children}
    </header>
  );
};

export default HeroSection;
