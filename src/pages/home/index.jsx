import { Link } from "react-router-dom";
import background_video from "../../assets/background_video.mp4";
import WebDesigner from "../../assets/web-designer.jpg";
import GraphicDesigner from "../../assets/graphic-designer.jpg";
import ContentCreator from "../../assets/content-creator.jpg";
import MountainAbout from "../../assets/mountain-about.jpg"; // Assuming this is available for CTA section

const Hero = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      image: WebDesigner,
    },
    {
      title: "Graphic Design",
      description:
        "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      image: GraphicDesigner,
    },
    {
      title: "Content Creation",
      description:
        "Focus on how you can help and benefit your user. Use simple words so that you don't confuse people.",
      image: ContentCreator,
    },
  ];

  return (
    <>
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
          <source src={background_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-emerald-900/60 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light mb-8 leading-tight tracking-wide">
            We all love
            <br />
            <span className="font-semibold italic text-amber-300">nature</span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl mb-12 font-light leading-relaxed max-w-3xl mx-auto">
            Look deep into nature and you will
            <br />
            understand everything better.
          </p>

          <Link
            to="/services"
            className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold px-10 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-slate-800 mb-4 underline underline-offset-8 decoration-amber-400">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-[16/12]">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-serif font-medium text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block p-4 bg-gradient-to-br from-slate-200 to-emerald-100 rounded-full shadow-md">
            <svg className="w-12 h-12 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.662 1.21a.537.537 0 01.488 0A.537.537 0 0111 1.978V7.5h1.79L8 14.25 4.21 7.5H6V1.978a.537.537 0 01.85-.767zM2.1 7.151a.537.537 0 01.262-.76L3.774 5.32a.537.537 0 01.498.06.537.537 0 01.187.556V7.5h1.782L2.1 13.85a.537.537 0 11-.964-.514z" />
            </svg>
          </div>

          <blockquote className="text-2xl sm:text-3xl font-serif font-light text-slate-700 mb-8 leading-relaxed italic max-w-3xl mx-auto">
            "Original and with an innate understanding of their customer's needs, the team at Love Nature are always a pleasure to work with."
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <img
              src={WebDesigner}
              alt="Sanam Chaudhary"
              className="w-16 h-16 rounded-full object-cover shadow-lg border-4 border-white"
            />
            <div className="text-left">
              <div className="font-semibold text-slate-900 text-lg">Sanam Chaudhary</div>
              <div className="text-slate-600 text-sm">CEO, Tech Company</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8">
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wide mb-4">
                About Us
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-light text-slate-800 mb-6 leading-tight">
                Tell website visitors who you are and why they should choose
                your business.
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Because when a visitor first lands on your website, you're a
                stranger to them. They have to get to know you in order to want
                to read your blog posts, subscribe to your email newsletter, or
                buy what you're selling.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-transparent border-2 border-amber-400 text-amber-600 hover:bg-amber-50 font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-md"
              >
                Find Out More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="lg:pl-8">
              <img
                src={WebDesigner}
                alt="Person holding a fern leaf by a lake"
                className="w-full h-96 object-cover rounded-2xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative py-32 bg-gradient-to-br from-emerald-800 via-emerald-600 to-amber-600">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${MountainAbout})` }} />
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light mb-8">
            QUESTIONS?
          </h2>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you're curious about features, a free trial, or
            <br />
            even press, we're here to answer any questions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold px-10 py-4 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Let's Chat
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;