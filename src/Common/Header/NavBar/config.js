export const notLoggedInNavItems = [
  { label: "Tournament", path: "/tournament" },
  { label: "Leaderboard", path: "/leaderboard" },
  { label: "Cricket Store", path: "/market" },
  { label: "About", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

export const loggedInNavItems = [
  { label: "common:FINANCIALS", path: "ROUTES.FINANCIAL", isLink: false },
  {
    label: "common:FOOTBALL",
    path: "/sport/football",
    isLink: false,
    forCheck: "football",
  },
  {
    label: "common:CRICKET",
    path: "/sport/cricket",
    isLink: false,
    forCheck: "cricket",
  },
  { label: "common:DASHBOARD", path: "ROUTES.DASHBOARD", isLink: false },
  {
    label: "common:SUPPORT",
    path: "mailto:support@allstarstrader.com",
    isLink: true,
  },
];
