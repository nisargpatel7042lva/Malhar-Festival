import { useState, useEffect } from 'react';
import { Mail, Phone, Instagram, Twitter, Facebook, Ticket, Menu, X, MapPin } from 'lucide-react';
import logo from './assets/malharlogo.svg';

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

function App() {
  const [tickets, setTickets] = useState(1);
  const ticketPrice = 499;
  const totalPrice = tickets * ticketPrice;

  const handleBuyTickets = () => {
    window.location.href = 'https://konfhub.com/checkout/malhar-entry-pass?ticketId=32645'; // Replace with actual KonfHub link
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-400 title-font">
            Featuring Mohit Chauhan
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
          Experience the voice of a true Rockstar! A soulful evening with the iconic playback singer! 🎸
          </p>
          <CountdownTimer />
        </div>
      </section>
      
      {/* Tickets Section */}
      <section id="tickets" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 title-font">Get Your Pass</h2>
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