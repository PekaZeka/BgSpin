// src/components/BookingForm.tsx
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';

interface Booking {
  id: number;
  location: string;
  locationName: string;
  date: string;
  time: string;
  duration: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  timestamp: string;
}

const BookingForm: React.FC = () => {
  const [booking, setBooking] = useState({
    location: '',
    date: '',
    time: '',
    duration: '1',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const locations = [
    { value: 'bgspin1', name: 'BgSpin 1 - Борска 92f, Rakovica' },
    { value: 'bgspin2', name: 'BgSpin 2 - Dragoslava Srejovića 2' }
  ];

  const timeSlots = Array.from({length: 13}, (_, i) => {
    const hour = i + 9;
    return { value: `${hour}:00`, label: `${hour}:00` };
  });

  const saveBookingLocally = (bookingData: Booking) => {
    try {
      const existingBookings = JSON.parse(localStorage.getItem('bgspin_bookings') || '[]');
      existingBookings.push(bookingData);
      localStorage.setItem('bgspin_bookings', JSON.stringify(existingBookings));
      return true;
    } catch (error) {
      console.error('Error saving booking:', error);
      return false;
    }
  };

  const generateWhatsAppMessage = (booking: any, locationName: string) => {
    return `🏓 *NEW TABLE BOOKING REQUEST*

📍 *Location:* ${locationName}
📅 *Date:* ${booking.date}
🕐 *Time:* ${booking.time}
⏱️ *Duration:* ${booking.duration} hour(s)

👤 *Customer Details:*
- Name: ${booking.name}
- Phone: ${booking.phone}
- Email: ${booking.email}

📝 *Notes:* ${booking.notes || 'None'}

_Please confirm this booking by replying to this message._

---
*BgSpin & STK Spark Booking System*`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get location name
      const selectedLocation = locations.find(loc => loc.value === booking.location);
      const locationName = selectedLocation?.name || booking.location;

      // Create booking object
      const newBooking: Booking = {
        id: Date.now(),
        location: booking.location,
        locationName,
        date: booking.date,
        time: booking.time,
        duration: booking.duration,
        name: booking.name,
        phone: booking.phone,
        email: booking.email,
        notes: booking.notes,
        status: 'pending',
        timestamp: new Date().toISOString()
      };

      // Save booking locally
      const saved = saveBookingLocally(newBooking);
      
      if (!saved) {
        throw new Error('Failed to save booking locally');
      }

      // Generate WhatsApp message
      const whatsappMessage = generateWhatsAppMessage(booking, locationName);
      
      // WhatsApp number (remove + and spaces)
      const whatsappNumber = '381659076555';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');

      // Show success state
      setShowSuccess(true);

      // Reset form after delay
      setTimeout(() => {
        setBooking({
          location: '',
          date: '',
          time: '',
          duration: '1',
          name: '',
          phone: '',
          email: '',
          notes: ''
        });
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('There was an error processing your booking. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = booking.location && booking.date && booking.time && 
                     booking.name && booking.phone;

  if (showSuccess) {
    return (
      <section id="booking" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-forest-green-900 mb-4">
              Booking Request Sent!
            </h3>
            <p className="text-gray-600 mb-6">
              WhatsApp has opened with your booking details. Please send the message to complete your request.
              We'll confirm your booking shortly via WhatsApp.
            </p>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-sm text-emerald-700">
                💡 <strong>Tip:</strong> If WhatsApp didn't open automatically, 
                you can call us at <strong>+381 65 907 6555</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-forest-green-900 mb-6">
            Book a <span className="text-emerald-600">Table</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reserve your table tennis session at either of our locations. 
            We'll confirm your booking via WhatsApp within a few hours.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Location Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Location *
              </label>
              <select
                required
                value={booking.location}
                onChange={(e) => setBooking({...booking, location: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
              >
                <option value="">Select Location</option>
                {locations.map(location => (
                  <option key={location.value} value={location.value}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Date *
                </label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  max={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]} // 30 days from now
                  value={booking.date}
                  onChange={(e) => setBooking({...booking, date: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Time *
                </label>
                <select
                  required
                  value={booking.time}
                  onChange={(e) => setBooking({...booking, time: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                >
                  <option value="">Select Time</option>
                  {timeSlots.map(slot => (
                    <option key={slot.value} value={slot.value}>
                      {slot.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select
                  value={booking.duration}
                  onChange={(e) => setBooking({...booking, duration: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                >
                  <option value="1">1 hour</option>
                  <option value="1.5">1.5 hours</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={booking.name}
                  onChange={(e) => setBooking({...booking, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-1" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+381 60 123 4567"
                  value={booking.phone}
                  onChange={(e) => setBooking({...booking, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline h-4 w-4 mr-1" />
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={booking.email}
                onChange={(e) => setBooking({...booking, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline h-4 w-4 mr-1" />
                Special Requests (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Equipment rental, coaching request, group size, etc."
                value={booking.notes}
                onChange={(e) => setBooking({...booking, notes: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                isFormValid && !isSubmitting
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <MessageSquare className="h-5 w-5" />
                  <span>Send Booking Request via WhatsApp</span>
                </>
              )}
            </button>

            {/* Info Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-700">
                <strong>How it works:</strong> This will open WhatsApp with your booking details pre-filled. 
                Simply send the message and we'll confirm your booking within a few hours during business hours (9 AM - 10 PM).
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;