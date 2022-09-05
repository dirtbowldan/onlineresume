import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav class="navbar justify-content-center fixed-top navbar-dark bg-dark">
        <h2 >Brendan Fusik's Online Resume</h2>
        <div className="row">
          <div className="audio">
            <p>Turn on Audio</p> <button>Click here</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
