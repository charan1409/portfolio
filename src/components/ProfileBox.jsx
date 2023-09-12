import { Box, Card, Typography } from "@mui/material";
import Contacts from "./Contacts";
import userDetails from "../Data";

const ProfileBox = () => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 1rem",
        borderRadius: "1rem",
        border: "1px solid #383838",
        boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
        backgroundColor: "#1e1e1f",
        flex: "1",
      }}
    >
      <Box
        sx={{
          borderRadius: "1rem",
          border: "1px solid #383838",
          backgroundColor: "#373737",
          width: "150px",
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2.5rem",
          marginBottom: "2.5rem",
        }}
      >
        <img
          src={userDetails.profilePic}
          alt="My pic"
          width={150}
          height={150}
        />
      </Box>
      <Typography
        variant="h4"
        component="h4"
        sx={{
          color: "#fff",
          marginBottom: "1rem",
          fontSize: "1.8rem",
          fontWeight: "700",
        }}
      >
        {userDetails.name}
      </Typography>
      <Box
        sx={{
          borderRadius: ".5rem",
          border: "1px solid #383838",
          backgroundColor: "#373737",
          textAlign: "center",
          padding: ".5rem 1.5rem",
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{
            color: "#fdfdfd",
            fontSize: ".8rem",
            fontWeight: "semi-bold",
          }}
        >
          Web Developer
        </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: ".5rem",
          border: "1px solid #383838",
          marginTop: "2rem",
          width: "100%",
        }}
      ></Box>
      <Box
        sx={{
          marginTop: "2rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        <Contacts heading="Email" contactInfo={userDetails.email} />
        <Contacts heading="Phone" contactInfo={userDetails.phone} />
        <Contacts heading="Birthday" contactInfo={userDetails.Birthday} />
        <Contacts heading="Location" contactInfo={userDetails.location} />
      </Box>
    </Card>
  );
};

export default ProfileBox;
