'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minus } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! I\'m Piney, your PineCode assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');

    // Bot logic
    setTimeout(() => {
      const response = getBotResponse(userMessage);
      setMessages(prev => [...prev, { role: 'bot', text: response }]);
    }, 800);
  };

  const getBotResponse = (msg: string) => {
    const lowMsg = msg.toLowerCase();
    if (lowMsg.includes('service') || lowMsg.includes('build') || lowMsg.includes('offer')) {
      return 'We build custom Websites, CRM systems, POS/Billing software, Clinic Management tools, and Inventory systems! Which one would you like to know more about?';
    }
    if (lowMsg.includes('price') || lowMsg.includes('cost') || lowMsg.includes('how much')) {
      return 'Our Starter plans start at just ₹999/month. We also offer one-time licenses starting at ₹25,000. You can see more details in our Pricing section!';
    }
    if (lowMsg.includes('contact') || lowMsg.includes('call') || lowMsg.includes('whatsapp')) {
      return 'You can contact us at +91 94191 XXXXX or email us at pinecode47@gmail.com. We are also available on WhatsApp!';
    }
    if (lowMsg.includes('location') || lowMsg.includes('where')) {
      return 'We are based in beautiful Jammu, Jammu & Kashmir, India! We serve clients across the country.';
    }
    if (lowMsg.includes('who are you') || lowMsg.includes('about')) {
      return 'We are PineCode Solutions, a software development agency dedicated to building high-quality, custom tools for local businesses.';
    }
    return 'That\'s a great question! I\'m still learning, but you can reach out to our human team via the contact form for a detailed answer.';
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] h-[500px] bg-white border border-[var(--pine)]/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[var(--pine)] p-5 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <MessageCircle size={20} className="text-[var(--pine-glow)]" />
              </div>
              <div>
                <div className="font-bold text-sm">PineCode Assistant</div>
                <div className="flex items-center gap-1.5 text-[10px] text-[var(--pine-glow)] uppercase tracking-widest font-black">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--pine-glow)] animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[var(--cream)]/30">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[var(--pine)] text-white rounded-tr-none shadow-lg' 
                    : 'bg-white text-[var(--ink)] border border-[var(--pine)]/5 rounded-tl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-[var(--pine)]/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..." 
              className="flex-1 bg-[var(--cream)] border border-[var(--pine)]/10 rounded-full px-5 py-3 text-sm outline-none focus:border-[var(--pine)] transition-all"
            />
            <button 
              onClick={handleSend}
              className="w-11 h-11 bg-[var(--pine)] text-white rounded-full flex items-center justify-center hover:bg-[var(--pine-mid)] transition-all active:scale-95 shadow-lg shadow-[var(--pine)]/20 shrink-0"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 active:scale-90 relative group ${
          isOpen ? 'bg-white text-[var(--pine)] rotate-90' : 'bg-[var(--pine)] text-white hover:bg-[var(--pine-mid)]'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--gold)] text-[var(--ink)] text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white">
            1
          </span>
        )}
        
        {/* Tooltip */}
        {!isOpen && (
          <div className="absolute right-20 bg-white border border-[var(--pine)]/10 text-[var(--ink)] px-4 py-2 rounded-xl text-xs font-medium whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none">
            Have a question? Chat with us!
          </div>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
