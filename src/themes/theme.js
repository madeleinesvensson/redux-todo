const theme = {
  breakpoints: ["480px", "768px", "1024px"],
  fontFamily: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    bg: "#DAB785",
    primary: "#084C61",
    secondary: "#6C464F",
  },
  buttons: {
    primary: {
      fontWeight: "200",
      color: "#084C61",
      border: "2px solid #084C61",
      borderRadius: "35px",
      bg: "white",
      "&:hover": {
        bg: "#084C61",
        color: "white",
      },
    },
    add: {
      fontWeight: "200",
      fontSize: "40px",
      borderRadius: "50%",
      lineHeight: "70px",
      width: "85px",
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
    underlined: {
      border: "none",
      bg: "white",
      color: "black",

      margin: "10px",
      borderRadius: "0px",
      "&:active": {
        borderBottom: "1px solid black",
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
      margin: "2",
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
