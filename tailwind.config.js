module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'day_sun' : "url('../public/back_big.jpg')",
        'day_rain' : "url('../public/dayrain.jpg')",
        'day_cloud' : "url('../public/daycloud2.jpg')",
        'day_snow' : "url('../public/daysnow.jpg')",
        'night_sun' : "url('../public/nightsunny.jpg')",
        'night_snow' : "url('../public/nightsnow.jpg')",
        'night_thunder' : "url('../public/nightthunder.jpg')",
        'lorem':'url(https://picsum.photos/200)'
      },

      colors: {
        s2condPurple: "#a32eff", // works ⭕️
        s2condPink: "#ff0099", // works ⭕️
        s2condOrange: "#ff5f55", // works ⭕️
        s2condYellow: "#ffe600", // doesn't works ❌
        s2condLime: "#cdff64", // works ⭕️
        s2condMint: "#2af1b5", // works at 'text-s2condMint' but not at 'border-s2condMint'
        secondTest: "#ffe600", // works ⭕️ <-- I tested it for s2condYellow but it works perfectly!
        s2condTest2: "#2af1b5", // doesn't works ❌
      },
    },
  },
  plugins: [],
};
