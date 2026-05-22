import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Send, User, ArrowRight, Phone } from 'lucide-react';
import logo from '../../assets/newlogo.png';

const FAQS = [
  {
    id: 'greeting',
    intents: ['hi', 'hello', 'hey', 'hai', 'good morning', 'good afternoon', 'good evening', 'namaste'],
    answer: "Hi! I'm the SSB Assistant. I can answer quick questions about programs, fees, admissions, hostel, transport and more. Pick a topic below or type your question.",
  },
  {
    id: 'programs',
    intents: ['program', 'programs', 'course', 'courses', 'offer', 'what do you', 'bba', 'mba', 'pgdm', 'honours', 'honors', 'specialization', 'streams'],
    answer:
      "Sanskrithi School of Business offers three flagship programs:\n\n• BBA / BBA Honours — 3-year undergraduate program\n• MBA — 2-year Master's in Business Administration\n• PGDM — 2-year Post Graduate Diploma in Management\n\nAll programs include specializations in Marketing, Finance, HR, Operations and Analytics.",
    link: { label: 'See all courses', href: '/admissions/courses' },
  },
  {
    id: 'fees',
    intents: ['fee', 'fees', 'cost', 'how much', 'price', 'tuition', 'expensive', 'pay', 'amount'],
    answer:
      "Fee structure varies by program (BBA, MBA, PGDM) with optional Hostel and Transportation fees. For the latest fee amounts applicable to your program, please contact our admissions office — fees are reviewed annually.\n\nFor online payment, you'll find a UPI QR code and our Canara Bank account details on the Fees & Payment page.",
    link: { label: 'Fees & Payment', href: '/admissions/fees' },
  },
  {
    id: 'apply',
    intents: ['apply', 'application', 'admission procedure', 'how to apply', 'admission', 'admissions', 'enroll', 'register', 'join', 'admit'],
    answer:
      "Admissions happen in three phases: Application Screening → Written Test / GD → Personal Interview. Eligibility is a Bachelor's degree (min 50%) for MBA/PGDM, and 10+2 for BBA. AP ICET, CAT, XAT, MAT, CMAT and GMAT scores are accepted for MBA/PGDM.\n\nThe full procedure with timeline, seats and scholarships is on our Admission Procedure page.",
    link: { label: 'Admission Procedure', href: '/admissions/admission-procedure' },
  },
  {
    id: 'eligibility',
    intents: ['eligibility', 'eligible', 'qualification', 'qualifications', 'who can apply', 'criteria', 'minimum'],
    answer:
      "Eligibility depends on the program:\n\n• BBA / BBA Honours — 10+2 from a recognised board\n• MBA — Bachelor's degree (any discipline, min 50%; 45% for SC/ST/OBC) + valid CAT/XAT/MAT/CMAT/AP ICET score\n• PGDM — Graduation (min 50%) in any discipline; final year students may apply",
    link: { label: 'View full eligibility', href: '/admissions/admission-procedure#eligibility' },
  },
  {
    id: 'scholarship',
    intents: ['scholarship', 'scholarships', 'financial aid', 'discount', 'fee waiver', 'concession', 'sai prudent'],
    answer:
      "Yes — Sanskrithi offers several scholarships:\n\n• Sai Prudent Scholarship — up to 50% (merit-based)\n• Need-based Assistance — 25-30%\n• Sports Excellence — 20%\n• Academic Topper — 15%\n\nScholarship applications are processed along with admission. Submit required documents during the application process.",
    link: { label: 'See scholarships', href: '/admissions/admission-procedure#scholarships' },
  },
  {
    id: 'hostel',
    intents: ['hostel', 'accommodation', 'stay', 'rooms', 'boarding', 'mess', 'lodging', 'residence'],
    answer:
      "Yes, on-campus hostel accommodation is available for both boys and girls. Hostel fee is optional and charged only if you avail the facility. Annual accommodation, with safe and comfortable rooms.",
    link: { label: 'Hostel Facility', href: '/campus-life/hostel' },
  },
  {
    id: 'transport',
    intents: ['transport', 'transportation', 'bus', 'commute', 'pickup', 'route', 'dharmavaram', 'kadiri', 'gorantla'],
    answer:
      "Yes — our transportation covers the Dharmavaram → Kadiri → Gorantla route. Other routes can be arranged on request. Transportation fee is optional and charged only if availed.",
    link: { label: 'Transportation details', href: '/campus-life/transportation' },
  },
  {
    id: 'campus',
    intents: ['campus', 'where', 'location', 'address', 'puttaparthi', 'place', 'situated', 'located', 'directions'],
    answer:
      "Sanskrithi School of Business is located at Beedupalli, behind Sri Sathya Sai Super Speciality Hospital, Puttaparthi, Sri Sathya Sai District, Andhra Pradesh.",
    link: { label: 'About SSB Campus', href: '/campus-life/campus' },
  },
  {
    id: 'contact',
    intents: ['contact', 'phone', 'call', 'email', 'reach', 'talk', 'speak', 'number', 'mail'],
    answer:
      "You can reach us at:\n\n📞 +91 9100 974 544\n📧 admissions.director@sanskrithibschool.com\n\nOffice hours: Monday – Friday, 9:00 AM – 5:00 PM.\n\nIf you'd like a callback, tap the green 'Get a callback' button below.",
  },
  {
    id: 'placement',
    intents: ['placement', 'placements', 'job', 'jobs', 'career', 'recruiter', 'recruitment', 'company', 'companies', 'salary', 'package', 'hire'],
    answer:
      "We maintain a 95%+ placement rate with 200+ recruiters including Deloitte, Genpact, Accenture, Factset and more. The Placements team runs training programs, campus drives, internships and industry MOUs throughout the year.",
    link: { label: 'Placements & Careers', href: '/placements/team' },
  },
  {
    id: 'library',
    intents: ['library', 'books', 'reading', 'journals', 'research material'],
    answer:
      "Our library has a wide collection of books, journals and digital resources to support coursework and research, with dedicated reading areas and digital access.",
    link: { label: 'Library', href: '/campus-life/library' },
  },
  {
    id: 'sports',
    intents: ['sport', 'sports', 'games', 'gym', 'fitness', 'athletic', 'play'],
    answer:
      "Yes — we have indoor and outdoor sports facilities, a fitness area, and regular inter-college tournaments. Sports excellence is one of our scholarship categories too.",
    link: { label: 'Sports Facility', href: '/campus-life/sports' },
  },
  {
    id: 'exams',
    intents: ['exam', 'exams', 'examination', 'icet', 'cat', 'xat', 'mat', 'cmat', 'gmat', 'entrance', 'test', 'results'],
    answer:
      "For MBA/PGDM, we accept AP ICET (state level) as well as national exams — CAT, XAT, GMAT, MAT, CMAT. The Examination Section on our site lists results, evaluation procedure, calendar and downloads.",
    link: { label: 'Examination Section', href: '/examinations' },
  },
  {
    id: 'calendar',
    intents: ['when', 'dates', 'start', 'begin', 'starts', 'begins', 'academic calendar', 'session', 'schedule', 'timeline'],
    answer:
      "The 2026 admission cycle: Applications open Dec 2025 → AP ICET registration Mar 2026 → Entrance exams May 2026 → Results & ranks Jun 2026 → Selection & counselling Jul 2026 → Classes begin Sep 2026.",
    link: { label: 'Academic Calendar', href: '/admissions/calendar' },
  },
  {
    id: 'about',
    intents: ['about', 'history', 'founded', 'established', 'who are you', 'sanskrithi', 'institution'],
    answer:
      "Sanskrithi School of Business was established in 2008 and is part of the Sanskrithi Group of Institutions, founded by B. Vijay Reddy. We are NAAC accredited and an Autonomous Institution with 15+ years of academic excellence and a 1200+ alumni network.",
    link: { label: 'About SSB', href: '/about/overview' },
  },
  {
    id: 'chairman',
    intents: ['chairman', 'chairperson', 'founder', 'vijay reddy', 'b vijay'],
    answer:
      "B. Vijay Reddy is the Founder & Chairman of Sanskrithi Group of Institutions. His vision is to bridge academic excellence with industry relevance and shape ethical business leaders.",
    link: { label: 'About Chairman', href: '/about/chairperson' },
  },
  {
    id: 'accreditation',
    intents: ['naac', 'accreditation', 'autonomous', 'recognised', 'ranking', 'aicte', 'ugc'],
    answer:
      "Sanskrithi School of Business is NAAC Accredited and an Autonomous Institution. NAAC documents, mandatory disclosures and self-study reports are available on our NAAC page.",
    link: { label: 'NAAC & Disclosures', href: '/naac' },
  },
  {
    id: 'thanks',
    intents: ['thanks', 'thank you', 'thx', 'ty', 'thank'],
    answer: "You're welcome! Is there anything else I can help you with?",
  },
  {
    id: 'bye',
    intents: ['bye', 'goodbye', 'see you', 'cya'],
    answer: "Goodbye! Feel free to come back anytime. You can also reach our admissions team at +91 9100 974 544.",
  },
];

