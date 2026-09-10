export interface PipeProduct {
  id: string;
  name: string;
  brand: string;
  category: "Agricultural & Potable" | "Casing Pipes" | "Electrical Conduits" | "SWR Pipes" | "UGD Pipes";
  grade?: string;
  sizes: string;
  standardLength?: string;
  applications: string[];
  features: string[];
  colors?: string[];
  certification?: string;
}

export const COMPANY_DETAILS = {
  name: "KMR Polymers Pvt. Ltd.",
  brandName: "KMR SUDHA GOLD®",
  tradeMarkNo: "4094293",
  bisLicense: "CM/L-6300050690",
  standard: "IS 4985 : 2000",
  capacity: "250 M.T. / Year",
  sizeRange: "20mm to 250mm (1/2\" to 10\")",
  salesOffice: "Plot No. 302 B, St. No. 6, Bhagyalaxmi Colony, Suchitra Road, Quthbullapur, Hyderabad - 55",
  worksAddress: "Plot No. 30, IDA, Kamareddy, Telangana - 503 112",
  phones: ["+91 9849055466", "+91 9849055977"],
  email: "kmrpolymers@gmail.com",
};

export const PIPE_PRODUCTS: PipeProduct[] = [
  {
    id: "agricultural-upvc",
    name: "uPVC Agricultural & Potable Water Pipes",
    brand: "KMR SUDHA GOLD",
    category: "Agricultural & Potable",
    grade: "Class 1 to Class 5 (2.5 to 10 kg/cm²)",
    sizes: "20mm to 250mm (1/2\" to 10\")",
    standardLength: "6 Meters (Socket End)",
    certification: "IS 4985 : 2000 (BIS Certified)",
    applications: [
      "Borewell delivery lines & agricultural lift irrigation",
      "Rural and urban potable drinking water distribution",
      "Drip and sprinkler irrigation mainlines",
    ],
    features: [
      "100% lead-free formulation safe for human consumption",
      "Mirror-smooth internal bore for zero friction and energy savings",
      "High impact resistance against shifting soil and water hammer",
    ],
  },
  {
    id: "casing-pipes",
    name: "Deep Well uPVC Casing & Screen Pipes",
    brand: "KMR SUDHA GOLD",
    category: "Casing Pipes",
    grade: "Shallow (CS) & Medium (CM) Well",
    sizes: "Gray: 140mm, 180mm, 250mm | Blue: 100mm, 125mm, 175mm, 225mm, 240mm",
    standardLength: "3 & 6 Meters with threaded ends",
    applications: [
      "Borewell shaft lining up to 400m / 1200ft depth",
      "Submersible pump columns in sandy and collapsing strata",
    ],
    features: [
      "Precision trapezoidal metric threads for leak-proof joints",
      "High collapse resistance against deep underground hydrostatic pressure",
      "Immune to soil minerals, acidic groundwater, and chemical corrosion",
    ],
    colors: ["Gray", "Blue"],
  },
  {
    id: "swr-pipes",
    name: "SWR Drainage & Soil Waste Pipes",
    brand: "KMR SUDHA GOLD",
    category: "SWR Pipes",
    grade: "Type A (Rainwater) & Type B (Soil / Waste)",
    sizes: "75mm, 90mm, 110mm & 160mm",
    standardLength: "3 & 6 Meters (Ring-fit / Self-fit)",
    applications: [
      "Multi-story residential and commercial building drainage",
      "Rainwater harvesting stacks and vent line piping",
    ],
    features: [
      "100% leak-tight rubber ring seals that absorb thermal expansion",
      "High resistance to hot water, detergents, and household acids",
      "UV-stabilized compound designed for exterior wall exposure",
    ],
  },
  {
    id: "ugd-pipes",
    name: "Underground Drainage & Sewerage Pipes",
    brand: "KMR SUDHA GOLD",
    category: "UGD Pipes",
    grade: "Heavy Duty Solid Wall (SN 4 / SN 8)",
    sizes: "110mm to 250mm",
    standardLength: "6 Meters socketed",
    applications: [
      "Municipal underground sewerage networks",
      "Industrial estate storm water lines and gravity drainage",
    ],
    features: [
      "Engineered to withstand heavy overhead vehicular traffic loads",
      "Root-proof joints prevent blockages and environmental contamination",
      "Smooth inner lining prevents silt deposits and sediment clogging",
    ],
  },
  {
    id: "electrical-conduits",
    name: "Heavy-Duty Electrical Conduit Pipes",
    brand: "KMR SUDHA GOLD",
    category: "Electrical Conduits",
    grade: "Medium & Heavy Duty Wall",
    sizes: "19mm to 50mm (1.00mm to 2.00mm thickness)",
    standardLength: "3 Meters",
    applications: [
      "Concealed electrical conduit in slab casting and wall chases",
      "Exposed industrial cable pathways and automation raceways",
    ],
    features: [
      "Self-extinguishing, high fire retardant compound",
      "Superior dielectric strength with zero risk of electrical conduction",
      "Smooth inner profile for snag-free, effortless wire pulling",
    ],
  },
];