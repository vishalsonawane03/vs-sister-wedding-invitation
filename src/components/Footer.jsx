const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Wedding Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-elegant mb-4">Gaytri & Jignesh</h3>
            <p className="text-gray-300 mb-2">November 27, 2025</p>
            <p className="text-gray-300">Nagaon, Maharashtra</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-300 hover:text-peach-300 transition-colors">
                About Us
              </a>
              <a href="#events" className="block text-gray-300 hover:text-peach-300 transition-colors">
                Events
              </a>
              <a href="#location" className="block text-gray-300 hover:text-peach-300 transition-colors">
                Location
              </a>
              <a href="#gallery" className="block text-gray-300 hover:text-peach-300 transition-colors">
                Gallery
              </a>
              {/* <a href="#rsvp" className="block text-gray-300 hover:text-peach-300 transition-colors">
                RSVP
              </a> */}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>+91 99211 91483</p>
              <p>wedding@Gaytrijignesh.com</p>
              <div className="flex justify-center md:justify-end space-x-4 mt-4">
                <a
                  href="https://wa.me/919921191483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
                  </svg>
                </a>
                <a
                  href="mailto:wedding@Gaytrijignesh.com"
                  className="bg-gray-600 hover:bg-gray-700 p-2 rounded-full transition-colors"
                  aria-label="Email"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Wedding Hashtag */}
            <div className="text-center md:text-left">
              <p className="text-gray-300 mb-2">Share your moments with us</p>
              <div className="bg-gradient-to-r from-peach-500 to-gold-500 text-white px-4 py-2 rounded-full inline-block">
                <span className="font-medium">#JigneshWedsGaytri</span>
              </div>
            </div>

            {/* Made with Love */}
            <div className="text-center">
              <p className="text-gray-300 flex items-center justify-center">
                Made with 
                <svg className="w-5 h-5 mx-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                by Vishal Sonawane
              </p>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © {currentYear} Gaytri & Jignesh Wedding
              </p>
              <p className="text-gray-400 text-sm">
                All rights reserved
              </p>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-300 italic font-elegant text-lg">
            "Two souls, one heart, forever together"
          </p>
          <div className="flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-peach-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-peach-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
