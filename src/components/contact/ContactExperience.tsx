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
    <section id="contact" className="relative bg-[#FAF9F5] py-24 sm:py-32 border-t border-black/[0.08] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-h3d-blue/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-grid-light opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Master Call to Action Statement */}
        <div className="max-w-4xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-black/[0.04] border border-black/[0.08] text-[11px] font-mono text-h3d-blue uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-h3d-blue" />
            <span>OPERATIONS & CAMPAIGN DESK</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold text-[#0A0B0E] tracking-tight uppercase leading-[0.98]">
            PUT YOUR BRAND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-h3d-blue via-blue-600 to-[#0A0B0E]">
              IN THE RIGHT PLACE.
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
              className="block p-6 rounded-lg bg-white border border-black/[0.08] hover:border-h3d-blue/50 transition-all group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] mb-2">
                <span>DIRECT EMAIL DESK</span>
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
              className="block p-6 rounded-lg bg-white border border-black/[0.08] hover:border-h3d-blue/50 transition-all group shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between text-xs font-mono text-[#6B7280] mb-2">
                <span>PHONE & WHATSAPP</span>
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
            <div className="p-6 rounded-lg bg-white border border-black/[0.08] space-y-2 shadow-sm">
              <div className="text-xs font-mono text-[#6B7280] font-semibold">OPERATIONAL BASE</div>
              <div className="text-base sm:text-lg font-display font-bold text-[#0A0B0E]">
                Guruvayur Municipality, Kerala
              </div>
              <div className="text-xs font-mono text-h3d-blue font-bold">
                COORDINATES: {H3D_DATA.company.coordinates}
              </div>
            </div>

            {/* Interactive Campaign Planner Button */}
            <button
              onClick={onOpenCampaignModal}
              className="w-full py-4 px-6 bg-h3d-blue hover:bg-blue-600 text-white rounded font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(15,82,255,0.3)] transition-all"
            >
              <span>LAUNCH FULL CAMPAIGN CONFIGURATOR</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Direct Inquiry Message Box */}
          <div className="lg:col-span-7 bg-white border border-black/[0.08] rounded-lg p-6 sm:p-8 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.08] mb-6">
              <div className="text-xs font-mono text-h3d-blue font-bold uppercase tracking-wider">
                RAPID MEDIA INQUIRY FORM
              </div>
              <div className="text-[10px] font-mono text-[#6B7280]">DIRECT TO H3D DESK</div>
            </div>

            {!formSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#4A4E5C] font-semibold">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-black/10 rounded px-3 py-2.5 text-xs font-sans text-[#0A0B0E] focus:outline-none focus:border-h3d-blue placeholder-black/30"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#4A4E5C] font-semibold">Brand / Agency</label>
                    <input
                      type="text"
                      required
                      placeholder="Company Name"
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      className="w-full bg-[#FAF9F5] border border-black/10 rounded px-3 py-2.5 text-xs font-sans text-[#0A0B0E] focus:outline-none focus:border-h3d-blue placeholder-black/30"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#4A4E5C] font-semibold">Contact Phone / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99478 34661"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-black/10 rounded px-3 py-2.5 text-xs font-mono text-[#0A0B0E] focus:outline-none focus:border-h3d-blue placeholder-black/30"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#4A4E5C] font-semibold">Campaign Requirements & Target Sites</label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on your desired formats (LED screen, large billboard, bus shelters) and planned timing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-black/10 rounded px-3 py-2.5 text-xs font-sans text-[#0A0B0E] focus:outline-none focus:border-h3d-blue placeholder-black/30"
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
