export type ProjectChartSection = {
  title: string;
  endpoint: string;
  variant: "line" | "multi" | "bar";
};

export const indiaProjectChartSections = {
  emissionsAndGrid: [
    {
      title: "India total GHG emissions trend",
      endpoint: "/api/ghg-emissions.json",
      variant: "line",
    },
    {
      title: "India grid or power-sector CO2 factor trend",
      endpoint: "/api/grid-factor.json",
      variant: "bar",
    },
    {
      title: "India monthly emissions context",
      endpoint: "/api/monthly-emissions.json",
      variant: "line",
    },
  ],
  airAndClimate: [
    {
      title: "Delhi PM2.5 air quality trend",
      endpoint: "/api/air-quality-pm25.json",
      variant: "multi",
    },
    {
      title: "Delhi NO2 air quality trend",
      endpoint: "/api/air-quality-no2.json",
      variant: "multi",
    },
    {
      title: "Delhi temperature / heat trend",
      endpoint: "/api/weather-temperature.json",
      variant: "line",
    },
    {
      title: "Delhi rainfall trend",
      endpoint: "/api/weather-rainfall.json",
      variant: "bar",
    },
  ],
  riskAndSocial: [
    {
      title: "India water stress risk",
      endpoint: "/api/water-risk.json",
      variant: "line",
    },
    {
      title: "India OHSE / occupational safety benchmark trend",
      endpoint: "/api/ohse.json",
      variant: "line",
    },
    {
      title: "India ESG or SDG country indicator trend",
      endpoint: "/api/worldbank.json?metric=indicator",
      variant: "line",
    },
  ],
} as const;
