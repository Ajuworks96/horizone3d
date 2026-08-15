"use client";

import React, { useState } from "react";
import { H3D_DATA } from "../../lib/data";
import { Mail, Phone, MapPin, ArrowUpRight, Send, Check } from "lucide-react";

interface ContactExperienceProps {
  onOpenCampaignModal: () => void;
}

export const ContactExperience: React.FC<ContactExperienceProps> = ({ onOpenCampaignModal }) => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const getDirectEmailHref = () => {
    const subject = encodeURIComponent(`[Direct Contact] ${formData.org || formData.name || "Brand"} - H3D Inquiry`);
    const body = encodeURIComponent(
      `Hi Horizon 3D Media Co.,\n\n` +
      `Contact Name: ${formData.name || "Not specified"}\n` +
      `Organization: ${formData.org || "Not specified"}\n` +
      `Phone: ${formData.phone || "Not specified"}\n\n` +
      `Message:\n${formData.message || "We would like to discuss billboard and transit advertising opportunities in Guruvayur Municipality."}\n\n` +
      `Best regards,\n${formData.name || "Client"}`
    );
    return `mailto:${H3D_DATA.company.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative bg-transparent py-24 sm:py-32 border-t border-black/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Master Call to Action Statement */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-h3d-blue/10 text-xs font-semibold text-h3d-blue uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-h3d-blue" />
            <span>Operations & Campaign Desk</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#0A0B0E] tracking-tight uppercase leading-[0.98]">
            Put Your Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
              In The Right Place.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#4A4E5C] font-sans max-w-2xl pt-2">
            Secure high-visibility outdoor media space, transit shelter branding, and LED screen slots across Guruvayur Municipality.
          </p>
        </div>

        {/* Contact Grid: Direct Communication Cards + Quick Direct Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <a
              href={`mailto:${H3D_DATA.company.email}`}
              className="block p-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.06] hover:border-h3d-blue/50 transition-all group shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-[#6B7280] mb-2 uppercase tracking-wider">
                <span>Direct Email Desk</span>
                <ArrowUpRight className="w-4 h-4 group-hover:text-h3d-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="text-lg sm:text-xl font-mono font-bold text-[#0A0B0E] group-hover:text-h3d-blue transition-colors">
                {H3D_DATA.company.email}
              </div>
              <div className="text-xs font-sans text-[#4A4E5C] mt-1">
                Typical response time: Within 24 hours for RFP & media kits
              </div>
            </a>

            {/* Phone / WhatsApp Card */}
            <a
              href={`tel:${H3D_DATA.company.phone.replace(/\s+/g, '')}`}
              className="block p-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.06] hover:border-h3d-blue/50 transition-all group shadow-sm hover:shadow-lg"
            >
              <div className="flex items-center justify-between text-xs font-semibold text-[#6B7280] mb-2 uppercase tracking-wider">
                <span>Phone & WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 group-hover:text-h3d-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <div className="text-lg sm:text-xl font-mono font-bold text-[#0A0B0E] group-hover:text-h3d-blue transition-colors">
                {H3D_DATA.company.phone}
              </div>
              <div className="text-xs font-sans text-[#4A4E5C] mt-1">
                Direct lines to media planners and municipal coordinators
              </div>
            </a>

            {/* Municipal Hub Territory */}
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-black/[0.06] space-y-1.5 shadow-sm">
              <div className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">OPERATIONAL BASE</div>
              <div className="text-base sm:text-lg font-display font-bold text-[#0A0B0E]">
                Guruvayur Municipality, Kerala
              </div>
              <div className="text-xs font-medium text-emerald-600 font-sans">
                Prime Transit & Arterial Media Coverage
              </div>
            </div>

            {/* Interactive Campaign Planner Button */}
            <button
              onClick={onOpenCampaignModal}
              className="w-full py-4 px-6 bg-h3d-blue hover:bg-blue-600 text-white rounded-xl font-semibold text-sm tracking-wide flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all active:scale-[0.99]"
            >
              <span>Launch Campaign Planner</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Direct Inquiry Message Box */}
          <div className="lg:col-span-7 bg-white border border-black/[0.08] rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.06] mb-6">
              <div className="text-xs font-bold text-h3d-blue uppercase tracking-wider">
                Direct Media Inquiry Form
              </div>
              <div className="text-xs font-sans text-[#6B7280]">Direct to H3D Desk</div>
            </div>

            {!formSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#4A4E5C]">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-black/10 rounded px-3 py-2.5 text-xs font-sans text-[#0A0B0E] focus:outline-none focus:border-h3d-blue placeholder-black/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#4A4E5C]">Brand / Agency</label>
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="w-full bg-[#F8FAFC] border border-black/10 rounded-xl px-3.5 py-2.5 text-xs font-sans text-[#0A0B0E] focus:outline-none focus:border-h3d-blue placeholder-black/30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#4A4E5C]">Contact Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99478 34661"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-black/10 rounded-xl px-3.5 py-2.5 text-xs font-mono text-[#0A0B0E] focus:outline-none focus:border-h3d-blue placeholder-black/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#4A4E5C]">Campaign Requirements & Target Sites</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on your desired formats (LED screen, large billboard, bus shelters) and planned timing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-black/10 rounded-xl px-3.5 py-2.5 text-xs font-sans text-[#0A0B0E] focus:outline-none focus:border-h3d-blue placeholder-black/30"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={getDirectEmailHref()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 bg-h3d-blue hover:bg-blue-600 text-white rounded font-mono text-xs font-semibold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(15,82,255,0.3)] transition-all"
                  >
                    <span>SEND DIRECT INQUIRY</span>
                    <Send className="w-3.5 h-3.5" />
                  </a>

                  <div className="text-[10px] font-mono text-[#6B7280]">
                    Sends to horizonoutofhome@gmail.com
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xl font-display font-bold text-[#0A0B0E]">Inquiry Compiled</h4>
                  <p className="text-xs text-[#4A4E5C] max-w-sm mx-auto">
                    Click below to open your email client and send directly to Horizon 3D Media:
                  </p>
                </div>
                <a
                  href={getDirectEmailHref()}
                  className="inline-block px-6 py-3 bg-h3d-blue text-white rounded font-mono text-xs font-bold tracking-wider"
                >
                  OPEN EMAIL CLIENT →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
