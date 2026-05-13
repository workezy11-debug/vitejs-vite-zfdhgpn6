import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  GraduationCap,
  MessageCircle,
  ShieldCheck,
  Star,
  Users,
  FileText,
  Mic,
} from 'lucide-react';

const days = [
  {
    day: 'Day 1',
    title: 'What FLEX Really Looks For',
    desc: 'Understand the program, selection mindset, and what makes a strong candidate.',
  },
  {
    day: 'Day 2',
    title: 'Your Personal Profile',
    desc: 'Build your story: school, family, interests, leadership, challenges, and goals.',
  },
  {
    day: 'Day 3',
    title: 'Personal Story Bank',
    desc: 'Prepare real examples you can use in essays and interviews.',
  },
  {
    day: 'Day 4',
    title: 'Essay Structure',
    desc: 'Learn how to write clear, honest, specific answers without memorized templates.',
  },
  {
    day: 'Day 5',
    title: 'Timed Essay Practice',
    desc: 'Practice under time pressure and learn how to improve your answer quickly.',
  },
  {
    day: 'Day 6',
    title: 'English Skills Check',
    desc: 'Review grammar, vocabulary, reading, and common test mistakes.',
  },
  {
    day: 'Day 7',
    title: 'Adaptability Training',
    desc: 'Practice situations with host family, school, culture shock, and new rules.',
  },
  {
    day: 'Day 8',
    title: 'Leadership & Community',
    desc: 'Show leadership through real actions, not fake or exaggerated stories.',
  },
  {
    day: 'Day 9',
    title: 'Interview Questions',
    desc: 'Practice common question types and learn how to answer naturally.',
  },
  {
    day: 'Day 10',
    title: 'Speaking Confidence',
    desc: 'Improve fluency, clarity, and confidence without sounding memorized.',
  },
  {
    day: 'Day 11',
    title: 'Do’s and Don’ts',
    desc: 'Avoid the biggest mistakes in essays, interviews, and communication.',
  },
  {
    day: 'Day 12',
    title: 'Mock Interview 1',
    desc: 'Go through a realistic interview simulation and receive feedback.',
  },
  {
    day: 'Day 13',
    title: 'Final Essay Simulation',
    desc: 'Complete a final writing task and polish your personal strategy.',
  },
  {
    day: 'Day 14',
    title: 'Full FLEX Simulation',
    desc: 'Final check: essay, interview, feedback, and personal action plan.',
  },
];

