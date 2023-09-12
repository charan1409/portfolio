import React from "react";
import { Typography, Box, Container } from "@mui/material";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import user from "../../Data";

const Page = () => {
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
        <LocalLibraryOutlinedIcon
          sx={{
            textAlign: "center",
            padding: ".5rem .7rem",
            borderRadius: ".5rem",
            border: "1px solid #383838",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
            color: "#0059b3",
            fontSize: "2rem",
          }}
        />
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: "700",
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
        <LocalLibraryOutlinedIcon
          sx={{
            textAlign: "center",
            padding: ".5rem .7rem",
            borderRadius: ".5rem",
            border: "1px solid #383838",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
            color: "#0059b3",
            fontSize: "2rem",
          }}
        />
        <Typography
          variant="h4"
          component="h4"
          sx={{
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: "700",
          }}
        >
          Experience
        </Typography>
      </Box>
      {user.experience.map((step, index) => (
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
