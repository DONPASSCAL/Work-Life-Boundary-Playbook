import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  CheckCircle2, 
  Zap, 
  Smartphone, 
  Wind, 
  Target, 
  ChevronRight, 
  ChevronLeft,
  AlertCircle,
  Clock,
  MessageSquare,
  Layout,
  ArrowRight
} from 'lucide-react';

// --- Components for each Chapter ---

const Landing = ({ onStart }: { onStart: () => void }) => (
  <div className="min-h-screen bg-cream selection:bg-copper/20">
    {/* Hero Section */}
    <section className="max-w-5xl mx-auto pt-24 pb-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-copper font-bold">The 2026 Remote Work Protocol</span>
      </motion.div>
      
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-7xl md:text-8xl font-serif mb-8 leading-[0.9] text-forest"
      >
        The Work-Life <br />
        <span className="italic text-copper">Boundary</span> Playbook
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-2xl mx-auto text-xl text-stone-600 mb-12 leading-relaxed"
      >
        A system-backed protocol to reclaim your energy, release the guilt of "logging off," and clear the mental fog — for good.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button 
          onClick={onStart}
          className="px-12 py-5 bg-forest text-cream rounded-none font-bold text-sm uppercase tracking-widest hover:bg-ink transition-all shadow-xl hover:-translate-y-1"
        >
          Get Instant Access — $15
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-xs text-stone-400 font-mono uppercase tracking-widest flex flex-wrap justify-center gap-x-8 gap-y-4"
      >
        <span>Trusted by 12,000+ Workers</span>
        <span>Instant Digital Access</span>
        <span>60-Day Guarantee</span>
      </motion.div>
    </section>

    {/* Transformation Section */}
    <section className="py-24 px-6 border-y border-stone-200">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-copper mb-4">Solve for Transformation</h2>
          <h3 className="text-4xl font-serif italic text-forest">From Work-Bleed to Life-First</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl border border-stone-100 shadow-sm">
            <h4 className="text-xs font-mono uppercase tracking-widest text-red-500 mb-6 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> The Before
            </h4>
            <ul className="space-y-4 text-stone-500">
              <li className="flex gap-3"><span>✕</span> Checking Slack at 10 PM</li>
              <li className="flex gap-3"><span>✕</span> Guilt for not being "productive"</li>
              <li className="flex gap-3"><span>✕</span> Hobbies are a distant memory</li>
              <li className="flex gap-3"><span>✕</span> Weekends feel like work extensions</li>
            </ul>
          </div>
          <div className="bg-forest p-10 rounded-2xl shadow-xl text-cream">
            <h4 className="text-xs font-mono uppercase tracking-widest text-copper mb-6 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> The After (The System)
            </h4>
            <ul className="space-y-4 text-cream/80">
              <li className="flex gap-3"><span className="text-copper">✓</span> Hard logout at 5:30 PM</li>
              <li className="flex gap-3"><span className="text-copper">✓</span> Guilt-free personal time</li>
              <li className="flex gap-3"><span className="text-copper">✓</span> 15-minute daily "Side Quests"</li>
              <li className="flex gap-3"><span className="text-copper">✓</span> Clear mental separation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-copper mb-4">The Done-For-You System</h2>
          <h3 className="text-4xl font-serif italic text-forest">How to Reclaim Your Time</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "01", title: "Audit the Bleed", desc: "Identify exactly where work is leaking into your life using our Burnout Audit." },
            { step: "02", title: "Set the Cracks", desc: "Use our 'Loud Cracking' scripts to communicate boundaries to your team." },
            { step: "03", title: "Launch Side Quests", desc: "Re-engage with your hobbies in 15-minute daily blocks that stick." }
          ].map((item, i) => (
            <div key={i} className="space-y-4">
              <span className="text-4xl font-serif italic text-copper opacity-30">{item.step}</span>
              <h4 className="text-xl font-serif text-forest">{item.title}</h4>
              <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* System Blueprint Section */}
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-copper mb-4">Build as System</h2>
          <h3 className="text-4xl font-serif italic text-forest">The 2026 Efficiency Blueprint</h3>
          <p className="text-stone-500 mt-4">Outperforming products in the AI era by solving for human transformation.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {[
              { title: "Micro-Niche Focus", desc: "Designed specifically for remote workers, not a generic productivity tool." },
              { title: "AI-Enhanced, System-Led", desc: "AI provides the speed, but our system provides the direction and boundaries." },
              { title: "Transformation-First", desc: "We don't just track tasks; we track the recovery of your personal life." }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-copper/10 flex items-center justify-center shrink-0 text-copper font-bold text-xs">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-serif text-lg text-forest">{item.title}</h4>
                  <p className="text-sm text-stone-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Wind className="w-32 h-32" />
            </div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-6">System Architecture</h4>
            <div className="space-y-4 relative z-10">
              <div className="p-4 bg-white rounded border border-stone-200 shadow-sm text-xs font-mono">
                [INPUT] Burnout Audit Data
              </div>
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-copper rotate-90" />
              </div>
              <div className="p-4 bg-forest text-cream rounded shadow-lg text-xs font-mono">
                [PROCESS] Boundary Script Generation
              </div>
              <div className="flex justify-center">
                <ArrowRight className="w-4 h-4 text-copper rotate-90" />
              </div>
              <div className="p-4 bg-white rounded border border-stone-200 shadow-sm text-xs font-mono">
                [OUTPUT] 15-Min Side Quest Protocol
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Benefits Grid */}
    <section className="bg-forest py-24 text-cream">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: <Zap />, title: "Speed", desc: "Results faster than AI alone. No fluff, just systems." },
            { icon: <Shield />, title: "Shortcuts", desc: "Proven scripts to set limits without the guilt." },
            { icon: <Layout />, title: "Done-for-you", desc: "Ready-to-use frameworks for every work scenario." },
            { icon: <Target />, title: "Transformation", desc: "Solve for the life you want, not just the job you have." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="text-copper">{item.icon}</div>
              <h3 className="text-lg font-serif italic">{item.title}</h3>
              <p className="text-sm text-cream/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const Mockup = ({ onContinue }: { onContinue: () => void }) => (
  <section className="min-h-screen bg-forest py-24 px-6 flex items-center justify-center">
    <div className="max-w-5xl w-full">
      <div className="text-center mb-16">
        <h2 className="text-xs font-mono uppercase tracking-[0.3em] text-copper mb-4">Science-Backed • Remote Ready</h2>
        <h1 className="text-5xl md:text-6xl font-serif text-cream leading-tight">Your Complete <br /><span className="text-copper italic">Boundary Reset</span></h1>
        <p className="text-cream/60 mt-4">A 2026 protocol for the modern worker.</p>
      </div>

      <div className="relative group perspective-1000">
        <motion.div 
          initial={{ rotateY: -10, rotateX: 5, opacity: 0 }}
          animate={{ rotateY: 0, rotateX: 0, opacity: 1 }}
          className="relative z-10 bg-cream p-1 rounded-sm shadow-2xl overflow-hidden aspect-[4/3] md:aspect-[16/9] flex"
        >
          {/* Mockup Content - Visualizing the App */}
          <div className="w-1/3 bg-forest p-8 text-cream hidden md:block">
            <div className="w-12 h-1 bg-copper mb-8" />
            <h3 className="text-2xl font-serif italic mb-6">The Playbook</h3>
            <ul className="space-y-4 text-xs font-mono uppercase tracking-widest opacity-60">
              <li>01 Burnout Audit</li>
              <li>02 Loud Cracking</li>
              <li>03 Side Quests</li>
              <li>04 Digital Opt-Out</li>
              <li>05 Transition Rituals</li>
            </ul>
          </div>
          <div className="flex-1 bg-white p-12 flex flex-col justify-center">
            <h4 className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-2">Chapter Three</h4>
            <h2 className="text-4xl font-serif mb-6">Side Quest Strategy</h2>
            <div className="space-y-4">
              <div className="h-4 bg-stone-100 rounded w-full" />
              <div className="h-4 bg-stone-100 rounded w-5/6" />
              <div className="h-4 bg-stone-100 rounded w-4/6" />
            </div>
            <div className="mt-12 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-forest/10" />
              <div className="w-12 h-12 rounded-full bg-forest/10" />
              <div className="w-12 h-12 rounded-full bg-forest/10" />
            </div>
          </div>
        </motion.div>
        
        {/* Floating Accents */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-copper/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-forest/20 rounded-full blur-3xl" />
      </div>

      <div className="mt-20 grid md:grid-cols-2 gap-8 text-cream/80 text-sm">
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-copper w-5 h-5" />
          <span>Burnout Audit + Recovery Systems</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-copper w-5 h-5" />
          <span>Sleep & Stress Reset Protocols</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-copper w-5 h-5" />
          <span>Loud Cracking Communication Scripts</span>
        </div>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-copper w-5 h-5" />
          <span>Daily Side Quest Tracking Templates</span>
        </div>
      </div>

      <div className="mt-16 text-center">
        <button 
          onClick={onContinue}
          className="px-12 py-4 bg-copper text-cream font-bold uppercase tracking-widest hover:bg-copper/80 transition-all"
        >
          Enter the System — $15 <span className="line-through opacity-50 ml-2">$47</span>
        </button>
      </div>
    </div>
  </section>
);

const Intro = ({ onNext }: { onNext: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="max-w-2xl mx-auto py-12 px-6"
  >
    <div className="mb-12 text-center">
      <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-copper mb-4">A 1-Hour Wonderworkers Guide</h2>
      <h1 className="text-6xl md:text-7xl font-serif italic mb-6 leading-tight text-forest">The Playbook</h1>
      <p className="text-xl text-stone-600 font-light">Stop overworking. Set real limits. Protect your time. Chase what matters.</p>
    </div>

    <div className="bg-white border border-stone-200 p-8 rounded-2xl shadow-sm mb-8">
      <h3 className="text-xl font-serif italic mb-4 text-forest">Before You Start</h3>
      <p className="text-stone-600 mb-6 leading-relaxed">
        If you work from home, the line between work and life can get blurry fast. This playbook is not about doing less. 
        It's about working smarter and protecting the rest of your life just as fiercely.
      </p>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="mt-1 bg-forest/5 p-1 rounded">
            <Clock className="w-4 h-4 text-forest" />
          </div>
          <p className="text-sm text-stone-500">Each chapter takes about 10 minutes. Do them all at once or spread them out.</p>
        </div>
        <div className="flex items-start gap-3">
          <div className="mt-1 bg-forest/5 p-1 rounded">
            <Zap className="w-4 h-4 text-forest" />
          </div>
          <p className="text-sm text-stone-500">This isn't quiet quitting. It's loud, clear, unapologetic boundary-setting.</p>
        </div>
      </div>
    </div>

    <button 
      onClick={onNext}
      className="w-full py-4 bg-forest text-cream rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-forest/90 transition-colors group"
    >
      Start the Playbook
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

const BurnoutAudit = ({ onNext }: { onNext: (score: number) => void }) => {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  
  const items = [
    { id: 'e1', category: 'Evenings & Mornings', label: 'I check work email after 7 PM at least 3 times a week.' },
    { id: 'e2', category: 'Evenings & Mornings', label: 'I look at Slack or Teams before I get out of bed.' },
    { id: 'e3', category: 'Evenings & Mornings', label: 'I think about work tasks while eating dinner.' },
    { id: 'e4', category: 'Evenings & Mornings', label: 'I set an early alarm to "get a head start" on work.' },
    { id: 'e5', category: 'Evenings & Mornings', label: 'I feel guilty when I\'m not working.' },
    { id: 'w1', category: 'Your Workspace', label: 'I work from my bed or couch regularly.' },
    { id: 'w2', category: 'Your Workspace', label: 'My laptop is always open and visible, even off the clock.' },
    { id: 'w3', category: 'Your Workspace', label: 'I don\'t have a clear end-of-day routine.' },
    { id: 'w4', category: 'Your Workspace', label: 'My phone has work apps on the home screen.' },
    { id: 't1', category: 'Your Time Off', label: 'I skip lunch to keep working.' },
    { id: 't2', category: 'Your Time Off', label: 'I haven\'t started a new hobby in over 6 months.' },
    { id: 't3', category: 'Your Time Off', label: 'I cancel personal plans when work gets busy.' },
    { id: 't4', category: 'Your Time Off', label: 'I feel restless or anxious when I\'m not being "productive."' },
    { id: 't5', category: 'Your Time Off', label: 'Weekends feel like extensions of the work week.' },
  ];

  const score = Object.values(checks).filter(Boolean).length;

  const getStatus = () => {
    if (score >= 10) return { label: 'Time to act now', color: 'text-red-600', bg: 'bg-red-50' };
    if (score >= 5) return { label: 'Real bleed is happening', color: 'text-copper', bg: 'bg-copper/5' };
    return { label: 'Early signs of burnout', color: 'text-forest', bg: 'bg-forest/5' };
  };

  const status = getStatus();

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="mb-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-copper mb-2">Chapter 1</h2>
        <h1 className="text-4xl font-serif mb-4 text-forest">The Burnout Audit</h1>
        <p className="text-stone-600">Check every box that's true for you right now.</p>
      </div>

      <div className="space-y-8 mb-12">
        {['Evenings & Mornings', 'Your Workspace', 'Your Time Off'].map(cat => (
          <div key={cat}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 border-b border-stone-200 pb-2">{cat}</h3>
            <div className="space-y-3">
              {items.filter(i => i.category === cat).map(item => (
                <label key={item.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors cursor-pointer group">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-5 h-5 rounded border-stone-300 text-forest focus:ring-forest"
                    checked={!!checks[item.id]}
                    onChange={(e) => setChecks(prev => ({ ...prev, [item.id]: e.target.checked }))}
                  />
                  <span className="text-stone-700 group-hover:text-forest">{item.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={`p-6 rounded-2xl border ${status.bg} border-current flex items-center justify-between mb-8`}>
        <div>
          <p className="text-sm font-mono uppercase opacity-70">Your Audit Score</p>
          <p className={`text-3xl font-bold ${status.color}`}>{score} / 14</p>
        </div>
        <div className="text-right">
          <p className={`font-medium ${status.color}`}>{status.label}</p>
          <p className="text-xs opacity-70">Keep this number in mind.</p>
        </div>
      </div>

      <button 
        onClick={() => onNext(score)}
        className="w-full py-4 bg-forest text-cream rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-forest/90 transition-colors"
      >
        Fix This Now
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const LoudCracking = ({ onNext }: { onNext: () => void }) => {
  const scripts = [
    { title: 'Setting Your End Time', text: '"I wrap up at 5:30 PM and don\'t check messages after that. If something urgent comes up, please reach out before 5 PM or flag it for the next morning."' },
    { title: 'Handling After-Hours Requests', text: '"I saw your message — I\'ll get to it first thing tomorrow morning. My response time after 6 PM is next-day."' },
    { title: 'Pushing Back on Overload', text: '"I\'m at capacity this week. I can take this on next Monday, or we can look at what to move off my plate first. Which works better for you?"' },
    { title: 'Setting Meeting Limits', text: '"I block 12–1 PM daily to focus and decompress. I\'m happy to meet before noon or after 2 PM."' },
  ];

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="mb-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-copper mb-2">Chapter 2</h2>
        <h1 className="text-4xl font-serif mb-4 text-forest">The Loud Cracking Framework</h1>
        <p className="text-stone-600">Scripts to set limits — without the guilt.</p>
      </div>

      <div className="bg-forest text-cream p-8 rounded-2xl mb-8 shadow-xl">
        <h3 className="text-lg font-serif italic mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-copper" />
          The 3-Part Limit Formula
        </h3>
        <ul className="space-y-4 text-cream/70">
          <li className="flex gap-3">
            <span className="text-copper font-mono">01</span>
            <span>State your hours or availability clearly.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-copper font-mono">02</span>
            <span>Say what you will and won't do.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-copper font-mono">03</span>
            <span>Offer an alternative when needed.</span>
          </li>
        </ul>
      </div>

      <div className="grid gap-4 mb-12">
        {scripts.map((s, i) => (
          <div key={i} className="bg-white border border-stone-200 p-6 rounded-xl hover:border-copper transition-colors group">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-2">{s.title}</h4>
            <p className="text-stone-800 italic font-serif text-lg leading-relaxed">{s.text}</p>
            <button 
              onClick={() => {
                navigator.clipboard.writeText(s.text);
                alert('Script copied to clipboard!');
              }}
              className="mt-4 text-xs font-mono text-copper hover:text-forest flex items-center gap-1 transition-colors"
            >
              <MessageSquare className="w-3 h-3" />
              Copy Script
            </button>
          </div>
        ))}
      </div>

      <div className="bg-copper/5 border border-copper/20 p-6 rounded-xl mb-8">
        <h4 className="font-serif italic text-copper mb-2">Why the Guilt Happens</h4>
        <p className="text-sm text-stone-600 leading-relaxed">
          You feel guilty because you were trained to equate availability with value. That's not true. 
          Your value is in the quality of your work — not how many messages you answer at night.
        </p>
      </div>

      <button 
        onClick={onNext}
        className="w-full py-4 bg-forest text-cream rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-forest/90 transition-colors"
      >
        I've Picked My Script
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const SideQuestStrategy = ({ onNext }: { onNext: (quest: string) => void }) => {
  const [quest, setQuest] = useState('');
  
  const examples = [
    { q: 'Learn guitar', v: 'Practice one chord or one song section', t: 'After dinner' },
    { q: 'Learn Spanish', v: '5 vocab words + 1 practice sentence', t: 'Morning coffee' },
    { q: 'Start a journal', v: 'Write 3 sentences about today', t: 'Before bed' },
    { q: 'Read more', v: 'Read 10 pages — no more, no less', t: 'Before lights out' },
  ];

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="mb-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-copper mb-2">Chapter 3</h2>
        <h1 className="text-4xl font-serif mb-4 text-forest">Side Quest Strategy</h1>
        <p className="text-stone-600">Break personal goals into 15-minute daily wins.</p>
      </div>

      <div className="bg-white border border-stone-200 p-8 rounded-2xl mb-8 shadow-sm">
        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Step 1: Name Your Side Quest</h3>
        <input 
          type="text" 
          placeholder="e.g. Learn watercolor basics"
          className="w-full text-2xl font-serif border-b-2 border-stone-200 focus:border-forest outline-none pb-2 mb-4 transition-colors"
          value={quest}
          onChange={(e) => setQuest(e.target.value)}
        />
        <p className="text-sm text-stone-500 italic">Pick one thing you've been putting off. Be specific.</p>
      </div>

      <div className="mb-12">
        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6">Step 2: Break It Into 15-Minute Chunks</h3>
        <div className="overflow-hidden rounded-xl border border-stone-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-stone-50 text-stone-500 font-mono uppercase text-[10px] tracking-widest">
              <tr>
                <th className="px-4 py-3">Side Quest</th>
                <th className="px-4 py-3">15-Minute Version</th>
                <th className="px-4 py-3">Best Time Slot</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {examples.map((ex, i) => (
                <tr key={i} className="bg-white hover:bg-stone-50 transition-colors">
                  <td className="px-4 py-4 font-medium text-forest">{ex.q}</td>
                  <td className="px-4 py-4 text-stone-600">{ex.v}</td>
                  <td className="px-4 py-4 text-stone-500 italic">{ex.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-forest text-cream p-6 rounded-xl mb-8 shadow-lg">
        <h4 className="font-serif italic text-copper mb-2 flex items-center gap-2">
          <Target className="w-4 h-4" />
          Step 3: Protect the Slot
        </h4>
        <p className="text-sm opacity-70 leading-relaxed">
          Put your 15-minute slot on your calendar right now. Block it like a meeting. 
          If you miss a day, don't skip the next one. Two days off in a row is how habits die.
        </p>
      </div>

      <button 
        onClick={() => onNext(quest)}
        disabled={!quest}
        className="w-full py-4 bg-forest text-cream rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-forest/90 transition-colors disabled:opacity-50"
      >
        Commit to My Side Quest
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const DigitalOptOut = ({ onNext }: { onNext: () => void }) => {
  const [checks, setChecks] = useState<Record<string, boolean>>({});

  const once = [
    { id: 'o1', label: 'Delete work email from home screen. Move to a folder.' },
    { id: 'o2', label: 'Turn off Slack/Teams notifications after end time.' },
    { id: 'o3', label: 'Remove work apps from lock screen widget.' },
    { id: 'o4', label: 'Set Screen Time to block work apps after 6 PM.' },
    { id: 'o5', label: 'Charge phone outside the bedroom at night.' },
  ];

  const today = [
    { id: 't1', label: 'Create a "Focus Mode" from 7 PM to 8 AM.' },
    { id: 't2', label: 'Change wallpaper to something calming.' },
    { id: 't3', label: 'Move 3 hobby/personal apps to home screen.' },
  ];

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="mb-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-copper mb-2">Chapter 4</h2>
        <h1 className="text-4xl font-serif mb-4 text-forest">The Digital Opt-Out</h1>
        <p className="text-stone-600">Strip back the noise. Take back your focus.</p>
      </div>

      <div className="space-y-8 mb-12">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
            <Smartphone className="w-4 h-4" />
            Do This Once
          </h3>
          <div className="space-y-2">
            {once.map(item => (
              <label key={item.id} className="flex items-center gap-3 p-4 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-copper transition-colors group">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-stone-300 text-forest focus:ring-forest"
                  checked={!!checks[item.id]}
                  onChange={(e) => setChecks(prev => ({ ...prev, [item.id]: e.target.checked }))}
                />
                <span className="text-stone-700 group-hover:text-forest">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Set This Up Today
          </h3>
          <div className="space-y-2">
            {today.map(item => (
              <label key={item.id} className="flex items-center gap-3 p-4 bg-white border border-stone-200 rounded-xl cursor-pointer hover:border-copper transition-colors group">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 rounded border-stone-300 text-forest focus:ring-forest"
                  checked={!!checks[item.id]}
                  onChange={(e) => setChecks(prev => ({ ...prev, [item.id]: e.target.checked }))}
                />
                <span className="text-stone-700 group-hover:text-forest">{item.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-forest text-cream p-8 rounded-2xl mb-8 italic font-serif text-center shadow-lg">
        "Your phone reflects your priorities. What does yours say about you right now?"
      </div>

      <button 
        onClick={onNext}
        className="w-full py-4 bg-forest text-cream rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-forest/90 transition-colors"
      >
        I've Opted Out
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const TransitionRitual = ({ onNext }: { onNext: (ritual: any) => void }) => {
  const [ritual, setRitual] = useState({ time: '', sensory: '', action: '' });

  const options = [
    { cat: 'Scent', items: ['Light a candle', 'Use a lotion', 'Diffuse lavender/cedar'] },
    { cat: 'Sound', items: ['Play a specific playlist', 'Rain sounds', 'Jazz album'] },
    { cat: 'Light', items: ['Dim desk lamp', 'Turn off overheads', 'Switch to warm lamp'] },
    { cat: 'Movement', items: ['Short walk', '5 mins stretching', 'Quick workout'] },
    { cat: 'Action', items: ['Close all tabs', 'Shut the laptop', 'Write top 3 for tomorrow'] },
  ];

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="mb-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-copper mb-2">Chapter 5</h2>
        <h1 className="text-4xl font-serif mb-4 text-forest">Sensory Transition Rituals</h1>
        <p className="text-stone-600">Train your brain to clock out for real.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        {options.map(opt => (
          <div key={opt.cat} className="bg-white border border-stone-200 p-5 rounded-xl shadow-sm">
            <h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-3">{opt.cat}</h4>
            <ul className="space-y-2">
              {opt.items.map((item, i) => (
                <li key={i} className="text-sm text-stone-600 flex items-center gap-2">
                  <div className="w-1 h-1 bg-copper rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-forest text-cream p-8 rounded-2xl mb-8 shadow-xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-copper mb-8">Build Your Ritual</h3>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-cream/60 mb-2">My ritual starts at:</label>
            <input 
              type="text" 
              placeholder="e.g. 5:30 PM"
              className="w-full bg-transparent border-b border-white/20 focus:border-copper outline-none pb-2 transition-colors"
              value={ritual.time}
              onChange={(e) => setRitual(prev => ({ ...prev, time: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-cream/60 mb-2">Scent/Sound/Light I'll use:</label>
            <input 
              type="text" 
              placeholder="e.g. Light a cedar candle"
              className="w-full bg-transparent border-b border-white/20 focus:border-copper outline-none pb-2 transition-colors"
              value={ritual.sensory}
              onChange={(e) => setRitual(prev => ({ ...prev, sensory: e.target.value }))}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-cream/60 mb-2">My closing action:</label>
            <input 
              type="text" 
              placeholder="e.g. Shut laptop and say 'Done'"
              className="w-full bg-transparent border-b border-white/20 focus:border-copper outline-none pb-2 transition-colors"
              value={ritual.action}
              onChange={(e) => setRitual(prev => ({ ...prev, action: e.target.value }))}
            />
          </div>
        </div>
      </div>

      <button 
        onClick={() => onNext(ritual)}
        disabled={!ritual.time || !ritual.sensory || !ritual.action}
        className="w-full py-4 bg-forest text-cream rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-forest/90 transition-colors disabled:opacity-50"
      >
        Set My Ritual
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

const SideQuestTracker = ({ quest }: { quest: string }) => {
  const [history, setHistory] = useState<Record<string, boolean[]>>({
    [quest || 'My Side Quest']: [false, false, false, false, false]
  });

  const toggle = (q: string, day: number) => {
    setHistory(prev => {
      const current = prev[q] || [false, false, false, false, false];
      return {
        ...prev,
        [q]: current.map((v, i) => i === day ? !v : v)
      };
    });
  };

  return (
    <div className="max-w-2xl mx-auto py-12 px-6">
      <div className="mb-8">
        <h2 className="text-sm font-mono uppercase tracking-widest text-copper mb-2">Chapter 6</h2>
        <h1 className="text-4xl font-serif mb-4 text-forest">The Side Quest Tracker</h1>
        <p className="text-stone-600">Track hobbies — not just work tasks.</p>
      </div>

      <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden mb-12 shadow-sm">
        <div className="bg-stone-50 border-b border-stone-200 px-6 py-4 flex justify-between items-center">
          <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400">Weekly Tracker</h3>
          <div className="flex gap-4 text-[10px] font-mono text-stone-400 uppercase tracking-widest">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
          </div>
        </div>
        <div className="divide-y divide-stone-100">
          {(Object.entries(history) as [string, boolean[]][]).map(([name, days]) => (
            <div key={name} className="px-6 py-6 flex justify-between items-center">
              <span className="font-serif text-lg text-forest italic">{name}</span>
              <div className="flex gap-4">
                {days.map((done, i) => (
                  <button 
                    key={i}
                    onClick={() => toggle(name, i)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center
                      ${done ? 'bg-forest border-forest text-cream shadow-md' : 'border-stone-200 hover:border-copper'}`}
                  >
                    {done && <CheckCircle2 className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-forest p-8 rounded-2xl shadow-xl">
        <h3 className="text-xs font-bold uppercase tracking-widest text-copper mb-6">End-of-Week Check-In</h3>
        <div className="space-y-6">
          {[
            'Did I protect my 15-minute slot most days?',
            'What got in the way when I missed it?',
            'What\'s one thing I want to keep doing next week?'
          ].map((q, i) => (
            <div key={i}>
              <p className="text-sm font-medium text-cream/80 mb-2">{q}</p>
              <textarea 
                className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm focus:border-copper outline-none transition-colors text-cream"
                rows={2}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-serif italic mb-4 text-forest">You Did It.</h2>
        <p className="text-stone-600 mb-8">
          You now have a complete system. The work isn't in reading this. It's in doing one thing today.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-8 py-3 border border-forest text-forest rounded-xl font-medium hover:bg-forest hover:text-cream transition-all"
        >
          Restart Playbook
        </button>
      </div>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [step, setStep] = useState(0);
  const [mode, setMode] = useState<'landing' | 'mockup' | 'playbook'>('landing');
  const [data, setData] = useState({
    auditScore: 0,
    sideQuest: '',
    ritual: null
  });

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => Math.max(0, s - 1));

  const chapters = [
    { id: 'intro', component: <Intro onNext={next} /> },
    { id: 'audit', component: <BurnoutAudit onNext={(score) => { setData(d => ({ ...d, auditScore: score })); next(); }} /> },
    { id: 'cracking', component: <LoudCracking onNext={next} /> },
    { id: 'strategy', component: <SideQuestStrategy onNext={(q) => { setData(d => ({ ...d, sideQuest: q })); next(); }} /> },
    { id: 'optout', component: <DigitalOptOut onNext={next} /> },
    { id: 'ritual', component: <TransitionRitual onNext={(r) => { setData(d => ({ ...d, ritual: r })); next(); }} /> },
    { id: 'tracker', component: <SideQuestTracker quest={data.sideQuest} /> },
  ];

  if (mode === 'landing') {
    return <Landing onStart={() => setMode('mockup')} />;
  }

  if (mode === 'mockup') {
    return <Mockup onContinue={() => setMode('playbook')} />;
  }

  return (
    <div className="min-h-screen bg-cream selection:bg-copper/20">
      {/* Progress Bar */}
      {step > 0 && (
        <div className="fixed top-0 left-0 w-full h-1 bg-stone-200 z-50">
          <motion.div 
            className="h-full bg-forest"
            initial={{ width: 0 }}
            animate={{ width: `${(step / (chapters.length - 1)) * 100}%` }}
          />
        </div>
      )}

      {/* Navigation */}
      {step > 0 && step < chapters.length - 1 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40">
          <button 
            onClick={back}
            className="p-3 bg-white border border-stone-200 rounded-full shadow-lg hover:bg-stone-50 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-forest" />
          </button>
          <div className="px-4 py-2 bg-white border border-stone-200 rounded-full shadow-lg text-xs font-mono uppercase tracking-widest text-forest">
            Chapter {step} / 6
          </div>
          <button 
            onClick={next}
            className="p-3 bg-white border border-stone-200 rounded-full shadow-lg hover:bg-stone-50 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-forest" />
          </button>
        </div>
      )}

      <main className="pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {chapters[step].component}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Branding */}
      <footer className="fixed bottom-0 left-0 w-full py-4 px-6 flex justify-between items-center pointer-events-none opacity-30">
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-forest">Work-Life Boundary Playbook</div>
        <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-forest">© 2026 Wonderworkers</div>
      </footer>
    </div>
  );
}
