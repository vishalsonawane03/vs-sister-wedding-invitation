const LocationSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant text-gray-800 mb-4">
            Wedding Location
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-peach-400 to-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us at these beautiful venues where our love story will unfold in the presence of our beloved family and friends.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-peach-50 to-gold-50 rounded-3xl p-8 card-shadow">
              <h3 className="text-2xl font-elegant text-gray-800 mb-6 text-center">
                Shri Vitthal Rukhmini Mangal Karyalay
              </h3>
              
              {/* Embedded Google Map */}
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d358.36217493366024!2d74.7832336104544!3d20.972130248612327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdecf31ae880481%3A0x7c4fc3458ce7fcbc!2z4KS14KS_4KSg4KWN4KSg4KSyIOCksOClgeCkleCljeCkruCkv-Cko-ClgCDgpK7gpILgpJfgpLIg4KSV4KS-4KSw4KWN4KSv4KS-4KSy4KSvIOCkqOCkl-CkvuCkguCktQ!5e1!3m2!1sen!2sin!4v1762876598713!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wedding Venue Location"
                ></iframe>
              </div>

              <div className="text-center">
                <a
                  href="https://maps.app.goo.gl/wardNEGfFP4EfFmx6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-peach-500 to-gold-500 text-white font-medium rounded-xl hover:from-peach-600 hover:to-gold-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Venue Details */}
          <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
            <div className="space-y-8">
              {/* Main Venue */}
              <div className="bg-white rounded-3xl p-8 card-shadow border border-peach-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-peach-100 p-4 rounded-2xl">
                    <svg className="w-8 h-8 text-peach-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-elegant text-gray-800 mb-2">
                      Wedding Ceremony
                    </h3>
                    <p className="text-peach-600 font-medium">November 27, 2025 • 10:00 AM</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Shri.Vitthal Rukhmini Mangal Karyalay</p>
                      <p className="text-gray-600">Nagaon Tal,Dist Dhule Maharashtra 424307</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-gray-600">+91 85306 59389 / +91 99211 91483</p>
                  </div>
                </div>
              </div>

              {/* Reception Venue */}
              {/* <div className="bg-white rounded-3xl p-8 card-shadow border border-gold-100">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-gold-100 p-4 rounded-2xl">
                    <svg className="w-8 h-8 text-gold-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-elegant text-gray-800 mb-2">
                      Reception Party
                    </h3>
                    <p className="text-gold-600 font-medium">November 27, 2025 • 7:00 PM</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mr-3 mt-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-gray-800">Royal Gardens Banquet</p>
                      <p className="text-gray-600">321 Palace Avenue, Mumbai, Maharashtra 400002</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-gray-600">+91 98765 43211</p>
                  </div>
                </div>
              </div> */}

              {/* Travel Information */}
              {/* <div className="bg-gradient-to-br from-peach-50 to-gold-50 rounded-3xl p-8">
                <h3 className="text-xl font-elegant text-gray-800 mb-6 text-center">
                  Travel Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-2xl shadow-sm mb-3">
                      <svg className="w-8 h-8 text-peach-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="font-medium text-gray-800">Parking</p>
                    </div>
                    <p className="text-sm text-gray-600">Free parking available at both venues</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-white p-4 rounded-2xl shadow-sm mb-3">
                      <svg className="w-8 h-8 text-gold-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="font-medium text-gray-800">Transport</p>
                    </div>
                    <p className="text-sm text-gray-600">Shuttle service between venues</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default LocationSection;
