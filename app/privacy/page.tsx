import React from "react";
import Navigation from "@/components/landing/Navigation";
import Footer from "@/components/landing/Footer";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { Shield, Lock, Database, Eye } from "lucide-react";

const securityFeatures = [
  { icon: Lock, title: "Bank-Level Encryption", description: "Industry-standard encryption" },
  { icon: Eye, title: "No Data Selling", description: "We never sell your information" },
  { icon: Database, title: "Secure Storage", description: "Protected on Supabase" },
  { icon: Shield, title: "Minimal Collection", description: "Only essential data" },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 pb-4">
        <Breadcrumbs
          items={[
            { label: "Privacy Policy" }
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Privacy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Policy
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">Last Updated: January 2025</p>
          <p className="text-lg text-gray-400">
            Your privacy matters. Here's how we protect your data.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12">
            <div className="prose prose-invert prose-cyan max-w-none">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  D20 Loot Tracker ("we," "our," or "us") respects your privacy. This Privacy
                  Policy explains how we collect, use, and protect your information when you use
                  our service.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Information We Collect</h2>

                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Account Information</h3>
                <ul className="space-y-3 text-gray-300 mb-6">
                  <li>
                    <strong className="text-white">Email address</strong> - Used for account
                    creation and authentication
                  </li>
                  <li>
                    <strong className="text-white">Password</strong> - Encrypted and securely
                    stored
                  </li>
                  <li>
                    <strong className="text-white">Campaign data</strong> - Campaign names, player
                    names, items, gold amounts, and transaction history
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                  Automatically Collected Information
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <strong className="text-white">Usage data</strong> - How you interact with the
                    app (page views, features used)
                  </li>
                  <li>
                    <strong className="text-white">Device information</strong> - Browser type,
                    operating system, IP address
                  </li>
                  <li>
                    <strong className="text-white">Cookies</strong> - For authentication and
                    session management
                  </li>
                </ul>
              </section>

              {/* How We Use Your Information */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 mb-4">We use your information to:</p>
                <ul className="space-y-2 text-gray-300">
                  <li>Provide and maintain the service</li>
                  <li>Authenticate your account</li>
                  <li>Store your campaign data</li>
                  <li>Sync data in real-time across devices</li>
                  <li>Improve and optimize our service</li>
                  <li>Communicate important updates (with your consent)</li>
                </ul>
              </section>

              {/* Data Storage and Security */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Data Storage and Security
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li>All data is stored on Supabase (cloud PostgreSQL database)</li>
                  <li>Passwords are hashed using industry-standard encryption</li>
                  <li>Data transmission is encrypted using HTTPS/TLS</li>
                  <li>We implement Row Level Security (RLS) to isolate user data</li>
                  <li>
                    Your campaign data is private - only you and invited users can access it
                  </li>
                </ul>
              </section>

              {/* Third-Party Services */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Third-Party Services</h2>
                <p className="text-gray-300 mb-6">We use the following third-party services:</p>

                <div className="space-y-6">
                  <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Supabase</h3>
                    <p className="text-gray-300 mb-2">
                      <strong className="text-cyan-400">Purpose:</strong> Database, authentication,
                      and real-time sync
                    </p>
                    <p className="text-gray-300 mb-2">
                      <strong className="text-cyan-400">Data Shared:</strong> Email, encrypted
                      password, campaign data
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-cyan-400">Privacy Policy:</strong>{" "}
                      <a
                        href="https://supabase.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline"
                      >
                        https://supabase.com/privacy
                      </a>
                    </p>
                  </div>

                  <div className="bg-slate-700/30 border border-slate-600 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Vercel</h3>
                    <p className="text-gray-300 mb-2">
                      <strong className="text-cyan-400">Purpose:</strong> Web hosting and content
                      delivery
                    </p>
                    <p className="text-gray-300 mb-2">
                      <strong className="text-cyan-400">Data Shared:</strong> Usage analytics, IP
                      addresses
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-cyan-400">Privacy Policy:</strong>{" "}
                      <a
                        href="https://vercel.com/legal/privacy-policy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 underline"
                      >
                        https://vercel.com/legal/privacy-policy
                      </a>
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Sharing */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Data Sharing</h2>

                <h3 className="text-xl font-semibold text-red-400 mb-3">We DO NOT:</h3>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>Sell your personal information</li>
                  <li>Share your data with advertisers</li>
                  <li>Use your data for marketing without consent</li>
                  <li>
                    Access your campaign data except for technical support (with your permission)
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-yellow-400 mb-3">We MAY share data:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>If required by law or legal process</li>
                  <li>To protect our rights or prevent fraud</li>
                  <li>With your explicit consent</li>
                </ul>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-gray-300 mb-4">You have the right to:</p>
                <ul className="space-y-3 text-gray-300">
                  <li>
                    <strong className="text-white">Access your data</strong> - View all data we
                    store about you
                  </li>
                  <li>
                    <strong className="text-white">Delete your data</strong> - Delete your account
                    and all associated campaign data
                  </li>
                  <li>
                    <strong className="text-white">Export your data</strong> - Request a copy of
                    your data (transaction logs available in-app)
                  </li>
                  <li>
                    <strong className="text-white">Correct your data</strong> - Update or correct
                    inaccurate information
                  </li>
                  <li>
                    <strong className="text-white">Object to processing</strong> - Opt out of
                    non-essential data collection
                  </li>
                </ul>
              </section>

              {/* Data Retention */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Data Retention</h2>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">Active accounts:</strong> Data retained while
                    your account is active
                  </li>
                  <li>
                    <strong className="text-white">Deleted accounts:</strong> Data permanently
                    deleted within 30 days
                  </li>
                  <li>
                    <strong className="text-white">Backups:</strong> Backup data deleted within 90
                    days
                  </li>
                </ul>
              </section>

              {/* Cookies */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Cookies</h2>
                <p className="text-gray-300 mb-4">We use cookies for:</p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li>
                    <strong className="text-white">Authentication</strong> - Keeping you logged in
                    (essential)
                  </li>
                  <li>
                    <strong className="text-white">Session management</strong> - Maintaining your
                    session (essential)
                  </li>
                </ul>
                <p className="text-gray-300">
                  You can disable cookies in your browser, but this will prevent you from using the
                  service.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Children's Privacy</h2>
                <p className="text-gray-300">
                  D20 Loot Tracker is not intended for users under 13. We do not knowingly collect
                  data from children under 13. If we discover we have collected data from a child
                  under 13, we will delete it immediately.
                </p>
              </section>

              {/* International Users */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">International Users</h2>
                <p className="text-gray-300">
                  Your data may be stored and processed in the United States or other countries
                  where Supabase operates. By using our service, you consent to this transfer.
                </p>
              </section>

              {/* Changes to This Policy */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Changes to This Policy</h2>
                <p className="text-gray-300 mb-4">
                  We may update this Privacy Policy from time to time. We will notify users of
                  significant changes by:
                </p>
                <ul className="space-y-2 text-gray-300 mb-4">
                  <li>Updating the "Last Updated" date</li>
                  <li>Sending an email notification (for major changes)</li>
                </ul>
                <p className="text-gray-300">
                  Continued use of the service after changes constitutes acceptance of the updated
                  policy.
                </p>
              </section>

              {/* Your Consent */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Your Consent</h2>
                <p className="text-gray-300">
                  By using D20 Loot Tracker, you consent to this Privacy Policy.
                </p>
              </section>

              {/* Contact Us */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-gray-300 mb-4">
                  If you have questions about this Privacy Policy or want to exercise your rights:
                </p>
                <p className="text-gray-300">
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:connorprovines@gmail.com"
                    className="text-cyan-400 hover:text-cyan-300 underline"
                  >
                    connorprovines@gmail.com
                  </a>
                </p>
              </section>

              {/* GDPR Compliance */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">GDPR Compliance (EU Users)</h2>
                <p className="text-gray-300 mb-4">
                  If you're in the European Union, you have additional rights under GDPR:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>Right to data portability</li>
                  <li>Right to restrict processing</li>
                  <li>Right to withdraw consent</li>
                  <li>Right to lodge a complaint with a supervisory authority</li>
                </ul>
              </section>

              {/* CCPA Compliance */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  CCPA Compliance (California Users)
                </h2>
                <p className="text-gray-300 mb-4">
                  If you're a California resident, you have rights under CCPA:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of sale of personal information (we don't sell data)</li>
                  <li>Right to non-discrimination</li>
                </ul>
              </section>

              {/* Note */}
              <section className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-blue-400">Note:</strong> This service is free and
                  supported by the open-source community. We are not a commercial entity and
                  collect minimal data necessary for functionality.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
