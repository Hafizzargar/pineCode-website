'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import axios from 'axios';

interface ChatMessage {
  role: 'user' | 'model';
  parts: { text: string }[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayMessages, setDisplayMessages] = useState<{role: string, text: string}[]>([
    { role: 'bot', text: 'Hi! I\'m Piney, your PineCode AI assistant. How can I help you today?' }
  ]);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [displayMessages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    
    // Update local display
    setDisplayMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // Call our Next.js AI API route with history
      const response = await axios.post('/api/chat', { 
        message: userMessage,
        history: history
      });
      
      const botText = response.data.text;
      
      // Update display and history
      setDisplayMessages(prev => [...prev, { role: 'bot', text: botText }]);
      setHistory(prev => [
        ...prev, 
        { role: 'user', parts: [{ text: userMessage }] },
        { role: 'model', parts: [{ text: botText }] }
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setDisplayMessages(prev => [...prev, { role: 'bot', text: 'I\'m sorry, I\'m having trouble connecting to my brain right now. Please try again or use the contact form!' }]);
    } finally {
      setIsLoading(false);
    }
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
                <div className="font-bold text-sm">PineCode AI Assistant</div>
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
            {displayMessages.map((m, i) => (
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
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white text-[var(--ink)] border border-[var(--pine)]/5 rounded-2xl rounded-tl-none p-4 shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-[var(--pine-glow)] rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[var(--pine-glow)] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-[var(--pine-glow)] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-[var(--pine)]/10 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isLoading ? "Piney is thinking..." : "Ask me anything..."}
              disabled={isLoading}
              className="flex-1 bg-[var(--cream)] border border-[var(--pine)]/10 rounded-full px-5 py-3 text-sm outline-none focus:border-[var(--pine)] transition-all disabled:opacity-50"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="w-11 h-11 bg-[var(--pine)] text-white rounded-full flex items-center justify-center hover:bg-[var(--pine-mid)] transition-all active:scale-95 shadow-lg shadow-[var(--pine)]/20 shrink-0 disabled:opacity-50"
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
      </button>
    </div>
  );
};

export default Chatbot;
