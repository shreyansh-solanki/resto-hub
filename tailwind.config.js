module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        150: "150px",
        190: "150px",
        225: "150px",
        275: "150px",
        300: "150px",
        340: "150px",
        350: "150px",
        375: "150px",
        460: "150px",
        656: "150px",
        880: "150px",
        508: "150px",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        "ssm": "430px",
        sm: "640px",
        md: "760px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
      },
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
        cardOverlay: "rgba(256,256,256,0.4)",
        lighttextGray: "#9ca0ab",
        rowBg: "rgba(255, 131, 0, 0.04)",
        card: "rgba(256,256,256,0.8)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
