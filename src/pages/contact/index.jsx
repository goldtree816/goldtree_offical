import { useState } from "react";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import { MapPin, Phone, Mail, Clock, Search, Cloud, Send } from "lucide-react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import ContactBackground from "../../assets/contact-background.jpg";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const position = [27.65689, 85.337004];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${ContactBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-transparent to-emerald-900/60 z-10" />

        <div className="relative z-20 text-center text-white px-6 sm:px-10 lg:px-16 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight tracking-wide animate-fade-in">
            Contact{" "}
            <span className="font-semibold italic text-amber-300">Us</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90">
            Reach out for any inquiries or questions. We're here to help!
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="lg:w-1/2 bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 mb-6">
                Get in touch
              </h2>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Optimists who love to work together. Feel free to reach out.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {["Name", "Email", "Message"].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Your {field}
                    </label>
                    {field !== "Message" ? (
                      <input
                        type={field === "Email" ? "email" : "text"}
                        value={field === "Name" ? name : email}
                        onChange={(e) =>
                          field === "Name"
                            ? setName(e.target.value)
                            : setEmail(e.target.value)
                        }
                        placeholder={`Enter your ${field.toLowerCase()}`}
                        className="w-full px-5 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/80 backdrop-blur-sm transition-all duration-300"
                      />
                    ) : (
                      <textarea
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message here..."
                        className="w-full px-5 py-3 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/80 backdrop-blur-sm transition-all duration-300"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Send Message <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:w-1/2 space-y-8">
              {[
                { icon: MapPin, title: "Address", content: "Kathmandu, Nepal" },
                { icon: Phone, title: "Phone", content: "+977 9824877222" },
                {
                  icon: Mail,
                  title: "Email",
                  content: "goldtree@goldtree.com",
                },
                {
                  icon: Clock,
                  title: "Hours",
                  content: "Mon-Fri: 9am-5pm, Sat: 10am-4pm",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-5 transition-transform hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-r from-amber-200 to-orange-200 p-4 rounded-full mr-4 flex items-center justify-center">
                    <item.icon className="text-amber-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-800 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.content}</p>
                  </div>
                </div>
              ))}

              {/* Widgets */}
              <div className="flex flex-col gap-6">
                {/* Weather */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 shadow-md flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Cloud className="text-slate-600" size={28} />
                    <span className="font-bold text-xl text-slate-800">
                      25°C
                    </span>
                  </div>
                  <span className="text-slate-600">Partly cloudy</span>
                </div>

                {/* Quick Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-5 py-3 pr-12 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-white/80 backdrop-blur-sm transition-all duration-300"
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

      {/* Map */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl font-serif font-bold text-slate-800 mb-4">
            Find Us Here
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Visit our office at Kathmandu, Nepal.
          </p>

          <div className="rounded-2xl overflow-hidden shadow-lg h-96">
            <MapContainer
              center={position}
              zoom={15}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <strong>Nepal Cancer Hospital</strong>
                  <br />
                  Harisiddhi
                  <br />
                  Lalitpur, Nepal
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
