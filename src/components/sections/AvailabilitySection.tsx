import React from 'react';
import { Activity, Wind, Stethoscope } from 'lucide-react';
import Card from '../common/Card';
import Badge from '../common/Badge';

const AvailabilitySection: React.FC = () => {
  // Sample hospital data
  const hospitals = [
    {
      id: 1,
      name: "Central Medical Center",
      address: "123 Healthcare Ave, New York, NY",
      totalBeds: 120,
      availableBeds: 35,
      icuAvailable: 5,
      status: "Available",
      distance: "2.3 miles",
      specialties: ["Cardiology", "Neurology", "Pediatrics"]
    },
    {
      id: 2,
      name: "Memorial Hospital",
      address: "456 Wellness Blvd, Brooklyn, NY",
      totalBeds: 85,
      availableBeds: 12,
      icuAvailable: 2,
      status: "Limited",
      distance: "5.7 miles",
      specialties: ["Orthopedics", "Oncology"]
    },
    {
      id: 3,
      name: "University Medical",
      address: "789 Education Dr, Queens, NY",
      totalBeds: 200,
      availableBeds: 63,
      icuAvailable: 8,
      status: "Available",
      distance: "7.1 miles",
      specialties: ["Trauma", "Research", "Geriatrics"]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-100 text-green-700";
      case "Limited":
        return "bg-yellow-100 text-yellow-700";
      case "Full":
        return "bg-red-100 text-red-700";
      default:
        return "bg-neutral-100 text-neutral-700";
    }
  };

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge variant="primary" className="mb-3">Real-time Data</Badge>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Current Hospital Availability
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            View real-time bed availability across our network of hospitals. Data updates every 5 minutes to ensure accuracy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {hospitals.map((hospital) => (
            <Card 
              key={hospital.id} 
              className="animate-[fadeIn_0.5s_ease-in-out_both]"
              hover={true}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading font-bold text-lg text-neutral-800">
                  {hospital.name}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(hospital.status)}`}>
                  {hospital.status}
                </span>
              </div>
              <p className="text-neutral-500 text-sm mb-4">{hospital.address}</p>
              <div className="flex items-center gap-2 text-neutral-500 text-sm mb-5">
                <Wind size={16} />
                <span>{hospital.distance} away</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mb-5">
                <div className="p-3 bg-neutral-50 rounded-lg text-center">
                  <div className="text-sm text-neutral-500">Total</div>
                  <div className="font-bold text-lg">{hospital.totalBeds}</div>
                </div>
                <div className="p-3 bg-green-50 rounded-lg text-center">
                  <div className="text-sm text-neutral-500">Available</div>
                  <div className="font-bold text-lg text-green-600">{hospital.availableBeds}</div>
                </div>
                <div className="p-3 bg-primary-50 rounded-lg text-center">
                  <div className="text-sm text-neutral-500">ICU</div>
                  <div className="font-bold text-lg text-primary-600">{hospital.icuAvailable}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {hospital.specialties.map((specialty, idx) => (
                  <span key={idx} className="px-2 py-1 bg-neutral-100 rounded-md text-neutral-700 text-xs">
                    {specialty}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
          >
            View all hospitals 
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Import for ArrowRight icon
import { ArrowRight } from 'lucide-react';

export default AvailabilitySection;