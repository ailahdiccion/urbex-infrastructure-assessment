"use client";




import React, { useMemo, useState } from "react";
import logo from './assets/Urbex logo.png';



function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}




function Icon({ name, size = 22, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };




  const icons = {
    camera: <><path d="M14.5 4h-5L8 6H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3l-1.5-2z" /><circle cx="12" cy="13" r="3" /></>,
    upload: <><path d="M12 16V4" /><path d="m7 9 5-5 5 5" /><path d="M20 16v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3" /></>,
    home: <><path d="m3 11 9-8 9 8" /><path d="M5 10v10h14V10" /><path d="M9 20v-6h6v6" /></>,
    chart: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="M8 16v-5" /><path d="M12 16V8" /><path d="M16 16v-3" /></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h6" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></>,
    sparkles: <><path d="M12 3 9.5 8.5 4 11l5.5 2.5L12 19l2.5-5.5L20 11l-5.5-2.5L12 3z" /><path d="M19 3v4" /><path d="M21 5h-4" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-5" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>,
    chevron: <path d="m9 18 6-6-6-6" />,
    download: <><path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" /></>,
    share: <><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="m8.6 13.5 6.8 4" /><path d="m15.4 6.5-6.8 4" /></>,
    mapPin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
    building: <><path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" /><path d="M16 8h2a2 2 0 0 1 2 2v11" /><path d="M8 7h4" /><path d="M8 11h4" /><path d="M8 15h4" /><path d="M3 21h18" /></>,
    wallet: <><path d="M3 7a2 2 0 0 1 2-2h14v14H5a2 2 0 0 1-2-2z" /><path d="M16 12h4" /><path d="M7 9h5" /></>,
    handshake: <><path d="M8 12 5 9l4-4 3 3" /><path d="m16 12 3-3-4-4-3 3" /><path d="M8 12l3 3a2 2 0 0 0 3 0l2-2" /><path d="m12 8 4 4" /></>,
    tree: <><path d="M12 22v-7" /><path d="M8 15h8l-2.5-4h2L12 4l-3.5 7h2L8 15z" /></>,
    bulb: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M8 14a6 6 0 1 1 8 0c-.8.7-1 1.5-1 2H9c0-.5-.2-1.3-1-2z" /></>,
    waves: <><path d="M3 8c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 2-2" /><path d="M3 14c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 2-2" /></>,
    road: <><path d="M7 21 10 3" /><path d="M17 21 14 3" /><path d="M12 8v2" /><path d="M12 14v2" /><path d="M4 21h16" /></>,
    chair: <><path d="M7 13V6a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v7" /><path d="M5 13h14v4H5z" /><path d="M7 21v-4" /><path d="M17 21v-4" /></>,
    footprints: <><path d="M8 11c-1 1-2 2-2 4a3 3 0 0 0 6 0c0-2-2-4-4-4z" /><path d="M16 5c-1 1-2 2-2 4a3 3 0 0 0 6 0c0-2-2-4-4-4z" /></>,
    user: <><path d="M20 21a8 8 0 0 0-16 0" /><circle cx="12" cy="7" r="4" /></>,
    eye: <><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>,
    eyeOff: <><path d="m3 3 18 18" /><path d="M10.6 10.6A2 2 0 0 0 13.4 13.4" /><path d="M9.9 5.2A9.7 9.7 0 0 1 12 5c6.5 0 10 7 10 7a16.3 16.3 0 0 1-3.1 4.1" /><path d="M6.6 6.6A16.1 16.1 0 0 0 2 12s3.5 7 10 7a9.8 9.8 0 0 0 4.2-.9" /></>,
    message: <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />,
    settings: <><path d="M12 15.5A3.5 3.5 0 1 0 12 8a3.5 3.5 0 0 0 0 7.5z" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1A2 2 0 1 1 7.1 4l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.6V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.6h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.6 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" /></>,
    logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><path d="m16 17 5-5-5-5" /><path d="M21 12H9" /></>,
    send: <><path d="m22 2-7 20-4-9-9-4 20-7z" /><path d="M22 2 11 13" /></>,
    copy: <><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
    search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
  };




  return <svg {...common}>{icons[name] || icons.shield}</svg>;
}




const infraRules = [
  { key: "coveredWalkway", label: "Covered Walkway", icon: "home", detectedScore: 15, missingPenalty: -20 },
  { key: "lighting", label: "Street Lighting", icon: "bulb", detectedScore: 10, missingPenalty: -10 },
  { key: "greenery", label: "Greenery", icon: "tree", detectedScore: 15, missingPenalty: -15 },
  { key: "drainage", label: "Drainage", icon: "waves", detectedScore: 15, missingPenalty: -20 },
  { key: "road", label: "Road Surface", icon: "road", detectedScore: 15, missingPenalty: -20 },
  { key: "seating", label: "Public Seating", icon: "chair", detectedScore: 10, missingPenalty: -10 },
  { key: "pedestrian", label: "Pedestrian Lane", icon: "footprints", detectedScore: 10, missingPenalty: -15 },
];




const samples = [
  { id: "tondo", name: "Tondo Street", barangay: "Barangay 105", city: "Manila", image: "https://i.ytimg.com/vi/MG_YlnxF9Tw/maxresdefault.jpg", detected: ["lighting", "road"], poor: ["drainage", "road"] },
  { id: "bgc", name: "BGC Sidewalk", barangay: "Bonifacio Global City", city: "Taguig", image: "https://i.pinimg.com/736x/f3/85/05/f385057b5eb6eb20ca4f6ff17ef1edc3--city-c-philippines.jpg", detected: ["coveredWalkway", "lighting", "greenery", "drainage", "road", "seating", "pedestrian"], poor: [] },
  { id: "payatas", name: "Payatas Road", barangay: "Payatas", city: "Quezon City", image: "https://i.ytimg.com/vi/an5lU9BXqK0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGFIgXChlMA8=&rs=AOn4CLB-j6NrXVRbik4zvwkp3nGG2idXoQ", detected: ["lighting", "road", "pedestrian"], poor: ["road", "drainage"] },
  { id: "marikina", name: "Marikina Riverside", barangay: "Sto. Niño", city: "Marikina", image: "https://greatruns.com/wp-content/uploads/2024/07/Marikina_River_from_Riverbanks_Center_Dec_2023.jpg", detected: ["lighting", "greenery", "drainage", "road", "seating", "pedestrian"], poor: [] },
];




const actionPaths = [
  { id: "relocation", title: "Area Options", icon: "mapPin", tag: "Personal", description: "Compare nearby barangays with better public-space scores before deciding where to study, work, or move." },
  { id: "report", title: "Barangay Report", icon: "file", tag: "Immediate", description: "Create, copy, download, or send a formal barangay concern report." },
  { id: "organize", title: "Community Card", icon: "share", tag: "Community", description: "Generate a short share card for neighbors and group chats." },
  { id: "escalate", title: "Council Escalation", icon: "building", tag: "Escalate", description: "Prepare a stronger second-level report when the barangay has not responded." },
  { id: "funding", title: "Funding Matches", icon: "wallet", tag: "Resources", description: "Match the missing infrastructure to possible improvement programs and request letters." },
  { id: "ngo", title: "Civic Partner Message", icon: "handshake", tag: "Support", description: "Send a prepared report message to a civic partner or community organizer." },
];




