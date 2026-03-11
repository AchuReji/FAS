import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Replace with your actual WhatsApp number (include country code, no + or spaces)
  const phoneNumber = "919876543210"; 
  const [message, setMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Encodes the message for a URL
    const url = `https://wa.me/${+919995396351}?text=${encodeURIComponent(message)}`; 
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[380px] overflow-hidden rounded-2xl bg-white shadow-2xl transition-all duration-300 ease-in-out border border-gray-100">
          
          {/* Header */}
          <div className="bg-[#075e54] p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-green-700 font-bold overflow-hidden">
                   {/* Replace with your Support/Brand image */}
                  <img src="https://image2url.com/r2/default/images/1773207932105-6c95c5e7-8766-4288-9634-6e7c640679b2.png" alt="Support" />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 border-2 border-[#075e54]"></span>
              </div>
              <div>
                <p className="text-sm font-semibold">Customer Support</p>
                <p className="text-xs opacity-80">Typically replies in minutes</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full">
              <X size={20} />
            </button>
          </div>

          {/* Chat Body (Simulated) */}
          <div className="h-64 bg-[#e5ddd5] p-4 overflow-y-auto flex flex-col gap-2 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%] text-sm text-gray-800">
              Hi there! 👋 <br /> How can we help you today?
            </div>
          </div>

          {/* Footer / Input */}
          <form onSubmit={handleSendMessage} className="p-3 bg-gray-50 flex items-center gap-2">
            <input 
              type="text" 
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 p-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-[#25d366]"
            />
            <button 
              type="submit" 
              className="bg-[#25d366] text-white p-2 rounded-full hover:bg-[#128c7e] transition-colors shadow-md"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-red-500' : 'bg-[#25d366]'
        } text-white`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} fill="currentColor" />}
        
        {/* Tooltip (Desktop only) */}
        {!isOpen && (
           <span className="absolute right-16 bg-white text-gray-700 px-3 py-1 rounded-lg shadow-md text-sm font-medium border border-gray-100 hidden sm:block whitespace-nowrap">
             Chat with us
           </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppChat;