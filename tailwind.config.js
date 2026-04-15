const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        brand: {
          red: "#C0392B",
          navy: "#1F2A44",
          light: "#F8FAFC",
          gray: "#64748B",
        },
      },

      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, rgba(31, 42, 68, 0.9), rgba(31, 42, 68, 0.95))",
        "card-gradient": "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      },

      boxShadow: {
        soft: "0 4px 20px -2px rgba(31, 42, 68, 0.05)",
        hover: "0 10px 30px -5px rgba(31, 42, 68, 0.1)",
      },
    },
  },
  plugins: [],
};

module.exports = config;
