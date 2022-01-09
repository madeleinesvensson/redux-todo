import React from "react";
import { Box, Paragraph, Link } from "theme-ui";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bg: "primary",

          textAlign: "center",
          padding: "20px",
        }}
      >
        <Paragraph
          sx={{ fontFamily: "Roboto", color: "white", fontSize: "1.5em" }}
        >
          Made by:
        </Paragraph>
        <Link
          href="https://github.com/madeleinesvensson"
          rel="noopener noreferrer"
          target="_blank"
          sx={{
            fontFamily: "Shadows Into Light",
            color: "white",
            fontSize: "1.2em",
            textDecoration: "none",
          }}
        >
          Madeleine Svensson
        </Link>
      </Box>
    </>
  );
};
