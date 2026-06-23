export interface Suburb {
  slug: string;
  name: string;
  postcode: string;
  region: string;
  nearby: string[];
  buyerType: string;
}

export const suburbs: Suburb[] = [
  // Western corridor
  { slug: "point-cook", name: "Point Cook", postcode: "3030", region: "Melbourne's western suburbs", nearby: ["Werribee", "Hoppers Crossing", "Tarneit"], buyerType: "first home buyers and families" },
  { slug: "werribee", name: "Werribee", postcode: "3030", region: "Melbourne's western suburbs", nearby: ["Point Cook", "Hoppers Crossing", "Wyndham Vale"], buyerType: "first home buyers and investors" },
  { slug: "hoppers-crossing", name: "Hoppers Crossing", postcode: "3029", region: "Melbourne's western suburbs", nearby: ["Werribee", "Point Cook", "Laverton"], buyerType: "first home buyers and families" },
  { slug: "tarneit", name: "Tarneit", postcode: "3029", region: "Melbourne's western growth corridor", nearby: ["Point Cook", "Wyndham Vale", "Hoppers Crossing"], buyerType: "first home buyers" },
  { slug: "wyndham-vale", name: "Wyndham Vale", postcode: "3024", region: "Melbourne's western growth corridor", nearby: ["Tarneit", "Werribee", "Point Cook"], buyerType: "first home buyers and young families" },
  { slug: "sunshine", name: "Sunshine", postcode: "3020", region: "Melbourne's inner west", nearby: ["Footscray", "St Albans", "Albion"], buyerType: "investors and first home buyers" },
  { slug: "footscray", name: "Footscray", postcode: "3011", region: "Melbourne's inner west", nearby: ["Sunshine", "Seddon", "Yarraville"], buyerType: "investors and professionals" },
  { slug: "st-albans", name: "St Albans", postcode: "3021", region: "Melbourne's western suburbs", nearby: ["Sunshine", "Keilor", "Deer Park"], buyerType: "first home buyers and investors" },

  // Northern corridor
  { slug: "craigieburn", name: "Craigieburn", postcode: "3064", region: "Melbourne's northern growth corridor", nearby: ["Roxburgh Park", "Mickleham", "Greenvale"], buyerType: "first home buyers and families" },
  { slug: "epping", name: "Epping", postcode: "3076", region: "Melbourne's northern suburbs", nearby: ["South Morang", "Thomastown", "Mill Park"], buyerType: "first home buyers and investors" },
  { slug: "south-morang", name: "South Morang", postcode: "3752", region: "Melbourne's northern suburbs", nearby: ["Epping", "Mill Park", "Doreen"], buyerType: "families and first home buyers" },
  { slug: "thomastown", name: "Thomastown", postcode: "3074", region: "Melbourne's northern suburbs", nearby: ["Epping", "Lalor", "Reservoir"], buyerType: "first home buyers and investors" },
  { slug: "mill-park", name: "Mill Park", postcode: "3082", region: "Melbourne's northern suburbs", nearby: ["South Morang", "Epping", "Bundoora"], buyerType: "families and first home buyers" },

  // South-eastern corridor
  { slug: "pakenham", name: "Pakenham", postcode: "3810", region: "Melbourne's south-eastern growth corridor", nearby: ["Berwick", "Officer", "Narre Warren"], buyerType: "first home buyers and families" },
  { slug: "berwick", name: "Berwick", postcode: "3806", region: "Melbourne's south-eastern suburbs", nearby: ["Narre Warren", "Pakenham", "Cranbourne"], buyerType: "families and upsizers" },
  { slug: "narre-warren", name: "Narre Warren", postcode: "3805", region: "Melbourne's south-eastern suburbs", nearby: ["Berwick", "Cranbourne", "Hallam"], buyerType: "families and first home buyers" },
  { slug: "cranbourne", name: "Cranbourne", postcode: "3977", region: "Melbourne's south-eastern suburbs", nearby: ["Berwick", "Narre Warren", "Frankston"], buyerType: "first home buyers and investors" },
  { slug: "frankston", name: "Frankston", postcode: "3199", region: "Melbourne's Mornington Peninsula", nearby: ["Cranbourne", "Seaford", "Langwarrin"], buyerType: "investors and sea-changers" },
  { slug: "dandenong", name: "Dandenong", postcode: "3175", region: "Melbourne's south-eastern suburbs", nearby: ["Narre Warren", "Noble Park", "Springvale"], buyerType: "investors and first home buyers" },

  // Eastern suburbs
  { slug: "glen-waverley", name: "Glen Waverley", postcode: "3150", region: "Melbourne's eastern suburbs", nearby: ["Doncaster", "Box Hill", "Ringwood"], buyerType: "families and upgraders" },
  { slug: "doncaster", name: "Doncaster", postcode: "3108", region: "Melbourne's eastern suburbs", nearby: ["Box Hill", "Glen Waverley", "Ringwood"], buyerType: "families and investors" },
  { slug: "box-hill", name: "Box Hill", postcode: "3128", region: "Melbourne's eastern suburbs", nearby: ["Doncaster", "Glen Waverley", "Ringwood"], buyerType: "investors and professionals" },
  { slug: "ringwood", name: "Ringwood", postcode: "3134", region: "Melbourne's eastern suburbs", nearby: ["Box Hill", "Doncaster", "Croydon"], buyerType: "families and first home buyers" },

  // South
  { slug: "cheltenham", name: "Cheltenham", postcode: "3192", region: "Melbourne's bayside suburbs", nearby: ["Frankston", "Mentone", "Moorabbin"], buyerType: "families and investors" },
  { slug: "springvale", name: "Springvale", postcode: "3171", region: "Melbourne's south-eastern suburbs", nearby: ["Dandenong", "Noble Park", "Clayton"], buyerType: "investors and first home buyers" },
  { slug: "melton", name: "Melton", postcode: "3337", region: "Melbourne's western growth corridor", nearby: ["Wyndham Vale", "Tarneit", "Bacchus Marsh"], buyerType: "first home buyers and young families" },
];

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return suburbs.find((s) => s.slug === slug);
}
