import React from "react";
import { Container } from "@mui/material";
import Project from "../../components/Project";
import user from "../../Data";

const page = () => {
  return (
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          height: "100%",
          width: "100%",
          color: "#fff",
          padding: "0 !important",
          gap: "1rem",
          boxSizing: "border-box",
          overflowY: "scroll",
        }}
      >
        {user.projects.map((project, index) => (
          <Project
            key={index}
            imageLink={project.imageLink}
            title={project.title}
            description={project.description}
          />
        ))}
      </Container>
  );
};

export default page;
