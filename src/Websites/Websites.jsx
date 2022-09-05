import "./Websites.scss";

const Websites = () => {
  return (
    <main id="app">
      <section class="cards">
        <a href="https://dirtbowldan.github.io/index1.html" target="_blank" class="card charizard animated">
          
          <div className="webcard dbd">
            <h4>DBD Production</h4>
            <h5>Official Website for DBD Productions</h5>
            <h6>Made with HTML, CSS, Javascript</h6>
          </div>
        </a>
        <a  class="card pika animated">
          <div className="webcard poke">
            <h4>Pokemon Sim</h4>
            <h5>Simulates a Pokemon Game</h5>
            <h6>Made with HTML, CSS, Javascript</h6>
            <h6>In development</h6>
          </div>
        </a>
        <a href="https://proxymusicdisc.web.app/" target="_blank" class="card eevee animated">
          <div  className="webcard proxy">
            <h4>Proxy Music</h4>
            <h5>Music Discovery and Database</h5>
            <h6>Made with React, Node.js, Firebase</h6>
          </div>
        </a>
      
      </section>

      <style class="hover"></style>
    </main>
  );
};

export default Websites;
