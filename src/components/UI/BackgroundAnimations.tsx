import React from 'react';

const BackgroundAnimations = () => {
  return (
    <>
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full bg-[#CB6CE6] opacity-30 blur-[200px] animate-float" />
      <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#2EECC6] opacity-30 blur-[200px] animate-float-delay" />
      <div className="absolute bottom-[-20%] left-[20%] w-[800px] h-[800px] rounded-full bg-[#973BF0] opacity-30 blur-[200px] animate-float" />
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 15s ease-in-out infinite;
          animation-delay: -7.5s;
        }
      `}</style>
    </>
  );
};

export default BackgroundAnimations;
