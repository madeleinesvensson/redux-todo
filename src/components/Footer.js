import React from "react";
import { Box, Paragraph } from "theme-ui";

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
        <Paragraph
          sx={{
            fontFamily: "Shadows Into Light",
            color: "white",
            fontSize: "1.2em",
          }}
        >
          Madeleine Svensson
        </Paragraph>
      </Box>
    </>
  );
};
