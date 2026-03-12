"use client";

import {
    Phone,
    MessageCircle,
    ShieldCheck,
    FileText,
    Scale,
    AlertTriangle,
} from "lucide-react";

const PHONE_NUMBER = "09315354431";
const WA_NUMBER = "919315354431";
const WA_MESSAGE = encodeURIComponent(
    "Hi, I want to book an appointment with Dr. Sushrut"
);

export default function LegalPage() {
    return (
        <main className="min-h-screen bg-subtle-mesh">
            {/* ─── Sticky CTA Bar (top on desktop, bottom on mobile) ─── */}
            <div
                className="fixed bottom-0 left-0 right-0 z-50 md:top-0 md:bottom-auto"
                style={{ paddingBottom: "var(--safe-bottom)" }}
            >
                <div className="bg-white/90 backdrop-blur-xl border-t md:border-t-0 md:border-b border-slate-200 shadow-[0_-2px_16px_rgba(0,0,0,0.08)] md:shadow-[0_2px_16px_rgba(0,0,0,0.08)]">
                    <div className="max-w-3xl mx-auto px-5 py-3 flex items-center gap-3">
                        <p className="hidden sm:block text-sm text-slate-600 font-medium flex-1">
                            Need a consultation? Don&apos;t leave without booking.
                        </p>
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            id="call-btn-legal-sticky"
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-teal-500 text-white font-semibold text-sm py-3 px-5 rounded-xl active:scale-[0.97] transition-transform shadow-md shadow-teal-200/30"
                        >
                            <Phone size={16} strokeWidth={2.5} />
                            Book Appointment
                        </a>
                        <a
                            href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                            id="wa-btn-legal-sticky"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold text-sm py-3 px-5 rounded-xl active:scale-[0.97] transition-transform shadow-md shadow-green-200/30"
                        >
                            <MessageCircle size={16} strokeWidth={2.5} />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>

            {/* ─── Content ─── */}
            <div className="max-w-3xl mx-auto px-5 pt-8 pb-28 md:pt-24 md:pb-12">
                {/* Page Header */}
                <div className="mb-10">
                    <a
                        href="/"
                        className="inline-flex items-center gap-1 text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors mb-4"
                    >
                        ← Back to Home
                    </a>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Legal Information
                    </h1>
                    <p className="mt-2 text-slate-500 text-sm">
                        Last updated: March 2026
                    </p>
                </div>

                {/* ════════════════════════════════
            SECTION 1: PRIVACY POLICY
        ════════════════════════════════ */}
                <section className="mb-10" id="privacy">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                            <ShieldCheck size={20} className="text-teal-600" />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                            Privacy Policy
                        </h2>
                    </div>

                    <div className="glass-card rounded-2xl p-5 sm:p-6 space-y-4 text-sm text-slate-600 leading-relaxed">
                        <p>
                            Dr.&nbsp;Sushrut Singh&apos;s clinic (&ldquo;we,&rdquo;
                            &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
                            protecting your privacy. This policy describes how we collect, use,
                            and safeguard your personal information when you use this website.
                        </p>

                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                Information We Collect
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-slate-500">
                                <li>
                                    <strong>Contact details</strong> such as name, phone number,
                                    and email when you reach out via call or WhatsApp.
                                </li>
                                <li>
                                    <strong>Usage data</strong> including pages viewed, time spent,
                                    and device type collected via Google Analytics / Google Tag
                                    Manager.
                                </li>
                                <li>
                                    <strong>Cookies &amp; tracking pixels</strong> for advertising
                                    optimisation through Google Ads.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                How We Use Your Information
                            </h3>
                            <ul className="list-disc list-inside space-y-1 text-slate-500">
                                <li>To respond to your appointment or consultation requests.</li>
                                <li>
                                    To measure the effectiveness of our advertising campaigns.
                                </li>
                                <li>
                                    To improve our website experience and content relevance.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                Data Sharing &amp; Security
                            </h3>
                            <p className="text-slate-500">
                                We do not sell or rent your personal information to third
                                parties. Data may be shared with Google for advertising purposes
                                only. We implement reasonable security measures to protect your
                                information, but no method of transmission over the internet is
                                100% secure.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                Your Rights
                            </h3>
                            <p className="text-slate-500">
                                You have the right to access, correct, or request deletion of
                                your personal data. Contact us at the provided phone number to
                                exercise these rights.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════
            SECTION 2: TERMS OF SERVICE
        ════════════════════════════════ */}
                <section className="mb-10" id="terms">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center">
                            <Scale size={20} className="text-teal-600" />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                            Terms of Service
                        </h2>
                    </div>

                    <div className="glass-card rounded-2xl p-5 sm:p-6 space-y-4 text-sm text-slate-600 leading-relaxed">
                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                Use of This Website
                            </h3>
                            <p className="text-slate-500">
                                This website is provided for informational purposes to help
                                patients learn about Dr.&nbsp;Sushrut Singh&apos;s
                                gastroenterology practice and book appointments. By using this
                                site, you agree to these terms.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                Appointment Booking
                            </h3>
                            <p className="text-slate-500">
                                Clicking call or WhatsApp buttons initiates contact with our
                                clinic. Appointment availability is subject to the
                                doctor&apos;s schedule. Booking confirmation will be provided by
                                our clinic staff.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                Content Accuracy
                            </h3>
                            <p className="text-slate-500">
                                We make every effort to keep information on this website accurate
                                and up-to-date. However, clinic timings, location details, and
                                available treatments may change. Please confirm directly with
                                our clinic.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-800 mb-1">
                                Limitation of Liability
                            </h3>
                            <p className="text-slate-500">
                                This website and its content are provided &ldquo;as is.&rdquo;
                                We are not liable for any direct, indirect, or consequential
                                damages arising from the use of this website or reliance on
                                information provided herein.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════
            SECTION 3: MEDICAL DISCLAIMER
        ════════════════════════════════ */}
                <section className="mb-10" id="disclaimer">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                            <AlertTriangle size={20} className="text-amber-600" />
                        </div>
                        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                            Medical Disclaimer
                        </h2>
                    </div>

                    <div className="rounded-2xl border-2 border-amber-200 bg-amber-50/50 p-5 sm:p-6 space-y-4 text-sm text-slate-600 leading-relaxed">
                        <div className="flex items-start gap-3 bg-white/60 rounded-xl p-4 border border-amber-100">
                            <AlertTriangle
                                size={20}
                                className="text-amber-500 shrink-0 mt-0.5"
                            />
                            <p className="font-semibold text-slate-800">
                                The information provided on this website is for general
                                informational and educational purposes only. It is{" "}
                                <span className="text-amber-700 underline underline-offset-2">
                                    not a substitute for professional medical advice, diagnosis, or
                                    treatment
                                </span>
                                .
                            </p>
                        </div>

                        <p className="text-slate-500">
                            Always seek the advice of your physician or other qualified health
                            provider with any questions you may have regarding a medical
                            condition. Never disregard professional medical advice or delay in
                            seeking it because of something you have read on this website.
                        </p>

                        <p className="text-slate-500">
                            The testimonials displayed on this website reflect individual
                            patient experiences and may not represent the results that every
                            patient will achieve. Medical outcomes vary based on individual
                            health conditions, compliance with treatment, and other factors.
                        </p>

                        <p className="text-slate-500">
                            If you think you may have a medical emergency, call your doctor or
                            emergency services immediately. Reliance on any information
                            provided by this website is solely at your own risk.
                        </p>
                    </div>
                </section>

                {/* ─── Quick-nav links ─── */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 border-t border-slate-200 pt-6">
                    <FileText size={14} />
                    <a
                        href="#privacy"
                        className="hover:text-teal-600 transition-colors underline-offset-2 hover:underline"
                    >
                        Privacy Policy
                    </a>
                    <span>·</span>
                    <a
                        href="#terms"
                        className="hover:text-teal-600 transition-colors underline-offset-2 hover:underline"
                    >
                        Terms of Service
                    </a>
                    <span>·</span>
                    <a
                        href="#disclaimer"
                        className="hover:text-teal-600 transition-colors underline-offset-2 hover:underline"
                    >
                        Medical Disclaimer
                    </a>
                </div>
            </div>
        </main>
    );
}
