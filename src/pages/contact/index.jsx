import { useState } from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import contactVideo from "../../assets/contact-background.mp4";
import { MapPin, Phone, Mail, Clock, Search, Cloud, Send } from "lucide-react";

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Import the Map components from react-leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Fix for default markers in react-leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Coordinates for Nepal Cancer Hospital, Harisiddhi, Lalitpur
  const position = [27.6392, 85.3483];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ name, email, message });
  };

  return (
    <>
      <Header />

      {/* Hero Section with Video Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={contactVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-emerald-900/60 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-8 leading-tight tracking-wide">
            Contact
            <br />
            <span className="font-semibold italic text-amber-300">Us</span>
          </h1>
        </div>
      </div>

      {/* Contact Content Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Column - Contact Form */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">
                Get in touch
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We are optimists who love to work together. Feel free to reach
                out to us with any questions or inquiries.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/80 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/80 backdrop-blur-sm"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold py-3 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>

            {/* Right Column - Contact Information */}
            <div className="lg:w-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-white/20">
              <h2 className="text-3xl font-serif font-bold text-slate-800 mb-8">
                Contact Information
              </h2>

              <div className="space-y-8 mb-10">
                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-lg">Address</h3>
                    <p className="text-slate-600">
                      Nepal Cancer Hospital, Harisiddhi<br />
                      Lalitpur, Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Phone className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-lg">Phone</h3>
                    <p className="text-slate-600">+977 1 1234567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-lg">Email</h3>
                    <p className="text-slate-600">contact@lovennature.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 p-3 rounded-full mr-4">
                    <Clock className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-lg">Hours</h3>
                    <p className="text-slate-600">Monday-Friday: 9am-5pm</p>
                    <p className="text-slate-600">Saturday: 10am-4pm</p>
                  </div>
                </div>
              </div>

              {/* Weather Widget */}
              <div className="bg-slate-100 rounded-2xl p-5 mb-8 border border-slate-200/50">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <Cloud className="text-slate-600 mr-3" size={28} />
                    <span className="text-slate-800 font-bold text-xl">25°C</span>
                  </div>
                  <span className="text-slate-600">Partly cloudy</span>
                </div>
                <div className="text-slate-500">6:43 PM</div>
              </div>

              {/* Quick Search */}
              <div>
                <h3 className="font-medium text-slate-800 text-lg mb-4">Quick search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-3 pr-12 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/80 backdrop-blur-sm"
                  />
                  <Search
                    className="absolute right-4 top-3.5 text-slate-400"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">
            Find Us Here
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Visit our office at Nepal Cancer Hospital, Harisiddhi, Lalitpur.
          </p>
          
          {/* Interactive Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <MapContainer 
              center={position} 
              zoom={15} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <div className="text-center">
                    <strong>Nepal Cancer Hospital</strong><br />
                    Harisiddhi<br />
                    Lalitpur, Nepal
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;