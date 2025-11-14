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
            backgroundImage: `url('/images/couple/background_img.jpg')`
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

        {/* Wedding Date - Clickable to Add to Calendar */}
        <div className="mb-12 group">
          <div 
            className="bg-white/10 backdrop-blur-none rounded-2xl p-6 border border-white/20 shadow-xl transform transition-all duration-500 hover:scale-105 hover:bg-white/15 hover:shadow-2xl cursor-pointer"
            onClick={() => {
              // Create calendar event details
              const eventDetails = {
                title: 'Gaytri & Jignesh Wedding',
                start: '20251127T100000',
                end: '20251127T140000',
                description: 'Wedding ceremony of Gaytri and Jignesh',
                location: 'Shri Vitthal Rukhmini Mangal Karyalay, Nagaon Tal, Dist Dhule'
              };
              
              // Detect user's platform and create appropriate calendar link
              const userAgent = navigator.userAgent.toLowerCase();
              const isMac = userAgent.includes('mac');
              const isIOS = userAgent.includes('iphone') || userAgent.includes('ipad');
              
              if (isMac || isIOS) {
                // For Mac/iOS users - use data URL for .ics file
                const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Wedding//Wedding Invitation//EN
BEGIN:VEVENT
UID:wedding-gaytri-jignesh@example.com
DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z
DTSTART:${eventDetails.start}Z
DTEND:${eventDetails.end}Z
SUMMARY:${eventDetails.title}
DESCRIPTION:${eventDetails.description}
LOCATION:${eventDetails.location}
END:VEVENT
END:VCALENDAR`;
                
                const blob = new Blob([icsContent], { type: 'text/calendar' });
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = 'gaytri-jignesh-wedding.ics';
                link.click();
                URL.revokeObjectURL(url);
              } else {
                // For other users - use Google Calendar
                const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.start}/${eventDetails.end}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
                window.open(googleCalendarUrl, '_blank');
              }
            }}
          >
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
            
            {/* Calendar icon hint */}
            <div className="flex items-center justify-center mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-5 h-5 text-white/70 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs text-white/70 tracking-wide">Click to add to calendar</span>
            </div>
          </div>
        </div>

        {/* Optimized Countdown Timer */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-xl max-w-lg mx-auto mb-24 group transform transition-all duration-500 hover:scale-105 hover:bg-white/15">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl animate-bounce mr-2"></span>
            <h3 className="text-base md:text-lg text-white/90 font-light tracking-wide transform transition-all duration-300 group-hover:text-white"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontWeight: '400',
                  fontStyle: 'italic'
                }}>
              Countdown to Our Special Day
            </h3>
            <span className="text-1xl animate-pulse ml-2" style={{animationDelay: '0.5s'}}></span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-1 border border-white/30 transform transition-all duration-300 hover:scale-110 hover:bg-white/30 relative">
                <span className="absolute -top-1 -right-1 text-xs animate-pulse">⏰</span>
                <span className="text-xl md:text-2xl font-light text-white" style={{fontFamily: 'Inter, sans-serif'}}>{timeLeft.days}</span>
              </div>
              <p className="text-white/80 text-xs font-light tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>Days</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-1 border border-white/30 transform transition-all duration-300 hover:scale-110 hover:bg-white/30 relative">
                <span className="absolute -top-1 -right-1 text-xs animate-pulse" style={{animationDelay: '0.2s'}}>⏳</span>
                <span className="text-xl md:text-2xl font-light text-white" style={{fontFamily: 'Inter, sans-serif'}}>{timeLeft.hours}</span>
              </div>
              <p className="text-white/80 text-xs font-light tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>Hours</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-1 border border-white/30 transform transition-all duration-300 hover:scale-110 hover:bg-white/30 relative">
                <span className="absolute -top-1 -right-1 text-xs animate-pulse" style={{animationDelay: '0.4s'}}>⌛</span>
                <span className="text-xl md:text-2xl font-light text-white" style={{fontFamily: 'Inter, sans-serif'}}>{timeLeft.minutes}</span>
              </div>
              <p className="text-white/80 text-xs font-light tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>Minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-1 border border-white/30 transform transition-all duration-300 hover:scale-110 hover:bg-white/30 relative">
                <span className="absolute -top-1 -right-1 text-xs animate-pulse" style={{animationDelay: '0.6s'}}>⚡</span>
                <span className="text-xl md:text-2xl font-light text-white" style={{fontFamily: 'Inter, sans-serif'}}>{timeLeft.seconds}</span>
              </div>
              <p className="text-white/80 text-xs font-light tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>Seconds</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div> */}

      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-32 right-16 w-1.5 h-1.5 bg-white/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-40 right-12 w-1.5 h-1.5 bg-white/35 rounded-full animate-ping" style={{animationDelay: '6s'}}></div>
    </section>
  );
};

export default LandingSection;