const QUICK_REPLIES = [
  { label: '🎓 Programs offered', faqId: 'programs' },
  { label: '💰 Fees', faqId: 'fees' },
  { label: '📋 How do I apply?', faqId: 'apply' },
  { label: '🏠 Hostel & Transport', faqId: 'hostel' },
  { label: '🏆 Scholarships', faqId: 'scholarship' },
  { label: '📍 Where is the campus?', faqId: 'campus' },
];

function findFaqById(id) {
  return FAQS.find((f) => f.id === id);
}

function matchFaq(text) {
  const lower = ` ${text.toLowerCase().replace(/[^\w\s]/g, ' ').replace(/\s+/g, ' ').trim()} `;
  let best = null;
  let bestScore = 0;
  for (const faq of FAQS) {
    let score = 0;
    for (const intent of faq.intents) {
      if (lower.includes(` ${intent} `)) {
        score += intent.split(' ').length * 2;
      } else if (lower.includes(intent)) {
        score += intent.split(' ').length;
      }
    }
    if (score > bestScore) {
      best = faq;
      bestScore = score;
    }
  }
  return bestScore > 0 ? best : null;
}

const FALLBACK_ANSWER =
  "I'm not sure I have the answer to that. You can reach our admissions team directly — they'll help right away.\n\n📞 +91 9100 974 544\n📧 admissions.director@sanskrithibschool.com\n\nTap 'Get a callback' below and we'll call you.";

