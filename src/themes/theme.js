const theme = {
  breakpoints: ["480px", "768px", "1024px"],
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    bg: "red",
    primary: "red",
    secondary: "blue",
  },
  buttons: {
    primary: {
      fontWeight: "200",
      color: "red",
      border: "2px solid red",
      borderRadius: "35px",
      bg: "white",
      "&:hover": {
        bg: "red",
        color: "white",
      },
    },
    secondary: {
      fontWeight: "200",
      color: "red",
      border: "2px solid red",
      bg: "white",
      "&:hover": {
        bg: "red",
        color: "white",
      },
    },
  },
  forms: {
    input: {
      borderColor: "red",
      "&focus": {
        borderColor: "white",
      },
    },
    select: {
      borderColor: "gray",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
};

export default theme;
