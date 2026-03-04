"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import {
  Phone,
  MessageCircle,
  Star,
  ShieldCheck,
  Award,
  Stethoscope,
  HeartPulse,
  Microscope,
  Syringe,
  Activity,
  BadgeCheck,
  ChevronRight,
  Zap,
  Users,
  GraduationCap,
} from "lucide-react";

/* ─── Constants ─── */
const PHONE_NUMBER = "09315354431";
const WA_NUMBER = "919315354431";
const WA_MESSAGE = encodeURIComponent(
  "Hi, I want to book an appointment with Dr. Sushrut"
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
    <main className="min-h-screen bg-subtle-mesh flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin" />
    </main>
  );
}

/* ─── Main Landing Page ─── */
function LandingPage() {
  const searchParams = useSearchParams();
  const city = searchParams.get("city") || "Noida";
  const intent = searchParams.get("intent") || "Gastroenterologist";

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20 md:pb-0">
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

      {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
      <section className="relative pt-12 pb-16 px-6 bg-hero-gradient overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left animate-fade-in-up">
              <span className="inline-block px-4 py-1.5 bg-teal-100 text-teal-700 text-sm font-bold rounded-full">
                12+ Years of Excellence
              </span>
              <h1 className="text-3xl md:text-5xl font-black leading-[1.15] text-slate-900 tracking-tight">
                Top <span className="text-teal-600">{intent}</span> in {city}
              </h1>
              {/* <p className="text-lg text-slate-600 font-medium">
                Dr. Sushrut Singh <br className="md:hidden" />
                <span className="text-slate-400 font-normal">MBBS, MD (KGMC), DM (ILBS)</span>
              </p> */}

              <div className="flex flex-col gap-4 max-w-sm mx-auto md:mx-0">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  id="call-btn-hero"
                  className="bg-teal-600 text-white font-bold text-lg py-5 px-8 rounded-2xl shadow-xl shadow-teal-200/50 hover:bg-teal-700 active:scale-95 transition-all text-center animate-pulse-ring"
                >
                  Book Appointment Now
                </a>
                <p className="text-sm text-slate-400">
                  <Star size={14} className="inline mr-1 text-amber-400 fill-amber-400" />
                  Rated 4.9/5 by 500+ Patients
                </p>
              </div>
            </div>

            {/* Doctor Photo */}
            <div className="flex-1 relative animate-scale-in">
              <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                <div className="absolute inset-0 bg-teal-200 rounded-[3rem] rotate-6"></div>
                <img
                  src="/images/portrait.jpg"
                  alt="Dr. Sushrut Singh"
                  className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl border-4 border-white"
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
          BIO SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-white" id="bio">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="flex-1 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Expert Care for Your Health</h2>
                <div className="h-1.5 w-20 bg-teal-500 rounded-full"></div>
              </div>

              <ul className="space-y-6">
                {[
                  { icon: <GraduationCap />, title: "DM from ILBS", text: "Trained at the premier Liver Institute of India." },
                  { icon: <Users />, title: "Under Dr. Shiv Sarin", text: "Direct training under world-renowned expert." },
                  { icon: <Award />, title: "Bariatric Pioneer", text: "First Bariatric Endoscopist in Uttar Pradesh." },
                  { icon: <ShieldCheck />, title: "Advanced Procedures", text: "Expert in ERCP, EUS, and FibroScan." }
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

            <div className="flex-1 w-full">
              <img
                src="/images/team.jpg"
                alt="Dr. Sushrut with his team"
                className="w-full rounded-[2.5rem] shadow-xl grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SPECIALTIES SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-slate-50" id="specialties">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">Specialized Treatments</h2>
            <p className="text-slate-500 max-w-lg mx-auto">Providing advanced diagnostic and therapeutic solutions for all gastro-intestinal issues.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="grid gap-4">
              {[
                { title: "Liver Diseases", desc: "Cirrhosis, Hepatitis, Fatty Liver management." },
                { title: "Digestive Care", desc: "IBS, IBD, GERD, and Chronic Acidity." },
                { title: "Endoscopy", desc: "Advanced ERCP, EUS, and Bariatric Gastroscopy." }
              ].map((spec, i) => (
                <div key={i} className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-teal-700 text-lg mb-1">{spec.title}</h3>
                  <p className="text-slate-500 text-sm">{spec.desc}</p>
                </div>
              ))}
            </div>

            <div className="relative group">
              <img
                src="/images/procedural.jpg"
                alt="Endoscopy Procedure"
                className="rounded-[2.5rem] shadow-2xl object-cover h-[400px] w-full"
              />
              <div className="absolute inset-0 bg-teal-900/10 rounded-[2.5rem] group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          REVIEWS
      ══════════════════════════════════════════════ */}
      <section className="py-20 px-6 bg-white" id="reviews">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">What Our Patients Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Rajesh Kumar", text: "Dr. Sushrut is extremely patient. He explained my liver condition thoroughly." },
              { name: "Priya Sharma", text: "Finally found relief for my GERD. The treatment worked within days." },
              { name: "Amit Verma", text: "Expertise is unmatched in ERCP. Outstanding results for my mother." }
            ].map((r, i) => (
              <div key={i} className="p-8 bg-slate-50 rounded-[2rem] space-y-4 relative overflow-hidden">
                <div className="flex text-amber-400 gap-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed">"{r.text}"</p>
                <p className="font-bold text-slate-900 text-sm">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA SECTION
      ══════════════════════════════════════════════ */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-10 text-center text-white space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-2xl md:text-3xl font-bold">Priority Consultations</h2>
          <p className="text-slate-400 max-w-md mx-auto">Skip the queue. Book your slot directly with the clinic office today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`tel:${PHONE_NUMBER}`} id="call-btn-mid" className="w-full sm:w-auto bg-teal-500 text-white font-bold py-4 px-10 rounded-2xl hover:bg-teal-600 transition-colors">
              Call Clinic Now
            </a>
            <a href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`} className="w-full sm:w-auto border border-white/20 hover:bg-white/10 py-4 px-10 rounded-2xl transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
