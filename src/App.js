import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resume from "./pages/resume/Page";
import Contact from "./pages/contact/Page";
import { Container, Card } from "@mui/material";
import ProfileBox from "./components/ProfileBox";
import Projects from "./pages/projects/Page";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Container
      sx={{
        maxWidth: "none !important",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: { xs: "column", sm: "row" },
        gap: "1rem",
        backgroundColor: "#121212",
        height: "100vh",
        padding: { xs: "1rem", sm: "2rem"},
      }}
    >
      <ProfileBox />
      <Card
        sx={{
          height: "100%",
          boxSizing: "border-box",
          borderRadius: "1rem",
          border: "1px solid #383838",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
          backgroundColor: "#1e1e1f",
          flex: "3",
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Card
            sx={{
              height: "100%",
              boxSizing: "border-box",
              padding: ".5rem 0rem 4rem 2rem",
              borderRadius: "1rem",
              border: "1px solid #383838",
              boxShadow: "0 0 10px 0 rgba(0,0,0,0.5)",
              backgroundColor: "#1e1e1f",
            }}
          >
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Card>
        </BrowserRouter>
      </Card>
    </Container>
  );
}

export default App;
