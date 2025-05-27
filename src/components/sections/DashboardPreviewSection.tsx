import React from 'react';
import { BarChart, PieChart, LineChart, Table, Clock, Map } from 'lucide-react';
import Button from '../common/Button';

const DashboardPreviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-700 to-primary-900 text-white overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
              Admin Dashboard
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Powerful Analytics at Your Fingertips
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Our comprehensive dashboard provides hospital administrators with real-time data 
              visualization, resource tracking, and predictive analytics to make informed decisions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: <BarChart size={20} />, title: "Resource Analytics" },
                { icon: <PieChart size={20} />, title: "Occupancy Reports" },
                { icon: <LineChart size={20} />, title: "Trend Forecasting" },
                { icon: <Table size={20} />, title: "Staff Allocation" },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 animate-[fadeIn_0.5s_ease-in-out_forwards]" 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 bg-white/10 rounded-md">
                    {feature.icon}
                  </div>
                  <span>{feature.title}</span>
                </div>
              ))}
            </div>

            <Button
              variant="secondary"
              size="lg"
              to="/admin"
              className="animate-[fadeIn_0.5s_ease-in-out_forwards]"
              style={{ animationDelay: '0.4s' }}
            >
              Explore Dashboard
            </Button>
          </div>

          {/* Dashboard Preview */}
          <div className="relative hidden lg:block">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-primary-700/80 via-transparent to-transparent z-10 pointer-events-none"
              style={{ width: '15%' }}
            ></div>
            
            <div className="relative z-0 bg-white rounded-lg shadow-2xl overflow-hidden transform translate-x-12 animate-[fadeIn_1s_ease-in-out_0.5s_both]">
              <div className="bg-neutral-800 text-white p-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Clock size={14} />
                  <span>Last updated: 5 minutes ago</span>
                </div>
              </div>
              
              <div className="bg-white p-4 flex items-center justify-between border-b">
                <h3 className="font-medium text-neutral-800">Central Hospital Dashboard</h3>
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs">Admin View</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-4 gap-4 mb-6">
                  {[
                    { label: "Total Beds", value: "450", color: "bg-neutral-100" },
                    { label: "Available", value: "122", color: "bg-green-100 text-green-700" },
                    { label: "Occupied", value: "328", color: "bg-primary-100 text-primary-700" },
                    { label: "Critical", value: "45", color: "bg-red-100 text-red-700" }
                  ].map((stat, index) => (
                    <div key={index} className={`p-4 ${stat.color} rounded-lg text-center`}>
                      <div className="text-sm text-neutral-500">{stat.label}</div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Chart Area */}
                <div className="h-48 bg-neutral-50 rounded-lg mb-6 p-4 flex items-center justify-center border border-neutral-100">
                  <div className="w-full h-full bg-neutral-100 rounded opacity-60"></div>
                </div>
                
                {/* Departments */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "Emergency", available: "8/20", color: "bg-red-50" },
                    { name: "ICU", available: "5/30", color: "bg-yellow-50" },
                    { name: "Pediatrics", available: "12/40", color: "bg-green-50" },
                    { name: "Surgery", available: "7/25", color: "bg-blue-50" },
                  ].map((dept, index) => (
                    <div key={index} className={`${dept.color} p-4 rounded-lg`}>
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{dept.name}</h4>
                        <span className="text-sm font-medium">{dept.available}</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full" 
                          style={{ width: `${(1 - parseInt(dept.available.split('/')[0]) / parseInt(dept.available.split('/')[1])) * 100}%` }}>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;