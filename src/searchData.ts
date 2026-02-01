// searchData.ts
export const searchData = [
  // --- MAIN NAVIGATION ---
  { title: "Home", path: "/", category: "Page", keywords: "index main" },
  { title: "About Us", path: "/#about", category: "Section", keywords: "intro info who we are" },
  { title: "Contact", path: "/#contact", category: "Section", keywords: "email phone address location" },
  
  // --- PAGES ---
  { title: "Achievements", path: "/achievements", category: "Page", keywords: "awards prizes winning" },
  { title: "RoboSub", path: "/robosub", category: "Page", keywords: "competition san diego history" },
  { title: "Team", path: "/team25", category: "Page", keywords: "members students leads" },
  { title: "Gallery", path: "/gallery", category: "Media", keywords: "photos images pictures" },
  { title: "Blogs", path: "/blogs", category: "Media", keywords: "articles news outreach" },

  // --- VEHICLES (Specific Redirects) ---
  // These use '?id=X' so the Vehicle page knows which one to load
  { title: "Matsya 1", path: "/vehicles?id=1", category: "Vehicle", keywords: "first prototype" },
  { title: "Matsya 2", path: "/vehicles?id=2", category: "Vehicle", keywords: "second iteration" },
  { title: "Matsya 3", path: "/vehicles?id=3", category: "Vehicle", keywords: "third iteration" },
  { title: "Matsya 4", path: "/vehicles?id=4", category: "Vehicle", keywords: "fourth iteration" },
  { title: "Matsya 5", path: "/vehicles?id=5", category: "Vehicle", keywords: "fifth iteration" },
  { title: "Matsya 6", path: "/vehicles?id=6", category: "Vehicle", keywords: "sixth iteration semi-finals" },
  { title: "Matsya 7", path: "/vehicles?id=7", category: "Vehicle", keywords: "latest current auv carbon fibre" },
];