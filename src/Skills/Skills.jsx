import "./Skills.scss";

const Skills = () => {
  return (
    <div className="slcont">
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img
              src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/01/html5-css3.jpg?resize=498%2C249&ssl=1"
              height="80"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://copm.s3.amazonaws.com/189aa059.png"
              height="90"
              width="90"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
              height="100"
              width="150"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="data:image/jpeg;base64,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"
              height="90"
              width="80"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
              height="90"
              width="50"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
              height="90"
              width="150"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://cdn-media-1.freecodecamp.org/images/0*CPTNvq87xG-sUGdx.png"
              height="100"
              width="110"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="data:image/png;base64,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"
              height="100"
              width="200"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://preview.redd.it/o6nmp1yapck21.jpg?auto=webp&s=8881e3a2eee3a765980b4a7e7d3a23f5fda6c112"
              height="90"
              width="90"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
              height="90"
              width="100"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://miro.medium.com/max/540/1*7e9D-oPWPIKBe2AQv862aA.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
          <div class="slide">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
              height="100"
              width="250"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <h3>Programming Languages</h3>
          <ul>
            <li>HTML5/CSS3 (Bootstrap) - 2.5 years</li>
            <li>Javascript(React/Babel) - 1.5 years</li>
            <li>Python - 1 year </li>
            <li>SQL/noSq - 1 year</li>
            <li>Java 1- year</li>
            <li>Node.js - 1 year</li>
            <li>Ruby - .5 year</li>
            <li>C#/C++ - 1 year</li>
          </ul>
        </div>
        <div className="col d-flex flex-column align-items-center justify-content-center">
          <h3>Software</h3>
          <ul>
            <li>Microsoft Visual Studio Code - 4 years</li>
            <li>Unity Game Engine - 1 year</li>
            <li>Microsoft Office - 4 years </li>
            <li>FL Studio - 6 years</li>
            <li>Firebase - 2 years</li>
            <li>Wordpress/Wix - 2 years</li>
            
          </ul>
        </div>
        
      </div>
    </div>
  );
};
export default Skills;