function logUnanswered(question) {
  try {
    const key = 'ssb_chat_unanswered';
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push({ q: question, ts: new Date().toISOString() });
    localStorage.setItem(key, JSON.stringify(existing.slice(-50)));
  } catch {
    // ignore
  }
}

async function submitCallbackToInquiry(data) {
  const formData = new URLSearchParams({
    'form-name': 'inquiry',
    inquiryType: 'chat-callback',
    name: data.name,
    phone: data.phone,
    message: data.query,
    subject: 'Chatbot callback request',
  });
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log('[chat-callback] would submit to inquiry form:', Object.fromEntries(formData));
    await new Promise((r) => setTimeout(r, 500));
    return;
  }
  const res = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: formData.toString(),
  });
  if (!res.ok) throw new Error(`Submit failed: ${res.status}`);
}

function BotMessage({ text, link }) {
  return (
    <div className="flex items-start gap-2 mb-3">
      <div className="w-7 h-7 rounded-full bg-[var(--brand)] flex items-center justify-center flex-shrink-0 mt-0.5">
        <img src={logo} alt="SSB" className="w-5 h-5 object-contain" />
      </div>
      <div className="max-w-[80%]">
        <div
          className="text-sm px-3.5 py-2.5 rounded-2xl rounded-tl-md leading-relaxed whitespace-pre-line"
          style={{ background: '#1F2530', color: '#E6EDF3' }}
        >
          {text}
        </div>
        {link && (
          <Link
            to={link.href}
            className="inline-flex items-center gap-1 mt-1.5 ml-1 text-xs font-semibold hover:opacity-80 transition-opacity"
            style={{ color: '#F9843D' }}
          >
            {link.label}
            <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </div>
  );
}

function UserMessage({ text }) {
  return (
    <div className="flex items-start gap-2 mb-3 justify-end">
      <div
        className="max-w-[80%] text-sm px-3.5 py-2.5 rounded-2xl rounded-tr-md leading-relaxed whitespace-pre-line"
        style={{ background: '#8E3D19', color: '#FFFFFF' }}
      >
        {text}
      </div>
      <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: '#2A2F38' }}>
        <User className="w-4 h-4" style={{ color: '#E6EDF3' }} />
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div className="flex items-start gap-2 mb-3">
      <div className="w-7 h-7 rounded-full bg-[var(--brand)] flex items-center justify-center flex-shrink-0 mt-0.5">
        <img src={logo} alt="SSB" className="w-5 h-5 object-contain" />
      </div>
      <div
        className="px-4 py-3 rounded-2xl rounded-tl-md flex gap-1"
        style={{ background: '#1F2530' }}
      >
        <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#9AA4B2', animationDelay: '0ms' }} />
        <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#9AA4B2', animationDelay: '150ms' }} />
        <span className="w-1.5 h-1.5 rounded-full animate-bounce" style={{ background: '#9AA4B2', animationDelay: '300ms' }} />
      </div>
    </div>
  );
}

