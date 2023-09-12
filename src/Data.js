import spotify from "./components/images/spotify.png";
import avatar from "./components/images/my-avatar.png";

const userDetails = {
  name: "Sai Charan",
  email: "charan@gmail.com",
  phone: "1234567890",
  location: "Chennai, India",
  Birthday: "01/01/2000",
  profilePic: avatar,
  education: [
    {
      label: "Indian Institute of Technology and Technology, Sricity",
      description: `Bachelor of Technology - BTech, Computer Science and Engineering
                        · (2020 - 2024)`,
    },
    {
      label: "Sasi Junior College",
      description: "Mathematics, Physics, Chemistry · (2018 - 2020)",
    },
    {
      label: "Sasi High School",
      description: `· (2016 - 2018)`,
    },
  ],
  experience: [
    {
      label: "Microsoft",
      description: `Software Engineer Intern
                        · (2020 - 2024)`,
    },
    {
      label: "Google",
      description: "Software Engineer Intern · (2018 - 2020)",
    },
    {
      label: "Amazon",
      description: `Software Engineer Intern
                        · (2016 - 2018)`,
    },
  ],
  projects: [
    {
        title: "Project 1",
        description: "Web Development",
        imageLink: spotify,
        repoLink: "",
    },
    {
        title: "Project 2",
        description: "Web Development",
        imageLink: "https://source.unsplash.com/random",
        repoLink: "",
    },
  ]
};

export default userDetails;
