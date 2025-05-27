import React from 'react';
import Button from '../common/Button';
import { ArrowRight, Check } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Background patterns */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="lg:w-2/3">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                Join the network of connected hospitals today
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Start optimizing your hospital's resources and improve patient care with our comprehensive management system.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                {[
                  "Reduce patient waiting times",
                  "Optimize resource allocation",
                  "Improve interdepartmental communication",
                  "Enhance emergency response",
                  "Generate detailed analytics reports",
                  "Seamless integration with existing systems"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check size={18} className="text-secondary-400" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/3 flex flex-col gap-4 w-full">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                <h3 className="font-heading font-bold text-xl mb-4 text-neutral-800">
                  Ready to get started?
                </h3>
                
                <div className="space-y-4">
                  <Button 
                    variant="primary" 
                    size="lg" 
                    to="/register" 
                    fullWidth={true}
                    icon={<ArrowRight size={18} />}
                  >
                    Register Your Hospital
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg" 
                    to="/contact" 
                    fullWidth={true}
                  >
                    Contact Sales
                  </Button>
                  
                  <div className="text-center text-sm text-neutral-500 mt-4">
                    No credit card required to start
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;