export interface MediaFormat {
  id: string;
  tag: string;
  name: string;
  category: "Arterial" | "Digital" | "Transit" | "Street" | "Smart";
  headline: string;
  description: string;
  dimensions: string;
  illumination: string;
  dwellTime: string;
  impactZone: string;
  image: string;
  features: string[];
}

export interface MunicipalLocation {
  id: string;
  name: string;
  zone: string;
  type: string;
  image: string;
  tag: string;
  dailyFootfall: string;
  mediaAvailable: string[];
  keyHighlight: string;
  dwellProfile: string;
}

export interface ImplementationPhase {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  specs: string;
}

export const H3D_DATA = {
  company: {
    name: "HORIZON 3D MEDIA CO.",
    shortName: "H3D",
    tagline: "Transforming public spaces with smart advertising.",
    primaryHub: "Guruvayur Municipality",
    email: "horizonoutofhome@gmail.com",
    phone: "+91 99478 34661",
    territory: "Guruvayur Municipal Region & Strategic Transit Corridors",
  },
  
  heroSequence: {
    badge: "OOH MEDIA INFRASTRUCTURE",
    headingLine1: "SHAPING THE PLACES",
    headingLine2: "PEOPLE LOOK.",
    subheading: "We engineer architectural outdoor media and smart advertising infrastructure across prime municipal and transit corridors.",
    statPoints: [
      { label: "Municipal Territory", val: "Guruvayur Hub" },
      { label: "Media Formats", val: "10+ Profiles" },
      { label: "Transit Integration", val: "Multi-Modal" },
    ],
  },

  manifesto: {
    quote: "Public space is not empty space. It is where daily human movement, civic life, and brand attention converge.",
    p1: "Horizon 3D Media Co. (H3D) transforms public environments through purpose-built advertising infrastructure, high-definition digital screens, and modern transit media.",
    p2: "From the high-frequency platforms of the New Guruvayur Bus Stand to key arterial corridors and pedestrian promenades, we design and operate media structures that enhance the urban landscape while commanding undiluted real-world attention.",
  },

  mediaFormats: [
    {
      id: "led-screen-billboards",
      tag: "01",
      name: "LED Screen Billboards",
      category: "Digital",
      headline: "High-Nit Digital Displays for Dynamic Day & Night Visibility",
      description: "Ultra-bright outdoor LED display boards engineered for maximum contrast in direct sunlight and crystal-clear nighttime illumination. Supports motion campaigns, dayparting, and time-sensitive brand narratives.",
      dimensions: "Custom Engineered Scalable Formats",
      illumination: "High-Brightness Digital SMD LED",
      dwellTime: "High (Vehicular & Pedestrian)",
      impactZone: "Key Municipal Arteries & Terminal Hubs",
      image: "/images/led-screen.jpg",
      features: [
        "Dynamic content scheduling & dayparting",
        "Weather-resistant IP65 outdoor build",
        "Instant campaign rotation & multi-creative support",
        "High-contrast color fidelity for brand recall"
      ],
    },
    {
      id: "large-billboards",
      tag: "02",
      name: "Large Billboards & Unipoles",
      category: "Arterial",
      headline: "Monolithic Structural Scale on Prime Traffic Corridors",
      description: "Large-format static and illuminated billboards engineered on structural steel unipoles. Positioned along high-velocity transit routes and major arterial intersections for unavoidable long-distance visibility.",
      dimensions: "Standard 40'x20' / 30'x15' / Custom Civic Spans",
      illumination: "Frontlit High-Efficiency LED Spot Stanchions",
      dwellTime: "Medium-to-High (Highway & Bypass Traffic)",
      impactZone: "Municipal Bypass & Arterial Junctions",
      image: "/images/hero-billboard.jpg",
      features: [
        "Unobstructed line-of-sight engineering",
        "Heavy-duty wind-load rated steel framework",
        "Premium flex & vinyl rendering with anti-fade coating",
        "24/7 dedicated spotlight illumination"
      ],
    },
    {
      id: "bus-stop-shelters",
      tag: "03",
      name: "Bus-Stop Shelter Branding & Hoardings",
      category: "Transit",
      headline: "Street-Level Immersion at High-Dwell Commuter Shelters",
      description: "Comprehensive bus shelter branding that integrates brand identity into the commuter's everyday journey. Captures continuous attention from passengers waiting for transit and passing vehicular traffic.",
      dimensions: "Full Shelter Canopy + Vertical Side Panels",
      illumination: "Integrated Backlit / Overhead LED Glow",
      dwellTime: "8 to 15 Minutes (Average Commuter Wait)",
      impactZone: "New Bus Stand & Municipal Route Shelters",
      image: "/images/transit-shelter.jpg",
      features: [
        "Extended dwell-time engagement with daily commuters",
        "High-impact dual-sided visibility (Pedestrian + Roadway)",
        "Durable, aesthetic civic shelter infrastructure",
        "Full canopy wrap & back-panel illumination"
      ],
    },
    {
      id: "waiting-benches",
      tag: "04",
      name: "Waiting Benches with Advertising Boards",
      category: "Street",
      headline: "Functional Civic Furniture with Dedicated Brand Panels",
      description: "Modern public waiting benches integrated with high-visibility advertising backboards. Provides essential comfort to citizens while creating close-proximity, tactile brand impressions.",
      dimensions: "6' Ergonomic Municipal Bench + 4'x2' Display Board",
      illumination: "Ambient Civic & Solar Backlit Options",
      dwellTime: "High Dwell (Resting & Waiting Public)",
      impactZone: "Bus Terminals, Plazas & Public Walkways",
      image: "/images/waiting-bench.jpg",
      features: [
        "Direct eye-level pedestrian alignment",
        "Civic beautification + public amenity utility",
        "Durable anti-corrosion finishes",
        "High repetitive exposure across daily routines"
      ],
    },
    {
      id: "street-pillars-translites",
      tag: "05",
      name: "Street Advertising Pillars & Translites",
      category: "Street",
      headline: "Architectural Totems & Ultra-Crisp Clip-On Translites",
      description: "Cylindrical advertising columns and slimline clip-on translite panels placed in bustling pedestrian avenues and transit walkways. Perfect for luxury, retail, and municipal public service campaigns.",
      dimensions: "8' Cylindrical Pillar / 6'x4' Translite Boards",
      illumination: "Even 360° Internal Edge-Lit LED",
      dwellTime: "Medium (Foot Traffic Flow)",
      impactZone: "Pedestrian Promenades & Temple Arterials",
      image: "/images/street-pillar.jpg",
      features: [
        "360-degree rotational visibility",
        "Rapid poster changeover mechanism",
        "Even edge-lit diffusion with zero hot spots",
        "Sleek architectural footprint"
      ],
    },
    {
      id: "smart-wayfinding",
      tag: "06",
      name: "Smart Wayfinding & Digital Signage",
      category: "Smart",
      headline: "Interactive Public Information & Commuter Guidance",
      description: "Next-generation digital totems providing real-time transit schedules, municipal announcements, and wayfinding for visitors and residents, seamlessly balanced with premium brand sponsorship.",
      dimensions: "55\" to 75\" High-Brightness Outdoor Touch Panels",
      illumination: "Direct Sunlight Visible Digital Displays",
      dwellTime: "Interactive / High Engagement",
      impactZone: "New Bus Stand Concourse & Main Gate Hubs",
      image: "/images/smart-totem.jpg",
      features: [
        "Real-time commuter guidance & route directories",
        "Split-screen advertising & civic broadcast slots",
        "Live schedule data integration",
        "Energy-efficient smart brightness modulation"
      ],
    },
  ] as MediaFormat[],

  locations: [
    {
      id: "loc-1",
      name: "New Bus Stand Terminal Concourse",
      zone: "Central Multi-Modal Transit Hub",
      type: "Primary Transit Terminal",
      image: "/images/led-screen.jpg",
      tag: "FLAGSHIP LOCATION",
      dailyFootfall: "50,000+ Daily Commuters",
      mediaAvailable: ["High-Nit LED Screen Billboards", "Bus-Stop Shelter Branding", "Ergonomic Waiting Benches", "Interactive Wayfinding Totems"],
      keyHighlight: "The nerve center of municipal transit connecting intercity buses, express coaches, and intense pedestrian passenger flow.",
      dwellProfile: "15 - 30 min average commuter transit dwell time",
    },
    {
      id: "loc-2",
      name: "East & West Temple Artery Corridors",
      zone: "High-Density Pedestrian & Pilgrim Zone",
      type: "Civic & Heritage Promenade",
      image: "/images/street-pillar.jpg",
      tag: "MAXIMUM FOOTFALL",
      dailyFootfall: "Year-Round Devotees & Visitors",
      mediaAvailable: ["360° Illuminated Street Pillars", "Ultra-Crisp Translite Panels", "Architectural Benches", "Civic Wayfinding Totems"],
      keyHighlight: "Iconic pilgrimage avenues experiencing dense, slow-moving crowds seven days a week with maximum eye-level brand impressions.",
      dwellProfile: "Continuous slow-paced pedestrian exposure",
    },
    {
      id: "loc-3",
      name: "Municipal Ring Road & Bypass Arterial",
      zone: "Vehicular Transit & Highway Corridor",
      type: "Highway Arterial Junction",
      image: "/images/hero-billboard.jpg",
      tag: "HIGHWAY DOMINANCE",
      dailyFootfall: "80,000+ Vehicles Daily",
      mediaAvailable: ["Large Monolithic Billboards", "High-Nit LED Digital Displays", "Heavy-Duty Unipoles"],
      keyHighlight: "Prime vehicular artery connecting inter-district traffic with long unobstructed line-of-sight approaches and 24/7 spotlight illumination.",
      dwellProfile: "High visual impact at major signal intersections",
    },
    {
      id: "loc-4",
      name: "Municipal Bus Stops & Feeder Shelters",
      zone: "Neighborhood & Market Transit Network",
      type: "Civic Commuter Network",
      image: "/images/transit-shelter.jpg",
      tag: "STREET IMMERSION",
      dailyFootfall: "35,000+ Local Daily Influx",
      mediaAvailable: ["Modern Bus Shelters with Hoardings", "Integrated Waiting Benches", "Backlit Canopy Boards"],
      keyHighlight: "Strategic network of passenger boarding points distributed across key residential hubs, shopping markets, and commercial gateways.",
      dwellProfile: "High repetitive daily recall for residents and daily commuters",
    },
  ] as MunicipalLocation[],

  municipalValue: [
    {
      num: "01",
      title: "Public-Space Beautification",
      desc: "Replacing degraded street furniture with architecturally refined shelters, ergonomic seating, and clean-energy illuminated structures.",
    },
    {
      num: "02",
      title: "Municipal Revenue Generation",
      desc: "Creating structured, recurring civic revenue through transparent public-private media infrastructure partnerships.",
    },
    {
      num: "03",
      title: "Local Business Visibility",
      desc: "Offering local and regional enterprises premium advertising platforms previously restricted to high-budget metropolitan markets.",
    },
    {
      num: "04",
      title: "Sustainable Smart Infrastructure",
      desc: "Deploying energy-efficient LED modules, solar-ready configurations, and weather-resilient, vandal-resistant fabrication.",
    },
  ],

  implementationPhases: [
    {
      step: "01",
      title: "Site Survey & Approval",
      subtitle: "Location Feasibility & Municipal Clearance",
      description: "Rigorous physical site inspection, line-of-sight geometry analysis, pedestrian traffic counts, and compliance alignment with municipal authorities.",
      deliverables: ["Line-of-sight mapping", "Structural clearance approvals", "Traffic velocity & dwell audit"],
      specs: "Zone Geometry Verified",
    },
    {
      step: "02",
      title: "Infrastructure Setup",
      subtitle: "Fabrication & Hardware Deployment",
      description: "Civil engineering foundations, heavy-gauge steel framing, electrical stanchions, LED panel calibration, and weatherized architectural shelter assembly.",
      deliverables: ["Wind-load rated steel framework", "IP65 weatherproof electrical hubs", "Day/night photometric testing"],
      specs: "Structural Safety Certified",
    },
    {
      step: "03",
      title: "Ad Operations",
      subtitle: "Campaign Onboarding & Live Deployment",
      description: "Rapid campaign launch workflow, high-resolution static print mounting, dynamic digital scheduling, and dayparting execution.",
      deliverables: ["24/7 display illumination checks", "Dynamic creative rotation", "Continuous visual quality audits"],
      specs: "Zero-Downtime Operation",
    },
    {
      step: "04",
      title: "Performance & Expansion",
      subtitle: "Auditing & Network Growth",
      description: "Ongoing structural maintenance, impression verification, campaign photographic proof-of-performance, and scaling to new transit nodes.",
      deliverables: ["Photographic campaign reporting", "Scheduled preventative maintenance", "Network node expansion"],
      specs: "Scalable OOH Network",
    },
  ] as ImplementationPhase[],

  futureVision: [
    {
      title: "Interactive Digital Billboards",
      detail: "Sensor-aware dynamic content that responds to time of day, weather conditions, and seasonal cultural events.",
    },
    {
      title: "Public Transportation Integration",
      detail: "Real-time bus arrival feeds and multimodal route telemetry displayed alongside brand messaging.",
    },
    {
      title: "Smart-City Initiatives",
      detail: "Civic emergency broadcast integration, environmental air quality monitoring, and municipal public service bulletins.",
    },
    {
      title: "Advanced Wayfinding Displays",
      detail: "Interactive multilingual navigation for tourists, pilgrims, and daily commuters across Guruvayur Municipality.",
    },
  ],
};
