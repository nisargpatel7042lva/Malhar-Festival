import { useState, useEffect } from 'react';
import { Mail, Phone, Instagram, Twitter, Facebook, Ticket, Menu, X, MapPin, Plus, Minus, Calendar } from 'lucide-react';
import logo from './assets/malharlogo.svg';
import pic6 from './assets/mc post.png';
import pic1 from './assets/155c.jpg'
import pic2 from './assets/DSC04290.jpg'
import pic3 from './assets/DSC04291.jpg'
import pic4 from './assets/DSC04372.jpg'
import pic5 from './assets/DSC04373.jpg'
import pic7 from './assets/DSC08336.jpg'
import pic8 from './assets/pic.jpg'
import pic9 from './assets/THUMBNAIL4K.png'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src= { logo } 
            alt="Malhar Logo" 
            className="h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14"

          />
          <div className="flex items-center gap-2">
            
            <span className="text-white font-bold text-lg sm:text-xl title-font">Malhar Festival</span>
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-white hover:text-purple-400 transition">Home</a>
          <a href="#tickets" className="text-white hover:text-purple-400 transition">Entry Pass</a>
          <a href="#contact" className="text-white hover:text-purple-400 transition">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm py-4">
          <div className="flex flex-col items-center gap-4">
            <a 
              href="#home" 
              className="text-white hover:text-purple-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#tickets" 
              className="text-white hover:text-purple-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Entry Pass
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-purple-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set your event date here (October 25, 2024 00:00:00 UTC)
    const targetDate = new Date('2025-02-25T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Initialize immediately to avoid initial delay
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex flex-wrap justify-center gap-4">
        <div className="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 min-w-[120px] text-center">
          <div className="text-4xl font-bold text-purple-400">{timeLeft.days}</div>
          <div className="text-sm text-gray-300">Days</div>
        </div>
        <div className="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 min-w-[120px] text-center">
          <div className="text-4xl font-bold text-purple-400">{timeLeft.hours}</div>
          <div className="text-sm text-gray-300">Hours</div>
        </div>
        <div className="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 min-w-[120px] text-center">
          <div className="text-4xl font-bold text-purple-400">{timeLeft.minutes}</div>
          <div className="text-sm text-gray-300">Minutes</div>
        </div>
        <div className="bg-purple-900/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-4 min-w-[120px] text-center">
          <div className="text-4xl font-bold text-purple-400">{timeLeft.seconds}</div>
          <div className="text-sm text-gray-300">Seconds</div>
        </div>
      </div>
      <div className="text-center mt-6">
        <span className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Until the Musical Experience Begins!
        </span>
      </div>
    </div>
  );
}


// Timeline data
const timelineEvents = [
  {
    year: "2023",
    title: "Rhythm Revolution",
    description: "Witness the historic beginnings of our college’s biggest gatherings.",
    image: pic1 ,
  },
  {
    year: "2022",
    title: "Sonic Fusion",
    description: "A groundbreaking year that merged classical and contemporary music styles, featuring collaborative performances that redefined musical boundaries.",
    image: pic8 ,
  },
  {
    year: "2021",
    title: "Digital Harmony",
    description: " Explore how each year brought new innovations, challenges, and triumphs.",
    image: "https://media.istockphoto.com/id/1806011581/photo/overjoyed-happy-young-people-dancing-jumping-and-singing-during-concert-of-favorite-group.jpg?s=612x612&w=0&k=20&c=cMFdhX403-yKneupEN-VWSfFdy6UWf1H0zqo6QBChP4=" ,
  },
  {
    year: "2020",
    title: "Musical Renaissance",
    description: "A celebration of artistic resilience, featuring intimate performances and showcasing the power of music to unite people even in challenging times.",
    image: "data:image/jpeg;base64,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" ,
  }
];

