import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'SC "Slodes"',
      details: ['Борска 92f, Rakovica', 'Belgrade, Serbia'],
      phone: '060-418-99-11'
    },
    {
      icon: MapPin,
      title: 'BgSpin Center',
      details: ['Dragoslava Srejovića 2', 'Belgrade, Serbia'],
      phone: '061-305-6427'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest-green-900 mb-6">
            Get in <span className="text-emerald-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your table tennis journey? Contact us to book a table, 
            schedule training, or learn more about our programs and facilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-forest-green-900 mb-8">Visit Our Locations</h3>
              
              {/* Location Cards */}
              <div className="space-y-6">
                {contactInfo.map((location, index) => {
                  const IconComponent = location.icon;
                  return (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="bg-emerald-600 rounded-full p-3 flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-xl font-semibold text-forest-green-900 mb-2">
                            {location.title}
                          </h4>
                          {location.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-700">
                              {detail}
                            </p>
                          ))}
                          <div className="flex items-center space-x-2 mt-3">
                            <Phone className="h-4 w-4 text-emerald-600" />
                            <span className="text-emerald-600 font-medium">{location.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* General Contact Info */}
            <div className="bg-emerald-50 rounded-xl p-8">
              <h4 className="text-xl font-semibold text-forest-green-900 mb-6">General Information</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">bobi.fiser@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700">Daily: 9:00 - 22:00</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-emerald-200">
                <h5 className="font-semibold text-forest-green-900 mb-3">Table Tennis School Hours</h5>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• Wednesday: 19:00 - 20:00</div>
                  <div>• Saturday: 09:00 - 10:00</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-forest-green-900 mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="+381 60 123 4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="recreational">Recreational Play</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="table-tennis-school">Table Tennis School</option>
                      <option value="training-camp">Training Camp</option>
                      <option value="team-membership">Team Membership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="Tell us about your table tennis goals, preferred schedule, or any questions you have..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-3 text-green-700 bg-green-100 p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-3 text-red-700 bg-red-100 p-4 rounded-lg">
                    <AlertCircle className="h-5 w-5" />
                    <span>Failed to send message. Please try again or contact us directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;