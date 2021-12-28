const theme = {
  fontFamily: {
    body: "Arial",
    heading: "Verdana",
    monospace: "Menlo",
  },
  colors: {
    text: "#000",
    bg: "red",
    primary: "red",
  },
  buttons: {
    primary: {
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
};

export default theme;
