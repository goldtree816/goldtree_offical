import { Link } from "react-router-dom";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import servicesVideo from "../../assets/services-background.mp4"; 
import WebDesigner from "../../assets/web-designer.jpg";
import GraphicDesigner from "../../assets/graphic-designer.jpg";
import ContentCreator from "../../assets/content-creator.jpg";

// ✅ Import Lucide icons
import { Medal, Star, Clock, MessageSquare } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Tell your visitors how your web design will improve their lives. Connect with the problem they're trying to solve and address any objections they might have.",
      price: "From $99",
      buttonText: "Start a project",
      image: WebDesigner,
    },
    {
      title: "Graphic Design",
      description:
        "Tell your visitors how your graphic design will improve their lives. Connect with the problem they're trying to solve and address any objections they might have.",
      price: "From $99",
      buttonText: "Start a project",
      image: GraphicDesigner,
    },
    {
      title: "Content Creation",
      description:
        "Tell your visitors how your content creation will improve their lives. Connect with the problem they're trying to solve and address any objections they might have.",
      price: "From $99",
      buttonText: "Start a project",
      image: ContentCreator,
    },
  ];

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
          <source src={servicesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-emerald-900/60 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-8 leading-tight tracking-wide">
            Our
            <br />
            <span className="font-semibold italic text-amber-300">Services</span>
          </h1>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-serif font-medium text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-amber-600">
                      {service.price}
                    </div>
                    <button className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold py-3 rounded-full text-sm shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      {service.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Love Nature Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-slate-800 mb-10">
            Why Love Nature
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your customers just learned what services you offer. Tell them why they should work with you or your team, for example, you could highlight your experience and positive client reviews.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Medal Icon */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-md">
                <Medal size={32} />
              </div>
              <p className="text-base text-slate-600 mt-4 text-center">8 Years Experience</p>
            </div>
            {/* Star Icon */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-md">
                <Star size={32} />
              </div>
              <p className="text-base text-slate-600 mt-4 text-center">5 Star Rating</p>
            </div>
            {/* Clock Icon */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-md">
                <Clock size={32} />
              </div>
              <p className="text-base text-slate-600 mt-4 text-center">Quick Turnaround</p>
            </div>
            {/* Message Icon */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-md">
                <MessageSquare size={32} />
              </div>
              <p className="text-base text-slate-600 mt-4 text-center">Dedicated Support</p>
            </div>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            The badges illustrate this. We also focus on key benefits they will get while using our services, namely quick turnaround times and dedicated support. You could also use them to show awards you won for your best work.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Learn More
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Services;
