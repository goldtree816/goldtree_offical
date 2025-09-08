import { Link } from "react-router-dom";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import AboutBackground from "../../assets/about_background.mp4";
import MountainAbout from "../../assets/mountain-about.jpg";
import WebDesigner from "../../assets/web-designer.jpg";
import TeamMeeting from "../../assets/team-meeting.jpg"; // You'll need to add this image

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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-transparent to-emerald-900/50 z-10" />

        {/* Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal mb-6 leading-tight">
            When you truly see
            <br />
            <span className="font-semibold italic text-amber-300 drop-shadow-md">
              nature
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-2xl mx-auto opacity-95">
            You begin to see the world with clearer eyes and a wiser soul
          </p>

          <Link
            to="/services"
            className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-gray-900 font-medium px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            Get Started
            <svg
              className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Main Content Section with Consistent Gradient Background */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              About GoldTree Company
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              GoldTree is a pioneering sustainable technology company that
              bridges the gap between cutting-edge innovation and environmental
              stewardship. Since 2015, we've been dedicated to creating
              solutions that benefit both businesses and the planet.
            </p>
          </div>

          {/* Introductory Quote */}
          <div className="text-center mb-16">
            <blockquote className="text-2xl sm:text-3xl font-serif font-light text-slate-700 leading-relaxed italic max-w-4xl mx-auto">
              We're a highly collaborative and supportive team coming together
              on every project to ensure our clients get the very best result.
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
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800">
                      Our Mission
                    </h2>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Build the best products that create the most value for our
                    customers, no matter the business. We inspire and implement
                    environmentally friendly solutions that stand the test of
                    time.
                  </p>
                </div>

                {/* Values */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800">
                      Our Values
                    </h2>
                  </div>
                  <ul className="text-lg text-slate-600 leading-relaxed font-light space-y-4">
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>
                        <strong>Sustainability:</strong> We prioritize
                        eco-friendly practices in all our operations
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>
                        <strong>Innovation:</strong> Continuously pushing
                        boundaries to deliver cutting-edge solutions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>
                        <strong>Integrity:</strong> Honest, transparent
                        relationships with clients and partners
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-500 mr-2">•</span>
                      <span>
                        <strong>Excellence:</strong> Striving for the highest
                        quality in everything we do
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-16 border border-white/20 p-8 md:p-12 lg:p-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-8 text-center">
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Sustainable Web Development
                </h3>
                <p className="text-slate-600">
                  We create high-performance, energy-efficient websites and
                  applications that minimize environmental impact while
                  maximizing user experience.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Green Technology Consulting
                </h3>
                <p className="text-slate-600">
                  Our experts help businesses implement eco-friendly technology
                  solutions that reduce carbon footprint and operational costs.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Eco-Conscious Branding
                </h3>
                <p className="text-slate-600">
                  We develop authentic brand identities that communicate your
                  commitment to sustainability and connect with environmentally
                  conscious consumers.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-emerald-700">
                  Renewable Energy Solutions
                </h3>
                <p className="text-slate-600">
                  Our team designs and implements solar, wind, and other
                  renewable energy systems tailored to your business needs.
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="text-center mb-16">
            <div className="max-w-3xl mx-auto">
              {/* Quote Icon */}
              <div className="mb-8 inline-block p-4 bg-gradient-to-br from-slate-200 to-emerald-100 rounded-full shadow-lg">
                <svg
                  className="w-12 h-12 text-slate-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.662 1.21a.537.537 0 01.488 0A.537.537 0 0111 1.978V7.5h1.79L8 14.25 4.21 7.5H6V1.978a.537.537 0 01.85-.767zM2.1 7.151a.537.537 0 01.262-.76L3.774 5.32a.537.537 0 01.498.06.537.537 0 01.187.556V7.5h1.782L2.1 13.85a.537.537 0 11-.964-.514z" />
                </svg>
              </div>

              {/* Quote */}
              <blockquote className="text-2xl sm:text-3xl font-serif font-light text-slate-700 mb-8 leading-relaxed italic">
                "GoldTree transformed our business with their sustainable web
                solutions. Not only did our digital presence improve
                dramatically, but we also reduced our energy consumption by
                40%."
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={WebDesigner}
                  alt="Sanam Chaudhary"
                  className="w-16 h-16 rounded-full object-cover shadow-lg border-4 border-white"
                />
                <div>
                  <div className="font-semibold text-slate-900 text-lg">
                    Sanam Chaudhary
                  </div>
                  <div className="text-slate-600 text-sm">
                    CEO, Tech Company
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Company Story Section */}
      <div className="py-20 bg-gradient-to-br from-amber-50 via-slate-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-8">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-12">
            Founded in 2015, GoldTree began as a small startup with a passion
            for connecting people to nature through technology. What started as
            a two-person operation has blossomed into a team of 50+ dedicated
            professionals who share a common vision: to prove that business
            success and environmental responsibility can grow together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-emerald-700 mb-2">
                2015
              </h3>
              <p className="text-slate-600">
                Company founded with a vision to merge technology and
                environmental awareness. Our first office was a converted garden
                shed!
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-amber-500 mb-2">
                2018
              </h3>
              <p className="text-slate-600">
                Expanded our services to include web solutions and eco-friendly
                designs. Won our first major sustainability award.
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-teal-600 mb-2">
                2023
              </h3>
              <p className="text-slate-600">
                Awarded for excellence in sustainable tech innovation and
                customer satisfaction. Reached carbon-negative operations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              The GoldTree team comprises passionate environmentalists, tech
              experts, and creative thinkers who believe in building a better
              future through sustainable innovation.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden mb-16 border border-white/20 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src={TeamMeeting} // You'll need to add this image
                  alt="GoldTree team meeting"
                  className="w-full h-96 object-cover rounded-2xl shadow-xl"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-serif font-bold text-slate-800">
                  Join Our Mission
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We're always looking for talented individuals who share our
                  passion for sustainability and technology. If you want to work
                  on meaningful projects that make a difference, we'd love to
                  hear from you.
                </p>
                <Link
                  to="/careers"
                  className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Open Positions
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
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
