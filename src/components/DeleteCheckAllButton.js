import React from "react";
import { Box } from "theme-ui";
import { CheckAllButton, DeleteAllButton } from "./Buttons";

export const DeleteCheckAllButton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        padding: "20px",
        bg: "bg",
      }}
    >
      <DeleteAllButton />
      <CheckAllButton />
    </Box>
  );
};
