import {
  DocumentIcon,
  HomeIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export const navigation = [{ name: "Startseite", href: "#" }];

export const footerNavigation = {
  solutions: [
    {
      name: "Weitere Infos",
      href: "https://www.sorba.ch/software/auftragsabwicklung/offerte_abrechnung",
    },
    {
      name: "Offerte & Abrechnung",
      href: "https://www.sorba.ch/software/auftragsabwicklung/offerte_abrechnung",
    },
    {
      name: "NPK Leistungsverzeichnisse",
      href: "https://www.sorba.ch/software/auftragsabwicklung/npk_leistungsverzeichnis",
    },
    {
      name: "Devis importieren",
      href: "https://www.sorba.ch/software/auftragsabwicklung/scanning",
    },
  ],
  support: [
    {
      name: "Ticket einreichen",
      href: "https://support.sorba.ch/hc/de/requests/new",
    },
    { name: "Help Center", href: "https://support.sorba.ch/hc/de" },
  ],
  SORBA: [
    { name: "SORBA", href: "https://www.sorba.ch" },
    { name: "Blog", href: "https://blog.sorba.ch" },
    { name: "Jobs", href: "https://www.sorba.ch/jobs" },
  ],
  legal: [
    { name: "Datenschutz", href: "https://www.sorba.ch/datenschutz" },
    { name: "Impressum", href: "https://www.sorba.ch/impressum" },
    { name: "AGB", href: "https://support.sorba.ch/hc/de/articles/202645311" },
  ],
};

export const Dashboardnavigation = [
  { name: "Dashboard", href: "/dashboard", icon: <HomeIcon /> },
  {
    name: "Offerten erstellen",
    href: "/dashboard/offerte",
    icon: <DocumentIcon />,
  },
  {
    name: "Weitere Infos",
    href: "https://www.sorba.ch/software/auftragsabwicklung/offerte_abrechnung",
    icon: <InformationCircleIcon />,
  },
];
