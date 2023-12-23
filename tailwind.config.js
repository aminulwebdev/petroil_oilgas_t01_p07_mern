tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        headerbg: "#282828",
        primary: "#F40404",
      },
      maxWidth: {
        container: "1140px",
      },
      fontFamily: {
        'poppins': "'Poppins', sans-serif",
      },
      backgroundImage: {
        'banner': " linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./images/banner.jpg')",
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1400px',
      },
    }
  }
}