const CALLBACK_STEP_PROMPTS = {
  name: "Sure! I'll set up a callback for you. What's your name?",
  phone: (firstName) => `Nice to meet you, ${firstName}! What's the best phone number to reach you?`,
  query: "Great! Lastly, what would you like to discuss? (e.g., admission details, fees, scholarships, hostel)",
};

const CALLBACK_PLACEHOLDER = {
  name: 'Type your name…',
  phone: 'Type your 10-digit phone number…',
  query: 'Type your question…',
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: findFaqById('greeting').answer },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [callbackStep, setCallbackStep] = useState(null);
  const [callbackData, setCallbackData] = useState({ name: '', phone: '', query: '' });
  const [callbackSent, setCallbackSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing, open]);

  useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open, callbackStep]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && open) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const pushBot = (text, link, delay = 450) => {
    setTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text, link }]);
      setTyping(false);
    }, delay);
  };

  const respondTo = (question) => {
    const faq = matchFaq(question);
    if (faq) {
      pushBot(faq.answer, faq.link);
    } else {
      logUnanswered(question);
      pushBot(FALLBACK_ANSWER);
    }
  };

  const startCallbackFlow = () => {
    setCallbackData({ name: '', phone: '', query: '' });
    setCallbackStep('name');
    pushBot(CALLBACK_STEP_PROMPTS.name);
  };

  const handleCallbackStep = (text) => {
    if (callbackStep === 'name') {
      const name = text.trim();
      if (name.length < 2) {
        pushBot("Could you share your name? (At least 2 characters)");
        return;
      }
      setCallbackData((prev) => ({ ...prev, name }));
      setCallbackStep('phone');
      const firstName = name.split(' ')[0];
      pushBot(CALLBACK_STEP_PROMPTS.phone(firstName));
      return;
    }
    if (callbackStep === 'phone') {
      const digits = text.replace(/\D/g, '');
      if (digits.length < 10) {
        pushBot("That doesn't look like a valid phone number. Could you share a 10-digit mobile number?");
        return;
      }
      setCallbackData((prev) => ({ ...prev, phone: text.trim() }));
      setCallbackStep('query');
      pushBot(CALLBACK_STEP_PROMPTS.query);
      return;
    }
    if (callbackStep === 'query') {
      const query = text.trim();
      if (query.length < 3) {
        pushBot("Could you describe your question briefly? (At least a few words)");
        return;
      }
      const finalData = { ...callbackData, query };
      setCallbackData(finalData);
      setCallbackStep('submitting');
      setSubmitting(true);
      setTyping(true);
      submitCallbackToInquiry(finalData)
        .then(() => {
          setTyping(false);
          const firstName = finalData.name.split(' ')[0];
          setMessages((prev) => [
            ...prev,
            {
              role: 'bot',
              text: `Thanks, ${firstName}! ✅\n\nI've shared your details with our admissions team. They'll call you at ${finalData.phone} shortly.\n\nIn the meantime, feel free to ask me anything else.`,
            },
          ]);
          setCallbackStep(null);
          setCallbackSent(true);
        })
        .catch(() => {
          setTyping(false);
          setMessages((prev) => [
            ...prev,
            {
              role: 'bot',
              text: "Hmm, I couldn't submit your details right now. Please call us directly at +91 9100 974 544 or email admissions.director@sanskrithibschool.com — sorry about that!",
            },
          ]);
          setCallbackStep(null);
        })
        .finally(() => setSubmitting(false));
    }
  };

  const handleSend = (e) => {
    e?.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || submitting) return;
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    if (callbackStep) {
      handleCallbackStep(trimmed);
    } else {
      respondTo(trimmed);
    }
  };

  const handleQuickReply = (faqId) => {
    if (callbackStep) return;
    const faq = findFaqById(faqId);
    if (!faq) return;
    setMessages((prev) => [
      ...prev,
      { role: 'user', text: faq.intents[0].replace(/^./, (c) => c.toUpperCase()) },
    ]);
    pushBot(faq.answer, faq.link, 400);
  };

  const showQuickReplies = messages.length === 1 && messages[0].role === 'bot';
  const showCallbackCta = !callbackStep && !callbackSent;
  const inputPlaceholder = callbackStep && CALLBACK_PLACEHOLDER[callbackStep]
    ? CALLBACK_PLACEHOLDER[callbackStep]
    : 'Type your question…';
  const inputType = callbackStep === 'phone' ? 'tel' : 'text';

  return (
    <>
      {/* Floating chat button */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[var(--brand)] hover:bg-[var(--brand-dark)] text-white shadow-lg flex items-center justify-center transition-all hover:scale-105"
          style={{ boxShadow: '0 12px 28px -8px rgba(142,61,25,0.5)' }}
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2" style={{ borderColor: '#0F1419' }} />
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed inset-x-0 bottom-0 sm:inset-auto sm:bottom-6 sm:right-6 z-50 w-full sm:w-[380px] h-[85vh] sm:h-[600px] sm:max-h-[80vh] flex flex-col rounded-t-2xl sm:rounded-2xl overflow-hidden"
          style={{
            background: '#15191F',
            border: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 25px 60px -12px rgba(0,0,0,0.65)',
          }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-3 text-white"
            style={{
              background: 'linear-gradient(135deg, #8E3D19 0%, #F9843D 100%)',
            }}
          >
            <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
              <img src={logo} alt="SSB" className="w-6 h-6 object-contain" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold leading-tight">SSB Assistant</div>
              <div className="text-[11px] text-white/85 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                Online — usually replies instantly
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="p-1.5 rounded-md hover:bg-white/15 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4" style={{ background: '#0F1419' }}>
            {messages.map((m, i) =>
              m.role === 'bot' ? (
                <BotMessage key={i} text={m.text} link={m.link} />
              ) : (
                <UserMessage key={i} text={m.text} />
              )
            )}
            {typing && <TypingDots />}

            {showQuickReplies && !typing && (
              <div className="mt-2 ml-9 flex flex-wrap gap-1.5">
                {QUICK_REPLIES.map((qr) => (
                  <button
                    key={qr.faqId}
                    type="button"
                    onClick={() => handleQuickReply(qr.faqId)}
                    className="px-3 py-1.5 text-xs font-medium rounded-full transition-colors"
                    style={{
                      background: '#1F2530',
                      color: '#E6EDF3',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#F9843D'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
                  >
                    {qr.label}
                  </button>
                ))}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Talk to a human button (only when not in flow and not already sent) */}
          {showCallbackCta && (
            <div className="px-4 py-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)', background: '#15191F' }}>
              <button
                type="button"
                onClick={startCallbackFlow}
                className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold rounded-lg transition-colors"
                style={{
                  background: 'rgba(34,197,94,0.15)',
                  color: '#4ADE80',
                  border: '1px solid rgba(34,197,94,0.35)',
                }}
              >
                <Phone className="w-3.5 h-3.5" />
                Talk to a human — get a callback
              </button>
            </div>
          )}

          {/* Step indicator during callback flow */}
          {callbackStep && callbackStep !== 'submitting' && (
            <div
              className="px-4 py-2 border-t text-[11px]"
              style={{
                borderColor: 'rgba(255,255,255,0.08)',
                background: '#15191F',
                color: '#9AA4B2',
              }}
            >
              Step {callbackStep === 'name' ? 1 : callbackStep === 'phone' ? 2 : 3} of 3 · {callbackStep === 'name' ? 'Name' : callbackStep === 'phone' ? 'Phone' : 'Your question'}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSend}
            className="px-3 py-3 border-t flex items-center gap-2"
            style={{
              borderColor: 'rgba(255,255,255,0.08)',
              background: '#15191F',
            }}
          >
            <input
              ref={inputRef}
              type={inputType}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={inputPlaceholder}
              disabled={submitting}
              className="flex-1 px-3 py-2 text-sm rounded-full focus:outline-none disabled:opacity-60"
              style={{
                background: '#1F2530',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#E6EDF3',
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#F9843D'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; }}
            />
            <button
              type="submit"
              aria-label="Send"
              disabled={!input.trim() || submitting}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[var(--brand)] text-white hover:bg-[var(--brand-dark)] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
