import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, AlertCircle, Send, CheckCircle } from 'lucide-react';
import Button from '../components/common/Button';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | MedBedTrack';
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          organization: '',
          message: '',
        });
      }, 5000);
    }, 1000);
  };

  return (
    <>
      {/* Header */}
      <div className="pt-28 pb-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              Get in touch with our team to learn more about MedBedTrack or request a personalized demo.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-heading text-2xl font-bold mb-6">How can we help you?</h2>
              <p className="text-neutral-600 mb-8">
                Our team of healthcare technology experts is ready to answer your questions and provide information about our hospital resource management system.
              </p>
              
              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone Support</h3>
                    <p className="text-neutral-600 mb-1">Available Monday to Friday, 9am-5pm EST</p>
                    <a href="tel:+11234567890" className="text-primary-500 font-medium">+1 (123) 456-7890</a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email Support</h3>
                    <p className="text-neutral-600 mb-1">We'll respond within 24 hours</p>
                    <a href="mailto:support@medbedtrack.com" className="text-primary-500 font-medium">support@medbedtrack.com</a>
                  </div>
                </div>
                
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Headquarters</h3>
                    <p className="text-neutral-600">123 Healthcare Blvd, Medical District<br />New York, NY 10001</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-primary-50 rounded-lg border border-primary-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-primary-100 rounded-full text-primary-600 mt-0.5">
                    <AlertCircle size={18} />
                  </div>
                  <div>
                    <h3 className="font-medium text-primary-700 mb-1">Looking for a demo?</h3>
                    <p className="text-neutral-600 text-sm">
                      Our team offers personalized demonstrations for healthcare administrators. Fill out the form with your requirements, and we'll schedule a demo at your convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg border border-neutral-200 p-8">
                <h2 className="font-heading text-2xl font-bold mb-6">Get in Touch</h2>
                
                {formSubmitted ? (
                  <div className="p-6 bg-green-50 border border-green-100 rounded-lg text-center">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-2 text-green-700">Message Sent!</h3>
                    <p className="text-neutral-600">
                      Thank you for contacting us. Our team will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="space-y-5">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-neutral-700">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full px-4 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-700">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full px-4 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* Phone Field */}
                        <div>
                          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-neutral-700">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            className="block w-full px-4 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                          />
                        </div>

                        {/* Organization Field */}
                        <div>
                          <label htmlFor="organization" className="block mb-2 text-sm font-medium text-neutral-700">
                            Organization
                          </label>
                          <input
                            id="organization"
                            name="organization"
                            type="text"
                            value={formData.organization}
                            onChange={handleChange}
                            className="block w-full px-4 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-neutral-700">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="block w-full px-4 py-2.5 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-500"
                        ></textarea>
                      </div>

                      <div className="pt-4">
                        <Button 
                          variant="primary"
                          type="submit"
                          fullWidth={true}
                          icon={<Send size={18} />}
                        >
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-neutral-50 py-12">
        <div className="container-custom">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="h-96 bg-neutral-200 w-full flex items-center justify-center">
              <MapPin size={48} className="text-neutral-400" />
              <span className="ml-2 text-neutral-600 font-medium">Interactive Map Coming Soon</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;