import React from "react";
import { Card, Typography } from "@mui/material";

const Project = ({ imageLink, title, description}) => {
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "350px",
        width: "30%",
        background: "none",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "0 !important",
        padding: "2px",
        cursor: "pointer",
      }}
    >
      <img
        src={imageLink}
        alt="spotify"
        style={{
          height: "250px",
          width: "100%",
          objectFit: "contain",
        }}
      />
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "#fff",
          fontSize: "1.4rem",
          fontWeight: "600",
          marginTop: "1rem",
          marginLeft: ".5rem",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "#888888",
          fontSize: "1rem",
          fontWeight: "500",
          marginTop: ".25rem",
          marginLeft: ".5rem",
          marginBottom: "1rem",
        }}
      >
        {description}
      </Typography>
    </Card>
  );
};

export default Project;
