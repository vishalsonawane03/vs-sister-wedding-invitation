const AboutCouple = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant text-gray-800 mb-4">
            About the Couple
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-peach-400 to-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the beautiful couple who are about to begin their forever journey together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Bride Section */}
          <div className="text-center animate-slide-up">
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-peach-200">
                <img 
                  src="/images/couple/bridg.jpg" 
                  alt="Gaytri Patil - The Beautiful Bride"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gold-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-3xl font-elegant text-gray-800 mb-4">Gaytri</h3>
            <p className="text-peach-600 font-medium mb-2">The Beautiful Bride</p>
            <p className="text-sm text-gray-500 mb-4"></p>
            
            <div className="bg-peach-50 rounded-2xl p-6 text-left">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Daughter of Mrs. Vijaya & Mr. Bhagwan Bansilal Sonawane
              </div>
              {/* <div className="flex items-center text-sm text-gray-600 mt-2">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Loves: Painting, Dancing, Family Time
              </div> */}
              <div className="flex items-start text-sm text-gray-600 mt-3 pt-3 border-t border-peach-200">
                <svg className="w-4 h-4 mr-2 mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  {/* <p className="font-medium">Family Address:</p> */}
                  <p className="text-xs">Dhamane Tal,Dist Dhule</p>
                </div>
              </div>
            </div>
          </div>

          {/* Groom Section */}
          <div className="text-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="relative mb-8">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-gold-200">
                <img 
                  src="/images/couple/groom.jpg" 
                  alt="Jignesh Patil - The Handsome Groom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-peach-200 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-peach-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-3xl font-elegant text-gray-800 mb-4">Jignesh</h3>
            <p className="text-gold-600 font-medium mb-2">The Handsome Groom</p>
            <p className="text-sm text-gray-500 mb-4"></p>
            
            <div className="bg-gold-50 rounded-2xl p-6 text-left">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                Son of Mrs. Manisha & Mr. Chhotulal Devram Bhadane
              </div>
              {/* <div className="flex items-center text-sm text-gray-600 mt-2">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                Loves: Cricket, Reading, Food Adventures
              </div> */}
              <div className="flex items-start text-sm text-gray-600 mt-3 pt-3 border-t border-gold-200">
                <svg className="w-4 h-4 mr-2 mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  {/* <p className="font-medium">Family Address:</p> */}
                  <p className="text-xs">Nagaon Tal,Dist Dhule.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Love Story */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-peach-50 to-gold-50 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-elegant text-gray-800 mb-6">Our Journey Together</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              "When families unite with love and blessings, beautiful bonds are formed." Gaytri and Jignesh's journey 
              began when their families, recognizing the perfect match in values, dreams, and aspirations, brought 
              them together. Through meaningful conversations and shared moments, they discovered a deep connection 
              and mutual respect that blossomed into love. With the blessings of their families and the promise of 
              a beautiful future together, they're ready to embark on their lifelong journey as one.
            </p>
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-peach-400 rounded-full animate-pulse"></div>
                <div className="w-6 h-6 bg-gold-400 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-peach-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCouple;
