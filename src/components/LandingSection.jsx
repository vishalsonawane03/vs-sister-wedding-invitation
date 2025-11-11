import { useEffect, useState } from 'react';

const LandingSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  // Wedding date - November 27, 2025
  const weddingDate = new Date('2025-11-27T10:00:00').getTime();

  useEffect(() => {
    // Trigger fade-in animation
    setIsVisible(true);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        {/* Placeholder couple image - will be replaced with real photo */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('./src/assets/images/couple/background_img.jpg')`
          }}
        ></div>
        
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        
        {/* Soft color overlay for warmth */}
        <div className="absolute inset-0 bg-gradient-to-br from-peach-100/20 via-transparent to-rose-100/20"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
      }`}>
        
        {/* Couple Names */}
        <div className="mb-8 group">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-4 tracking-wide transform transition-all duration-700 group-hover:scale-105" 
              style={{
                fontFamily: 'Dancing Script, cursive',
                fontWeight: '700',
                textShadow: '3px 3px 12px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.1)',
                letterSpacing: '0.05em'
              }}>
            Gaytri & Jignesh
          </h1>
          
          {/* Decorative line with animation */}
          <div className="flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/80 to-white/60 animate-pulse"></div>
            <div className="mx-4 w-3 h-3 bg-gradient-to-r from-peach-300 to-gold-300 rounded-full animate-pulse shadow-lg"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-white/80 to-white/60 animate-pulse"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/95 font-light tracking-wider transform transition-all duration-500 group-hover:translate-y-1" 
             style={{
               fontFamily: 'Playfair Display, serif',
               fontWeight: '300',
               textShadow: '2px 2px 6px rgba(0,0,0,0.4)',
               fontStyle: 'italic'
             }}>
            Are Getting Married
          </p>
        </div>

        {/* Wedding Date */}
        <div className="mb-12 group">
          <div className="bg-white/10 backdrop-blur-none rounded-2xl p-6 border border-white/20 shadow-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-2xl">
            <p className="text-2xl md:text-3xl text-white font-light tracking-wide transform transition-all duration-300 group-hover:scale-110" 
               style={{
                 fontFamily: 'Playfair Display, serif',
                 fontWeight: '600',
                 textShadow: '2px 2px 8px rgba(0,0,0,0.3)'
               }}>
              27th November 2025
            </p>
            <p className="text-sm md:text-base text-white/80 mt-2 font-light tracking-widest transform transition-all duration-300 group-hover:text-white/100"
               style={{
                 fontFamily: 'Inter, sans-serif',
                 letterSpacing: '0.2em'
               }}>
              SAVE THE DATE
            </p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-none rounded-2xl p-6 border border-white/20 shadow-xl max-w-2xl mx-auto mb-16 group transform transition-all duration-500 hover:scale-105 hover:bg-white/15">
          <h3 className="text-lg md:text-xl text-white/90 mb-6 font-light tracking-wide transform transition-all duration-300 group-hover:text-white"
              style={{
                fontFamily: 'Playfair Display, serif',
                fontWeight: '400',
                fontStyle: 'italic'
              }}>
            Countdown to Our Special Day
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2 border border-white/30 transform transition-all duration-300 hover:scale-110 hover:bg-white/30">
                <span className="text-2xl md:text-3xl font-light text-white" style={{fontFamily: 'Inter, sans-serif'}}>{timeLeft.days}</span>
              </div>
              <p className="text-white/80 text-sm font-light tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>Days</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2 border border-white/30 transform transition-all duration-300 hover:scale-110 hover:bg-white/30">
                <span className="text-2xl md:text-3xl font-light text-white" style={{fontFamily: 'Inter, sans-serif'}}>{timeLeft.hours}</span>
              </div>
              <p className="text-white/80 text-sm font-light tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2 border border-white/30 transform transition-all duration-300 hover:scale-110 hover:bg-white/30">
                <span className="text-2xl md:text-3xl font-light text-white" style={{fontFamily: 'Inter, sans-serif'}}>{timeLeft.minutes}</span>
              </div>
              <p className="text-white/80 text-sm font-light tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>Minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-2 border border-white/30 transform transition-all duration-300 hover:scale-110 hover:bg-white/30">
                <span className="text-2xl md:text-3xl font-light text-white" style={{fontFamily: 'Inter, sans-serif'}}>{timeLeft.seconds}</span>
              </div>
              <p className="text-white/80 text-sm font-light tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>Seconds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-32 right-16 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-40 right-12 w-1.5 h-1.5 bg-white/35 rounded-full animate-ping" style={{animationDelay: '6s'}}></div>
    </section>
  );
};

export default LandingSection;
