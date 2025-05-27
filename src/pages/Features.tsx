import React, { useEffect } from 'react';
import { CheckCircle, Server, BarChart3, Users, Activity, ShieldCheck } from 'lucide-react';
import Button from '../components/common/Button';

const Features: React.FC = () => {
  // Update page title
  useEffect(() => {
    document.title = 'Features | MedBedTrack';
  }, []);

  // Feature categories
  const categories = [
    {
      title: "Resource Monitoring",
      icon: <Server className="h-6 w-6 text-primary-500" />,
      features: [
        "Real-time bed availability tracking",
        "Medical equipment inventory management",
        "Medication and supply tracking",
        "Staff allocation and scheduling",
        "Emergency resource prioritization",
        "Department-specific resource views"
      ]
    },
    {
      title: "Analytics & Reporting",
      icon: <BarChart3 className="h-6 w-6 text-primary-500" />,
      features: [
        "Customizable dashboard analytics",
        "Trend analysis and forecasting",
        "Occupancy rate reports",
        "Resource utilization metrics",
        "Waiting time analytics",
        "Performance benchmarking"
      ]
    },
    {
      title: "Patient Management",
      icon: <Users className="h-6 w-6 text-primary-500" />,
      features: [
        "Secure patient transfer system",
        "Patient admission and discharge tracking",
        "Priority-based bed assignment",
        "Patient flow optimization",
        "Family notification system",
        "Treatment progress tracking"
      ]
    },
    {
      title: "System Integration",
      icon: <Activity className="h-6 w-6 text-primary-500" />,
      features: [
        "Integration with existing EMR/EHR systems",
        "API access for third-party applications",
        "Interoperability with government health databases",
        "Mobile application synchronization",
        "Legacy system compatibility",
        "Real-time notification system"
      ]
    },
    {
      title: "Security & Compliance",
      icon: <ShieldCheck className="h-6 w-6 text-primary-500" />,
      features: [
        "HIPAA compliance",
        "Role-based access control",
        "End-to-end data encryption",
        "Comprehensive audit logging",
        "Two-factor authentication",
        "Regular security updates"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="pt-28 pb-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for Healthcare Management
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Our comprehensive platform provides everything you need to manage hospital resources efficiently and improve patient care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                to="/register"
              >
                Get Started
              </Button>
              <Button 
                variant="outline"
                size="lg"
                to="/contact"
                className="text-white border-white hover:bg-white/10 hover:text-white focus:ring-white/30"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Categories */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
              Comprehensive Solution
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Everything You Need in One Platform
            </h2>
            <p className="text-neutral-600">
              Our system is designed with healthcare professionals in mind, providing the tools and insights needed for efficient resource management.
            </p>
          </div>

          <div className="space-y-16">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-[fadeIn_0.5s_ease-in-out_forwards]" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    {category.icon}
                  </div>
                  <h2 className="font-heading text-2xl font-bold">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3 p-5 rounded-lg border border-neutral-200 hover:border-primary-200 hover:bg-primary-50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-neutral-50">
        <div className="container-custom text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Ready to optimize your hospital's resource management?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of hospitals that have improved their operational efficiency and patient care with our system.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              variant="primary" 
              size="lg" 
              to="/register"
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              to="/hospitals"
            >
              View Hospital Network
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;