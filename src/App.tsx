import { useState, useEffect } from 'react';
import { Music4, Mail, Phone, Instagram, Twitter, Facebook, Ticket, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-black/80 backdrop-blur-sm z-50 px-4 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Music4 className="text-purple-500 h-6 w-6 sm:h-8 sm:w-8" />
          <span className="text-white font-bold text-lg sm:text-xl title-font">Musical Fiesta</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-white hover:text-purple-400 transition">Home</a>
          <a href="#tickets" className="text-white hover:text-purple-400 transition">Tickets</a>
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
              Tickets
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
    days: 16,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
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
    window.location.href = 'https://konfhub.com/your-event-link'; // Replace with actual KonfHub link
  };

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Concert background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
        </div>
        
        <div className="relative pt-20 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 title-font">
            Musical Fiesta
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-purple-400 title-font">
            Featuring Mohit Chauhan
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl">
            Experience an unforgettable evening of soulful melodies and powerful vocals with Gujarat's musical sensation
          </p>
          <CountdownTimer />
        </div>
      </section>

      {/* Tickets Section */}
      <section id="tickets" className="min-h-screen py-20 px-4 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 title-font">Get Your Passes</h2>
          <div className="relative bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-4 sm:p-8 rounded-xl backdrop-blur-sm border border-purple-500/30 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-purple-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full translate-x-1/2 translate-y-1/2" />
            
            {/* Ticket content */}
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-8">
                <Ticket className="text-purple-400 h-6 w-6 sm:h-8 sm:w-8" />
                <h3 className="text-xl sm:text-2xl font-bold title-font">Regular Pass</h3>
              </div>
              
              <div className="flex flex-col items-center gap-6 mb-8">
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 title-font">
                  ₹{ticketPrice}
                </div>
                <div className="w-full max-w-xs p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-purple-500/20">
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
                </div>
              </div>

              <div className="space-y-4 mb-8 text-sm text-gray-300">
                <p>• Access to all performances</p>
                <p>• Exclusive merchandise</p>
                <p>• Food & beverage voucher</p>
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
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-purple-400" />
                <a href="mailto:contact@rhythmnight.com" className="hover:text-purple-400 transition">
                  contact@rhythmnight.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-purple-400" />
                <a href="tel:+1234567890" className="hover:text-purple-400 transition">
                  +123 456 7890
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold title-font">Follow Us</h3>
              <div className="flex gap-6">
                <a href="#" className="hover:text-purple-400 transition">
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
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;