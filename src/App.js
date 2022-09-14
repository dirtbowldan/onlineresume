import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";
import Navbar from "./Navbar/Navbar";
import Education from "./Education/Education";
import Personal from "./Personal/Personal";
import Skills from "./Skills/Skills";
import Jobex from "./Jobex/Jobex";
import Websites from "./Websites/Websites";
import Typewriter from "typewriter-effect"
function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="ucontainer">
        <h2>Personal Info</h2>
        <hr></hr>
        <div className="row">
          <Personal />
        </div>
      </div>
      <div className="ucontainer">
        <h2>Education</h2>
        <hr></hr>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Education
              gpa="3.0"
              degree={"Bachelors Degree"}
              major={"Computer Science"}
              textcolor={"rgb(255, 255, 255)"}
              school="UNC Chapel Hill"
              bgcolor={"rgb(55, 137, 185)"}
              image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/North_Carolina_Tar_Heels_logo.svg/200px-North_Carolina_Tar_Heels_logo.svg.png"
              }
            />
          </div>
          <div className="col d-flex justify-content-center">
            <Education
              gpa="5.1"
              degree={"High School"}
              textcolor={"rgb(255, 255, 255)"}
              school="Wakefield"
              bgcolor={"rgb(0, 0, 0)"}
             
              image={
                "https://www.wcpss.net/cms/lib/NC01911451/Centricity/Template/GlobalAssets/images///logos/WakefieldHigh.gif"
              }
            />
          </div>
        </div>
      </div>
      <div className="ucontainer">
        <h2>Skills</h2>
        <hr></hr>
        <div className="rw">
          <Skills />
        </div>
      </div>

      <div className="ucontainer">
        <h2>Job Experience</h2>
        <hr></hr>
        <div className="">
          <Jobex />
        </div>
      </div>

      <div className="ucontainer">
        <h2>Projects</h2>
        <hr></hr>
        <div className="row">
          <Websites />
        </div>
      </div>
    </div>
  );
}

export default App;
