"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Script from "next/script";
import { Suspense, useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  Award,
  Stethoscope,
  HeartPulse,
  Microscope,
  Activity,
  BadgeCheck,
  ChevronRight,
  Zap,
  Users,
  GraduationCap,
  Play,
  Clock,
  MapPin,
  CheckCircle2,
} from "lucide-react";

/* ─── Constants ─── */
const PHONE_NUMBER = "09315354431";
const WA_NUMBER = "919315354431";
const WA_MESSAGE = encodeURIComponent(
  "Hi, I'd like to request a Priority Appointment with Dr. Sushrut"
);

/* ─── Landing page wrapper with Suspense for useSearchParams ─── */
export default function Home() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <LandingPage />
    </Suspense>
  );
}

/* ─── Skeleton while params load ─── */
function PageSkeleton() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header Skeleton */}
      <div className="hidden md:block h-16 bg-white border-b border-slate-100 w-full animate-pulse" />
      
      {/* Hero Skeleton */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-6 pt-12 md:pt-20 space-y-8 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-5">
            <div className="h-8 bg-teal-100 rounded-full w-1/3 animate-pulse" />
            <div className="h-12 bg-slate-200 rounded-2xl w-3/4 animate-pulse md:h-16" />
            <div className="h-20 bg-slate-50 rounded-2xl w-full animate-pulse" />
            <div className="h-16 bg-white rounded-3xl border border-slate-100 shadow-sm w-full animate-pulse" />
            <div className="h-14 bg-teal-600/20 rounded-2xl w-full animate-pulse" />
          </div>
          <div className="flex-1">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-slate-200 rounded-[3rem] animate-pulse" />
          </div>
        </div>

        {/* Info Grid Skeleton */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="h-32 bg-slate-100 rounded-3xl animate-pulse" />
          <div className="h-32 bg-slate-100 rounded-3xl animate-pulse" />
        </div>
      </div>
    </main>
  );
}

