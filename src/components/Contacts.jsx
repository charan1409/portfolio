import { Box, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneOutlinedIcon from "@mui/icons-material/SmartphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';

const Contacts = ({ heading, contactInfo }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "1rem",
        width: "100%",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          padding: ".5rem .75rem",
          borderRadius: ".5rem",
          border: "1px solid #383838",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
          color: "#0059b3",
        }}
      >
        {heading === "Email" ? (
          <EmailOutlinedIcon />
        ) : heading === "Phone" ? (
          <SmartphoneOutlinedIcon />
        ) : heading === "Experience" ? (
          <WorkOutlineOutlinedIcon />
        ) : (
          <LocationOnOutlinedIcon />
        )}
      </Box>
      <Box>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "#969699",
            fontSize: ".8rem",
            fontWeight: "semi-bold",
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          sx={{
            color: "#fdfdfd",
            fontSize: ".8rem",
            fontWeight: "semi-bold",
          }}
        >
          {contactInfo}
        </Typography>
      </Box>
    </Box>
  );
};

export default Contacts;
