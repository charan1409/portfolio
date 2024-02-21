import spotify from "./components/images/spotify.png";
import avatar from "./components/images/my-avatar.png";
import pub from "./components/images/pub.png";
import OOP from "./components/images/OOP.jpeg";

const userDetails = {
  name: "K Charan Kumar",
  email: "charankallempudi20@gmail.com",
  phone: "+919392756484",
  location: "Sricity, India",
  experience: "Fresher",
  profilePic: avatar,
  about: `I am a Computer Science student at IIT Sricity. I am passionate about web development and I love to learn new things. I am a quick learner and I am always ready to take up new challenges. I am a team player and I love to work in a team. I am a self-motivated person and I am always ready to take up new challenges.`,
  resumeDriveLink: "https://drive.google.com/file/d/1ofgoG05S-JaOiPu500c6y32-Qb-jDDBg/view?usp=sharing",
  education: [
    {
      label: "Indian Institute of Technology and Technology, Sricity",
      description: `BTech, Computer Science and Engineering
                        · (2020 - 2024)`,
    },
    {
      label: "Sasi Junior College, Velivennu",
      description: "Intermediate - MPC · (2018 - 2020)",
    },
    {
      label: "Sasi Educational Institutions, Velivennu",
      description: `High school · (2016 - 2018)`,
    },
  ],
  experiences: [],
  projects: [
    {
      title: "Spotify Clone",
      description: "Web Development",
      imageLink: spotify,
      repoLink: "https://github.com/charan1409/Spotify-clone-using-Nextjs",
      webURL: "https://spotify-clone-roan-gamma.vercel.app/",
    },
    {
      title: "Pack Ur Bags",
      description: "Web Development",
      imageLink: pub,
      repoLink: "https://github.com/charan1409/pack-ur-bags",
      webURL: "https://frontend-packurbags.onrender.com/",
    },
    {
      title: "BusHub CLI",
      description: "Java",
      imageLink: OOP,
      repoLink: "https://github.com/charan1409/OOP-s-Java-mini-project",
    }
  ],
};

export default userDetails;
