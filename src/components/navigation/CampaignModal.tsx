"use client";

import React, { useState } from "react";
import { H3D_DATA } from "../../lib/data";
import { X, Check, ArrowRight, Mail, Phone, Building2, MapPin, Calendar } from "lucide-react";

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFormatId?: string;
  initialLocationId?: string;
}

export const CampaignModal: React.FC<CampaignModalProps> = ({
  isOpen,
  onClose,
  initialFormatId,
  initialLocationId,
}) => {
  const [selectedFormats, setSelectedFormats] = useState<string[]>(
    initialFormatId ? [initialFormatId] : ["led-screen-billboards"]
  );
  const [selectedZone, setSelectedZone] = useState<string>(
    initialLocationId || "New Bus Stand Terminal Concourse"
  );
  const [duration, setDuration] = useState<string>("1 Month");
  const [brandName, setBrandName] = useState<string>("");
  const [contactName, setContactName] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const toggleFormat = (id: string) => {
    if (selectedFormats.includes(id)) {
      if (selectedFormats.length > 1) {
        setSelectedFormats(selectedFormats.filter((f) => f !== id));
      }
    } else {
      setSelectedFormats([...selectedFormats, id]);
    }
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateEmailLink = () => {
    const formatNames = selectedFormats
      .map((fid) => H3D_DATA.mediaFormats.find((f) => f.id === fid)?.name || fid)
      .join(", ");
    
    const subject = encodeURIComponent(`[Campaign Inquiry] ${brandName || "Brand"} - Horizon 3D Media`);
    const body = encodeURIComponent(
      `Hi H3D Media Team,\n\n` +
      `We would like to plan an OOH advertising campaign in Guruvayur Municipality.\n\n` +
      `Campaign Specifications:\n` +
      `- Brand / Organization: ${brandName || "Not specified"}\n` +
      `- Contact Person: ${contactName || "Not specified"}\n` +
      `- Phone: ${contactPhone || "Not specified"}\n` +
      `- Email: ${contactEmail || "Not specified"}\n` +
      `- Selected Media Formats: ${formatNames}\n` +
      `- Target Municipal Zone: ${selectedZone}\n` +
      `- Campaign Duration: ${duration}\n\n` +
      `Please provide site availability, line-of-sight metrics, and campaign setup details.\n\n` +
      `Best regards,\n${contactName || brandName || "Advertiser"}`
    );
    return `mailto:${H3D_DATA.company.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl border border-black/10 p-6 sm:p-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-md text-[#6B7280] hover:text-[#0A0B0E] hover:bg-black/5 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 mb-8 pr-8">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-h3d-blue/10 border border-h3d-blue/30 text-[11px] font-mono text-h3d-blue uppercase tracking-wider font-bold">
            <span className="w-2 h-2 rounded-full bg-h3d-blue" />
            <span>Interactive OOH Campaign Planner</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight text-[#0A0B0E]">
            PLAN YOUR MUNICIPAL CAMPAIGN
          </h2>
          <p className="text-sm font-sans text-[#4A4E5C]">
            Configure your target formats and strategic zones across Guruvayur Municipality. Directly connect with our media operations desk.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSendInquiry} className="space-y-8">
            {/* Step 1: Select Media Formats */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold tracking-wider text-[#0A0B0E] uppercase flex items-center gap-2">
                <Building2 className="w-4 h-4 text-h3d-blue" />
                <span>1. Select Media Formats (Multiple Choice)</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {H3D_DATA.mediaFormats.map((format) => {
                  const isSelected = selectedFormats.includes(format.id);
                  return (
                    <button
                      type="button"
                      key={format.id}
                      onClick={() => toggleFormat(format.id)}
                      className={`flex items-center justify-between p-3 rounded-md text-left transition-all border ${
                        isSelected
                          ? "bg-h3d-blue/10 border-h3d-blue text-[#0A0B0E] shadow-sm font-semibold"
                          : "bg-[#FAF9F5] border-black/[0.08] text-[#4A4E5C] hover:bg-white hover:text-[#0A0B0E]"
                      }`}
                    >
                      <div className="pr-2">
                        <div className="text-xs font-bold font-display tracking-wide">{format.name}</div>
                        <div className="text-[10px] font-mono text-[#6B7280]">{format.category} Media</div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-sm flex items-center justify-center border ${
                          isSelected ? "bg-h3d-blue border-h3d-blue text-white" : "border-black/20 bg-white"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Target Location / Zone */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold tracking-wider text-[#0A0B0E] uppercase flex items-center gap-2">
                <MapPin className="w-4 h-4 text-h3d-blue" />
                <span>2. Target Municipal Zone</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  "New Bus Stand Terminal Concourse",
                  "East & West Temple Artery Corridors",
                  "Municipal Ring Road & Bypass Arterial",
                  "Municipal Bus Stops & Feeder Shelters",
                  "All-Zone Comprehensive Municipal Network",
                ].map((zone) => {
                  const isSelected = selectedZone === zone;
                  return (
                    <button
                      type="button"
                      key={zone}
                      onClick={() => setSelectedZone(zone)}
                      className={`p-3 rounded-md text-left transition-all border flex items-center justify-between ${
                        isSelected
                          ? "bg-h3d-blue/10 border-h3d-blue text-[#0A0B0E] shadow-sm font-semibold"
                          : "bg-[#FAF9F5] border-black/[0.08] text-[#4A4E5C] hover:bg-white hover:text-[#0A0B0E]"
                      }`}
                    >
                      <span className="text-xs font-medium font-sans">{zone}</span>
                      <div
                        className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                          isSelected ? "border-h3d-blue bg-h3d-blue" : "border-black/20 bg-white"
                        }`}
                      >
                        {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Campaign Duration & Brand Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#4A4E5C] font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-h3d-blue" />
                  <span>Duration</span>
                </label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-black/10 rounded px-3 py-2 text-xs font-mono text-[#0A0B0E] focus:outline-none focus:border-h3d-blue"
                >
                  <option value="15 Days (High-Burst)">15 Days (High-Burst)</option>
                  <option value="1 Month (Standard)">1 Month (Standard)</option>
                  <option value="3 Months (Quarterly)">3 Months (Quarterly)</option>
                  <option value="6 Months+ (Annual Contract)">6 Months+ (Annual Contract)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#4A4E5C] font-semibold">Brand / Organization</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Corp / Retail Brand"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-black/10 rounded px-3 py-2 text-xs font-sans text-[#0A0B0E] focus:outline-none focus:border-h3d-blue placeholder-black/30"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-[#4A4E5C] font-semibold">Contact Phone / WhatsApp</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full bg-[#FAF9F5] border border-black/10 rounded px-3 py-2 text-xs font-mono text-[#0A0B0E] focus:outline-none focus:border-h3d-blue placeholder-black/30"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-black/[0.08]">
              <div className="flex items-center gap-4 text-xs font-mono text-[#6B7280]">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-h3d-blue" />
                  {H3D_DATA.company.email}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-h3d-blue" />
                  {H3D_DATA.company.phone}
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={generateEmailLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-h3d-blue hover:bg-blue-600 text-white rounded font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(15,82,255,0.3)] transition-all"
                >
                  <span>LAUNCH CAMPAIGN INQUIRY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </form>
        ) : (
          <div className="text-center py-12 space-y-6">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-display font-extrabold text-[#0A0B0E]">Campaign Inquiry Prepared</h3>
              <p className="text-sm text-[#4A4E5C] max-w-md mx-auto">
                Your target media profile for <strong className="text-[#0A0B0E]">{selectedZone}</strong> is ready. Connect directly with our operations team:
              </p>
            </div>
            <div className="flex justify-center gap-4 pt-4">
              <a
                href={generateEmailLink()}
                className="px-6 py-3 bg-h3d-blue text-white rounded font-mono text-xs font-bold tracking-wider hover:bg-blue-600 shadow-md"
              >
                OPEN IN EMAIL CLIENT →
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-black/5 hover:bg-black/10 text-[#0A0B0E] rounded font-mono text-xs"
              >
                RETURN TO EXPLORER
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
