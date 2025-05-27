import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, Users } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white pt-28 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Animated Background Pattern */}
      <motion.div 
        className="absolute inset-0 z-0 opacity-10"
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: 'linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor), linear-gradient(45deg, currentColor 25%, transparent 25%, transparent 75%, currentColor 75%, currentColor)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Text */}
          <div>
            <motion.h1 
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={itemVariants}
            >
              Smart Hospital<br />Resource Management
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl opacity-90 mb-8 max-w-lg"
              variants={itemVariants}
            >
              Real-time bed tracking and resource allocation system for hospitals, healthcare administrators, and government departments.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
            >
              <Button 
                variant="secondary" 
                size="lg"
                icon={<ArrowRight size={20} />}
                to="/hospitals"
                className="group"
              >
                Check Availability
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:bg-white/10 hover:text-white focus:ring-white/30"
                to="/features"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
              variants={itemVariants}
            >
              {[
                { icon: <Activity size={20} />, title: "12,000+", subtitle: "Beds Tracked" },
                { icon: <Users size={20} />, title: "250+", subtitle: "Hospitals" },
                { icon: <ShieldCheck size={20} />, title: "99.9%", subtitle: "Uptime" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-2 bg-white/10 rounded-lg">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="font-bold text-xl">{stat.title}</div>
                    <div className="text-sm opacity-80">{stat.subtitle}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Dashboard Preview */}
          <motion.div 
            className="relative hidden lg:block"
            variants={itemVariants}
          >
            <motion.div 
              className="relative bg-white rounded-lg shadow-2xl overflow-hidden"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <img 
                src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg" 
                alt="Hospital Dashboard Preview" 
                className="w-full object-cover rounded-t-lg"
                style={{ height: '240px' }}
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-neutral-800 font-bold">Central Hospital Dashboard</h3>
                    <p className="text-sm text-neutral-500">Real-time bed availability</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Live</span>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "ICU Beds", value: "12/20", color: "bg-yellow-100 text-yellow-700" },
                    { label: "Regular Beds", value: "45/60", color: "bg-green-100 text-green-700" },
                    { label: "Emergency", value: "8/15", color: "bg-red-100 text-red-700" },
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="p-3 bg-neutral-50 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-sm text-neutral-500">{item.label}</div>
                      <div className={`text-lg font-bold ${item.color} px-2 py-0.5 rounded mt-1 inline-block`}>{item.value}</div>
                    </motion.div>
                  ))}
                </div>
                <motion.div 
                  className="h-16 bg-neutral-100 rounded-lg mb-3"
                  animate={{ 
                    background: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <motion.div 
                  className="h-8 bg-neutral-100 rounded-lg"
                  animate={{ 
                    background: ['#f3f4f6', '#e5e7eb', '#f3f4f6'],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;