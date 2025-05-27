import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  // Sample testimonial data
  const testimonials = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer, Central Hospital",
      avatar: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=100",
      quote: "MedBedTrack has revolutionized how we manage patient transfers and bed availability. The real-time updates have reduced our waiting times by 45% and improved patient satisfaction scores."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Healthcare Administrator, State Health Department",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100",
      quote: "As a government agency overseeing regional healthcare, this platform has given us unprecedented visibility into resource allocation. We can now respond to public health emergencies much more efficiently."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Director of Nursing, Memorial Hospital",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      quote: "The dashboard is intuitive and gives our nursing staff the information they need without complicated training. It's saved us countless hours of phone calls between departments."
    }
  ];
  
  return (
    <section className="bg-primary-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-3">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-neutral-600">
            See what healthcare administrators and professionals have to say about our hospital bed and resource management system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white rounded-lg p-6 shadow-card animate-[fadeIn_0.5s_ease-in-out_forwards]"
              style={{ animationDelay: `${(testimonial.id - 1) * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-neutral-700 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                  <div className="font-medium text-neutral-900">{testimonial.name}</div>
                  <div className="text-sm text-neutral-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-20">
          <h3 className="text-center font-heading font-semibold text-xl mb-12 text-neutral-800">
            Trusted by Leading Organizations
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              "National Health Association",
              "Healthcare Innovation Institute",
              "Medical Technology Alliance",
              "Public Health Department",
              "State Medical Board"
            ].map((org, index) => (
              <div 
                key={index} 
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-lg shadow-sm flex items-center justify-center mb-3">
                  <div className="w-10 h-10 bg-neutral-200 rounded-md"></div>
                </div>
                <div className="text-sm text-neutral-600 font-medium">{org}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;