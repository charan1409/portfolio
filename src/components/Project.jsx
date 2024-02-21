import React from "react";
import { Box, Card, Icon, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";

const Project = ({ imageLink, title, description, repoLink, webURL }) => {
  const openRepoLink = () => {
    window.open(repoLink, "_blank");
  };
  const openWebURL = () => {
    window.open(webURL, "_blank");
  };
  return (
    <Card
      variant="outlined"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "250px !important",
        width: "300px !important",
        background: "none",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "0 !important",
        padding: "2px",
        "&:hover img": {
          transform: "scale(1.1)",
          transition: "all .5s ease",
        },
        "&:hover": {
          border: "1px solid #383838",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "250px",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          src={imageLink}
          alt={title}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              gap: "1rem",
              color: "#fff",
              marginLeft: ".5rem",
              marginTop: ".5rem",
            }}
          >
            <Icon
              component={GitHubIcon}
              sx={{
                color: "#888888",
                fontSize: "2rem",
                cursor: "pointer",
                "&:hover": {
                  color: "#fff",
                },
              }}
              onClick={openRepoLink}
            />
            {webURL && (
              <Icon
                component={LinkIcon}
                sx={{
                  color: "#888888",
                  fontSize: "2rem",
                  cursor: "pointer",
                  "&:hover": {
                    color: "#fff",
                  },
                }}
                onClick={openWebURL}
              />
            )}
          </Box>
        </Box>
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
      </Box>
    </Card>
  );
};

export default Project;
