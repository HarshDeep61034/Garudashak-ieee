"use client"
import { Shield, Radio, Radar, Zap, AlertTriangle, Eye, Signal, Lock } from "lucide-react";
import { motion } from "framer-motion";
import "./animation.css"
function DroneDefense() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Radar Animation */}
      <div className="relative h-[600px] bg-gray-900">
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
                  Advanced radar and RF scanning technology capable of detecting drones up to 10km away
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
                  Multiple countermeasure options including RF jamming and capture nets
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

export default DroneDefense;
