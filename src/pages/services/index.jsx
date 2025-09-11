import { Link } from "react-router-dom";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";
import servicesVideo from "../../assets/services-background.mp4";
import WebDesigner from "../../assets/web-designer.jpg";
import GraphicDesigner from "../../assets/graphic-designer.jpg";
import ContentCreator from "../../assets/content-creator.jpg";
import TeamCollaboration1 from "../../assets/team-collab-1.jpg";
import TeamCollaboration2 from "../../assets/team-collab-2.jpg";
import TeamCollaboration3 from "../../assets/team-collab-3.jpg";

import {
  Medal,
  Star,
  Clock,
  MessageSquare,
  Leaf,
  Zap,
  Heart,
  Users,
  ArrowRight,
  Target,
  Sprout,
  Cloud,
} from "lucide-react";
import ServiceImage from "../../assets/service-image.jpg"

const Services = () => {
  const services = [
    {
      title: "Sustainable Web Design",
      description:
        "Eco-friendly websites that minimize energy consumption while maximizing performance. Our designs use efficient coding practices, optimized media, and green hosting solutions to reduce your digital carbon footprint.",
      features: [
        "Energy-efficient coding practices",
        "Green hosting solutions",
        "Optimized media and assets",
        "SEO-friendly sustainable design",
        "Fast loading performance",
        "Mobile-responsive eco-design",
      ],
      price: "From $1,499",
      buttonText: "Start a project",
      image: WebDesigner,
      icon: <Cloud className="w-6 h-6" />,
      color: "amber",
    },
    {
      title: "App Development",
      description:
        "Sustainable mobile and web applications built with eco-conscious development practices. We create high-performance apps that minimize energy usage while delivering exceptional user experiences across all platforms.",
      features: [
        "Cross-platform development",
        "Energy-efficient coding",
        "Offline functionality",
        "Performance optimization",
        "Green hosting integration",
        "User-centric design",
      ],
      price: "From $2,199",
      buttonText: "Start a project",
      image: GraphicDesigner,
      icon: <Target className="w-6 h-6" />,
      color: "amber",
    },
    {
      title: "Plugins Development",
      description:
        "Custom WordPress and web plugins developed with sustainability in mind. We create lightweight, efficient plugins that enhance functionality while maintaining optimal performance and minimal environmental impact.",
      features: [
        "Custom WordPress plugins",
        "Lightweight code architecture",
        "Performance optimization",
        "Eco-friendly functionality",
        "SEO-compatible features",
        "Regular updates & maintenance",
      ],
      price: "From $899",
      buttonText: "Start a project",
      image: ContentCreator,
      icon: <Sprout className="w-6 h-6" />,
      color: "amber",
    },
  ];
  const stats = [
    { value: "5000+", label: "Trees Planted", color: "emerald" },
    { value: "120%", label: "Carbon Negative", color: "amber" },
    { value: "250+", label: "Projects Completed", color: "teal" },
  ];

  const values = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-600" />,
      label: "Carbon Neutral",
      bg: "emerald",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-600" />,
      label: "Energy Efficient",
      bg: "amber",
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      label: "Ethically Sourced",
      bg: "rose",
    },
    {
      icon: <Users className="w-6 h-6 text-teal-600" />,
      label: "Community Focused",
      bg: "teal",
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Assessment",
      description:
        "We analyze your needs and environmental impact goals to create a tailored strategy.",
      color: "emerald",
    },
    {
      number: "2",
      title: "Eco-Design",
      description:
        "Our team creates sustainable solutions using green technologies and practices.",
      color: "amber",
    },
    {
      number: "3",
      title: "Development",
      description:
        "We build with efficiency in mind, optimizing for minimal energy consumption.",
      color: "teal",
    },
    {
      number: "4",
      title: "Launch & Offset",
      description:
        "We deploy your solution and carbon-offset the entire project lifecycle.",
      color: "slate",
    },
  ];

  const features = [
    { icon: <Medal size={32} />, text: "8 Years Experience" },
    { icon: <Star size={32} />, text: "5 Star Rating" },
    { icon: <Clock size={32} />, text: "Quick Turnaround" },
    { icon: <MessageSquare size={32} />, text: "Dedicated Support" },
  ];

  return (
    <>
      <Header />

      {/* Hero Section with Video Background */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={ServiceImage}
        >
          <source src={servicesVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-emerald-900/70 z-10" />

        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/20 backdrop-blur-sm text-emerald-100 text-sm font-medium">
              <Leaf className="w-4 h-4 mr-2" />
              Sustainable Digital Solutions
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-light mb-6 leading-tight">
            Our
            <br />
            <span className="font-semibold italic text-amber-300">
              Services
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-light max-w-3xl mx-auto mb-10">
            Sustainable solutions that blend innovation with environmental
            responsibility
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-amber-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-amber-300 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-emerald-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Building a Greener Digital Future
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              At GoldTree, we believe technology and sustainability can thrive
              together. Our services are designed to help businesses reduce
              their environmental impact while achieving their digital goals
              through innovative, eco-conscious solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 bg-${item.bg}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-md`}
                >
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-slate-700">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="py-20 bg-gradient-to-br from-emerald-50/70 via-white to-amber-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Our Sustainable Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Each service is designed with environmental responsibility at its
              core, helping you make a positive impact while achieving your
              business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border border-slate-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute top-4 right-4 w-12 h-12 bg-${service.color}-500 rounded-lg flex items-center justify-center text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-slate-800 mb-3 flex items-center">
                      <span
                        className={`w-2 h-2 bg-${service.color}-500 rounded-full mr-2`}
                      ></span>
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`text-${service.color}-500 mr-2`}>
                            •
                          </span>
                          <span className="text-sm text-slate-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <div className="text-xl font-bold text-slate-800">
                      {service.price}
                    </div>
                    <button
                      className={`bg-gradient-to-r from-${service.color}-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold px-6 py-2 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      {service.buttonText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div
                  className={`text-5xl font-bold text-${stat.color}-400 mb-2`}
                >
                  {stat.value}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gradient-to-br from-white via-slate-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Our Sustainable Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How we deliver exceptional results while minimizing environmental
              impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 bg-${step.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-${step.color}-200`}
                >
                  <span className={`text-2xl font-bold text-${step.color}-700`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-br from-amber-50/50 via-white to-emerald-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
            Why Choose GoldTree
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
            We combine technical expertise with environmental responsibility to
            deliver solutions that make a difference
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 shadow-sm mb-4">
                  {item.icon}
                </div>
                <p className="text-base text-slate-700 font-medium">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg border border-slate-100">
            <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">
              Our Environmental Commitment
            </h3>
            <p className="text-slate-600 mb-8 text-lg">
              For every project we complete, we plant 10 trees and offset 200%
              of the carbon emissions generated during development. We're proud
              to be a carbon-negative company since 2021.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="p-4 bg-slate-50 rounded-xl">
                  <div
                    className={`text-3xl font-bold text-${stat.color}-600 mb-1`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center mt-12 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>

      {/* Team Collaboration Section */}
      <div className="py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="lg:flex items-center">
              <div className="lg:w-1/2 p-8 md:p-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
                  We Are Optimists Who Love to Work Together
                </h2>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  At GoldTree, collaboration drives our mission. Our diverse
                  team of designers, developers, and environmental experts unite
                  to craft innovative solutions for a sustainable future.
                </p>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  We thrive on shared passion and purpose, transforming ideas
                  into impactful realities through creativity and technology.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-black font-semibold px-6 py-3 rounded-full text-lg shadow-md hover:shadow-lg transition-all duration-300 w-fit"
                >
                  Meet Our Team
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>

              <div className="lg:w-1/2 p-8 md:p-12">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col gap-4 w-1/2">
                    <img
                      src={TeamCollaboration1}
                      alt="Team collaboration 1"
                      className="w-full h-48 object-cover rounded-xl shadow-md"
                    />
                    <img
                      src={TeamCollaboration2}
                      alt="Team collaboration 2"
                      className="w-full h-48 object-cover rounded-xl shadow-md "
                    />
                  </div>
                  <div className="w-1/2">
                    <img
                      src={TeamCollaboration3}
                      alt="Team collaboration 3"
                      className="w-full h-full object-cover rounded-xl shadow-md"
                    />
                  </div>
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

export default Services;
