const theme = {
  breakpoints: ["480px", "768px", "1024px"],
  fontFamily: {
    body: '"Roboto", sans-serif',
    heading: '"Roboto", sans-serif',
    monospace: "'Shadows Into Light', cursive",
  },
  colors: {
    text: "#000",
    bg: "#DAB785",
    primary: "#084C61",
    secondary: "#6C464F",
    third: "#D0A3BF",
    fourth: "#005E7C",
  },
  buttons: {
    primary: {
      fontWeight: "200",
      color: "#084C61",
      fontSize: "1.2em",
      border: "2px solid #084C61",
      borderRadius: "35px",
      height: "50px",
      width: "150px",
      bg: "white",
      "&:hover": {
        bg: "#084C61",
        color: "white",
      },
    },
    add: {
      fontWeight: "200",
      fontSize: "3em",
      borderRadius: "50%",
      lineHeight: "50px",
      height: "50px",
      width: "50px",
      color: "#DAB785",
      border: "2px solid #DAB785",
      textAlign: "center",
      padding: "0",
      display: "inline-block",
      bg: "white",
      "&:hover": {
        bg: "#DAB785",
        color: "white",
      },
    },

    delete: {
      bg: "transparent",
      padding: "0px",
    },
  },
  forms: {
    input: {
      borderColor: "white",
      bg: "white",
      "&focus": {
        borderColor: "white",
      },
    },
    select: {
      borderColor: "#084C61",
      margin: "10px 0",
      "&:focus": {
        borderColor: "primary",
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    checkbox: {
      margin: "0px",
    },
    label: {
      margin: "0px",
      width: "0px",
    },
  },
};

export default theme;
