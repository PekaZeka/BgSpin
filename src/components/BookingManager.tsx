// Update src/components/BookingManager.tsx
import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, Phone, Mail, MessageSquare, Trash2, CheckCircle, XCircle, Send } from 'lucide-react';

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

const BookingManager: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all');

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    try {
      const savedBookings = JSON.parse(localStorage.getItem('bgspin_bookings') || '[]');
      // Sort by date and time (newest first)
      savedBookings.sort((a: Booking, b: Booking) => {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      });
      setBookings(savedBookings);
    } catch (error) {
      console.error('Error loading bookings:', error);
    }
  };

  const generateConfirmationMessage = (booking: Booking) => {
    return `✅ *BOOKING CONFIRMED*

Hello ${booking.name}! Your table tennis booking has been confirmed:

📍 *Location:* ${booking.locationName}
📅 *Date:* ${booking.date}
🕐 *Time:* ${booking.time}
⏱️ *Duration:* ${booking.duration} hour(s)

🏓 *What to bring:*
- Comfortable sports clothes
- Water bottle
- We provide rackets and balls

📍 *Address:*
${booking.location === 'bgspin1' ? 'Борска 92f, Rakovica' : 'Dragoslava Srejovića 2'}

📞 *Contact:* +381 65 907 6555

*See you on the court!* 🎾

---
BgSpin & STK Spark
_Reply to this message if you have any questions_`;
  };

  const generateCancellationMessage = (booking: Booking) => {
    return `❌ *BOOKING CANCELLED*

Hello ${booking.name}, unfortunately we had to cancel your booking:

📍 *Location:* ${booking.locationName}
📅 *Date:* ${booking.date}
🕐 *Time:* ${booking.time}

We apologize for any inconvenience. Please contact us to reschedule:
📞 +381 65 907 6555

---
BgSpin & STK Spark`;
  };

  const cleanPhoneNumber = (phone: string) => {
    // Remove all non-numeric characters except +
    let cleaned = phone.replace(/[^\d+]/g, '');
    
    // If it starts with +, keep it. If it starts with 0, replace with +381
    if (cleaned.startsWith('+')) {
      return cleaned.substring(1); // Remove + for WhatsApp link
    } else if (cleaned.startsWith('0')) {
      return '381' + cleaned.substring(1); // Replace 0 with 381
    } else if (cleaned.startsWith('381')) {
      return cleaned; // Already correct format
    } else {
      return '381' + cleaned; // Assume Serbian number
    }
  };

  const sendWhatsAppMessage = (booking: Booking, messageType: 'confirm' | 'cancel') => {
    const message = messageType === 'confirm' 
      ? generateConfirmationMessage(booking)
      : generateCancellationMessage(booking);
    
    const phoneNumber = cleanPhoneNumber(booking.phone);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const updateBookingStatus = (id: number, status: 'confirmed' | 'cancelled') => {
    const booking = bookings.find(b => b.id === id);
    if (!booking) return;

    // Update status first
    const updatedBookings = bookings.map(booking => 
      booking.id === id ? { ...booking, status } : booking
    );
    setBookings(updatedBookings);
    localStorage.setItem('bgspin_bookings', JSON.stringify(updatedBookings));

    // Ask if they want to send confirmation message
    const shouldSendMessage = confirm(
      `Booking status updated to ${status}. Do you want to send a ${status === 'confirmed' ? 'confirmation' : 'cancellation'} message to the customer via WhatsApp?`
    );

    if (shouldSendMessage) {
      sendWhatsAppMessage(booking, status === 'confirmed' ? 'confirm' : 'cancel');
    }
  };

  const deleteBooking = (id: number) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      const updatedBookings = bookings.filter(booking => booking.id !== id);
      setBookings(updatedBookings);
      localStorage.setItem('bgspin_bookings', JSON.stringify(updatedBookings));
    }
  };

  const exportBookings = () => {
    const csvContent = [
      ['Date', 'Time', 'Duration', 'Location', 'Name', 'Phone', 'Email', 'Notes', 'Status', 'Created'].join(','),
      ...bookings.map(booking => [
        booking.date,
        booking.time,
        booking.duration + 'h',
        booking.locationName,
        booking.name,
        booking.phone,
        booking.email,
        `"${booking.notes}"`,
        booking.status,
        new Date(booking.timestamp).toLocaleString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bgspin-bookings-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const filteredBookings = bookings.filter(booking => 
    filter === 'all' || booking.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'text-green-700 bg-green-100';
      case 'cancelled': return 'text-red-700 bg-red-100';
      default: return 'text-yellow-700 bg-yellow-100';
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-forest-green-900 mb-4">
            Booking Management
          </h1>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-emerald-600">{bookings.length}</div>
              <div className="text-gray-600">Total Bookings</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-yellow-600">
                {bookings.filter(b => b.status === 'pending').length}
              </div>
              <div className="text-gray-600">Pending</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-green-600">
                {bookings.filter(b => b.status === 'confirmed').length}
              </div>
              <div className="text-gray-600">Confirmed</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="text-2xl font-bold text-red-600">
                {bookings.filter(b => b.status === 'cancelled').length}
              </div>
              <div className="text-gray-600">Cancelled</div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
            >
              <option value="all">All Bookings</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            
            <button
              onClick={exportBookings}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
            >
              Export CSV
            </button>
            
            <button
              onClick={loadBookings}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Refresh
            </button>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="bg-white p-8 rounded-lg shadow text-center">
              <p className="text-gray-500">No bookings found for the selected filter.</p>
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                        {booking.status.toUpperCase()}
                      </span>
                      <span className="text-sm text-gray-500">
                        Created: {new Date(booking.timestamp).toLocaleString()}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{booking.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span>{booking.time} ({booking.duration}h)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{booking.location === 'bgspin1' ? 'BgSpin 1' : 'BgSpin 2'}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-500" />
                        <span className="font-medium">{booking.name}</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <a href={`tel:${booking.phone}`} className="text-emerald-600 hover:underline">
                          {booking.phone}
                        </a>
                      </div>
                      {booking.email && (
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-gray-500" />
                          <a href={`mailto:${booking.email}`} className="text-emerald-600 hover:underline">
                            {booking.email}
                          </a>
                        </div>
                      )}
                    </div>
                    
                    {booking.notes && (
                      <div className="mt-2">
                        <div className="flex items-start space-x-2">
                          <MessageSquare className="h-4 w-4 text-gray-500 mt-0.5" />
                          <span className="text-sm text-gray-600">{booking.notes}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 ml-4">
                    {/* Send Message Button (always available) */}
                    <button
                      onClick={() => sendWhatsAppMessage(booking, booking.status === 'confirmed' ? 'confirm' : 'cancel')}
                      className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg"
                      title="Send WhatsApp Message"
                    >
                      <Send className="h-5 w-5" />
                    </button>

                    {/* Status Change Buttons */}
                    {booking.status === 'pending' && (
                      <>
                        <button
                          onClick={() => updateBookingStatus(booking.id, 'confirmed')}
                          className="p-2 text-green-600 hover:bg-green-100 rounded-lg"
                          title="Confirm Booking + Send Message"
                        >
                          <CheckCircle className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => updateBookingStatus(booking.id, 'cancelled')}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg"
                          title="Cancel Booking + Send Message"
                        >
                          <XCircle className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    {/* Delete Button */}
                    <button
                      onClick={() => deleteBooking(booking.id)}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                      title="Delete Booking"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Message Templates Info */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">WhatsApp Message Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-blue-800 mb-2">✅ Confirmation Message includes:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Booking details (location, date, time)</li>
                <li>• What to bring instructions</li>
                <li>• Facility address</li>
                <li>• Contact information</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-800 mb-2">❌ Cancellation Message includes:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Cancellation notice</li>
                <li>• Booking details</li>
                <li>• Apology and reschedule offer</li>
                <li>• Contact information</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-blue-600 mt-4">
            <strong>Note:</strong> Clicking confirm/cancel will ask if you want to send a message. 
            The blue send button allows you to manually send messages anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookingManager;