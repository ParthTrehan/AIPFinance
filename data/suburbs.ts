export type SuburbAngle = "growth" | "established" | "investor" | "bayside";

export interface Suburb {
  slug: string;
  name: string;
  postcode: string;
  region: string;
  nearby: string[];
  buyerType: string;
  landmark: string;
  angle: SuburbAngle;
}

export const suburbs: Suburb[] = [
  // Western corridor
  { slug: "point-cook", name: "Point Cook", postcode: "3030", region: "Melbourne's western suburbs", nearby: ["Werribee", "Hoppers Crossing", "Tarneit"], buyerType: "first home buyers and families", landmark: "Sanctuary Lakes and the RAAF Museum", angle: "established" },
  { slug: "werribee", name: "Werribee", postcode: "3030", region: "Melbourne's western suburbs", nearby: ["Point Cook", "Hoppers Crossing", "Wyndham Vale"], buyerType: "first home buyers and investors", landmark: "Werribee Park and the Werribee train line", angle: "established" },
  { slug: "hoppers-crossing", name: "Hoppers Crossing", postcode: "3029", region: "Melbourne's western suburbs", nearby: ["Werribee", "Point Cook", "Tarneit"], buyerType: "first home buyers and families", landmark: "Pacific Werribee and the Werribee rail line", angle: "established" },
  { slug: "tarneit", name: "Tarneit", postcode: "3029", region: "Melbourne's western growth corridor", nearby: ["Point Cook", "Wyndham Vale", "Hoppers Crossing"], buyerType: "first home buyers", landmark: "Tarneit's own train station and fast-growing town centre", angle: "growth" },
  { slug: "wyndham-vale", name: "Wyndham Vale", postcode: "3024", region: "Melbourne's western growth corridor", nearby: ["Tarneit", "Werribee", "Point Cook"], buyerType: "first home buyers and young families", landmark: "the Wyndham Vale train line and its new housing estates", angle: "growth" },
  { slug: "sunshine", name: "Sunshine", postcode: "3020", region: "Melbourne's inner west", nearby: ["Footscray", "St Albans", "Werribee"], buyerType: "investors and first home buyers", landmark: "Sunshine station, one of Melbourne's busiest transport hubs", angle: "investor" },
  { slug: "footscray", name: "Footscray", postcode: "3011", region: "Melbourne's inner west", nearby: ["Sunshine", "St Albans", "Point Cook"], buyerType: "investors and professionals", landmark: "the Maribyrnong River and Footscray's Little Saigon precinct", angle: "investor" },
  { slug: "st-albans", name: "St Albans", postcode: "3021", region: "Melbourne's western suburbs", nearby: ["Sunshine", "Footscray", "Werribee"], buyerType: "first home buyers and investors", landmark: "the Sunbury rail line and St Albans' diverse community", angle: "investor" },

  // Northern corridor
  { slug: "craigieburn", name: "Craigieburn", postcode: "3064", region: "Melbourne's northern growth corridor", nearby: ["Epping", "South Morang", "Thomastown"], buyerType: "first home buyers and families", landmark: "Craigieburn Central and the end of the Craigieburn line", angle: "growth" },
  { slug: "epping", name: "Epping", postcode: "3076", region: "Melbourne's northern suburbs", nearby: ["South Morang", "Thomastown", "Mill Park"], buyerType: "first home buyers and investors", landmark: "Pacific Epping and the Mernda rail line", angle: "established" },
  { slug: "south-morang", name: "South Morang", postcode: "3752", region: "Melbourne's northern suburbs", nearby: ["Epping", "Mill Park", "Thomastown"], buyerType: "families and first home buyers", landmark: "South Morang station on the Mernda line", angle: "established" },
  { slug: "thomastown", name: "Thomastown", postcode: "3074", region: "Melbourne's northern suburbs", nearby: ["Epping", "South Morang", "Mill Park"], buyerType: "first home buyers and investors", landmark: "the Mernda rail line and Thomastown's light-industrial precinct", angle: "established" },
  { slug: "mill-park", name: "Mill Park", postcode: "3082", region: "Melbourne's northern suburbs", nearby: ["South Morang", "Epping", "Thomastown"], buyerType: "families and first home buyers", landmark: "Mill Park Lakes, close to La Trobe University", angle: "established" },

  // South-eastern corridor
  { slug: "pakenham", name: "Pakenham", postcode: "3810", region: "Melbourne's south-eastern growth corridor", nearby: ["Berwick", "Narre Warren", "Cranbourne"], buyerType: "first home buyers and families", landmark: "the Pakenham line and Cardinia's new estates", angle: "growth" },
  { slug: "berwick", name: "Berwick", postcode: "3806", region: "Melbourne's south-eastern suburbs", nearby: ["Narre Warren", "Pakenham", "Cranbourne"], buyerType: "families and upsizers", landmark: "Berwick's historic village main street", angle: "established" },
  { slug: "narre-warren", name: "Narre Warren", postcode: "3805", region: "Melbourne's south-eastern suburbs", nearby: ["Berwick", "Cranbourne", "Pakenham"], buyerType: "families and first home buyers", landmark: "Westfield Fountain Gate", angle: "established" },
  { slug: "cranbourne", name: "Cranbourne", postcode: "3977", region: "Melbourne's south-eastern suburbs", nearby: ["Berwick", "Narre Warren", "Frankston"], buyerType: "first home buyers and investors", landmark: "the end of the Cranbourne train line", angle: "established" },
  { slug: "frankston", name: "Frankston", postcode: "3199", region: "Melbourne's Mornington Peninsula", nearby: ["Cranbourne", "Dandenong", "Cheltenham"], buyerType: "investors and sea-changers", landmark: "Frankston's waterfront and the gateway to the Mornington Peninsula", angle: "bayside" },
  { slug: "dandenong", name: "Dandenong", postcode: "3175", region: "Melbourne's south-eastern suburbs", nearby: ["Narre Warren", "Springvale", "Frankston"], buyerType: "investors and first home buyers", landmark: "Dandenong's major rail interchange and commercial precinct", angle: "investor" },

  // Eastern suburbs
  { slug: "glen-waverley", name: "Glen Waverley", postcode: "3150", region: "Melbourne's eastern suburbs", nearby: ["Doncaster", "Box Hill", "Ringwood"], buyerType: "families and upgraders", landmark: "The Glen and the Glen Waverley train line", angle: "established" },
  { slug: "doncaster", name: "Doncaster", postcode: "3108", region: "Melbourne's eastern suburbs", nearby: ["Box Hill", "Glen Waverley", "Ringwood"], buyerType: "families and investors", landmark: "Westfield Doncaster and the DART bus network", angle: "established" },
  { slug: "box-hill", name: "Box Hill", postcode: "3128", region: "Melbourne's eastern suburbs", nearby: ["Doncaster", "Glen Waverley", "Ringwood"], buyerType: "investors and professionals", landmark: "Box Hill's major transport interchange and town centre", angle: "investor" },
  { slug: "ringwood", name: "Ringwood", postcode: "3134", region: "Melbourne's eastern suburbs", nearby: ["Box Hill", "Doncaster", "Glen Waverley"], buyerType: "families and first home buyers", landmark: "Eastland and the Ringwood rail interchange", angle: "established" },

  // South
  { slug: "cheltenham", name: "Cheltenham", postcode: "3192", region: "Melbourne's bayside suburbs", nearby: ["Frankston", "Springvale", "Dandenong"], buyerType: "families and investors", landmark: "Westfield Southland and the Frankston line", angle: "bayside" },
  { slug: "springvale", name: "Springvale", postcode: "3171", region: "Melbourne's south-eastern suburbs", nearby: ["Dandenong", "Cheltenham", "Frankston"], buyerType: "investors and first home buyers", landmark: "Springvale's well-known food and retail strip", angle: "investor" },
  { slug: "melton", name: "Melton", postcode: "3337", region: "Melbourne's western growth corridor", nearby: ["Wyndham Vale", "Tarneit", "Point Cook"], buyerType: "first home buyers and young families", landmark: "the Melton line and Melbourne's western growth front", angle: "growth" },
];

export function getSuburbBySlug(slug: string): Suburb | undefined {
  return suburbs.find((s) => s.slug === slug);
}
