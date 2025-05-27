import React, { useEffect, useState } from 'react';
import { Activity, Bed, Users, Clock, Calendar, Settings, LogOut, Menu, X } from 'lucide-react';
import Button from '../components/common/Button';

const AdminPortal: React.FC = () => {
  useEffect(() => {
    document.title = 'Admin Portal | MedBedTrack';
  }, []);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Mock data for dashboard
  const hospitalData = {
    name: "Central Medical Center",
    lastUpdated: "5 minutes ago",
    stats: {
      totalBeds: 450,
      availableBeds: 122,
      occupiedBeds: 328,
      criticalCare: 45,
      transferRequests: 8,
      averageStay: "3.2 days"
    },
    departments: [
      { name: "Emergency", available: 8, total: 20, color: "red" },
      { name: "ICU", available: 5, total: 30, color: "yellow" },
      { name: "Pediatrics", available: 12, total: 40, color: "green" },
      { name: "Surgery", available: 7, total: 25, color: "blue" },
      { name: "Cardiology", available: 10, total: 35, color: "purple" },
      { name: "Neurology", available: 6, total: 28, color: "pink" }
    ]
  };

  const sidebarItems = [
    { icon: <Activity size={20} />, label: "Dashboard", active: true },
    { icon: <Bed size={20} />, label: "Bed Management" },
    { icon: <Users size={20} />, label: "Patient Transfers" },
    { icon: <Clock size={20} />, label: "Resource Allocation" },
    { icon: <Calendar size={20} />, label: "Scheduling" },
    { icon: <Settings size={20} />, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-16 flex flex-col">
      {/* Top Navigation */}
      <div className="bg-white shadow-sm border-b border-neutral-200 py-4">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-md"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
            <h1 className="font-heading font-bold text-xl text-neutral-800">Admin Portal</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-neutral-200 rounded-full"></div>
              <div className="hidden md:block">
                <p className="text-sm font-medium">Dr. Sarah Johnson</p>
                <p className="text-xs text-neutral-500">Administrator</p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="hidden md:flex"
              icon={<LogOut size={16} />}
              to="/login"
            >
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-grow flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 bg-white border-r border-neutral-200 pt-6">
          <nav className="px-4">
            <div className="space-y-1">
              {sidebarItems.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`flex items-center gap-3 px-3 py-3 rounded-md transition-colors ${
                    item.active 
                      ? 'bg-primary-50 text-primary-700' 
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-200">
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-3 rounded-md text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </a>
            </div>
          </nav>
        </aside>

        {/* Mobile Sidebar */}
        {showMobileMenu && (
          <div className="fixed inset-0 bg-neutral-800/50 z-40 md:hidden" onClick={() => setShowMobileMenu(false)}>
            <div className="fixed top-16 left-0 bottom-0 w-64 bg-white overflow-y-auto" onClick={e => e.stopPropagation()}>
              <nav className="px-4 pt-6">
                <div className="space-y-1">
                  {sidebarItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`flex items-center gap-3 px-3 py-3 rounded-md transition-colors ${
                        item.active 
                          ? 'bg-primary-50 text-primary-700' 
                          : 'text-neutral-700 hover:bg-neutral-50'
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <a
                    href="#"
                    className="flex items-center gap-3 px-3 py-3 rounded-md text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-grow p-6">
          <div className="max-w-7xl mx-auto">
            {/* Hospital Info */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
              <div>
                <h2 className="font-heading font-bold text-2xl text-neutral-800 mb-1">
                  {hospitalData.name}
                </h2>
                <div className="flex items-center text-sm text-neutral-500">
                  <Clock size={14} className="mr-1" />
                  <span>Last updated {hospitalData.lastUpdated}</span>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Button 
                  variant="primary" 
                  size="md"
                >
                  Update Status
                </Button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {[
                { label: "Total Beds", value: hospitalData.stats.totalBeds, color: "bg-neutral-100" },
                { label: "Available", value: hospitalData.stats.availableBeds, color: "bg-green-100 text-green-700" },
                { label: "Occupied", value: hospitalData.stats.occupiedBeds, color: "bg-primary-100 text-primary-700" },
                { label: "Critical Care", value: hospitalData.stats.criticalCare, color: "bg-red-100 text-red-700" },
                { label: "Transfer Requests", value: hospitalData.stats.transferRequests, color: "bg-yellow-100 text-yellow-700" },
                { label: "Avg Stay", value: hospitalData.stats.averageStay, color: "bg-purple-100 text-purple-700" }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`${stat.color} p-4 rounded-lg shadow-sm animate-[fadeIn_0.5s_ease-in-out_forwards]`} 
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                  <div className="text-xl font-bold">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Departments */}
            <div className="bg-white rounded-lg shadow-card p-6 mb-8">
              <h3 className="font-heading font-semibold text-lg mb-6">Department Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hospitalData.departments.map((dept, index) => (
                  <div 
                    key={index}
                    className={`p-4 bg-${dept.color}-50 rounded-lg animate-[fadeIn_0.5s_ease-in-out_forwards]`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{dept.name}</h4>
                      <span className="text-sm font-medium">{dept.available}/{dept.total}</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2.5">
                      <div 
                        className={`bg-${dept.color}-500 h-2.5 rounded-full`}
                        style={{ width: `${(dept.available / dept.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Placeholder */}
            <div className="bg-white rounded-lg shadow-card p-6 mb-8">
              <h3 className="font-heading font-semibold text-lg mb-4">Occupancy Trends</h3>
              <div className="h-64 bg-neutral-50 rounded border border-neutral-200 flex items-center justify-center">
                <Activity size={32} className="text-neutral-300" />
                <span className="ml-2 text-neutral-500">Interactive charts will be displayed here</span>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-card p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading font-semibold text-lg">Recent Activity</h3>
                <Button variant="text">View All</Button>
              </div>
              
              <div className="space-y-4">
                {[
                  { time: "10:45 AM", action: "Patient transferred from ICU to Regular Care", user: "Dr. M. Smith" },
                  { time: "09:30 AM", action: "New bed allocation request", user: "Nurse J. Davis" },
                  { time: "08:15 AM", action: "Emergency beds status updated", user: "Admin K. Johnson" },
                  { time: "Yesterday", action: "Monthly resource report generated", user: "System" },
                  { time: "Yesterday", action: "5 new patient admissions processed", user: "Front Desk" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 hover:bg-neutral-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary-500 mt-2"></div>
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="font-medium">{activity.action}</span>
                        <span className="text-sm text-neutral-500">{activity.time}</span>
                      </div>
                      <span className="text-sm text-neutral-500">{activity.user}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminPortal;