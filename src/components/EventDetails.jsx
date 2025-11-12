const EventDetails = () => {
  const events = [
    {
      name: "Mehendi Ceremony",
      date: "25th November 2025",
      time: "07:00 PM - 09:00 PM",
      venue: "Bhadane Family Home",
      address: "Nagaon Tal,Dist Dhule.",
      description: "An evening filled with music, laughter, and tradition as beautiful mehendi designs adorn the bride's hands — celebrating love and new beginnings.",
      icon: "🌿",
      color: "peach"
    },
    {
      name: "Haldi Ceremony",
      date: "26th November 2025",
      time: "04:00 PM - 07:00 PM",
      venue: "Bhadane Family Home",
      address: "Nagaon Tal,Dist Dhule.",
      description: "A traditional ceremony where turmeric paste is applied to the bride and groom for good luck and purification.",
      icon: "🌟",
      color: "peach"
    },
    {
      name: "Wedding Ceremony",
      date: "27th November 2025",
      time: "10:00 AM - 2:00 PM",
      venue: "Shri Vittal Rukhmini Mandir Mangal Karyalay",
      address: "Nagaon Tal,Dist Dhule.",
      description: "The sacred union of two souls in the presence of family, friends, and divine blessings.",
      icon: "💒",
      color: "peach"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-peach-50 to-gold-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-elegant text-gray-800 mb-4">
            Wedding Events
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-peach-400 to-gold-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in celebrating our special moments across these beautiful ceremonies and festivities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`bg-white rounded-3xl p-8 card-shadow animate-slide-up hover:scale-105 transition-transform duration-300`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`text-4xl p-4 rounded-2xl ${
                  event.color === 'peach' 
                    ? 'bg-peach-100 text-peach-600' 
                    : 'bg-gold-100 text-gold-600'
                }`}>
                  {event.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-elegant text-gray-800 mb-2">
                    {event.name}
                  </h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    event.color === 'peach' 
                      ? 'bg-peach-100 text-peach-700' 
                      : 'bg-gold-100 text-gold-700'
                  }`}>
                    {event.date}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">{event.time}</span>
                </div>

                <div className="flex items-start text-gray-600">
                  <svg className="w-5 h-5 mr-3 mt-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-medium">{event.venue}</p>
                    <p className="text-sm text-gray-500">{event.address}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>

                <div className="pt-4">
                  <button className={`w-full py-3 px-6 rounded-xl font-medium transition-colors duration-200 ${
                    event.color === 'peach'
                      ? 'bg-peach-500 hover:bg-peach-600 text-white'
                      : 'bg-gold-500 hover:bg-gold-600 text-white'
                  }`}>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-elegant text-gray-800 text-center mb-12">
            Wedding Timeline
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-peach-300 to-gold-300 rounded-full"></div>
            
            <div className="space-y-12">
              {events.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-5' : 'text-left pl-5'}`}>
                    <div className="bg-white rounded-2xl p-6 card-shadow">
                      <h4 className="font-elegant text-xl text-gray-800 mb-2">{event.name}</h4>
                      <p className="text-gray-600 mb-1">{event.date}</p>
                      <p className="text-gray-500 text-sm">{event.time}</p>
                    </div>
                  </div>
                  
                  <div className="w-2/12 flex justify-center relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white ${
                      event.color === 'peach' ? 'bg-peach-500' : 'bg-gold-500'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