function scoreLocation(place) {
  const detected = Array.isArray(place?.detected) ? place.detected : [];
  const poor = Array.isArray(place?.poor) ? place.poor : [];
  let score = 50;




  const breakdown = infraRules.map((rule) => {
    const isDetected = detected.includes(rule.key);
    const isPoor = poor.includes(rule.key);
    let points = isDetected ? rule.detectedScore : rule.missingPenalty;
    if (isPoor) points -= 12;
    score += points;
    return {
      ...rule,
      points,
      status: isPoor ? "Needs repair" : isDetected ? "Detected" : "Missing",
      value: isPoor ? 35 : isDetected ? 85 : 15,
    };
  });




  score = Math.max(0, Math.min(100, score));
  const level = score >= 75 ? "Strong" : score >= 45 ? "Fair" : score >= 20 ? "Needs Attention" : "Severely Underserved";
  return { score, level, breakdown };
}




function hashString(text) {
  return String(text || "urbex").split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
}




function makeUploadedPlace({ file, dataUrl, barangay, city, slot }) {
  const hash = hashString(file?.name + slot + barangay + city);
  const detected = infraRules.filter((_, index) => ((hash + index * 7) % 11) > 4).map((item) => item.key);
  const poor = infraRules.filter((_, index) => ((hash + index * 5) % 13) > 9).map((item) => item.key);
  return {
    id: `upload-${slot}-${hash}`,
    name: file?.name ? file.name.replace(/\.[^/.]+$/, "") : `Uploaded Street ${slot}`,
    barangay: barangay || "Uploaded Barangay",
    city: city || "Uploaded City",
    image: dataUrl,
    detected,
    poor,
    uploaded: true,
  };
}




