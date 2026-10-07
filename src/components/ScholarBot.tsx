import React, { useState, useEffect, useRef } from 'react';
import { ACADEMIC_DATA } from '../data/academicData';
import {
  X,
  Send,
  Sparkles,
  Bot,
  User,
  RefreshCw,
} from 'lucide-react';

interface ScholarBotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const ScholarBot: React.FC<ScholarBotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: "Greetings! I am Alok Kumar's Academic Research & Candidate Screener AI. I can answer inquiries regarding his doctoral thesis at NIT Jalandhar, Springer journal publications, Ranked Set Sampling estimators, GATE AIR 81 rank, teaching assistantship, and collaboration availability. How may I assist you today?",
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const screeningPrompts = [
    { label: "PhD Thesis Topic", query: "What is Alok's PhD thesis topic at NIT Jalandhar?" },
    { label: "Springer Papers & DOIs", query: "List all of Alok's Springer journal publications" },
    { label: "What is Rational RSS?", query: "Explain his research on Rational Ranked Set Sampling and REERSS" },
    { label: "GATE AIR 81 & Academics", query: "What are his academic scores and GATE rank?" },
    { label: "Teaching Experience", query: "What courses has Alok taught as a Teaching Assistant?" },
    { label: "Research Collaborations", query: "How can I collaborate or contact Alok Kumar?" },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const findAnswer = (query: string): string => {
    const q = query.toLowerCase();

    for (const item of ACADEMIC_DATA.scholarBotFaq) {
      if (item.keywords.some((kw) => q.includes(kw))) {
        return item.answer;
      }
    }

    return `Alok Kumar is a Senior Research Fellow at NIT Jalandhar (GATE AIR 81) specializing in Ranked Set Sampling (RSS, REERSS), statistical inference, Springer journal publications, and uncertainty quantification in AI/ML. For direct research collaboration or detailed discussions, please email him at ${ACADEMIC_DATA.personal.email} or connect on LinkedIn at ${ACADEMIC_DATA.personal.linkedin}.`;
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = findAnswer(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: '1',
        sender: 'bot',
        text: "Chat cleared. Feel free to ask any question regarding Alok Kumar's academic research, Springer papers, teaching assistantship, or estimation theory.",
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-stone-950/60 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-[#FFFDF9] border border-[#E6DFD1] rounded-2xl shadow-elevated overflow-hidden flex flex-col my-6 max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-stone-900 text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-xs sm:text-sm text-white">
                  Scholar AI Assistant // Alok Kumar
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <p className="text-[11px] text-stone-400">
                Senior Research Fellow • NIT Jalandhar • GATE AIR 81
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleResetChat}
              className="p-1.5 rounded-md hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              title="Reset conversation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-stone-800 text-stone-400 hover:text-white transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="bg-[#FAF7F2] px-4 py-2.5 border-b border-[#E6DFD1] overflow-x-auto whitespace-nowrap">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[10px] font-mono font-bold text-stone-500 uppercase flex items-center gap-1 flex-shrink-0">
              <Sparkles className="w-3 h-3 text-blue-600" />
              Suggested:
            </span>
            {screeningPrompts.map((p) => (
              <button
                key={p.label}
                onClick={() => handleSendMessage(p.query)}
                className="px-2.5 py-1 rounded-full bg-[#FFFDF9] hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 border border-[#DDD5C4] text-[11px] font-medium text-stone-700 transition-colors flex-shrink-0 cursor-pointer"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Messages List */}
        <div className="flex-1 p-4 sm:p-5 overflow-y-auto space-y-4 min-h-[280px] max-h-[420px] bg-[#FFFDF9]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 ${
                msg.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              {msg.sender === 'bot' && (
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-stone-900 text-white rounded-tr-xs'
                    : 'bg-[#FAF7F2] text-stone-900 border border-[#E6DFD1] rounded-tl-xs'
                }`}
              >
                <div className="whitespace-pre-wrap">{msg.text}</div>
                <div
                  className={`text-[9px] font-mono mt-1 ${
                    msg.sender === 'user' ? 'text-stone-400 text-right' : 'text-stone-500'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-7 h-7 rounded-lg bg-stone-800 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
              <div className="bg-[#FAF7F2] border border-[#E6DFD1] rounded-2xl p-3 text-xs text-stone-500 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-[#FAF7F2] border-t border-[#E6DFD1] flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask about research, Springer papers, teaching, or estimators..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-[#DDD5C4] bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 text-stone-900"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputValue.trim()}
            className="p-2 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white transition-colors cursor-pointer"
            title="Send Message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
