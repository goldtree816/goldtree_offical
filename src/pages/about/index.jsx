import { Link } from "react-router-dom";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import AboutBackground from "../../assets/about_background.mp4";
import MountainAbout from "../../assets/mountain-about.jpg";
import WebDesigner from "../../assets/web-designer.jpg";

const About = () => {
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
          <source src={AboutBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Gradient Overlay for Readability */}
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

      {/* Main Content Section with Consistent Gradient Background */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introductory Quote */}
          <div className="text-center mb-16">
            <blockquote className="text-2xl sm:text-3xl font-serif font-light text-slate-700 leading-relaxed italic max-w-4xl mx-auto">
              We're a highly collaborative and supportive team coming together on
              every project to ensure our clients get the very best result.
            </blockquote>
          </div>

          {/* Mission & Values Card */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-16 border border-white/20">
            <div className="p-8 md:p-12 lg:p-16">
              {/* Top Image */}
              <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={MountainAbout}
                  alt="Mountain landscape"
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Mission and Values Grid */}
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Mission */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800">Our Mission</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Build the best products that create the most value for our customers, no matter the business. We inspire and implement environmentally friendly solutions that stand the test of time.
                  </p>
                </div>

                {/* Values */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800">Our Values</h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    We strive to go above and beyond for our clients, no matter the challenge. We aim to deliver our very best work every single day across all our services, with integrity and passion.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="text-center mb-16">
            <div className="max-w-3xl mx-auto">
              {/* Quote Icon */}
              <div className="mb-8 inline-block p-4 bg-gradient-to-br from-slate-200 to-emerald-100 rounded-full shadow-lg">
                <svg className="w-12 h-12 text-slate-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.662 1.21a.537.537 0 01.488 0A.537.537 0 0111 1.978V7.5h1.79L8 14.25 4.21 7.5H6V1.978a.537.537 0 01.85-.767zM2.1 7.151a.537.537 0 01.262-.76L3.774 5.32a.537.537 0 01.498.06.537.537 0 01.187.556V7.5h1.782L2.1 13.85a.537.537 0 11-.964-.514z" />
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="text-2xl sm:text-3xl font-serif font-light text-slate-700 mb-8 leading-relaxed italic">
                "Original and with an innate understanding of their customer's needs, the team at Love Nature are always a pleasure to work with."
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={WebDesigner}
                  alt="Sanam Chaudhary"
                  className="w-16 h-16 rounded-full object-cover shadow-lg border-4 border-white"
                />
                <div>
                  <div className="font-semibold text-slate-900 text-lg">Sanam Chaudhary</div>
                  <div className="text-slate-600 text-sm">CEO, Tech Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;