function Timeline() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 title-font text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Our Journey Through the Years
        </h2>
        
        {/* Mobile Timeline (visible on small screens) */}
        <div className="md:hidden space-y-8">
          {timelineEvents.map((event) => (
            <div 
              key={event.year}
              className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/30 transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
            >
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-purple-600 rounded-full p-2 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 title-font">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 title-font">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Timeline (visible on medium and larger screens) */}
        <div className="relative hidden md:block">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
          
          {timelineEvents.map((event, index) => (
            <div 
              key={event.year} 
              className={`mb-24 relative group ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
            >
              <div className={`flex flex-row items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} gap-8`}>
                {/* Year marker */}
                <div className="w-1/2 flex justify-center relative">
                  <div 
                    className={`absolute transform w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all duration-300 group-hover:scale-110 ${
                      index % 2 === 0 
                        ? 'left-auto right-0 translate-x-1/2' 
                        : 'right-auto left-0 -translate-x-1/2'
                    }`}
                  >
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-6 rounded-xl backdrop-blur-sm border border-purple-500/30 w-auto transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 title-font">
                      {event.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-1/2">
                  <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl overflow-hidden backdrop-blur-sm border border-purple-500/30 transform transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] group-hover:scale-105">
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-56 object-cover transform transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 title-font">
                        {event.title}
                      </h3>
                      <p className="text-gray-300">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}




function Poster() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-16 title-font text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        A Night of Soulful Melodies & Electrifying Rhythms Awaits!
      </h2>

      {/* Poster Container */}
      <div
        className={`relative bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-2xl backdrop-blur-sm border border-purple-500/30 overflow-hidden transition-all duration-300 
        ${isHovered ? "shadow-[0_0_40px_rgba(168,85,247,0.5)] border-purple-400" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ width: "100%", maxWidth: "700px" }} // Full width, no padding
      >
        {/* Poster Image (No Cropping) */}
        <img
          src={pic6} 
          alt="Event Poster"
          className="w-full h-auto object-contain rounded-lg"
          style={{ maxHeight: "100%", maxWidth: "100%" }} // Ensures full visibility
        />
      </div>
    </div>
  );
}

function App() {
  const ticketPrice = 499;

  const handleBuyTickets = () => {
    window.location.href = 'https://konfhub.com/checkout/svit?ticketId=32748'; // Replace with actual KonfHub link
  };

  return (
    <div className="bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://www.shutterstock.com/image-photo/party-goers-nightclub-co2-cannons-600nw-1014005611.jpg"
            className="w-full h-full object-cover"
            alt="Concert background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        </div>
        
        <div className="relative pt-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 title-font">
            Tune Carnival
          </h1>
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-400 title-font">
            Featuring Mohit Chauhan
          </h2> */}
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
          Welcome to Malhar & Tune Carnival, the heart of cultural expression at SVIT Vasad! A vibrant fusion of art, music, and tradition, Malhar is our grand annual cultural festival, celebrating creativity in every form.
          </p>
          <CountdownTimer />
        </div>
      </section>
          <Timeline />
          <Poster /> 
          {/* <TimerWithCarousel /> */}
      
      {/* Tickets Section */}
      <section id="tickets" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 title-font pt-12 sm:pt-0">
          Get Your Pass
        </h2>
          <div className="relative bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-4 sm:p-8 rounded-xl backdrop-blur-sm border border-purple-500/30 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:border-purple-400">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full translate-x-1/2 translate-y-1/2" />
            
            {/* Ticket content */}
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Ticket className="text-purple-400 h-6 w-6 sm:h-8 sm:w-8" />
                <h3 className="text-xl sm:text-2xl font-bold title-font">Festive Pass</h3>
              </div>
              
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 title-font">
                  ₹{ticketPrice}
                </div>
                {/* <div className="w-full max-w-xs p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-purple-500/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Quantity:</span>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setTickets(prev => Math.max(1, prev - 1))}
                        className="bg-purple-600/80 hover:bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center transition"
                      >
                        -
                      </button>
                      <span className="text-xl w-8 text-center">{tickets}</span>
                      <button 
                        onClick={() => setTickets(prev => Math.min(5, prev + 1))}
                        className="bg-purple-600/80 hover:bg-purple-600 w-8 h-8 rounded-full flex items-center justify-center transition"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-300">
                    <span>Total:</span>
                    <span>₹{totalPrice}</span>
                  </div>
                </div> */}
              </div>

              <div className="space-y-4 mb-8 text-sm text-gray-300">
                
                <p>• No Re-Entry: Once you leave the venue, re-entry is not allowed.</p>
                <p>• ID Required: Please bring a valid photo ID to collect your pass.</p>
                <p>• Security Check: All attendees must pass security; prohibited items are not allowed.</p>
                <p>• Respectful Behavior: Disruptive behavior may result in removal without a refund.</p>
                <p>• Entry Refusal: Organizers can deny entry at their discretion.</p>
                <p>• Personal Belongings: We are not responsible for lost or stolen items.</p>
                <p>• It is a festival entry pass and not a concert pass.</p>
                
              </div>

              <button
                onClick={handleBuyTickets}
                className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 px-6 sm:px-8 py-3 rounded-lg text-lg sm:text-xl font-bold hover:opacity-90 transition"
              >
                <span className="relative z-10">Book Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-purple-900/20 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center title-font">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-bold title-font mb-4">Contact Info</h3>
              <div className="flex items-center gap-4">
                <Mail className="text-purple-400 shrink-0" />
                <a href="mailto:contact@rhythmnight.com" className="hover:text-purple-400 transition">
                  contact@svitvasad.ac.in                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-purple-400 shrink-0" />
                <a href="tel:+919409662002" className="hover:text-purple-400 transition">
                  +91 94 0966 2002
                </a>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-purple-400 shrink-0 mt-1" />
                <address className="not-italic text-gray-300">
                  Sardar Vallabhbhai Patel Institute of Technology, <br />
                  B/h. S.T, Vasad, <br />
                  Gujarat 388306
                </address>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold title-font mb-4">Follow Us</h3>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/scc.svit.official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="hover:text-purple-400 transition">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-purple-400 transition">
                  <Twitter size={24} />
                </a>
                <a href="#" className="hover:text-purple-400 transition">
                  <Facebook size={24} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold title-font mb-4">Location</h3>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.9332687608494!2d73.07379517501302!3d22.469141836754744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fb55277d1e457%3A0xaf7e43a3d29561b!2sSardar%20Vallabhbhai%20Patel%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1738574532572!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;