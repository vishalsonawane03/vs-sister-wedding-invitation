const GanapatiLogo = () => {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-pulse">
      <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <svg 
          className="w-12 h-12 text-white" 
          viewBox="0 0 100 100" 
          fill="currentColor"
        >
          {/* Ganapati Bappa SVG */}
          <path d="M50 10 C35 10 25 20 25 35 C25 45 30 50 35 55 L35 70 C35 75 40 80 50 80 C60 80 65 75 65 70 L65 55 C70 50 75 45 75 35 C75 20 65 10 50 10 Z"/>
          <circle cx="42" cy="30" r="3"/>
          <circle cx="58" cy="30" r="3"/>
          <path d="M45 40 Q50 45 55 40" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M50 50 C45 50 40 55 40 60 L60 60 C60 55 55 50 50 50"/>
          <path d="M30 25 Q20 20 15 25 Q20 30 30 25"/>
          <path d="M70 25 Q80 20 85 25 Q80 30 70 25"/>
          <circle cx="50" cy="20" r="2"/>
        </svg>
      </div>
      <p className="text-sm text-center mt-2 text-orange-600 font-semibold tracking-wide">Lord Ganesha</p>
    </div>
  );
};

export default GanapatiLogo;
