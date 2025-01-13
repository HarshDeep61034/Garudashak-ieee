"use client"
import { Shield, Plane, Car, Ship, Star, Heart, Briefcase, Code, Zap, ArrowsUpDown, UserCheck, Wallet, Radio, Radar, AlertTriangle, Eye, Signal, Lock, Brain } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./animation.css"

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Garudashak: Anti Drone System</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a 
                href="#home" 
                className="text-gray-700 hover:text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Home
              </a>
              <a 
                href="#features" 
                className="text-gray-700 hover:text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-700 hover:text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('testimonials').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Testimonials
              </a>
              <a 
                href="#services" 
                className="text-gray-700 hover:text-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Services
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div id="home" className="relative pt-20 h-[650px]">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.stockcake.com/public/d/4/c/d4ce73dd-e563-47cb-a466-8796a77b9617_large/sunset-drone-flight-stockcake.jpg"
            alt="Security Background"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Garudakshak
          </h1>
         
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          A trusted partner in drone defense and security. Our cutting-edge technology safeguards what matters most. The Garudakshak system leverages multiple sensors, phased array technology, and visual tracking to neutralize drone threats. Our comprehensive security solutions protect vital assets from various threats.
          </p>
          <div className="mt-10 space-x-4">
            <Link
              href="/simulation"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              View Simulation
            </Link>
            <Link
              href="/drone-defense"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Drone Defense
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section - New Addition */}
     

      {/* Features Section */}
      <div id="features" className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Garudashak?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Discover the reasons we stand out in the world of security
              solutions.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Briefcase className="h-12 w-12 text-blue-600" />}
              title="Compact and Portable"
              description="Traditional High-Power Microwave (HPM) technology is known for being big, heavy, and needing a large operating team. Its design is decades old. Garudakshak, on the other hand, uses solid-state, long-pulse HPM, which makes it easier to deploy and more effective for a wider range of uses."
            />
            <FeatureCard
              icon={<Code className="h-12 w-12 text-blue-600" />}
              title="Software Defined"
              description="Software-driven waveform optimization and precise shooting mechanisms in our technology improve range and efficiency without the need for new hardware. For every beat, Garudakshak gets smarter and better at what it does."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-blue-600" />}
              title="Quick Response"
              description="Large amounts of data and machine learning are utilized in order to identify potential dangers and provide recommendations for preventative actions before unmanned aerial systems (UAS) pose a hazard to humans, assets, or infrastructure."
            />
            <FeatureCard
              icon={<Zap className="h-12 w-12 text-blue-600" />}
              title="Scalable and Controllable"
              description="Easy to upgrade and maintain through modular design, featuring Line Replaceable Amplifier Modules (LRAMs) that allow quick system updates and scaling to meet different security needs."
            />
            <FeatureCard
              icon={<UserCheck className="h-12 w-12 text-blue-600" />}
              title="Human Safe"
              description="Garudakshak uses low voltages, doesn't give off ionizing radiation, and has safe zones that are controlled by software, which keeps people and friendly assets safe."
            />
            <FeatureCard
              icon={<Wallet className="h-12 w-12 text-blue-600" />}
              title="Cost Effective"
              description="Unlike conventional systems, which cost more than 3 million dollars per unit of anti drone system, Garudakshak offers a solution with an infinite capacity, low cost per kill, and ready for manufacturing."
            />
          </div>
        </div>
      </div>

      {/* Drone Defense Section - New Addition */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Advanced Drone Defense System
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our state-of-the-art drone defense system provides:
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Early detection and tracking of unauthorized drones",
                  "AI-powered threat assessment and classification",
                  "Automated countermeasure deployment",
                  "Real-time alerts and monitoring",
                  "Integration with existing security infrastructure",
                  "Customizable no-fly zones and geofencing",
                  "Advanced phased array system for precise targeting",
                  "Multi-modal detection including visual-based tracking system",
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                className="rounded-lg shadow-xl"
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJvbmUlMjBkZXRlY3Rpb258ZW58MHx8MHx8fDA%3D"
                alt="Drone Defense System"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Security Solutions
            </h2>
            
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <ServiceCard
              icon={<Radar className="h-12 w-12 text-blue-600" />}
              title="Hybrid Detection System "
              description="A hybrid detection system using phased array systems and visual-based methods. This combines radar and visual tracking technologies to enhance the accuracy of drone detection"
            />
            <ServiceCard
              icon={<Brain className="h-12 w-12 text-blue-600" />}
              title="AI powered"
              description="AI and machine learning techniques are employed to differentiate drones from other objects, improving the precision in identifying unauthorized drones."
            />
            <ServiceCard
              icon={<Zap className="h-12 w-12 text-blue-600" />}
              title="Modern Technology"
              description="Modern technologies like jamming, spoofing, high-power microwave (HPM), and other advanced electronic warfare methods are used to neutralize drones by disrupting their communication and control systems."
            />
          </div>
        </div>
      </div>

      {/* System Overview and Technical Sections */}
      <div className="bg-white">
        {/* Hero Section with Radar Animation */}
        <div className="relative h-[700px] bg-gray-900">
          <div className="absolute inset-0 overflow-hidden">
            <div className="radar-animation"></div>
          </div>
          <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-extrabold text-white"
            >
              Advanced Drone Defense System
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Cutting-edge technology for detecting, tracking, and neutralizing unauthorized drone threats
            </motion.p>
          </div>
        </div>

        {/* System Overview */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Comprehensive Defense System
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Multi-layered protection against aerial threats
              </p>
            </div>

            <div className="mt-20 grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-px bg-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4">
                    <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
                      <Radar className="h-8 w-8 text-blue-600" />
                    </div>
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-gray-900">Detection</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Advanced radar and RF scanning technology capable of detecting drones up to 5km away
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-px bg-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4">
                    <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
                      <Eye className="h-8 w-8 text-blue-600" />
                    </div>
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-gray-900">Classification</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    AI-powered threat assessment and drone classification system
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative flex justify-center">
                  <span className="bg-white px-4">
                    <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center">
                      <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-gray-900">Neutralization</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Multiple countermeasure options including RF jamming, spoofing and HPM techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Radar Display */}
        <div className="bg-gray-900 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-white">
                  Real-Time Threat Detection
                </h2>
                <p className="mt-4 text-lg text-gray-300">
                  Our system provides continuous monitoring with:
                </p>
                <ul className="mt-8 space-y-4">
                  {[
                    "360° coverage with multiple radar arrays",
                    "Machine learning-enhanced target identification",
                    "Automatic threat level assessment",
                    "Weather-resistant operation",
                    "Integration with existing security systems",
                    "Mobile app monitoring and alerts"
                  ].map((feature) => (
                    <li key={feature} className="flex items-center text-gray-300">
                      <Shield className="h-5 w-5 text-blue-400 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 lg:mt-0 relative">
                <div className="radar-display">
                  {/* Add animated radar display here */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-16">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SpecCard
                icon={<Radio className="h-8 w-8 text-blue-600" />}
                title="Detection Range"
                specs={[
                  "Up to 10km for standard drones",
                  "Frequency range: 2.4-5.8 GHz",
                  "Altitude coverage: up to 1000m"
                ]}
              />
              <SpecCard
                icon={<Signal className="h-8 w-8 text-blue-600" />}
                title="Response Time"
                specs={[
                  "Detection: < 0.5 seconds",
                  "Classification: < 2 seconds",
                  "Countermeasure deployment: < 3 seconds"
                ]}
              />
              <SpecCard
                icon={<Lock className="h-8 w-8 text-blue-600" />}
                title="Security Features"
                specs={[
                  "256-bit encryption",
                  "Redundant backup systems",
                  "Automatic failsafe protocols"
                ]}
              />
            </div>
          </div>
        </div>

        

        {/* Call to Action */}
        <div className="bg-blue-600">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Ready to secure your airspace?
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Contact us for a demonstration of our drone defense capabilities.
              </p>
              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center">
                <Shield className="h-8 w-8" />
                <span className="ml-2 text-xl font-bold">Garudakshak</span>
              </div>
              <p className="mt-4 text-gray-400">
                Securing Skies, Defending Horizons
                <br />
                © 2025 Garudashak
                <br />
                All rights reserved.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Solutions</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    Drone Defense Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    Perimeter Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    Maritime Protection
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-gray-300">
                    Threat Assessment
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-400">
                  <strong>Email:</strong> B21021@students.iitmandi.ac.in
                </li>
                <li className="text-gray-400">
                  <strong>Phone:</strong> +91 8209706419
                </li>
                <li className="text-gray-400">
                  <strong>24/7 Support:</strong> +91 8209706419
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-center">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-gray-500 text-center">{description}</p>
    </div>
  );
}

function TestimonialCard({ name, feedback }) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <p className="text-gray-600 italic">"{feedback}"</p>
      <div className="mt-4 text-right">
        <span className="font-bold text-gray-900">{name}</span>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-center">{icon}</div>
      <h3 className="mt-4 text-xl font-semibold text-center text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-gray-500 text-center">{description}</p>
      <div className="mt-4 text-center">
        <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
          Learn more →
        </a>
      </div>
    </div>
  );
}

function SpecCard({ icon, title, specs }) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-3 text-xl font-medium text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {specs.map((spec, index) => (
          <li key={index} className="text-gray-600">
            • {spec}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
