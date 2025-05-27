import React from 'react';
import { 
  Activity, 
  Laptop, 
  RefreshCw, 
  ShieldCheck, 
  Clock, 
  Users, 
  ClipboardList,
  Building,
  BarChart3
} from 'lucide-react';
import Button from '../common/Button';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Activity className="h-6 w-6 text-primary-500" />,
      title: "Real-time Monitoring",
      description: "Monitor bed availability and medical resources across all connected hospitals in real-time.",
    },
    {
      icon: <Laptop className="h-6 w-6 text-primary-500" />,
      title: "Interactive Dashboard",
      description: "Comprehensive dashboard with visual analytics and reporting tools for healthcare administrators.",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-primary-500" />,
      title: "Automatic Updates",
      description: "System updates automatically every 5 minutes to ensure data accuracy.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary-500" />,
      title: "Secure Patient Data",
      description: "Enterprise-grade security protocols to ensure patient data privacy and HIPAA compliance.",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-500" />,
      title: "Quick Patient Transfer",
      description: "Streamlined process for transferring patients between facilities with electronic documentation.",
    },
    {
      icon: <Users className="h-6 w-6 text-primary-500" />,
      title: "Multi-level Access",
      description: "Role-based access control for hospital staff, administrators, and government officials.",
    },
    {
      icon: <ClipboardList className="h-6 w-6 text-primary-500" />,
      title: "Resource Allocation",
      description: "Smart algorithms for optimal allocation of medical resources based on demand and urgency.",
    },
    {
      icon: <Building className="h-6 w-6 text-primary-500" />,
      title: "Hospital Network",
      description: "Connect with over 250 hospitals nationwide for a comprehensive healthcare network.",
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-primary-500" />,
      title: "Advanced Analytics",
      description: "Data-driven insights to improve resource utilization and patient care quality.",
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
            Powerful Features
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Designed for Healthcare Efficiency
          </h2>
          <p className="text-neutral-600">
            Our comprehensive system provides all the tools needed for effective hospital resource management,
            from bed tracking to patient transfers and everything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-start animate-[fadeIn_0.5s_ease-in-out_forwards]" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button 
            variant="primary" 
            size="lg" 
            to="/features"
          >
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;