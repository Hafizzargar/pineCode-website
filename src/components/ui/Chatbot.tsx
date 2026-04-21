'use client';
import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'model';
  content: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', content: "Hi! I'm Piney. How can I help you with your software or website today? 🌲" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history: messages }),
      });

      const data = await response.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'model', content: data.reply }]);
      } else {
        throw new Error('No reply');
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', content: "I'm having a little trouble connecting. Please try again or reach out via the contact form! 🌲" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[100] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[calc(100vw-2rem)] sm:w-[380px] bg-white rounded-[32px] shadow-2xl border border-[var(--pine)]/5 overflow-hidden flex flex-col h-[500px] md:h-[600px]"
          >
            {/* Header */}
            <div className="bg-[var(--pine)] p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[var(--pine-glow)] rounded-full flex items-center justify-center">
                  <Sparkles size={20} className="text-[var(--pine)]" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">Piney</div>
                  <div className="text-[var(--pine-glow)]/60 text-[10px] uppercase tracking-widest font-black">AI Assistant</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-[var(--cream)]/30">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-[var(--pine)] text-white rounded-tr-none' 
                      : 'bg-white border border-[var(--pine)]/5 text-[var(--ink)] shadow-sm rounded-tl-none'
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[var(--pine)]/5 p-3 rounded-2xl rounded-tl-none shadow-sm">
                    <Loader2 size={16} className="animate-spin text-[var(--pine)]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-[var(--pine)]/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-[var(--cream)] border-none rounded-xl px-4 py-3 text-sm focus:ring-1 focus:ring-[var(--pine)] outline-none"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="w-11 h-11 bg-[var(--pine)] text-white rounded-xl flex items-center justify-center hover:bg-[var(--pine-mid)] transition-all disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-[var(--pine)] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all group relative"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        {!isOpen && (
           <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--pine-glow)] text-[var(--pine)] text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
             1
           </span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
