import React, { useEffect, useState } from 'react';
import { Search, MapPin, Filter, Clock, AlertCircle } from 'lucide-react';
import Card from '../components/common/Card';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';

const Hospitals: React.FC = () => {
  useEffect(() => {
    document.title = 'Hospital Network | MedBedTrack';
  }, []);

  // Sample hospital data
  const allHospitals = [
    {
      id: 1,
      name: "Central Medical Center",
      address: "123 Healthcare Ave, New York, NY",
      totalBeds: 120,
      availableBeds: 35,
      icuAvailable: 5,
      status: "Available",
      distance: "2.3 miles",
      specialties: ["Cardiology", "Neurology", "Pediatrics"],
      lastUpdated: "5 minutes ago"
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
      specialties: ["Orthopedics", "Oncology"],
      lastUpdated: "12 minutes ago"
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
      specialties: ["Trauma", "Research", "Geriatrics"],
      lastUpdated: "3 minutes ago"
    },
    {
      id: 4,
      name: "Riverside Health",
      address: "101 River Rd, Manhattan, NY",
      totalBeds: 150,
      availableBeds: 2,
      icuAvailable: 0,
      status: "Full",
      distance: "1.5 miles",
      specialties: ["Emergency", "Surgery", "Oncology"],
      lastUpdated: "7 minutes ago"
    },
    {
      id: 5,
      name: "Eastside Medical",
      address: "222 East Ave, Staten Island, NY",
      totalBeds: 95,
      availableBeds: 28,
      icuAvailable: 6,
      status: "Available",
      distance: "10.2 miles",
      specialties: ["Cardiology", "Pulmonology"],
      lastUpdated: "2 minutes ago"
    },
    {
      id: 6,
      name: "Metropolitan Hospital",
      address: "333 Metro Square, Bronx, NY",
      totalBeds: 175,
      availableBeds: 15,
      icuAvailable: 1,
      status: "Limited",
      distance: "8.5 miles",
      specialties: ["Neurology", "Orthopedics", "Pediatrics"],
      lastUpdated: "10 minutes ago"
    },
  ];

  const [hospitals, setHospitals] = useState(allHospitals);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  // Filter hospitals based on search and status filter
  useEffect(() => {
    let filteredHospitals = allHospitals;
    
    // Filter by search term
    if (searchTerm) {
      filteredHospitals = filteredHospitals.filter(hospital => 
        hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hospital.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    // Filter by status
    if (filterStatus !== 'All') {
      filteredHospitals = filteredHospitals.filter(hospital => 
        hospital.status === filterStatus
      );
    }
    
    setHospitals(filteredHospitals);
  }, [searchTerm, filterStatus]);

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
    <>
      {/* Header */}
      <div className="pt-28 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Hospital Network
            </h1>
            <p className="text-lg text-white/90 mb-0">
              Find and connect with hospitals in our network. View real-time bed availability and medical resources.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white py-6 border-b border-neutral-200 sticky top-0 z-20 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-grow relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-neutral-400" />
              </div>
              <input
                type="text"
                placeholder="Search by hospital name, location, or specialty..."
                className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white border border-neutral-300 rounded-md px-3 py-2">
                <Filter size={18} className="text-neutral-500" />
                <select 
                  className="bg-transparent border-none focus:ring-0 text-neutral-700 pr-8"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Available">Available</option>
                  <option value="Limited">Limited</option>
                  <option value="Full">Full</option>
                </select>
              </div>
              
              <Button variant="primary">
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hospital Listing */}
      <div className="bg-neutral-50 py-12 min-h-screen">
        <div className="container-custom">
          {hospitals.length === 0 ? (
            <div className="text-center py-16">
              <AlertCircle size={48} className="text-neutral-400 mx-auto mb-4" />
              <h3 className="font-heading font-medium text-xl mb-2">No hospitals found</h3>
              <p className="text-neutral-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="mb-6 flex justify-between items-center">
                <p className="text-neutral-600">Showing {hospitals.length} hospitals</p>
                <div className="flex gap-2 items-center text-sm text-neutral-500">
                  <Clock size={14} />
                  <span>Data updates every 5 minutes</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {hospitals.map((hospital) => (
                  <Card 
                    key={hospital.id} 
                    className="animate-[fadeIn_0.5s_ease-in-out_both]"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading font-bold text-lg text-neutral-800">
                        {hospital.name}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(hospital.status)}`}>
                        {hospital.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">
                      <MapPin size={16} />
                      <span>{hospital.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500 text-sm mb-5">
                      <Clock size={16} />
                      <span>Updated {hospital.lastUpdated}</span>
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

                    <div className="flex flex-wrap gap-2 mb-5">
                      {hospital.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-2 py-1 bg-neutral-100 rounded-md text-neutral-700 text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <Button 
                      variant="outline" 
                      fullWidth={true}
                    >
                      View Details
                    </Button>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Hospitals;