const packages = [
  {
    name: 'Basic',
    price: '14,900 ₸',
    tag: 'Self-study',
    features: [
      '14-day materials',
      'PDF guides',
      'Essay prompts',
      'Interview question bank',
      'Final checklist',
    ],
    highlight: false,
  },
  {
    name: 'Standard',
    price: '34,900 ₸',
    tag: 'Most popular',
    features: [
      'Everything in Basic',
      'Telegram support',
      '2 essay checks',
      'Weekly group Q&A',
      'Personal improvement tips',
    ],
    highlight: true,
  },
  {
    name: 'Premium',
    price: '69,900 ₸',
    tag: 'Personal feedback',
    features: [
      'Everything in Standard',
      '1 mock interview',
      'Detailed feedback report',
      'Personal story review',
      'Final preparation plan',
    ],
    highlight: false,
  },
];

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState('Standard');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSend = () => {
    if (!name || !phone) {
      alert('Пожалуйста, заполните имя и номер телефона!');
      return;
    }
    // ВНИМАНИЕ: ЗДЕСЬ ВПИШИТЕ ВАШ НОМЕР БЕЗ ПЛЮСА
    const myNumber = '77775636995';

    const message = `Здравствуйте! Я хочу записаться на FLEX Ready.\n\nИмя: ${name}\nНомер: ${phone}\nПакет: ${selectedPackage}`;
    const url = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-lg">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">FLEX Ready</p>
              <p className="text-xs text-slate-400">
                14-Day Preparation Bootcamp
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#program" className="hover:text-white">
              Program
            </a>
            <a href="#inside" className="hover:text-white">
              What’s inside
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
            <a href="#apply" className="hover:text-white">
              Apply
            </a>
          </nav>
          <a
            href="#apply"
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Join waitlist
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
            <div className="relative z-10 flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                <Star className="h-4 w-4" />
                Created by a FLEX alumnus & English teacher
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
                Prepare for FLEX with a clear 14-day roadmap.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Essay practice, interview training, personal story building,
                do’s and don’ts, mock interview, and real guidance from someone
                who completed FLEX.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-bold text-slate-950 shadow-xl transition hover:bg-slate-200"
                >
                  Get access <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="#program"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  See 14-day plan
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black">14</p>
                  <p className="text-xs text-slate-400">days</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black">2+</p>
                  <p className="text-xs text-slate-400">essay checks</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-black">1</p>
                  <p className="text-xs text-slate-400">mock interview</p>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-slate-900 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">
                        Student dashboard
                      </p>
                      <h2 className="text-2xl font-bold">Today’s lesson</h2>
                    </div>
                    <div className="rounded-full bg-emerald-400/10 px-3 py-1 text-sm font-semibold text-emerald-300">
                      Day 5
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950">
                      <FileText className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-black">
                      Timed Essay Practice
                    </h3>
                    <p className="mt-3 leading-7 text-slate-300">
                      Write a short answer in 20 minutes. Then use the checklist
                      to improve clarity, examples, and reflection.
                    </p>
                    <div className="mt-5 space-y-3 text-sm">
                      <div className="flex items-center gap-3 rounded-2xl bg-slate-950/70 p-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-300" />{' '}
                        Watch 7-min lesson
                      </div>
                      <div className="flex items-center gap-3 rounded-2xl bg-slate-950/70 p-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-300" />{' '}
                        Download essay guide
                      </div>
                      <div className="flex items-center gap-3 rounded-2xl bg-slate-950/70 p-3">
                        <Clock className="h-5 w-5 text-blue-300" /> Submit
                        homework by 22:00
                      </div>
                    </div>
                    <button className="mt-6 w-full rounded-2xl bg-white py-4 font-bold text-slate-950">
                      Submit homework
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="inside" className="mx-auto max-w-7xl px-5 py-16">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              What students get
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Not just materials. A guided preparation system.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                icon: FileText,
                title: 'Essay System',
                desc: 'Structure, examples, timed practice, and feedback checklist.',
              },
              {
                icon: Mic,
                title: 'Interview Practice',
                desc: 'Question bank, natural answer frameworks, and mock interview.',
              },
              {
                icon: Users,
                title: 'Story Bank',
                desc: 'Personal stories for leadership, challenges, school, family, and goals.',
              },
              {
                icon: ShieldCheck,
                title: 'Do’s & Don’ts',
                desc: 'Common mistakes, weak answers, overused phrases, and what to avoid.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="program" className="bg-white text-slate-950">
          <div className="mx-auto max-w-7xl px-5 py-20">
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-700">
                  14-day roadmap
                </p>
                <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                  Every day has one clear task.
                </h2>
              </div>
              <p className="max-w-md leading-7 text-slate-600">
                Students do not receive random tips. They move step by step:
                understand the selection mindset, build stories, practice
                essays, then prepare for interviews.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {days.map((item) => (
                <div
                  key={item.day}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-4 inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-bold text-white">
                    {item.day}
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="mx-auto max-w-7xl px-5 py-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
              Pricing
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Start simple. Upgrade for feedback.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {packages.map((pkg) => (
              <button
                key={pkg.name}
                onClick={() => setSelectedPackage(pkg.name)}
                className={`text-left rounded-[2rem] border p-6 transition hover:-translate-y-1 ${
                  pkg.highlight
                    ? 'border-white bg-white text-slate-950 shadow-2xl'
                    : 'border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.07]'
                }`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-black">{pkg.name}</h3>
                    <p
                      className={
                        pkg.highlight ? 'text-slate-500' : 'text-slate-400'
                      }
                    >
                      {pkg.tag}
                    </p>
                  </div>
                  {selectedPackage === pkg.name && (
                    <CheckCircle2 className="h-6 w-6" />
                  )}
                </div>
                <p className="text-4xl font-black">{pkg.price}</p>
                <div className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 ${
                          pkg.highlight
                            ? 'text-emerald-600'
                            : 'text-emerald-300'
                        }`}
                      />
                      <span
                        className={
                          pkg.highlight ? 'text-slate-700' : 'text-slate-300'
                        }
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </section>

        <section id="apply" className="mx-auto max-w-7xl px-5 pb-24">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-300">
                Registration
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Join the first FLEX Ready group.
              </h2>
              <p className="mt-5 leading-8 text-slate-300">
                Leave your contact details and choose your package. The first
                group can receive a founder price and extra feedback.
              </p>
              <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/60 p-5">
                <div className="flex items-start gap-3">
                  <MessageCircle className="mt-1 h-6 w-6 text-blue-300" />
                  <div>
                    <h3 className="font-bold">Simple launch version</h3>
                    <p className="mt-2 leading-7 text-slate-400">
                      This button can lead to WhatsApp, Instagram DM, or Google
                      Form before building a full payment system.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 text-slate-950">
              <h3 className="text-2xl font-black">Apply for access</h3>
              <div className="mt-6 grid gap-4">
                <label className="grid gap-2 text-sm font-semibold">
                  Student name
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950"
                    placeholder="Amina S."
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  WhatsApp number
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950"
                    placeholder="+7 777 000 00 00"
                  />
                </label>
                <label className="grid gap-2 text-sm font-semibold">
                  Package
                  <select
                    value={selectedPackage}
                    onChange={(e) => setSelectedPackage(e.target.value)}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-slate-950"
                  >
                    <option>Basic</option>
                    <option>Standard</option>
                    <option>Premium</option>
                  </select>
                </label>
                <button
                  onClick={handleSend}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-6 py-4 font-black text-white transition hover:bg-slate-800"
                >
                  Send application <ArrowRight className="h-5 w-5" />
                </button>
                <p className="text-center text-xs leading-6 text-slate-500">
                  Independent preparation course. Not affiliated with the
                  official FLEX Program or American Councils.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