function passwordChecklist(password) {
  return {
    min: password.length >= 8,
    special: /[!@#$%^&*(),.?":{}|<>_\-+=/\[\]\\;]/.test(password),
    number: /\d/.test(password),
  };
}




function scoreTheme(score) {
  if (score >= 75) return { color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-200", fill: "bg-emerald-500", soft: "bg-emerald-100" };
  if (score >= 45) return { color: "text-amber-700", bg: "bg-amber-50", border: "border-amber-200", fill: "bg-amber-500", soft: "bg-amber-100" };
  if (score >= 20) return { color: "text-orange-700", bg: "bg-orange-50", border: "border-orange-200", fill: "bg-orange-500", soft: "bg-orange-100" };
  return { color: "text-rose-700", bg: "bg-rose-50", border: "border-rose-200", fill: "bg-rose-500", soft: "bg-rose-100" };
}




function missingItems(result) {
  return result.breakdown.filter((item) => item.status !== "Detected");
}




function detectedItems(result) {
  return result.breakdown.filter((item) => item.status === "Detected");
}




function topMissing(result, count = 3) {
  return missingItems(result).slice(0, count);
}




function downloadText(filename, text) {
  const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}




async function copyText(text, setStatus) {
  try {
    await navigator.clipboard.writeText(text);
    setStatus?.("Copied to clipboard.");
  } catch {
    setStatus?.("Copy failed. You may manually select the text.");
  }
}




function buildBarangayReport({ place, result, barangay, city }) {
  const weak = missingItems(result).map((item) => `- ${item.label}: ${item.status}`).join("\n") || "- No major weak item detected";
  const strong = detectedItems(result).map((item) => `- ${item.label}`).join("\n") || "- No strong item detected";
  return `URBEX BARANGAY PUBLIC-SPACE REPORT




Location: ${barangay || place.barangay}, ${city || place.city}
Reference Area: ${place.name}
Public-Space Score: ${result.score}/100
Condition Level: ${result.level}




Main Concerns:
${weak}




Detected Strong Points:
${strong}




Request:
We respectfully request the barangay office to review the listed public-space concerns and consider appropriate action such as inspection, maintenance, repair planning, or referral to the proper city office.




Filipino Summary:
Magalang po naming hinihiling na masuri ang mga nabanggit na kakulangan sa pampublikong espasyo sa lugar na ito. Ang mga pangunahing isyu ay may kaugnayan sa kaligtasan, daanan, ilaw, drainage, at pang-araw-araw na paggalaw ng residente.




Prepared through Urbex.`;
}




function buildCommunityCard({ place, result, barangay, city }) {
  const weak = topMissing(result).map((item) => item.label).join(", ") || "No major issue detected";
  return `URBEX COMMUNITY CARD




${place.name}
${barangay || place.barangay}, ${city || place.city}




Score: ${result.score}/100 (${result.level})
Top concerns: ${weak}




Call to action:
Neighbors can help by submitting more photos of the same area and reporting repeated concerns to the barangay office.`;
}




function buildEscalationReport({ place, result, barangay, city }) {
  const weak = missingItems(result).map((item) => `${item.label} (${item.status})`).join(", ") || "No major weak item detected";
  return `URBEX COUNCIL ESCALATION BRIEF




Area: ${place.name}
Location: ${barangay || place.barangay}, ${city || place.city}
Score: ${result.score}/100
Classification: ${result.level}




Reason for Escalation:
The location continues to show visible public-space concerns that may require review beyond the barangay level.




Priority Items:
${weak}




Requested Action:
1. Conduct site validation or inspection.
2. Identify the responsible office for repair or improvement.
3. Include the area in maintenance, accessibility, road safety, drainage, or public-space improvement planning.
4. Provide residents with an update or timeline.




Prepared through Urbex.`;
}




function getFundingMatches(result) {
  const weakKeys = new Set(missingItems(result).map((item) => item.key));
  const matches = [];
  if (weakKeys.has("drainage")) matches.push({ title: "Drainage and Flood Mitigation", fit: "For poor drainage or visible flooding concerns.", next: "Request site inspection, drainage clearing, or inclusion in local flood-control planning." });
  if (weakKeys.has("road")) matches.push({ title: "Road Repair and Maintenance", fit: "For cracked, uneven, or unsafe road surface conditions.", next: "Submit photos and ask for road repair scheduling or referral to the engineering office." });
  if (weakKeys.has("lighting")) matches.push({ title: "Street Lighting Improvement", fit: "For dim, unsafe, or missing lighting infrastructure.", next: "Request installation, bulb replacement, or safety audit for night-time mobility." });
  if (weakKeys.has("coveredWalkway") || weakKeys.has("pedestrian")) matches.push({ title: "Pedestrian Safety Improvement", fit: "For missing walkways, pedestrian lanes, or safer crossing needs.", next: "Ask for lane repainting, walkway planning, or pedestrian safety measures." });
  if (weakKeys.has("greenery") || weakKeys.has("seating")) matches.push({ title: "Public Space Upgrading", fit: "For lack of trees, shade, seating, or usable community spaces.", next: "Coordinate a small public-space improvement proposal with community evidence." });
  return matches.length ? matches : [{ title: "General Public-Space Maintenance", fit: "For basic maintenance and area monitoring.", next: "Use the generated report as documentation for follow-up." }];
}




function buildFundingRequest({ place, result, barangay, city }) {
  const matches = getFundingMatches(result).map((item) => `- ${item.title}: ${item.fit}`).join("\n");
  return `URBEX FUNDING / RESOURCE REQUEST




Location: ${barangay || place.barangay}, ${city || place.city}
Reference Area: ${place.name}
Score: ${result.score}/100




Recommended Improvement Tracks:
${matches}




Request:
We request assistance in identifying possible local programs, office referrals, maintenance budgets, or community improvement support that may address the listed public-space gaps.




Prepared through Urbex.`;
}




function buildPartnerMessage({ place, result, barangay, city }) {
  const weak = topMissing(result).map((item) => item.label).join(", ") || "general public-space monitoring";
  return `Hello, we are requesting support for a public-space concern in ${barangay || place.barangay}, ${city || place.city}.




Urbex generated a score of ${result.score}/100 for ${place.name}. The main concerns are: ${weak}.




May we ask for guidance on how residents can document this properly, organize evidence, and raise the concern to the appropriate office?




Thank you.`;
}




function Button({ children, onClick, variant = "dark", className = "", type = "button", disabled = false }) {
  const styles = {
    dark: "bg-stone-950 text-white shadow-lg shadow-stone-900/10 hover:bg-stone-800",
    light: "bg-white text-stone-950 border border-stone-200 hover:bg-stone-50",
    green: "bg-emerald-600 text-white shadow-lg shadow-emerald-900/10 hover:bg-emerald-700",
    amber: "bg-amber-500 text-white shadow-lg shadow-amber-900/10 hover:bg-amber-600",
    disabled: "bg-stone-300 text-stone-500 pointer-events-none",
  };
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={cn("min-h-12 rounded-2xl px-5 inline-flex items-center justify-center gap-2 font-black transition", disabled ? styles.disabled : styles[variant], className)}>
      {children}
    </button>
  );
}




function Card({ children, className = "" }) {
  return <div className={cn("rounded-[28px] border border-stone-200 bg-white/85 p-5 shadow-lg shadow-stone-900/5", className)}>{children}</div>;
}




function Input({ label, value, onChange, placeholder, compact = false, className = "" }) {
  return (
    <label className={cn(compact ? "block" : "mt-4 block first:mt-0", className)}>
      <span className={cn("block text-xs font-black text-stone-500", compact ? "mb-1" : "mb-2")}>{label}</span>
      <input className={cn("w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 outline-none transition focus:border-emerald-400 focus:bg-white", compact ? "py-2.5 text-sm" : "py-3.5")} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
    </label>
  );
}




function PasswordInput({ label, value, onChange, show, setShow, placeholder, compact = false }) {
  return (
    <label className={cn(compact ? "mt-2 block" : "mt-4 block")}>
      <span className={cn("block text-xs font-black text-stone-500", compact ? "mb-1" : "mb-2")}>{label}</span>
      <div className="relative">
        <input className={cn("w-full rounded-2xl border border-stone-200 bg-stone-50 px-4 pr-14 outline-none transition focus:border-emerald-400 focus:bg-white", compact ? "py-2.5 text-sm" : "py-3.5")} type={show ? "text" : "password"} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
        <button type="button" className="absolute right-2 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-xl bg-white text-stone-600" onClick={() => setShow(!show)}>
          <Icon name={show ? "eyeOff" : "eye"} size={18} />
        </button>
      </div>
    </label>
  );
}




function Header({ title, onBack, user, darkHeader }) {
  return (
    <div className={cn(
      "sticky top-0 z-20 flex items-center gap-3 border-b px-5 pb-4 pt-11 backdrop-blur-xl",
      darkHeader
        ? "border-white/10 bg-stone-950/90 text-white"
        : "border-stone-200/80 bg-[#fbfaf6]/90 text-stone-950"
    )}>
     
      <button
        className="grid h-11 w-11 place-items-center rounded-2xl border border-stone-200 bg-white text-stone-700"
        onClick={onBack}
      >
        <Icon name="chevron" size={18} className="rotate-180" />
      </button>


      <div className="min-w-0 flex-1">
        <p className="m-0 text-[10px] font-black uppercase tracking-[.22em] text-emerald-600">
          URBEX
        </p>
        <h1 className="truncate text-lg font-black">{title}</h1>
      </div>


      {user?.avatar && (
        <img
          className="h-9 w-9 rounded-full border-2 border-white object-cover"
          src={user.avatar}
          alt="Profile"
        />
      )}
    </div>
  );
}




function BottomNav({ screen, setScreen }) {
  const items = [
    ["home", "home", "Home"],
    ["scan", "camera", "Scan"],
    ["results", "chart", "Results"],
    ["actions", "file", "Actions"],
    ["chat", "message", "Support"],
    ["profile", "user", "Profile"],
  ];
  return (
    <nav className="absolute inset-x-0 bottom-0 grid grid-cols-6 gap-0.5 border-t border-stone-200 bg-white/90 px-2.5 pb-4 pt-2 backdrop-blur-xl">
      {items.map(([id, icon, label]) => (
        <button key={id} onClick={() => setScreen(id)} className={cn("flex flex-col items-center gap-1 rounded-2xl px-1 py-2 text-[9px] font-black transition", screen === id ? "bg-emerald-50 text-emerald-700" : "text-stone-400 hover:bg-stone-50")}>
          <Icon name={icon} size={18} />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  );
}




function AuthScreen({ onLogin }) {
  const [mode, setMode] = useState("signin");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });




  const rules = passwordChecklist(form.password);
  const emailValid = /\S+@\S+\.\S+/.test(form.email);
  const canCreate = form.name.trim().length >= 2 && emailValid && rules.min && rules.special && rules.number && form.password === form.confirm;
  const canSignIn = emailValid && form.password.length > 0;
  const isCreate = mode === "create";




  function submit(e) {
    e.preventDefault();
    if (isCreate && !canCreate) return;
    if (!isCreate && !canSignIn) return;
    onLogin({
      name: form.name || "Urbex User",
      email: form.email,
      avatar: "https://api.dicebear.com/7.x/initials/svg?seed=" + encodeURIComponent(form.name || form.email || "Urbex"),
    });
  }




  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#dcfce7,#f8f3ea_42%,#e7dfcf)] p-0 text-stone-900 sm:p-5">
      <div className="mx-auto h-screen max-w-[420px] overflow-hidden bg-[#fbfaf6] shadow-2xl shadow-stone-900/30 sm:h-[850px] sm:rounded-[42px] sm:border-8 sm:border-stone-950">
        <main className="flex h-full flex-col gap-3 overflow-hidden px-5 py-4">
          <section className={cn("shrink-0 rounded-[30px] bg-stone-950 text-white shadow-2xl shadow-stone-900/20 transition-all", isCreate ? "p-5" : "p-6 sm:p-7")}>
            <div className={cn("grid place-items-center rounded-[22px] text-emerald-700 transition-all", isCreate ? "mb-4 h-12 w-12" : "mb-10 h-16 w-16")}>
              <img src={logo} alt="Urbex Logo" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[.18em] text-emerald-500">Civic street scoring</p>
            <h1 className={cn("font-black leading-none tracking-[-.08em]", isCreate ? "text-5xl" : "text-6xl")}>Urbex</h1>
            <p className={cn("mt-3 text-sm leading-6 text-stone-200", isCreate && "line-clamp-2")}>Read public-space conditions, compare areas, and prepare clear next steps for your community.</p>
          </section>




          <Card className="shrink-0 p-4">
            <div className="mb-3 grid grid-cols-2 gap-1.5 rounded-[20px] bg-stone-200 p-1.5">
              <button type="button" className={cn("rounded-2xl p-2.5 text-sm font-black", mode === "signin" ? "bg-white text-stone-950 shadow" : "text-stone-500")} onClick={() => setMode("signin")}>Sign in</button>
              <button type="button" className={cn("rounded-2xl p-2.5 text-sm font-black", mode === "create" ? "bg-white text-stone-950 shadow" : "text-stone-500")} onClick={() => setMode("create")}>Create account</button>
            </div>




            <form onSubmit={submit}>
              {isCreate && <Input compact label="Full name" value={form.name} onChange={(value) => setForm({ ...form, name: value })} placeholder="Your name" />}
              <Input compact label="Email" value={form.email} onChange={(value) => setForm({ ...form, email: value })} placeholder="you@example.com" />
              <PasswordInput compact label="Password" value={form.password} onChange={(value) => setForm({ ...form, password: value })} show={showPass} setShow={setShowPass} placeholder="Enter password" />




              {isCreate && (
                <>
                  <PasswordInput compact label="Confirm password" value={form.confirm} onChange={(value) => setForm({ ...form, confirm: value })} show={showConfirm} setShow={setShowConfirm} placeholder="Confirm password" />
                  <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] font-extrabold">
                    <span className={rules.min ? "text-emerald-700" : "text-stone-400"}>✓ 8 characters</span>
                    <span className={rules.special ? "text-emerald-700" : "text-stone-400"}>✓ Special char</span>
                    <span className={rules.number ? "text-emerald-700" : "text-stone-400"}>✓ Number</span>
                    <span className={form.confirm && form.password === form.confirm ? "text-emerald-700" : "text-stone-400"}>✓ Match</span>
                  </div>
                </>
              )}




              <Button type="submit" className="mt-4 w-full" variant={(isCreate ? canCreate : canSignIn) ? "dark" : "disabled"}>{isCreate ? "Create account" : "Sign in"}</Button>
            </form>
          </Card>
        </main>
      </div>
    </div>
  );
}




