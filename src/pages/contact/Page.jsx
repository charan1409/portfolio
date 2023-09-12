import React from "react";
import { Typography, Box } from "@mui/material";
import Navbar from "../../components/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "#fff",
          fontSize: "2rem",
          fontWeight: "700",
          marginTop: "1rem",
        }}
      >
        Contact
      </Typography>
      <Box
        sx={{
          borderRadius: "1rem",
          border: "1px solid #383838",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
          backgroundColor: "#0059b3",
          width: "50px",
          height: "6px",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      ></Box>
    </div>
  );
};

export default page;
