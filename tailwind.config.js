/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/js/*.js"],
  theme: {
      container: {
      center: true,
      padding: "2rem"
    },
    fontFamily: {
      "vazir" : "vazir",
      "vazirBold" : "vazirBold",
      "nasim" : "nasim"
    },
    extend: {
      colors: {
        primary: "var(--primary)",
      },
      screens: {
        'vmini' : '393px',
        'mobile' : '500px',
        'ipad' : '600px',
        'tablet' : '768px',
        'laptop' : '992px',
        'desktop' : '1200px',
        'large' : '1400px'
      }
    },
  },
  plugins: [],
}