function UploadPanel({ label, place, barangay, city, onBarangay, onCity, onUpload, samplesList, onSample, activeSampleId, compact = false }) {
  return (
    <Card className={cn("space-y-4", compact && "p-4")}>
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[.18em] text-emerald-700">{label}</p>
          <h3 className="text-lg font-black">{place.name}</h3>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-black text-emerald-700">Ready</span>
      </div>




      <div className="relative h-36 overflow-hidden rounded-[24px] bg-stone-100">
        <img src={place.image} alt={place.name} className="h-full w-full object-cover" />
        {place.uploaded && <span className="absolute right-3 top-3 rounded-full bg-stone-950/80 px-3 py-1 text-xs font-black text-white">Uploaded</span>}
      </div>




      <div className="grid grid-cols-2 items-start gap-3">
        <Input compact className="mt-0" label="Barangay" value={barangay} onChange={onBarangay} placeholder="Barangay" />
        <Input compact className="mt-0" label="City" value={city} onChange={onCity} placeholder="City" />
      </div>




      <label className="flex cursor-pointer items-center gap-3 rounded-[24px] border-2 border-dashed border-emerald-200 bg-emerald-50 p-4 text-left">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-emerald-700"><Icon name="upload" /></div>
        <div className="flex-1">
          <b className="text-sm font-black">Upload street photo</b>
          <p className="mt-1 text-xs leading-5 text-stone-500">The demo scanner will read this file and generate a simulated score.</p>
        </div>
        <input type="file" accept="image/*" className="hidden" onChange={onUpload} />
      </label>




      <div>
        <p className="mb-2 text-xs font-black uppercase tracking-[.18em] text-stone-500">Demo samples</p>
        <div className="grid grid-cols-2 gap-3">
          {samplesList.map((sample) => (
            <button key={sample.id} onClick={() => onSample(sample)} className={cn("overflow-hidden rounded-[24px] border bg-white text-left shadow-sm", activeSampleId === sample.id ? "border-emerald-400 ring-4 ring-emerald-100" : "border-stone-200")}>
              <img className="h-20 w-full object-cover" src={sample.image} alt={sample.name} />
              <div className="p-3">
                <b className="block truncate text-xs font-black">{sample.name}</b>
                <span className="mt-1 block truncate text-[11px] text-stone-500">{sample.city}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}




function ScanScreen({ mode, setMode, selected, compare, barangay, city, compareBarangay, compareCity, setBarangay, setCity, setCompareBarangay, setCompareCity, chooseSample, chooseCompare, handleUpload, handleCompareUpload, setScreen, user, settings }) {
  return (
    <section className="min-h-full">
      <Header title={mode === "compare" ? "Compare Places" : "Scan a Place"} onBack={() => setScreen("home")} user={user} darkHeader={settings.darkHeader} />
      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-3xl font-black tracking-[-.04em]">{mode === "compare" ? "Compare two areas" : "Scan one area"}</h2>
          <p className="mt-2 text-sm leading-6 text-stone-500">{mode === "compare" ? "Use two photos or samples to see score gap and side-by-side differences." : "Use one photo or sample to create a single public-space report."}</p>
        </div>




        <div className="grid grid-cols-2 gap-1.5 rounded-[22px] bg-stone-200 p-1.5">
          <button className={cn("rounded-2xl p-3 text-sm font-black", mode === "single" ? "bg-white shadow" : "text-stone-500")} onClick={() => setMode("single")}>Single Scan</button>
          <button className={cn("rounded-2xl p-3 text-sm font-black", mode === "compare" ? "bg-white shadow" : "text-stone-500")} onClick={() => setMode("compare")}>Compare</button>
        </div>




        {mode === "single" ? (
          <UploadPanel label="Single scan target" place={selected} barangay={barangay} city={city} onBarangay={setBarangay} onCity={setCity} onUpload={handleUpload} samplesList={samples} onSample={chooseSample} activeSampleId={selected.id} />
        ) : (
          <>
            <UploadPanel compact label="Place A" place={selected} barangay={barangay} city={city} onBarangay={setBarangay} onCity={setCity} onUpload={handleUpload} samplesList={samples} onSample={chooseSample} activeSampleId={selected.id} />
            <UploadPanel compact label="Place B" place={compare} barangay={compareBarangay} city={compareCity} onBarangay={setCompareBarangay} onCity={setCompareCity} onUpload={handleCompareUpload} samplesList={samples.filter((item) => item.id !== selected.id)} onSample={chooseCompare} activeSampleId={compare.id} />
          </>
        )}




        <Button className="w-full" variant="green" onClick={() => setScreen("results")}>
          <Icon name={mode === "compare" ? "chart" : "search"} size={18} />
          {mode === "compare" ? "Generate Comparison Report" : "Run Scanner"}
        </Button>
      </div>
    </section>
  );
}




function BarGraph({ data }) {
  return (
    <div className="grid gap-3">
      {data.map((item) => (
        <div key={item.key}>
          <div className="mb-2 flex items-center justify-between gap-3 text-xs text-stone-600">
            <span>{item.label}</span>
            <b>{item.value}</b>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-stone-100">
            <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-700" style={{ width: `${Math.min(100, item.value)}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}




function BreakdownCard({ breakdown }) {
  return (
    <Card className="mt-3">
      <div className="mb-3 font-black">Infrastructure Breakdown</div>
      <div className="grid gap-2.5">
        {breakdown.map((item) => (
          <div key={item.key} className="flex items-center gap-3 rounded-2xl border border-stone-100 bg-stone-50 p-3">
            <div className={cn("grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white", item.status === "Detected" ? "text-emerald-700" : "text-rose-700")}><Icon name={item.icon} size={18} /></div>
            <div className="min-w-0 flex-1"><b className="block text-sm font-black">{item.label}</b><p className="mt-1 text-xs text-stone-500">{item.status}</p></div>
            <strong className={cn("text-sm", item.points >= 0 ? "text-emerald-700" : "text-rose-700")}>{item.points > 0 ? "+" : ""}{item.points}</strong>
          </div>
        ))}
      </div>
    </Card>
  );
}




function SingleReport({ selected, barangay, city, result, theme, detected, missing, setScreen }) {
  return (
    <>
      <div className="relative min-h-[235px] overflow-hidden rounded-[34px] text-white shadow-2xl shadow-stone-900/20">
        <img className="absolute inset-0 h-full w-full object-cover" src={selected.image} alt={selected.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/35 to-transparent" />
        <div className="absolute bottom-5 left-5 right-5">
          <p className="text-[11px] font-black uppercase tracking-[.14em] text-emerald-200">{barangay}, {city}</p>
          <h2 className="mt-1 text-3xl font-black tracking-[-.04em]">{selected.name}</h2>
          <span className="mt-3 inline-flex rounded-full  px-3 py-1.5 text-xs font-black">{}</span>
        </div>
      </div>




      <div className={cn("relative mx-auto -mt-12 grid h-52 w-52 place-items-center rounded-full border-[10px] border-white shadow-2xl shadow-stone-900/10", theme.bg)}>
        <div className="text-center">
          <div className={cn("text-6xl font-black leading-none tracking-[-.08em]", theme.color)}>{result.score}</div>
          <p className="mt-1 text-[11px] font-black uppercase tracking-[.16em] text-stone-400">out of 100</p>
          <span className={cn("mt-2 inline-flex rounded-full border px-3 py-1.5 text-xs font-black", theme.border, theme.bg, theme.color)}>{result.level}</span>
        </div>
      </div>




      <Card>
        <div className="flex items-center justify-between"><b className="text-sm font-black">Public-space condition</b><strong className={cn("text-2xl", theme.color)}>{result.score}%</strong></div>
        <div className="mt-3 h-3 overflow-hidden rounded-full bg-stone-100"><div className={cn("h-full rounded-full", theme.fill)} style={{ width: `${result.score}%` }} /></div>
      </Card>




      <div className="mt-3 grid grid-cols-2 gap-3">
        <Card><strong className="text-4xl font-black text-emerald-700">{detected.length}</strong><p className="mt-1 text-xs text-stone-500">Detected elements</p></Card>
        <Card><strong className="text-4xl font-black text-rose-700">{missing.length}</strong><p className="mt-1 text-xs text-stone-500">Missing or poor</p></Card>
      </div>




      <Card className="mt-3">
        <div className="mb-3 flex items-center gap-2 font-black"><Icon name="sparkles" className="text-emerald-700" /> Street Insight</div>
        <p className="text-sm leading-7 text-stone-600">This single scan focuses on one location. Missing or damaged infrastructure can increase daily risk, reduce mobility, and make access to school, work, and community services harder for residents.</p>
      </Card>




      <BreakdownCard breakdown={result.breakdown} />
      <Card className="mt-3"><div className="mb-3 font-black">Infrastructure Chart</div><BarGraph data={result.breakdown} /></Card>
      <Card className="mt-3"><div className="mb-3 font-black">Priority Indicators</div><div className="grid grid-cols-2 gap-2">{["Safety", "Access", "Mobility", "Public Space"].map((item) => <span key={item} className="rounded-full border border-stone-200 bg-stone-100 px-3 py-2 text-center text-xs font-black text-stone-700">{item}</span>)}</div></Card>
      <Button className="mt-5 w-full" onClick={() => setScreen("actions")}>Open Action Bridge <Icon name="chevron" size={18} /></Button>
    </>
  );
}




function CompareScore({ place, score }) {
  const theme = scoreTheme(score);
  return (
    <div className="rounded-[26px] bg-white p-3 shadow-lg shadow-stone-900/5">
      <img className="h-24 w-full rounded-2xl object-cover" src={place.image} alt={place.name} />
      <b className="mt-2 block truncate text-xs font-black">{place.name}</b>
      <strong className={cn("mt-1 block text-4xl font-black", theme.color)}>{score}</strong>
    </div>
  );
}




function ComparisonReport({ selected, compare, result, compareResult, gap, setScreen }) {
  const lower = result.score <= compareResult.score ? selected : compare;
  const lowerResult = result.score <= compareResult.score ? result : compareResult;
  const higher = result.score > compareResult.score ? selected : compare;
  const higherResult = result.score > compareResult.score ? result : compareResult;
  return (
    <>
      <Card className="border-amber-200 bg-amber-50">
        <p className="text-[11px] font-black uppercase tracking-[.18em] text-amber-700">Comparison result</p>
        <h2 className="mt-1 text-3xl font-black tracking-[-.04em]">{selected.name} vs {compare.name}</h2>
        <p className="mt-2 text-sm leading-6 text-stone-600">This report compares two areas and focuses on the score gap between them.</p>
      </Card>
      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2.5">
        <CompareScore place={selected} score={result.score} />
        <span className="rounded-full bg-white px-2 py-2 text-[11px] font-black text-stone-400 shadow">VS</span>
        <CompareScore place={compare} score={compareResult.score} />
      </div>
      <Card className="mt-3 border-rose-200 bg-rose-50">
        <div className="flex items-center justify-between gap-3">
          <div><p className="text-[11px] font-black uppercase tracking-[.18em] text-rose-700">Score gap</p><h3 className="mt-1 text-3xl font-black">{gap} points</h3></div>
          <div className="text-right text-sm leading-6 text-stone-600"><b>{lower.name}</b> needs more attention than <b>{higher.name}</b>.</div>
        </div>
      </Card>
      <div className="mt-3 grid gap-3">
        <Card><div className="mb-2 font-black">Lower-scoring area</div><p className="text-sm leading-6 text-stone-600"><b>{lower.name}</b> scored {lowerResult.score}/100. Main weak items: {missingItems(lowerResult).map((i) => i.label).join(", ") || "none"}.</p></Card>
        <Card><div className="mb-2 font-black">Higher-scoring area</div><p className="text-sm leading-6 text-stone-600"><b>{higher.name}</b> scored {higherResult.score}/100. Stronger items: {detectedItems(higherResult).map((i) => i.label).join(", ") || "none"}.</p></Card>
      </div>
      <Button className="mt-5 w-full" onClick={() => setScreen("actions")}>Open Action Bridge <Icon name="chevron" size={18} /></Button>
    </>
  );
}




function TextPreview({ title, text, filename }) {
  const [status, setStatus] = useState("");
  return (
    <Card className="mt-4 border-emerald-200 bg-emerald-50">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-black">{title}</h3>
        {status && <span className="rounded-full bg-white px-3 py-1 text-[11px] font-black text-emerald-700">{status}</span>}
      </div>
      <pre className="mt-3 max-h-72 overflow-auto whitespace-pre-wrap rounded-2xl bg-white p-4 text-xs leading-6 text-stone-700 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">{text}</pre>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <Button variant="light" onClick={() => copyText(text, setStatus)}><Icon name="copy" size={16} /> Copy</Button>
        <Button onClick={() => downloadText(filename, text)}><Icon name="download" size={16} /> Download</Button>
      </div>
    </Card>
  );
}




function MessageComposer({ place, result, barangay, city, type = "partner" }) {
  const [recipient, setRecipient] = useState(type === "barangay" ? "Barangay Office" : "Civic Partner");
  const [contact, setContact] = useState("");
  const [includeReport, setIncludeReport] = useState(true);
  const [sent, setSent] = useState(false);
  const base = type === "barangay" ? buildBarangayReport({ place, result, barangay, city }) : buildPartnerMessage({ place, result, barangay, city });
  const [message, setMessage] = useState(base);




  function send() {
    setSent(true);
  }




  return (
    <Card className="mt-4 border-sky-200 bg-sky-50">
      <div className="mb-3 flex items-center gap-2 font-black"><Icon name="send" className="text-sky-700" /> Send Report Message</div>
      <div className="grid gap-3">
        <Input compact label="Recipient / Office" value={recipient} onChange={setRecipient} placeholder="Barangay Office" />
        <Input compact label="Email, phone, or page name" value={contact} onChange={setContact} placeholder="example@email.com" />
        <label className="block">
          <span className="mb-1 block text-xs font-black text-stone-500">Message</span>
          <textarea className="min-h-44 w-full rounded-2xl border border-stone-200 bg-white p-4 text-sm leading-6 outline-none focus:border-sky-400" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <label className="flex items-center gap-2 text-sm font-bold text-stone-600"><input type="checkbox" checked={includeReport} onChange={(e) => setIncludeReport(e.target.checked)} className="h-4 w-4" /> Attach generated report text</label>
        <Button variant="green" onClick={send}><Icon name="send" size={16} /> Send Message</Button>
        {sent && <div className="rounded-2xl border border-emerald-200 bg-white p-4 text-sm leading-6 text-emerald-800"><b>Message prepared successfully.</b><br />Recipient: {recipient || "No recipient"}<br />Contact: {contact || "No contact provided"}<br />Attachment: {includeReport ? "Report text included" : "No attachment"}</div>}
      </div>
    </Card>
  );
}




function ActionWorkspace({ actionId, place, result, barangay, city, setMode, setCompare, setScreen }) {
  const reportText = buildBarangayReport({ place, result, barangay, city });
  const cardText = buildCommunityCard({ place, result, barangay, city });
  const escalationText = buildEscalationReport({ place, result, barangay, city });
  const fundingText = buildFundingRequest({ place, result, barangay, city });
  const options = samples.map((sample) => ({ sample, result: scoreLocation(sample) })).sort((a, b) => b.result.score - a.result.score);
  const matches = getFundingMatches(result);




  if (actionId === "relocation") {
    return (
      <Card className="mt-4 border-amber-200 bg-amber-50">
        <div className="mb-3 flex items-center gap-2 font-black"><Icon name="mapPin" className="text-amber-700" /> Better Area Options</div>
        <p className="text-sm leading-6 text-stone-600">These demo areas are sorted by score. Tap Compare to move that area into comparison mode.</p>
        <div className="mt-3 grid gap-3">
          {options.map(({ sample, result: sampleResult }) => (
            <div key={sample.id} className="flex items-center gap-3 rounded-2xl bg-white p-3">
              <img className="h-16 w-16 rounded-2xl object-cover" src={sample.image} alt={sample.name} />
              <div className="flex-1"><b className="text-sm font-black">{sample.name}</b><p className="text-xs text-stone-500">{sample.barangay}, {sample.city}</p></div>
              <strong className={cn("text-2xl font-black", scoreTheme(sampleResult.score).color)}>{sampleResult.score}</strong>
              <button className="rounded-xl bg-stone-950 px-3 py-2 text-xs font-black text-white" onClick={() => { setCompare(sample); setMode("compare"); setScreen("results"); }}>Compare</button>
            </div>
          ))}
        </div>
      </Card>
    );
  }




  if (actionId === "report") {
    return <><TextPreview title="Generated Barangay Report" text={reportText} filename="urbex-barangay-report.txt" /><MessageComposer type="barangay" place={place} result={result} barangay={barangay} city={city} /></>;
  }




  if (actionId === "organize") {
    return <TextPreview title="Generated Community Card" text={cardText} filename="urbex-community-card.txt" />;
  }




  if (actionId === "escalate") {
    return <TextPreview title="Generated Council Escalation Brief" text={escalationText} filename="urbex-council-escalation.txt" />;
  }




  if (actionId === "funding") {
    return (
      <>
        <Card className="mt-4 border-violet-200 bg-violet-50">
          <div className="mb-3 flex items-center gap-2 font-black"><Icon name="wallet" className="text-violet-700" /> Funding / Resource Matches</div>
          <div className="grid gap-3">
            {matches.map((match) => (
              <div key={match.title} className="rounded-2xl bg-white p-4">
                <b className="text-sm font-black">{match.title}</b>
                <p className="mt-1 text-sm leading-6 text-stone-600">{match.fit}</p>
                <p className="mt-2 text-xs font-bold text-violet-700">Next step: {match.next}</p>
              </div>
            ))}
          </div>
        </Card>
        <TextPreview title="Generated Resource Request" text={fundingText} filename="urbex-resource-request.txt" />
      </>
    );
  }




  return <><TextPreview title="Prepared Partner Message" text={buildPartnerMessage({ place, result, barangay, city })} filename="urbex-partner-message.txt" /><MessageComposer type="partner" place={place} result={result} barangay={barangay} city={city} /></>;
}




function ActionScreen({ selectedAction, setSelectedAction, place, result, barangay, city, setMode, setCompare, setScreen, user, settings }) {
  const theme = scoreTheme(result.score);
  return (
    <section className="min-h-full">
      <Header title="Take Action" onBack={() => setScreen("results")} user={user} darkHeader={settings.darkHeader} />
      <div className="p-5">
        <Card className={cn("flex items-center gap-4", theme.bg, theme.border)}>
          <div className={cn("grid h-20 w-20 shrink-0 place-items-center rounded-[26px] bg-white text-4xl font-black shadow-lg shadow-stone-900/5", theme.color)}>{result.score}</div>
          <div><p className="text-[11px] font-black uppercase tracking-[.18em] text-emerald-600">Action Bridge</p><h2 className="mt-1 text-2xl font-black tracking-[-.04em]">Choose your next step</h2><span className="text-sm text-stone-500">{barangay}, {city}</span></div>
        </Card>
        <div className="mt-4 grid gap-3">
          {actionPaths.map((action) => (
            <button key={action.id} className={cn("flex w-full items-start gap-3 rounded-[26px] border bg-white p-4 text-left shadow-lg shadow-stone-900/5", selectedAction === action.id ? "border-emerald-400 ring-4 ring-emerald-100" : "border-stone-200")} onClick={() => setSelectedAction(action.id)}>
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><Icon name={action.icon} size={22} /></div>
              <div className="flex-1"><b className="text-sm font-black">{action.title}</b><p className="mt-1 text-xs leading-5 text-stone-500">{action.description}</p></div>
              <span className="rounded-full bg-stone-100 px-2 py-1 text-[10px] font-black text-stone-500">{action.tag}</span>
            </button>
          ))}
        </div>
        <ActionWorkspace actionId={selectedAction} place={place} result={result} barangay={barangay} city={city} setMode={setMode} setCompare={setCompare} setScreen={setScreen} />
      </div>
    </section>
  );
}




function getSupportReply(question, context) {
  const q = question.toLowerCase();
  const weak = missingItems(context.result).map((item) => item.label);
  const strong = detectedItems(context.result).map((item) => item.label);
  const weakText = weak.join(", ") || "no major weak item";
  const strongText = strong.join(", ") || "no strong item detected";
  const lower = context.result.score <= context.compareResult.score ? context.selected : context.compare;
  const higher = context.result.score > context.compareResult.score ? context.selected : context.compare;




  if (q.includes("scanner") || q.includes("scan") || q.includes("upload") || q.includes("photo") || q.includes("image")) {
    return `The scanner works in the Scan tab. In Single Scan, upload or choose one photo, then tap Run Scanner. In Compare, choose or upload two photos, then tap Generate Comparison Report. Your current target is ${context.selected.name}.`;
  }
  if (q.includes("score") || q.includes("rating") || q.includes("result") || q.includes("why")) {
    return `${context.selected.name} scored ${context.result.score}/100 and is classified as ${context.result.level}. The score changed because these items were weak: ${weakText}. Stronger items include: ${strongText}.`;
  }
  if (q.includes("missing") || q.includes("problem") || q.includes("issue") || q.includes("concern") || q.includes("poor")) {
    return `The main concerns for ${context.selected.name} are: ${weakText}. These should be the first items in your report because they directly affect safety, access, and mobility.`;
  }
  if (q.includes("compare") || q.includes("gap") || q.includes("difference") || q.includes("versus") || q.includes("vs")) {
    return `Comparison mode is different from Single Scan: it checks two places side by side. Current comparison: ${context.selected.name} (${context.result.score}/100) vs ${context.compare.name} (${context.compareResult.score}/100). Gap: ${context.gap} points. ${lower.name} needs more attention than ${higher.name}.`;
  }
  if (q.includes("report") || q.includes("complaint") || q.includes("generate") || q.includes("barangay") || q.includes("send")) {
    return `To generate a report, open Take Action then choose Barangay Report. That section now creates a full report, lets you copy or download it, and includes a sender form where you can prepare a message to the barangay office.`;
  }
  if (q.includes("message") || q.includes("ngo") || q.includes("partner") || q.includes("civic") || q.includes("support group")) {
    return `Choose Civic Partner Message in Take Action. It opens a message composer where you can enter the recipient, contact, edit the message, attach the generated report text, and mark it as sent.`;
  }
  if (q.includes("fund") || q.includes("budget") || q.includes("resource") || q.includes("program") || q.includes("money")) {
    return `Choose Funding Matches in Take Action. It checks the weak items in the scan and suggests improvement tracks. For this scan, it will focus on: ${weakText}.`;
  }
  if (q.includes("community") || q.includes("share") || q.includes("facebook") || q.includes("messenger") || q.includes("neighbor")) {
    return `Choose Community Card in Take Action. It generates a short shareable text with the score, top concerns, and a call for neighbors to submit more evidence.`;
  }
  if (q.includes("escalate") || q.includes("council") || q.includes("sangguniang")) {
    return `Choose Council Escalation in Take Action. It creates a stronger second-level brief for cases where the barangay has not responded or the issue needs city-level review.`;
  }
  if (q.includes("move") || q.includes("relocate") || q.includes("area") || q.includes("better place")) {
    return `Choose Area Options in Take Action. It lists demo areas by score and lets you move one into comparison mode, so users can compare where conditions are stronger.`;
  }
  if (q.includes("password") || q.includes("account") || q.includes("sign") || q.includes("login")) {
    return `For account creation, the password must have at least 8 characters, a number, and a special character. You can show or hide the password with the eye icon.`;
  }
  return `I connected your question to the current report. ${context.selected.name} is at ${context.result.score}/100. Main concerns: ${weakText}. For next steps, use Take Action and choose ${context.result.score < 45 ? "Barangay Report or Council Escalation" : "Community Card or Area Options"}.`;
}




function ChatScreen({ setScreen, user, darkHeader, context }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([{ from: "support", text: "Hi! Ask me about the scanner, score, missing items, comparison, report generation, messages, funding, or settings." }]);




  function sendMessage() {
    const clean = text.trim();
    if (!clean) return;
    setMessages((prev) => [...prev, { from: "user", text: clean }, { from: "support", text: getSupportReply(clean, context) }]);
    setText("");
  }




  return (
    <section className="min-h-full">
      <Header title="Support Chat" onBack={() => setScreen("home")} user={user} darkHeader={darkHeader} />
      <div className="p-5">
        <Card className="flex h-[650px] flex-col">
          <div className="mb-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-xs leading-5 text-emerald-900">Current context: <b>{context.mode === "compare" ? `${context.selected.name} vs ${context.compare.name}` : context.selected.name}</b></div>
          <div className="flex flex-1 flex-col gap-2.5 overflow-y-auto pb-3 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {messages.map((m, i) => (
              <div key={i} className={cn("max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6", m.from === "user" ? "self-end rounded-br-md bg-stone-950 text-white" : "self-start rounded-bl-md bg-stone-100 text-stone-700")}>{m.text}</div>
            ))}
          </div>
          <div className="flex gap-2 border-t border-stone-200 pt-3">
            <input className="flex-1 rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm outline-none focus:border-emerald-400 focus:bg-white" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && sendMessage()} placeholder="Ask about the current report..." />
            <button className="grid w-12 place-items-center rounded-2xl bg-stone-950 text-white" onClick={sendMessage}><Icon name="send" size={18} /></button>
          </div>
        </Card>
      </div>
    </section>
  );
}




function ProfileScreen({ setScreen, user, setUser, settings, setSettings, darkHeader, onLogout }) {
  function updateAvatar(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setUser({ ...user, avatar: reader.result });
    reader.readAsDataURL(file);
  }




  function toggle(key) {
    setSettings({ ...settings, [key]: !settings[key] });
  }




  const settingItems = [
    ["history", "Save scan history", "Keep recent results for easier follow-up."],
    ["reminders", "Report reminders", "Show reminders to follow up on generated reports."],
    ["darkHeader", "Dark header", "Use stronger contrast on main screens."],
  ];




  return (
    <section className="min-h-full">
      <Header title="Profile" onBack={() => setScreen("home")} user={user} darkHeader={darkHeader} />
      <div className="space-y-4 p-5">
        <Card className="text-center">
          <img className="mx-auto h-28 w-28 rounded-[32px] border-2 border-stone-100 object-cover shadow-lg shadow-stone-900/5" src={user.avatar} alt="Profile"/>
          <h2 className="mt-3 text-3xl font-black tracking-[-.04em]">{user.name}</h2>
          <p className="mt-1 text-sm text-stone-500">{user.email}</p>
          <label className="mt-4 inline-flex cursor-pointer items-center justify-center rounded-2xl bg-stone-950 px-4 py-3 text-sm font-black text-white">
            Change profile picture
            <input type="file" accept="image/*" className="hidden" onChange={updateAvatar} />
          </label>
        </Card>
        <Card>
          <div className="mb-3 flex items-center gap-2 font-black"><Icon name="settings" className="text-emerald-700" /> Settings</div>
          <div className="grid gap-1">
            {settingItems.map(([key, title, description]) => (
              <div key={key} className="flex items-center justify-between gap-4 border-t border-stone-100 py-3 first:border-t-0">
                <div><b className="text-sm font-black">{title}</b><p className="mt-1 text-xs leading-5 text-stone-500">{description}</p></div>
                <button onClick={() => toggle(key)} className={cn("relative h-8 w-14 rounded-full transition", settings[key] ? "bg-emerald-500" : "bg-stone-300")}> <span className={cn("absolute top-1 h-6 w-6 rounded-full bg-white shadow transition", settings[key] ? "left-7" : "left-1")} /></button>
              </div>
            ))}
          </div>
        </Card>
        <Button className="w-full" variant="light" onClick={onLogout}><Icon name="logout" size={18} /> Log out</Button>
      </div>
    </section>
  );
}




function App() {
  const [user, setUser] = useState(null);
  const [screen, setScreen] = useState("home");
  const [mode, setMode] = useState("single");
  const [selected, setSelected] = useState(samples[0]);
  const [compare, setCompare] = useState(samples[1]);
  const [barangay, setBarangay] = useState(samples[0].barangay);
  const [city, setCity] = useState(samples[0].city);
  const [compareBarangay, setCompareBarangay] = useState(samples[1].barangay);
  const [compareCity, setCompareCity] = useState(samples[1].city);
  const [selectedAction, setSelectedAction] = useState("report");
  const [settings, setSettings] = useState({ history: true, reminders: true, compact: false, darkHeader: true });




  const result = useMemo(() => scoreLocation(selected), [selected]);
  const compareResult = useMemo(() => scoreLocation(compare), [compare]);
  const theme = scoreTheme(result.score);
  const detected = detectedItems(result);
  const missing = missingItems(result);
  const gap = Math.abs(result.score - compareResult.score);




  if (!user) return <AuthScreen onLogin={setUser} />;




  function chooseSample(sample) {
    setSelected(sample);
    setBarangay(sample.barangay);
    setCity(sample.city);
    if (compare.id === sample.id) {
      const fallback = samples.find((item) => item.id !== sample.id) || samples[0];
      setCompare(fallback);
      setCompareBarangay(fallback.barangay);
      setCompareCity(fallback.city);
    }
  }




  function chooseCompare(sample) {
    setCompare(sample);
    setCompareBarangay(sample.barangay);
    setCompareCity(sample.city);
  }




  function handleUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setSelected(makeUploadedPlace({ file, dataUrl: reader.result, barangay, city, slot: "A" }));
    };
    reader.readAsDataURL(file);
  }




  function handleCompareUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setCompare(makeUploadedPlace({ file, dataUrl: reader.result, barangay: compareBarangay, city: compareCity, slot: "B" }));
    };
    reader.readAsDataURL(file);
  }




  const context = { mode, selected, compare, result, compareResult, gap, barangay, city, selectedAction };




  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#dcfce7,#f8f3ea_42%,#e7dfcf)] p-0 text-stone-900 sm:p-5">
      <div className="relative mx-auto h-screen max-w-[420px] overflow-hidden bg-[#fbfaf6] shadow-2xl shadow-stone-900/30 sm:h-[850px] sm:rounded-[42px] sm:border-8 sm:border-stone-950">
        <main className="h-full overflow-y-auto pb-28 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {screen === "home" && (
            <section className="min-h-full p-5 pt-12">
              <div className="relative overflow-hidden rounded-[34px] bg-stone-950 p-6 text-white shadow-2xl shadow-stone-900/25">
                <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-emerald-400/30 blur-2xl" />
                <div className="relative z-10 mt-5 grid h-16 w-16 place-items-center rounded-[22px] text-emerald-700"><img src={logo} alt="Urbex Logo" className="h-full w-full object-contain" /></div>
                <p className="relative z-10 mt-10 text-[11px] font-black uppercase tracking-[.18em] text-emerald-500">Civic street scoring</p>
                <h1 className="relative z-10 text-6xl font-black leading-none tracking-[-.08em]">Urbex</h1>
                <h2 className="relative z-10 mt-2 text-xl font-black text-emerald-100">Urban Equity Scanner</h2>
                <p className="relative z-10 mt-4 max-w-xs text-sm leading-7 text-stone-200">Turn street photos into a clear public-space score, area comparison, and action plan for your community.</p>
                <div className="relative z-10 mt-5 flex flex-wrap gap-2">{["Street score", "Reports", "Compare", "Support"].map((pill) => <span key={pill} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-black">{pill}</span>)}</div>
                <div className="relative z-10 mt-6 grid grid-cols-2 gap-3"><Button variant="green" onClick={() => { setMode("single"); setScreen("scan"); }}>Start Scan</Button><Button variant="light" onClick={() => { setMode("compare"); setScreen("scan"); }}>Compare</Button></div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[ ["camera", "Street Input", "Upload or choose a sample to review public-space conditions."], ["chart", "Equity Score", "Single scans and comparisons now have separate outputs."], ["file", "Working Reports", "Generate, copy, download, or send reports."], ["message", "Smart Support", "Answers using your current scan context."] ].map(([icon, title, text]) => <Card key={title}><Icon name={icon} className="mb-3 text-emerald-700" /><b className="text-sm font-black">{title}</b><p className="mt-2 text-xs leading-5 text-stone-500">{text}</p></Card>)}
              </div>
            </section>
          )}




          {screen === "scan" && <ScanScreen mode={mode} setMode={setMode} selected={selected} compare={compare} barangay={barangay} city={city} compareBarangay={compareBarangay} compareCity={compareCity} setBarangay={setBarangay} setCity={setCity} setCompareBarangay={setCompareBarangay} setCompareCity={setCompareCity} chooseSample={chooseSample} chooseCompare={chooseCompare} handleUpload={handleUpload} handleCompareUpload={handleCompareUpload} setScreen={setScreen} user={user} settings={settings} />}




          {screen === "results" && (
            <section className="min-h-full">
              <Header title={mode === "compare" ? "Comparison Report" : "Equity Report"} onBack={() => setScreen("scan")} user={user} darkHeader={settings.darkHeader} />
              <div className="p-5">
                {mode === "compare" ? <ComparisonReport selected={selected} compare={compare} result={result} compareResult={compareResult} gap={gap} setScreen={setScreen} /> : <SingleReport selected={selected} barangay={barangay} city={city} result={result} theme={theme} detected={detected} missing={missing} setScreen={setScreen} />}
              </div>
            </section>
          )}




          {screen === "actions" && <ActionScreen selectedAction={selectedAction} setSelectedAction={setSelectedAction} place={selected} result={result} barangay={barangay} city={city} setMode={setMode} setCompare={setCompare} setScreen={setScreen} user={user} settings={settings} />}
          {screen === "chat" && <ChatScreen setScreen={setScreen} user={user} darkHeader={settings.darkHeader} context={context} />}
          {screen === "profile" && <ProfileScreen setScreen={setScreen} user={user} setUser={setUser} settings={settings} setSettings={setSettings} darkHeader={settings.darkHeader} onLogout={() => { setUser(null); setScreen("home"); }} />}
        </main>
        <BottomNav screen={screen} setScreen={setScreen} />
      </div>
    </div>
  );
}




export default App;

