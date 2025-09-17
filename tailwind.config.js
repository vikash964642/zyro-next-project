/** @type {import('tailwindcss').Config} */
const config = {
  content: [
   "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobileMenuShape: "url('/image/shades/mobile_menu_shad.svg')",
        textgradiantMid: "linear-gradient(45deg, #EDEDED 24%, #9573DE 45%, #F7F7F7 72%)",
        gradientText: "linear-gradient(202deg, #fff, #9573DE 53%, #fff)",
        gradientText1: "radial-gradient(circle,rgba(255, 255, 255, 1) 100%, rgba(149, 115, 222, 1) 100%, rgba(255, 255, 255, 0.67) 100%)",
        featuregradientText: "linear-gradient(360deg,rgba(255, 255, 255, 0) 0%, rgba(80, 49, 181, 0.75) 43%, rgba(80, 49, 181, 1) 100%)",
      },
      colors: {
        heroDesc:"#a9a9a9",
        featurediv:"linear-gradient(145deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
        gradientTextStart: "#fff",
        gradientTextMid: "#9573DE",
        gradientTextEnd: "#fff",
        white70:"rgba(255, 255, 255, 0.70)",
        white90:"rgba(255, 255, 255, 0.90)",
        white20:"rgba(255, 255, 255, 0.20)",
        white20Bg:"rgba(25, 17, 51, 0.20)",
        border20:"rgba(141, 49, 245, 0.40)",
        white80:"rgba(255, 255, 255, 0.80)",
        grey70:"rgba(191, 191, 191, 0.70)",
        newletterBG:"rgba(109, 236, 49, 0.02)",
        newletterboxBorder:"rgba(109, 236, 49, 0.50)",
        bordercolor1:"rgba(255, 255, 255, 0.20)",
        borderColor:"rgba(141, 49, 245, 0.2)",
        backgroundColor1:"rgba(8, 4, 17, 0.50)",
        gradientText2:"linear-gradient(234deg, #FFF 0%, #9573DE 22.6%, #FFF 100%)",
        backgroundColor2:"rgba(8, 4, 17, 0.00)",
        borderSmartExpenseColor:"linear-gradient(90deg,rgba(79, 49, 180, 1) 6%, rgba(34, 21, 78, 1) 100%)",
        bgCorporateCard:"rgba(25, 17, 51, 0.2)",
        bgCorporategradiant:"linear-gradient(90deg,rgba(121, 121, 121, 1) 0%, rgba(111, 65, 210, 1) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
