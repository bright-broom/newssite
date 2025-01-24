import React from 'react';
import Link from 'next/link';

type GradientButtonProps = {
  href: string;
  label: string;
};

const GradientButton: React.FC<GradientButtonProps> = ({ href, label }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="bg-gradient-to-r from-[#CB6CE6] to-[#2EECC6] px-8 py-4 rounded-lg text-lg font-noto-sans-jp font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
        {label}
      </a>
    </Link>
  );
};

export default GradientButton;
