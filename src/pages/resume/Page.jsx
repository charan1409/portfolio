import React from "react";
import { Typography, Box, Container } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import user from "../../Data";

const Page = () => {
  const downloadResume = () => {
    window.open(user.resumeDriveLink, "_blank");
  };
  return (
    <Container
      sx={{
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
        overflowY: "scroll",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: "#0059b3",
            fontSize: "1.5rem",
            fontWeight: "700",
            marginTop: "1rem",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={downloadResume}
        >
          View Resume
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: "#0059b3",
            fontSize: "1.5rem",
            fontWeight: "700",
            marginTop: "1rem",
          }}
        >
          About
        </Typography>
      </Box>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "#f5f5f5",
          fontSize: "1rem",
          fontWeight: "500",
          padding: "1rem",
        }}
      >
        {user.about}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
          color: "#fff",
        }}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: "#0059b3",
            fontSize: "1.5rem",
            fontWeight: "700",
            marginTop: "1rem",
          }}
        >
          Education
        </Typography>
      </Box>
      {user.education.map((step, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "1rem",
            marginTop: "1.5rem",
            marginLeft: "1.5rem",
            color: "#fff",
          }}
        >
          <ArrowRightAltIcon
            sx={{
              color: "#66b2ff",
              fontSize: "1.5rem",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "1rem",
              color: "#fff",
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{
                color: "#fff",
                fontSize: "1.25rem",
                fontWeight: "600",
              }}
            >
              {step.label}
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              sx={{
                color: "#bababb",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {step.description}
            </Typography>
          </Box>
        </Box>
      ))}
      {user.experiences.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "1rem",
            marginTop: "2rem",
            color: "#fff",
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            sx={{
              color: "#0059b3",
              fontSize: "1.5rem",
              fontWeight: "700",
            }}
          >
            Experience
          </Typography>
        </Box>
      )}
      {user.experiences.map((step, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "1rem",
            marginTop: "1.5rem",
            marginLeft: "1.5rem",
            color: "#fff",
          }}
        >
          <ArrowRightAltIcon
            sx={{
              color: "#66b2ff",
              fontSize: "1.5rem",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "1rem",
              color: "#fff",
            }}
          >
            <Typography
              variant="h4"
              component="h4"
              sx={{
                color: "#fff",
                fontSize: "1.25rem",
                fontWeight: "600",
              }}
            >
              {step.label}
            </Typography>
            <Typography
              variant="h4"
              component="h4"
              sx={{
                color: "#bababb",
                fontSize: "1rem",
                fontWeight: "500",
              }}
            >
              {step.description}
            </Typography>
          </Box>
        </Box>
      ))}
    </Container>
  );
};

export default Page;
