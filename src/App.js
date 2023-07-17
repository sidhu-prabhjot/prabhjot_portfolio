import "./App.css";
import { useRef, useEffect, useState } from "react";

import Particles from "react-particles";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Fade } from "react-awesome-reveal";
import { Dna, Comment } from "react-loader-spinner";
import {
  Code,
  GitHub,
  GitPullRequest,
  Instagram,
  Linkedin,
  Mail,
} from "react-feather";
import copy from "clipboard-copy";

import WorkCardBig from "./components/WorkCardBig";
import WorkCardSmall from "./components/WorkCardSmall";
import TabComponent from "./components/TabComponent";
import Burger from "./components/Burger";
import Menu from "./components/Menu";

//burger menu functionality
const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

function App() {
  //opening and closing burger menu tracking with boolenas
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  const particleOptions = {
    preset: "stars",
  };

  const customInit = async (engine) => {
    // this adds the preset to tsParticles, you can safely use the
    const test = await loadStarsPreset(engine);
    return test;
  };

  const scroll1Ref = useRef(null);
  const scroll2Ref = useRef(null);
  const scroll3Ref = useRef(null);
  const scroll4Ref = useRef(null);

  const handleClick = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  //arrays for tools to be passed to big card
  const toolArrayOmnifood = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "AWS(Amplify)",
    "Media Queries",
  ];
  const toolArrayMKP = ["Java", "Java Swing"];
  const toolArrayTicTacToe = ["Java", "jUnit", "Java Swing"];

  //arrays for tools to be passed to small card
  const toolArrayGSS = [
    "React Native",
    "Node",
    "Firebase(Authentication, Firestore)",
  ];
  const toolArrayMolecule = [
    "Python",
    "C",
    "SQL",
    "jQuery",
    "JavaScript",
    "HTML5",
    "CSS3",
  ];

  //fading in and out the copied notification
  const [visible, setVisible] = useState(false);

  const handleFadeClick = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 3000); // Adjust the duration as needed
  };

  //handling copying to clipboard
  const handleCopyClick = (text) => {
    copy(text);
    handleFadeClick();
  };
  return (
    <div className="app">
      <div className="header">
        <div className="boxes-container">
          <div className="box-grid">
            <div className="left-column">
              <div
                className="nav-box about-me-box"
                onClick={() => handleClick(scroll1Ref)}
              >
                <p className="about-me-text nav-text">ABOUT ME</p>
                <div className="nav-animation">
                  <Dna
                    visible={true}
                    height="100"
                    width="100"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                    className="nav-animation"
                  />
                </div>
              </div>
            </div>
            <div className="right-column">
              <div
                className="nav-box skills-box"
                onClick={() => handleClick(scroll3Ref)}
              >
                <p className="about-me-text nav-text">SKILLS</p>
                <div className="nav-animation">
                  <Code className="nav-icon" />
                </div>
              </div>
              <div
                className="nav-box contact-me-box"
                onClick={() => handleClick(scroll4Ref)}
              >
                <p className="about-me-text nav-text">CONTACT ME</p>
                <div className="nav-animation">
                  <Comment
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="white"
                    backgroundColor="grey"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="nav-box work-box"
            onClick={() => handleClick(scroll2Ref)}
          >
            <p className="about-me-text nav-text">MY WORK</p>
            <div className="nav-animation">
              <GitPullRequest className="nav-icon" />
            </div>
          </div>
        </div>
        <div className="bio-container">
          <div className="text-container">
            <div className="hero-text-container">
              <Fade duration="2000">
                <p className="hero-text">
                  Prabhjot Sidhu.<br></br>
                </p>
                <p className="hero-subtext">
                  i make stuff for the web and more
                </p>
              </Fade>
            </div>
            <div className="snippet-text-container">
              <Fade duration="2000">
                <p className="snippet">
                  {" "}
                  Hey there, I'm Prabhjot Sidhu, a tech enthusiast with a love
                  for both soccer and space! 🚀⚽️ When I'm not exploring the
                  wonders of Java, JavaScript, React.js, and other tech realms,
                  I'm cheering on my favorite team, Barcelona, and marveling at
                  the brilliance of Lionel Messi on the field.<br></br>
                  <br></br> But that's not all that fascinates me. The boundless
                  possibilities of space and the drive for innovation have me
                  stargazing with wonder. 🌌🌟 The mysteries of the cosmos
                  ignite my curiosity just as much as crafting user-friendly
                  websites and pushing the boundaries of technology.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div className="about-me-section" ref={scroll1Ref}>
        <div className="about-me-container">
          <div className="title-text-container">
            <Fade duration="2000">
              <p className="hero-text">
                About Me<br></br>
              </p>
              <p className="hero-subtext">a little bit more context</p>
            </Fade>
          </div>
          <div className="about-me-text-container">
            <Fade duration="2000">
              <p className="snippet">
                Hey there, I'm Prabhjot Sidhu! 👋 A tech enthusiast with a
                passion for building awesome stuff! With my background in
                various programming languages and markups allowing me to craft
                dynamic and user-friendly applications that leave a lasting
                impression. I've got a bunch of exciting projects under my belt,
                like Omnifood, a mouth-watering restaurant service website I
                developed using JavaScript, HTML, and CSS. Hosting it on AWS
                Amplify was the cherry on top! 🍒
                <br></br>
                <br></br> Currently pursuing a Bachelor of Computing with a
                major in Computer Science at the University of Guelph, I'm
                always hungry for knowledge and aiming high with an 89% average.
                On the side, I'm even exploring new horizons with a minor in
                Marketing!<br></br>
                <br></br> So, if you're looking for a tech-savvy, enthusiastic
                collaborator, I'm your guy! Let's team up and create some
                digital wonders together, shall we? 🚀
              </p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="my-work-section" ref={scroll2Ref}>
        <div className="row row-1">
          <div className="work-container major-container work-1">
            <WorkCardBig
              title="Omnifood"
              color="#F5F5F5"
              link="https://main.d2ecusiwln5psq.amplifyapp.com/"
              linkText="open website"
              start="December 2022"
              end="February 2023"
              point1="Developed an aesthetic, user-friendly, restaurant service website"
              point2="Designed to be responsive and scale to different screen sizes using jMediaQuery"
              point3="Hosted on the web using AWS Amplify hosting service"
              tools={toolArrayOmnifood}
            ></WorkCardBig>
          </div>
          <div className="work-container minor-container work-2">
            <WorkCardSmall
              title="Guelph Sikh Society"
              color="#F5F5F5"
              link="https://github.com/sidhu-prabhjot/guelphsikhsociety"
              linkText="open github repo"
              start="June 2019"
              end="April 2020"
              point1="Developed an app for communication between the council and community using React Native"
              point2="Designed and created a dynamic user interface that can update and authenticate users with Google Firebase"
              point3="Worked with the Guelph Sikh Society council collaboratively to design, implement, and test features"
              tools={toolArrayGSS}
            ></WorkCardSmall>
          </div>
        </div>
        <div className="row row-2">
          <div className="work-container minor-container work-3">
            <WorkCardSmall
              title="3D Molecules"
              color="#F5F5F5"
              link="https://github.com/sidhu-prabhjot/3d-molecule-application"
              linkText="open github rep"
              start="January 2022"
              end="April 2023"
              point1="Developed a Python server that handled Get/Post requests and accessed an SQLite database of molecule data"
              point2="Front-End was developed using JavaScript, JQuery, HTML, and CSS and allowed the user to upload molecule data, view the molecule, and delete it"
              point3="Molecule SDF files were parsed using C and molecule SVGs were returned"
              tools={toolArrayMolecule}
            ></WorkCardSmall>
          </div>
          <div className="work-container major-container work-4">
            <WorkCardBig
              title="MKP Salon"
              color="#f05454"
              link="https://github.com/sidhu-prabhjot/MKP-Salon-App"
              linkText="open github repo"
              start="November 2022"
              end="January 2023"
              point1="Designed an appointment, customer, and financial records-keeping application for MKP Salon"
              point2="Developed using Netbeans GUI with Java and object-oriented programming principles"
              point3="Reduced MKP Salon’s reliance on paper records and increased record-keeping speed"
              tools={toolArrayMKP}
            ></WorkCardBig>
          </div>
        </div>
        <div className="row row-3">
          <div className="work-container minor-container work-5">
            <WorkCardBig
              title="Tic-Tac-Toe"
              color="#F5F5F5"
              linkText="not available"
              start="December 2022"
              end="December 2022"
              point1="Developed using Java OOP principles with a  Java Swing GUI"
              point2="Test-driven development using JUnit unit tests with 90% coverage per class"
              tools={toolArrayTicTacToe}
            ></WorkCardBig>
          </div>
          <div className="work-container minor-container work-6">
            <WorkCardSmall
              title="SocialQ (Coming Soon)"
              color="grey"
            ></WorkCardSmall>
          </div>
        </div>
      </div>
      <div className="skills-section" ref={scroll3Ref}>
        <div className="skills-container">
          <div className="skill-title-container-first">
            <Fade duration="2000">
              <p className="hero-text">
                My Expertise<br></br>
              </p>
              <p className="hero-subtext">the technology I leverage</p>
            </Fade>
          </div>
          <div className="skills-grid">
            <TabComponent></TabComponent>
            {/* <div className="skills-left-column">languages</div>
            <div className="skills-right-column">
              <div className="cloud-container">Frameworks</div>
              <div className="dev-tools-container">Dev Tools</div>
            </div> */}
          </div>
          <div className="skill-title-container">
            <Fade duration="2000">
              <p className="hero-text">
                My Expertise<br></br>
              </p>
              <p className="hero-subtext">the technology I leverage</p>
            </Fade>
          </div>
        </div>
      </div>
      <div className="contact-section" ref={scroll4Ref}>
        <div className="contact-container">
          <div className="small-title-container">
            <p className="small-title">Get In Touch!</p>
          </div>
          <div className="statement-container">
            <p className="hero-text">
              Have Any Questions Or Want To Collaborate On A Project? Feel Free
              To DM, Email, Or Text Me!
            </p>
            <div className="button-grid">
              <div className="contact-row">
                <div
                  className="button mail-button"
                  onClick={() =>
                    handleCopyClick("sidhu.prabhjot.2003@gmail.com")
                  }
                >
                  <Mail className="button-text mail"></Mail>
                  <p className="button-link mail-text">
                    sidhu.prabhjot.2003@gmail.com
                  </p>
                </div>
                <div
                  className="button github-button"
                  onClick={() => handleCopyClick("sidhu-prabhjot")}
                >
                  <GitHub className="button-text github"></GitHub>
                  <p className="button-link github-text">sidhu-prabhjot</p>
                </div>
                <div
                  className=" button linkedin-button"
                  onClick={() => handleCopyClick("Prabhjot Sidhu")}
                >
                  <Linkedin className="button-text linkedin"></Linkedin>
                  <p className="button-link linkedin-text">Prabhjot Sidhu</p>
                </div>
                <div
                  className=" button instagram-button"
                  onClick={() => handleCopyClick("prabhjotsidhu123")}
                >
                  <Instagram className="button-text instagram"></Instagram>
                  <p className="button-link instagram-text">prabhjotsidhu123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={node} className="burger-menu">
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <div>
        {visible && (
          <div className="copy-notification fade-in-out">
            <p>contact information copied to clipboard!</p>
          </div>
        )}
      </div>
      <Particles
        className="particles"
        options={particleOptions}
        init={customInit}
      />
    </div>
  );
}

export default App;
