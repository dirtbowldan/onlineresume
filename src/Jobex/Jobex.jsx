import "./Jobex.scss";
const Jobex = () => {
  return (
    <div>
      <div className="row">
        <div className="col d-flex flex-column align-items-center">
          <div>
            <img
              height={150}
              src="https://media-exp1.licdn.com/dms/image/C4E0BAQG27-VyGjNVIg/company-logo_200_200/0/1659035313590?e=1670457600&v=beta&t=S7mYIxgUA24TOH2hLME6TMklTAjRAJ9Nc-f8ozuujgU"
            />
          </div>
          <h2>Web Developer</h2>
          <h4> ELEV8 / Efficacy Group</h4>
          <h6>May 2021- November 2021</h6>
          <p>
            ▪ Designed professional websites for clients using a variety of HTML
            and CSS inside of Wordpress{" "}
          </p>
          <p>
            {" "}
            ▪ Politely interacted with clients to understand what they were
            looking for in their site{" "}
          </p>
          <p>
            ▪ Applied custom CSS and HTML to fit the customers needs exactly
          </p>
        </div>
        <div className="col d-flex flex-column align-items-center ">
          <img
            height={150}
            src="https://imaschelling.com/fileadmin/isg/user_upload/02_unternehmen/ueber_isg/logo_isg_.png"
          />
          <h2>Intern</h2>
          <h4>IMA Schelling Group</h4>
          <h6>June 2019- August 2019</h6>
          <p>▪ Improved sales by helping to create online store </p>
          <p>
            {" "}
            ▪ Took and digitally formatted pictures of products to be put on
            website{" "}
          </p>
          <p>▪ Provided support where ever possible</p>
        </div>
        <div className="col d-flex flex-column align-items-center ">
          <img
            height={150}
            src="https://cdn-images-1.medium.com/max/280/1*0A4W87i422M85QJv5ILVpw@2x.png"
          />
          <h2>Driver</h2>
          <h4> Uber</h4>
          <h6>March 2020- On Going</h6>
          <p>▪ Side job started during pandemic for extra money</p>
          <p>
            ▪ Developed a system to maximize profits while using the least
            amount of gas
          </p>
          <p>
            ▪ Great people skills shown through hundreds of rides with only two
            ratings lower than 5 stars
          </p>
        </div>
        <div className="col d-flex flex-column align-items-center">
          <img
            height={150}
            src="https://pbs.twimg.com/profile_banners/2350481224/1652208475/1500x500"
          />
          <h2>Founder/ Producer</h2>
          <h4>DBD Productions</h4>
          <h6>July 2016- On Going</h6>
          <p>
            ▪ Make instrumentals from scratch, mix and master music for a
            variety of music genres
          </p>
          <p>
            ▪ Run a studio for people to record vocals and improve their music
          </p>
          <p> ▪ Responsible for around 24,000 plays gained and around 400 monthly listeners</p>
        </div>
      </div>
    </div>
  );
};

export default Jobex;
