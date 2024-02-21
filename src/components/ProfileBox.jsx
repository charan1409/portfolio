import { Box, Typography, useMediaQuery } from "@mui/material";
import Contacts from "./Contacts";
import userDetails from "../Data";

const ProfileBox = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <>
      {isMobile ? (
        <Box
          sx={{
            height: "250px",
            width: "100%",
            display: "flex",
            flex: "1",
            alignItems: "center",
            gap: "20px",
            justifyContent: "flex-start",
            borderRadius: "1rem",
            border: "1px solid #383838",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
            backgroundColor: "#1e1e1f",
          }}
        >
          <Box
            sx={{
              borderRadius: "1rem",
              border: "1px solid #383838",
              backgroundColor: "#373737",
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2.5rem",
              marginBottom: "2.5rem",
              marginLeft: "1rem",
            }}
          >
            <img
              src={userDetails.profilePic}
              alt="My pic"
              width={100}
              height={100}
            />
          </Box>
          <Box>
            <Typography
              variant="h5"
              component="h5"
              sx={{
                color: "#fff",
                marginBottom: ".5rem",
                fontSize: "1.2rem",
                fontWeight: "700",
              }}
            >
              {userDetails.name}
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                color: "#bababb",
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              {userDetails.email}
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                color: "#bababb",
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              {userDetails.phone}
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              sx={{
                color: "#bababb",
                fontSize: "1rem",
                fontWeight: "700",
              }}
            >
              {userDetails.location}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: "100%",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            flex: "1",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 1rem",
            borderRadius: "1rem",
            border: "1px solid #383838",
            boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
            backgroundColor: "#1e1e1f",
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
          <Typography
            variant="h5"
            component="h5"
            sx={{
              color: "#fdfdfd",
              marginBottom: "1rem",
              fontSize: "1.2rem",
              fontWeight: "700",
            }}
          >
            {userDetails.title}
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
            <Contacts
              heading="Experience"
              contactInfo={userDetails.experience}
            />
            <Contacts heading="Location" contactInfo={userDetails.location} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default ProfileBox;
