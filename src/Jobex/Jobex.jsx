import "./Jobex.scss";
const Jobex = () => {
  return (
    <div>
      <div className="row d-flex">
        <div className="col flex-1 d-flex flex-column align-items-center">
          <img
            className="logoimg"
            src="https://media-exp1.licdn.com/dms/image/C4E0BAQG27-VyGjNVIg/company-logo_200_200/0/1659035313590?e=1670457600&v=beta&t=S7mYIxgUA24TOH2hLME6TMklTAjRAJ9Nc-f8ozuujgU"
          />

          <h2>Web Developer</h2>
          <h4>ELEV8 / Efficacy Group</h4>
          <h6>May 2021- November 2021</h6>
          <p>
            ▪ Created accessible, responsive, and functional websites based on
            client requests
          </p>
          <p>
            {" "}
            ▪ Implemented functional online stores allowing visitors on any
            device to have consistent, perfect user experience
          </p>
          <p>▪ Applied custom CSS3 and HTML5 to address exact customer needs</p>
        </div>
        <div className="col flex-1 d-flex flex-column align-items-center ">
          <img
            className="logoimg"
            src="https://imaschelling.com/fileadmin/isg/user_upload/02_unternehmen/ueber_isg/logo_isg_.png"
          />
          <h2>Intern</h2>
          <h4>IMA Schelling Group</h4>
          <h6>June 2019- August 2019</h6>
          <p>▪ Improved sales by helping to create online store </p>
          <p>
            ▪ Analyzed existing website content for branding, marketing visuals,
            and digital formats
          </p>
          <p>
            ▪ Created, organized, and uploaded hundreds of new digital images to
            online store to drive sales/inquiries/orders
          </p>
        </div>
        <div className="col flex-1 d-flex flex-column align-items-center ">
          <img
            className="logoimg"
            src="https://cdn-images-1.medium.com/max/280/1*0A4W87i422M85QJv5ILVpw@2x.png"
          />
          <h2>Driver</h2>
          <h4> Uber</h4>
          <h6>March 2020- On Going</h6>
          <p>▪ Bring highly professional attitude and communication skills to ensure a great customer experience, After 400+ rides, maintained a 5-star rider rating</p>
          <p>
            ▪ Implemented ride selection strategy to maximize compensation while minimizing fuel consumption
          </p>
          
        </div>
        <div className="col flex-1 d-flex flex-column align-items-center">
          <img className="logoimg" src={require("./dbdblacksquare.png")} />
          <h2>Founder/ Producer</h2>
          <h4>DBD Productions</h4>
          <h6>July 2016- On Going</h6>
          <p>
            ▪ Create and sell instrumental “beats” on dirtbowldan.github.io that artists can use for a variety of genres.
          </p>
          <p>
            ▪ Operate a fee-based recording studio where clients come to collaborate, record, and recieve feedback about their projects
          </p>
          <p>
            ▪ Increased streams, monthly listeners, followers and music quality for all clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jobex;
