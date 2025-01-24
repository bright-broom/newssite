import React from 'react';
import Link from 'next/link';

type OutlineButtonProps = {
  href: string;
  label: string;
};

const OutlineButton: React.FC<OutlineButtonProps> = ({ href, label }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="bg-gradient-to-r from-[#2E3192]/20 to-[#2EECC6]/20 backdrop-blur-md px-8 py-4 rounded-lg text-lg font-noto-sans-jp font-bold border border-[#2EECC6]/30 hover:scale-105 transition-transform duration-300 shadow-lg">
        {label}
      </a>
    </Link>
  );
};

export default OutlineButton;