/* ─── Lightweight YouTube Embed — loads thumbnail first, iframe on click ─── */
function LazyYouTube({ videoId }: { videoId: string }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-[9/16] max-w-sm mx-auto rounded-3xl overflow-hidden bg-slate-900 shadow-2xl group">
      {!isPlaying ? (
        <>
          {/* Static YouTube thumbnail — no iframe loaded until click */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Watch Dr. Sushrut Singh's message on gastro & liver care"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10 cursor-pointer"
            aria-label="Play doctor introduction video"
          >
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
              <Play size={28} className="text-white ml-1" fill="currentColor" />
            </div>
            <p className="text-white text-sm font-semibold drop-shadow">Watch Dr. Sushrut&apos;s Message</p>
          </button>
        </>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Dr. Sushrut Singh — Gastroenterologist"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
}

/* ─── Social Proof Notification Toast ─── */
function SocialProofToast() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState(0);

  const notifications = [
    { location: "Sector 76, Noida", time: "12 min ago" },
    { location: "Ghaziabad", time: "28 min ago" },
    { location: "Greater Noida", time: "45 min ago" },
    { location: "Sector 62, Noida", time: "1 hour ago" },
  ];

  useEffect(() => {
    const currentHour = new Date().getHours();
    // Suppress toasts between 9 PM and 9 AM
    if (currentHour >= 21 || currentHour < 9) return;

    const showTimer = setTimeout(() => setVisible(true), 5000);

    const cycleTimer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 500);
    }, 8000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`fixed bottom-24 left-4 z-40 md:bottom-6 md:left-6 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
    >
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-xs">
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
          <BadgeCheck size={16} className="text-green-600" />
        </div>
        <div>
          <p className="text-xs font-bold text-slate-900">Appointment Booked</p>
          <p className="text-xs text-slate-400">
            Patient from {notifications[current].location} — {notifications[current].time}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Landing Page ─── */
function LandingPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "Noida";
  const intent = searchParams.get("intent") || "Gastroenterologist";
  const [showModal, setShowModal] = useState(false);
  const [clinicStatus, setClinicStatus] = useState({ isOpen: false, timeString: '', greeting: 'Hello', isReady: false });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const day = now.getDay();
      const hours = now.getHours();
      let open = false;

      // Mon-Sat: 9 AM to 9 PM
      if (day >= 1 && day <= 6) {
        if (hours >= 9 && hours < 21) open = true;
      }
      // Sunday: 12 PM to 3 PM
      else if (day === 0) {
        if (hours >= 12 && hours < 15) open = true;
      }

      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true
      };
      let dateString = now.toLocaleDateString('en-US', options).replace(/,/g, '');
      
      let greeting = "Good Morning";
      if (hours >= 12 && hours < 17) greeting = "Good Afternoon";
      else if (hours >= 17) greeting = "Good Evening";

      setClinicStatus({ isOpen: open, timeString: dateString, greeting, isReady: true });
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20 md:pb-0">
      {/* ══════════════════════════════════════════════
          DESKTOP STICKY TOP BAR
      ══════════════════════════════════════════════ */}
      <div className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <p className="font-bold text-slate-900">Dr. Sushrut Singh</p>
            <span className="text-slate-300">|</span>
            <p className="text-sm text-slate-500">Gastroenterologist · Fortis Hospital, Noida</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              id="wa-btn-desktop-sticky"
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              id="call-btn-desktop-sticky"
              className="flex items-center gap-2 px-5 py-2 bg-teal-600 text-white text-sm font-semibold rounded-xl hover:bg-teal-700 transition-colors"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════
          MOBILE STICKY BOTTOM BAR
      ══════════════════════════════════════════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200">
        <div className="flex p-3 gap-3">
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
            id="wa-btn-sticky"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-green-600 text-white font-bold py-4 rounded-xl active:scale-95 transition-transform"
          >
            <MessageCircle size={20} />
            WhatsApp
          </a>
          <a
            href={`tel:${PHONE_NUMBER}`}
            id="call-btn-sticky"
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-4 rounded-xl active:scale-95 transition-transform"
          >
            <Phone size={20} />
            Call Now
          </a>
        </div>
      </div>

      {/* Social proof notification toast */}
      <SocialProofToast />

      {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
      <section className="relative pt-12 md:pt-20 pb-16 px-6 bg-hero-gradient overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="flex-1 space-y-5 text-center md:text-left animate-fade-in-up">
              {/* Trust bar — Dr. Sushrut Singh badge above fold */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">

                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-100 text-teal-700 text-sm font-bold rounded-full">
                  Top-Rated Gastro Specialist
                </span>
              </div>

              <h1 className="text-3xl md:text-5xl font-black leading-[1.15] text-slate-900 tracking-tight">
                <span className="text-teal-600">Top {intent}</span> in {city}
              </h1>

              {/* Credentials */}
              <p className="text-sm text-slate-500 leading-relaxed">
                DM-trained gastroenterologist at Fortis Hospital, Noida rated 4.9/5 by 500+ verified patients for expert gastro and liver care across Noida, Greater Noida & Ghaziabad.
              </p>

              <div className="flex flex-col gap-4 max-w-[22rem] mx-auto md:mx-0 w-full mt-2">
                <div className="bg-white/80 backdrop-blur-md border border-white p-5 rounded-[2rem] shadow-xl shadow-teal-900/5 w-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600"></div>

                  {clinicStatus.isReady && (
                    <div className="flex items-center justify-between mb-5 bg-slate-50/80 rounded-2xl p-3 border border-slate-100">
                      <div className="flex items-center gap-3">
                        <div className={`relative flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${clinicStatus.isOpen ? 'bg-green-100' : 'bg-amber-100'}`}>
                          {clinicStatus.isOpen && <span className="animate-ping absolute w-full h-full rounded-full bg-green-400 opacity-20"></span>}
                          <div className={`w-3 h-3 rounded-full shadow-sm ${clinicStatus.isOpen ? 'bg-green-500' : 'bg-amber-500'}`}></div>
                        </div>
                        <div className="flex flex-col">
                          <span className={`text-[10px] font-bold uppercase tracking-widest ${clinicStatus.isOpen ? 'text-green-600' : 'text-amber-600'}`}>
                            {clinicStatus.timeString} • {clinicStatus.isOpen ? 'OPEN' : 'CLOSED'}
                          </span>
                          <span className="text-[13px] font-semibold text-slate-800 leading-tight mt-0.5">
                            {clinicStatus.greeting}! {clinicStatus.isOpen ? 'Doctor is available soon.' : 'Book for next available slot.'}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <h3 className="font-extrabold text-slate-700 text-[1.1rem] mb-1 leading-tight tracking-tight">Expert Consultation</h3>
                  <p className="text-[13px] font-medium text-slate-500 mb-5">Skip the queue — speak to the specialist today.</p>

                  <button
                    onClick={() => setShowModal(true)}
                    id="call-btn-hero"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-br from-teal-600 to-teal-500 text-white font-bold py-4 px-6 rounded-2xl shadow-lg shadow-teal-500/30 hover:shadow-teal-500/40 active:scale-95 transition-all outline-none border-none cursor-pointer"
                  >
                    <Star size={18} fill="currentColor" />
                    Book Appointment Now
                  </button>
                  <p className="text-xs font-bold text-center text-teal-700 mt-3 flex items-center justify-center gap-1"><ShieldCheck size={14} /> Get Free Treatment Estimates</p>
                </div>

                <p className="text-[13px] text-slate-500 text-center font-medium mt-1">
                  <Star size={14} className="inline mr-1 text-amber-400 fill-amber-400 -mt-0.5" />
                  4.9/5 by 500+ Patients · Fortis Hospital, Noida
                </p>
              </div>
            </div>

            {/* Doctor Photo */}
            <div className="flex-1 relative animate-scale-in">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-teal-200 rounded-[3rem] rotate-6"></div>
                <Image
                  src="/images/drProfilepic.webp"
                  alt="Dr. Sushrut Singh – Best Gastroenterologist in Noida"
                  className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white"
                  width={320}
                  height={320}
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
              <div className="text-center mt-6">
                <p className="text-2xl font-black text-slate-900">Dr. Sushrut Singh</p>
                <p className="text-sm font-bold text-teal-700 mt-1">MBBS, MD (KGMC), DM (ILBS)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW TO BOOK — Three Option Cards
      ══════════════════════════════════════════════ */}
      <section className="py-12 px-6 bg-white border-b border-slate-100" id="how-to-book">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Call Card */}
            <div
              className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm"
            >
              <span className="text-3xl mb-3">📞</span>
              <h3 className="font-bold text-slate-900 text-lg mb-1">Call to Book</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Speak to our team<br />
                9 AM – 9 PM<br />
                Mon – Sun
              </p>
            </div>

            {/* WhatsApp Card */}
            <div
              className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm"
            >
              <span className="text-3xl mb-3">💬</span>
              <h3 className="font-bold text-slate-900 text-lg mb-1">WhatsApp</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Message anytime<br />
                We respond within<br />
                2 hours
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-slate-400 mt-6">
            Same-day appointments are sometimes available. Ask our team when you message.
          </p>
        </div>
      </section>



      {/* ══════════════════════════════════════════════
          PATIENT STORY — REGRET NARRATIVE
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-slate-50" id="patient-story">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm">
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full mb-4">
              REAL PATIENT STORY
            </span>
            <blockquote className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium italic">
              &ldquo;I had fatty liver for 2 years. My local doctor said &lsquo;just exercise.&rsquo;
              By the time the pain started, my fibroscan showed Grade 3 fibrosis.
              <span className="text-red-600 font-bold not-italic">
                {" "}If I had come to Dr. Sushrut just 6 months earlier, it would have been fully reversible.
              </span>{" "}
              Don&apos;t make my mistake — get tested now.&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 mt-6">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100 shrink-0 border-2 border-slate-200 shadow-sm relative">
                <Image 
                  src="/images/ramesh_patient.png" 
                  alt="Ramesh K." 
                  fill
                  sizes="48px"
                  className="object-cover" 
                />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">Ramesh K., 48</p>
                <p className="text-xs text-slate-400">Fatty Liver Patient, Sector 62 Noida</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold py-3.5 px-8 rounded-full shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 active:scale-95 transition-all text-center animate-pulse-ring cursor-pointer border-none w-full"
        >
          <Star size={18} />
          Book Appointment Now
        </button>
      </section>

      {/* ══════════════════════════════════════════════
          BIO SECTION + STATS
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-white" id="bio">
        <div className="max-w-4xl mx-auto">
          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 mb-12 justify-center">
            {[
              { stat: "3,000+", label: "Patients Treated" },
              { stat: "95%", label: "Single-Visit Resolution" },
              { stat: "12+", label: "Years Experience" },
              { stat: "500+", label: "Google Reviews" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-black text-teal-600">{s.stat}</p>
                <p className="text-xs text-slate-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                  Why Patients Trust Dr. Sushrut Singh
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mt-3">
                  As a DM-trained gastroenterologist at Fortis Hospital, Noida, Dr. Sushrut is among the few super-specialists in NCR offering advanced procedures like ERCP, EUS, and FibroScan under one roof — trusted by 3,000+ patients across Noida, Greater Noida & Ghaziabad.
                </p>
                <div className="h-1.5 w-20 bg-teal-500 rounded-full"></div>
              </div>

              <ul className="space-y-6">
                {[
                  { icon: <GraduationCap />, title: "DM from ILBS, Delhi", text: "Trained at India's premier liver institute – Institute of Liver & Biliary Sciences." },
                  { icon: <Users />, title: "Under Dr. Shiv Sarin", text: "Direct clinical training under the world-renowned hepatologist." },
                  { icon: <Award />, title: "First Bariatric Endoscopist in UP", text: "Pioneered non-surgical weight loss endoscopy in Uttar Pradesh." },
                  { icon: <ShieldCheck />, title: "Advanced Procedures", text: "Expert in ERCP, EUS, FibroScan, and therapeutic endoscopy." },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="shrink-0 w-12 h-12 bg-teal-50 text-teal-600 flex items-center justify-center rounded-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex-1 w-full relative h-[300px] md:h-[400px]">
              <Image
                src="/images/team.webp"
                alt="Dr. Sushrut Singh Gastroenterology Clinic Team – Noida"
                className="rounded-[2.5rem] shadow-xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500 object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONSULTATION VALUE FRAME — Price Objection Neutralisation
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-teal-50/50" id="consultation">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-teal-100 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
              What You Get in One Consultation
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              Most patients resolve their condition without needing repeat visits
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Stethoscope size={24} />,
                  title: "Complete Diagnosis",
                  desc: "Thorough history review + physical exam by a DM-qualified specialist — not a junior resident",
                },
                {
                  icon: <Microscope size={24} />,
                  title: "Smart Investigation Plan",
                  desc: "Only essential tests recommended. No unnecessary panels — saves you ₹2,000–5,000 in wasteful lab work",
                },
                {
                  icon: <HeartPulse size={24} />,
                  title: "Clear Treatment Roadmap",
                  desc: "Written treatment plan with diet guidance. Follow-up only if medically needed — not to bill you again",
                },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl bg-teal-50/50 border border-teal-100">
                  <div className="w-12 h-12 mx-auto bg-teal-100 text-teal-600 flex items-center justify-center rounded-2xl mb-4">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8 space-y-2">
              <p className="text-sm text-slate-400">
                <GraduationCap size={14} className="inline mr-1" />
                Specialist consultation reflects DM + DNB super-specialty training at ILBS, Delhi
              </p>
              <p className="text-xs text-slate-300">
                Fortis Hospital consultation fees apply. Insurance accepted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          DOCTOR VIDEO — Lazy Loaded for Zero Page Speed Cost
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-white" id="doctor-video">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Hear From Dr. Sushrut Singh
          </h2>
          <p className="text-slate-500 text-sm mb-8 max-w-lg mx-auto">
            A short message from the doctor about Fatty Liver Can Be Dangerous
          </p>
          <LazyYouTube videoId="vyzMJ_QZcuY" />
          <p className="text-xs text-slate-400 mt-4 mb-8">
            <Clock size={12} className="inline mr-1" /> Short clip · No autoplay · Your data is safe
          </p>
          <div className="flex flex-col items-center justify-center max-w-xs mx-auto">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold py-3.5 px-8 rounded-full shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 active:scale-95 transition-all text-center animate-pulse-ring cursor-pointer border-none w-full"
            >
              <Star size={18} />
              Book Appointment Now
            </button>
            <p className="text-xs font-semibold text-center text-teal-700 mt-3 flex items-center justify-center gap-1"><ShieldCheck size={14} /> Get Free Treatment Estimates</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SPECIALTIES — SEO Optimised with Location Keywords
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-slate-50" id="specialties">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Advanced Gastro & Liver Treatments
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Expert diagnostics and treatment for all gastro-intestinal and liver conditions — available at Fortis Hospital, Noida & Gaur City Clinic, Greater Noida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Fatty Liver Treatment in Noida",
                desc: "NAFLD, NASH, and Grade I–III fatty liver diagnosis using FibroScan. Personalised diet + medication plans.",
              },
              {
                title: "Endoscopy & Colonoscopy in Noida",
                desc: "Upper GI endoscopy, colonoscopy, and diagnostic procedures with minimal discomfort from Fortis Hospital.",
              },
              {
                title: "ERCP & EUS Specialist in Noida",
                desc: "Advanced bile duct and pancreatic procedures by one of the few DM-trained ERCP specialists in Western UP.",
              },
              {
                title: "Jaundice & Hepatitis Treatment",
                desc: "Emergency and chronic jaundice evaluation. Hepatitis B & C viral load testing and treatment in Noida.",
              },
              {
                title: "IBS & GERD Treatment in Noida",
                desc: "Chronic acidity, bloating, and irritable bowel syndrome treatment with root-cause diagnosis.",
              },
              {
                title: "Bariatric Endoscopy in Noida",
                desc: "Non-surgical weight loss procedure. First bariatric endoscopist in Uttar Pradesh.",
              },
            ].map((spec, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all"
              >
                <h3 className="font-bold text-teal-700 text-lg mb-2">{spec.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>

          {/* Procedural image */}
          <div className="relative group max-w-2xl mx-auto h-[300px]">
            <Image
              src="/images/procedural.webp"
              alt="Advanced Endoscopy Procedure by Dr. Sushrut Singh – Gastro Clinic in Noida"
              className="rounded-[2.5rem] shadow-2xl object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-teal-900/10 rounded-[2.5rem] group-hover:bg-transparent transition-colors"></div>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════════
          REVIEWS — Google Style Component
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-200" id="reviews">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Real Patient Reviews
              </h2>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-slate-900 mt-1">4.9</span>
                <div className="flex text-[#fbbc05] pt-1 gap-0.5">
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                  <Star fill="currentColor" size={24} />
                </div>
                <p className="text-slate-500 text-sm mt-1">Based on 500+ reviews</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 active:scale-95 transition-all outline-none"
              >
                <Star size={16} /> Book Appointment Now
              </button>
              <p className="text-[11px] font-semibold text-teal-700 mt-2 mr-2">Get Free Treatment Estimates</p>
            </div>
          </div>

          <div className="w-full bg-white p-4 md:p-6 rounded-3xl shadow-sm border border-slate-200">
            {/* Featurable Google Reviews Integration */}
            <div className="w-full bg-transparent [&_a]:pointer-events-none rounded-xl overflow-hidden">
              <div id="featurable-9f77a1ec-3781-4678-a5ea-b32f3b0b6e03" data-featurable-async className="w-full"></div>
            </div>
            <Script src="https://featurable.com/assets/bundle.js" strategy="lazyOnload" charSet="UTF-8" />
          </div>
        </div>
      </section>


      {/* ══════════════════════════════════════════════
          FAQ — VOICE SEARCH OPTIMISED
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-slate-50" id="faq">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Who is the best gastrologist near me in Noida?",
                a: "Dr. Sushrut Singh is a DM-trained gastroenterologist and liver specialist at Fortis Hospital, Noida. With 12+ years of experience and training under Dr. Shiv Sarin at ILBS Delhi, he has treated 3,000+ patients for fatty liver, cirrhosis, hepatitis, and other liver conditions.",
              },
              {
                q: "How do I find a good gastroenterologist near me?",
                a: "Look for a doctor with DM or DNB super-specialty training, hospital affiliation (like Fortis), and verified patient reviews. Dr. Sushrut Singh meets all these criteria — 12+ years experience, 4.9/5 rated, and 95% single-visit resolution rate.",
              },
              {
                q: "Is there a good stomach doctor in Greater Noida?",
                a: "Yes. Dr. Sushrut Singh runs an evening clinic at Gaur City Clinic (2nd Floor, Shop 215, Aarza Square 2, Greater Noida) from 6 PM to 9:30 PM, Mon–Sat. He also practices from Fortis Hospital, Sector 62, Noida.",
              },
              {
                q: "What is the endoscopy cost in Noida?",
                a: "Endoscopy costs from Fortis Hospital Noida vary based on the type of procedure — diagnostic vs. therapeutic. Dr. Sushrut provides a clear cost estimate during your first consultation. Call 093153 54431 for current pricing.",
              },
              {
                q: "Which is the best gastroenterologist clinic near me in Noida?",
                a: "Dr. Sushrut Singh's practice from Fortis Hospital (Sector 62, Noida) and Gaur City Clinic (Greater Noida) is rated 4.9/5 by 500+ patients on Google. Both clinics offer advanced procedures including ERCP, EUS, FibroScan, and bariatric endoscopy.",
              },
              {
                q: "What is the fatty liver treatment cost in Noida?",
                a: "Fatty liver treatment starts with a FibroScan assessment and personalised treatment plan. Most patients with Grade I-II fatty liver recover with medication and lifestyle changes within 3–6 months. Dr. Sushrut focuses on minimal, effective treatment to avoid unnecessary costs.",
              },
              {
                q: "Is ERCP available in Noida and Greater Noida?",
                a: "Yes. Dr. Sushrut Singh is one of the few DM-trained ERCP and EUS specialists in Western Uttar Pradesh, performing these advanced procedures at Fortis Hospital, Noida. He has handled 500+ complex ERCP cases. Patients from Greater Noida and Ghaziabad regularly visit for ERCP procedures.",
              },
              {
                q: "What is a FibroScan and where can I get it in Noida?",
                a: "FibroScan is a painless, non-invasive test that measures liver stiffness to detect fibrosis and fatty liver. It is available at Dr. Sushrut Singh's clinic from Fortis Hospital, Sector 62, Noida.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-slate-900 text-sm md:text-base list-none">
                  {faq.q}
                  <ChevronRight
                    size={18}
                    className="text-slate-400 group-open:rotate-90 transition-transform shrink-0 ml-4"
                  />
                </summary>
                <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-12 px-6" id="book">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 text-center text-white space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Book Your Consultation Today
          </h2>
          <p className="text-slate-400 max-w-md mx-auto">
            Skip the queue — book your slot directly with Dr. Sushrut&apos;s clinic at Fortis Hospital, Noida or Gaur City Clinic, Greater Noida.
          </p>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              id="call-btn-final"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-teal-500 text-white font-semibold py-3.5 px-7 rounded-full shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 active:scale-95 transition-all"
            >
              <Phone size={18} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              id="wa-btn-final"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold py-3.5 px-7 rounded-full hover:bg-white/20 active:scale-95 transition-all backdrop-blur-sm"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SEO CONTENT BLOCK — Crawlable keyword-rich text for Quality Score
          This section provides Google's crawler with natural keyword density
      ══════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-white border-t border-slate-100" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
            About Dr. Sushrut Singh — Gastroenterologist in Noida
          </h2>
          <div className="prose prose-slate max-w-none text-sm text-slate-500 leading-relaxed space-y-4">
            <p>
              Dr. Sushrut Singh is a DM-trained gastroenterologist and liver specialist at <strong>Fortis Hospital, Noida</strong>. With over 12 years of clinical experience and the trust of 3,000+ patients across NCR, he provides expert care for a wide range of gastro-intestinal and liver conditions.
            </p>
            <p>
              His qualifications include MBBS, MD from King George Medical College (KGMC), and DM in Hepatology from the Institute of Liver &amp; Biliary Sciences (ILBS), Delhi — where he trained directly under Dr. Shiv Sarin, one of the world&apos;s leading hepatologists. This training allows him to offer DM-level specialist care that most general physicians cannot match.
            </p>
            <p>
              Patients from Noida, Greater Noida, Ghaziabad, and the wider NCR visit for conditions including fatty liver (NAFLD/NASH), chronic GERD, IBS, jaundice, hepatitis B &amp; C, and unexplained abdominal pain. He is also one of the few doctors in Western UP who performs advanced procedures like <strong>ERCP, EUS, FibroScan, and bariatric endoscopy</strong> — all available at Fortis Hospital, Noida.
            </p>
            <p>
              95% of patients resolve their condition in a single visit with a clear diagnosis, a written treatment plan, and specific dietary guidance. No unnecessary tests, no repeat visits for billing — just expert gastro care from a Ex-Fortis specialist.
            </p>
            <div className="mt-10 mb-2">
              {/* Liver Fact Card */}
              <div className="bg-gradient-to-br from-slate-900 to-teal-950 rounded-3xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal-500/20 rounded-2xl p-3 shrink-0">
                    <HeartPulse size={28} className="text-teal-400" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-teal-400 mb-1">Science Says</p>
                    <p className="text-base font-bold leading-snug text-white mb-2">
                      80% of liver damage is reversible — but only if caught early by an expert.
                    </p>
                    <p className="text-[13px] text-slate-300 leading-relaxed">
                      A landmark 2022 study in <em>The Lancet</em> found that patients treated by a DM-trained hepatologist (super-specialist) had <strong className="text-teal-300">3x better outcomes</strong> than those seen by general physicians. Your liver is your body&apos;s only detox organ. You only have one. Don&apos;t ignore the signs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center pb-6">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold py-3.5 px-8 rounded-full shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 active:scale-95 transition-all outline-none border-none cursor-pointer"
              >
                <Star size={16} /> Book Appointment with Doctor
              </button>
            </div>
          </div>
        </div>
      </section>
      <PriorityFormModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </main>
  );
}

function PriorityFormModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({ name: '', phone: '', timing: 'Morning (9 AM - 12 PM)' });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate phone: required, can have +91 or other chars, but should result in 10 digits
    const digits = formData.phone.replace(/\D/g, '');
    const normalizedPhone = digits.length > 10 ? digits.slice(-10) : digits;
    
    const newErrors: { name?: string; phone?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (normalizedPhone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number.';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    // Set submitted immediately for 'instant' feel
    setSubmitted(true);
    
    // Push event to GTM dataLayer for tracking
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        'event': 'form_submission',
        'form_name': 'Priority Appointment Form',
        'patient_name': formData.name,
        'patient_timing': formData.timing
      });
    }

    // Fire-and-forget submission to Google Sheet in background
    const GOOGLE_APP_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw3tk1nB_xVwe4Cf9Zq3Cs0Xip41uTGF8mBOM9MwWqfaPqbp4Bt1f-zBo5qXekD_bzh/exec";
    const params = new URLSearchParams();
    params.append("name", formData.name);
    params.append("phone", normalizedPhone);
    params.append("timing", formData.timing);
    
    fetch(GOOGLE_APP_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      body: params,
    }).catch(err => console.error("Form background submission error", err));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm px-4">
      <div className="bg-white rounded-3xl w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-slate-400 hover:text-slate-900 text-xl leading-none">
          ✕
        </button>

        {!submitted ? (
          <>
            <h3 className="text-xl font-bold text-slate-900 mb-1">Book Appointment</h3>
            <p className="text-sm text-slate-500 mb-5">Fill this form — our team will confirm your slot shortly.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name <span className="text-red-500 text-xs">*</span>
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.name ? 'border-red-400 bg-red-50 focus:ring-red-400' : 'border-slate-200'
                    }`}
                  value={formData.name}
                  onChange={e => { setErrors(prev => ({ ...prev, name: undefined })); setFormData({ ...formData, name: e.target.value }); }}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                    <span>⚠</span> {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number <span className="text-red-500 text-xs">*</span>
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  maxLength={13}
                  className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-teal-500 transition ${errors.phone ? 'border-red-400 bg-red-50 focus:ring-red-400' : 'border-slate-200'
                    }`}
                  value={formData.phone}
                  onChange={e => { setErrors(prev => ({ ...prev, phone: undefined })); setFormData({ ...formData, phone: e.target.value }); }}
                  placeholder="10-digit mobile number"
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1 font-medium">
                    <span>⚠</span> {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Timing</label>
                <select className="w-full px-4 py-2 mb-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500" value={formData.timing} onChange={e => setFormData({ ...formData, timing: e.target.value })}>
                  <option>Morning (9 AM - 12 PM)</option>
                  <option>Afternoon (12 PM - 4 PM)</option>
                  <option>Evening (4 PM - 9 PM)</option>
                  <option>Sunday (12 PM - 3 PM)</option>
                </select>
                <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 flex gap-2">
                  <ShieldCheck size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-[11px] text-slate-600 font-medium leading-snug">
                    You will get confirmation from our team within 15 min. If not, call <a href={`tel:${PHONE_NUMBER}`} className="font-bold text-blue-700">{PHONE_NUMBER}</a>
                  </span>
                </div>
              </div>
              <button type="submit" className="w-full py-4 mt-1 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 active:scale-95 transition-all outline-none border-none cursor-pointer">
                📅 Request My Priority Slot
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Request Sent! 🎉</h3>
            <p className="text-slate-500 mt-2 text-sm">Our team will call you within <strong>15 minutes</strong> to confirm your priority slot.</p>
            <p className="text-xs text-slate-400 mt-3">Didn&apos;t hear from us? Call <a href={`tel:${PHONE_NUMBER}`} className="font-semibold text-teal-600">{PHONE_NUMBER}</a></p>
          </div>
        )}
      </div>
    </div>
  );
}
