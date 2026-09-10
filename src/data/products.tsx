export interface PipeProduct {
  id: string;
  name: string;
  brand: string;
  category: "Agricultural & Potable" | "Casing Pipes" | "Electrical Conduits" | "SWR Pipes" | "UGD Pipes";
  sizes: string;
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
  worksAddress: "Plot No. 30, IDA, Kamareddy, Telangana - 503 111",
  phones: ["+91 9849055466", "+91 9849055977"],
  email: "kmrpolymers@gmail.com",
};

export const PIPE_PRODUCTS: PipeProduct[] = [
  {
    id: "agricultural-upvc",
    name: "uPVC Agricultural & Potable Water Pipes",
    brand: "KMR SUDHA GOLD",
    category: "Agricultural & Potable",
    sizes: "20 mm to 250 mm (1/2\" to 10\")",
    certification: "IS 4985 : 2000 (BIS Certified)",
    applications: [
      "Agriculture & Irrigation",
      "Lift and Drip Irrigation",
      "Rural and Urban Drinking Water Supply Schemes",
      "Tube Well Casing & Poultry Farms",
      "Rainwater Disposal Systems",
    ],
    features: [
      "Smooth internal surface ensuring maximum flow rate",
      "Lightweight, strong, and easy to handle & install",
      "High chemical, corrosion, and fire resistance",
      "Soil movement resistance via inherent flexibility",
      "Energy saving with zero maintenance costs",
    ],
  },
  {
    id: "casing-pipes",
    name: "Well Casing & Screen Pipes",
    brand: "KMR SUDHA GOLD",
    category: "Casing Pipes",
    sizes: "Gray: 140mm, 180mm, 250mm | Blue: 100mm, 125mm, 175mm, 225mm, 240mm",
    applications: [
      "Borewell casing up to 400m - 1200ft depth",
      "Submersible pump & vertical shaft pump installations",
      "Coastal areas and loose soil conditions",
    ],
    features: [
      "Resistant to mineral salts and corrosive ground chemicals",
      "Thick wall sections engineered for high compression resistance",
      "Suitable clearance for high-capacity submersible pumps",
    ],
    colors: ["Gray", "Blue"],
  },
  {
    id: "swr-pipes",
    name: "SWR Drainage Pipes (Soil, Waste & Rainwater)",
    brand: "KMR SUDHA GOLD",
    category: "SWR Pipes",
    sizes: "OD 75mm, 110mm, 160mm (Length: 3m in single/double socket)",
    applications: [
      "Effluent discharge and industrial waste lines",
      "Plumbing drainage from domestic toilets and bathrooms",
      "Rainwater harvesting and downpipe drainage",
    ],
    features: [
      "Zero clogging risk in internal drainage systems",
      "Economical installation and lightweight handling",
      "Extremely low maintenance requirements",
    ],
  },
  {
    id: "ugd-pipes",
    name: "UGD Underground Drainage Pipes",
    brand: "KMR SUDHA GOLD",
    category: "UGD Pipes",
    sizes: "75mm, 110mm, 160mm, 200mm",
    applications: [
      "Underground non-pressure drainage networks",
      "Bio-gas and oil distribution lines",
      "Subsoil drainage & industrial effluent disposal",
      "Acid, slurry, and aggressive waste transport",
    ],
    features: [
      "Convenient push-fit joints that accommodate expansion/contraction",
      "Saves manpower with rapid all-weather jointing",
      "Allows immediate pressure testing and commissioning",
    ],
  },
  {
    id: "electrical-conduits",
    name: "Electrical Conduit Pipes",
    brand: "KMR SUDHA GOLD",
    category: "Electrical Conduits",
    sizes: "19mm to 50mm (1.00mm to 2.00mm wall thickness)",
    applications: [
      "Concealed electrical wiring in residential & commercial buildings",
      "Industrial cable channeling",
    ],
    features: [
      "Self-extinguishing, high fire resistance",
      "Non-corrosive with long operational life",
      "Smooth visual appearance with easy wire pulling",
    ],
  },
];