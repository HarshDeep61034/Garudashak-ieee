"use client"
import { Shield, Plane, Car, Ship, Star, Heart } from "lucide-react";
import Link from "next/link";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">Garudashak</span>
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
      <div id="home" className="relative pt-20">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80"
            alt="Security Background"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Securing Skies, Defending Horizons
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Garudashak: Your premier partner in advanced drone defense and comprehensive security solutions. 
            Protecting what matters most across air, land, and sea with cutting-edge technology.
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
      <div className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4 text-white text-center">
            <div>
              <div className="text-4xl font-bold">500+</div>
              <div className="mt-2">Successful Deployments</div>
            </div>
            <div>
              <div className="text-4xl font-bold">99.9%</div>
              <div className="mt-2">Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold">24/7</div>
              <div className="mt-2">Active Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold">50+</div>
              <div className="mt-2">Countries Served</div>
            </div>
          </div>
        </div>
      </div>

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
              icon={<Star className="h-12 w-12 text-blue-600" />}
              title="Trusted Expertise"
              description="Over 30 years of experience in providing top-notch security."
            />
            <FeatureCard
              icon={<Heart className="h-12 w-12 text-blue-600" />}
              title="Customer-Centric"
              description="Dedicated to meeting the unique needs of every client."
            />
            <FeatureCard
              icon={<Shield className="h-12 w-12 text-blue-600" />}
              title="Comprehensive Solutions"
              description="Advanced technology for air, land, and sea protection."
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
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80"
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
            <p className="mt-4 text-lg text-gray-500">
              Comprehensive protection across air, land, and sea
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <ServiceCard
              icon={<Plane className="h-12 w-12 text-blue-600" />}
              title="Air Defense"
              description="Comprehensive drone detection and countermeasure systems protecting against unauthorized aerial intrusions. Features AI-powered tracking and automated response protocols."
            />
            <ServiceCard
              icon={<Car className="h-12 w-12 text-blue-600" />}
              title="Land"
              description="Advanced CCTV capturing visual data, distinguishing movement patterns and questioning change"
            />
            <ServiceCard
              icon={<Ship className="h-12 w-12 text-blue-600" />}
              title="Sea"
              description="Greater precision in identifying and responding to potential threats both above and below sea-level"
            />
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Alex Johnson"
              feedback="Garudashak's systems are top-notch. I feel secure knowing my assets are protected 24/7."
            />
            <TestimonialCard
              name="Emily Smith"
              feedback="Highly professional team with excellent solutions tailored to my needs."
            />
            <TestimonialCard
              name="Michael Lee"
              feedback="Innovative technology and outstanding service. Highly recommend Garudashak!"
            />
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
                <span className="ml-2 text-xl font-bold">Garudashak</span>
              </div>
              <p className="mt-4 text-gray-400">
                Securing Skies, Defending Horizons
                <br />
                © 2025 Garudashak Ltd
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
                  <strong>Email:</strong> info@garudashak.com
                </li>
                <li className="text-gray-400">
                  <strong>Phone:</strong> +1 (555) 123-4567
                </li>
                <li className="text-gray-400">
                  <strong>24/7 Support:</strong> +1 (555) 999-9999
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

export default App;
